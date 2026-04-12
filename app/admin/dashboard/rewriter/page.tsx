'use client'

import { useState, useEffect, useCallback } from 'react'
import { slugify } from '@/lib/utils'

interface Persona {
  id: string
  name: string
  slug: string
  prompt: string
  is_active: boolean
}

interface RewriteResult {
  persona_name: string
  post_id?: string
  slug?: string
  preview?: string
  summary?: string
  seed?: string
  error?: string
  success: boolean
}

interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  published: boolean
}

export default function RewriterPage() {
  const [articleText, setArticleText] = useState('')
  const [title, setTitle] = useState('')
  const [rewriting, setRewriting] = useState(false)
  const [results, setResults] = useState<RewriteResult[] | null>(null)
  const [rewriteError, setRewriteError] = useState('')

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  const [personas, setPersonas] = useState<Persona[]>([])
  const [personasLoading, setPersonasLoading] = useState(true)
  const [personasOpen, setPersonasOpen] = useState(false)

  const [editingPersona, setEditingPersona] = useState<Persona | null>(null)
  const [showPersonaForm, setShowPersonaForm] = useState(false)
  const [personaForm, setPersonaForm] = useState({ name: '', slug: '', prompt: '' })
  const [personaSaving, setPersonaSaving] = useState(false)

  const fetchPersonas = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/publication-personas')
      if (!res.ok) throw new Error('Failed to load personas')
      const data = await res.json()
      setPersonas(data)
    } catch {
      // silent
    } finally {
      setPersonasLoading(false)
    }
  }, [])

  const fetchBlogPosts = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/blog')
      if (!res.ok) return
      const data = await res.json()
      setBlogPosts(data)
    } catch {
      // silent
    }
  }, [])

  useEffect(() => {
    fetchPersonas()
    fetchBlogPosts()
  }, [fetchPersonas, fetchBlogPosts])

  const activeCount = personas.filter((p) => p.is_active).length

  async function handleRewrite() {
    setRewriting(true)
    setResults(null)
    setRewriteError('')
    try {
      const res = await fetch('/api/admin/rewriter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ article_text: articleText, title }),
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.error || 'Rewrite failed')
      }
      const data = await res.json()
      setResults(data.results)
    } catch (err) {
      setRewriteError(err instanceof Error ? err.message : 'Rewrite failed')
    } finally {
      setRewriting(false)
    }
  }

  function handleSelectBlogPost(postId: string) {
    const post = blogPosts.find((p) => p.id.toString() === postId)
    if (post) {
      setTitle(post.title)
      const text = post.content.replace(/<[^>]*>/g, '').trim()
      setArticleText(text)
    }
  }

  function openNewPersona() {
    setEditingPersona(null)
    setPersonaForm({ name: '', slug: '', prompt: '' })
    setShowPersonaForm(true)
  }

  function openEditPersona(p: Persona) {
    setEditingPersona(p)
    setPersonaForm({ name: p.name, slug: p.slug, prompt: p.prompt })
    setShowPersonaForm(true)
  }

  async function savePersona() {
    setPersonaSaving(true)
    try {
      if (editingPersona) {
        const res = await fetch(`/api/admin/publication-personas/${editingPersona.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: personaForm.name, prompt: personaForm.prompt }),
        })
        if (!res.ok) throw new Error('Failed to update')
      } else {
        const res = await fetch('/api/admin/publication-personas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(personaForm),
        })
        if (!res.ok) throw new Error('Failed to create')
      }
      setShowPersonaForm(false)
      fetchPersonas()
    } catch {
      // silent
    } finally {
      setPersonaSaving(false)
    }
  }

  async function togglePersonaActive(p: Persona) {
    await fetch(`/api/admin/publication-personas/${p.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_active: !p.is_active }),
    })
    fetchPersonas()
  }

  async function deletePersona(p: Persona) {
    if (!confirm(`Delete persona "${p.name}"?`)) return
    await fetch(`/api/admin/publication-personas/${p.id}`, { method: 'DELETE' })
    fetchPersonas()
  }

  return (
    <div className="space-y-8">
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-xl font-semibold mb-4">Publication Rewriter</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Paste an article to rewrite it in the voice of all active publication personas.
          Each version is saved as a draft blog post.
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Select from blog posts (optional)</label>
            <select
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              onChange={(e) => handleSelectBlogPost(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>— Select a blog post to populate —</option>
              {blogPosts.map((post) => (
                <option key={post.id} value={post.id}>
                  {post.title} {post.published ? '' : '(draft)'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Working title</label>
            <input
              type="text"
              className="w-full rounded-md border bg-background px-3 py-2 text-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. The Future of AI in Education"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Article text</label>
            <p className="text-xs text-muted-foreground mb-2">Paste the article you want to rewrite.</p>
            <textarea
              className="w-full rounded-md border bg-background px-3 py-2 text-sm font-mono"
              style={{ minHeight: '300px' }}
              value={articleText}
              onChange={(e) => setArticleText(e.target.value)}
              placeholder="Paste your article here..."
            />
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!articleText.trim() || !title.trim() || rewriting}
            onClick={handleRewrite}
          >
            {rewriting
              ? `Rewriting for ${activeCount} publications... this takes 30–60 seconds`
              : `Rewrite for all publications →`}
          </button>

          {rewriteError && <p className="text-sm text-red-600 dark:text-red-400">{rewriteError}</p>}
        </div>
      </div>

      {results && (
        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold mb-4">Results</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {results.map((r, i) => (
              <div
                key={i}
                className={`rounded-lg border-2 p-4 ${
                  r.success
                    ? 'border-green-500/50 bg-green-50 dark:bg-green-950/20'
                    : 'border-red-500/50 bg-red-50 dark:bg-red-950/20'
                }`}
              >
                <h3 className="font-semibold mb-2">{r.persona_name}</h3>
                {r.success ? (
                  <>
                    <div className="space-y-2 mb-3">
                      <div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Article preview</span>
                        <p className="text-sm text-muted-foreground line-clamp-3 mt-0.5">{r.preview}...</p>
                      </div>
                      {r.summary && (
                        <div>
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Summary</span>
                          <p className="text-sm mt-0.5">{r.summary}</p>
                        </div>
                      )}
                      {r.seed && (
                        <div className="rounded bg-muted/40 p-2 border border-dashed">
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Seed</span>
                          <p className="text-sm mt-0.5 italic">{r.seed}</p>
                        </div>
                      )}
                    </div>
                    <a href="/admin/dashboard/blog" className="inline-flex items-center text-sm font-medium underline underline-offset-4">
                      Edit draft →
                    </a>
                  </>
                ) : (
                  <p className="text-sm text-red-600 dark:text-red-400">{r.error}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="rounded-lg border bg-card">
        <button
          className="w-full p-6 text-left flex items-center justify-between"
          onClick={() => setPersonasOpen(!personasOpen)}
        >
          <h2 className="text-xl font-semibold">Manage Personas ({personas.length})</h2>
          <span className="text-muted-foreground">{personasOpen ? '▼' : '▶'}</span>
        </button>

        {personasOpen && (
          <div className="px-6 pb-6 space-y-4">
            {personasLoading ? (
              <p className="text-sm text-muted-foreground">Loading...</p>
            ) : (
              <>
                {personas.map((p) => (
                  <div key={p.id} className="flex items-center justify-between gap-4 rounded-md border p-3">
                    <div className="flex items-center gap-3">
                      <span className={`inline-block h-2 w-2 rounded-full ${p.is_active ? 'bg-green-500' : 'bg-gray-400'}`} />
                      <span className="font-medium text-sm">{p.name}</span>
                      <span className="text-xs text-muted-foreground">({p.slug})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-xs px-2 py-1 rounded border hover:bg-muted" onClick={() => togglePersonaActive(p)}>
                        {p.is_active ? 'Deactivate' : 'Activate'}
                      </button>
                      <button className="text-xs px-2 py-1 rounded border hover:bg-muted" onClick={() => openEditPersona(p)}>Edit</button>
                      <button className="text-xs px-2 py-1 rounded border text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20" onClick={() => deletePersona(p)}>Delete</button>
                    </div>
                  </div>
                ))}

                {!showPersonaForm && (
                  <button className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted" onClick={openNewPersona}>
                    + Add publication
                  </button>
                )}

                {showPersonaForm && (
                  <div className="rounded-md border p-4 space-y-3">
                    <h3 className="font-semibold text-sm">{editingPersona ? `Edit: ${editingPersona.name}` : 'New Publication Persona'}</h3>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Name</label>
                      <input
                        type="text"
                        className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                        value={personaForm.name}
                        onChange={(e) => {
                          const name = e.target.value
                          setPersonaForm((f) => ({ ...f, name, slug: editingPersona ? f.slug : slugify(name) }))
                        }}
                        placeholder="e.g. MIT Technology Review"
                      />
                    </div>
                    {!editingPersona && (
                      <div>
                        <label className="text-sm font-medium mb-1 block">Slug</label>
                        <input
                          type="text"
                          className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                          value={personaForm.slug}
                          onChange={(e) => setPersonaForm((f) => ({ ...f, slug: e.target.value }))}
                          placeholder="auto-generated"
                        />
                      </div>
                    )}
                    <div>
                      <label className="text-sm font-medium mb-1 block">Prompt (style guide)</label>
                      <textarea
                        className="w-full rounded-md border bg-background px-3 py-2 text-sm font-mono"
                        style={{ minHeight: '400px' }}
                        value={personaForm.prompt}
                        onChange={(e) => setPersonaForm((f) => ({ ...f, prompt: e.target.value }))}
                        placeholder="You are rewriting an article for..."
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="inline-flex items-center rounded-md bg-black text-white dark:bg-white dark:text-black px-3 py-1.5 text-sm font-medium disabled:opacity-50"
                        disabled={!personaForm.name || !personaForm.prompt || personaSaving}
                        onClick={savePersona}
                      >
                        {personaSaving ? 'Saving...' : 'Save'}
                      </button>
                      <button className="inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-muted" onClick={() => setShowPersonaForm(false)}>
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
