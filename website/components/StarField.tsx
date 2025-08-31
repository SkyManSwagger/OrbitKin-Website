"use client"

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function StarField() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Delay star creation to improve initial page load
    const timer = setTimeout(() => {
      if (!containerRef.current) return

      // Reduce number of stars for better performance
      const stars = Array.from({ length: 30 }, (_, i) => {
        const star = document.createElement('div')
        star.className = 'star'
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`
        star.style.animationDelay = `${Math.random() * 4}s`
        star.style.opacity = `${0.1 + Math.random() * 0.2}`
        
        // Vary star sizes slightly
        const size = Math.random() < 0.9 ? '1px' : '1.5px'
        star.style.width = size
        star.style.height = size
        
        return star
      })

      const container = containerRef.current
      stars.forEach(star => container.appendChild(star))
      setIsLoaded(true)

      return () => {
        stars.forEach(star => {
          if (container.contains(star)) {
            container.removeChild(star)
          }
        })
      }
    }, 1000) // Delay by 1 second

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      ref={containerRef}
      className="starfield"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 2 }}
    />
  )
}