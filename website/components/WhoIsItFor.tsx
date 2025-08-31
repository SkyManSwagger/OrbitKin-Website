"use client"

import { motion } from "framer-motion"
import { Users, Globe, Heart, Sparkles, ArrowRight, Building2, UserCircle, Target } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WhoIsItFor() {
  const audiences = [
    {
      icon: UserCircle,
      title: "For Individuals",
      description: "Find your perfect friend group",
      benefits: [
        "Get matched with 4-6 compatible people",
        "Share interests, goals, and availability",
        "Build lasting friendships naturally"
      ],
      cta: "Start Your Journey",
      href: "/docs/getting-started",
      bgColor: "bg-orbitkin-purple/10",
      iconColor: "text-orbitkin-purple"
    },
    {
      icon: Building2,
      title: "For Communities",
      description: "Transform your community dynamics",
      benefits: [
        "Boost member engagement by 5x",
        "Reduce member churn by 10x",
        "Automated matching & facilitation"
      ],
      cta: "Learn More",
      href: "/docs/for-communities",
      bgColor: "bg-orbitkin-gold/10",
      iconColor: "text-orbitkin-gold"
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-wide relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Made for{" "}
            <span className="bg-gradient-to-r from-orbitkin-purple via-orbitkin-gold to-orbitkin-light-blue bg-clip-text text-transparent">
              Everyone
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're seeking connections or building communities, OrbitKin adapts to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className={`h-full p-8 rounded-2xl bg-white dark:bg-card/50 border-2 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all shadow-sm hover:shadow-lg`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${audience.bgColor}`}>
                    <audience.icon className={`w-8 h-8 ${audience.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{audience.title}</h3>
                    <p className="text-muted-foreground text-sm">{audience.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {audience.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href={audience.href}>
                  <Button variant="outline" className="w-full group">
                    {audience.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platform note - subtle and informative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <Globe className="w-4 h-4 inline mr-2" />
            Currently available on Discord • Expanding to iOS, Android & Web
          </p>
        </motion.div>
      </div>
    </section>
  )
}