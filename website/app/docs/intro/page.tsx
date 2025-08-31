"use client"

import Link from "next/link"
import { ArrowLeft, Sparkles, Users, Bot, Shield, Heart, Zap, Target, Globe, CheckCircle, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function WhatIsOrbitKin() {
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
                <div className="p-3 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 backdrop-blur-sm">
                  <Sparkles className="w-8 h-8 text-orbitkin-gold" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                What is <span className="gradient-text">OrbitKin</span>?
              </h1>
              <p className="text-xl text-muted-foreground">
                Your gateway to meaningful platonic connections in the digital age
              </p>
            </motion.div>

            {/* Core Concept */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-4">The Problem We Solve</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In today's world, making genuine friendships as an adult is harder than ever. Whether you've moved to a new city, 
                transitioned to remote work, or simply find it challenging to connect with like-minded people, you're not alone. 
                Traditional social platforms focus on dating or professional networking, leaving a massive gap for those seeking 
                authentic platonic connections.
              </p>
              <p className="text-foreground font-medium">
                OrbitKin bridges this gap by intelligently matching you with 3-5 other compatible people to form your "Orbit" – 
                a small, supportive group where genuine friendships can flourish.
              </p>
            </motion.section>

            {/* The Isolation Epidemic */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                The Isolation Epidemic
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
                  <h3 className="font-semibold mb-3 text-red-400">We're Facing a Crisis</h3>
                  <ul className="text-muted-foreground space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>The U.S. Surgeon General has declared loneliness a public health epidemic, with health impacts comparable to smoking 15 cigarettes daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>1 in 2 adults report experiencing loneliness, with young adults reporting the highest rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>The average American hasn't made a new friend in 5 years</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Remote work, social media paradox, and urban anonymity have created perfect conditions for isolation</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                  <h3 className="font-semibold mb-3 text-yellow-400">Why Traditional Solutions Fail</h3>
                  <div className="text-muted-foreground space-y-3">
                    <p>
                      <span className="font-medium">Large social networks</span> create the illusion of connection but often leave us feeling more isolated. 
                      500+ "friends" online, yet no one to call in a crisis.
                    </p>
                    <p>
                      <span className="font-medium">Random meetups</span> rely on chance and geography. You might find people nearby, 
                      but proximity doesn't guarantee compatibility.
                    </p>
                    <p>
                      <span className="font-medium">Dating apps</span> have solved romantic connection but ignore the equally important need 
                      for platonic relationships. Not everyone needs a partner, but everyone needs friends.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
                  <h3 className="font-semibold mb-3 text-green-400">The OrbitKin Solution</h3>
                  <div className="text-muted-foreground space-y-3">
                    <div className="flex gap-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Small, Meaningful Groups:</span> Research shows 4-6 people is optimal for building genuine connections. 
                        Small enough for intimacy, large enough for diverse perspectives.
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Values-First Matching:</span> We prioritize deep compatibility over surface-level similarities. 
                        Find people who share your worldview, not just your zip code.
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Structured Support:</span> With Orbot's facilitation and conversation prompts, 
                        we remove the awkwardness of initial connections and help friendships flourish naturally.
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Accessible Technology:</span> Whether you're on Discord, mobile, or web, 
                        OrbitKin meets you where you are, making connection convenient and sustainable.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-orbitkin-purple/10 border border-orbitkin-purple/20">
                  <p className="text-center text-foreground font-medium">
                    "Connection is not a luxury – it's a fundamental human need. OrbitKin exists to ensure no one 
                    has to face life's challenges alone."
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-orbitkin-purple" />
                What Makes OrbitKin Different
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <Users className="w-8 h-8 text-orbitkin-purple mb-3" />
                  <h3 className="font-semibold mb-2">Perfect Group Size</h3>
                  <p className="text-sm text-muted-foreground">
                    4-6 people is scientifically optimal for forming genuine connections. Large enough for diversity, 
                    small enough for everyone to be heard.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <Shield className="w-8 h-8 text-green-500 mb-3" />
                  <h3 className="font-semibold mb-2">Privacy First</h3>
                  <p className="text-sm text-muted-foreground">
                    Your questionnaire data is never shared with Orbit members. You control what you reveal and when. 
                    GDPR compliant and user-focused.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <Bot className="w-8 h-8 text-orbitkin-gold mb-3" />
                  <h3 className="font-semibold mb-2">AI Facilitation</h3>
                  <p className="text-sm text-muted-foreground">
                    Meet Orbot, your optional AI facilitator who helps break the ice, suggests activities, and keeps 
                    conversations flowing naturally.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <Heart className="w-8 h-8 text-pink-500 mb-3" />
                  <h3 className="font-semibold mb-2">Values-Based Matching</h3>
                  <p className="text-sm text-muted-foreground">
                    We prioritize shared values and life philosophies over surface-level interests, creating deeper, 
                    more meaningful connections.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* The Cosmic Tech-Magic Experience */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/5 via-orbitkin-gold/5 to-orbitkin-light-blue/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-orbitkin-gold" />
                The OrbitKin Universe
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe making friends should feel magical, not mechanical. That's why OrbitKin embraces a 
                "Cosmic Tech-Magic" theme throughout your journey:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-orbitkin-purple mt-1">•</span>
                  <div>
                    <span className="font-medium">You're a "Kindred"</span> – a unique individual seeking your cosmic companions
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orbitkin-gold mt-1">•</span>
                  <div>
                    <span className="font-medium">Your group is an "Orbit"</span> – a small constellation of compatible souls
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orbitkin-light-blue mt-1">•</span>
                  <div>
                    <span className="font-medium">"Signal Mapping"</span> – how we understand your unique frequency in the social universe
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <div>
                    <span className="font-medium">"Alignment Score"</span> – the cosmic compatibility between Kindreds
                  </div>
                </li>
              </ul>
            </motion.section>

            {/* Who Is OrbitKin For */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-orbitkin-light-blue" />
                Who Is OrbitKin For?
              </h2>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Perfect For You If:
                  </h3>
                  <ul className="text-sm text-muted-foreground space-y-2 ml-6">
                    <li>• You're 18+ and looking for genuine platonic friendships</li>
                    <li>• You feel like you don't truly belong in your current friend group</li>
                    <li>• You can't be your authentic self around your current friends</li>
                    <li>• You're often the butt of the joke or feel unheard and unseen</li>
                    <li>• You've moved to a new city or are working remotely</li>
                    <li>• You want quality connections where everyone is valued equally</li>
                    <li>• You're tired of surface-level interactions on traditional social media</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-medium mb-2">Currently Available On:</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 ml-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-500" />
                      <span className="font-medium">Discord</span> - Full bot integration available now
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-yellow-500" />
                      <span className="font-medium">Mobile Apps</span> - iOS & Android coming soon
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="w-3 h-3 text-yellow-500" />
                      <span className="font-medium">Web Platform</span> - In development for 2026
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Our Mission */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                OrbitKin exists to combat social isolation in the digital age. We believe everyone deserves meaningful 
                friendships, regardless of their location, lifestyle, or circumstances.
              </p>
              <p className="text-foreground font-medium">
                Our vision is to become the world's leading platform for platonic connection, helping millions discover 
                their Kin and build supportive Orbits that enrich their lives.
              </p>
            </motion.section>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 backdrop-blur-sm border border-white/10"
            >
              <Sparkles className="w-8 h-8 text-orbitkin-gold mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Ready to Find Your Orbit?</h2>
              <p className="text-muted-foreground mb-6">
                Join the beta on Discord and start your journey to meaningful connections today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/discord">
                  <Button className="bg-gradient-to-r from-orbitkin-purple to-orbitkin-gold hover:from-orbitkin-purple/90 hover:to-orbitkin-gold/90">
                    Get Started on Discord
                  </Button>
                </Link>
                <Link href="/docs/matching">
                  <Button variant="outline">
                    Learn About Matching
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

// Add missing import
import { Clock } from "lucide-react"