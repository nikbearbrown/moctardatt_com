import PrimaryButton from "@/components/ui/primary-button"
import SecondaryButton from "@/components/ui/secondary-button"
import { BookOpen, Wrench, Code, Mail } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-28">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-4">
              Moctar Datt
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              I write about AI and technology, build tools, and share ideas. This site is home base.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <PrimaryButton href="/blog">Read My Writing</PrimaryButton>
              <SecondaryButton href="/tools">Explore Tools</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Where I Create */}
      <section className="w-full py-12 md:py-20 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Where I Create</h2>
              <p className="text-muted-foreground max-w-[600px]">
                These are the places where I publish, build, and collaborate.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Writing */}
            <div className="border p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <BookOpen className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Writing</h3>
              <p className="text-muted-foreground mb-4">
                Essays and articles on AI, technology, and ideas. Exploring how AI is changing
                how we learn, create, and build.
              </p>
              <Link href="/blog" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Read the blog →
              </Link>
              <div className="mt-2">
                <Link href="/substack" className="text-xs text-muted-foreground hover:text-primary">
                  (Browse newsletter archives)
                </Link>
              </div>
            </div>

            {/* AI Tools */}
            <div className="border p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Wrench className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Tools</h3>
              <p className="text-muted-foreground mb-4">
                A curated collection of interactive AI tools and utilities for learning,
                experimentation, and practical use.
              </p>
              <Link href="/tools" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Browse tools →
              </Link>
            </div>

            {/* Consulting */}
            <div className="border p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Code className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Consulting</h3>
              <p className="text-muted-foreground mb-4">
                Advisory and consulting on AI strategy, implementation, and technology projects.
                Helping organizations navigate the AI landscape.
              </p>
              <Link href="/consulting" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Learn more →
              </Link>
            </div>

            {/* Newsletter */}
            <div className="border p-8 rounded-lg bg-card hover:shadow-lg transition-shadow">
              <div className="mb-4">
                <Mail className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Newsletter</h3>
              <p className="text-muted-foreground mb-4">
                Writing on AI and technology delivered to your inbox. Explore the archives
                or subscribe to stay updated.
              </p>
              <Link href="/substack" className="text-sm font-medium underline underline-offset-4 hover:text-foreground">
                Browse archives →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="w-full py-12 md:py-20 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <div className="mb-4 text-sm font-medium">CONNECT</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-6">Let's Collaborate</h2>
            <p className="text-muted-foreground mb-8">
              Interested in AI, writing, or consulting? I'm always open to connecting
              with like-minded individuals and organizations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PrimaryButton href="/blog">Read the Blog</PrimaryButton>
              <SecondaryButton href="/tools">Explore Tools</SecondaryButton>
              <SecondaryButton href="/consulting">Consulting</SecondaryButton>
              <SecondaryButton href="/contact">Get in Touch</SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
