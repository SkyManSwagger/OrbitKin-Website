"use client"

import Link from "next/link"
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle, Info, Zap, MessageCircle, Users, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function TroubleshootingPage() {
  const troubleshootingSections = [
    {
      title: "Registration & Questionnaire Issues",
      icon: MessageCircle,
      color: "text-orbitkin-purple",
      issues: [
        {
          problem: "Can't start the questionnaire",
          solutions: [
            "Use `ok!register` in the designated registration channel",
            "Check if you already have a profile with `ok!mydata`",
            "Try clicking the 'Begin Questionnaire' button instead of using commands",
            "Ensure the bot has proper permissions in the channel",
            "Wait a moment if you see a cooldown message"
          ],
          severity: "medium"
        },
        {
          problem: "Questionnaire progress was lost",
          solutions: [
            "Your progress is automatically saved - try `ok!register` again",
            "The questionnaire will resume where you left off",
            "If it starts over, use `ok!mydata` to check if you completed it",
            "Contact an admin if the issue persists"
          ],
          severity: "low"
        },
        {
          problem: "Can't submit text answers",
          solutions: [
            "Click the 'Provide Answer' button to open the modal",
            "Ensure your answer meets character limits",
            "Don't use special characters that might break formatting",
            "Try using the command version if buttons aren't working"
          ],
          severity: "low"
        }
      ]
    },
    {
      title: "Command Issues",
      icon: Settings,
      color: "text-orbitkin-gold",
      issues: [
        {
          problem: "Commands not working",
          solutions: [
            "Verify you're using the correct prefix: `ok!`",
            "Check if you're on cooldown (wait 30-60 seconds)",
            "Ensure you're in a channel where the bot can see messages",
            "Try using commands in a different channel",
            "Check if the bot is online (look for green status)"
          ],
          severity: "high"
        },
        {
          problem: "Getting 'Permission Denied' errors",
          solutions: [
            "Some commands only work in specific channels",
            "`ok!leavegroup` only works inside Orbit channels",
            "Registration commands need the registration channel",
            "Try using the command in a general channel"
          ],
          severity: "medium"
        },
        {
          problem: "Buttons and dropdowns not responding",
          solutions: [
            "Interactive elements timeout after 15 minutes",
            "Use the equivalent command instead of buttons",
            "Ask an admin to refresh the panel",
            "Try refreshing Discord (Ctrl/Cmd + R)",
            "Check if you have a stable internet connection"
          ],
          severity: "low"
        }
      ]
    },
    {
      title: "Matching & Orbit Problems",
      icon: Users,
      color: "text-orbitkin-light-blue",
      issues: [
        {
          problem: "Not getting matched to an Orbit",
          solutions: [
            "Ensure your questionnaire is 100% complete",
            "Matching happens weekly - be patient",
            "Check if there are enough users for matching (minimum 4)",
            "Verify you're not already in an Orbit with `ok!mydata`",
            "Ask an admin when the next matching cycle runs"
          ],
          severity: "medium"
        },
        {
          problem: "Can't see my Orbit channel",
          solutions: [
            "Refresh Discord completely (Ctrl/Cmd + R)",
            "Check if you're looking in the right category",
            "Verify you were matched by checking announcements",
            "Try logging out and back into Discord",
            "Contact an admin to verify your Orbit assignment"
          ],
          severity: "high"
        },
        {
          problem: "Want to leave current Orbit",
          solutions: [
            "Use `ok!leavegroup` inside your Orbit channel",
            "Click the 'Depart This Orbit' button in the channel",
            "You'll be eligible for the next matching cycle",
            "Consider discussing issues with your Orbit first",
            "Report problematic members instead if that's the issue"
          ],
          severity: "low"
        },
        {
          problem: "Orbit channel is empty/inactive",
          solutions: [
            "Increase facilitation level for more prompts",
            "Start conversations yourself - be the change!",
            "Use icebreaker prompts from the bot",
            "Consider leaving and waiting for a new match",
            "Report to admin if all members are inactive"
          ],
          severity: "medium"
        }
      ]
    },
    {
      title: "Data & Privacy Concerns",
      icon: AlertTriangle,
      color: "text-red-500",
      issues: [
        {
          problem: "Can't view my data",
          solutions: [
            "Use `ok!mydata` - it's always sent via DM",
            "Check your DM settings allow messages from bots",
            "Ensure you're not blocking the bot",
            "Try the command in a different channel",
            "Enable DMs from server members temporarily"
          ],
          severity: "medium"
        },
        {
          problem: "Want to delete all my data",
          solutions: [
            "Use `ok!deletedata` command",
            "Confirm deletion via DM when prompted",
            "This action cannot be undone",
            "You'll be removed from current Orbit",
            "Re-register anytime with `ok!register`"
          ],
          severity: "low"
        },
        {
          problem: "Concerned about message recording",
          solutions: [
            "Set facilitation to 'None' for complete privacy",
            "No messages are recorded at 'None' setting",
            "Only Orbit messages are analyzed, never DMs",
            "Use `ok!mydata` to see what's stored",
            "Read our privacy guide for full details"
          ],
          severity: "medium"
        }
      ]
    },
    {
      title: "Bot Performance Issues",
      icon: Zap,
      color: "text-yellow-500",
      issues: [
        {
          problem: "Bot is slow or unresponsive",
          solutions: [
            "Check if you're on cooldown",
            "Wait a few moments and try again",
            "Check Discord's status page for outages",
            "Try commands in a less busy channel",
            "Report to admin if issue persists over 5 minutes"
          ],
          severity: "high"
        },
        {
          problem: "Getting error messages",
          solutions: [
            "Screenshot the exact error message",
            "Note what command/action caused it",
            "Try the action again after a minute",
            "Report to admin with details",
            "Check if others have the same issue"
          ],
          severity: "high"
        }
      ]
    }
  ]

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'high': return 'text-red-500'
      case 'medium': return 'text-yellow-500'
      case 'low': return 'text-green-500'
      default: return 'text-muted-foreground'
    }
  }

  const getSeverityIcon = (severity: string) => {
    switch(severity) {
      case 'high': return <XCircle className="w-4 h-4" />
      case 'medium': return <AlertTriangle className="w-4 h-4" />
      case 'low': return <Info className="w-4 h-4" />
      default: return <CheckCircle className="w-4 h-4" />
    }
  }

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
                <div className="p-3 rounded-2xl bg-yellow-500/10 backdrop-blur-sm">
                  <AlertTriangle className="w-8 h-8 text-yellow-500" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Troubleshooting</span> Guide
              </h1>
              <p className="text-xl text-muted-foreground">
                Quick solutions to common OrbitKin issues
              </p>
            </motion.div>

            {/* Quick Checks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-xl font-semibold mb-4">Quick Checks First</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Correct Command Prefix</p>
                    <p className="text-sm text-muted-foreground">All commands start with `ok!`</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Bot is Online</p>
                    <p className="text-sm text-muted-foreground">Check for green status indicator</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Not on Cooldown</p>
                    <p className="text-sm text-muted-foreground">Wait 30-60 seconds between commands</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Right Channel</p>
                    <p className="text-sm text-muted-foreground">Some commands are channel-specific</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Troubleshooting Sections */}
            <div className="space-y-8">
              {troubleshootingSections.map((section, sectionIndex) => (
                <motion.section
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + sectionIndex * 0.1 }}
                  className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-6"
                >
                  <h2 className={`text-2xl font-semibold mb-6 flex items-center gap-2 ${section.color}`}>
                    <section.icon className="w-6 h-6" />
                    {section.title}
                  </h2>
                  
                  <div className="space-y-6">
                    {section.issues.map((issue, index) => (
                      <div key={index} className="border-l-2 border-white/10 pl-4">
                        <div className="flex items-start gap-2 mb-3">
                          <div className={`mt-1 ${getSeverityColor(issue.severity)}`}>
                            {getSeverityIcon(issue.severity)}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-2">{issue.problem}</h3>
                            <ol className="space-y-2">
                              {issue.solutions.map((solution, solIndex) => (
                                <li key={solIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-muted-foreground/50">{solIndex + 1}.</span>
                                  <span>{solution}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.section>
              ))}
            </div>

            {/* Emergency Contacts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 p-6 rounded-2xl bg-red-500/10 backdrop-blur-sm border border-red-500/20"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-red-500">
                <AlertTriangle className="w-5 h-5" />
                Critical Issues
              </h2>
              <p className="text-muted-foreground mb-4">
                If you're experiencing critical issues that affect multiple users or system functionality:
              </p>
              <ol className="space-y-2 text-sm">
                <li>1. Document the issue with screenshots</li>
                <li>2. Note the exact time and commands used</li>
                <li>3. Contact a server admin immediately</li>
                <li>4. Admin will escalate to @skygorilla if needed</li>
              </ol>
            </motion.div>

            {/* Still Need Help */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-8 text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-4">Problem not listed?</h2>
              <p className="text-muted-foreground mb-6">
                Get personalized help from our support team
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/support">
                  <Button>Contact Support</Button>
                </Link>
                <Link href="/docs/faq">
                  <Button variant="outline">Browse FAQ</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}