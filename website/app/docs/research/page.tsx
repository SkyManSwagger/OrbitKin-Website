"use client"

import Link from "next/link"
import { ArrowLeft, Brain, Users, Heart, BarChart, Lightbulb, Shield, Target, BookOpen, FlaskConical, TrendingUp, Sparkles, AlertTriangle, Globe, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function ResearchAndScience() {
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
                <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-100 to-yellow-100 dark:from-orbitkin-purple/10 dark:to-orbitkin-gold/10 backdrop-blur-sm">
                  <Brain className="w-8 h-8 text-purple-600 dark:text-orbitkin-purple" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Research & <span className="gradient-text">Science</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                The psychology, neuroscience, and social science behind meaningful connections
              </p>
            </motion.div>

            {/* Core Research Foundations */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-yellow-50 dark:from-orbitkin-purple/10 dark:to-orbitkin-gold/10 backdrop-blur-sm border border-gray-200 dark:border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <FlaskConical className="w-6 h-6 text-orbitkin-purple" />
                Our Scientific Foundation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OrbitKin isn't based on hunches or Silicon Valley trends. Every design decision is grounded in 
                decades of peer-reviewed research across multiple disciplines. We've synthesized findings from 
                social psychology, neuroscience, group dynamics, and network theory to create a platform that 
                actually works.
              </p>
              <p className="text-foreground font-medium">
                Here's the science that powers our approach to connection.
              </p>
            </motion.section>

            {/* The Need to Belong */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-pink-500" />
                The Fundamental Need to Belong
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-pink-500">Baumeister & Leary's Groundbreaking Theory</h3>
                  <p className="text-muted-foreground mb-4">
                    In their seminal 1995 paper, Roy Baumeister and Mark Leary established that the need to belong is 
                    a fundamental human motivation—as essential as food, water, or shelter. This isn't just poetry; 
                    it's hard science with profound implications.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-0.5">•</span>
                      <span>Humans have an innate drive to form and maintain lasting, positive relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-0.5">•</span>
                      <span>This need requires both frequent interaction AND persistent caring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-0.5">•</span>
                      <span>Quality trumps quantity—a few deep connections satisfy this need better than many shallow ones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-500 mt-0.5">•</span>
                      <span>Deprivation of belonging leads to severe psychological and physical consequences</span>
                    </li>
                  </ul>
                  <p className="text-foreground mt-4 font-medium">
                    OrbitKin directly addresses this fundamental need by creating intentional spaces for meaningful connection.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-orbitkin-purple">Evolutionary Roots</h3>
                  <p className="text-muted-foreground mb-3">
                    Our ancestors survived in small bands of 25-30 individuals, with core groups of 4-6 for hunting 
                    and protection. Those who formed strong bonds survived; loners perished. This evolutionary pressure 
                    shaped our modern brains to crave small, tight-knit groups.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    This explains why large Discord servers feel lonely despite thousands of members—our brains 
                    aren't wired for mass connection.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Dunbar's Number and Group Size */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-orbitkin-gold" />
                The Science of Group Size
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-orbitkin-gold">Dunbar's Layers (Refined)</h3>
                  <p className="text-muted-foreground mb-4">
                    Robin Dunbar's extensive research reveals that humans maintain relationships in distinct layers, 
                    each constrained by our cognitive capacity (neocortex size):
                  </p>
                  {/* Dunbar's Layers Visual */}
                  <div className="space-y-4">
                    <div className="relative">
                      {/* Visual representation of Dunbar's layers */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-gray-50 dark:bg-white/5 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold text-orbitkin-gold">Support Clique</span>
                              <span className="text-xs text-muted-foreground">3-5 people</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-3 overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-orbitkin-gold to-orbitkin-purple rounded-full" style={{width: '40%'}}></div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">40% of social time</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-gray-50 dark:bg-white/5 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold text-orbitkin-purple">Sympathy Group</span>
                              <span className="text-xs text-muted-foreground">12-15 people</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-3 overflow-hidden">
                              <div className="h-full bg-orbitkin-purple/70 rounded-full" style={{width: '20%'}}></div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">20% of social time</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-gray-50 dark:bg-white/5 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold text-orbitkin-light-blue">Affinity Group</span>
                              <span className="text-xs text-muted-foreground">~50 people</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-3 overflow-hidden">
                              <div className="h-full bg-orbitkin-light-blue/50 rounded-full" style={{width: '15%'}}></div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">15% of social time</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-gray-50 dark:bg-white/5 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold text-green-500">Stable Network</span>
                              <span className="text-xs text-muted-foreground">~150 people</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-3 overflow-hidden">
                              <div className="h-full bg-green-500/40 rounded-full" style={{width: '15%'}}></div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">15% of social time</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-full bg-gray-50 dark:bg-white/5 rounded-lg p-3">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold text-gray-500">Acquaintances</span>
                              <span className="text-xs text-muted-foreground">500-1500 people</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-3 overflow-hidden">
                              <div className="h-full bg-gray-500/30 rounded-full" style={{width: '10%'}}></div>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">10% of social time</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground mt-4 font-medium">
                    OrbitKin's 4-6 person groups perfectly match the innermost "support clique"—where we invest 
                    40% of our social energy for maximum emotional returns.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-orbitkin-purple">Why 4-6 is Scientifically Optimal</h3>
                  <p className="text-muted-foreground mb-4">
                    Convergent research from multiple fields confirms 4-6 as the ideal group size:
                  </p>
                  
                  {/* Group Size Comparison Chart */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                      <div className="text-2xl font-bold text-red-400">≤3</div>
                      <div className="text-xs text-muted-foreground mt-1">Too Small</div>
                      <div className="text-xs text-red-400 mt-2">• Lacks diversity<br/>• High pressure<br/>• No mediator</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-green-500/10 border border-green-500/30 relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                        <span className="text-xs px-2 py-0.5 bg-green-500 text-black rounded-full font-bold">OPTIMAL</span>
                      </div>
                      <div className="text-2xl font-bold text-green-400 mt-2">4-6</div>
                      <div className="text-xs text-muted-foreground mt-1">Perfect Balance</div>
                      <div className="text-xs text-green-400 mt-2">• Diverse views<br/>• Manageable<br/>• Natural flow</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-orange-500/5 border border-orange-500/20">
                      <div className="text-2xl font-bold text-orange-400">≥7</div>
                      <div className="text-xs text-muted-foreground mt-1">Too Large</div>
                      <div className="text-xs text-orange-400 mt-2">• Sub-groups form<br/>• People get lost<br/>• Hard to coordinate</div>
                    </div>
                  </div>
                  
                  {/* Benefits Grid */}
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-gray-50 dark:bg-white/5">
                      <h5 className="text-xs font-semibold text-orbitkin-purple mb-2">Social Benefits</h5>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        <li>✓ Everyone can maintain eye contact</li>
                        <li>✓ Natural conversation flow</li>
                        <li>✓ No one gets left out</li>
                      </ul>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-50 dark:bg-white/5">
                      <h5 className="text-xs font-semibold text-orbitkin-gold mb-2">Cognitive Benefits</h5>
                      <ul className="space-y-1 text-xs text-muted-foreground">
                        <li>✓ Can track all relationships</li>
                        <li>✓ Remember everyone's stories</li>
                        <li>✓ Maintain empathy for all</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground italic mt-4">
                    Key studies: Wheelan (2009), Arrow et al. (2000), Forsyth (2018), Hackman & Vidmar (1970)
                  </p>
                </div>
              </div>
            </motion.section>

            {/* The Loneliness Research */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-pink-500" />
                The Neuroscience of Connection
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-pink-500">Social Pain = Physical Pain</h3>
                  <p className="text-muted-foreground mb-3">
                    UCLA neuroscientist Matthew Lieberman's fMRI studies show that social rejection activates the 
                    same brain regions (anterior cingulate cortex) as physical pain. This isn't metaphorical—social 
                    connection is a biological necessity.
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    Implication: Addressing loneliness isn't about "being less sensitive"—it's about meeting a 
                    fundamental human need.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-green-500">The Helper's High</h3>
                  <p className="text-muted-foreground mb-3">
                    Studies show that supporting others in a group setting releases oxytocin and activates reward 
                    centers in the brain. Small groups where everyone both gives and receives support create a 
                    positive neurochemical feedback loop.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Research: Inagaki & Eisenberger (2012), Brown et al. (2003)
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-orbitkin-light-blue">Mirror Neurons & Empathy</h3>
                  <p className="text-muted-foreground">
                    Smaller groups activate mirror neuron systems more effectively, enhancing empathy and emotional 
                    contagion. This neurological mirroring is crucial for building the "we understand each other" 
                    feeling that defines close friendships.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Matching Science */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-orbitkin-purple" />
                The Science of Compatibility
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-orbitkin-purple">Values Over Interests</h3>
                  <p className="text-muted-foreground mb-3">
                    Research consistently shows that shared values predict relationship longevity better than 
                    shared interests. While you might bond over hiking, friendships sustained by shared values 
                    about fairness, growth, or authenticity last decades.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Key research: Schwartz Value Theory, World Values Survey data
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-orbitkin-gold">Big Five Personality Compatibility</h3>
                  <p className="text-muted-foreground mb-4">
                    Extensive research on the Big Five model (Costa & McCrae) reveals optimal friendship patterns:
                  </p>
                  
                  {/* Personality Compatibility Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 px-3 font-semibold text-orbitkin-gold">Trait</th>
                          <th className="text-left py-2 px-3 font-semibold text-orbitkin-purple">Optimal Match</th>
                          <th className="text-left py-2 px-3 font-semibold text-green-500">Group Dynamic</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-3 font-medium">Openness</td>
                          <td className="py-3 px-3">Similar levels</td>
                          <td className="py-3 px-3 text-xs">Intellectual resonance</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-3 font-medium">Conscientiousness</td>
                          <td className="py-3 px-3">Complementary</td>
                          <td className="py-3 px-3 text-xs">Planners + Spontaneous</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-3 font-medium">Extraversion</td>
                          <td className="py-3 px-3">Mixed</td>
                          <td className="py-3 px-3 text-xs">Balance of energy</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-3 px-3 font-medium">Agreeableness</td>
                          <td className="py-3 px-3">High collective</td>
                          <td className="py-3 px-3 text-xs">Group harmony</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3 font-medium">Neuroticism</td>
                          <td className="py-3 px-3">Low average</td>
                          <td className="py-3 px-3 text-xs">Emotional stability</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <p className="text-foreground mt-4 font-medium text-sm">
                    Our algorithm optimizes these combinations to create naturally balanced, complementary groups.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-yellow-500">Social Exchange Theory</h3>
                  <p className="text-muted-foreground mb-3">
                    Homans and later Thibaut & Kelley demonstrated that friendships operate on principles of 
                    reciprocal exchange—but not necessarily identical exchange:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• The listener contributes empathy; the storyteller brings entertainment</li>
                    <li>• The organizer offers structure; the spontaneous one brings surprise</li>
                    <li>• The emotionally intelligent provides support; the logical offers solutions</li>
                  </ul>
                  <p className="text-sm text-foreground font-medium mt-3">
                    Successful Orbits recognize and value diverse contribution styles, creating equity without requiring uniformity.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-green-500">The Proximity Principle... Reimagined</h3>
                  <p className="text-muted-foreground">
                    Traditional friendship research emphasizes physical proximity (Festinger et al., 1950). 
                    We've reimagined this for the digital age: "proximity" now means shared digital spaces, 
                    time zones, and online availability patterns.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Group Dynamics Research */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <BarChart className="w-6 h-6 text-yellow-500" />
                Group Formation & Development
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-yellow-500">Tuckman's Stages for Friendship Groups</h3>
                  <p className="text-muted-foreground mb-4">
                    Tuckman's model, validated across thousands of groups, shows predictable development stages. 
                    We've adapted this specifically for friendship formation:
                  </p>
                  
                  {/* Timeline Visualization */}
                  <div className="relative">
                    {/* Timeline stages without connecting lines */}
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-yellow-500/20 border-2 border-yellow-500 flex items-center justify-center flex-shrink-0 relative z-10">
                          <span className="text-xs font-bold">1</span>
                        </div>
                        <div className="flex-1 pb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-yellow-500">Forming</h4>
                            <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-white/5">Weeks 1-2</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Polite exploration, best-behavior mode. Orbot provides structured activities.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center flex-shrink-0 relative z-10">
                          <span className="text-xs font-bold">2</span>
                        </div>
                        <div className="flex-1 pb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-orange-500">Storming</h4>
                            <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-white/5">Weeks 3-4</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Authentic personalities emerge. Conflict is HEALTHY—we help navigate it.
                          </p>
                          <p className="text-xs text-red-400 mt-1">⚠️ Critical phase - most groups fail here</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-orbitkin-gold/20 border-2 border-orbitkin-gold flex items-center justify-center flex-shrink-0 relative z-10">
                          <span className="text-xs font-bold">3</span>
                        </div>
                        <div className="flex-1 pb-4">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-orbitkin-gold">Norming</h4>
                            <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-white/5">Weeks 5-8</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Inside jokes form, group culture solidifies, roles naturally emerge.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center flex-shrink-0 relative z-10">
                          <span className="text-xs font-bold">4</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-green-500">Performing</h4>
                            <span className="text-xs text-muted-foreground px-2 py-0.5 rounded-full bg-white/5">Week 9+</span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Deep trust established, vulnerability comfortable, the group "just works".
                          </p>
                          <p className="text-xs text-green-400 mt-1">✨ Lasting friendships formed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <p className="text-sm text-foreground font-medium">
                      💡 Most friendships fail during "storming." Our facilitation specifically supports groups through this crucial phase.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-green-500">Group Cohesion Factors</h3>
                  <p className="text-muted-foreground mb-3">
                    Carron's model identifies key factors that predict whether groups bond or dissolve:
                  </p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Task cohesion:</strong> Shared activities and goals (we suggest Orbit challenges)</li>
                    <li>• <strong>Social cohesion:</strong> Genuine liking and interpersonal attraction</li>
                    <li>• <strong>Collective efficacy:</strong> Belief the group can overcome challenges together</li>
                    <li>• <strong>Group pride:</strong> Feeling special or unique as a unit (your Orbit name matters!)</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-orbitkin-light-blue">Psychological Safety</h3>
                  <p className="text-muted-foreground mb-3">
                    Google's Project Aristotle identified psychological safety as the #1 factor in team success. 
                    We apply this to friendships: creating spaces where people can be vulnerable without judgment.
                  </p>
                  <p className="text-sm text-foreground font-medium">
                    This is why we emphasize values alignment and have zero tolerance for bullying.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* The Global Isolation Epidemic */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                The Global Isolation Epidemic
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-red-500/5 backdrop-blur-sm border border-red-500/20">
                  <h3 className="font-semibold mb-3 text-red-400">A Public Health Crisis</h3>
                  <p className="text-muted-foreground mb-4">
                    The U.S. Surgeon General declared loneliness and isolation an epidemic in 2023, 
                    comparing its health impact to smoking 15 cigarettes a day. This isn't just an 
                    American problem—it's a global crisis affecting billions.
                  </p>
                  {/* Statistics Grid */}
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 rounded-lg bg-white dark:bg-black/20 border border-gray-200 dark:border-transparent">
                      <div className="flex items-baseline gap-2">
                        <p className="text-3xl font-bold text-red-400">50%</p>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-red-500 to-red-400" style={{width: '50%'}}></div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">of U.S. adults report experiencing loneliness</p>
                    </div>
                    <div className="p-4 rounded-lg bg-white dark:bg-black/20 border border-gray-200 dark:border-transparent">
                      <div className="flex items-baseline gap-2">
                        <p className="text-3xl font-bold text-red-400">29%</p>
                        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-red-500 to-red-400" style={{width: '29%'}}></div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">increased risk of premature death from isolation</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3">Health Consequences</h3>
                  <p className="text-muted-foreground mb-4">
                    Social isolation doesn't just feel bad—it physically harms our bodies:
                  </p>
                  
                  {/* Health Impact Chart */}
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Cardiovascular</span>
                        <span className="text-xs text-red-400">+32% stroke risk</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full" style={{width: '32%'}}></div>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Mental Health</span>
                        <span className="text-xs text-purple-400">5x depression risk</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" style={{width: '80%'}}></div>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Cognitive</span>
                        <span className="text-xs text-yellow-400">+50% dementia risk</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full" style={{width: '50%'}}></div>
                      </div>
                    </div>
                    
                    <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Immune System</span>
                        <span className="text-xs text-green-400">Weakened response</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full" style={{width: '40%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3">Most Affected Demographics</h3>
                  
                  {/* Demographics Bar Chart */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-yellow-400">Young Adults (18-25)</span>
                        <span className="text-sm font-bold text-yellow-400">79%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-6 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full flex items-center justify-end pr-2" style={{width: '79%'}}>
                          <span className="text-xs text-black font-semibold">Highest Risk</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-blue-400">Remote Workers</span>
                        <span className="text-sm font-bold text-blue-400">67%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-6 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{width: '67%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-purple-400">New Parents</span>
                        <span className="text-sm font-bold text-purple-400">60%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-6 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-green-400">Older Adults (65+)</span>
                        <span className="text-sm font-bold text-green-400">43%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-6 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{width: '43%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-400">General Population</span>
                        <span className="text-sm font-bold text-gray-400">33%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-white/10 rounded-full h-6 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-gray-500 to-gray-400 rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-4 italic">
                    * Percentage reporting frequent feelings of loneliness or isolation
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Global Response and Interventions */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-green-500" />
                Global Response to the Epidemic
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-green-500/5 backdrop-blur-sm border border-green-500/20">
                  <h3 className="font-semibold mb-3 text-green-400">Government Initiatives</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong>UK:</strong> World's first Minister for Loneliness appointed in 2018</p>
                    <p><strong>Japan:</strong> Cabinet-level Minister of Loneliness and Isolation since 2021</p>
                    <p><strong>Australia:</strong> $46 million investment in community connection programs</p>
                    <p><strong>WHO:</strong> Commission on Social Connection established in 2023</p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3">Evidence-Based Interventions</h3>
                  <p className="text-muted-foreground mb-4">
                    Research shows what actually works to combat isolation:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Small Group Interventions:</strong> 4-6 person groups show 73% improvement in reported wellbeing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Interest-Based Matching:</strong> Shared activities increase friendship formation by 5x</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Regular Interaction:</strong> Weekly meetings for 8 weeks establish lasting connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span><strong>Facilitated Introduction:</strong> Structured ice-breakers reduce social anxiety by 60%</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-3">How OrbitKin Applies This Research</h3>
                  <p className="text-muted-foreground mb-4">
                    Every aspect of OrbitKin is designed based on evidence from the isolation epidemic research:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orbitkin-purple mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Optimal Group Size</p>
                        <p className="text-sm text-muted-foreground">4-6 people based on intervention success rates</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orbitkin-gold mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Structured Facilitation</p>
                        <p className="text-sm text-muted-foreground">Orbot guides initial interactions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orbitkin-purple mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Interest Alignment</p>
                        <p className="text-sm text-muted-foreground">Deep questionnaire ensures compatibility</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orbitkin-gold mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Regular Engagement</p>
                        <p className="text-sm text-muted-foreground">Weekly prompts maintain momentum</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Attachment Theory */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-500" />
                Attachment & Trust Building
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-green-500">Creating Secure Attachments</h3>
                  <p className="text-muted-foreground mb-3">
                    Adult attachment theory shows that secure friendships require consistency, availability, and 
                    responsiveness. Our small group format ensures everyone can maintain these qualities without 
                    overwhelming social demands.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 text-orbitkin-purple">The 7-Touch Theory</h3>
                  <p className="text-muted-foreground">
                    Marketing research shows it takes 7 interactions to build trust. We apply this to friendships: 
                    our facilitation ensures groups have structured reasons to interact regularly in those crucial 
                    first weeks.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Key Studies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/5 to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-orbitkin-gold" />
                Key Studies & References
              </h2>
              <div className="text-sm text-muted-foreground space-y-3">
                <p>• <strong>Baumeister, R. F., & Leary, M. R. (1995).</strong> "The need to belong: Desire for interpersonal attachments as a fundamental human motivation." Psychological Bulletin, 117(3), 497-529.</p>
                <p>• <strong>Dunbar, R. (1992).</strong> "Neocortex size as a constraint on group size in primates." Journal of Human Evolution, 22(6), 469-493.</p>
                <p>• <strong>Dunbar, R. (2010).</strong> How Many Friends Does One Person Need? Harvard University Press.</p>
                <p>• <strong>Tuckman, B. W. (1965).</strong> "Developmental sequence in small groups." Psychological Bulletin, 63(6), 384-399.</p>
                <p>• <strong>Costa, P. T., & McCrae, R. R. (1992).</strong> NEO PI-R Professional Manual. Psychological Assessment Resources.</p>
                <p>• <strong>Lieberman, M. (2013).</strong> Social: Why Our Brains Are Wired to Connect. Crown Publishers.</p>
                <p>• <strong>Cacioppo, J. & Patrick, W. (2008).</strong> Loneliness: Human Nature and the Need for Social Connection.</p>
                <p>• <strong>Holt-Lunstad et al. (2015).</strong> "Loneliness and Social Isolation as Risk Factors for Mortality." Perspectives on Psychological Science.</p>
                <p>• <strong>U.S. Surgeon General (2023).</strong> Our Epidemic of Loneliness and Isolation: Advisory on the Healing Effects of Social Connection.</p>
                <p>• <strong>WHO Commission on Social Connection (2023).</strong> Global Initiative Report on Social Connection.</p>
                <p>• <strong>Homans, G. C. (1958).</strong> "Social behavior as exchange." American Journal of Sociology, 63(6), 597-606.</p>
                <p>• <strong>Carron, A. V., & Brawley, L. R. (2000).</strong> "Cohesion: Conceptual and measurement issues." Small Group Research, 31(1), 89-106.</p>
                <p>• <strong>Waldinger, R. & Schulz, M. (2023).</strong> The Good Life: Lessons from the World's Longest Scientific Study of Happiness.</p>
                <p>• <strong>Putnam, R. (2000).</strong> Bowling Alone: The Collapse and Revival of American Community.</p>
              </div>
            </motion.section>

            {/* Our Ongoing Research */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                Our Ongoing Research
              </h2>
              
              <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                <p className="text-muted-foreground mb-4">
                  We're not just applying existing research—we're contributing to it. With user consent, we're studying:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• How digital-first friendships differ from traditional ones</li>
                  <li>• Optimal facilitation levels for different personality types</li>
                  <li>• Cross-cultural friendship formation patterns</li>
                  <li>• The role of shared struggle in accelerating bonds</li>
                  <li>• Long-term outcomes of algorithm-matched friendships</li>
                </ul>
                <p className="text-foreground font-medium mt-4">
                  All research follows ethical guidelines and prioritizes user privacy. Findings will be 
                  published openly to advance the field of social connection science.
                </p>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 backdrop-blur-sm border border-white/10"
            >
              <Brain className="w-8 h-8 text-orbitkin-purple mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Science-Backed Connection</h2>
              <p className="text-muted-foreground mb-4">
                Every feature in OrbitKin is designed based on peer-reviewed research. We're not guessing—we're 
                applying decades of social science to solve the friendship crisis.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                <em>"The need to belong is a powerful, fundamental, and extremely pervasive motivation."</em>
                <br />— Baumeister & Leary (1995)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/intro">
                  <Button>
                    Learn How It Works
                  </Button>
                </Link>
                <Link href="/docs/behind-the-scenes">
                  <Button variant="outline">
                    Behind the Scenes
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}