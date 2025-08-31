"use client"

import Link from "next/link"
import { ArrowLeft, Users, Shield, Book, MessageCircle, Settings, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function DiscordGuide() {
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
                <div className="p-3 rounded-2xl bg-primary/10 backdrop-blur-sm">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discord <span className="gradient-text">Guide</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Choose your guide based on your role
              </p>
            </motion.div>

            {/* Guide Selection */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link 
                  href="/docs/discord/user"
                  className="group block h-full"
                >
                  <div className="relative h-full bg-white/5 dark:bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-orbitkin-purple/50 transition-all hover:scale-[1.02]">
                    <div className="absolute top-4 right-4">
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-orbitkin-purple transition-colors" />
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-orbitkin-purple/10">
                        <Users className="w-6 h-6 text-orbitkin-purple" />
                      </div>
                      <h2 className="text-2xl font-semibold">User Guide</h2>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      For members using OrbitKin to connect with others and manage their profile
                    </p>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">You'll learn how to:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Complete the questionnaire</li>
                        <li>• Manage your profile</li>
                        <li>• Use Orbit commands</li>
                        <li>• Update preferences</li>
                        <li>• Interact with your group</li>
                      </ul>
                    </div>
                    
                    <div className="mt-6 flex items-center text-orbitkin-purple group-hover:translate-x-1 transition-transform">
                      <span className="text-sm font-medium">View User Guide</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link 
                  href="/docs/discord/admin"
                  className="group block h-full"
                >
                  <div className="relative h-full bg-white/5 dark:bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-orbitkin-gold/50 transition-all hover:scale-[1.02]">
                    <div className="absolute top-4 right-4">
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-orbitkin-gold transition-colors" />
                    </div>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-xl bg-orbitkin-gold/10">
                        <Shield className="w-6 h-6 text-orbitkin-gold" />
                      </div>
                      <h2 className="text-2xl font-semibold">Admin Guide</h2>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">
                      For server administrators managing OrbitKin in their Discord community
                    </p>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">You'll learn how to:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Set up the bot</li>
                        <li>• Configure channels</li>
                        <li>• Manage matching cycles</li>
                        <li>• Moderate Orbits</li>
                        <li>• View analytics</li>
                      </ul>
                    </div>
                    
                    <div className="mt-6 flex items-center text-orbitkin-gold group-hover:translate-x-1 transition-transform">
                      <span className="text-sm font-medium">View Admin Guide</span>
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Book className="w-5 h-5" />
                About OrbitKin on Discord
              </h3>
              <p className="text-muted-foreground mb-4">
                OrbitKin creates private channels for small groups (Orbits) of 4-6 compatible people. 
                Our intelligent matching system considers interests, personality, availability, and goals 
                to form meaningful connections.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orbitkin-purple">4-6</div>
                  <div className="text-sm text-muted-foreground">People per Orbit</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orbitkin-gold">~5 min</div>
                  <div className="text-sm text-muted-foreground">Questionnaire time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orbitkin-light-blue">Weekly</div>
                  <div className="text-sm text-muted-foreground">Matching cycles</div>
                </div>
              </div>
            </motion.div>

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center"
            >
              <p className="text-muted-foreground mb-4">
                Need help getting started?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/for-servers">
                  <Button variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    Add to Your Server
                  </Button>
                </Link>
                <Link href="https://discord.com/users/skygorilla">
                  <Button variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
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