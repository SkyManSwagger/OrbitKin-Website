import type { Metadata } from "next"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { defaultMetadata, organizationSchema, websiteSchema } from "@/lib/seo"
import { inter } from "./fonts"
import Script from "next/script"
import dynamic from "next/dynamic"
import "./globals.css"

// Lazy load performance monitor (only in production)
const PerformanceMonitor = dynamic(
  () => import("@/components/PerformanceMonitor"),
  { ssr: false }
)

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data for SEO */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {process.env.NODE_ENV === "production" && <PerformanceMonitor />}
        </ThemeProvider>
      </body>
    </html>
  )
}