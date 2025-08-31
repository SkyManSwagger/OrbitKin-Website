import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata(
  "Privacy Policy",
  "Learn how OrbitKin protects your privacy and handles your personal data. We're committed to transparency and your data rights.",
  "/privacy"
)

export default function PrivacyPolicy() {
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
            <Shield className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold m-0">Privacy Policy</h1>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Effective Date: {new Date().toLocaleDateString()} | Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="p-6 bg-primary/5 rounded-lg border border-primary/20 mb-8">
            <p className="text-sm font-medium">
              Your privacy is important to us. This policy explains what data we collect, 
              how we use it, and your rights regarding your personal information.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-2">1.1 Information You Provide Directly</h3>
            <p>When you use OrbitKin, you voluntarily provide us with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Account Information:</strong> Username, user ID, and profile information from your chosen platform</li>
              <li><strong>Questionnaire Responses:</strong> Your answers about interests, values, goals, and availability</li>
              <li><strong>Personality Assessment:</strong> Your responses to the TIPI (Ten-Item Personality Inventory)</li>
              <li><strong>Preferences:</strong> Communication style, commitment level, and matching preferences</li>
              <li><strong>Feedback:</strong> Any feedback or reports you submit through the service</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">1.2 Information Collected Automatically</h3>
            <p>When you interact with OrbitKin, we automatically collect:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Usage Data:</strong> Features used, timestamps of interactions</li>
              <li><strong>Orbit Activity:</strong> Group interaction patterns (only if facilitation is enabled)</li>
              <li><strong>Technical Data:</strong> Platform identifiers, device type, app version</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">1.3 Information We Do NOT Collect</h3>
            <ul className="list-disc pl-6">
              <li>Private messages between users</li>
              <li>Content outside of Orbit groups</li>
              <li>Payment or financial information</li>
              <li>Real names or physical addresses (unless voluntarily provided)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            
            <h3 className="text-xl font-semibold mb-2">2.1 Primary Uses</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Matching Services:</strong> To analyze compatibility and create Orbit groups</li>
              <li><strong>Service Delivery:</strong> To provide and maintain the OrbitKin bot functionality</li>
              <li><strong>Communication:</strong> To send notifications about your Orbit and service updates</li>
              <li><strong>Improvement:</strong> To enhance our matching algorithm and user experience</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">2.2 Legal Basis for Processing</h3>
            <p>We process your data based on:</p>
            <ul className="list-disc pl-6">
              <li><strong>Consent:</strong> You consent by using our service and completing the questionnaire</li>
              <li><strong>Legitimate Interests:</strong> To provide and improve our matching service</li>
              <li><strong>Legal Obligations:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Sharing and Disclosure</h2>
            
            <h3 className="text-xl font-semibold mb-2">3.1 Within Your Orbit</h3>
            <p>Other Orbit members can see:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your username and profile picture</li>
              <li>Messages you send in the Orbit group</li>
              <li>Your participation status</li>
            </ul>
            <p className="font-medium">They CANNOT see:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your questionnaire responses</li>
              <li>Your personality assessment scores</li>
              <li>Your specific matching scores</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">3.2 With Third Parties</h3>
            <p>We do NOT:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Sell your personal data</li>
              <li>Share your data with advertisers</li>
              <li>Transfer your data to marketing companies</li>
            </ul>
            <p>We MAY share data:</p>
            <ul className="list-disc pl-6">
              <li>When required by law or legal process</li>
              <li>To protect rights, property, or safety</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p>We implement security measures including:</p>
            <ul className="list-disc pl-6">
              <li>Encrypted storage of sensitive data</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Secure data transmission protocols</li>
            </ul>
            <p className="mt-4">
              However, no method of electronic storage is 100% secure. While we strive to protect 
              your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights and Controls</h2>
            
            <h3 className="text-xl font-semibold mb-2">5.1 Your Rights</h3>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Export your data in a readable format</li>
              <li><strong>Objection:</strong> Object to certain types of processing</li>
              <li><strong>Restriction:</strong> Request limited processing of your data</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">5.2 How to Exercise Your Rights</h3>
            <ul className="list-disc pl-6">
              <li>Use in-app privacy controls where available</li>
              <li>Contact <Link href="https://discord.com/users/skygorilla" className="text-primary hover:underline">@skygorilla</Link> for assistance</li>
              <li>Submit requests through <Link href="/docs/support" className="text-primary hover:underline">our support page</Link></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
            <p>We retain your data:</p>
            <ul className="list-disc pl-6">
              <li><strong>Active Users:</strong> As long as you use the service</li>
              <li><strong>Inactive Users:</strong> Up to 12 months of inactivity</li>
              <li><strong>After Deletion Request:</strong> Immediately deleted (except where legally required)</li>
              <li><strong>Orbit Messages:</strong> 90 days (if facilitation enabled)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. International Data Transfers</h2>
            <p>
              Your data may be processed in countries other than your own. We ensure appropriate 
              safeguards are in place for international transfers in compliance with applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
            <p>
              OrbitKin is not intended for users under 18 years of age. We do not knowingly collect 
              personal information from children. If we learn we have collected information from a 
              child under 18, we will delete it immediately.
            </p>
            <p className="mt-4">
              If you believe we have information from a child under 18, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. California Privacy Rights</h2>
            <p>
              California residents have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6">
              <li>Right to know what personal information is collected</li>
              <li>Right to know if personal information is sold or disclosed</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
            <p className="mt-4 font-medium">
              Note: We do NOT sell personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. European Privacy Rights (GDPR)</h2>
            <p>
              If you are in the European Economic Area (EEA), you have additional rights under GDPR:
            </p>
            <ul className="list-disc pl-6">
              <li>Right to lodge a complaint with supervisory authorities</li>
              <li>Right to withdraw consent at any time</li>
              <li>Right to object to automated decision-making</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes in our practices or for legal reasons. 
              We will notify you of material changes by:
            </p>
            <ul className="list-disc pl-6">
              <li>Updating the "Last Updated" date</li>
              <li>Posting a notice on the platform you use</li>
              <li>Sending a notification through the app (for significant changes)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
            <p>For privacy-related questions or concerns:</p>
            <div className="p-4 bg-muted/50 rounded-lg mt-4">
              <p><strong>Discord:</strong> <Link href="https://discord.com/users/skygorilla" className="text-primary hover:underline">@skygorilla</Link></p>
              <p><strong>Support:</strong> <Link href="/docs/support" className="text-primary hover:underline">orbitkin.com/docs/support</Link></p>
              <p><strong>Response Time:</strong> Within 48 hours</p>
            </div>
          </section>

          <section className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold mb-2">Your Consent</h3>
            <p>
              By using OrbitKin, you consent to this Privacy Policy. If you do not agree with this 
              policy, please do not use our services.
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}