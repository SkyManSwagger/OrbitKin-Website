"use client"

import { useEffect, useRef, useCallback } from "react"

interface UseOptimizedAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useOptimizedAnimation(
  animationCallback: (element: HTMLElement) => void,
  options: UseOptimizedAnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = "50px",
    triggerOnce = true,
  } = options
  
  const elementRef = useRef<HTMLElement>(null)
  const hasAnimated = useRef(false)
  
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && elementRef.current) {
          if (!hasAnimated.current || !triggerOnce) {
            // Use requestAnimationFrame for smooth animations
            requestAnimationFrame(() => {
              animationCallback(elementRef.current!)
            })
            hasAnimated.current = true
          }
        }
      })
    },
    [animationCallback, triggerOnce]
  )
  
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    })
    
    if (elementRef.current) {
      observer.observe(elementRef.current)
    }
    
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [handleIntersection, threshold, rootMargin])
  
  return elementRef
}

// Hook for reducing motion for accessibility
export function useReducedMotion() {
  const QUERY = "(prefers-reduced-motion: reduce)"
  const mediaQueryList = typeof window !== "undefined" ? window.matchMedia(QUERY) : null
  const prefersReducedMotion = mediaQueryList ? mediaQueryList.matches : false
  
  useEffect(() => {
    if (!mediaQueryList) return
    
    const listener = (event: MediaQueryListEvent) => {
      // You could trigger a re-render here if needed
      console.log("Motion preference changed:", event.matches)
    }
    
    mediaQueryList.addEventListener("change", listener)
    return () => mediaQueryList.removeEventListener("change", listener)
  }, [mediaQueryList])
  
  return prefersReducedMotion
}

// Hook for debouncing expensive operations
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  
  return debouncedValue
}

// Hook for throttling frequent events
export function useThrottle<T>(value: T, limit: number): T {
  const [throttledValue, setThrottledValue] = useState(value)
  const lastRan = useRef(Date.now())
  
  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value)
        lastRan.current = Date.now()
      }
    }, limit - (Date.now() - lastRan.current))
    
    return () => {
      clearTimeout(handler)
    }
  }, [value, limit])
  
  return throttledValue
}

// Import useState since it was used but not imported
import { useState } from "react"