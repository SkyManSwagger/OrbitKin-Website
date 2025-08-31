"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface LazyLoadProps {
  children: ReactNode
  threshold?: number
  rootMargin?: string
  placeholder?: ReactNode
  onVisible?: () => void
}

export default function LazyLoad({
  children,
  threshold = 0.1,
  rootMargin = "50px",
  placeholder = <div className="min-h-[200px] animate-pulse bg-muted/20" />,
  onVisible,
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          onVisible?.()
          // Once visible, we can disconnect the observer
          if (containerRef.current) {
            observer.unobserve(containerRef.current)
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [threshold, rootMargin, onVisible])

  return (
    <div ref={containerRef}>
      {isVisible ? children : placeholder}
    </div>
  )
}