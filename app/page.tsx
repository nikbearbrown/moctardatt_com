import Link from 'next/link'
import { sql } from '@/lib/db'
import PrimaryButton from '@/components/ui/primary-button'
import SecondaryButton from '@/components/ui/secondary-button'
import MarketCard, { type MarketCardProps } from '@/components/MarketCard'

export const dynamic = 'force-dynamic'

// ── Types ──────────────────────────────────────────────────────────────────
type RecentPost = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  tags: string[] | null
  published_at: string | null
}

// ── Market data ────────────────────────────────────────────────────────────
// toolUrl slug = filename minus .html → served at /tools/[slug]
const markets: MarketCardProps[] = [
  {
    country: 'Nigeria',
    flag: '🇳🇬',
    framework: 'NAIJA',
    gdp: '~$400B',
    status: 'live',
    keyDimension: '89-pt state literacy gap; Yoruba tone ASR 78.8% WER; agent banking exclusivity Apr 2026',
    toolUrl: '/tools/naija-nigeria',
  },
  {
    country: 'Ghana',
    flag: '🇬🇭',
    framework: 'AKWAABA',
    gdp: '~$75B',
    status: 'live',
    keyDimension: 'GhIPSS interoperability achieved; Twi dialect disambiguation; dumsor-resilient session design',
    toolUrl: '/tools/akwaaba-ghana',
  },
  {
    country: "Côte d'Ivoire",
    flag: '🇨🇮',
    framework: 'AKWABA',
    gdp: '~$70B',
    status: 'live',
    keyDimension: "WAEMU PI-SPI 15 institutions; N'Ko script in Manding north; Wave > Orange in Abidjan",
    toolUrl: '/tools/akwaba-cote-divoire',
  },
  {
    country: 'Senegal',
    flag: '🇸🇳',
    framework: 'TERANGA',
    gdp: '~$30B',
    status: 'live',
    keyDimension: 'Wolof NLP; Wave API idempotency; CDP Act 2008-12 prior notification',
    toolUrl: '/tools/teranga-senegal',
  },
  {
    country: 'Mali',
    flag: '🇲🇱',
    framework: 'TERANGA',
    gdp: '~$22B',
    status: 'live',
    keyDimension: "N'Ko script infrastructure; Bambara ASR 46.76% WER; Sufi/Izala gatekeeper divide",
    toolUrl: '/tools/teranga-mali',
  },
  {
    country: 'Burkina Faso',
    flag: '🇧🇫',
    framework: 'NAAM',
    gdp: '~$18B',
    status: 'live',
    keyDimension: 'Mooré ASR 4.24% WER (best-in-class); 52.9% Mooré speakers; Sahel insecurity',
    toolUrl: '/tools/naam-burkina-faso',
  },
  {
    country: 'Benin',
    flag: '🇧🇯',
    framework: 'AZIZA',
    gdp: '~$17B',
    status: 'live',
    keyDimension: 'WAEMU PI-SPI 6 institutions; cotton/transit trade economy; French-dominant urban',
    toolUrl: '/tools/aziza-benin',
  },
  {
    country: 'Niger',
    flag: '🇳🇪',
    framework: 'LAFIYA',
    gdp: '~$15B',
    status: 'live',
    keyDimension: '10.3% growth (hydrocarbons); Hausa dominant; Izala gatekeeper; lowest literacy tier',
    toolUrl: '/tools/lafiya-niger',
  },
  {
    country: 'Guinea',
    flag: '🇬🇳',
    framework: 'DJOLIBA',
    gdp: '~$15B',
    status: 'live',
    keyDimension: 'Bauxite economy; Pular/Mandingo primary languages; Mano River integration context',
    toolUrl: '/tools/djoliba-guinea',
  },
  {
    country: 'Mauritania',
    flag: '🇲🇷',
    framework: 'ATTAYA',
    gdp: '~$10B',
    status: 'live',
    keyDimension: 'Hassaniya Arabic ASR 12% WER; Arabic-script primary; WAEMU-adjacent',
    toolUrl: '/tools/attaya-mauritania',
  },
  {
    country: 'Togo',
    flag: '🇹🇬',
    framework: 'KEKELI',
    gdp: '~$9B',
    status: 'live',
    keyDimension: 'Logistics hub; Ewe/Kabiyé NLP gap; Wave recently launched; WAEMU PI-SPI 6 institutions',
    toolUrl: '/tools/kekeli-togo',
  },
  {
    country: 'Sierra Leone',
    flag: '🇸🇱',
    framework: 'KUSHE',
    gdp: '~$4B',
    status: 'live',
    keyDimension: 'Krio as urban lingua franca; Mano River stability context; post-conflict digital infrastructure',
    toolUrl: '/tools/kushe-sierra-leone',
  },
  {
    country: 'Liberia',
    flag: '🇱🇷',
    framework: 'ZOE',
    gdp: '~$4B',
    status: 'live',
    keyDimension: 'Liberian English distinct from training data; rubber/iron economy',
    toolUrl: '/tools/zoe-liberia',
  },
  {
    country: 'Cape Verde',
    flag: '🇨🇻',
    framework: 'SODADE',
    gdp: '~$2.3B',
    status: 'live',
    keyDimension: 'Island archipelago infrastructure; Portuguese-Creole (Kriolu); tourism-services economy',
    toolUrl: '/tools/sodade-capeverde',
  },
  {
    country: 'Gambia',
    flag: '🇬🇲',
    framework: 'JAMMA',
    gdp: '~$2.1B',
    status: 'live',
    keyDimension: 'Wave recently launched; Mandinka/Wolof primary; landlocked within Senegal',
    toolUrl: '/tools/jamma-gambia',
  },
  {
    country: 'Guinea-Bissau',
    flag: '🇬🇼',
    framework: 'GEBA',
    gdp: '~$1.6B',
    status: 'live',
    keyDimension: 'Portuguese official; Crioulo dominant; WAEMU PI-SPI frontier (4 institutions)',
    toolUrl: '/tools/geba-guinea-bissau',
  },
]

