"use client"

import { motion } from "framer-motion"
import { 
  ClipboardList, 
  Cpu, 
  Users, 
  MessageCircle,
  ArrowRight,
  Play,
  Clock,
  Sparkles
} from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    title: "Complete the Questionnaire",
    description: "Answer questions about your interests, personality, availability, and what you're looking for in a friend group.",
    details: ["~25 questions", "Takes about 5 minutes", "Edit answers anytime"]
  },
  {
    icon: Cpu,
    title: "Smart Matching Algorithm",
    description: "Our system analyzes compatibility across multiple dimensions to find your ideal group members.",
    details: ["Interest alignment", "Personality compatibility", "Schedule matching"]
  },
  {
    icon: Users,
    title: "Join Your Orbit",
    description: "Get matched with 3-5 other compatible people in your own private group space.",
    details: ["Private group space", "4-6 people total", "Balanced dynamics"]
  },
  {
    icon: MessageCircle,
    title: "Build Connections",
    description: "Chat, share, and grow together. Optional AI facilitation helps keep conversations flowing.",
    details: ["Daily prompts available", "Icebreaker activities", "Fully customizable"]
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-orbitkin-gold/5 via-background to-orbitkin-purple/5 pointer-events-none" />
      
      <div className="container-wide relative">
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
            className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-yellow-100 to-purple-100 dark:from-orbitkin-gold/10 dark:to-orbitkin-purple/10 backdrop-blur-sm border border-yellow-400 dark:border-orbitkin-gold/20"
          >
            <Play className="w-4 h-4 mr-2 text-orbitkin-gold" />
            <span className="text-sm font-medium">Simple Process</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            From Stranger to{" "}
            <span className="bg-gradient-to-r from-orbitkin-gold via-orbitkin-purple to-orbitkin-light-blue bg-clip-text text-transparent">
              Squad Goals
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven 4-step process transforms random connections into lifelong friendships.
            It takes just minutes to start, but the bonds last forever.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Animated timeline line - desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-orbitkin-gold/20 via-orbitkin-purple/40 to-orbitkin-light-blue/20 rounded-full" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
            className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-orbitkin-gold via-orbitkin-purple to-orbitkin-light-blue rounded-full origin-left"
          />

          {/* Mobile timeline line */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orbitkin-gold/20 via-orbitkin-purple/40 to-orbitkin-light-blue/20 rounded-full" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 }}
            className="lg:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orbitkin-gold via-orbitkin-purple to-orbitkin-light-blue rounded-full origin-top"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="relative group"
              >
                <div className="relative lg:text-center">
                  {/* Timeline connector for mobile */}
                  <div className="lg:hidden absolute left-6 top-6 w-8 h-0.5 bg-gradient-to-r from-orbitkin-purple to-orbitkin-gold" />
                  
                  {/* Step indicator */}
                  <div className="relative z-10 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="relative inline-flex items-center justify-center"
                    >
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-orbitkin-gold via-orbitkin-purple to-orbitkin-light-blue opacity-20 group-hover:opacity-40 transition-opacity blur-md" />
                      
                      {/* Step number background */}
                      <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-orbitkin-gold to-orbitkin-purple flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300">
                        <span className="text-xl font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                      
                      {/* Pulse animation */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 w-14 h-14 rounded-full border border-orbitkin-gold/50"
                      />
                    </motion.div>
                  </div>

                  {/* Icon container */}
                  <motion.div
                    whileHover={{ 
                      y: -5,
                      rotateY: 15
                    }}
                    className="flex lg:justify-center mb-6"
                  >
                    <div className="relative group/icon">
                      <div className="absolute inset-0 bg-gradient-to-r from-orbitkin-purple/20 to-orbitkin-gold/20 rounded-2xl blur-lg opacity-0 group-hover/icon:opacity-100 transition-opacity" />
                      <div className="relative p-4 rounded-2xl bg-white dark:bg-card/50 backdrop-blur-xl border-2 border-gray-300 dark:border-white/10 group-hover/icon:border-gray-400 dark:group-hover/icon:border-white/20 transition-all shadow-md">
                        <step.icon className="w-10 h-10 text-orbitkin-purple group-hover/icon:text-orbitkin-gold transition-colors" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl lg:text-2xl font-bold group-hover:text-orbitkin-gold transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed lg:text-center">
                      {step.description}
                    </p>

                    {/* Enhanced details */}
                    <div className="bg-white dark:bg-card/30 backdrop-blur-sm rounded-xl p-4 border-2 border-gray-300 dark:border-white/10 group-hover:border-purple-400 dark:group-hover:border-orbitkin-gold/20 transition-all shadow-sm">
                      <ul className="space-y-2">
                        {step.details.map((detail, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (index * 0.2) + (i * 0.1) }}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orbitkin-gold to-orbitkin-purple flex-shrink-0" />
                            <span className="text-muted-foreground">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Connection arrow for desktop - positioned exactly between columns */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="hidden lg:block absolute top-6 z-20"
                      style={{ 
                        left: 'calc(100% + 2rem)', // Half of gap-16 (4rem)
                        transform: 'translateX(-50%)'
                      }}
                    >
                      <motion.div
                        animate={{ x: [-2, 2, -2] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-200 to-yellow-200 dark:from-orbitkin-purple/30 dark:to-orbitkin-gold/30 backdrop-blur-sm border-2 border-purple-300 dark:border-white/20"
                      >
                        <ArrowRight className="w-4 h-4 text-purple-600 dark:text-orbitkin-gold" />
                      </motion.div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced sample questions section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orbitkin-purple/10 via-orbitkin-gold/5 to-orbitkin-light-blue/10 rounded-3xl blur-xl" />
          <div className="relative bg-white dark:bg-card/50 backdrop-blur-xl p-8 lg:p-12 rounded-3xl border-2 border-gray-300 dark:border-white/10 shadow-xl">
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-orbitkin-light-blue/10 dark:to-orbitkin-purple/10 backdrop-blur-sm border border-blue-400 dark:border-orbitkin-light-blue/20"
              >
                <Clock className="w-4 h-4 mr-2 text-orbitkin-light-blue" />
                <span className="text-sm font-medium">Just 5 Minutes</span>
              </motion.div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                What We Actually Ask You
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Real questions designed by social scientists to find your perfect match
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Interests & Hobbies",
                  color: "orbitkin-purple",
                  items: ["Gaming preferences & platforms", "Creative pursuits & skills", "Media interests & fandoms"]
                },
                {
                  title: "Group Goals",
                  color: "orbitkin-gold", 
                  items: ["Casual socializing & chat", "Study groups & accountability", "Creative collaboration projects"]
                },
                {
                  title: "Personality & Style",
                  color: "orbitkin-light-blue",
                  items: ["Communication preferences", "Social energy & interaction levels", "Activity frequency & timing"]
                }
              ].map((category, index) => {
                const colorClasses = {
                  'orbitkin-purple': {
                    bg: 'bg-purple-100 dark:bg-orbitkin-purple/10',
                    bgHover: 'group-hover:bg-purple-200 dark:group-hover:bg-orbitkin-purple/20',
                    text: 'text-purple-600 dark:text-orbitkin-purple',
                    dot: 'bg-purple-400 dark:bg-orbitkin-purple/60'
                  },
                  'orbitkin-gold': {
                    bg: 'bg-yellow-100 dark:bg-orbitkin-gold/10',
                    bgHover: 'group-hover:bg-yellow-200 dark:group-hover:bg-orbitkin-gold/20',
                    text: 'text-yellow-600 dark:text-orbitkin-gold',
                    dot: 'bg-yellow-400 dark:bg-orbitkin-gold/60'
                  },
                  'orbitkin-light-blue': {
                    bg: 'bg-blue-100 dark:bg-orbitkin-light-blue/10',
                    bgHover: 'group-hover:bg-blue-200 dark:group-hover:bg-orbitkin-light-blue/20',
                    text: 'text-blue-600 dark:text-orbitkin-light-blue',
                    dot: 'bg-blue-400 dark:bg-orbitkin-light-blue/60'
                  }
                }[category.color];
                
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} ${colorClasses.bgHover} flex items-center justify-center mb-4 transition-colors`}>
                      <Sparkles className={`w-6 h-6 ${colorClasses.text}`} />
                    </div>
                    <h4 className={`font-bold mb-3 ${colorClasses.text}`}>{category.title}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-muted-foreground">
                          <div className={`w-1.5 h-1.5 rounded-full ${colorClasses.dot} mt-2 flex-shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}