"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Sparkles, MessageSquare, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orbitkin-purple/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orbitkin-gold/20 rounded-full blur-3xl" />

          <div className="relative px-8 py-16 md:py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-primary/10 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2 text-primary" />
                <span className="text-sm font-medium">Limited Beta Access</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Find Your <span className="gradient-text">Orbit</span>?
              </h2>

              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stop leaving friendship to chance. Let OrbitKin's intelligent matching 
                find your perfect group of compatible people.
              </p>

              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  Interested in joining the beta?
                </p>
                <p className="text-sm text-muted-foreground">
                  DM <strong>skygorilla</strong> on Discord to get started
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}