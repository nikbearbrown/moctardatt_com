"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import ThemeToggle from "@/components/ThemeToggle"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand */}
          <div className="md:col-span-3">
            <div className="max-w-sm">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-lg font-bold tracking-tighter">Moctar Datt</span>
              </Link>
              <p className="mt-4 text-sm text-muted-foreground">
                MoctarDatt.com
                <br />Moctar Datt - AI Deployment Strategy, West Africa
              </p>
              <div className="mt-6 flex space-x-4 items-center">
                <Link href="mailto:moctardatt@hotmail.com" className="text-sm hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Platform</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
                <li><Link href="/tools" className="text-muted-foreground hover:text-foreground transition-colors">Tools</Link></li>
                <li><Link href="/analysis" className="text-muted-foreground hover:text-foreground transition-colors">Analysis</Link></li>
                <li><a href="https://moctardatt.substack.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">Substack</a></li>
                <li><Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="/consulting" className="text-muted-foreground hover:text-foreground transition-colors">Consulting</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="text-sm text-muted-foreground">
                Have a question or want to collaborate?
                <br />
                <a href="mailto:moctardatt@hotmail.com" className="text-primary hover:underline">moctardatt@hotmail.com</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              At MoctarDatt.com, we respect your privacy. For details, please read our{" "}
              <Link href="/privacy" className="text-primary hover:underline">full privacy policy</Link>.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground space-y-1">
          <p>&copy; {currentYear} MoctarDatt.com. All rights reserved.</p>
          <p>
            Built by Bear Brown, LLC{" "}
            <a href="https://bearbrown.co" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bearbrown.co</a>
            {" "}in collaboration with Irreducibly Human{" "}
            <a href="https://irreducibly.xyz" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">irreducibly.xyz</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
