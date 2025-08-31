import { MetadataRoute } from "next"
import { siteConfig } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  
  // Define all your static routes
  const routes = [
    "",
    "/for-servers",
    "/for-members",
    "/coming-soon",
    "/docs",
    "/docs/intro",
    "/docs/matching",
    "/docs/quickstart",
    "/docs/discord",
    "/docs/discord/user",
    "/docs/discord/admin",
    "/docs/profile",
    "/docs/privacy-guide",
    "/docs/best-practices",
    "/docs/faq",
    "/docs/troubleshooting",
    "/docs/support",
    "/docs/roadmap",
    "/docs/stories",
    "/docs/feature-requests",
    "/changelog",
    "/privacy",
    "/terms",
    "/cookies",
  ]

  // Generate sitemap entries
  const staticPages = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" as const : "weekly" as const,
    priority: route === "" ? 1 : route.startsWith("/docs") ? 0.8 : 0.9,
  }))

  return staticPages
}