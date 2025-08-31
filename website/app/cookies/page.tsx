import Link from "next/link"
import { ArrowLeft, Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata(
  "Cookie Policy",
  "Understand how OrbitKin uses cookies and similar technologies to improve your experience and provide our services.",
  "/cookies"
)

export default function CookiePolicy() {
  return (
    <>
      <StarryBackground />
      <div className="min-h-screen bg-background relative">
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
          <div className="flex items-center gap-3 mb-8">
            <Cookie className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold m-0">Cookie Policy</h1>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              This Cookie Policy explains how OrbitKin ("we," "us," or "our") uses cookies 
              and similar tracking technologies when you visit our website and use our services. 
              By using OrbitKin, you consent to the use of cookies as described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. 
              They help websites remember information about your visit, such as your preferences 
              and settings, which can make your next visit easier and more useful.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-semibold mb-2 mt-4">1. Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly and cannot be 
              disabled. They include:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Session cookies:</strong> Temporary cookies that expire when you close your browser</li>
              <li><strong>Authentication cookies:</strong> Remember your login state</li>
              <li><strong>Security cookies:</strong> Help detect and prevent security threats</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">2. Functional Cookies</h3>
            <p>
              These cookies enable enhanced functionality and personalization:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Preference cookies:</strong> Remember your settings (theme, language)</li>
              <li><strong>User interface cookies:</strong> Remember UI state and customizations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">3. Analytics Cookies (Future)</h3>
            <p>
              We may use analytics cookies in the future to understand how visitors interact with our website:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Performance cookies:</strong> Would collect anonymous data about page visits</li>
              <li><strong>Usage cookies:</strong> Would help us understand which features are most popular</li>
              <li><strong>Error tracking:</strong> Would help identify and fix technical issues</li>
            </ul>
            <p className="mt-2 text-sm italic">
              Note: We are not currently using analytics cookies but may implement them in the future.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">4. Third-Party Cookies</h3>
            <p>
              Some cookies are placed by third-party services that appear on our pages:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Discord OAuth:</strong> For authentication and login services</li>
              <li><strong>CloudFlare:</strong> For security and performance optimization</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information Collected</h2>
            <p>
              Cookies may collect and store the following information:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>IP address (anonymized)</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages visited and time spent</li>
              <li>Click patterns and interaction data</li>
              <li>Date and time of visits</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookie Data</h2>
            <p>
              We use information collected through cookies to:
            </p>
            <ul className="list-disc pl-6">
              <li>Ensure the website functions properly</li>
              <li>Remember your preferences and settings</li>
              <li>Improve website performance and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Detect and prevent security threats</li>
              <li>Provide personalized content and features</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookie Duration</h2>
            <p>
              Cookies have different lifespans:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent cookies:</strong> Remain for a set period (typically 30 days to 2 years)</li>
            </ul>
            <p className="mt-4">
              You can view specific cookie durations in your browser's developer tools.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
            
            <h3 className="text-xl font-semibold mb-2">Browser Controls</h3>
            <p>
              Most web browsers allow you to control cookies through their settings:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
              <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">Disabling Cookies</h3>
            <p>
              You can disable cookies entirely, but this may affect website functionality:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Some features may not work properly</li>
              <li>You may need to re-enter information each visit</li>
              <li>Your preferences won't be remembered</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">Deleting Cookies</h3>
            <p>
              You can delete cookies at any time through your browser settings. This will 
              remove stored information but won't prevent future cookies from being set.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Do Not Track</h2>
            <p>
              OrbitKin respects Do Not Track (DNT) browser signals. When DNT is enabled, 
              we limit our use of analytics cookies and do not track your browsing behavior 
              across other websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Local Storage</h2>
            <p>
              In addition to cookies, we may use local storage (HTML5 storage) to store 
              preferences and improve performance. Local storage is similar to cookies but 
              can store more information and is not sent with every server request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p>
              Our service is not intended for children under 18. We do not knowingly 
              collect cookie data from children. If you believe we have collected data 
              from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">International Users</h2>
            <p>
              If you are accessing OrbitKin from the European Union or other regions with 
              specific cookie regulations, you have additional rights regarding cookie usage. 
              We comply with GDPR and other applicable privacy laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in our 
              practices or for legal reasons. We will notify you of any material changes by 
              updating the "Last updated" date and, where appropriate, through additional notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions about our Cookie Policy or how we use cookies, please contact us:
            </p>
            <ul className="list-none mt-4">
              <li>Discord: <Link href="https://discord.com/users/skygorilla" className="text-primary hover:underline">@skygorilla</Link></li>
              <li>Documentation: <Link href="/docs/support" className="text-primary hover:underline">Support Page</Link></li>
            </ul>
          </section>

          <section className="mb-8 p-6 bg-muted/50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Cookie Consent</h3>
            <p>
              By continuing to use OrbitKin, you consent to our use of cookies as described 
              in this policy. If you do not agree with our cookie practices, please adjust 
              your browser settings or discontinue use of our services.
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}