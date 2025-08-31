import Link from "next/link"
import { ArrowLeft, Book, MessageCircle, MessageSquare, Smartphone, Monitor, HelpCircle, Lightbulb, Users, Sparkles, ChevronRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"

export default function Documentation() {
  const docSections = [
    {
      title: "Getting Started",
      icon: Sparkles,
      color: "text-orbitkin-purple",
      items: [
        { title: "What is OrbitKin?", href: "/docs/intro", description: "Learn about our social matching platform" },
        { title: "How Matching Works", href: "/docs/matching", description: "Understanding our matching algorithm" },
        { title: "Behind the Scenes", href: "/docs/behind-the-scenes", description: "Developer insights and the OrbitKin story" },
      ]
    },
    {
      title: "Platform Guides",
      icon: MessageCircle,
      color: "text-orbitkin-gold",
      items: [
        { title: "Discord Guide", href: "/docs/discord", description: "Complete guide for users and admins", badge: "Available Now" },
        { title: "Mobile App Guide", href: "/coming-soon", description: "Using OrbitKin on iOS and Android", badge: "Coming Soon" },
        { title: "Web App Guide", href: "/coming-soon", description: "Browser-based OrbitKin experience", badge: "In Development" },
      ]
    },
    {
      title: "User Resources",
      icon: Users,
      color: "text-orbitkin-light-blue",
      items: [
        { title: "Profile Management", href: "/docs/profile", description: "Managing your OrbitKin profile" },
        { title: "Privacy & Security", href: "/docs/privacy-guide", description: "Understanding your privacy options" },
        { title: "Orbit Best Practices", href: "/docs/best-practices", description: "Tips for successful Orbits" },
      ]
    },
    {
      title: "Support & Help",
      icon: HelpCircle,
      color: "text-green-500",
      items: [
        { title: "FAQ", href: "/docs/faq", description: "Frequently asked questions" },
        { title: "Troubleshooting", href: "/docs/troubleshooting", description: "Common issues and solutions" },
        { title: "Contact Support", href: "/docs/support", description: "Get help from our team" },
      ]
    },
    {
      title: "Learn More",
      icon: Lightbulb,
      color: "text-yellow-500",
      items: [
        { title: "Roadmap", href: "/docs/roadmap", description: "Upcoming features and improvements" },
        { title: "Research & Science", href: "/docs/research", description: "The psychology and science behind OrbitKin" },
        { title: "Changelog", href: "/changelog", description: "Latest updates and improvements" },
      ]
    },
    {
      title: "Community",
      icon: Heart,
      color: "text-pink-500",
      items: [
        { title: "Success Stories", href: "/docs/stories", description: "Real connections made through OrbitKin" },
        { title: "Feature Requests", href: "/docs/feature-requests", description: "Suggest new features" },
        { title: "Contact Developer", href: "https://discord.com/users/skygorilla", description: "Get support or ask questions" },
      ]
    }
  ]

  return (
    <>
      <StarryBackground />
      <div className="min-h-screen bg-background relative">
        <div className="container mx-auto px-4 py-8">
          <Link href="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-2xl bg-purple-100 dark:bg-primary/10 backdrop-blur-sm">
                  <Book className="w-8 h-8 text-purple-600 dark:text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                OrbitKin <span className="gradient-text">Documentation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about using OrbitKin across all platforms
              </p>
            </div>

            {/* Platform Selector */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-lg font-semibold text-center mb-6">Choose Your Platform</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {/* Discord - Available */}
                <Link 
                  href="/docs/discord"
                  className="group relative bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-orbitkin-purple/5 dark:to-orbitkin-purple/10 p-6 rounded-xl border border-purple-200 dark:border-orbitkin-purple/30 hover:border-purple-300 dark:hover:border-orbitkin-purple/50 transition-all hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <MessageSquare className="w-8 h-8 text-orbitkin-purple" />
                    <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-500 text-xs font-medium">
                      Available Now
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Discord</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Full bot integration with questionnaire, matching, and Orbit management
                  </p>
                  <div className="flex items-center text-sm text-orbitkin-purple group-hover:translate-x-1 transition-transform">
                    View Guides
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>

                {/* Mobile - Coming Soon */}
                <Link 
                  href="/coming-soon"
                  className="group relative bg-gray-50 dark:bg-black/20 p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-yellow-300 dark:hover:border-orbitkin-gold/30 transition-all hover:scale-[1.02] opacity-90"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Smartphone className="w-8 h-8 text-orbitkin-gold" />
                    <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-medium">
                      Coming Soon
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Mobile App</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Native iOS & Android apps with location-based matching
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-orbitkin-gold transition-colors">
                    Get Notified
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>

                {/* Web - Coming Soon */}
                <Link 
                  href="/coming-soon"
                  className="group relative bg-gray-50 dark:bg-black/20 p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-blue-300 dark:hover:border-orbitkin-light-blue/30 transition-all hover:scale-[1.02] opacity-90"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Monitor className="w-8 h-8 text-orbitkin-light-blue" />
                    <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-medium">
                      In Development
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Web App</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Browser-based experience accessible from any device
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground group-hover:text-orbitkin-light-blue transition-colors">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </div>
              
              <div className="text-center mt-6 p-4 rounded-lg bg-gray-50 dark:bg-black/10 border border-gray-200 dark:border-white/10">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Note:</span> All platforms share the same matching algorithm and create groups of 4-6 compatible people
                </p>
              </div>
            </div>

            {/* Documentation Sections */}
            <div className="space-y-12">
              {docSections.map((section) => (
                <div key={section.title}>
                  <div className="flex items-center gap-3 mb-6">
                    <section.icon className={`w-6 h-6 ${section.color}`} />
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {section.items.map((item) => (
                      <Link 
                        key={item.href}
                        href={item.href}
                        className="group relative bg-white dark:bg-black/20 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-purple-300 dark:hover:border-primary/50 transition-all hover:scale-[1.02] shadow-sm hover:shadow-md"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          {'badge' in item && item.badge && (
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              item.badge === "Available Now" 
                                ? "bg-green-500/20 text-green-500" 
                                : "bg-muted/20 text-muted-foreground"
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                        <ChevronRight className="absolute bottom-6 right-6 w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Popular Topics */}
            <div className="mt-16 p-8 rounded-2xl bg-gray-50 dark:bg-muted/10 backdrop-blur-sm border border-gray-200 dark:border-white/10">
              <h2 className="text-2xl font-semibold mb-6">Popular Topics</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-3 text-orbitkin-purple">Frequently Used</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/docs/discord" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" />
                        Discord command reference
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/matching" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" />
                        How matching works
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/privacy-guide" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" />
                        Privacy settings explained
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-orbitkin-gold">Troubleshooting</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/docs/troubleshooting" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" />
                        Bot not responding
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" />
                        Common questions
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/best-practices" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                        <ChevronRight className="w-3 h-3" />
                        Orbit best practices
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-yellow-50 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-gray-200 dark:border-white/10">
              <h2 className="text-2xl font-semibold mb-4">Can't find what you're looking for?</h2>
              <p className="text-muted-foreground mb-6">
                Our community and support team are here to help
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Join Discord
                </Button>
                <Button variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Add missing import for Mail icon
import { Mail } from "lucide-react"