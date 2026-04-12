import { NextRequest, NextResponse } from 'next/server'
import { sql } from '@/lib/db'
import { isAdmin } from '@/lib/admin-auth'
import { slugify } from '@/lib/utils'

interface Persona {
  id: string
  name: string
  slug: string
  prompt: string
}

export async function POST(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await req.json()
  const { article_text, title } = body

  if (!article_text || !title) {
    return NextResponse.json({ error: 'article_text and title are required' }, { status: 400 })
  }

  const apiKey = process.env.LLM_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'LLM_API_KEY is not configured' }, { status: 500 })
  }

  try {
    const personas = await sql`
      SELECT id, name, slug, prompt FROM publication_personas WHERE is_active = true ORDER BY name
    `

    if (personas.length === 0) {
      return NextResponse.json({ error: 'No active publication personas found' }, { status: 400 })
    }

    const results = await Promise.allSettled(
      personas.map(async (persona: Persona) => {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: 'claude-haiku-4-5-20251001',
            system: persona.prompt + '\n\nRespond with valid JSON only. Use this exact structure:\n{"title": "rewritten title", "article": "full rewritten article text", "summary": "2-3 sentence summary for publication submissions", "seed": "the core provocation — written as a directive to a writer, not a description of the article"}',
            messages: [{ role: 'user', content: article_text }],
            max_tokens: 4000,
          }),
        })

        if (!response.ok) {
          const errorText = await response.text()
          throw new Error(`Anthropic API error ${response.status}: ${errorText}`)
        }

        const data = await response.json()
        const rawText = data.content[0].text

        let parsed: { title?: string; article?: string; summary?: string; seed?: string }
        try {
          parsed = JSON.parse(rawText)
        } catch {
          parsed = { article: rawText }
        }

        const rewrittenTitle = parsed.title || title
        const rewrittenText = parsed.article || rawText
        const rewrittenSummary = parsed.summary || null
        const rewrittenSeed = parsed.seed || null

        const postSlug = slugify(`${persona.slug}-${title}-${Date.now()}`)
        const tags = [persona.slug, 'rewriter', 'source:rewriter']
        const byline = `Rewritten for ${persona.name} by Publication Rewriter`
        const postTitle = `[${persona.name}]: ${rewrittenTitle}`

        const rows = await sql`
          INSERT INTO blog_posts (title, slug, content, published, tags, byline, summary, seed_summary)
          VALUES (${postTitle}, ${postSlug}, ${rewrittenText}, false, ${tags}, ${byline}, ${rewrittenSummary}, ${rewrittenSeed})
          RETURNING id, slug
        `

        return {
          persona_name: persona.name,
          post_id: rows[0].id,
          slug: rows[0].slug,
          preview: rewrittenText.substring(0, 200),
          summary: rewrittenSummary,
          seed: rewrittenSeed,
        }
      }),
    )

    const output = results.map((result, i) => {
      if (result.status === 'fulfilled') {
        return { ...result.value, success: true }
      }
      return {
        persona_name: personas[i].name,
        error: result.reason instanceof Error ? result.reason.message : 'Unknown error',
        success: false,
      }
    })

    return NextResponse.json({ results: output, total: personas.length })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Database error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
