"use client"

import Link from "next/link"
import { ArrowLeft, Rocket, CheckCircle, Circle, Clock, Sparkles, Smartphone, Globe, Bot, Users, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function RoadmapPage() {
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
                  <Rocket className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                OrbitKin <span className="gradient-text">Strategic Roadmap</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-2">
                From Discord MVP to Global Connection Platform
              </p>
              <p className="text-sm text-muted-foreground italic">
                Our phased journey to combat social isolation and help millions discover their Kin
              </p>
            </motion.div>

            {/* Vision Statement */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-orbitkin-gold" />
                <h2 className="text-lg font-semibold">Our North Star</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To create a worldwide application dedicated to fostering genuine platonic friendships, 
                helping adults (18+) discover their "Kin" within supportive "Orbits," guided by our AI 
                facilitator Orbot, all within an immersive "Cosmic Tech-Magic" experience.
              </p>
            </motion.section>

            {/* Current Status */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur-sm border border-green-500/20"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" />
                Phase 1: Discord Validation (Current Focus)
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Bot className="w-4 h-4 text-green-500" />
                    Discord Integration
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Comprehensive questionnaire system</li>
                    <li>• Values-based matching (45.5% weight)</li>
                    <li>• TIPI personality assessment</li>
                    <li>• Automated Orbit creation & management</li>
                    <li>• 4 facilitation levels (None to High)</li>
                    <li>• Admin panel & moderation tools</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-green-500" />
                    User Features
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Complete profile management</li>
                    <li>• Data privacy controls (GDPR compliant)</li>
                    <li>• Dynamic group matching</li>
                    <li>• Feedback & reporting system</li>
                    <li>• Edit answers anytime</li>
                    <li>• Leave/rejoin functionality</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="text-sm text-green-500">
                  ✨ <strong>Recent:</strong> Enhanced matching algorithm with semantic analysis and improved compatibility scoring
                </p>
              </div>
            </motion.section>

            {/* Timeline */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-8">Development Timeline</h2>
              
              <div className="space-y-8">
                {/* Phase 1 - Discord Validation */}
                <div className="relative">
                  <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-orbitkin-purple to-transparent"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-orbitkin-purple/20 border-2 border-orbitkin-purple flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orbitkin-purple" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">Phase 1: Discord Bot - Validation & Community Building</h3>
                        <span className="px-2 py-1 rounded-full bg-orbitkin-purple/20 text-orbitkin-purple text-xs">Current</span>
                      </div>
                      <p className="text-muted-foreground mb-4">Leveraging Discord to validate concepts and build initial community</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                          <h4 className="font-medium mb-2">Stage 1.1: Controlled Testing</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              20-person private testing server
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              Core bot functionality validation
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              Questionnaire effectiveness testing
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              Initial feedback gathering
                            </li>
                          </ul>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                          <h4 className="font-medium mb-2">Stage 1.2: Medium Server Pilot</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li className="flex items-center gap-2">
                              <Clock className="w-3 h-3 text-yellow-500" />
                              1,000-2,000 member server expansion
                            </li>
                            <li className="flex items-center gap-2">
                              <Circle className="w-3 h-3 text-muted-foreground" />
                              Scalability testing
                            </li>
                            <li className="flex items-center gap-2">
                              <Circle className="w-3 h-3 text-muted-foreground" />
                              Community management strategies
                            </li>
                            <li className="flex items-center gap-2">
                              <Circle className="w-3 h-3 text-muted-foreground" />
                              Engagement metrics tracking
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                          <h4 className="font-medium mb-2">Stage 1.3: Multi-Server Expansion</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Deploy to 3-5 medium servers</li>
                            <li>• Test across different communities</li>
                            <li>• Refine onboarding processes</li>
                            <li>• Develop admin/moderator guides</li>
                          </ul>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                          <h4 className="font-medium mb-2">Stage 1.4: Large Server Push</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• 10k+ member servers</li>
                            <li>• Stress-test infrastructure</li>
                            <li>• Maximize Discord reach</li>
                            <li>• Gather scale insights</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 2 - University Pilot & Standalone App */}
                <div className="relative">
                  <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-orbitkin-gold to-transparent"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-orbitkin-gold/20 border-2 border-orbitkin-gold/50 border-dashed flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-orbitkin-gold" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">Phase 2: University Pilot & Standalone App</h3>
                        <span className="px-2 py-1 rounded-full bg-orbitkin-gold/20 text-orbitkin-gold text-xs">Year 2-3</span>
                      </div>
                      <p className="text-muted-foreground mb-4">Transitioning to dedicated platform with academic validation</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                          <h4 className="font-medium mb-2">University Partnership</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Partner with Master's program institution</li>
                            <li>• Adapt for college student needs</li>
                            <li>• Collaborate with student affairs</li>
                            <li>• Pilot standalone app on campus</li>
                          </ul>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                          <h4 className="font-medium mb-2">App Development</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Standalone app MVP</li>
                            <li>• Mobile clients (iOS/Android)</li>
                            <li>• Enhanced Orbot integration</li>
                            <li>• Study groups & campus events</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 3 - Community Expansion */}
                <div className="relative">
                  <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-orbitkin-light-blue to-transparent"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-orbitkin-light-blue/20 border-2 border-orbitkin-light-blue/30 border-dashed flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-orbitkin-light-blue" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">Phase 3: College & Community Expansion</h3>
                        <span className="px-2 py-1 rounded-full bg-orbitkin-light-blue/20 text-orbitkin-light-blue text-xs">Year 3-4</span>
                      </div>
                      <p className="text-muted-foreground mb-4">Scaling within academics and diversifying to niche communities</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                          <h4 className="font-medium mb-2">Multi-College Rollout</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Expand to multiple universities</li>
                            <li>• Student-focused features</li>
                            <li>• Study Orbits creation</li>
                            <li>• Campus event integration</li>
                          </ul>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                          <h4 className="font-medium mb-2">Social Clubs & Communities</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Book clubs & hobby groups</li>
                            <li>• Gaming guilds integration</li>
                            <li>• Interest-based Orbits</li>
                            <li>• Club leader tools</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 4 - Urban & Regional */}
                <div className="relative">
                  <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-purple-500/20 border-2 border-purple-500/30 border-dashed flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-6 h-6 text-purple-500" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">Phase 4: Urban & Regional Expansion</h3>
                        <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-500 text-xs">Year 4-5</span>
                      </div>
                      <p className="text-muted-foreground mb-4">Geographic growth with local connection features</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                          <h4 className="font-medium mb-2">City-Focused Launch</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Target key urban markets</li>
                            <li>• Local community partnerships</li>
                            <li>• Geo-targeted campaigns</li>
                            <li>• Location-aware features</li>
                          </ul>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                          <h4 className="font-medium mb-2">Mobile Platform</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• iOS & Android apps</li>
                            <li>• Push notifications</li>
                            <li>• Real-time messaging</li>
                            <li>• Optional in-person meetups</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phase 5 - Global Platform */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orbitkin-purple/20 to-orbitkin-gold/20 border-2 border-white/20 border-dashed flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">Phase 5: Global Platform & Continuous Evolution</h3>
                        <span className="px-2 py-1 rounded-full bg-gradient-to-r from-orbitkin-purple/20 to-orbitkin-gold/20 text-primary text-xs">Year 5+</span>
                      </div>
                      <p className="text-muted-foreground mb-4">Worldwide platform for meaningful platonic connections</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                          <h4 className="font-medium mb-2">Global Scaling</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Internationalization & localization</li>
                            <li>• Global marketing campaigns</li>
                            <li>• Cross-cultural Orbits</li>
                            <li>• 24/7 support infrastructure</li>
                          </ul>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                          <h4 className="font-medium mb-2">Advanced Features</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Enhanced Orbot AI capabilities</li>
                            <li>• Video chat integration</li>
                            <li>• Premium services (freemium model)</li>
                            <li>• API & developer ecosystem</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Guiding Principles */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-orbitkin-purple" />
                Guiding Principles
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-medium mb-2 text-orbitkin-gold">Community-Centric Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Every feature and decision prioritizes the needs and experiences of our Kindreds (users)
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-medium mb-2 text-orbitkin-purple">Iterative Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Each phase informs the next through rigorous data collection and user feedback
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-medium mb-2 text-orbitkin-light-blue">Genuine Connection Focus</h4>
                  <p className="text-sm text-muted-foreground">
                    Success is measured by authentic, supportive platonic friendships formed
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-medium mb-2 text-green-500">Safety & Well-being</h4>
                  <p className="text-sm text-muted-foreground">
                    Creating a safe, respectful, and trustworthy environment for all users
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Feature Priorities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Under Consideration</h2>
              <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                <p className="text-muted-foreground mb-4">
                  Features being evaluated based on user feedback and technical feasibility:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
                    <span className="text-sm font-medium">Orbit reunion features</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500">High Priority</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
                    <span className="text-sm font-medium">Interest-specific matching modes</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-500">High Priority</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
                    <span className="text-sm font-medium">Cross-server Orbit connections</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-500">Evaluating</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
                    <span className="text-sm font-medium">Timezone-aware matching</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-500">Planning</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
                    <span className="text-sm font-medium">WhatsApp/Telegram integration</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-500">Future</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/20">
                    <span className="text-sm font-medium">Professional networking mode</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-500">Research</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Have ideas? Use <code className="px-1 py-0.5 bg-black/20 rounded">ok!feedback</code> in Discord to share!
                </p>
              </div>
            </motion.section>

            {/* Get Involved */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Shape Our Future</h2>
              <p className="text-muted-foreground mb-6">
                Your feedback drives our development. Help us build the features that matter most to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/feature-requests">
                  <Button>Submit Feature Request</Button>
                </Link>
                <Button variant="outline">
                  Join Beta Testing
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}