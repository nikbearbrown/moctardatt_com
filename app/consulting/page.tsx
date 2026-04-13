import type { Metadata } from 'next'
import Link from 'next/link'
import PrimaryButton from '@/components/ui/primary-button'
import SecondaryButton from '@/components/ui/secondary-button'

export const metadata: Metadata = {
  title: 'Consulting — MoctarDatt.com',
  description:
    'AI deployment strategy for West African markets. Sixteen frameworks. Six dimensions. One engagement at a time.',
}

// ── Data ───────────────────────────────────────────────────────────────────
const markets = [
  { flag: '🇳🇬', framework: 'NAIJA',   country: 'Nigeria',       slug: 'naija-nigeria' },
  { flag: '🇬🇭', framework: 'AKWAABA', country: 'Ghana',         slug: 'akwaaba-ghana' },
  { flag: '🇨🇮', framework: 'AKWABA',  country: "Côte d'Ivoire", slug: 'akwaba-cote-divoire' },
  { flag: '🇸🇳', framework: 'TERANGA', country: 'Senegal',       slug: 'teranga-senegal' },
  { flag: '🇲🇱', framework: 'TERANGA', country: 'Mali',          slug: 'teranga-mali' },
  { flag: '🇧🇫', framework: 'NAAM',    country: 'Burkina Faso',  slug: 'naam-burkina-faso' },
  { flag: '🇧🇯', framework: 'AZIZA',   country: 'Benin',         slug: 'aziza-benin' },
  { flag: '🇳🇪', framework: 'LAFIYA',  country: 'Niger',         slug: 'lafiya-niger' },
  { flag: '🇬🇳', framework: 'DJOLIBA', country: 'Guinea',        slug: 'djoliba-guinea' },
  { flag: '🇲🇷', framework: 'ATTAYA',  country: 'Mauritania',    slug: 'attaya-mauritania' },
  { flag: '🇹🇬', framework: 'KEKELI',  country: 'Togo',          slug: 'kekeli-togo' },
  { flag: '🇸🇱', framework: 'KUSHE',   country: 'Sierra Leone',  slug: 'kushe-sierra-leone' },
  { flag: '🇱🇷', framework: 'ZOE',     country: 'Liberia',       slug: 'zoe-liberia' },
  { flag: '🇨🇻', framework: 'SODADE',  country: 'Cape Verde',    slug: 'sodade-capeverde' },
  { flag: '🇬🇲', framework: 'JAMMA',   country: 'Gambia',        slug: 'jamma-gambia' },
  { flag: '🇬🇼', framework: 'GEBA',    country: 'Guinea-Bissau', slug: 'geba-guinea-bissau' },
]

const differentiators = [
  {
    num: '01',
    title: 'Not West Africa in general. Each market specifically.',
    body: "TERANGA for Senegal. NAIJA for Nigeria. AKWABA for Côte d'Ivoire. Each framework maps one market against six dimensions. Not a regional playbook — sixteen country-specific diagnostics.",
  },
  {
    num: '02',
    title: 'Not advisory on viability. Evidence on conditions.',
    body: "The Mooré ASR model has a 4.24% WER — best-performing indigenous NLP in the framework family. GhIPSS interoperability is live. The PI-SPI advanced tier covers fifteen WAEMU institutions. These are conditions, not opinions.",
  },
  {
    num: '03',
    title: "Not re-learning your market at your expense.",
    body: "The diagnostic frameworks exist. The engagement applies them to your product against your target market — it does not conduct the underlying research from scratch and bill you for the fieldwork.",
  },
  {
    num: '04',
    title: 'Not the Big 4 Africa practice.',
    body: 'No associates who have read the same Brookings papers. No generic emerging-markets playbook. The knowledge comes from systematic mapping, market by market, dimension by dimension.',
  },
]

