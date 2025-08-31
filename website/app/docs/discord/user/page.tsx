"use client"

import Link from "next/link"
import { ArrowLeft, Users, MessageCircle, Shield, Settings, Heart, Sparkles, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function DiscordUserGuide() {
  return (
    <>
      <StarryBackground />
      <div className="min-h-screen bg-background relative">
        <div className="container mx-auto px-4 py-8">
          <Link href="/docs/discord">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Discord Guide
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
                <div className="p-3 rounded-2xl bg-orbitkin-purple/10 backdrop-blur-sm">
                  <Users className="w-8 h-8 text-orbitkin-purple" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discord <span className="gradient-text">User Guide</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about using OrbitKin
              </p>
            </motion.div>

            {/* Quick Start */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-orbitkin-purple" />
                Quick Start Checklist
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Join the registration channel</p>
                      <p className="text-sm text-muted-foreground">Look for the designated registration area</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Use <code className="px-2 py-1 bg-black/20 rounded text-sm">ok!register</code></p>
                      <p className="text-sm text-muted-foreground">Or click "Begin Questionnaire" button</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Complete questionnaire</p>
                      <p className="text-sm text-muted-foreground">Takes about 5 minutes</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Wait for matching</p>
                      <p className="text-sm text-muted-foreground">Usually happens weekly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Join your Orbit</p>
                      <p className="text-sm text-muted-foreground">Private channel with 4-6 people</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Start connecting!</p>
                      <p className="text-sm text-muted-foreground">Engage with your new group</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Registration Process */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Registration Process</h2>
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="text-lg font-semibold mb-3">Step 1: Start Registration</h3>
                  <p className="text-muted-foreground mb-3">
                    Navigate to the registration channel in your server and either:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground mb-3">
                    <li>Type <code className="px-2 py-1 bg-black/20 rounded">ok!register</code> in the channel</li>
                    <li>Click the "Begin Questionnaire" button if available</li>
                  </ul>
                  <p className="text-xs text-yellow-500">
                    💡 Registration is done privately through DMs with the bot
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="text-lg font-semibold mb-3">Step 2: Complete Questionnaire</h3>
                  <p className="text-muted-foreground mb-3">
                    Answer questions about:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-black/20">
                      <p className="font-medium text-sm mb-1">Core Values</p>
                      <p className="text-xs text-muted-foreground">What matters most to you (45.5% of matching)</p>
                    </div>
                    <div className="p-3 rounded-lg bg-black/20">
                      <p className="font-medium text-sm mb-1">Interests</p>
                      <p className="text-xs text-muted-foreground">Hobbies and activities you enjoy</p>
                    </div>
                    <div className="p-3 rounded-lg bg-black/20">
                      <p className="font-medium text-sm mb-1">Personality</p>
                      <p className="text-xs text-muted-foreground">TIPI assessment for compatibility</p>
                    </div>
                    <div className="p-3 rounded-lg bg-black/20">
                      <p className="font-medium text-sm mb-1">Goals</p>
                      <p className="text-xs text-muted-foreground">What you hope to achieve</p>
                    </div>
                  </div>
                  <p className="text-xs text-green-500 mt-3">
                    ⏱️ Takes approximately 5-7 minutes to complete
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="text-lg font-semibold mb-3">Step 3: Wait for Matching</h3>
                  <p className="text-muted-foreground mb-3">
                    After completing registration:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>You'll be added to the matching pool</li>
                    <li>Matching typically happens weekly (varies by server)</li>
                    <li>You'll receive a notification when matched</li>
                    <li>Your Orbit channel will be automatically created</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Commands Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Essential Commands</h2>
              <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 font-medium">Command</th>
                      <th className="text-left p-4 font-medium">Description</th>
                      <th className="text-left p-4 font-medium">Usage</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!register</code></td>
                      <td className="p-4 text-muted-foreground">Start your OrbitKin journey</td>
                      <td className="p-4 text-muted-foreground">Registration channel only</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!mydata</code></td>
                      <td className="p-4 text-muted-foreground">View your complete profile data</td>
                      <td className="p-4 text-muted-foreground">Any channel (DM response)</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!editanswer</code></td>
                      <td className="p-4 text-muted-foreground">Edit specific questionnaire answers</td>
                      <td className="p-4 text-muted-foreground">Interactive menu</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!updateanswers</code></td>
                      <td className="p-4 text-muted-foreground">Redo entire questionnaire</td>
                      <td className="p-4 text-muted-foreground">Complete refresh</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!leavegroup</code></td>
                      <td className="p-4 text-muted-foreground">Leave your current Orbit</td>
                      <td className="p-4 text-muted-foreground">In Orbit channel</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!feedback</code></td>
                      <td className="p-4 text-muted-foreground">Submit feedback or report issues</td>
                      <td className="p-4 text-muted-foreground">Any channel</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!deletedata</code></td>
                      <td className="p-4 text-muted-foreground">Permanently delete all your data</td>
                      <td className="p-4 text-muted-foreground">Requires confirmation</td>
                    </tr>
                    <tr>
                      <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!help</code></td>
                      <td className="p-4 text-muted-foreground">Get command help and information</td>
                      <td className="p-4 text-muted-foreground">Any channel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                💡 All commands have cooldowns to prevent spam. Wait a moment between uses.
              </p>
            </motion.section>

            {/* Orbit Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Understanding Orbits</h2>
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-orbitkin-purple" />
                    What is an Orbit?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    An Orbit is your matched group of 4-6 compatible members who share similar interests and goals. 
                    Each Orbit has its own private Discord channel for interaction.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="text-center p-3 rounded-lg bg-black/20">
                      <div className="text-xl font-bold text-orbitkin-purple">4-6</div>
                      <div className="text-xs text-muted-foreground">Members per Orbit</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-black/20">
                      <div className="text-xl font-bold text-orbitkin-gold">Private</div>
                      <div className="text-xs text-muted-foreground">Dedicated channel</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-black/20">
                      <div className="text-xl font-bold text-orbitkin-light-blue">Matched</div>
                      <div className="text-xs text-muted-foreground">By compatibility</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-orbitkin-gold" />
                    Facilitation Levels
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Control how much the bot interacts with your Orbit:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🚫</span>
                      <div>
                        <p className="font-medium">None - Complete Privacy</p>
                        <p className="text-sm text-muted-foreground">No message recording, no bot prompts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🔕</span>
                      <div>
                        <p className="font-medium">Low - Minimal Intervention</p>
                        <p className="text-sm text-muted-foreground">Messages recorded, emergency prompts only</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">⚖️</span>
                      <div>
                        <p className="font-medium">Medium - Balanced (Default)</p>
                        <p className="text-sm text-muted-foreground">Messages recorded, smart conversation prompts</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">🔥</span>
                      <div>
                        <p className="font-medium">High - Maximum Engagement</p>
                        <p className="text-sm text-muted-foreground">Messages recorded, daily prompts and activities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Privacy & Data */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Privacy & Data Control</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <Shield className="w-8 h-8 text-orbitkin-purple mb-3" />
                  <h3 className="font-semibold mb-2">View Your Data</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Use <code className="px-1 py-0.5 bg-black/20 rounded text-xs">ok!mydata</code> to see everything we store
                  </p>
                  <p className="text-xs text-muted-foreground">Always sent privately via DM</p>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <Settings className="w-8 h-8 text-orbitkin-gold mb-3" />
                  <h3 className="font-semibold mb-2">Update Profile</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Edit answers with <code className="px-1 py-0.5 bg-black/20 rounded text-xs">ok!editanswer</code>
                  </p>
                  <p className="text-xs text-muted-foreground">Changes apply immediately</p>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <AlertCircle className="w-8 h-8 text-red-500 mb-3" />
                  <h3 className="font-semibold mb-2">Delete Everything</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Use <code className="px-1 py-0.5 bg-black/20 rounded text-xs">ok!deletedata</code> to remove all data
                  </p>
                  <p className="text-xs text-muted-foreground">Requires confirmation, cannot be undone</p>
                </div>
              </div>
            </motion.section>

            {/* Tips for Success */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Tips for Success</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-orbitkin-purple/10 to-transparent backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-orbitkin-purple" />
                    Profile Creation
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Be authentic - Honest answers lead to better matches</li>
                    <li>✅ Be complete - Fill out all questions for optimal matching</li>
                    <li>✅ Be specific - Detailed interests help find compatible Orbits</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-orbitkin-gold/10 to-transparent backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-orbitkin-gold" />
                    In Your Orbit
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Engage regularly - Active participation strengthens connections</li>
                    <li>✅ Use facilitation wisely - Adjust prompts to your group's needs</li>
                    <li>✅ Communicate openly - Share your thoughts with Orbit members</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Troubleshooting */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Common Issues & Solutions</h2>
              <div className="space-y-4">
                <details className="group">
                  <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="font-medium">Command not working?</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Check you're using the correct prefix: <code className="px-1 py-0.5 bg-black/20 rounded">ok!</code></li>
                      <li>• Verify you're not on cooldown (wait a moment)</li>
                      <li>• Ensure you're in the right channel for that command</li>
                    </ul>
                  </div>
                </details>
                
                <details className="group">
                  <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="font-medium">Not matched to an Orbit?</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Ensure your questionnaire is complete</li>
                      <li>• Matching happens periodically (usually weekly)</li>
                      <li>• More users = better matching opportunities</li>
                    </ul>
                  </div>
                </details>
                
                <details className="group">
                  <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="font-medium">Want to change Orbits?</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Use <code className="px-1 py-0.5 bg-black/20 rounded">ok!leavegroup</code> to leave current Orbit</li>
                      <li>• Wait for next matching cycle</li>
                      <li>• Update your profile for different matches</li>
                    </ul>
                  </div>
                </details>
              </div>
            </motion.section>

            {/* Best Practices */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent backdrop-blur-sm border border-green-500/20">
                  <h3 className="font-semibold mb-3 text-green-500">✅ Do's</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Be authentic in your questionnaire responses</li>
                    <li>• Engage regularly with your Orbit members</li>
                    <li>• Use facilitation features to enhance conversations</li>
                    <li>• Provide constructive feedback to improve the service</li>
                    <li>• Update your profile when interests change</li>
                    <li>• Respect privacy and boundaries of others</li>
                  </ul>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent backdrop-blur-sm border border-red-500/20">
                  <h3 className="font-semibold mb-3 text-red-500">❌ Don'ts</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Don't share personal contact info immediately</li>
                    <li>• Don't spam commands or messages</li>
                    <li>• Don't leave Orbits without giving them a chance</li>
                    <li>• Don't create multiple accounts for re-matching</li>
                    <li>• Don't share other members' data</li>
                    <li>• Don't use the service for dating or romance</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* FAQ */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <details className="group">
                  <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="font-medium">How long does matching take?</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <p className="text-sm text-muted-foreground">
                      Matching typically happens weekly, but timing depends on your server's schedule and the number of users in the matching pool. 
                      Most servers run matching on weekends when more people are available to start engaging with their new Orbits.
                    </p>
                  </div>
                </details>

                <details className="group">
                  <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="font-medium">Can I be in multiple Orbits?</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <p className="text-sm text-muted-foreground">
                      Currently, you can only be in one active Orbit at a time per server. This ensures meaningful engagement and prevents overwhelming users. 
                      If you're in multiple servers with OrbitKin, you can have one Orbit in each server.
                    </p>
                  </div>
                </details>

                <details className="group">
                  <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="font-medium">What if I don't like my Orbit?</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <p className="text-sm text-muted-foreground">
                      Give it at least a week - many great friendships need time to develop. If it's still not working, you can use <code className="px-1 py-0.5 bg-black/20 rounded">ok!leavegroup</code> 
                      to leave and re-enter the matching pool. Consider updating your profile answers for different matches.
                    </p>
                  </div>
                </details>

                <details className="group">
                  <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="font-medium">Is my data safe?</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <p className="text-sm text-muted-foreground">
                      Yes! We take privacy seriously. Your questionnaire responses are only used for matching and are never shared with other users. 
                      You can view all your data with <code className="px-1 py-0.5 bg-black/20 rounded">ok!mydata</code> and delete it anytime with 
                      <code className="px-1 py-0.5 bg-black/20 rounded">ok!deletedata</code>.
                    </p>
                  </div>
                </details>

                <details className="group">
                  <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="font-medium">Can I invite friends to my Orbit?</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <p className="text-sm text-muted-foreground">
                      Orbits are specifically matched groups for optimal compatibility. However, if your whole Orbit agrees, you can ask a server admin about 
                      special accommodations. The matching algorithm works best when people go through the natural matching process.
                    </p>
                  </div>
                </details>
              </div>
            </motion.section>

            {/* Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
              <p className="text-muted-foreground mb-6">
                Our support team is here to assist you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/support">
                  <Button variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
                </Link>
                <Button variant="outline">
                  Use ok!feedback in Discord
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}