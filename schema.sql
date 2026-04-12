-- moctardatt.com — Neon PostgreSQL schema
-- Paste this into the Neon SQL editor and run it.
-- Safe to re-run: all statements use IF NOT EXISTS / DO NOTHING.

-- ─────────────────────────────────────────────
-- blog_posts
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS blog_posts (
  id            SERIAL PRIMARY KEY,
  title         TEXT        NOT NULL DEFAULT '',
  subtitle      TEXT        NOT NULL DEFAULT '',
  slug          TEXT        NOT NULL UNIQUE,
  byline        TEXT        NOT NULL DEFAULT '',
  cover_image   TEXT        NOT NULL DEFAULT '',
  content       TEXT        NOT NULL DEFAULT '',
  excerpt       TEXT        NOT NULL DEFAULT '',
  summary       TEXT        NOT NULL DEFAULT '',
  seed_summary  TEXT        NOT NULL DEFAULT '',
  tags          TEXT[]      NOT NULL DEFAULT '{}',
  published     BOOLEAN     NOT NULL DEFAULT FALSE,
  published_at  TIMESTAMPTZ,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS blog_posts_published_idx  ON blog_posts (published);
CREATE INDEX IF NOT EXISTS blog_posts_published_at_idx ON blog_posts (published_at DESC);
CREATE INDEX IF NOT EXISTS blog_posts_tags_idx       ON blog_posts USING GIN (tags);

-- ─────────────────────────────────────────────
-- tools
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS tools (
  id                  SERIAL PRIMARY KEY,
  name                TEXT        NOT NULL DEFAULT '',
  slug                TEXT        NOT NULL UNIQUE,
  description         TEXT        NOT NULL DEFAULT '',
  tool_type           TEXT        NOT NULL DEFAULT 'link',
  -- tool_type: 'link' | 'artifact'
  claude_url          TEXT        NOT NULL DEFAULT '',
  artifact_id         TEXT        NOT NULL DEFAULT '',
  artifact_embed_code TEXT        NOT NULL DEFAULT '',
  tags                TEXT[]      NOT NULL DEFAULT '{}',
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS tools_tags_idx ON tools USING GIN (tags);

-- ─────────────────────────────────────────────
-- substack_sections
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS substack_sections (
  id            SERIAL PRIMARY KEY,
  title         TEXT        NOT NULL DEFAULT '',
  slug          TEXT        NOT NULL UNIQUE,
  description   TEXT        NOT NULL DEFAULT '',
  substack_url  TEXT        NOT NULL DEFAULT '',
  article_count INTEGER     NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─────────────────────────────────────────────
-- substack_articles
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS substack_articles (
  id            SERIAL PRIMARY KEY,
  section_id    INTEGER     NOT NULL REFERENCES substack_sections (id) ON DELETE CASCADE,
  slug          TEXT        NOT NULL,
  title         TEXT        NOT NULL DEFAULT '',
  subtitle      TEXT        NOT NULL DEFAULT '',
  excerpt       TEXT        NOT NULL DEFAULT '',
  content       TEXT        NOT NULL DEFAULT '',
  original_url  TEXT        NOT NULL DEFAULT '',
  published_at  TIMESTAMPTZ,
  display_date  TEXT        NOT NULL DEFAULT '',
  UNIQUE (section_id, slug)
);

CREATE INDEX IF NOT EXISTS substack_articles_section_idx    ON substack_articles (section_id);
CREATE INDEX IF NOT EXISTS substack_articles_published_idx  ON substack_articles (published_at DESC);

-- ─────────────────────────────────────────────
-- publication_personas  (used by rewriter)
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS publication_personas (
  id         SERIAL PRIMARY KEY,
  name       TEXT        NOT NULL DEFAULT '',
  slug       TEXT        NOT NULL UNIQUE,
  prompt     TEXT        NOT NULL DEFAULT '',
  is_active  BOOLEAN     NOT NULL DEFAULT TRUE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seed one default persona so the rewriter works out of the box
INSERT INTO publication_personas (name, slug, prompt, is_active)
VALUES (
  'Moctar Datt',
  'moctar-datt',
  'Rewrite this article in the voice of Moctar Datt: clear, insightful, and accessible. Preserve all key facts and arguments. Write in first person where appropriate.',
  TRUE
)
ON CONFLICT (slug) DO NOTHING;
