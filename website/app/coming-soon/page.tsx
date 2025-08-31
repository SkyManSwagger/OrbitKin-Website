"use client"

import Link from "next/link"
import { ArrowLeft, Smartphone, Monitor, Bell, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function ComingSoon() {

  return (
    <>
      <StarryBackground />
      <div className="min-h-screen bg-background relative flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <Link href="/">
            <Button variant="ghost" className="absolute top-8 left-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="p-6 rounded-3xl bg-gradient-to-br from-orbitkin-purple/20 to-orbitkin-gold/20 backdrop-blur-sm border border-white/10">
                  <Smartphone className="w-16 h-16 text-orbitkin-purple" />
                </div>
                <div className="absolute -top-2 -right-2 p-3 rounded-2xl bg-gradient-to-br from-orbitkin-gold/20 to-orbitkin-light-blue/20 backdrop-blur-sm border border-white/10">
                  <Monitor className="w-8 h-8 text-orbitkin-gold" />
                </div>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">Coming Soon</span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
                Mobile & Web Apps in Development
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <p className="text-lg text-muted-foreground mb-6">
                We're working hard to bring OrbitKin to all platforms. Our mobile and web apps 
                will offer the same intelligent matching system with a seamless, native experience.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <Smartphone className="w-8 h-8 text-orbitkin-purple mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Mobile App</h3>
                  <p className="text-sm text-muted-foreground">
                    Native iOS and Android apps with push notifications, offline support, and optimized UI
                  </p>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <Monitor className="w-8 h-8 text-orbitkin-gold mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Web App</h3>
                  <p className="text-sm text-muted-foreground">
                    Full-featured browser experience with real-time sync across all your devices
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-muted-foreground mb-4">
                Questions about OrbitKin or want early access?
              </p>
              <p className="text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 inline mr-1" />
                DM <strong>skygorilla</strong> on Discord
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}