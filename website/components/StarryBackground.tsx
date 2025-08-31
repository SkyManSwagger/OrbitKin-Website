"use client"

import { useEffect, useState, memo } from "react"
import { useTheme } from "next-themes"

interface Star {
  id: number
  x: number
  y: number
  size: number
  animationDuration: number
  animationDelay: number
}

// Memoize the component to prevent unnecessary re-renders
const StarryBackground = memo(function StarryBackground() {
  const [stars, setStars] = useState<Star[]>([])
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
    
    // Use requestAnimationFrame for better performance
    requestAnimationFrame(() => {
      // Reduce star count for better performance
      const starCount = window.innerWidth < 768 ? 30 : 60
      const starArray: Star[] = []
      
      for (let i = 0; i < starCount; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 0.5,
          animationDuration: Math.random() * 3 + 2,
          animationDelay: Math.random() * 5,
        })
      }
      setStars(starArray)
    })
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Dark mode: Twinkling stars */}
      <div className="fixed inset-0 pointer-events-none dark:block hidden" aria-hidden="true">
        <div className="absolute inset-0">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white/80"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animation: `twinkle ${star.animationDuration}s ${star.animationDelay}s infinite ease-in-out`,
                willChange: 'opacity, transform',
              }}
            />
          ))}
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />
      </div>

      {/* Light mode: Simplified tech pattern */}
      <div className="fixed inset-0 pointer-events-none dark:hidden block" aria-hidden="true">
        {/* Tech gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
        
        {/* Simplified grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #7C5EFF 1px, transparent 1px),
              linear-gradient(to bottom, #7C5EFF 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Reduced circuit nodes */}
        {stars.slice(0, 20).map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-orbitkin-purple/30 rounded-full"
            style={{
              left: `${Math.floor(star.x / 5) * 5}%`,
              top: `${Math.floor(star.y / 5) * 5}%`,
              animation: `pulse ${star.animationDuration * 2}s ${star.animationDelay}s infinite`,
            }}
          />
        ))}
        
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/10" />
      </div>

      {/* Inline critical CSS for animations */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  )
})

export default StarryBackground