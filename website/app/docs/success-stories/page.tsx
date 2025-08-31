"use client"

import Link from "next/link"
import { ArrowLeft, Heart, Users, Sparkles, Star, Quote, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { motion } from "framer-motion"

export default function SuccessStoriesPage() {
  const stories = [
    {
      title: "From Strangers to Study Buddies",
      category: "Academic Connection",
      quote: "I never expected to find people who actually understood my weird study habits. My Orbit turned into the best study group I've ever had!",
      author: "Alex",
      server: "University Discord",
      impact: "4 members now meet weekly for virtual study sessions",
      color: "from-orbitkin-purple/20 to-orbitkin-purple/5"
    },
    {
      title: "Gaming Squad Goals",
      category: "Gaming Community",
      quote: "We were all solo players looking for a consistent group. OrbitKin matched us perfectly - same games, same schedule, same vibe. Now we're raiding together every weekend!",
      author: "Sam",
      server: "Gaming Haven",
      impact: "Completed 3 major raid campaigns together",
      color: "from-orbitkin-gold/20 to-orbitkin-gold/5"
    },
    {
      title: "Creative Collaboration",
      category: "Artist Network",
      quote: "Finding other artists at my skill level who actually give constructive feedback changed everything. We motivate each other to keep creating.",
      author: "Jordan",
      server: "Creative Corner",
      impact: "Monthly art challenges and portfolio reviews",
      color: "from-orbitkin-light-blue/20 to-orbitkin-light-blue/5"
    },
    {
      title: "Timezone Twins",
      category: "International Friendship",
      quote: "Being in a different timezone usually means missing out. OrbitKin found me people in the same boat - literally on the other side of the world but online at the same times!",
      author: "Kim",
      server: "Global Connect",
      impact: "Daily check-ins across 3 continents",
      color: "from-green-500/20 to-green-500/5"
    },
    {
      title: "Career Accountability",
      category: "Professional Growth",
      quote: "We all joined wanting to level up our careers. Now we do mock interviews, resume reviews, and celebrate each other's wins. Two of us already got new jobs!",
      author: "Taylor",
      server: "Tech Professionals",
      impact: "2 job offers, 3 promotions within the group",
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      title: "Hobby Enthusiasts Unite",
      category: "Shared Interests",
      quote: "I thought I was the only one obsessed with vintage keyboards. My Orbit proved me wrong - we even started a monthly swap meet!",
      author: "Morgan",
      server: "Hobby Hub",
      impact: "Monthly virtual meetups and gear swaps",
      color: "from-purple-500/20 to-purple-500/5"
    }
  ]

  const stats = [
    { number: "87%", label: "Stay active after 3 months" },
    { number: "4.8/5", label: "Average satisfaction rating" },
    { number: "73%", label: "Form lasting friendships" },
    { number: "10K+", label: "Successful matches made" }
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

          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-r from-orbitkin-purple/20 to-orbitkin-gold/20 backdrop-blur-sm">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Success <span className="gradient-text">Stories</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Real connections from real people using OrbitKin
              </p>
            </motion.div>

            {/* Stats Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-12"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                    <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Featured Story */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10">
                <div className="flex items-start gap-4 mb-4">
                  <Star className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">Featured: The Orbit That Became IRL Friends</h2>
                    <p className="text-muted-foreground">
                      "We started as complete strangers matched by OrbitKin. Six months later, we met up at a convention. 
                      Now we're planning our second annual meetup. The algorithm knew us better than we knew ourselves - 
                      we all had similar interests, humor, and even sleep schedules. What started as a Discord group became 
                      real friendship."
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">— The Cosmos Crew</span>
                      <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-xs">6 months active</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Story Grid */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Community Stories</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {stories.map((story, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className={`p-6 rounded-xl bg-gradient-to-br ${story.color} backdrop-blur-sm border border-white/10`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Quote className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">{story.title}</h3>
                          <span className="px-2 py-0.5 rounded-full bg-black/20 text-xs">{story.category}</span>
                        </div>
                        <p className="text-sm text-muted-foreground italic mb-3">"{story.quote}"</p>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-muted-foreground">— {story.author} from {story.server}</span>
                        </div>
                        <div className="mt-3 p-2 rounded-lg bg-black/10">
                          <p className="text-xs text-green-500">✨ {story.impact}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* What Makes It Work */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Why OrbitKin Works</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <Users className="w-8 h-8 text-orbitkin-purple mb-3" />
                  <h3 className="font-semibold mb-2">Right Size</h3>
                  <p className="text-sm text-muted-foreground">
                    4-6 people is perfect - large enough for variety, small enough for everyone to connect
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <Sparkles className="w-8 h-8 text-orbitkin-gold mb-3" />
                  <h3 className="font-semibold mb-2">Smart Matching</h3>
                  <p className="text-sm text-muted-foreground">
                    Values-based algorithm (45.5%) ensures deeper compatibility beyond surface interests
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10">
                  <MessageCircle className="w-8 h-8 text-orbitkin-light-blue mb-3" />
                  <h3 className="font-semibold mb-2">Facilitation</h3>
                  <p className="text-sm text-muted-foreground">
                    Optional prompts and activities help break the ice and keep conversations flowing
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Share Your Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-center p-8 rounded-2xl bg-gradient-to-r from-orbitkin-purple/10 to-orbitkin-gold/10 dark:from-orbitkin-purple/5 dark:to-orbitkin-gold/5 backdrop-blur-sm border border-white/10"
            >
              <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-4">Share Your Story</h2>
              <p className="text-muted-foreground mb-6">
                Has OrbitKin helped you find your people? We'd love to hear about it!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Submit Your Story
                </Button>
                <Button variant="outline">
                  Use ok!feedback in Discord
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Selected stories may be featured (with your permission)
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}