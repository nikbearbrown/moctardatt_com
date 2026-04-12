# CLAUDE.md — moctardatt.com

Personal site for **Moctar Datt**. Next.js 15 App Router, TypeScript, React 19.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript + React 19 |
| Styling | Tailwind CSS v3 + shadcn/ui |
| Database | Neon serverless PostgreSQL (`@neondatabase/serverless`) |
| Auth | HMAC SHA-256 session cookie (no JWT, no OAuth) |
| Rich text | Tiptap (StarterKit, Image, YouTube, Underline, Link, Placeholder) |
| Visualizations | D3.js v7, lazy dynamic imports via registry |
| Image uploads | Vercel Blob (`@vercel/blob`) |
| AI rewriter | Anthropic API (`claude-haiku-4-5`) |
| Notifications | sonner (admin), shadcn/ui toast (public) |
| Analytics | `@vercel/analytics` |
| Dark mode | next-themes |

---

## Color palette — snl (Pan-African tricolor)

Background: `#FFFFFF`

| Var | Hex | HSL | Role | WCAG on bg |
|-----|-----|-----|------|------------|
| `--p1` | `#000000` | `0 0% 0%` | black ink — primary text | AAA 21.0:1 |
| `--p2` | `#006030` | `150 100% 19%` | teranga green — primary accent | AAA 7.7:1 |
| `--p3` | `#A81520` | `356 78% 37%` | republic red — danger/emphasis | AAA 7.5:1 |
| `--p4` | `#FDEF42` | `56 98% 63%` | star gold — highlight/callout **bg-only** | FAIL 1.2:1 |
| `--p5` | `#333333` | `0 0% 20%` | charcoal — secondary text | AAA 12.6:1 |
| `--p6` | `#727272` | `0 0% 45%` | graphite — muted text | AA 4.6:1 |
| `--p7` | `#EBEBEB` | `0 0% 92%` | fog — borders, subtle bg | FAIL 1.1:1 |
| `--p8` | `#FFFFFF` | `0 0% 100%` | white — page background | — |

**Rules:**
- `p4` (star gold) is background-only — never put text of any color on it
- `p7` (fog) is background/border-only — never put text on it
- `p2` and `p3` meet AAA at all body text sizes; safe for headings, links, and buttons
- Dark mode brightens p2 → `150 70% 35%` and p3 → `356 65% 52%` to maintain contrast on dark bg

Tailwind token mapping (`globals.css` + `tailwind.config.ts`):
- `primary` → p2 teranga green
- `destructive` → p3 republic red
- `highlight` → p4 star gold
- `muted` / `border` / `input` → p7 fog
- `foreground` → p1 black
- `muted-foreground` → p6 graphite

---

## Environment variables

```bash
DATABASE_URL=            # Neon connection string (pooled)
ADMIN_PASSWORD=          # plain-text password hashed at runtime with HMAC SHA-256
ANTHROPIC_API_KEY=       # for /admin/dashboard/rewriter (claude-haiku-4-5)
BLOB_READ_WRITE_TOKEN=   # Vercel Blob — image uploads in BlogEditor
```

Create `.env.local` for local dev. All four are required for full functionality;
the site builds and renders without them but DB reads will 500 and admin login will fail.

---

## Database

Schema file: `schema.sql` — paste into the Neon SQL editor.

Tables:

| Table | Purpose |
|---|---|
| `blog_posts` | Blog content managed via admin CMS |
| `tools` | DB-backed link tools (HTML artifacts are filesystem-only) |
| `substack_sections` | Newsletter section categories |
| `substack_articles` | Articles imported via ZIP or added manually |
| `publication_personas` | AI rewriter personas (one default seeded) |

---

## Admin

- Login: `/admin/login` — password from `ADMIN_PASSWORD` env var
- Dashboard: `/admin/dashboard` — protected by middleware (`middleware.ts`)
- Nav: Overview · Blog · Tools · Substack · Rewriter

Session cookie: `admin_session`, 7-day HMAC SHA-256 token, httpOnly, sameSite=strict.

---

## Tools / Artifacts system

Two kinds of tools:

1. **Filesystem artifacts** — drop an `.html` file into `public/artifacts/`. It appears on `/tools` automatically via `lib/html-meta.ts:scanHtmlDir()`. No DB registration needed.
2. **Link tools** — DB rows in the `tools` table (`tool_type = 'link'`). Managed via admin Tools tab.

`/admin/dashboard/tools` has a "Sync Artifacts" button that registers filesystem files into the DB for tagging. Tags are stored as `TEXT[]` on both.

---

## Blog editor

`components/BlogEditor/BlogEditor.tsx` — Tiptap-based with toolbar:
bold, italic, underline, strike, code, code block, H2, H3, lists, blockquote, HR, link, image upload (Vercel Blob), YouTube embed, D3 viz insert.

Default byline: `© 2026 Moctar Datt. All rights reserved.\n\nMoctarDatt.com`

Supports preview mode via `components/BlogVizHydrator/BlogVizHydrator.tsx`, which hydrates `data-viz` attributes in saved HTML into live D3 charts.

---

## D3 visualizations

Registry: `lib/viz/registry.ts` — maps names to lazy dynamic imports.
Built-in: `ai-adoption-bars`, `ai-ecosystem-graph`.

Add a new viz:
1. Create `lib/viz/my-viz.ts` exporting `default (el: HTMLElement) => void`
2. Add entry to `lib/viz/registry.ts`
3. It's available in BlogEditor's viz insert dropdown and renders via BlogVizHydrator

---

## Substack import

1. Export a ZIP from Substack (Settings → Exports)
2. In `/admin/dashboard/substack`, create a section, then upload the ZIP
3. `lib/substack-parser.ts:parseSubstackZip()` extracts posts and inserts into `substack_articles`

---

## Scope

**Included:** blog, tools/artifacts, substack sections, publication rewriter, D3 viz, projects, consulting, contact, privacy/terms, admin CMS.

**Excluded** (not needed for this site): art gallery, videos, notes browser, dev docs, talks, books, courses.

---

## Key conventions

- DB queries use the lazy proxy from `lib/db.ts` (`import { sql } from '@/lib/db'`).
  Exception: `app/sitemap.ts` uses `neon()` directly for build-time static generation.
- All admin API routes call `isAdmin(request)` from `lib/admin-auth.ts` before any DB work.
- Slug uniqueness is enforced at the DB level (`UNIQUE` constraint); collisions return 409.
- `TEXT[]` is used for tags everywhere — filter with `= ANY(tags)` in SQL.
- No ORM, no migrations library — just raw SQL via the Neon serverless driver.
