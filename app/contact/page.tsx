import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - MoctarDatt.com',
  description: 'Contact Moctar Datt.',
}

export default function ContactPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-6">Contact</h1>
        <p className="text-muted-foreground mb-6">
          Have a question, want to collaborate, or just want to say hello?
        </p>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-1">Email</p>
            <a
              href="mailto:moctardatt@hotmail.com"
              className="text-primary hover:underline font-medium"
            >
              moctardatt@hotmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
