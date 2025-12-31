import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Scale, AlertTriangle, FileCheck } from 'lucide-react';

export const metadata = {
  title: 'Terms of Service - Hey Mello',
  description: 'Hey Mello Terms of Service - Legal terms and conditions governing your use of our AI voice agent platform.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-4">
                <Scale className="w-12 h-12 text-purple-600 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Terms of Service
                </h1>
              </div>
              <p className="text-lg text-gray-600">
                Last Updated: December 25, 2025
              </p>
              <p className="text-lg text-gray-600 mt-2">
                Effective Date: December 25, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

              {/* Introduction */}
              <div className="mb-12">
                <p className="text-gray-600 mb-6">
                  Welcome to HeyMello AI! These Terms of Service ("Terms") govern your access to and use of our website (heymello.ai), AI voice agent platform, and related services (collectively, the "Services"). By accessing or using the Services, you agree to be bound by these Terms. If you do not agree, you may not use the Services.
                </p>
                <p className="text-gray-600 mb-6">
                  Please read these Terms carefully. They include important information about your legal rights, remedies, and obligations.
                </p>
              </div>

              {/* Important Notice */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-12">
                <div className="flex">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-700 font-semibold mb-2">Important Notice</p>
                    <p className="text-gray-600">
                      These Terms include an arbitration clause and class action waiver (Section 14). By accepting these Terms, you agree to resolve disputes through binding arbitration rather than in court.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 1 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-6">
                  By creating an account, accessing our website, or using our Services, you confirm that:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>You have read, understood, and agree to these Terms</li>
                  <li>You are at least 18 years old</li>
                  <li>You have the legal authority to enter into this agreement</li>
                  <li>If you represent a company, you have authority to bind that organization</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">2. Changes to Terms</h2>
                <p className="text-gray-600 mb-6">
                  We reserve the right to modify these Terms at any time. When we make material changes:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>We will update the "Last Updated" date</li>
                  <li>We will notify you via email or a prominent notice on our website</li>
                  <li>Continued use of the Services constitutes acceptance of the revised Terms</li>
                  <li>If you do not agree to the changes, you must stop using the Services</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">3. Description of Services</h2>
                <p className="text-gray-600 mb-6">
                  HeyMello AI provides AI-powered voice agent services designed to automate customer interactions. Our Services include:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>AI voice agents capable of handling inbound and outbound calls</li>
                  <li>Natural language understanding and conversational AI</li>
                  <li>Multi-language support (40+ languages)</li>
                  <li>Integration with third-party systems (CRMs, scheduling tools, etc.)</li>
                  <li>Analytics and reporting dashboards</li>
                  <li>API access for developers</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">4. Account Registration and Security</h2>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">4.1 Account Creation</h3>
                <p className="text-gray-600 mb-6">
                  To use certain features of our Services, you must create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Notify us immediately of any unauthorized access</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">4.2 Account Responsibility</h3>
                <p className="text-gray-600 mb-6">
                  You are responsible for all activity that occurs under your account. We are not liable for any loss or damage arising from unauthorized account access due to your failure to maintain security.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">5. Acceptable Use Policy</h2>
                <p className="text-gray-600 mb-6">You agree NOT to:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>Use the Services for any illegal or unauthorized purpose</li>
                  <li>Violate any laws, regulations, or third-party rights</li>
                  <li>Transmit harmful code (viruses, malware, etc.)</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with or disrupt the Services</li>
                  <li>Use the Services to harass, abuse, or harm others</li>
                  <li>Impersonate any person or entity</li>
                  <li>Scrape, spider, or crawl the Services</li>
                  <li>Reverse engineer or decompile our software</li>
                  <li>Use the Services for telemarketing without proper consent</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">6. Intellectual Property Rights</h2>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">6.1 HeyMello AI Ownership</h3>
                <p className="text-gray-600 mb-6">
                  All rights, title, and interest in the Services, including all software, algorithms, designs, trademarks, and content (excluding your data), are owned by HeyMello AI. You may not copy, modify, distribute, or create derivative works without our express written permission.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">6.2 Your Content</h3>
                <p className="text-gray-600 mb-6">
                  You retain ownership of any data, voice recordings, or content you provide through the Services ("Your Content"). By using our Services, you grant us a limited license to:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>Process, store, and transmit Your Content to provide the Services</li>
                  <li>Use anonymized and aggregated data for analytics and AI training (unless you opt out)</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">7. AI Voice Agents: Limitations and Disclaimers</h2>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                  <div className="flex">
                    <FileCheck className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">Important AI Disclaimer</p>
                      <p className="text-gray-600">
                        Our AI voice agents are advanced but not infallible. They may occasionally misunderstand requests, provide incorrect information, or behave unexpectedly.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">You acknowledge that:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>AI agents are not human and may make mistakes</li>
                  <li>You are responsible for monitoring AI interactions and ensuring compliance with applicable laws</li>
                  <li>HeyMello AI is not liable for decisions made based solely on AI recommendations</li>
                  <li>You should provide clear scripts, instructions, and escalation paths</li>
                  <li>You must inform customers when they are interacting with an AI agent (where required by law)</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">8. Fees and Payment</h2>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">8.1 Pricing</h3>
                <p className="text-gray-600 mb-6">
                  Our pricing plans are available on our website. Fees are based on usage (e.g., number of calls, minutes, features). You agree to pay all applicable fees according to your selected plan.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">8.2 Billing</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>Fees are billed monthly or annually (depending on your plan)</li>
                  <li>Payments are processed automatically via your payment method</li>
                  <li>You must keep billing information current</li>
                  <li>We may suspend services for non-payment</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">8.3 Refunds</h3>
                <p className="text-gray-600 mb-6">
                  All fees are non-refundable unless otherwise stated or required by law. If you believe you have been incorrectly charged, contact us within 30 days.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">9. Data Protection and Privacy</h2>
                <p className="text-gray-600 mb-6">
                  Your use of the Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand how we collect, use, and protect your data.
                </p>
                <p className="text-gray-600 mb-6">
                  You are responsible for ensuring compliance with applicable data protection laws (including GDPR, UK GDPR, CCPA, etc.) when using our Services.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">10. Term and Termination</h2>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">10.1 Term</h3>
                <p className="text-gray-600 mb-6">
                  These Terms remain in effect for as long as you use the Services.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">10.2 Termination by You</h3>
                <p className="text-gray-600 mb-6">
                  You may terminate your account at any time by contacting us or using the account settings. You remain responsible for fees incurred before termination.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">10.3 Termination by HeyMello AI</h3>
                <p className="text-gray-600 mb-6">
                  We may suspend or terminate your access to the Services immediately, without notice, if:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>You violate these Terms</li>
                  <li>Your account is inactive for an extended period</li>
                  <li>We discontinue the Services</li>
                  <li>Required by law or regulatory authority</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">10.4 Effect of Termination</h3>
                <p className="text-gray-600 mb-6">
                  Upon termination:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>Your right to use the Services ceases immediately</li>
                  <li>We may delete your account and data (subject to our retention policies)</li>
                  <li>Provisions that should survive termination (e.g., indemnity, limitations of liability) remain in effect</li>
                </ul>
              </div>

              {/* Section 11 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">11. Disclaimers and Warranties</h2>
                
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 font-semibold uppercase mb-3">DISCLAIMER</p>
                  <p className="text-gray-600">
                    THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. HEYMELLO AI DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND QUIET ENJOYMENT.
                  </p>
                </div>

                <p className="text-gray-600 mb-6">
                  We do not warrant that:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>The Services will be uninterrupted, error-free, or secure</li>
                  <li>Results obtained from the Services will be accurate or reliable</li>
                  <li>Defects will be corrected</li>
                </ul>
              </div>

              {/* Section 12 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">12. Limitation of Liability</h2>
                
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-6">
                  <p className="text-gray-700 font-semibold uppercase mb-3">LIMITATION OF LIABILITY</p>
                  <p className="text-gray-600 mb-4">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, HEYMELLO AI SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES.
                  </p>
                  <p className="text-gray-600">
                    OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO HEYMELLO AI IN THE 12 MONTHS PRECEDING THE CLAIM.
                  </p>
                </div>
              </div>

              {/* Section 13 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">13. Indemnification</h2>
                <p className="text-gray-600 mb-6">
                  You agree to indemnify, defend, and hold harmless HeyMello AI, its affiliates, officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including legal fees) arising from:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>Your use of the Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Your Content</li>
                </ul>
              </div>

              {/* Section 14 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">14. Dispute Resolution and Arbitration</h2>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">14.1 Informal Resolution</h3>
                <p className="text-gray-600 mb-6">
                  If a dispute arises, you agree to first contact us at admin@heymello.ai to attempt to resolve it informally.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">14.2 Binding Arbitration</h3>
                <p className="text-gray-600 mb-6">
                  If informal resolution fails, disputes will be resolved through binding arbitration in accordance with the rules of [arbitration body, e.g., LCIA or AAA]. Arbitration will take place in the United Kingdom, and judgment on the award may be entered in any court of competent jurisdiction.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">14.3 Class Action Waiver</h3>
                <p className="text-gray-600 mb-6">
                  You agree to resolve disputes on an individual basis only. You waive any right to participate in class actions, class arbitrations, or representative proceedings.
                </p>
              </div>

              {/* Section 15 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">15. Governing Law and Jurisdiction</h2>
                <p className="text-gray-600 mb-6">
                  These Terms are governed by the laws of England and Wales, without regard to conflict of law principles. Any legal action not subject to arbitration must be brought in the courts of England and Wales.
                </p>
              </div>

              {/* Section 16 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">16. Miscellaneous</h2>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">16.1 Entire Agreement</h3>
                <p className="text-gray-600 mb-6">
                  These Terms, together with our Privacy Policy and any other referenced policies, constitute the entire agreement between you and HeyMello AI.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">16.2 Severability</h3>
                <p className="text-gray-600 mb-6">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">16.3 Waiver</h3>
                <p className="text-gray-600 mb-6">
                  Our failure to enforce any provision of these Terms does not constitute a waiver of that provision.
                </p>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">16.4 Assignment</h3>
                <p className="text-gray-600 mb-6">
                  You may not assign or transfer these Terms without our written consent. We may assign our rights and obligations without restriction.
                </p>
              </div>

              {/* Contact Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">17. Contact Information</h2>
                <p className="text-gray-600 mb-6">
                  If you have questions or concerns about these Terms, please contact us:
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2"><strong>HeyMello AI</strong></p>
                  <p className="text-gray-600 mb-2"><strong>Company:</strong> Mello AI Ltd</p>
                  <p className="text-gray-600 mb-2"><strong>Company Registration Number:</strong> 16931737</p>
                  <p className="text-gray-600 mb-2">Email: <a href="mailto:admin@heymello.ai" className="text-purple-600 hover:underline">admin@heymello.ai</a></p>
                  {/* TODO: Replace admin@heymello.ai with support@heymello.ai when support email is ready */}
                  <p className="text-gray-600 mb-2">Support: <a href="mailto:admin@heymello.ai" className="text-purple-600 hover:underline">admin@heymello.ai</a></p>
                  <p className="text-gray-600">Website: <a href="https://heymello.ai" className="text-purple-600 hover:underline">heymello.ai</a></p>
                </div>
              </div>

              {/* Acknowledgment */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <p className="text-gray-700 font-semibold mb-3">Acknowledgment</p>
                <p className="text-gray-600">
                  BY USING THE SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
