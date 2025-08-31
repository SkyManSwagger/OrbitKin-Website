"use client"

import Link from "next/link"
import { Github, Twitter, MessageCircle, Mail, FileText, Shield } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: "For Communities", href: "/docs/for-communities" },
      { label: "Research", href: "/docs/research" },
      { label: "Changelog", href: "/changelog" },
    ],
    resources: [
      { label: "Documentation", href: "/docs" },
      { label: "Getting Started", href: "/docs/getting-started" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/coming-soon" },
      { label: "Terms of Service", href: "/coming-soon" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
    community: [
      { label: "Contact Developer", href: "https://discord.com/users/skygorilla" },
    ],
  }

  return (
    <footer className="bg-muted/30 dark:bg-muted/20 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🪐</span>
              <span className="font-bold text-xl">OrbitKin</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Forming meaningful connections through intelligent social matching 
              across all your favorite platforms.
            </p>
            <p className="text-xs text-muted-foreground">
              Questions? DM <strong>skygorilla</strong> on Discord
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Community</h3>
              <ul className="space-y-2">
                {footerLinks.community.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} OrbitKin. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Privacy
              </Link>
              <Link href="/coming-soon" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center">
                <FileText className="w-4 h-4 mr-1" />
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}