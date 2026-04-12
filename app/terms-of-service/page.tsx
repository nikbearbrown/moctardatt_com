import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - MoctarDatt.com',
  description: 'Terms of Service for MoctarDatt.com',
}

export default function TermsOfServicePage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-sm text-muted-foreground">Last Updated: April 2026</p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              Welcome to MoctarDatt.com. By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree to these Terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Website Purpose</h2>
            <p>
              MoctarDatt.com is provided for informational and educational purposes. The content on our website is intended to provide information about writing, AI, research, and consulting. Our website functions primarily as a personal site and information resource.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of Moctar Datt and is protected by applicable copyright laws. Reproduction or redistribution of content without prior written permission is prohibited.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Use License</h2>
            <p>
              You are granted a limited, non-exclusive, non-transferable license to access and use our website for informational purposes. This license does not include:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or mirroring the materials on any other server</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Disclaimer</h2>
            <p>
              The materials on MoctarDatt.com are provided &ldquo;as is.&rdquo; Moctar Datt makes no warranties, expressed or implied, and hereby disclaims all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Limitations</h2>
            <p>
              In no event shall Moctar Datt be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. External Links</h2>
            <p>
              Our website may contain links to external websites. Moctar Datt does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Modifications to Terms</h2>
            <p>
              Moctar Datt may revise these Terms of Service at any time without notice. By using this website, you agree to be bound by the then-current version of these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
            <p>
              If you have any questions about these Terms, please{' '}
              <Link href="/contact" className="text-primary underline hover:no-underline">
                contact us
              </Link>.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link href="/privacy" className="text-primary hover:underline">
              &larr; Privacy Policy
            </Link>
            <Link href="/contact" className="text-primary hover:underline">
              Contact Us &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
