import { Metadata } from "next"

export const siteConfig = {
  name: "OrbitKin",
  title: "OrbitKin - Meaningful Friendships Through Smart Matching",
  description: "Join OrbitKin to connect with like-minded people in small, compatible groups. Our personality-based matching algorithm creates Orbits of 4-6 people for genuine friendships.",
  url: "https://orbitkin.com",
  ogImage: "https://orbitkin.com/og-image.png",
  creator: "@skygorilla",
  keywords: [
    "friendship matching",
    "social connection app",
    "personality matching",
    "make friends online",
    "social groups",
    "compatible friendships",
    "TIPI personality test",
    "values-based matching",
    "Discord bot",
    "social matching platform",
    "meaningful connections",
    "small group connections"
  ],
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

// Page-specific metadata generators
export function generatePageMetadata(
  title: string,
  description: string,
  path?: string,
  image?: string
): Metadata {
  const url = path ? `${siteConfig.url}${path}` : siteConfig.url
  const ogImage = image || siteConfig.ogImage

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      images: [ogImage],
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  }
}

// Structured data for JSON-LD
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OrbitKin",
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: [
    "https://discord.com/users/skygorilla",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Developer Support",
    url: "https://discord.com/users/skygorilla",
  },
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "OrbitKin",
  description: siteConfig.description,
  url: siteConfig.url,
  applicationCategory: "SocialNetworkingApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
}