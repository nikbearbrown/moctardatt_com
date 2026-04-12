import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects - MoctarDatt.com',
  description: 'Explore Moctar Datt\'s projects in AI, writing, education, and research.',
}

export default function ProjectsPage() {
  const projects = [
    {
      id: 'ai-writing',
      title: 'AI-Augmented Writing',
      description: 'Exploring how large language models can assist professional and academic writing — from research synthesis to editorial refinement — while preserving the author\'s voice.',
      fullDescription: 'This ongoing project investigates practical workflows for integrating AI into the writing process. The focus is on high-quality output: using LLMs as a collaborator rather than a replacement, with systematic prompting, iterative refinement, and human editorial oversight at every stage.',
      keyFeatures: [
        { title: 'Prompt Engineering', description: 'Developing structured prompts that produce consistent, high-quality drafts for specific writing contexts.' },
        { title: 'Voice Preservation', description: 'Techniques for maintaining author identity and tone across AI-assisted revisions.' },
        { title: 'Research Synthesis', description: 'Using AI to surface connections across large bodies of literature quickly and accurately.' },
        { title: 'Editorial Workflow', description: 'Integrating AI assistance into professional editorial pipelines without sacrificing quality.' },
      ],
      links: [],
    },
    {
      id: 'ai-education',
      title: 'AI in Education',
      description: 'Designing AI-powered learning tools and curricula that help students engage more deeply with complex subjects through adaptive feedback and personalized instruction.',
      fullDescription: 'Education is one of the highest-leverage applications of AI. This project develops frameworks and tools for personalized instruction — tutoring systems, adaptive assessments, and intelligent content generation — grounded in learning science and classroom reality.',
      keyFeatures: [
        { title: 'Adaptive Tutoring', description: 'Systems that adjust explanations and difficulty in real time based on student responses.' },
        { title: 'Assessment Design', description: 'AI-generated formative assessments that go beyond recall to test understanding.' },
        { title: 'Curriculum Scaffolding', description: 'Breaking complex topics into learnable sequences with AI-assisted content planning.' },
        { title: 'Accessibility', description: 'Making high-quality instruction available to learners regardless of background or location.' },
      ],
      links: [],
    },
    {
      id: 'consulting',
      title: 'AI Consulting & Strategy',
      description: 'Helping organizations identify where AI creates real value, build internal capability, and implement thoughtful AI strategies that align with their mission.',
      fullDescription: 'Many organizations want to adopt AI but don\'t know where to start — or start in the wrong places. This consulting practice focuses on practical AI strategy: identifying high-value use cases, building internal literacy, and designing responsible implementation plans that deliver measurable results.',
      keyFeatures: [
        { title: 'Use Case Discovery', description: 'Structured workshops to identify where AI will have the highest impact in your organization.' },
        { title: 'AI Literacy', description: 'Training programs that help teams understand AI capabilities and limitations accurately.' },
        { title: 'Implementation Roadmaps', description: 'Phased plans for deploying AI tools with appropriate governance and oversight.' },
        { title: 'Responsible AI', description: 'Frameworks for evaluating AI outputs, managing risk, and maintaining accountability.' },
      ],
      links: [{ label: 'Consulting Services', href: '/consulting' }],
    },
    {
      id: 'newsletter',
      title: 'Newsletter & Writing',
      description: 'Regular writing on AI, technology, and society — aimed at thoughtful practitioners who want signal over noise.',
      fullDescription: 'The newsletter covers the intersection of AI with writing, education, work, and society. Each issue aims to be genuinely useful: either a clear explanation of something confusing, a practical technique, or a well-reasoned take on where things are heading.',
      keyFeatures: [
        { title: 'AI Explainers', description: 'Clear explanations of how AI systems work, written for practitioners not researchers.' },
        { title: 'Practical Guides', description: 'Step-by-step workflows for using AI tools effectively in real work.' },
        { title: 'Critical Analysis', description: 'Honest assessments of AI claims, benchmarks, and hype cycles.' },
        { title: 'Case Studies', description: 'Real examples of AI integration — what worked, what didn\'t, and why.' },
      ],
      links: [{ label: 'Subscribe', href: '/substack' }],
    },
  ]

  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Work at the intersection of AI, writing, education, and strategy.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Quick Navigation</h2>
          <div className="flex flex-wrap gap-3">
            {projects.map(project => (
              <a
                key={project.id}
                href={`#${project.id}`}
                className="px-4 py-2 bg-muted rounded-md hover:bg-muted/80 transition-colors text-sm"
              >
                {project.title}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-24">
          {projects.map(project => (
            <section key={project.id} id={project.id} className="scroll-mt-20">
              <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
              <p className="text-xl text-muted-foreground mb-8">
                {project.description}
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">About</h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>{project.fullDescription}</p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Key Areas</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.keyFeatures.map((feature, index) => (
                    <div key={index} className="p-6 border rounded-lg">
                      <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium bg-black text-white shadow hover:bg-gray-800 dark:border dark:border-input dark:bg-background dark:text-foreground dark:shadow-sm dark:hover:bg-accent dark:hover:text-accent-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
