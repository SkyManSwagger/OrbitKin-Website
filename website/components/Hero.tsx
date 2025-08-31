"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Sparkles, MessageSquare, Smartphone, Globe, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  const stats = [
    { value: "4-6", label: "People per Orbit" },
    { value: "5 min", label: "Quick Setup" },
    { value: "100%", label: "Privacy Focused" },
  ]

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orbitkin-purple/5 via-transparent to-orbitkin-gold/5 pointer-events-none" />
      
      <div className="container mx-auto text-center relative z-10">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 backdrop-blur-sm border border-white/10"
        >
          <Sparkles className="w-4 h-4 mr-2 text-orbitkin-gold" />
          <span className="text-sm font-medium">Beta Access Available</span>
          <span className="ml-2 text-xs text-muted-foreground">Limited Spots</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Find Your People,
          <br />
          <span className="bg-gradient-to-r from-orbitkin-purple via-orbitkin-gold to-orbitkin-light-blue bg-clip-text text-transparent">
            Forge Real Connections
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Smart matching creates small groups of{" "}
          <span className="text-foreground font-medium">4-6 compatible people</span>{" "}
          who actually vibe together
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/docs/getting-started">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-gradient-to-r from-orbitkin-purple to-orbitkin-gold hover:from-orbitkin-purple/90 hover:to-orbitkin-gold/90 border-0 shadow-xl group"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/docs">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-white/20 hover:bg-white/5"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Subtle platform availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 mb-16 text-sm text-muted-foreground"
        >
          <CheckCircle className="w-4 h-4 text-green-500" />
          <span>Now available • Discord, iOS & Android coming soon</span>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orbitkin-purple to-orbitkin-gold bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Elements for subtle cosmic feel */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 opacity-20"
        >
          <Star className="w-6 h-6 text-orbitkin-gold" />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 opacity-20"
        >
          <Sparkles className="w-8 h-8 text-orbitkin-purple" />
        </motion.div>
      </div>
    </section>
  )
}