import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - MoctarDatt.com',
  description: 'Privacy policy for MoctarDatt.com',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 md:px-6 mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              Welcome to MoctarDatt.com. We are committed to protecting your personal information and your right to privacy.
              If you have any questions or concerns about this privacy policy or our practices, please{' '}
              <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>
              We collect personal information that you voluntarily provide to us when you contact us or use our services.
              The personal information we collect may include:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Name and Contact Data:</strong> We collect your first and last name, email address, and other similar contact data.</li>
              <li><strong>Credentials:</strong> We collect passwords and similar security information used for admin access.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>We use the information we collect or receive:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To respond to user inquiries and offer support</li>
              <li>To send administrative information to you</li>
              <li>To protect our services</li>
              <li>To enforce our terms, conditions, and policies</li>
              <li>To respond to legal requests and prevent harm</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
            <p>
              We do not share, sell, rent, or trade any of your information with third parties for their promotional purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 id="cookies" className="text-2xl font-semibold mb-4">Cookies and Other Tracking Technologies</h2>
            <p>
              We may use cookies and similar tracking technologies to access or store information. Specific information about how we use
              such technologies and how you can refuse certain cookies is set out in our{' '}
              <Link href="/privacy/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security of any
              personal information we process. However, please note that we cannot guarantee that the internet itself is 100%
              secure. Transmission of personal information to and from our website is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Privacy Rights</h2>
            <p>
              In some regions, you have certain rights under applicable data protection laws. These may include the right:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>To request access and obtain a copy of your personal information</li>
              <li>To request rectification or erasure</li>
              <li>To restrict the processing of your personal information</li>
              <li>If applicable, to data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg">
              If you have questions or comments about this privacy policy, please{' '}
              <Link href="/contact" className="text-primary font-medium underline decoration-2 hover:text-primary/90">
                contact us
              </Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on
              this page. You are advised to review this privacy policy periodically for any changes.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link href="/terms-of-service" className="text-primary hover:underline">
              &larr; Terms of Service
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
