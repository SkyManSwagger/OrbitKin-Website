import Link from "next/link"
import { ArrowLeft, ScrollText } from "lucide-react"
import { Button } from "@/components/ui/button"
import StarryBackground from "@/components/StarryBackground"
import { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata(
  "Terms of Service",
  "Read OrbitKin's terms of service. Understand your rights and responsibilities when using our friendship matching platform.",
  "/terms"
)

export default function TermsOfService() {
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
            <ScrollText className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold m-0">Terms of Service</h1>
          </div>
          
          <p className="text-muted-foreground mb-8">
            Effective Date: {new Date().toLocaleDateString()} | Last Updated: {new Date().toLocaleDateString()}
          </p>

          <div className="p-6 bg-primary/5 rounded-lg border border-primary/20 mb-8">
            <p className="text-sm font-medium">
              Please read these Terms of Service carefully before using OrbitKin. 
              By using our service, you agree to be bound by these Terms.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using OrbitKin ("we," "us," "our," or the "Service"), whether through 
              our website, mobile app, or any integrated platforms, you ("you" or "user") agree to be bound 
              by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree to these 
              Terms, you must not use the Service.
            </p>
            <p className="mt-4">
              These Terms constitute a legally binding agreement between you and OrbitKin. We may 
              update these Terms from time to time, and your continued use of the Service constitutes 
              acceptance of any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p>
              OrbitKin is a social matching platform that uses questionnaires, personality assessments, 
              and intelligent algorithms to connect compatible people in small groups called "Orbits." 
              Our Service includes:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Questionnaire System:</strong> Collecting information about interests, values, goals, and availability</li>
              <li><strong>Personality Assessment:</strong> Using the Ten-Item Personality Inventory (TIPI)</li>
              <li><strong>Matching Algorithm:</strong> Creating groups of 4-6 compatible people based on multiple factors</li>
              <li><strong>Orbit Facilitation:</strong> Optional assistance to encourage group interaction</li>
              <li><strong>Platform Integration:</strong> Available across multiple platforms including chat apps, mobile, and web</li>
            </ul>
            <p className="mt-4">
              The Service is designed to facilitate meaningful friendships and connections but does not 
              guarantee specific outcomes or relationships.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Eligibility Requirements</h2>
            <h3 className="text-xl font-semibold mb-2">3.1 Age Requirement</h3>
            <p>
              You must be at least 18 years old to use OrbitKin. By using the Service, you represent 
              and warrant that you meet this age requirement. We do not knowingly collect information 
              from or provide services to anyone under 18.
            </p>
            
            <h3 className="text-xl font-semibold mb-2 mt-4">3.2 Account Requirements</h3>
            <p>You must:</p>
            <ul className="list-disc pl-6">
              <li>Have a valid account on your chosen platform</li>
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">3.3 Jurisdictional Requirements</h3>
            <p>
              You must be legally permitted to use the Service in your jurisdiction. You are responsible 
              for compliance with all local laws and regulations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. User Accounts and Registration</h2>
            <h3 className="text-xl font-semibold mb-2">4.1 Account Creation</h3>
            <p>
              To use OrbitKin, you must complete our questionnaire and personality assessment. This 
              creates your profile within our system. You agree to:
            </p>
            <ul className="list-disc pl-6">
              <li>Provide truthful, accurate, and complete information</li>
              <li>Update your information to maintain its accuracy</li>
              <li>Not create multiple accounts to manipulate matching</li>
              <li>Not share your account with others</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2 mt-4">4.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and 
              for all activities that occur under your account. We are not liable for any loss or 
              damage arising from your failure to protect your account.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">4.3 Account Termination</h3>
            <p>
              You may delete your account and all associated data at any time through the 
              platform's privacy settings. We reserve the right to suspend or terminate 
              accounts that violate these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. User Conduct and Prohibited Activities</h2>
            <p>You agree to use OrbitKin in a respectful and lawful manner. You agree NOT to:</p>
            
            <h3 className="text-xl font-semibold mb-2 mt-4">5.1 Harmful Behavior</h3>
            <ul className="list-disc pl-6">
              <li>Harass, abuse, threaten, or intimidate other users</li>
              <li>Engage in discriminatory behavior based on race, gender, religion, or other protected characteristics</li>
              <li>Share or distribute offensive, inappropriate, or harmful content</li>
              <li>Stalk or repeatedly contact users who have asked you to stop</li>
              <li>Engage in predatory behavior or grooming</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">5.2 Misuse of Service</h3>
            <ul className="list-disc pl-6">
              <li>Use the Service for commercial solicitation or advertising</li>
              <li>Spam or send unsolicited messages</li>
              <li>Attempt to manipulate or game the matching algorithm</li>
              <li>Create fake profiles or impersonate others</li>
              <li>Use automated scripts or bots without permission</li>
              <li>Reverse engineer or attempt to extract our algorithms</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">5.3 Illegal Activities</h3>
            <ul className="list-disc pl-6">
              <li>Use the Service for any illegal purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Share content that infringes on intellectual property rights</li>
              <li>Distribute malware, viruses, or harmful code</li>
              <li>Engage in fraud or deceptive practices</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">5.4 Privacy Violations</h3>
            <ul className="list-disc pl-6">
              <li>Share personal information of others without consent</li>
              <li>Collect or harvest user data without authorization</li>
              <li>Violate our Privacy Policy or the terms of integrated platforms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Matching and Orbits</h2>
            <h3 className="text-xl font-semibold mb-2">6.1 Matching Process</h3>
            <p>
              OrbitKin uses proprietary algorithms to suggest matches based on questionnaire responses, 
              personality assessments, and other factors. We do not guarantee:
            </p>
            <ul className="list-disc pl-6">
              <li>Perfect compatibility or successful connections</li>
              <li>Specific match outcomes or timelines</li>
              <li>That you will be matched in every cycle</li>
              <li>Any particular quality or quantity of matches</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">6.2 Orbit Participation</h3>
            <p>
              When matched into an Orbit:
            </p>
            <ul className="list-disc pl-6">
              <li>Participation is voluntary - you may leave at any time</li>
              <li>You are expected to engage respectfully with other members</li>
              <li>Inactive members may be removed after notification</li>
              <li>Orbits may be dissolved if members violate Terms</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">6.3 Facilitation Services</h3>
            <p>
              OrbitKin may provide automated or human facilitation to encourage interaction. 
              Facilitation is optional and can be disabled by group consensus. Facilitators 
              are bound by confidentiality and will not share Orbit conversations.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">6.4 No Dating Service</h3>
            <p className="font-medium">
              OrbitKin is explicitly NOT a dating service. The Service is designed for friendship 
              and platonic connections. Using OrbitKin for romantic solicitation may result in 
              account termination.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Content and Intellectual Property</h2>
            <h3 className="text-xl font-semibold mb-2">7.1 Your Content</h3>
            <p>
              You retain ownership of content you submit to OrbitKin ("User Content"). By submitting 
              User Content, you grant us a worldwide, non-exclusive, royalty-free license to:
            </p>
            <ul className="list-disc pl-6">
              <li>Use, store, and process your content to provide the Service</li>
              <li>Analyze content to improve our matching algorithms</li>
              <li>Share content within your assigned Orbits</li>
            </ul>
            <p className="mt-4">
              You represent that you have the right to submit any User Content and that it does not 
              violate any third-party rights or applicable laws.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">7.2 OrbitKin Property</h3>
            <p>
              All OrbitKin content, features, functionality, algorithms, and branding are the exclusive 
              property of OrbitKin and are protected by copyright, trademark, and other intellectual 
              property laws. You may not:
            </p>
            <ul className="list-disc pl-6">
              <li>Copy, modify, or distribute our proprietary content</li>
              <li>Use our trademarks without written permission</li>
              <li>Reverse engineer our algorithms or systems</li>
              <li>Create derivative works based on the Service</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">7.3 Feedback</h3>
            <p>
              Any feedback, suggestions, or ideas you provide about OrbitKin become our property and 
              may be used without compensation or attribution to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Privacy and Data Protection</h2>
            <p>
              Your use of OrbitKin is governed by our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, 
              which is incorporated into these Terms by reference. By using the Service, you consent to:
            </p>
            <ul className="list-disc pl-6">
              <li>Collection and processing of your data as described in the Privacy Policy</li>
              <li>Storage of your data in our secure databases</li>
              <li>Use of your data for matching and service improvement</li>
              <li>Sharing limited information with your Orbit members</li>
            </ul>
            <p className="mt-4">
              We are committed to protecting your privacy and comply with applicable data protection 
              laws including GDPR and CCPA where applicable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Third-Party Services</h2>
            <p>
              OrbitKin integrates with third-party services including:
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Chat Platforms:</strong> For bot functionality and user authentication</li>
              <li><strong>Cloud Services:</strong> For data storage and processing</li>
              <li><strong>Analytics Services:</strong> For service improvement (anonymized data only)</li>
            </ul>
            <p className="mt-4">
              Your use of these third-party services is subject to their respective terms and policies. 
              We are not responsible for the practices or content of third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Disclaimers</h2>
            <h3 className="text-xl font-semibold mb-2">10.1 Service Availability</h3>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
              EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE:
            </p>
            <ul className="list-disc pl-6">
              <li>Uninterrupted or error-free service</li>
              <li>Accuracy or reliability of matching results</li>
              <li>That the Service will meet your requirements</li>
              <li>Security of data transmission</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">10.2 User Interactions</h3>
            <p className="font-medium">
              WE ARE NOT RESPONSIBLE FOR THE CONDUCT OF ANY USER. You interact with other users at 
              your own risk. We do not:
            </p>
            <ul className="list-disc pl-6">
              <li>Conduct background checks on users</li>
              <li>Verify the accuracy of user-provided information</li>
              <li>Guarantee the behavior or intentions of matched users</li>
              <li>Mediate disputes between users</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">10.3 External Links</h3>
            <p>
              The Service may contain links to third-party websites. We are not responsible for the 
              content, accuracy, or practices of these external sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
            <p className="font-medium mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
            </p>
            
            <h3 className="text-xl font-semibold mb-2">11.1 No Consequential Damages</h3>
            <p>
              ORBITKIN AND ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, AND LICENSORS WILL 
              NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
              INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6">
              <li>Loss of profits, data, use, or goodwill</li>
              <li>Service interruptions</li>
              <li>Computer damage or system failure</li>
              <li>Emotional distress or mental anguish</li>
              <li>Any damages resulting from user interactions</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">11.2 Cap on Liability</h3>
            <p>
              IN NO EVENT SHALL ORBITKIN'S TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU HAVE PAID TO 
              ORBITKIN IN THE TWELVE (12) MONTHS PRIOR TO THE EVENT GIVING RISE TO LIABILITY, OR 
              ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">11.3 Exceptions</h3>
            <p>
              Some jurisdictions do not allow limitation of certain damages. If these laws apply to 
              you, some or all of the above limitations may not apply, and you may have additional rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless OrbitKin and its officers, directors, 
              employees, agents, affiliates, successors, and assigns from and against any and all 
              losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, 
              interest, awards, penalties, fines, costs, or expenses arising from:
            </p>
            <ul className="list-disc pl-6">
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
              <li>Your violation of any applicable laws</li>
              <li>Your User Content or use of the Service</li>
              <li>Any misrepresentation made by you</li>
              <li>Your interactions with other users</li>
            </ul>
            <p className="mt-4">
              We reserve the right to assume exclusive defense and control of any matter subject to 
              indemnification by you, and you agree to cooperate with our defense of these claims.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Dispute Resolution</h2>
            <h3 className="text-xl font-semibold mb-2">13.1 Informal Resolution</h3>
            <p>
              Before filing a claim, you agree to try to resolve the dispute informally by contacting 
              us at <Link href="https://discord.com/users/skygorilla" className="text-primary hover:underline">@skygorilla</Link>. 
              We'll try to resolve the dispute informally within 30 days.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">13.2 Binding Arbitration</h3>
            <p>
              If informal resolution fails, any dispute arising from these Terms shall be resolved 
              through binding arbitration, except where prohibited by law. The arbitration shall be:
            </p>
            <ul className="list-disc pl-6">
              <li>Conducted by a neutral arbitrator</li>
              <li>Governed by applicable arbitration rules</li>
              <li>Held in a mutually agreed location or online</li>
              <li>Conducted in English</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">13.3 Class Action Waiver</h3>
            <p className="font-medium">
              YOU AGREE THAT DISPUTES WILL BE RESOLVED INDIVIDUALLY AND YOU WAIVE YOUR RIGHT TO 
              PARTICIPATE IN A CLASS ACTION, CLASS ARBITRATION, OR REPRESENTATIVE ACTION.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">13.4 Exceptions</h3>
            <p>
              You may bring claims in small claims court if eligible. Either party may seek injunctive 
              relief in court for infringement of intellectual property rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Termination</h2>
            <h3 className="text-xl font-semibold mb-2">14.1 Termination by You</h3>
            <p>
              You may stop using the Service at any time. To delete your account and data, 
              use the privacy controls available in your platform's settings.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">14.2 Termination by OrbitKin</h3>
            <p>
              We may suspend or terminate your account immediately, without prior notice, if:
            </p>
            <ul className="list-disc pl-6">
              <li>You violate these Terms</li>
              <li>We suspect fraudulent or illegal activity</li>
              <li>We receive valid legal requests</li>
              <li>You haven't used the Service for 12 months</li>
              <li>We discontinue the Service</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2 mt-4">14.3 Effect of Termination</h3>
            <p>
              Upon termination:
            </p>
            <ul className="list-disc pl-6">
              <li>Your access to the Service will cease immediately</li>
              <li>We may delete your data (except as required by law)</li>
              <li>You remain liable for activities prior to termination</li>
              <li>Sections that should survive termination will continue to apply</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. When we make changes:
            </p>
            <ul className="list-disc pl-6">
              <li>We'll update the "Last Updated" date</li>
              <li>We'll notify you of material changes via your platform or email</li>
              <li>Changes are effective immediately for new users</li>
              <li>Changes are effective 30 days after notice for existing users</li>
            </ul>
            <p className="mt-4">
              Your continued use after changes constitutes acceptance. If you disagree with changes, 
              you must stop using the Service and delete your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">16. General Provisions</h2>
            <h3 className="text-xl font-semibold mb-2">16.1 Governing Law</h3>
            <p>
              These Terms are governed by the laws of the United States and the state in which 
              OrbitKin operates, without regard to conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">16.2 Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between 
              you and OrbitKin regarding the Service and supersede all prior agreements.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">16.3 Severability</h3>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions 
              will continue in full force and effect.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">16.4 Waiver</h3>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a 
              waiver of those rights.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">16.5 Assignment</h3>
            <p>
              You may not assign or transfer your rights under these Terms. We may assign our rights 
              to any of our affiliates or successors.
            </p>

            <h3 className="text-xl font-semibold mb-2 mt-4">16.6 Force Majeure</h3>
            <p>
              We will not be liable for any delay or failure to perform resulting from causes beyond 
              our reasonable control, including natural disasters, war, terrorism, riots, embargoes, 
              or acts of civil or military authorities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">17. Beta Service Notice</h2>
            <p className="p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
              <strong>Important:</strong> OrbitKin is currently in beta. This means:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Features may change or be removed without notice</li>
              <li>The Service may experience bugs or interruptions</li>
              <li>Matching algorithms are being continuously refined</li>
              <li>Your feedback is valuable and appreciated</li>
            </ul>
            <p className="mt-4">
              By using the beta Service, you acknowledge these limitations and agree to provide 
              constructive feedback to help us improve.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">18. Contact Information</h2>
            <p>
              For questions about these Terms of Service or the Service itself:
            </p>
            <div className="p-4 bg-muted/50 rounded-lg mt-4">
              <p><strong>Discord:</strong> <Link href="https://discord.com/users/skygorilla" className="text-primary hover:underline">@skygorilla</Link></p>
              <p><strong>Support:</strong> <Link href="/docs/support" className="text-primary hover:underline">orbitkin.com/docs/support</Link></p>
              <p><strong>Response Time:</strong> Typically within 48 hours</p>
            </div>
          </section>

          <section className="mb-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold mb-2">Acknowledgment and Agreement</h3>
            <p className="font-medium">
              By using OrbitKin, you acknowledge that you have read, understood, and agree to be 
              bound by these Terms of Service and our Privacy Policy. If you do not agree, you must 
              not use the Service.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Thank you for being part of the OrbitKin community. We're committed to helping you 
              form meaningful connections while protecting your privacy and safety.
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  )
}