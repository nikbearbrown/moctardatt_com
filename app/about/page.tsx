import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - MoctarDatt.com',
  description: 'About Moctar Datt.',
}

export default function AboutPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">About</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            Moctar Datt is a researcher, writer, and builder working at the intersection
            of AI and technology.
          </p>
          <p>
            This site collects writing, tools, and projects — a home base for ideas and
            experiments in AI, education, and technology.
          </p>
          <p>
            I'm interested in how AI changes the way we learn, create, and collaborate.
            My work spans writing about these topics, building practical AI tools, and
            consulting with organizations navigating the AI landscape.
          </p>
          <h2>Get in touch</h2>
          <p>
            You can reach me at{' '}
            <a href="mailto:moctardatt@hotmail.com" className="text-primary hover:underline">
              moctardatt@hotmail.com
            </a>
.
          </p>
        </div>
      </div>
    </div>
  )
}