// ── Six dimensions ─────────────────────────────────────────────────────────
const dimensions = [
  {
    num: '01',
    name: 'Linguistic Architecture',
    body: '"English-first" is not a strategy in a region with 2,000 languages and a 78.8% ASR failure rate for Yoruba in global models. Which languages, which NLP tier, which datasets, which gaps.',
  },
  {
    num: '02',
    name: 'Interface & Interaction Model',
    body: "Text-first or voice-first, and for which users. The literacy gap between Nigeria's highest and lowest states is 89 percentage points.",
  },
  {
    num: '03',
    name: 'Infrastructure & Technical Architecture',
    body: "Offline-first design, device constraints, connectivity realities. 64% of West Africans live within mobile coverage but don't use mobile internet.",
  },
  {
    num: '04',
    name: 'Financial Integration',
    body: 'Which payment rail, in which market, with which compliance requirements. The WAEMU zone and Anglophone markets have entirely different architectures.',
  },
  {
    num: '05',
    name: 'Regulatory & Data Sovereignty',
    body: 'CDP, DPC, NDPC — prior notification vs. registration vs. enforcement. "We\'ll handle compliance later" costs more than the compliance did.',
  },
  {
    num: '06',
    name: 'Cultural & Social Architecture',
    body: 'Who needs to say yes before a product can scale: Sufi brotherhood, Pentecostal network, emirate council, iyaloja network. Trust in West Africa does not route through institutions.',
  },
]

// ── Consulting engagements ─────────────────────────────────────────────────
const engagements = [
  {
    name: 'Adaptation Audit',
    description:
      'Full six-dimension diagnostic against one market framework. Produces a findings matrix and a strategic deployment brief.',
    subtext:
      'For AI companies evaluating whether their product can work in a specific market before they build anything.',
  },
  {
    name: 'Build Review',
    description:
      'Technical review of an in-progress deployment against the relevant market framework. Identifies the gaps before they become production incidents.',
    subtext:
      'The wrong payment rail, the missing NLP layer, the unregistered data pipeline, the interface that excludes 60% of the target region.',
  },
  {
    name: 'Advisory',
    description:
      'Ongoing engagement for teams building in West Africa over a sustained period. Access to the frameworks as they develop, direct input on architecture decisions.',
    subtext:
      'A standing relationship with someone who has mapped these markets systematically.',
  },
  {
    name: 'Field Engagement',
    description:
      'On-the-ground work in West Africa. User research with real target populations, permit navigation, regulatory meetings, and in-market product validation.',
    subtext:
      'Moctar is in the region. He can put your product in front of real users, sit with a regulator, and walk a permit process through to completion.',
  },
]

