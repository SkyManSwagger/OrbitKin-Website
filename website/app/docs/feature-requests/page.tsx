"use client"

import Link from "next/link"
import { ArrowLeft, Lightbulb, Send, TrendingUp, CheckCircle, Clock, XCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function FeatureRequestsPage() {
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
                  <Lightbulb className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Feature <span className="gradient-text">Requests</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Help shape the future of OrbitKin
              </p>
            </motion.div>

            {/* How to Submit */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-orbitkin-purple" />
                How to Submit a Feature Request
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white/5 dark:bg-black/10">
                    <h3 className="font-medium mb-2">Via Discord (Preferred)</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Use <code className="px-2 py-1 bg-black/20 rounded">ok!feedback</code></li>
                      <li>2. Start with "Feature Request:"</li>
                      <li>3. Describe your idea clearly</li>
                      <li>4. Explain the problem it solves</li>
                    </ol>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-white/5 dark:bg-black/10">
                    <h3 className="font-medium mb-2">What to Include</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Clear description of the feature</li>
                      <li>• Problem it solves or need it addresses</li>
                      <li>• Who would benefit from it</li>
                      <li>• Any implementation ideas (optional)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                <p className="text-sm text-muted-foreground">
                  <strong>Tip:</strong> The more detail you provide, the better we can understand and evaluate your request!
                </p>
              </div>
            </motion.section>

            {/* Current Requests */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Popular Feature Requests</h2>
              <div className="space-y-4">
                {/* Under Consideration */}
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Under Consideration</h3>
                    <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-xs">
                      <Clock className="w-3 h-3 inline mr-1" />
                      Evaluating
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-black/20">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Advanced Matching Preferences</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            More granular control over matching criteria and weights
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <TrendingUp className="w-3 h-3" />
                          <span>High demand</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-black/20">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Orbit History & Analytics</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            View past Orbits and track engagement metrics
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <TrendingUp className="w-3 h-3" />
                          <span>Medium demand</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-black/20">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Voice Channel Integration</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Optional voice channels for Orbits that want them
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <TrendingUp className="w-3 h-3" />
                          <span>Medium demand</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* In Development */}
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">In Development</h3>
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-500 text-xs">
                      <CheckCircle className="w-3 h-3 inline mr-1" />
                      Building
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-black/20">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Improved Onboarding Flow</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Streamlined questionnaire with progress saving
                          </p>
                        </div>
                        <div className="text-xs text-green-500">
                          Phase 1
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-black/20">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Theme Customization</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Server-specific bot themes and branding
                          </p>
                        </div>
                        <div className="text-xs text-green-500">
                          Phase 1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Not Planned */}
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg">Not Currently Planned</h3>
                    <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-500 text-xs">
                      <XCircle className="w-3 h-3 inline mr-1" />
                      Not Planned
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-black/20">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Multiple Simultaneous Orbits</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Being in multiple Orbits at once - conflicts with quality focus
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Quality over quantity
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-black/20">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Public Profiles</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Viewing other users' profiles - privacy is core to our values
                          </p>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Privacy focused
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Evaluation Criteria */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">How We Evaluate Requests</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-medium mb-2 text-orbitkin-purple">User Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    How many users would benefit and how significantly?
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-medium mb-2 text-orbitkin-gold">Alignment</h4>
                  <p className="text-sm text-muted-foreground">
                    Does it align with OrbitKin's mission and values?
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-medium mb-2 text-orbitkin-light-blue">Technical Feasibility</h4>
                  <p className="text-sm text-muted-foreground">
                    Can we implement it effectively with our resources?
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-medium mb-2 text-green-500">Community Demand</h4>
                  <p className="text-sm text-muted-foreground">
                    How many users are requesting this feature?
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Recent Updates */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Recently Implemented</h2>
              <div className="p-6 rounded-xl bg-green-500/10 backdrop-blur-sm border border-green-500/20">
                <p className="text-muted-foreground mb-4">
                  Features that started as community requests:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium">Facilitation Levels</p>
                      <p className="text-sm text-muted-foreground">
                        Adjustable bot interaction from None to High
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium">Edit Individual Answers</p>
                      <p className="text-sm text-muted-foreground">
                        Update specific questionnaire responses without redoing everything
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium">Departure Notifications</p>
                      <p className="text-sm text-muted-foreground">
                        Automatic notifications when someone leaves an Orbit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Submit Your Ideas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <Lightbulb className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Have an Idea?</h2>
              <p className="text-muted-foreground mb-6">
                Your feedback shapes OrbitKin. Every feature request is reviewed and considered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Submit via Discord
                </Button>
                <Link href="/docs/roadmap">
                  <Button variant="outline">View Roadmap</Button>
                </Link>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Use <code className="px-2 py-1 bg-black/20 rounded">ok!feedback</code> to submit your ideas
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}