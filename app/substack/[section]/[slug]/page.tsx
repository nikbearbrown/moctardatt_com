import Link from 'next/link'
import { notFound } from 'next/navigation'
import { sql } from '@/lib/db'

export const dynamic = 'force-dynamic'

export default async function SubstackArticlePage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>
}) {
  const { section, slug } = await params

  const sectionRows = await sql`SELECT * FROM substack_sections WHERE slug = ${section}`
  if (sectionRows.length === 0) notFound()
  const sectionData = sectionRows[0]

  const articleRows = await sql`
    SELECT * FROM substack_articles WHERE section_id = ${sectionData.id} AND slug = ${slug}
  `
  if (articleRows.length === 0) notFound()
  const article = articleRows[0]

  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <Link
            href={`/substack/${section}`}
            className="text-sm text-muted-foreground hover:text-foreground mb-6 inline-block"
          >
            &larr; Back to {sectionData.title}
          </Link>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className="text-xl text-muted-foreground mt-3">{article.subtitle}</p>
          )}
          {article.display_date && (
            <time className="text-sm text-muted-foreground block mt-4">
              {article.display_date}
            </time>
          )}
          {article.original_url && (
            <a
              href={article.original_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground underline mt-2 inline-block"
            >
              Read on Substack
            </a>
          )}
        </header>

        {article.content ? (
          <div
            className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-foreground prose-a:underline prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        ) : (
          <p className="text-muted-foreground">
            Content not available.{' '}
            {article.original_url && (
              <a href={article.original_url} target="_blank" rel="noopener noreferrer" className="underline">
                Read on Substack
              </a>
            )}
          </p>
        )}

        <div className="mt-16 pt-8 border-t flex items-center justify-between">
          <Link
            href={`/substack/${section}`}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            &larr; Back to {sectionData.title}
          </Link>
          <a
            href={sectionData.substack_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium bg-black text-white shadow hover:bg-gray-800 dark:border dark:border-input dark:bg-background dark:text-foreground dark:shadow-sm dark:hover:bg-accent dark:hover:text-accent-foreground"
          >
            Subscribe
          </a>
        </div>
      </div>
    </div>
  )
}