// ── Page ───────────────────────────────────────────────────────────────────
export default async function Home() {
  // Same query pattern as app/blog/page.tsx
  let recentPosts: RecentPost[] = []
  try {
    recentPosts = await sql`
      SELECT id, title, slug, excerpt, tags, published_at
      FROM blog_posts
      WHERE published = true
      ORDER BY published_at DESC
      LIMIT 3
    `
  } catch {
    // DB unavailable at build time — render without posts
  }

  return (
    <div className="flex flex-col w-full">

      {/* ══ SECTION 1 — HERO ══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl">
            <div className="w-16 h-1.5 bg-primary mb-8" />

            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6 leading-tight">
              Most AI products built for West Africa are built for a West Africa that doesn&rsquo;t exist.
            </h1>

            <p className="text-lg text-muted-foreground mb-4 max-w-2xl leading-relaxed">
              The right language isn&rsquo;t there. The payment rail doesn&rsquo;t reach where the users are.
              The data pipeline violates sovereignty law. I&rsquo;ve mapped the conditions in all sixteen
              markets. The frameworks are here.
            </p>

            <p className="text-sm font-semibold text-primary mb-10 tracking-wide">
              West Africa AI Adaptation Consulting&nbsp;&mdash;&nbsp;sixteen frameworks&nbsp;&middot;&nbsp;sixteen markets
            </p>

            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <PrimaryButton href="/contact">Start with a conversation</PrimaryButton>
              <SecondaryButton href="/tools">See the frameworks</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2 — SIXTEEN MARKETS ═══════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-y bg-muted/40">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-10">
            <div className="w-10 h-1 bg-primary mb-5" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-3">
              Sixteen Markets. One Methodology.
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Sixteen frameworks &mdash; six dimensions each, applied systematically to every West African market.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {markets.map((m) => (
              <MarketCard key={m.country} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 3 — SIX DIMENSIONS ════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-10">
            <div className="w-10 h-1 bg-primary mb-5" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-3">
              The Six Dimensions
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Every market audit covers the same six areas. Systematically. In sequence.
              Because skipping a dimension is how products fail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dimensions.map((d) => (
              <div key={d.num} className="border-l-2 border-primary pl-5">
                <div className="text-xs font-mono text-muted-foreground mb-2 tracking-widest">
                  {d.num}
                </div>
                <h3 className="font-semibold text-base mb-2">{d.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 4 — CONSULTING OFFER ══════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-y bg-muted/40">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-10">
            <div className="w-10 h-1 bg-primary mb-5" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-3">
              Work with Moctar
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Four ways to engage, depending on where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagements.map((e) => (
              <div key={e.name} className="bg-card border rounded-lg p-6 flex flex-col gap-3">
                <h3 className="text-lg font-bold">{e.name}</h3>
                <p className="text-sm leading-relaxed">{e.description}</p>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{e.subtext}</p>
                <Link
                  href="/contact"
                  className="text-sm font-semibold text-primary hover:underline mt-auto"
                >
                  Get in touch &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 5 — RECENT WRITING ════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <div className="w-10 h-1 bg-primary mb-5" />
              <h2 className="text-3xl font-bold tracking-tighter">Recent Writing</h2>
            </div>
            <Link href="/blog" className="text-sm font-semibold text-primary hover:underline shrink-0">
              All posts &rarr;
            </Link>
          </div>

          {recentPosts.length > 0 ? (
            <div className="divide-y divide-border max-w-2xl">
              {recentPosts.map((post) => (
                <article key={post.id} className="py-6 first:pt-0 last:pb-0">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <h3 className="font-semibold text-base group-hover:text-primary transition-colors mb-1">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                        {post.excerpt}
                      </p>
                    )}
                    {post.published_at && (
                      <time className="text-xs text-muted-foreground">
                        {new Date(post.published_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    )}
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Writing coming soon.</p>
          )}
        </div>
      </section>

    </div>
  )
}
