"use client"

import Link from "next/link"
import { ArrowLeft, Users, TrendingUp, Shield, Zap, Bot, BarChart3, Settings, MessageSquare, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ForCommunities() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link href="/docs">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Documentation
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-orbitkin-gold/10 to-orbitkin-gold/5">
                <Users className="w-8 h-8 text-orbitkin-gold" />
              </div>
              <h1 className="text-4xl font-bold">OrbitKin for Communities</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Transform your online community into a thriving ecosystem of meaningful connections
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Why Community Leaders Choose OrbitKin</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white dark:bg-card/50 border-2 border-gray-200 dark:border-white/10">
                <TrendingUp className="w-8 h-8 text-orbitkin-gold mb-4" />
                <h3 className="text-lg font-semibold mb-2">5x Higher Engagement</h3>
                <p className="text-muted-foreground">
                  Members in Orbits participate more actively, contribute quality content, and stay engaged longer.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-card/50 border-2 border-gray-200 dark:border-white/10">
                <Users className="w-8 h-8 text-orbitkin-purple mb-4" />
                <h3 className="text-lg font-semibold mb-2">10x Better Retention</h3>
                <p className="text-muted-foreground">
                  Members with strong connections are far less likely to leave your community.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-card/50 border-2 border-gray-200 dark:border-white/10">
                <Shield className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Automated Moderation</h3>
                <p className="text-muted-foreground">
                  Smart matching reduces conflicts by grouping compatible personalities together.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-card/50 border-2 border-gray-200 dark:border-white/10">
                <BarChart3 className="w-8 h-8 text-orbitkin-light-blue mb-4" />
                <h3 className="text-lg font-semibold mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground">
                  Track community health, engagement metrics, and Orbit performance in real-time.
                </p>
              </div>
            </div>
          </motion.section>

          {/* How It Works for Communities */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orbitkin-purple/20 flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Easy Setup</h3>
                  <p className="text-muted-foreground">
                    Add OrbitKin to your platform, configure your preferences, and customize the experience to match your community's culture.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orbitkin-gold/20 flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Member Onboarding</h3>
                  <p className="text-muted-foreground">
                    New and existing members complete a thoughtful questionnaire that helps understand their interests, personality, and goals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orbitkin-light-blue/20 flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Smart Matching</h3>
                  <p className="text-muted-foreground">
                    Our algorithm creates Orbits of 4-6 highly compatible members, considering personality, interests, availability, and goals.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Ongoing Facilitation</h3>
                  <p className="text-muted-foreground">
                    Orbot facilitates connections with ice breakers, conversation prompts, and gentle nudges to keep Orbits active.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Platform Support */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Choose Your Platform</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Discord - Available */}
              <div className="relative group">
                <div className="p-6 rounded-xl bg-gradient-to-br from-[#5865F2]/10 to-[#5865F2]/5 border-2 border-[#5865F2]/30 hover:border-[#5865F2]/50 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <MessageSquare className="w-10 h-10 text-[#5865F2]" />
                    <span className="text-xs text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full font-medium">
                      Available Now
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Discord Servers</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Perfect for gaming communities, study groups, and social servers
                  </p>
                  <Link href="/for-servers">
                    <Button className="w-full bg-[#5865F2] hover:bg-[#5865F2]/90">
                      Learn More
                      <CheckCircle className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Other Platforms - Coming Soon */}
              <div className="relative opacity-60">
                <div className="p-6 rounded-xl bg-white dark:bg-card/50 border-2 border-gray-200 dark:border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <Bot className="w-10 h-10 text-gray-400" />
                    <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-900/30 px-2 py-1 rounded-full">
                      Coming 2025
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Other Platforms</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Support for more communication platforms
                  </p>
                  <Button className="w-full" disabled variant="outline">
                    Coming Soon
                  </Button>
                </div>
                <div className="absolute inset-0 bg-background/50 rounded-xl flex items-center justify-center">
                  <div className="bg-background/90 px-4 py-2 rounded-lg border">
                    <span className="text-sm font-medium">Coming Soon</span>
                  </div>
                </div>
              </div>

              {/* Custom Platforms - Coming Soon */}
              <div className="relative opacity-60">
                <div className="p-6 rounded-xl bg-white dark:bg-card/50 border-2 border-gray-200 dark:border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <Users className="w-10 h-10 text-gray-400" />
                    <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-900/30 px-2 py-1 rounded-full">
                      Coming Q2 2025
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Custom Platforms</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    API integration for your own platform or app
                  </p>
                  <Button className="w-full" disabled variant="outline">
                    Coming Soon
                  </Button>
                </div>
                <div className="absolute inset-0 bg-background/50 rounded-xl flex items-center justify-center">
                  <div className="bg-background/90 px-4 py-2 rounded-lg border">
                    <span className="text-sm font-medium">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Features for Community Managers */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Admin Features</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white dark:bg-card/50 border border-gray-200 dark:border-white/10">
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 text-orbitkin-purple mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Full Control</h3>
                    <p className="text-sm text-muted-foreground">
                      Configure matching parameters, set community guidelines, and customize the experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-card/50 border border-gray-200 dark:border-white/10">
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-orbitkin-gold mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Analytics Dashboard</h3>
                    <p className="text-sm text-muted-foreground">
                      Track member satisfaction, Orbit health, engagement metrics, and community growth.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-card/50 border border-gray-200 dark:border-white/10">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Moderation Tools</h3>
                    <p className="text-sm text-muted-foreground">
                      Monitor Orbits, handle reports, and ensure a safe environment for all members.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-card/50 border border-gray-200 dark:border-white/10">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-orbitkin-light-blue mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Automation</h3>
                    <p className="text-sm text-muted-foreground">
                      Automated matching cycles, reminders, and facilitation reduce your workload.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 border border-orbitkin-purple/20"
          >
            <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Community?</h2>
            <p className="text-muted-foreground mb-6">
              Join the beta and be among the first to revolutionize how your members connect.
            </p>
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Interested in OrbitKin for your community?
              </p>
              <p className="text-sm text-muted-foreground">
                DM <strong>skygorilla</strong> on Discord for early access
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}