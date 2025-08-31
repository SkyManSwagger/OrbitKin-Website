import Link from "next/link"
import { Home, Search, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"

export default function NotFound() {
  return (
    <>
      <StarryBackground />
      <div className="min-h-screen bg-background relative flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Animation */}
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="text-[150px] md:text-[200px] font-bold text-primary/20 leading-none">
                  404
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl animate-pulse">🪐</div>
                </div>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Lost in <span className="gradient-text">Space</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              Looks like this Orbit has drifted too far from home. The page you're looking for doesn't exist.
            </p>

            {/* Suggestions */}
            <div className="bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-3">This might have happened because:</p>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li>• The page has been moved or deleted</li>
                <li>• You may have mistyped the address</li>
                <li>• The link you followed may be broken</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="w-full sm:w-auto">
                  <Home className="w-4 h-4 mr-2" />
                  Return Home
                </Button>
              </Link>
              
              <Link href="/docs">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Search className="w-4 h-4 mr-2" />
                  Browse Docs
                </Button>
              </Link>
            </div>

            {/* Help Text */}
            <div className="mt-12 text-sm text-muted-foreground">
              <p>
                Need help? <Link href="/docs/support" className="text-primary hover:underline">Contact support</Link> or{" "}
                <Link href="https://discord.com/users/skygorilla" className="text-primary hover:underline">reach out to @skygorilla</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}