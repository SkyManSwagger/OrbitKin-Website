"use client"

import Link from "next/link"
import { ArrowLeft, HelpCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          q: "What is OrbitKin?",
          a: "OrbitKin is an intelligent social matching system that creates small friend groups (called Orbits) of 4-6 compatible people. We use a comprehensive questionnaire and matching algorithm to ensure you're grouped with people who share your interests, goals, and communication style."
        },
        {
          q: "How do I get started?",
          a: "Simply use the command `ok!register` in the registration channel or click the 'Begin Questionnaire' button. Complete the ~25 question survey (takes about 5 minutes), and you'll be eligible for the next matching cycle."
        },
        {
          q: "Is OrbitKin free?",
          a: "Yes! OrbitKin is currently free to use during our beta phase. We're focused on building the best possible matching system and community."
        },
        {
          q: "What platforms does OrbitKin support?",
          a: "Currently, OrbitKin operates as a Discord bot. Mobile and web apps are in development and will be available in the future."
        }
      ]
    },
    {
      title: "The Questionnaire",
      questions: [
        {
          q: "How long does the questionnaire take?",
          a: "The questionnaire typically takes about 5 minutes to complete. It includes around 25 questions covering your interests, personality, availability, and what you're looking for in a friend group."
        },
        {
          q: "Can I change my answers later?",
          a: "Yes! You can update your answers anytime using `ok!editanswer` to change specific responses or `ok!updateanswers` to redo the entire questionnaire."
        },
        {
          q: "What if I don't want to answer certain questions?",
          a: "Most questions are required for optimal matching, but some personal details like age and gender preferences are optional. The more complete your profile, the better your matches will be."
        },
        {
          q: "Is my questionnaire data private?",
          a: "Yes! Your questionnaire responses are never shared with other users. We only use the data internally for matching purposes. You can view all your stored data with `ok!mydata`."
        }
      ]
    },
    {
      title: "Matching & Orbits",
      questions: [
        {
          q: "How does the matching algorithm work?",
          a: "Our algorithm considers multiple factors including shared interests, personality compatibility (using TIPI assessment), availability/timezone alignment, and group goals. We use graph-based clustering and semantic analysis to find optimal matches."
        },
        {
          q: "How often does matching happen?",
          a: "Matching cycles typically run weekly or bi-weekly, depending on the number of users ready for matching. Server admins can also run special matching cycles for new users."
        },
        {
          q: "What is an Orbit?",
          a: "An Orbit is your matched group of 4-6 compatible members. Each Orbit has its own private Discord channel where members can interact, share interests, and build friendships."
        },
        {
          q: "Why am I not getting matched?",
          a: "Make sure you've completed the entire questionnaire. Matching requires a minimum number of compatible users, so it may take time if the user pool is small. The more users join, the better the matching opportunities."
        },
        {
          q: "Can I be in multiple Orbits?",
          a: "Currently, you can only be in one Orbit at a time. This helps ensure quality engagement and meaningful connections within your group."
        }
      ]
    },
    {
      title: "Managing Your Orbit",
      questions: [
        {
          q: "Can I leave an Orbit?",
          a: "Yes! You can leave your Orbit at any time using the `ok!leavegroup` command or the departure button in your Orbit channel. You'll then be eligible for the next matching cycle."
        },
        {
          q: "What if someone in my Orbit is problematic?",
          a: "You can report concerning behavior using the 'Report Member' button in your Orbit channel. Reports are sent privately to moderators who will take appropriate action."
        },
        {
          q: "What are facilitation levels?",
          a: "Facilitation levels control how much the bot interacts with your Orbit. Options range from 'None' (complete privacy, no message recording) to 'High' (daily prompts and full analytics). You can adjust this anytime using the dropdown in your Orbit channel."
        },
        {
          q: "Do Orbits have voice channels?",
          a: "Currently, Orbits only have text channels. Voice channel support may be added in future updates based on user feedback."
        }
      ]
    },
    {
      title: "Privacy & Data",
      questions: [
        {
          q: "How can I see my data?",
          a: "Use the `ok!mydata` command to receive a comprehensive view of all your stored data via Direct Message. This includes all questionnaire answers, personality scores, and current Orbit membership."
        },
        {
          q: "Can I delete my data?",
          a: "Yes! Use `ok!deletedata` to permanently remove all your OrbitKin data. This requires confirmation and cannot be undone. You'll be removed from your current Orbit and all questionnaire answers will be deleted."
        },
        {
          q: "Are my messages in Orbits recorded?",
          a: "Only if facilitation is set above 'None'. Setting facilitation to 'None' stops all message recording. Higher levels enable analytics to improve matching and generate conversation prompts."
        },
        {
          q: "Who can see my questionnaire answers?",
          a: "Only you can see your questionnaire answers (via `ok!mydata`). Admins cannot access your personal data, and other users never see your individual responses."
        }
      ]
    },
    {
      title: "Technical Issues",
      questions: [
        {
          q: "Commands aren't working - what should I do?",
          a: "Check that you're using the correct prefix `ok!`, ensure you're not on cooldown (wait a moment and try again), and verify you're in the right channel for that command."
        },
        {
          q: "The questionnaire won't start",
          a: "Try using `ok!register` in the registration channel. If you already have a profile, check with `ok!mydata`. If issues persist, contact an admin."
        },
        {
          q: "Buttons aren't responding",
          a: "Buttons may timeout after extended periods. Try using the equivalent command instead (e.g., `ok!register` instead of clicking 'Begin Questionnaire'). Ask an admin to refresh the panel if needed."
        },
        {
          q: "I can't see my Orbit channel",
          a: "Make sure you've been matched (matching happens periodically). If you were recently matched, try refreshing Discord. Contact an admin if you're sure you should have access."
        }
      ]
    },
    {
      title: "Server Owners",
      questions: [
        {
          q: "How do I add OrbitKin to my server?",
          a: "Currently, bot installation requires manual setup by the developer. Contact @skygorilla on Discord to request OrbitKin for your server."
        },
        {
          q: "Can I customize OrbitKin for my server?",
          a: "Yes! While the core questionnaire remains consistent, the bot's theme and appearance can be customized to match your server's aesthetic."
        },
        {
          q: "What permissions does the bot need?",
          a: "OrbitKin needs permissions to: Manage Channels (for creating Orbits), Send Messages, Embed Links, Add Reactions, and View Channels."
        },
        {
          q: "Is there a minimum server size?",
          a: "You need at least 4 active users to form one Orbit. The more members participate, the better the matching quality."
        }
      ]
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
                <div className="p-3 rounded-2xl bg-green-500/10 backdrop-blur-sm">
                  <HelpCircle className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Find answers to common questions about OrbitKin
              </p>
            </motion.div>

            {/* FAQ Categories */}
            <div className="space-y-8">
              {faqCategories.map((category, categoryIndex) => (
                <motion.section
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-2xl font-semibold mb-4 text-primary">
                    {category.title}
                  </h2>
                  <div className="space-y-3">
                    {category.questions.map((item, index) => (
                      <details
                        key={index}
                        className="group"
                      >
                        <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all list-none">
                          <div className="flex items-center justify-between">
                            <span className="font-medium pr-4">{item.q}</span>
                            <ChevronDown className="w-4 h-4 text-muted-foreground group-open:rotate-180 transition-transform flex-shrink-0" />
                          </div>
                        </summary>
                        <div className="p-4 mt-2 rounded-lg bg-black/10">
                          <p className="text-muted-foreground">{item.a}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Still Need Help */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/support">
                  <Button>Contact Support</Button>
                </Link>
                <Link href="/docs/discord">
                  <Button variant="outline">View Discord Guide</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}