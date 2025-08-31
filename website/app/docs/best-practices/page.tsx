"use client"

import Link from "next/link"
import { ArrowLeft, Heart, MessageCircle, Users, Clock, Settings, Sparkles, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function BestPracticesPage() {
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
                <div className="p-3 rounded-2xl bg-yellow-500/10 backdrop-blur-sm">
                  <Heart className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Orbit <span className="gradient-text">Best Practices</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Tips for building meaningful connections in your Orbit
              </p>
            </motion.div>

            {/* Key Principles */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-6">The Four Pillars of Successful Orbits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-orbitkin-purple/20 flex items-center justify-center mb-3">
                    <Heart className="w-8 h-8 text-orbitkin-purple" />
                  </div>
                  <h3 className="font-semibold mb-2">Authenticity</h3>
                  <p className="text-sm text-muted-foreground">
                    Be yourself - genuine connections form when people are real
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-orbitkin-gold/20 flex items-center justify-center mb-3">
                    <MessageCircle className="w-8 h-8 text-orbitkin-gold" />
                  </div>
                  <h3 className="font-semibold mb-2">Engagement</h3>
                  <p className="text-sm text-muted-foreground">
                    Active participation creates momentum for the whole group
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-orbitkin-light-blue/20 flex items-center justify-center mb-3">
                    <Users className="w-8 h-8 text-orbitkin-light-blue" />
                  </div>
                  <h3 className="font-semibold mb-2">Respect</h3>
                  <p className="text-sm text-muted-foreground">
                    Value differences and create an inclusive environment
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                    <Clock className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Patience</h3>
                  <p className="text-sm text-muted-foreground">
                    Great friendships take time to develop naturally
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Getting Started in Your Orbit */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Your First Week in an Orbit</h2>
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">👋</span>
                    Day 1-2: Break the Ice
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-green-500 mb-2">Do This:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Introduce yourself beyond the basics</li>
                        <li>• Share something you're excited about</li>
                        <li>• Ask open-ended questions</li>
                        <li>• React to others' messages</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-red-500 mb-2">Avoid This:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Waiting for others to start</li>
                        <li>• One-word responses</li>
                        <li>• Dominating the conversation</li>
                        <li>• Being too formal</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎯</span>
                    Day 3-4: Find Common Ground
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-green-500 mb-2">Do This:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Discover shared interests</li>
                        <li>• Suggest group activities</li>
                        <li>• Share relevant content/memes</li>
                        <li>• Build on others' topics</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-red-500 mb-2">Avoid This:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Forcing connections</li>
                        <li>• Ignoring certain members</li>
                        <li>• Only talking about yourself</li>
                        <li>• Controversial topics too early</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    Day 5-7: Build Momentum
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-green-500 mb-2">Do This:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Establish regular check-ins</li>
                        <li>• Start deeper conversations</li>
                        <li>• Plan future interactions</li>
                        <li>• Celebrate small wins together</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-red-500 mb-2">Avoid This:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Letting momentum die</li>
                        <li>• Expecting instant friendship</li>
                        <li>• Giving up if it's slow</li>
                        <li>• Comparing to other Orbits</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Conversation Starters */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Conversation Starters That Work</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-medium mb-3 text-orbitkin-purple">Getting to Know You</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>"What's something you're looking forward to this week?"</li>
                    <li>"What hobby have you been into lately?"</li>
                    <li>"What's your ideal weekend look like?"</li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-medium mb-3 text-orbitkin-gold">Fun & Light</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>"Would you rather have telepathy or teleportation?"</li>
                    <li>"What's your most controversial food opinion?"</li>
                    <li>"Share your current favorite song/playlist!"</li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-medium mb-3 text-orbitkin-light-blue">Deeper Discussions</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>"What's a skill you'd love to learn?"</li>
                    <li>"What's the best advice you've ever received?"</li>
                    <li>"What small thing made you smile today?"</li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-medium mb-3 text-green-500">Group Activities</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>"Anyone up for a game night this week?"</li>
                    <li>"Let's share our top 3 [movies/books/games]"</li>
                    <li>"Photo challenge: share your view right now!"</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Facilitation Settings Guide */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Using Facilitation Effectively</h2>
              <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <p className="text-muted-foreground mb-6">
                  Adjust your Orbit's facilitation level based on group needs:
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-black/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium flex items-center gap-2">
                        🚫 None
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500">
                        For established groups
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Best when: Your Orbit is self-sustaining and values complete privacy
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-black/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium flex items-center gap-2">
                        🔕 Low
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-500">
                        Gentle nudges
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Best when: Group is active but could use occasional conversation starters
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-black/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium flex items-center gap-2">
                        ⚖️ Medium
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-orbitkin-purple/20 text-orbitkin-purple">
                        Recommended default
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Best when: Starting out or maintaining steady engagement
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg bg-black/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium flex items-center gap-2">
                        🔥 High
                      </span>
                      <span className="text-xs px-2 py-1 rounded-full bg-orbitkin-gold/20 text-orbitkin-gold">
                        Maximum support
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Best when: Group needs help getting started or re-energizing
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Common Challenges */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Overcoming Common Challenges</h2>
              <div className="space-y-4">
                <details className="group">
                  <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="font-medium">The group is too quiet</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Be the conversation starter - someone has to go first!</li>
                      <li>• Share something interesting from your day</li>
                      <li>• Increase facilitation level temporarily</li>
                      <li>• Try activity-based conversations (games, challenges)</li>
                      <li>• Remember: quality over quantity in conversations</li>
                    </ul>
                  </div>
                </details>
                
                <details className="group">
                  <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="font-medium">One person dominates conversations</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Actively engage quieter members with questions</li>
                      <li>• Create space for others by asking for their thoughts</li>
                      <li>• Suggest turn-based activities</li>
                      <li>• If you're the talkative one, practice the pause</li>
                      <li>• Use reactions to show you're engaged without dominating</li>
                    </ul>
                  </div>
                </details>
                
                <details className="group">
                  <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="font-medium">Different time zones make it hard</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Find overlap hours and make them count</li>
                      <li>• Use asynchronous conversations (ongoing topics)</li>
                      <li>• Share updates about your day for others to read later</li>
                      <li>• Plan weekly "everyone online" times</li>
                      <li>• Be patient with response times</li>
                    </ul>
                  </div>
                </details>
                
                <details className="group">
                  <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="font-medium">Not clicking with the group</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Give it at least 2 weeks - connections take time</li>
                      <li>• Focus on individual connections within the group</li>
                      <li>• Be open about different communication styles</li>
                      <li>• Try different conversation topics</li>
                      <li>• It's okay to leave if it's really not working</li>
                    </ul>
                  </div>
                </details>
              </div>
            </motion.section>

            {/* Success Indicators */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Signs of a Thriving Orbit</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <h4 className="font-medium mb-3 flex items-center gap-2 text-green-500">
                    <CheckCircle className="w-5 h-5" />
                    Healthy Signs
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Regular but not overwhelming activity</li>
                    <li>• Everyone participates at their comfort level</li>
                    <li>• Natural conversation flow</li>
                    <li>• Members support each other</li>
                    <li>• Inside jokes and shared memories forming</li>
                    <li>• Planning future activities together</li>
                  </ul>
                </div>
                
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                  <h4 className="font-medium mb-3 flex items-center gap-2 text-red-500">
                    <XCircle className="w-5 h-5" />
                    Warning Signs
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Days of complete silence</li>
                    <li>• Only 1-2 active members</li>
                    <li>• Forced or awkward conversations</li>
                    <li>• Negative or hostile interactions</li>
                    <li>• Members leaving frequently</li>
                    <li>• No engagement with prompts</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Final Tips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Remember</h2>
              <p className="text-muted-foreground mb-6">
                Every Orbit is unique. What works for one group might not work for another. 
                Be patient, be yourself, and give your connections time to grow naturally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/faq">
                  <Button variant="outline">View FAQ</Button>
                </Link>
                <Link href="/docs/troubleshooting">
                  <Button variant="outline">Troubleshooting</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}