"use client"

import Link from "next/link"
import { ArrowLeft, MessageCircle, Mail, Users, AlertCircle, Clock, CheckCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function SupportPage() {
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
                  <MessageCircle className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Contact <span className="gradient-text">Support</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                We're here to help you with OrbitKin
              </p>
            </motion.div>

            {/* Support Channels */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid md:grid-cols-2 gap-6 mb-12"
            >
              {/* In-Discord Support */}
              <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-orbitkin-purple/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orbitkin-purple/10">
                    <MessageCircle className="w-6 h-6 text-orbitkin-purple" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Discord Support</h3>
                    <p className="text-sm text-muted-foreground">Fastest response time</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">For Users:</p>
                    <div className="p-3 rounded-lg bg-black/20">
                      <code className="text-sm">ok!feedback</code>
                      <p className="text-xs text-muted-foreground mt-1">Submit feedback or report issues directly</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">For Urgent Issues:</p>
                    <p className="text-sm text-muted-foreground">Contact a server admin who can escalate to developers</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-green-500">
                    <Clock className="w-3 h-3" />
                    <span>Response within 2-4 hours</span>
                  </div>
                </div>
              </div>

              {/* Developer Contact */}
              <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 hover:border-orbitkin-gold/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-orbitkin-gold/10">
                    <Users className="w-6 h-6 text-orbitkin-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Developer Contact</h3>
                    <p className="text-sm text-muted-foreground">For server owners & critical issues</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Discord Direct Contact:</p>
                    <div className="p-3 rounded-lg bg-black/20">
                      <span className="text-sm font-mono">@skygorilla</span>
                      <p className="text-xs text-muted-foreground mt-1">For bot installation and technical issues</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">Best for:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Adding bot to your server</li>
                      <li>• Critical technical issues</li>
                      <li>• Partnership inquiries</li>
                    </ul>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-yellow-500">
                    <Clock className="w-3 h-3" />
                    <span>Response within 24-48 hours</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Support Categories */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">What We Can Help With</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <CheckCircle className="w-5 h-5 text-green-500 mb-2" />
                  <h4 className="font-medium mb-1">Account Issues</h4>
                  <p className="text-xs text-muted-foreground">
                    Registration problems, data requests, profile updates
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <CheckCircle className="w-5 h-5 text-green-500 mb-2" />
                  <h4 className="font-medium mb-1">Matching & Orbits</h4>
                  <p className="text-xs text-muted-foreground">
                    Not getting matched, Orbit issues, leaving groups
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <CheckCircle className="w-5 h-5 text-green-500 mb-2" />
                  <h4 className="font-medium mb-1">Technical Problems</h4>
                  <p className="text-xs text-muted-foreground">
                    Bot errors, command failures, access issues
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <CheckCircle className="w-5 h-5 text-green-500 mb-2" />
                  <h4 className="font-medium mb-1">Privacy Concerns</h4>
                  <p className="text-xs text-muted-foreground">
                    Data deletion, privacy settings, information security
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <CheckCircle className="w-5 h-5 text-green-500 mb-2" />
                  <h4 className="font-medium mb-1">Feature Requests</h4>
                  <p className="text-xs text-muted-foreground">
                    Suggestions, improvements, new features
                  </p>
                </div>
                
                <div className="p-4 rounded-lg bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <CheckCircle className="w-5 h-5 text-green-500 mb-2" />
                  <h4 className="font-medium mb-1">Server Setup</h4>
                  <p className="text-xs text-muted-foreground">
                    Adding bot to server, configuration, customization
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Before Contacting Support */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12 p-6 rounded-xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orbitkin-purple" />
                Before Contacting Support
              </h2>
              <p className="text-muted-foreground mb-4">
                Save time by checking these resources first:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/docs/faq" className="group">
                  <div className="p-4 rounded-lg bg-white/5 dark:bg-black/10 border border-white/10 hover:border-primary/50 transition-colors">
                    <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">Browse FAQ</h4>
                    <p className="text-xs text-muted-foreground">Answers to common questions</p>
                  </div>
                </Link>
                
                <Link href="/docs/troubleshooting" className="group">
                  <div className="p-4 rounded-lg bg-white/5 dark:bg-black/10 border border-white/10 hover:border-primary/50 transition-colors">
                    <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">Troubleshooting Guide</h4>
                    <p className="text-xs text-muted-foreground">Step-by-step solutions</p>
                  </div>
                </Link>
                
                <Link href="/docs/discord/user" className="group">
                  <div className="p-4 rounded-lg bg-white/5 dark:bg-black/10 border border-white/10 hover:border-primary/50 transition-colors">
                    <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">User Guide</h4>
                    <p className="text-xs text-muted-foreground">Complete command reference</p>
                  </div>
                </Link>
                
                <Link href="/docs/privacy-guide" className="group">
                  <div className="p-4 rounded-lg bg-white/5 dark:bg-black/10 border border-white/10 hover:border-primary/50 transition-colors">
                    <h4 className="font-medium mb-1 group-hover:text-primary transition-colors">Privacy Guide</h4>
                    <p className="text-xs text-muted-foreground">Data and privacy information</p>
                  </div>
                </Link>
              </div>
            </motion.section>

            {/* How to Write Good Support Request */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">How to Get Faster Help</h2>
              <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <p className="text-muted-foreground mb-4">
                  When contacting support, include these details for the fastest resolution:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-500">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Your Discord Username</p>
                      <p className="text-xs text-muted-foreground">So we can look up your account</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-500">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Exact Error Messages</p>
                      <p className="text-xs text-muted-foreground">Copy/paste or screenshot any errors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-500">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">What You Were Doing</p>
                      <p className="text-xs text-muted-foreground">Commands used, buttons clicked, etc.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-500">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">When It Happened</p>
                      <p className="text-xs text-muted-foreground">Approximate time and date</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-green-500">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">What You've Already Tried</p>
                      <p className="text-xs text-muted-foreground">Steps taken to resolve the issue</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Community Support */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Community Support</h2>
              <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-orbitkin-light-blue" />
                  <h3 className="font-semibold">Join Our Discord Community</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Connect with other OrbitKin users, share experiences, and get help from the community.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Get tips from experienced users</li>
                  <li>• Share your OrbitKin success stories</li>
                  <li>• Participate in community events</li>
                  <li>• Be the first to know about updates</li>
                </ul>
                <Button className="w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Join Discord Server
                </Button>
              </div>
            </motion.section>

            {/* Email Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Email Support</h2>
              <p className="text-muted-foreground mb-6">
                For non-urgent inquiries and detailed issues
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/20 mb-4">
                <Mail className="w-4 h-4" />
                <span className="font-mono text-sm">support@orbitkin.com</span>
              </div>
              <p className="text-xs text-muted-foreground">
                We typically respond within 2-3 business days
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}