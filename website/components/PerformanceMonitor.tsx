"use client"

import { useEffect } from "react"

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Web Vitals monitoring
    const reportWebVitals = (metric: any) => {
      // You can send these to an analytics service
      console.log(metric)
      
      // Example: Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          value: Math.round(metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true,
        })
      }
    }

    // Performance Observer for Long Tasks
    if ('PerformanceObserver' in window) {
      try {
        // Observe long tasks (> 50ms)
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            console.warn('Long Task detected:', {
              duration: entry.duration,
              startTime: entry.startTime,
              name: entry.name,
            })
          }
        })
        
        longTaskObserver.observe({ entryTypes: ['longtask'] })

        // Observe Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as any
          console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime || lastEntry.startTime)
        })
        
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const eventEntry = entry as PerformanceEventTiming
            const fid = eventEntry.processingStart - eventEntry.startTime
            console.log('FID:', fid)
          }
        })
        
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Cleanup
        return () => {
          longTaskObserver.disconnect()
          lcpObserver.disconnect()
          fidObserver.disconnect()
        }
      } catch (e) {
        console.error('Failed to setup performance observers:', e)
      }
    }

    // Basic performance metrics
    const logPerformanceMetrics = () => {
      if (window.performance && window.performance.timing) {
        const timing = window.performance.timing
        const metrics = {
          // Navigation timing
          dnsLookup: timing.domainLookupEnd - timing.domainLookupStart,
          tcpConnection: timing.connectEnd - timing.connectStart,
          request: timing.responseStart - timing.requestStart,
          response: timing.responseEnd - timing.responseStart,
          domProcessing: timing.domComplete - timing.domLoading,
          domContentLoaded: timing.domContentLoadedEventEnd - timing.navigationStart,
          pageLoadTime: timing.loadEventEnd - timing.navigationStart,
          
          // Memory usage (if available)
          ...(performance as any).memory && {
            usedJSHeapSize: (performance as any).memory.usedJSHeapSize / 1048576, // Convert to MB
            totalJSHeapSize: (performance as any).memory.totalJSHeapSize / 1048576,
          }
        }
        
        console.log('Performance Metrics:', metrics)
      }
    }

    // Log metrics after page load
    if (document.readyState === 'complete') {
      logPerformanceMetrics()
    } else {
      window.addEventListener('load', logPerformanceMetrics)
    }

    // Monitor resource loading
    const resources = performance.getEntriesByType('resource')
    const slowResources = resources.filter((r: any) => r.duration > 500)
    if (slowResources.length > 0) {
      console.warn('Slow resources detected:', slowResources.map((r: any) => ({
        name: r.name,
        duration: r.duration,
        size: r.transferSize,
      })))
    }

  }, [])

  return null // This component doesn't render anything
}