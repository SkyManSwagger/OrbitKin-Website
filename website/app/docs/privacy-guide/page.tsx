"use client"

import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, EyeOff, Database, UserX, AlertCircle, CheckCircle, Key, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function PrivacySecurityGuide() {
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
                <div className="p-3 rounded-2xl bg-gradient-to-r from-orbitkin-purple/20 to-orbitkin-gold/20 backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Privacy & <span className="gradient-text">Security</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Understanding how OrbitKin protects your data and privacy
              </p>
            </motion.div>

            {/* Core Principles */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Lock className="w-6 h-6 text-orbitkin-purple" />
                Core Privacy Principles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-orbitkin-purple/20 flex items-center justify-center mb-3">
                    <Eye className="w-8 h-8 text-orbitkin-purple" />
                  </div>
                  <h3 className="font-semibold mb-2">Transparency</h3>
                  <p className="text-sm text-muted-foreground">
                    You can always see what data we store about you
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-orbitkin-gold/20 flex items-center justify-center mb-3">
                    <Key className="w-8 h-8 text-orbitkin-gold" />
                  </div>
                  <h3 className="font-semibold mb-2">Control</h3>
                  <p className="text-sm text-muted-foreground">
                    You decide what happens with your data
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-orbitkin-light-blue/20 flex items-center justify-center mb-3">
                    <Shield className="w-8 h-8 text-orbitkin-light-blue" />
                  </div>
                  <h3 className="font-semibold mb-2">Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Your information is protected and encrypted
                  </p>
                </div>
              </div>
            </motion.section>

            {/* What Data We Collect */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">What Data We Collect</h2>
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Database className="w-5 h-5 text-orbitkin-purple" />
                    Questionnaire Data
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Information you provide during registration to help us find compatible matches:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Personal interests and hobbies</li>
                    <li>• Communication preferences</li>
                    <li>• Availability and timezone</li>
                    <li>• Personality assessment responses (TIPI)</li>
                    <li>• Goals for joining OrbitKin</li>
                    <li>• Age range and gender (optional)</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-orbitkin-gold" />
                    Platform Data
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Basic information from your Discord account:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Discord user ID and username</li>
                    <li>• Server membership status</li>
                    <li>• Orbit channel participation</li>
                    <li>• Command usage timestamps</li>
                  </ul>
                </div>

                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-orbitkin-light-blue" />
                    Optional Analytics
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Only collected if facilitation is enabled (not set to "None"):
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Message activity patterns (not content)</li>
                    <li>• Engagement metrics in Orbits</li>
                    <li>• Response to bot prompts</li>
                    <li>• Group interaction frequency</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* What We DON'T Do */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">What We DON'T Do</h2>
              <div className="p-6 rounded-xl bg-red-500/10 backdrop-blur-sm border border-red-500/20">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <UserX className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Never Share Personal Questionnaire Data</p>
                      <p className="text-sm text-muted-foreground">Your responses are never shown to other users or third parties</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <EyeOff className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Never Read Private Messages</p>
                      <p className="text-sm text-muted-foreground">We don't access DMs or messages outside Orbit channels</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Never Sell or Trade Data</p>
                      <p className="text-sm text-muted-foreground">Your information is never monetized or given to advertisers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Never Store Unnecessary Data</p>
                      <p className="text-sm text-muted-foreground">We only keep what's needed for matching and your experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Your Privacy Controls */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Your Privacy Controls</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Data Access
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-black/20">
                      <code className="text-sm">ok!mydata</code>
                      <p className="text-xs text-muted-foreground mt-1">View all your stored data (sent privately via DM)</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      • See everything we store about you<br/>
                      • Verify data accuracy<br/>
                      • Export for your records
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-orbitkin-gold" />
                    Data Updates
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-black/20">
                      <code className="text-sm">ok!editanswer</code>
                      <p className="text-xs text-muted-foreground mt-1">Modify specific questionnaire responses</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      • Change individual answers<br/>
                      • Update preferences<br/>
                      • Refresh matching criteria
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <EyeOff className="w-5 h-5 text-orbitkin-purple" />
                    Privacy Mode
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-black/20">
                      <span className="text-sm font-medium">Facilitation: None</span>
                      <p className="text-xs text-muted-foreground mt-1">Complete privacy in your Orbit</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      • No message recording<br/>
                      • No analytics collection<br/>
                      • No bot interactions
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <UserX className="w-5 h-5 text-red-500" />
                    Data Deletion
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-black/20">
                      <code className="text-sm">ok!deletedata</code>
                      <p className="text-xs text-muted-foreground mt-1">Permanently remove all your data</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      • Complete data erasure<br/>
                      • Requires confirmation<br/>
                      • Cannot be undone
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Facilitation Levels Explained */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Understanding Facilitation Levels</h2>
              <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 font-medium">Level</th>
                      <th className="text-left p-4 font-medium">Privacy Impact</th>
                      <th className="text-left p-4 font-medium">What Happens</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">🚫</span>
                          <span className="font-medium">None</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-500 text-xs">Maximum Privacy</span>
                      </td>
                      <td className="p-4 text-muted-foreground text-sm">
                        No messages recorded, no analytics, no bot prompts
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">🔕</span>
                          <span className="font-medium">Low</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-xs">Minimal Data</span>
                      </td>
                      <td className="p-4 text-muted-foreground text-sm">
                        Basic engagement metrics, emergency prompts only
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">⚖️</span>
                          <span className="font-medium">Medium</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded-full bg-blue-500/20 text-blue-500 text-xs">Balanced</span>
                      </td>
                      <td className="p-4 text-muted-foreground text-sm">
                        Activity patterns analyzed, smart conversation prompts
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">🔥</span>
                          <span className="font-medium">High</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 rounded-full bg-orbitkin-purple/20 text-orbitkin-purple text-xs">Full Features</span>
                      </td>
                      <td className="p-4 text-muted-foreground text-sm">
                        Full analytics for improved matching, daily activities
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <AlertCircle className="w-4 h-4 inline mr-1" />
                You can change facilitation level anytime using the dropdown in your Orbit channel
              </p>
            </motion.section>

            {/* Security Measures */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Security Measures</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-orbitkin-purple/10 to-transparent backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-orbitkin-purple" />
                    Data Protection
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Encrypted database storage</li>
                    <li>✅ Secure API endpoints</li>
                    <li>✅ Regular security audits</li>
                    <li>✅ Access logging and monitoring</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-orbitkin-gold/10 to-transparent backdrop-blur-sm border border-white/10">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-orbitkin-gold" />
                    Access Control
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✅ Role-based permissions</li>
                    <li>✅ Admin limitations (no data access)</li>
                    <li>✅ Developer-only sensitive operations</li>
                    <li>✅ Audit trail for all actions</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* GDPR & Compliance */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Your Rights</h2>
              <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                <h3 className="font-semibold mb-4">Under data protection regulations, you have the right to:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Access Your Data</p>
                        <p className="text-sm text-muted-foreground">Request a copy of all information we hold</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Correct Inaccuracies</p>
                        <p className="text-sm text-muted-foreground">Update or fix any incorrect information</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Delete Your Data</p>
                        <p className="text-sm text-muted-foreground">Request complete removal from our systems</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Data Portability</p>
                        <p className="text-sm text-muted-foreground">Export your data in a readable format</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Restrict Processing</p>
                        <p className="text-sm text-muted-foreground">Limit how we use your information</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Object to Processing</p>
                        <p className="text-sm text-muted-foreground">Opt out of certain data uses</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Best Practices */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Privacy Best Practices</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-semibold mb-2 text-sm">Regular Reviews</h4>
                  <p className="text-xs text-muted-foreground">
                    Use <code className="px-1 py-0.5 bg-black/20 rounded">ok!mydata</code> periodically to review your stored information
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-semibold mb-2 text-sm">Keep Updated</h4>
                  <p className="text-xs text-muted-foreground">
                    Update your preferences when they change for better matches
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-semibold mb-2 text-sm">Choose Your Level</h4>
                  <p className="text-xs text-muted-foreground">
                    Set facilitation to match your privacy comfort level
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-semibold mb-2 text-sm">Be Authentic</h4>
                  <p className="text-xs text-muted-foreground">
                    Share what you're comfortable with for genuine connections
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-semibold mb-2 text-sm">Report Concerns</h4>
                  <p className="text-xs text-muted-foreground">
                    Use <code className="px-1 py-0.5 bg-black/20 rounded">ok!feedback</code> for privacy concerns
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <h4 className="font-semibold mb-2 text-sm">Stay Informed</h4>
                  <p className="text-xs text-muted-foreground">
                    Check announcements for privacy policy updates
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-4">Privacy Questions?</h2>
              <p className="text-muted-foreground mb-6">
                We're here to help with any privacy or security concerns
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/privacy">
                  <Button variant="outline">
                    Read Full Privacy Policy
                  </Button>
                </Link>
                <Link href="/docs/support">
                  <Button>
                    Contact Support
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                For immediate data requests, use the Discord commands above<br/>
                For policy questions, contact us at privacy@orbitkin.com
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}