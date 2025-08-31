"use client"

import Link from "next/link"
import { ArrowLeft, Users, TrendingUp, Shield, Zap, MessageCircle, Award, BarChart3, Clock, Heart, ChevronRight, CheckCircle, Sparkles, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function ForServers() {
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
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-orbitkin-purple/10 backdrop-blur-sm border border-orbitkin-purple/20">
                <Shield className="w-4 h-4 mr-2 text-orbitkin-purple" />
                <span className="text-sm font-medium">Private Beta - Limited Availability</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Transform Your Discord Server with{" "}
                <span className="gradient-text">OrbitKin</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Boost engagement, retention, and community satisfaction by helping your members 
                form meaningful connections through intelligent small-group matching
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://discord.com/users/skygorilla">
                  <Button size="lg" className="text-lg px-8">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact on Discord
                    <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Mail className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </div>
            </div>

            {/* Key Features Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-orbitkin-purple mb-2">4-6</div>
                <div className="text-sm text-muted-foreground">Members per Orbit</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-orbitkin-gold mb-2">Smart</div>
                <div className="text-sm text-muted-foreground">AI Matching</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-orbitkin-light-blue mb-2">Custom</div>
                <div className="text-sm text-muted-foreground">Server Theming</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Automated System</div>
              </motion.div>
            </div>

            {/* The Problem Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                The Challenge Every Server Faces
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                  <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Lost in the Crowd</h3>
                  <p className="text-sm text-muted-foreground">
                    New members join but struggle to connect in large, overwhelming general channels
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-orange-500/5 border border-orange-500/20">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="font-semibold mb-2">High Churn Rate</h3>
                  <p className="text-sm text-muted-foreground">
                    Members leave within weeks because they haven't formed meaningful connections
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                  <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-yellow-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Surface-Level Chat</h3>
                  <p className="text-sm text-muted-foreground">
                    Conversations stay shallow without the intimacy of smaller, curated groups
                  </p>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Why Server Owners <span className="gradient-text">Love OrbitKin</span>
              </h2>
              <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                OrbitKin solves the engagement problem by creating intimate spaces where real friendships form
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-orbitkin-purple/20 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-orbitkin-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Automatic Member Onboarding</h3>
                    <p className="text-muted-foreground">
                      New members are automatically guided through a friendly questionnaire and matched 
                      into compatible small groups, ensuring no one gets lost in your server.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-orbitkin-gold/20 flex items-center justify-center">
                      <Heart className="w-6 h-6 text-orbitkin-gold" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Deeper Community Bonds</h3>
                    <p className="text-muted-foreground">
                      Members who form close friendships become your most loyal, active participants. 
                      They'll stay for the people, not just the content.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-orbitkin-light-blue/20 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-orbitkin-light-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Reduced Moderation Burden</h3>
                    <p className="text-muted-foreground">
                      Small, compatible groups naturally have fewer conflicts. Members matched by 
                      shared values and communication styles create harmonious sub-communities.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Measurable Growth Metrics</h3>
                    <p className="text-muted-foreground">
                      Track member retention, engagement rates, and Orbit success. Get insights into 
                      what makes your community tick with detailed analytics.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Set It and Forget It</h3>
                    <p className="text-muted-foreground">
                      OrbitKin runs automatically. Weekly matching cycles, automated facilitation, 
                      and self-service commands mean minimal admin overhead.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center">
                      <Award className="w-6 h-6 text-pink-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Unique Value Proposition</h3>
                    <p className="text-muted-foreground">
                      Differentiate your server with an innovative feature that other communities 
                      don't have. Be known as the server that actually connects people.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* How It Works Section */}
            <section className="mb-16 p-8 rounded-2xl bg-muted/10 backdrop-blur-sm border border-white/10">
              <h2 className="text-3xl font-bold text-center mb-8">
                Simple Setup, Powerful Results
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: "Contact Dev", desc: "Reach out to @skygorilla on Discord" },
                  { step: 2, title: "Quick Setup", desc: "Developer configures bot for your server" },
                  { step: 3, title: "Members Join", desc: "Users register and complete questionnaire" },
                  { step: 4, title: "Magic Happens", desc: "Automatic matching creates perfect groups" }
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center mx-auto mb-3">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>


            {/* Pricing Section */}
            <section className="mb-16 text-center p-12 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10">
              <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-green-500/20 backdrop-blur-sm border border-green-500/30">
                <Sparkles className="w-4 h-4 mr-2 text-green-500" />
                <span className="text-sm font-medium">Free During Beta</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join the Exclusive Beta Program
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                OrbitKin is currently in private beta. Get personalized setup and support directly 
                from the developer while enjoying all features at no cost.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://discord.com/users/skygorilla">
                  <Button size="lg" className="text-lg px-8">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Request Beta Access
                  </Button>
                </Link>
                <div className="text-sm text-muted-foreground">
                  Contact <code className="font-mono bg-muted/30 px-2 py-1 rounded">@skygorilla</code> on Discord
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-2">How many members do I need for OrbitKin to work?</h3>
                  <p className="text-muted-foreground">
                    OrbitKin works best with servers of 50+ active members, but can function with 
                    as few as 20. The more members, the better the matching quality.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-2">Can I customize OrbitKin for my community?</h3>
                  <p className="text-muted-foreground">
                    Yes! While the core questionnaire remains consistent for optimal matching, 
                    OrbitKin can be themed to match your server's aesthetic and brand. Custom colors, 
                    messages, and visual styling make it feel native to your community.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-2">How do I get OrbitKin for my server?</h3>
                  <p className="text-muted-foreground">
                    Contact <code className="font-mono bg-muted/30 px-1 rounded">@skygorilla</code> on Discord 
                    for personalized setup. The developer will work with you to configure OrbitKin 
                    specifically for your community's needs.
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-2">Can members be in multiple Orbits?</h3>
                  <p className="text-muted-foreground">
                    Currently, members participate in one Orbit at a time to ensure quality 
                    connections. They can leave and be re-matched if needed.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Community?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join forward-thinking server owners who are building deeper, more engaged communities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://discord.com/users/skygorilla">
                  <Button size="lg" className="text-lg px-8">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Contact Developer
                    <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Mail className="w-5 h-5 mr-2" />
                  Join Waitlist
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Manual setup by developer • Contact <code className="font-mono bg-muted/30 px-1 rounded">@skygorilla</code> on Discord
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}