"use client"

import Link from "next/link"
import { ArrowLeft, Brain, Users, Target, Heart, Clock, Sparkles, TrendingUp, AlertCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function MatchingPage() {
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
                  <Brain className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                How <span className="gradient-text">Matching</span> Works
              </h1>
              <p className="text-xl text-muted-foreground">
                The science behind creating compatible Orbits
              </p>
            </motion.div>

            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-6">The OrbitKin Difference</h2>
              <p className="text-muted-foreground mb-6">
                Unlike random grouping or simple interest matching, OrbitKin uses a sophisticated multi-dimensional 
                algorithm that considers compatibility across various factors to create groups where every member 
                can thrive and form meaningful connections.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-white/5 dark:bg-black/10">
                  <div className="text-3xl font-bold text-orbitkin-purple mb-1">Multi-Factor</div>
                  <div className="text-sm text-muted-foreground">Comprehensive analysis</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 dark:bg-black/10">
                  <div className="text-3xl font-bold text-orbitkin-gold mb-1">4-6</div>
                  <div className="text-sm text-muted-foreground">People per Orbit</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 dark:bg-black/10">
                  <div className="text-3xl font-bold text-orbitkin-light-blue mb-1">Quality</div>
                  <div className="text-sm text-muted-foreground">Over quantity</div>
                </div>
              </div>
            </motion.section>

            {/* Matching Factors */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">What We Consider</h2>
              <p className="text-muted-foreground mb-8">
                Our proprietary algorithm analyzes multiple dimensions of compatibility to create well-balanced groups. 
                While we can't reveal the exact formula (it's our secret sauce!), here's what matters:
              </p>
              
              <div className="space-y-6">
                {/* Values - MOST IMPORTANT */}
                <div className="p-6 rounded-xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 backdrop-blur-sm border-2 border-orbitkin-purple/50">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orbitkin-purple/20">
                      <Star className="w-6 h-6 text-orbitkin-purple" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        Core Values in Friendship
                        <span className="px-2 py-1 rounded-full bg-orbitkin-purple/20 text-orbitkin-purple text-xs">Primary Factor</span>
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        The foundation of lasting friendships. You select and rank your top 3 values from our curated list.
                      </p>
                      <div className="p-3 rounded-lg bg-black/20">
                        <p className="text-sm font-medium mb-2">Values we match on:</p>
                        <p className="text-xs text-muted-foreground">
                          Honesty • Loyalty • Kindness • Fun/Humor • Deep Conversation • 
                          Supportiveness • Reliability • Acceptance • Open-Mindedness • 
                          Respect • Intellectual Stimulation • Shared Activities
                        </p>
                        <p className="text-xs text-muted-foreground mt-2 italic">
                          The ranking you choose matters significantly in our algorithm.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interests */}
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orbitkin-gold/10">
                      <Heart className="w-6 h-6 text-orbitkin-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        Shared Interests
                        <span className="px-2 py-1 rounded-full bg-gray-500/20 text-gray-400 text-xs">Important</span>
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        We analyze both your broad interest categories and specific hobbies using advanced semantic matching.
                      </p>
                      <p className="text-xs text-muted-foreground italic">
                        Our system understands that "building robots" and "electronics tinkering" are related, even if not identical.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Personality */}
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-orbitkin-light-blue/10">
                      <Brain className="w-6 h-6 text-orbitkin-light-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        Personality Compatibility
                        <span className="px-2 py-1 rounded-full bg-gray-500/20 text-gray-400 text-xs">Important</span>
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        Using the scientifically-validated TIPI assessment, we ensure personality balance within groups.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        We consider: Extraversion • Agreeableness • Conscientiousness • Emotional Stability • Openness
                      </p>
                    </div>
                  </div>
                </div>

                {/* Other Factors */}
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-green-500/10">
                      <Users className="w-6 h-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        Additional Compatibility Factors
                        <span className="px-2 py-1 rounded-full bg-gray-500/20 text-gray-400 text-xs">Considered</span>
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        We also consider practical aspects to ensure your Orbit can thrive:
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Commitment Level:</strong> Matching engagement expectations</li>
                        <li>• <strong>Communication Style:</strong> Compatible interaction preferences</li>
                        <li>• <strong>Availability:</strong> Overlapping time slots for group activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* The Algorithm */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-orbitkin-purple/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Profile Analysis</h3>
                    <p className="text-sm text-muted-foreground">
                      We analyze your complete questionnaire to understand your friendship preferences
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-orbitkin-gold/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Smart Matching</h3>
                    <p className="text-sm text-muted-foreground">
                      Our algorithm finds people who complement your personality and share your values
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-orbitkin-light-blue/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Group Formation</h3>
                    <p className="text-sm text-muted-foreground">
                      We create small groups optimized for friendship potential and group harmony
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Quality Check</h3>
                    <p className="text-sm text-muted-foreground">
                      Every Orbit must meet our quality standards before being created
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Launch Your Orbit</h3>
                    <p className="text-sm text-muted-foreground">
                      Your new friend group is created with a dedicated Discord space
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Quality Metrics */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Our Quality Promise</h2>
              <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                    <div>
                      <h3 className="font-medium mb-1">High Compatibility Standards</h3>
                      <p className="text-sm text-muted-foreground">
                        Every Orbit must meet our strict quality thresholds before being created
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                    <div>
                      <h3 className="font-medium mb-1">Balanced Group Dynamics</h3>
                      <p className="text-sm text-muted-foreground">
                        We ensure each group has complementary personalities and shared interests
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2"></div>
                    <div>
                      <h3 className="font-medium mb-1">Continuous Improvement</h3>
                      <p className="text-sm text-muted-foreground">
                        Our algorithm learns and improves from successful Orbit formations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Important Notes */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <div className="p-6 rounded-xl bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-500" />
                  Important to Know
                </h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-0.5">•</span>
                    <span>More users in the pool means better matches - quality improves with scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-0.5">•</span>
                    <span>Complete profiles get prioritized and receive better matches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-0.5">•</span>
                    <span>The algorithm continuously improves based on Orbit success metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-0.5">•</span>
                    <span>Gender preferences and age ranges are respected when provided</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-0.5">•</span>
                    <span>You can only be in one Orbit at a time to ensure quality engagement</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Learn More */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Ready to Find Your Orbit?</h2>
              <p className="text-muted-foreground mb-6">
                The more complete and honest your profile, the better your matches will be!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/discord/user">
                  <Button>Get Started Guide</Button>
                </Link>
                <Link href="/docs/best-practices">
                  <Button variant="outline">Best Practices</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}