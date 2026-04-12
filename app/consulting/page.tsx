import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Consulting - MoctarDatt.com',
  description: 'AI consulting and advisory services by Moctar Datt.',
}

export default function ConsultingPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full py-12 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-6">Consulting</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Advisory and consulting on AI strategy, implementation, and technology projects.
              Helping teams and organizations navigate the rapidly evolving AI landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full pb-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-16">
            <div className="border p-6 rounded-lg bg-card">
              <h3 className="text-lg font-bold mb-3">AI Strategy</h3>
              <p className="text-sm text-muted-foreground">
                Develop a clear AI roadmap aligned with your organization's goals, capabilities,
                and risk tolerance.
              </p>
            </div>
            <div className="border p-6 rounded-lg bg-card">
              <h3 className="text-lg font-bold mb-3">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Practical guidance on integrating AI tools and workflows into your existing
                processes and systems.
              </p>
            </div>
            <div className="border p-6 rounded-lg bg-card">
              <h3 className="text-lg font-bold mb-3">Training & Enablement</h3>
              <p className="text-sm text-muted-foreground">
                Workshops and training sessions to help your team effectively use AI tools
                and understand their limitations.
              </p>
            </div>
          </div>

          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
            <p className="text-muted-foreground mb-4">
              Interested in working together? Reach out to discuss your project.
            </p>
            <a
              href="mailto:moctar@moctardatt.com"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
