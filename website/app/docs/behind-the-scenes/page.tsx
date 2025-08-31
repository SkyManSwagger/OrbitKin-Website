"use client"

import Link from "next/link"
import { ArrowLeft, Code, Brain, Heart, Lightbulb, Database, Shield, Zap, Users, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function BehindTheScenes() {
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
                  <Code className="w-8 h-8 text-yellow-600 dark:text-orbitkin-gold" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Behind the <span className="gradient-text">Scenes</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Developer insights, technical philosophy, and the story of OrbitKin
              </p>
            </motion.div>

            {/* The Origin Story */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-yellow-50 dark:from-orbitkin-purple/10 dark:to-orbitkin-gold/10 backdrop-blur-sm border border-gray-200 dark:border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-pink-500" />
                The Origin Story
              </h2>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  OrbitKin was born from personal experience. Like many in tech, I found myself surrounded by 
                  acquaintances but lacking deep friendships. Discord servers with thousands of members, yet 
                  feeling utterly alone. The pandemic only amplified what was already a growing crisis.
                </p>
                <p>
                  The lightbulb moment came during a particularly isolating week in 2024. I realized that while 
                  we have algorithms to find romantic partners, recommend movies, and even suggest what to eat, 
                  we've left friendship—arguably our most important relationship type—entirely to chance.
                </p>
                <p className="text-foreground font-medium">
                  OrbitKin started as a simple question: "What if we applied the same intelligent matching we use 
                  for dating to platonic friendships, but focused on small groups instead of pairs?"
                </p>
              </div>
            </motion.section>

            {/* Technical Philosophy */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Brain className="w-6 h-6 text-orbitkin-purple" />
                Technical Philosophy
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5 text-orbitkin-gold" />
                    Privacy by Design
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Your questionnaire data never leaves our secure systems. Orbit members only see what you choose 
                    to share. We use zero-knowledge principles wherever possible, and we'll never sell your data.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Tech stack: End-to-end encryption for sensitive data, GDPR-compliant architecture, minimal data retention policies.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-500" />
                    The Matching Algorithm
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Without revealing our secret sauce, we can share that our algorithm considers multiple dimensions 
                    of compatibility. We use graph theory, semantic analysis, and clustering techniques to find not just 
                    similar people, but complementary personalities that create balanced group dynamics.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Built with: Python, NetworkX for graph analysis, custom scoring matrices, and lots of social psychology research.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-orbitkin-light-blue" />
                    Why 4-6 People?
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    This isn't arbitrary. Research in group dynamics shows that 4-6 is the sweet spot for intimate 
                    conversation while maintaining diverse perspectives. Below 4, groups lack variety. Above 6, 
                    sub-groups form and quieter voices get lost.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Based on: Dunbar's layers of intimacy, small group communication theory, and thousands of hours observing Discord communities.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-500" />
                    Moderation Philosophy
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    We believe in empowering communities to self-moderate with guard rails. Server admins have full 
                    control, but we provide tools and AI assistance to maintain healthy spaces. Bad actors are dealt 
                    with swiftly, but we always prioritize rehabilitation over punishment where appropriate.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Approach: Community-first moderation, transparent policies, AI-assisted (not AI-decided) interventions.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Developer Notes */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Lightbulb className="w-6 h-6 text-yellow-500" />
                Developer Notes & Insights
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h4 className="font-medium mb-2 text-orbitkin-purple">On the Cosmic Theme</h4>
                  <p className="text-sm text-muted-foreground">
                    The space/cosmic theme isn't just aesthetic—it's metaphorical. Each person is a unique celestial 
                    body with their own gravity (personality), and Orbits represent the natural clustering that occurs 
                    when compatible elements find each other in the vast social universe.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h4 className="font-medium mb-2 text-orbitkin-gold">On Orbot</h4>
                  <p className="text-sm text-muted-foreground">
                    Orbot isn't just a bot—it's designed to be a gentle facilitator. We've carefully crafted its 
                    personality to be warm but not overbearing, helpful but not intrusive. Every prompt and message 
                    is tested to ensure it enhances rather than dominates the conversation.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h4 className="font-medium mb-2 text-green-500">On Failure and Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Not every Orbit succeeds, and that's okay. We track why groups dissolve (with permission) to 
                    continuously improve our matching. Every "failed" match teaches us something valuable about human 
                    connection that makes the next match better.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h4 className="font-medium mb-2 text-orbitkin-light-blue">On Open Source</h4>
                  <p className="text-sm text-muted-foreground">
                    While our matching algorithm remains proprietary (for now), we're committed to open-sourcing 
                    tools and research that benefit the broader community. Fighting isolation is bigger than any 
                    one platform.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Technical Challenges */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Code className="w-6 h-6 text-orbitkin-purple" />
                Interesting Technical Challenges
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h4 className="font-medium mb-2">The Stable Marriage Problem... But for Groups</h4>
                  <p className="text-sm text-muted-foreground">
                    Traditional matching algorithms optimize for pairs. We had to develop custom solutions for 
                    multi-party stable matching where everyone in the group needs to be compatible with everyone else.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h4 className="font-medium mb-2">Semantic Understanding at Scale</h4>
                  <p className="text-sm text-muted-foreground">
                    Processing nuanced questionnaire responses requires understanding context, not just keywords. 
                    We use embedding models and vector databases to capture the essence of what people really mean.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 shadow-sm">
                  <h4 className="font-medium mb-2">Real-time Group Dynamics</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitoring Orbit health without being invasive is delicate. We use activity patterns and 
                    voluntary feedback to identify struggling groups and offer support without compromising privacy.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Future Vision */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-yellow-50 dark:from-orbitkin-purple/10 dark:to-orbitkin-gold/10 backdrop-blur-sm border border-gray-200 dark:border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-orbitkin-gold" />
                The Dream
              </h2>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  We envision a world where finding your people is as easy as ordering food delivery. Where 
                  moving to a new city doesn't mean starting from social zero. Where introverts can find their 
                  equally introverted crew without the exhaustion of traditional socializing.
                </p>
                <p>
                  The technical roadmap includes AI that can facilitate in multiple languages simultaneously, 
                  VR integration for immersive Orbit experiences, and predictive models that can suggest activities 
                  your Orbit will love before you even know you'll love them.
                </p>
                <p className="text-foreground font-medium">
                  But the real dream? It's simpler: A world where no one has to eat lunch alone unless they want to.
                </p>
              </div>
            </motion.section>

            {/* Developer Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-yellow-50 dark:from-orbitkin-purple/10 dark:to-orbitkin-gold/10 backdrop-blur-sm border border-gray-200 dark:border-white/10"
            >
              <Code className="w-8 h-8 text-orbitkin-purple mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Want to Contribute?</h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate developers, researchers, and community builders who share our vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://github.com/orbitkin" target="_blank">
                  <Button variant="outline">
                    View on GitHub
                  </Button>
                </Link>
                <Link href="https://discord.com/users/skygorilla" target="_blank">
                  <Button>
                    Contact Developer
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