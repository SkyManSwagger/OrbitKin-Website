"use client"

import Link from "next/link"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-gray-950 flex items-center justify-center">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto text-center">
              {/* Critical Error Icon */}
              <div className="mb-8">
                <div className="relative inline-block">
                  <div className="w-32 h-32 rounded-full bg-red-900/20 flex items-center justify-center">
                    <AlertTriangle className="w-16 h-16 text-red-500" />
                  </div>
                </div>
              </div>

              {/* Error Message */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Critical System Error
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
                A critical error has occurred and the application cannot continue. 
                This is rare but serious.
              </p>

              {/* Error Details */}
              <div className="bg-red-900/10 border border-red-900/30 rounded-xl p-6 mb-8 max-w-md mx-auto">
                <p className="text-sm font-semibold mb-2 text-white">Critical Failure</p>
                <p className="text-sm text-gray-400">
                  The application encountered an unrecoverable error. Our team has been automatically 
                  notified and is working to resolve this issue.
                </p>
                {error?.digest && (
                  <p className="text-xs text-gray-500 mt-4">
                    Reference: <code className="px-2 py-1 bg-gray-800 rounded text-gray-300">{error.digest}</code>
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={reset}
                  className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  <RefreshCw className="inline w-4 h-4 mr-2" />
                  Reload Application
                </button>
                
                <a href="/">
                  <button className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors">
                    <Home className="inline w-4 h-4 mr-2" />
                    Return to Safety
                  </button>
                </a>
              </div>

              {/* Emergency Contact */}
              <div className="mt-12 text-sm text-gray-500">
                <p>
                  For immediate assistance:{" "}
                  <a href="https://discord.com/users/skygorilla" className="text-blue-400 hover:underline">
                    Contact @skygorilla
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}