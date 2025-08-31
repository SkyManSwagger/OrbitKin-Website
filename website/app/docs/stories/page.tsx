"use client"

import Link from "next/link"
import { ArrowLeft, Heart, Users, Sparkles, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function SuccessStoriesPage() {
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

          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-2xl bg-pink-500/10 backdrop-blur-sm">
                  <Heart className="w-8 h-8 text-pink-500" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Success <span className="gradient-text">Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Real connections made through OrbitKin
              </p>
            </motion.div>

            {/* Beta Notice */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-semibold mb-4">Building Our Story Together</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  OrbitKin is currently in beta, and we're just beginning to see the amazing connections 
                  forming in our community. As our platform grows, we'll be featuring real stories from 
                  users who have found meaningful friendships through OrbitKin.
                </p>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Be among the first to share your story!
                </div>
              </div>
            </motion.section>

            {/* What Makes a Success Story */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">What We're Looking For</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-3 text-orbitkin-purple">Friendship Formation</h3>
                  <p className="text-sm text-muted-foreground">
                    Stories about how your Orbit evolved from strangers to friends, the moments that 
                    brought you together, and the bonds you've formed.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-3 text-orbitkin-gold">Shared Experiences</h3>
                  <p className="text-sm text-muted-foreground">
                    Activities you've done together, games you've played, projects you've collaborated on, 
                    or memorable conversations that made a difference.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-3 text-orbitkin-light-blue">Personal Growth</h3>
                  <p className="text-sm text-muted-foreground">
                    How being part of an Orbit has helped you grow, learn new things, or step out of 
                    your comfort zone.
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-3 text-green-500">Support & Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Times when your Orbit members were there for you, or how you've supported each other 
                    through challenges.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Share Your Story */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-orbitkin-purple/20 to-orbitkin-gold/20 backdrop-blur-sm border border-white/10">
                <h2 className="text-2xl font-semibold mb-6 text-center">Share Your OrbitKin Story</h2>
                <p className="text-muted-foreground text-center mb-8">
                  Has OrbitKin helped you form meaningful connections? We'd love to hear about it!
                </p>
                
                <div className="space-y-4 max-w-2xl mx-auto">
                  <div className="p-4 rounded-lg bg-white/5 dark:bg-black/10">
                    <h4 className="font-medium mb-2">How to Submit Your Story</h4>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Use the <code className="px-2 py-1 bg-black/20 rounded">ok!feedback</code> command in Discord</li>
                      <li>2. Start your message with "Success Story:"</li>
                      <li>3. Tell us about your Orbit experience</li>
                      <li>4. Include what made it special for you</li>
                    </ol>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-white/5 dark:bg-black/10">
                    <h4 className="font-medium mb-2">What to Include</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• How long you've been in your Orbit</li>
                      <li>• What brought your group together</li>
                      <li>• Memorable moments or conversations</li>
                      <li>• How OrbitKin made a difference</li>
                      <li>• (Optional) Permission to share publicly</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <Button size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Submit via Discord
                  </Button>
                </div>
              </div>
            </motion.section>

            {/* Coming Soon */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-br from-orbitkin-purple/10 to-orbitkin-gold/10 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl font-semibold mb-4">Stories Coming Soon</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    As we're in early beta, we're waiting to collect authentic feedback and real success stories 
                    from our users. Be one of the first to share your experience!
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Be Part of Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Join OrbitKin today and start forming your own meaningful connections. 
                Your success story could be featured here!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/discord/user">
                  <Button>Get Started</Button>
                </Link>
                <Link href="/docs/best-practices">
                  <Button variant="outline">Tips for Success</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}