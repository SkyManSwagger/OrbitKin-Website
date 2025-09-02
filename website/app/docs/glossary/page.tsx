"use client"

import Link from "next/link"
import { ArrowLeft, Book } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function Glossary() {
  const terms = [
    {
      term: "Orbit",
      definition: "A group of 4-6 people matched based on shared interests, values, and compatibility. Each Orbit is designed to foster meaningful connections."
    },
    {
      term: "OrbitKin",
      definition: "The social matching platform that creates small, compatible groups (Orbits) for authentic connections and friendships."
    },
    {
      term: "Matching Algorithm",
      definition: "The intelligent system that analyzes questionnaire responses, interests, and preferences to create optimal group combinations."
    },
    {
      term: "Questionnaire",
      definition: "The comprehensive survey users complete to help the matching algorithm understand their personality, interests, and social preferences."
    },
    {
      term: "Core",
      definition: "The central shared values and interests that bring an Orbit together. Represented by the golden center in the OrbitKin logo."
    },
    {
      term: "Facilitation",
      definition: "The process of guiding and supporting Orbit interactions through prompts, activities, and conversation starters."
    },
    {
      term: "Profile Visibility",
      definition: "Settings that control what information about you is shown to other users and potential Orbit members."
    },
    {
      term: "Activity Level",
      definition: "Your engagement frequency preference, ranging from casual (occasional interactions) to highly active (daily participation)."
    },
    {
      term: "Compatibility Score",
      definition: "An internal metric used by the matching algorithm to determine how well users might connect within an Orbit."
    },
    {
      term: "Orbit Lifespan",
      definition: "The typical duration an Orbit remains active, usually several weeks to months depending on member engagement."
    },
    {
      term: "Rematch",
      definition: "The process of being placed into a new Orbit after your current one concludes or if the match wasn't optimal."
    },
    {
      term: "Interest Tags",
      definition: "Keywords and categories you select to describe your hobbies, passions, and areas of interest for better matching."
    },
    {
      term: "Orbit Channel",
      definition: "The dedicated Discord channel or chat space where your Orbit members communicate and interact."
    },
    {
      term: "Icebreakers",
      definition: "Conversation starters and activities provided to help new Orbit members get to know each other."
    },
    {
      term: "Beta Access",
      definition: "Early access to OrbitKin features and the opportunity to provide feedback that shapes the platform's development."
    }
  ]

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
                <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-100 via-indigo-100 to-yellow-100 dark:from-orbitkin-blue/10 dark:to-orbitkin-gold/10 backdrop-blur-sm">
                  <Book className="w-8 h-8 text-orbitkin-gold" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Glossary</span> & Terms
              </h1>
              <p className="text-xl text-muted-foreground">
                Understanding OrbitKin terminology
              </p>
            </motion.div>

            {/* Terms List */}
            <div className="space-y-4">
              {terms.map((item, index) => (
                <motion.div
                  key={item.term}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-xl bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-orbitkin-purple/30 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {item.term}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.definition}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-6 rounded-xl bg-gradient-to-r from-blue-50 via-indigo-50 to-yellow-50 dark:from-orbitkin-blue/5 dark:to-orbitkin-gold/5 border border-gray-200 dark:border-white/10"
            >
              <h2 className="text-lg font-semibold mb-3">Need More Help?</h2>
              <p className="text-muted-foreground mb-4">
                If you encounter terms not listed here or need clarification, feel free to reach out to our support team or community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/docs/faq">
                  <Button variant="outline" size="sm">
                    View FAQ
                  </Button>
                </Link>
                <Link href="/docs/support">
                  <Button variant="outline" size="sm">
                    Contact Support
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