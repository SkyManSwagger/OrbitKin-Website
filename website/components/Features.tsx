"use client"

import { motion } from "framer-motion"
import { 
  Brain, 
  Users, 
  Shield, 
  Zap, 
  MessageCircle, 
  Target,
  Heart,
  Globe,
  Bot,
  Smartphone
} from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Smart Matching",
    description: "Our algorithm considers interests, personality traits, availability, and goals to find your perfect group.",
    color: "text-orbitkin-purple"
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Orbits of 4-6 people ensure everyone can participate and form genuine connections.",
    color: "text-orbitkin-gold"
  },
  {
    icon: Globe,
    title: "Platform Freedom",
    description: "Available on Discord now, expanding to iOS, Android, and web. Your connections aren't locked to one platform.",
    color: "text-orbitkin-light-blue"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your questionnaire data is never shared. You control what your Orbit members see.",
    color: "text-orbitkin-purple"
  },
  {
    icon: Bot,
    title: "AI Facilitation",
    description: "Optional conversation prompts and icebreakers help keep your Orbit active and engaged.",
    color: "text-orbitkin-gold"
  },
  {
    icon: Target,
    title: "Goal Aligned",
    description: "Whether for gaming, studying, or casual chat, you'll be matched with people sharing your objectives.",
    color: "text-orbitkin-light-blue"
  }
]

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-100 to-yellow-100 dark:from-orbitkin-purple/10 dark:to-orbitkin-gold/10 backdrop-blur-sm border border-purple-300 dark:border-white/10"
          >
            <Zap className="w-4 h-4 mr-2 text-orbitkin-gold" />
            <span className="text-sm font-medium">Why OrbitKin Works</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Built Different,{" "}
            <span className="bg-gradient-to-r from-orbitkin-purple via-orbitkin-gold to-orbitkin-light-blue bg-clip-text text-transparent">
              Built Better
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            More than just another social app – we're a complete ecosystem 
            designed to create meaningful connections that last.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
              className="group relative h-full"
            >
              {/* Card wrapper with proper height containment */}
              <div className="relative h-full">
                {/* Gradient border effect - now properly contained */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400/30 via-yellow-400/30 to-blue-400/30 dark:from-orbitkin-purple/20 dark:via-orbitkin-gold/20 dark:to-orbitkin-light-blue/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                
                {/* Glow effect - now properly contained */}
                <div className="absolute inset-0 bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-xl" />
                
                {/* Card content */}
                <div className="relative h-full bg-white dark:bg-card/50 backdrop-blur-xl p-8 rounded-2xl border-2 border-gray-300 dark:border-white/10 hover:border-gray-400 dark:group-hover:border-white/20 transition-all duration-300 card-hover shadow-lg hover:shadow-xl">
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{ 
                    scale: { duration: 0.2 },
                    rotate: { duration: 0.6, ease: "easeInOut" }
                  }}
                  className="relative mb-6"
                >
                  <div className={`absolute inset-0 ${feature.color.replace('text-', 'bg-').replace('orbitkin-', 'orbitkin-')}/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <feature.icon className={`relative w-14 h-14 ${feature.color} transition-colors duration-300`} />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-foreground transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors">
                  {feature.description}
                </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-muted-foreground">
            Ready to experience the difference?{" "}
            <span className="text-orbitkin-gold font-medium">Start your journey below</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}