"use client"

import { motion } from "framer-motion"
import { XCircle, CheckCircle, ArrowRight, AlertTriangle, Sparkles } from "lucide-react"

const problems = [
  {
    problem: "Feeling like you don't belong in your current friend group",
    solution: "Find people who truly see you, hear you, and appreciate who you are",
    icon: "🎭"
  },
  {
    problem: "Always being the butt of the joke or unable to be yourself",
    solution: "Join a supportive Orbit where everyone is valued equally",
    icon: "💜"
  },
  {
    problem: "Moving to a new city and not knowing how to meet compatible people",
    solution: "Matched with locals who share your values and interests",
    icon: "📍"
  },
  {
    problem: "Friend groups that are too big to form real connections",
    solution: "Perfect size of 4-6 people where everyone truly connects",
    icon: "💬"
  },
  {
    problem: "Surface-level interactions that never develop into real friendships",
    solution: "Deep connections with people who actually 'get' you",
    icon: "🤝"
  },
  {
    problem: "Social apps that focus on dating or networking, not genuine friendship",
    solution: "Purely focused on helping you find authentic friendships",
    icon: "🌟"
  }
]

export default function ProblemsWeSolve() {
  return (
    <section id="problems" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-purple-100/30 dark:to-orbitkin-purple/5 pointer-events-none" />
      
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
            className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-red-500/10 to-orbitkin-gold/10 dark:from-red-500/10 dark:to-orbitkin-gold/10 backdrop-blur-sm border border-red-500/20 dark:border-red-500/20"
          >
            <AlertTriangle className="w-4 h-4 mr-2 text-red-400" />
            <span className="text-sm font-medium">The Reality</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Why Finding Friends{" "}
            <span className="bg-gradient-to-r from-red-400 via-orbitkin-gold to-orbitkin-purple bg-clip-text text-transparent">
              Feels Impossible
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Traditional approaches to making friends are broken. But we've cracked the code 
            on creating genuine connections that actually stick.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
              className="group relative perspective-1000"
            >
              {/* Card with flip animation */}
              <motion.div
                whileHover={{ rotateY: 5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-full"
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-400/20 via-orbitkin-gold/20 to-green-400/20 dark:from-red-400/20 dark:via-orbitkin-gold/20 dark:to-green-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                
                {/* Main card */}
                <div className="relative h-full rounded-2xl bg-white/80 dark:bg-card/50 backdrop-blur-xl border border-gray-200 dark:border-white/10 group-hover:border-gray-300 dark:group-hover:border-white/20 transition-all duration-300 overflow-hidden">
                  {/* Icon header */}
                  <div className="bg-gradient-to-r from-red-500/5 via-orbitkin-gold/5 to-green-500/5 dark:from-red-500/10 dark:via-orbitkin-gold/10 dark:to-green-500/10 p-6 border-b border-gray-200 dark:border-white/10">
                    <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {/* Problem section */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <span className="text-sm font-medium text-red-400 uppercase tracking-wide">The Problem</span>
                      </div>
                      <p className="text-gray-600 dark:text-muted-foreground leading-relaxed">
                        {item.problem}
                      </p>
                    </div>
                    
                    {/* Divider with arrow */}
                    <div className="flex justify-center my-4">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-orbitkin-purple to-orbitkin-gold"
                      >
                        <ArrowRight className="w-4 h-4 text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Solution section */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm font-medium text-green-400 uppercase tracking-wide">Our Solution</span>
                      </div>
                      <p className="text-gray-900 dark:text-foreground font-medium leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Stop Playing the{" "}
              <span className="text-red-400">Friendship Lottery</span>?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands who've already found their people through intelligent matching.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-orbitkin-purple to-orbitkin-gold shadow-2xl group cursor-pointer"
            >
              <Sparkles className="w-5 h-5 mr-3 text-white group-hover:rotate-12 transition-transform" />
              <span className="text-lg font-bold text-white">
                Find Your Orbit Today
              </span>
              <ArrowRight className="w-5 h-5 ml-3 text-white group-hover:translate-x-1 transition-transform" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}