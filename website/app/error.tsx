"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertCircle, RefreshCw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <>
      <StarryBackground />
      <div className="min-h-screen bg-background relative flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="w-32 h-32 rounded-full bg-red-500/10 flex items-center justify-center">
                  <AlertCircle className="w-16 h-16 text-red-500" />
                </div>
                <div className="absolute -top-2 -right-2 text-4xl animate-spin-slow">⚙️</div>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Houston, We Have a <span className="text-red-500">Problem</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              Something went wrong in our orbit calculations. Don't worry, our team has been notified.
            </p>

            {/* Error Details */}
            <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md mx-auto">
              <p className="text-sm font-semibold mb-2">What happened?</p>
              <p className="text-sm text-muted-foreground">
                An unexpected error occurred while processing your request. This could be temporary, 
                so please try again in a moment.
              </p>
              {error.digest && (
                <p className="text-xs text-muted-foreground mt-4">
                  Error ID: <code className="px-2 py-1 bg-muted rounded">{error.digest}</code>
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={reset}
                className="w-full sm:w-auto"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              
              <Link href="/">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Button>
              </Link>
            </div>

            {/* Help Text */}
            <div className="mt-12 text-sm text-muted-foreground">
              <p>
                If this problem persists, please{" "}
                <Link href="/docs/support" className="text-primary hover:underline">contact support</Link> or{" "}
                <Link href="https://discord.com/users/skygorilla" className="text-primary hover:underline">reach out to @skygorilla</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}