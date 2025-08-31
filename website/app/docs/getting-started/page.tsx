"use client"

import Link from "next/link"
import { ArrowLeft, MessageCircle, Users, Sparkles, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function GettingStarted() {
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
              <div className="p-3 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-purple/5">
                <Sparkles className="w-8 h-8 text-orbitkin-purple" />
              </div>
              <h1 className="text-4xl font-bold">Getting Started with OrbitKin</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Your journey to meaningful connections starts here
            </p>
          </motion.div>

          {/* Steps */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-8">How to Join an Orbit</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orbitkin-purple/20 flex items-center justify-center text-lg font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Find OrbitKin in Your Community</h3>
                  <p className="text-muted-foreground mb-4">
                    Look for OrbitKin in Discord servers you're already part of, or ask community leaders to add it.
                  </p>
                  <div className="p-4 rounded-lg bg-white dark:bg-card/50 border-2 border-gray-200 dark:border-white/10">
                    <p className="text-sm text-muted-foreground">
                      <strong>Community Leader?</strong> Check out our <Link href="/docs/for-communities" className="text-orbitkin-purple hover:underline">guide for communities</Link>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orbitkin-gold/20 flex items-center justify-center text-lg font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Complete the Questionnaire</h3>
                  <p className="text-muted-foreground mb-4">
                    Answer thoughtful questions about your interests, personality, goals, and availability. This helps us find your perfect match.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 rounded-lg bg-white dark:bg-card/50 border border-gray-200 dark:border-white/10">
                      <h4 className="font-medium text-sm mb-1">Interests & Hobbies</h4>
                      <p className="text-xs text-muted-foreground">What you love to do</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-card/50 border border-gray-200 dark:border-white/10">
                      <h4 className="font-medium text-sm mb-1">Personality Traits</h4>
                      <p className="text-xs text-muted-foreground">How you interact with others</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-card/50 border border-gray-200 dark:border-white/10">
                      <h4 className="font-medium text-sm mb-1">Goals & Objectives</h4>
                      <p className="text-xs text-muted-foreground">What you want to achieve</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white dark:bg-card/50 border border-gray-200 dark:border-white/10">
                      <h4 className="font-medium text-sm mb-1">Availability</h4>
                      <p className="text-xs text-muted-foreground">When you're most active</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orbitkin-light-blue/20 flex items-center justify-center text-lg font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Get Matched</h3>
                  <p className="text-muted-foreground mb-4">
                    Our intelligent algorithm analyzes your responses and finds 4-6 highly compatible people to form your Orbit.
                  </p>
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-r from-orbitkin-purple/5 to-orbitkin-gold/5 border border-orbitkin-purple/20">
                    <Users className="w-6 h-6 text-orbitkin-purple" />
                    <span className="text-sm font-medium">Perfect group size for meaningful connections</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-lg font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Join Your Orbit</h3>
                  <p className="text-muted-foreground mb-4">
                    You'll receive an invitation to your private Orbit channel where you can start building genuine connections.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Private channel with your matched group</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Orbot facilitation to break the ice</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Shared interests and compatible personalities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Tips */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">Tips for Success</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white dark:bg-card/50 border-2 border-gray-200 dark:border-white/10">
                <h3 className="font-semibold mb-3">Be Authentic</h3>
                <p className="text-sm text-muted-foreground">
                  Answer the questionnaire honestly. The better we understand you, the better your matches will be.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-card/50 border-2 border-gray-200 dark:border-white/10">
                <h3 className="font-semibold mb-3">Stay Active</h3>
                <p className="text-sm text-muted-foreground">
                  Participate in your Orbit regularly. Consistent interaction helps build stronger connections.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-card/50 border-2 border-gray-200 dark:border-white/10">
                <h3 className="font-semibold mb-3">Be Patient</h3>
                <p className="text-sm text-muted-foreground">
                  Real friendships take time to develop. Give your Orbit space to grow naturally.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-card/50 border-2 border-gray-200 dark:border-white/10">
                <h3 className="font-semibold mb-3">Use Orbot</h3>
                <p className="text-sm text-muted-foreground">
                  Take advantage of conversation starters and activities suggested by our AI facilitator.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 border border-orbitkin-purple/20"
          >
            <h2 className="text-2xl font-semibold mb-4">Ready to Find Your Orbit?</h2>
            <p className="text-muted-foreground mb-6">
              Questions about getting started or want to join the beta?
            </p>
            <p className="text-sm text-muted-foreground">
              <Sparkles className="w-4 h-4 inline mr-1" />
              DM <strong>skygorilla</strong> on Discord
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}