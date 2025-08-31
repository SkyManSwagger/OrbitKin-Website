"use client"

import Link from "next/link"
import { ArrowLeft, GitCommit, Star, Bug, Zap, Package, Heart, Sparkles, Code, Shield, Users, Brain, Rocket, CheckCircle, Bot, Database, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

const releases = [
  {
    version: "1.0.0",
    date: "Q4 2024",
    tag: "planned",
    title: "Official Production Release",
    description: "The full public release of OrbitKin with production-ready features and stability.",
    highlights: [
      "Production deployment on multiple servers",
      "Stable matchmaking algorithm",
      "Premium features and server tiers",
      "Mobile and web app integration",
      "Enterprise support for large communities"
    ],
    categories: [
      {
        title: "🚀 Planned Features",
        icon: Rocket,
        color: "text-blue-500",
        items: [
          "Advanced analytics dashboard for server admins",
          "API access for third-party integrations",
          "Multi-language support (10+ languages)",
          "Voice channel orbit sessions",
          "Cross-server orbit matching",
          "OrbitKin mobile app integration"
        ]
      }
    ]
  },
  {
    version: "0.9.0-beta",
    date: "August 30, 2024",
    tag: "beta",
    title: "Public Beta - Orbit Modular Architecture",
    description: "Major architectural overhaul introducing modular Orbit system and enhanced matchmaking capabilities.",
    highlights: [
      "Modular Orbit architecture for better scalability",
      "Enhanced matchmaking algorithm with semantic analysis",
      "Improved theme system with full customization",
      "KuzuDB graph database integration",
      "Beta testing with pilot communities"
    ],
    categories: [
      {
        title: "🧠 Matchmaking System",
        icon: Brain,
        color: "text-orbitkin-purple",
        items: [
          "Semantic-enhanced matching using embeddings",
          "Graph-based compatibility scoring with KuzuDB",
          "Louvain clustering for group formation",
          "Equal opportunity matcher to ensure inclusivity",
          "Gender preference filtering options",
          "Goal segmentation for targeted matching",
          "Realistic quality scoring system"
        ]
      },
      {
        title: "🎨 Theme System 2.0",
        icon: Palette,
        color: "text-orbitkin-gold",
        items: [
          "Complete theme-driven UI system",
          "Cosmic Tech Magic theme as default",
          "Stripped down theme for minimalists",
          "Dynamic embed rendering based on themes",
          "Robust fallback system for missing keys",
          "Server-specific theme customization"
        ]
      },
      {
        title: "🏗️ Architecture",
        icon: Database,
        color: "text-blue-500",
        items: [
          "Modular Orbit system architecture",
          "Core/Edge separation for scalability",
          "KuzuDB graph database for relationships",
          "LanceDB for semantic search",
          "Improved data access layer",
          "Enhanced facilitation system"
        ]
      },
      {
        title: "🤖 Bot Features",
        icon: Bot,
        color: "text-green-500",
        items: [
          "Interactive questionnaire with modals",
          "Orbit management commands",
          "Admin panel with server statistics",
          "Developer setup commands",
          "User profile management",
          "Feedback system integration"
        ]
      }
    ]
  },
  {
    version: "0.8.0-alpha",
    date: "August 15, 2024",
    tag: "alpha",
    title: "MVP Mark 2 - Full Branding",
    description: "Complete branding overhaul and feature alignment with project vision.",
    categories: [
      {
        title: "✨ Core Features",
        icon: Sparkles,
        color: "text-orbitkin-gold",
        items: [
          "Comprehensive 77-question questionnaire",
          "Basic matching algorithm implementation",
          "Private Orbit channel creation",
          "Orbot facilitation bot integration",
          "User profile system with badges"
        ]
      },
      {
        title: "🎨 Branding & UI",
        icon: Heart,
        color: "text-pink-500",
        items: [
          "OrbitKin branding implementation",
          "Cosmic theme with space aesthetics",
          "Custom embeds with gradient colors",
          "Animated reactions and responses",
          "Consistent visual language"
        ]
      },
      {
        title: "⚙️ Admin Tools",
        icon: Shield,
        color: "text-green-500",
        items: [
          "Server setup wizard",
          "Admin control panel",
          "User management commands",
          "Orbit monitoring tools",
          "Backup and restore functionality"
        ]
      }
    ]
  },
  {
    version: "0.7.0-alpha",
    date: "July 2024",
    tag: "alpha",
    title: "MVP Iterations 12-13",
    description: "Pilot group testing and refinement based on feedback.",
    categories: [
      {
        title: "🧪 Pilot Testing",
        icon: Users,
        color: "text-orbitkin-light-blue",
        items: [
          "Pilot group size optimization (4-6 people)",
          "Questionnaire refinement based on feedback",
          "Improved onboarding flow",
          "Bug fixes from pilot testing",
          "Performance optimizations"
        ]
      },
      {
        title: "🐛 Bug Fixes",
        icon: Bug,
        color: "text-red-500",
        items: [
          "Fixed questionnaire timeout issues",
          "Resolved channel permission problems",
          "Fixed emoji reaction handling",
          "Improved error messages",
          "Database connection stability"
        ]
      }
    ]
  },
  {
    version: "0.5.0-alpha",
    date: "June 2024",
    tag: "alpha",
    title: "Initial Alpha Development",
    description: "Foundation of the OrbitKin Discord bot and core systems.",
    categories: [
      {
        title: "🏗️ Foundation",
        icon: Code,
        color: "text-gray-500",
        items: [
          "Discord.py bot framework setup",
          "PostgreSQL database integration",
          "Basic questionnaire system",
          "User data management",
          "Channel creation logic",
          "Permission system implementation"
        ]
      }
    ]
  }
]

const tagStyles = {
  current: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
  beta: "bg-gradient-to-r from-orbitkin-purple to-orbitkin-gold text-white",
  alpha: "bg-gradient-to-r from-gray-500 to-slate-500 text-white",
  stable: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
  rc: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
  planned: "bg-gradient-to-r from-blue-500 to-purple-500 text-white animate-pulse"
}

export default function Changelog() {
  return (
    <>
      <StarryBackground />
      <div className="min-h-screen bg-background relative">
        <div className="container mx-auto px-4 py-8">
          <Link href="/docs">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Documentation
            </Button>
          </Link>

          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-100 to-yellow-100 dark:from-orbitkin-purple/10 dark:to-orbitkin-gold/10 backdrop-blur-sm">
                  <GitCommit className="w-8 h-8 text-purple-600 dark:text-orbitkin-purple" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                OrbitKin <span className="gradient-text">Changelog</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Track the evolution of OrbitKin from concept to community-building platform
              </p>
            </motion.div>

            {/* Current Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 p-4 rounded-xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 border border-orbitkin-purple/20"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Current Version</p>
                  <p className="text-2xl font-bold">v0.9.0-beta</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground mb-1">Status</p>
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-orbitkin-purple to-orbitkin-gold text-white">
                    PUBLIC BETA
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Version Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orbitkin-purple via-orbitkin-gold to-orbitkin-light-blue dark:from-orbitkin-purple/50 dark:via-orbitkin-gold/50 dark:to-orbitkin-light-blue/50" />

              {/* Releases */}
              <div className="space-y-12">
                {releases.map((release, releaseIndex) => (
                  <motion.div
                    key={release.version}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: releaseIndex * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-orbitkin-purple to-orbitkin-gold border-4 border-background" />
                    
                    {/* Release content */}
                    <div className="ml-16">
                      {/* Version header */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h2 className="text-3xl font-bold">{release.version}</h2>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tagStyles[release.tag as keyof typeof tagStyles]}`}>
                          {release.tag.toUpperCase()}
                        </span>
                        <span className="text-sm text-muted-foreground">{release.date}</span>
                      </div>

                      {/* Release title and description */}
                      <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
                      <p className="text-muted-foreground mb-6">{release.description}</p>

                      {/* Highlights (if present) */}
                      {release.highlights && (
                        <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-orbitkin-purple/5 to-orbitkin-gold/5 dark:from-orbitkin-purple/10 dark:to-orbitkin-gold/10 border border-orbitkin-purple/20 dark:border-orbitkin-purple/30">
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <Rocket className="w-5 h-5 text-orbitkin-purple" />
                            Key Highlights
                          </h4>
                          <ul className="space-y-2">
                            {release.highlights.map((highlight, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Categories */}
                      <div className="space-y-6">
                        {release.categories.map((category, categoryIndex) => (
                          <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: releaseIndex * 0.1 + categoryIndex * 0.05 }}
                            className="bg-white dark:bg-card/50 backdrop-blur-sm rounded-xl p-6 border-2 border-gray-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow"
                          >
                            <h4 className={`font-semibold mb-4 flex items-center gap-2 ${category.color}`}>
                              {category.icon && <category.icon className="w-5 h-5" />}
                              {category.title}
                            </h4>
                            <ul className="space-y-2">
                              {category.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-muted-foreground">
                                  <span className="text-gray-400 dark:text-muted-foreground/50 mt-1">•</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-yellow-50 dark:from-orbitkin-purple/10 dark:to-orbitkin-gold/10 backdrop-blur-sm border border-gray-200 dark:border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-4">Join the Beta</h2>
              <p className="text-muted-foreground mb-6">
                OrbitKin is currently in public beta. Help us shape the future of meaningful connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs">
                  <Button>
                    <Bot className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground mt-2">
                  Questions? DM <strong>skygorilla</strong> on Discord
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}