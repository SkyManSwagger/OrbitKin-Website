"use client"

import { Suspense } from "react"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import StarryBackground from "@/components/StarryBackground"
import StarField from "@/components/StarField"
import LazySection from "@/components/LazySection"

// Import components normally - we'll lazy load them with LazySection
import Features from "@/components/Features"
import HowItWorks from "@/components/HowItWorks"
import ProblemsWeSolve from "@/components/ProblemsWeSolve"
import WhoIsItFor from "@/components/WhoIsItFor"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <StarryBackground />
      <StarField />
      <main className="min-h-screen relative cosmic-dots">
        <Navigation />
        <Hero />
        
        <LazySection threshold={0.1} rootMargin="100px">
          <Features />
        </LazySection>
        
        <LazySection threshold={0.1} rootMargin="100px">
          <ProblemsWeSolve />
        </LazySection>
        
        <LazySection threshold={0.1} rootMargin="100px">
          <HowItWorks />
        </LazySection>
        
        <LazySection threshold={0.1} rootMargin="100px">
          <WhoIsItFor />
        </LazySection>
        
        <LazySection 
          threshold={0.1} 
          rootMargin="50px"
          fallback={<div className="min-h-[200px] animate-pulse bg-muted/5" />}
        >
          <CTA />
        </LazySection>
        
        <LazySection 
          threshold={0.1} 
          rootMargin="50px"
          fallback={<div className="min-h-[300px] animate-pulse bg-muted/5" />}
        >
          <Footer />
        </LazySection>
      </main>
    </>
  )
}