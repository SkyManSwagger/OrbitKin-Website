"use client"

import Link from "next/link"
import { ArrowLeft, Shield, Users, AlertTriangle, Settings, MessageCircle, BarChart, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function DiscordAdminGuide() {
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
                <div className="p-3 rounded-2xl bg-orbitkin-gold/10 backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-orbitkin-gold" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Discord <span className="gradient-text">Admin Guide</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Managing OrbitKin in your Discord community
              </p>
            </motion.div>

            {/* Role Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-orbitkin-gold/10 to-orbitkin-purple/10 dark:from-orbitkin-gold/5 dark:to-orbitkin-purple/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-orbitkin-gold" />
                Admin Role Overview
              </h2>
              <p className="text-muted-foreground mb-6">
                As an OrbitKin admin, you're the bridge between users and developers. You help users navigate the system, 
                manage matching cycles, handle reports, and escalate technical issues when needed.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-green-500">
                    <CheckCircle className="w-5 h-5" />
                    What Admins Can Do
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Start and manage matching cycles</li>
                    <li>• Create and delete Orbit channels</li>
                    <li>• Help users with registration issues</li>
                    <li>• Collect and forward feedback</li>
                    <li>• Handle user reports and conflicts</li>
                    <li>• Moderate Orbit discussions</li>
                    <li>• View registered and unmatched users</li>
                    <li>• Escalate technical issues</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2 text-red-500">
                    <XCircle className="w-5 h-5" />
                    Developer Only
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Access user personal data directly</li>
                    <li>• View questionnaire responses</li>
                    <li>• Modify user profiles</li>
                    <li>• Access database</li>
                    <li>• Change system configuration</li>
                    <li>• Export user data</li>
                    <li>• View detailed analytics</li>
                    <li>• Deploy bot updates</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Quick Start */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Quick Start Checklist</h2>
              <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Read this guide completely</p>
                        <p className="text-sm text-muted-foreground">Understand your responsibilities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Locate the admin panel</p>
                        <p className="text-sm text-muted-foreground">Find admin controls in your server</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Test matching preview</p>
                        <p className="text-sm text-muted-foreground">Understand the matching process</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Review active Orbits</p>
                        <p className="text-sm text-muted-foreground">Check current group status</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Learn user commands</p>
                        <p className="text-sm text-muted-foreground">Be able to help users</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Know developer contact</p>
                        <p className="text-sm text-muted-foreground">For escalation: @skygorilla</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Admin Commands */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Admin Commands</h2>
              
              <div className="space-y-6">
                {/* Matching Commands */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-orbitkin-purple" />
                    Matching Commands
                  </h3>
                  <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left p-4 font-medium">Command</th>
                          <th className="text-left p-4 font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5">
                          <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!admin preview</code></td>
                          <td className="p-4 text-muted-foreground">Preview potential matches without creating Orbits</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!admin matchmake</code></td>
                          <td className="p-4 text-muted-foreground">Run full matching cycle for all unmatched users</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!admin rematch</code></td>
                          <td className="p-4 text-muted-foreground">Match only newly registered users since last cycle</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!admin listregistered</code></td>
                          <td className="p-4 text-muted-foreground">List all registered users (names & IDs)</td>
                        </tr>
                        <tr>
                          <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!admin listunmatched</code></td>
                          <td className="p-4 text-muted-foreground">List unmatched users ready for grouping</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Orbit Management */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-orbitkin-gold" />
                    Orbit Management
                  </h3>
                  <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left p-4 font-medium">Command</th>
                          <th className="text-left p-4 font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5">
                          <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!admin orbit list</code></td>
                          <td className="p-4 text-muted-foreground">See all active Orbits with member counts</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!admin orbit info #channel</code></td>
                          <td className="p-4 text-muted-foreground">Get details about specific Orbit</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!admin orbit facilitation #channel [level]</code></td>
                          <td className="p-4 text-muted-foreground">Set facilitation level (none/low/medium/high)</td>
                        </tr>
                        <tr>
                          <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!admin orbit delete #channel</code></td>
                          <td className="p-4 text-muted-foreground">Remove an Orbit (requires confirmation)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* User Management */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-orbitkin-light-blue" />
                    User Management
                  </h3>
                  <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left p-4 font-medium">Command</th>
                          <th className="text-left p-4 font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/5">
                          <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!admin user @user</code></td>
                          <td className="p-4 text-muted-foreground">View user's registration and Orbit status</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!admin remove @user</code></td>
                          <td className="p-4 text-muted-foreground">Remove user from their current Orbit</td>
                        </tr>
                        <tr>
                          <td className="p-4"><code className="px-2 py-1 bg-black/20 rounded text-sm">ok!admin feedback</code></td>
                          <td className="p-4 text-muted-foreground">View recent user feedback submissions</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                💡 All admin commands require appropriate permissions and are logged for security
              </p>
            </motion.section>

            {/* Admin Panel */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Admin Panel Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-orbitkin-purple/10">
                      <Users className="w-5 h-5 text-orbitkin-purple" />
                    </div>
                    <h3 className="font-semibold">Matching Actions</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Preview Match</strong> - See potential groups before creating</li>
                    <li>• <strong>Execute Full Match</strong> - Create Orbits for all users</li>
                    <li>• <strong>Execute Rematch</strong> - Match only new users</li>
                    <li>• <strong>View Quality Scores</strong> - Check match compatibility</li>
                  </ul>
                </div>
                
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-orbitkin-gold/10">
                      <BarChart className="w-5 h-5 text-orbitkin-gold" />
                    </div>
                    <h3 className="font-semibold">Analytics & Reports</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>User Statistics</strong> - Total registered/matched users</li>
                    <li>• <strong>Orbit Health</strong> - Activity levels and engagement</li>
                    <li>• <strong>Feedback Summary</strong> - Recent user feedback</li>
                    <li>• <strong>Report Queue</strong> - User reports needing attention</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Handling Reports */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Handling User Reports</h2>
              <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">Report Types & Actions</h3>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div>
                          <p className="font-medium text-foreground">Harassment/Bullying</p>
                          <p>→ Document evidence, warn/mute user, consider Orbit removal</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Spam/Advertising</p>
                          <p>→ Delete messages, warn user, escalate if repeated</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Inappropriate Content</p>
                          <p>→ Remove content, warn user, potential temporary ban</p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Technical Issues</p>
                          <p>→ Document details, attempt basic troubleshooting, escalate to developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Common Issues */}
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
                    <span className="font-medium">User can't complete questionnaire</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Have them try <code className="px-1 py-0.5 bg-black/20 rounded">ok!register</code> again</li>
                      <li>• Check if they're in the correct channel</li>
                      <li>• Verify bot has proper permissions</li>
                      <li>• If persistent, escalate to developer with user ID</li>
                    </ul>
                  </div>
                </details>
                
                <details className="group">
                  <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="font-medium">Not enough users for matching</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Minimum 4 users needed for one Orbit</li>
                      <li>• Consider promotional activities</li>
                      <li>• Wait for more registrations</li>
                      <li>• Can adjust matching thresholds (developer only)</li>
                    </ul>
                  </div>
                </details>
                
                <details className="group">
                  <summary className="cursor-pointer p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-colors">
                    <span className="font-medium">Orbit channel not created after matching</span>
                  </summary>
                  <div className="p-4 mt-2 rounded-lg bg-black/10">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Check bot permissions (Manage Channels)</li>
                      <li>• Verify category isn't full (50 channel limit)</li>
                      <li>• Try manual channel creation</li>
                      <li>• Report to developer with match details</li>
                    </ul>
                  </div>
                </details>
              </div>
            </motion.section>

            {/* Matching Process Guide */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Running a Matching Cycle</h2>
              <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                <h3 className="font-semibold mb-4">Recommended Process</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orbitkin-purple/20 flex items-center justify-center text-sm font-semibold">1</span>
                    <div>
                      <p className="font-medium">Check pool size</p>
                      <p className="text-sm text-muted-foreground">Run <code className="px-1 py-0.5 bg-black/20 rounded">ok!admin listunmatched</code> to see available users</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orbitkin-purple/20 flex items-center justify-center text-sm font-semibold">2</span>
                    <div>
                      <p className="font-medium">Preview matches</p>
                      <p className="text-sm text-muted-foreground">Use <code className="px-1 py-0.5 bg-black/20 rounded">ok!admin preview</code> to see potential groups and quality scores</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orbitkin-purple/20 flex items-center justify-center text-sm font-semibold">3</span>
                    <div>
                      <p className="font-medium">Execute matching</p>
                      <p className="text-sm text-muted-foreground">Run <code className="px-1 py-0.5 bg-black/20 rounded">ok!admin matchmake</code> to create Orbits</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orbitkin-purple/20 flex items-center justify-center text-sm font-semibold">4</span>
                    <div>
                      <p className="font-medium">Verify creation</p>
                      <p className="text-sm text-muted-foreground">Check <code className="px-1 py-0.5 bg-black/20 rounded">ok!admin orbit list</code> to confirm channels were created</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orbitkin-purple/20 flex items-center justify-center text-sm font-semibold">5</span>
                    <div>
                      <p className="font-medium">Announce to community</p>
                      <p className="text-sm text-muted-foreground">Let users know new Orbits have been formed</p>
                    </div>
                  </li>
                </ol>
                <div className="mt-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <p className="text-sm text-yellow-500">
                    💡 <strong>Tip:</strong> Schedule regular matching cycles (e.g., every Sunday) so users know when to expect matches
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Best Practices */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Best Practices</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-orbitkin-purple/10 to-transparent backdrop-blur-sm border border-white/10">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 text-orbitkin-purple" />
                      User Communication
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✅ Be patient and understanding</li>
                      <li>✅ Direct users to help commands first</li>
                      <li>✅ Document recurring issues</li>
                      <li>✅ Maintain user privacy</li>
                      <li>✅ Never share questionnaire data</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-gradient-to-br from-orbitkin-gold/10 to-transparent backdrop-blur-sm border border-white/10">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Settings className="w-5 h-5 text-orbitkin-gold" />
                      System Management
                    </h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✅ Run matching cycles regularly</li>
                      <li>✅ Monitor Orbit activity weekly</li>
                      <li>✅ Clean up inactive Orbits monthly</li>
                      <li>✅ Review feedback promptly</li>
                      <li>✅ Keep documentation updated</li>
                    </ul>
                  </div>
                </div>
                
                <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent backdrop-blur-sm border border-green-500/20">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <BarChart className="w-5 h-5 text-green-500" />
                    Success Metrics
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Track these metrics to measure OrbitKin's success in your community:
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-black/20">
                      <p className="font-medium text-sm">Registration Rate</p>
                      <p className="text-xs text-muted-foreground">% of members who register</p>
                    </div>
                    <div className="p-3 rounded-lg bg-black/20">
                      <p className="font-medium text-sm">Orbit Activity</p>
                      <p className="text-xs text-muted-foreground">Messages per week in Orbits</p>
                    </div>
                    <div className="p-3 rounded-lg bg-black/20">
                      <p className="font-medium text-sm">Retention</p>
                      <p className="text-xs text-muted-foreground">Users staying in Orbits</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Escalation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-2xl font-semibold mb-4">Need Developer Support?</h2>
              <p className="text-muted-foreground mb-6">
                For technical issues, data requests, or system configuration
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/20">
                <MessageCircle className="w-5 h-5" />
                <span className="font-medium">Contact: @skygorilla on Discord</span>
              </div>
              <div className="mt-6 text-sm text-muted-foreground">
                <p className="font-medium mb-2">When escalating, include:</p>
                <div className="grid md:grid-cols-2 gap-3 text-left max-w-md mx-auto">
                  <div className="p-3 rounded-lg bg-black/20">
                    <p className="text-xs">• User ID(s) involved</p>
                    <p className="text-xs">• Exact error messages</p>
                  </div>
                  <div className="p-3 rounded-lg bg-black/20">
                    <p className="text-xs">• Steps already tried</p>
                    <p className="text-xs">• Screenshots if applicable</p>
                  </div>
                </div>
                <p className="text-xs mt-3 text-yellow-500">
                  ⚠️ Response time: 24-48 hours for non-critical issues
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}