const services = [
  {
    name: 'Adaptation Audit',
    what: 'Full six-dimension diagnostic against one market framework. Produces a findings matrix and a strategic deployment brief.',
    who: "For AI companies evaluating whether their product can survive a specific market before they build for it — or before they discover in production that their Portuguese NLP pipeline reaches 20% of their intended users.",
    signals: ['Six-dimension diagnostic', 'Findings matrix', 'Deployment brief', 'Pre-build or post-launch'],
  },
  {
    name: 'Build Review',
    what: 'Technical review of an in-progress deployment against the relevant market framework.',
    who: 'The wrong payment rail. The missing voice layer. The unregistered data pipeline. The interface that excludes 60% of the target region. Identified before they become production incidents.',
    signals: ['Payment rail audit', 'NLP layer check', 'Regulatory compliance review', 'Interface scope audit'],
  },
  {
    name: 'Advisory',
    what: 'Ongoing engagement for teams building in West Africa over a sustained period. Direct input on architecture decisions, access to the frameworks as they develop.',
    who: 'A standing relationship with someone who has mapped these conditions systematically — not someone re-learning them market by market as your product expands.',
    signals: ['Ongoing framework access', 'Architecture input', 'Multi-market scope', 'As conditions change'],
  },
  {
    name: 'Field Engagement',
    what: 'On-the-ground work in West Africa. User research with actual target populations, regulatory navigation, permit guidance, and in-market validation.',
    who: 'For teams who need more than a remote diagnostic. Moctar is in the region — he can put your product in front of real users in Dakar, Lagos, or Abidjan, sit with a regulator, and walk a permit process through to completion.',
    signals: ['In-market user research', 'Permit navigation', 'Regulatory meetings', 'Live product testing'],
  },
]

// ── Page ───────────────────────────────────────────────────────────────────
export default function ConsultingPage() {
  return (
    <div className="flex flex-col w-full">

      {/* ══ HERO ══════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl">
            <div className="w-16 h-1.5 bg-primary mb-8" />
            <p className="text-xs font-bold text-primary tracking-widest uppercase mb-4">
              AI Deployment Strategy &middot; West Africa
            </p>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-6 leading-tight">
              The conditions are already mapped. The question is whether your product fits them.
            </h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl leading-relaxed">
              Whether your voice model reaches the right language tier. Whether your payment
              integration covers the relevant rails. Whether your data pipeline meets the
              registration requirement before you go live. Sixteen markets. Six dimensions each.
              I&rsquo;ve mapped all of it. The consulting work is applying that map to your
              specific problem.
            </p>
            <p className="text-sm font-semibold text-primary mb-10 tracking-wide">
              Sixteen frameworks live &mdash; TERANGA &middot; NAIJA &middot; AKWAABA &middot; GEBA &middot; and twelve more
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <PrimaryButton href="/contact">Start with a conversation</PrimaryButton>
              <SecondaryButton href="/tools">See the frameworks</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY THIS IS DIFFERENT ══════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-y bg-muted/40">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-10">
            <div className="w-10 h-1 bg-primary mb-5" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-3">
              Why this is different
            </h2>
            <p className="text-muted-foreground max-w-xl">
              There is no shortage of consultants who will advise on AI in Africa.
              There is a shortage of consultants who have already done the market mapping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {differentiators.map((d) => (
              <div key={d.num} className="border-l-2 border-primary pl-5">
                <div className="text-xs font-mono text-muted-foreground mb-2 tracking-widest">
                  {d.num}
                </div>
                <h3 className="font-semibold text-base mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SERVICES ══════════════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-10">
            <div className="w-10 h-1 bg-primary mb-5" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-3">
              How to engage
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Four engagement types. The right one depends on where you are in the build.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.name} className="bg-card border rounded-lg p-6 flex flex-col gap-4">
                <h3 className="text-xl font-bold">{s.name}</h3>
                <p className="text-sm leading-relaxed">{s.what}</p>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.who}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {s.signals.map((sig) => (
                    <span
                      key={sig}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full border border-primary/40 text-primary"
                    >
                      {sig}
                    </span>
                  ))}
                </div>
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

      {/* ══ MARKETS COVERED ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 border-y bg-muted/40">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="mb-10">
            <div className="w-10 h-1 bg-primary mb-5" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-3">
              Sixteen markets covered
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Every ECOWAS member state plus Mauritania. Each with its own framework,
              its own NLP tier, its own payment architecture, its own compliance regime.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {markets.map((m) => (
              <Link
                key={m.slug}
                href={`/tools/${m.slug}`}
                className="group flex flex-col items-center gap-1 rounded-lg border border-border bg-card px-3 py-3 text-center transition-colors hover:border-primary"
              >
                <span className="text-2xl leading-none">{m.flag}</span>
                <span className="text-[10px] font-bold text-primary tracking-wider uppercase leading-tight">
                  {m.framework}
                </span>
                <span className="text-[10px] text-muted-foreground leading-tight line-clamp-1">
                  {m.country}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-2xl">
            <div className="w-10 h-1 bg-primary mb-5" />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">
              Start with a conversation
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Tell me which market, which product, which stage of the build.
              I&rsquo;ll tell you which framework applies and what it will find.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <PrimaryButton href="/contact">Get in touch</PrimaryButton>
              <SecondaryButton href="/tools">Browse the frameworks</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
