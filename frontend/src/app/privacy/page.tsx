import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, FileText, AlertCircle } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy - Hey Mello',
  description: 'Hey Mello Privacy Policy - Learn how we collect, use, and protect your personal data in compliance with UK GDPR.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center mb-4">
                <Shield className="w-12 h-12 text-purple-600 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Privacy Policy
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
                  HeyMello AI ("we," "us," "our," or "HeyMello AI") is committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you access our website (heymello.ai), use our AI voice agent services, or otherwise interact with us (collectively, the "Services").
                </p>
                <p className="text-gray-600 mb-6">
                  This Privacy Policy is designed to comply with the UK General Data Protection Regulation (UK GDPR) and other applicable data protection laws. By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>

              {/* Quick Links */}
              <div className="bg-purple-50 rounded-lg p-6 mb-12">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Quick Links</h3>
                <div className="grid md:grid-cols-2 gap-3 text-purple-600">
                  <a href="#what-we-collect" className="hover:underline">→ What Information We Collect</a>
                  <a href="#how-we-use" className="hover:underline">→ How We Use Your Information</a>
                  <a href="#your-rights" className="hover:underline">→ Your Rights Under UK GDPR</a>
                  <a href="#voice-data" className="hover:underline">→ Voice Data Processing</a>
                  <a href="#security" className="hover:underline">→ Data Security</a>
                  <a href="#contact" className="hover:underline">→ Contact Us</a>
                </div>
              </div>

              {/* Section 1 */}
              <div id="what-we-collect" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">1. Information We Collect</h2>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-purple-600" />
                  1.1 Information You Provide Directly
                </h3>
                <p className="text-gray-600 mb-4">We collect information you provide when you:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li><strong>Create an account:</strong> Name, email address, phone number, company name, job title, billing information</li>
                  <li><strong>Use our Services:</strong> Voice recordings, conversation transcripts, queries, feedback</li>
                  <li><strong>Contact support:</strong> Support requests, correspondence, attachments</li>
                  <li><strong>Participate in surveys:</strong> Responses and feedback</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                  <Eye className="w-6 h-6 mr-2 text-purple-600" />
                  1.2 Information Collected Automatically
                </h3>
                <p className="text-gray-600 mb-4">When you use our Services, we automatically collect:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li><strong>Device information:</strong> IP address, browser type, operating system, device identifiers</li>
                  <li><strong>Usage data:</strong> Pages visited, time spent, clicks, interactions</li>
                  <li><strong>Cookies:</strong> See our Cookies Policy for details</li>
                  <li><strong>Call logs:</strong> Date, time, duration, and outcome of voice interactions</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">1.3 Information from Third Parties</h3>
                <p className="text-gray-600 mb-6">
                  We may receive information from third-party services you connect to our platform (e.g., CRM systems, calendaring tools, analytics providers).
                </p>
              </div>

              {/* Section 2 */}
              <div id="how-we-use" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">2. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li><strong>Service Delivery:</strong> Provide, maintain, and improve our AI voice agent services</li>
                  <li><strong>Personalization:</strong> Customize and optimize your experience</li>
                  <li><strong>Communication:</strong> Send service updates, respond to inquiries, provide support</li>
                  <li><strong>Analytics:</strong> Analyze usage patterns to improve functionality</li>
                  <li><strong>Security:</strong> Detect fraud, prevent abuse, and ensure platform security</li>
                  <li><strong>Legal Compliance:</strong> Meet regulatory and legal obligations</li>
                  <li><strong>Marketing:</strong> Send promotional materials (with your consent)</li>
                  <li><strong>AI Training:</strong> Improve AI models (you can opt out—see Section 8)</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">3. Legal Basis for Processing (UK GDPR)</h2>
                <p className="text-gray-600 mb-4">Under the UK GDPR, we process your personal data on the following legal bases:</p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li><strong>Contract Performance:</strong> To fulfill our contractual obligations to you</li>
                  <li><strong>Consent:</strong> Where you have given explicit consent (e.g., marketing communications)</li>
                  <li><strong>Legitimate Interests:</strong> For business operations, fraud prevention, and service improvement</li>
                  <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">4. Data Retention</h2>
                <p className="text-gray-600 mb-6">
                  We retain personal data only as long as necessary for the purposes outlined in this Privacy Policy or as required by law:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 space-y-3 text-gray-600">
                  <p><strong>Account information:</strong> Duration of your account + 7 years</p>
                  <p><strong>Voice recordings:</strong> 90 days (or as configured in your settings)</p>
                  <p><strong>Conversation transcripts:</strong> 2 years</p>
                  <p><strong>Usage logs:</strong> 1 year</p>
                  <p><strong>Marketing data:</strong> Until you opt out or withdraw consent</p>
                </div>
              </div>

              {/* Section 5 */}
              <div id="your-rights" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <Shield className="w-8 h-8 mr-3 text-purple-600" />
                  5. Your Rights Under UK GDPR
                </h2>
                <p className="text-gray-600 mb-6">As a UK data subject, you have the following rights:</p>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Right to Access</h3>
                    <p className="text-gray-600">Request a copy of your personal data we hold</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Right to Rectification</h3>
                    <p className="text-gray-600">Correct inaccurate or incomplete personal data</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Right to Erasure ("Right to be Forgotten")</h3>
                    <p className="text-gray-600">Request deletion of your personal data in certain circumstances</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Right to Restrict Processing</h3>
                    <p className="text-gray-600">Limit how we use your personal data</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Right to Data Portability</h3>
                    <p className="text-gray-600">Receive your data in a portable format and transfer it to another provider</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Right to Object</h3>
                    <p className="text-gray-600">Object to processing based on legitimate interests or for direct marketing</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Right to Withdraw Consent</h3>
                    <p className="text-gray-600">Withdraw consent at any time where processing is based on consent</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">Right to Lodge a Complaint</h3>
                    <p className="text-gray-600">File a complaint with the Information Commissioner's Office (ICO)</p>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 mt-6">
                  <p className="text-gray-700">
                    <strong>To exercise your rights, contact our Data Protection Officer at:</strong>
                  </p>
                  <p className="text-purple-600 mt-2">
                    <a href="mailto:admin@heymello.ai" className="hover:underline">admin@heymello.ai</a>
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div id="voice-data" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">6. Voice Data Processing</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                  <div className="flex">
                    <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-700 font-semibold mb-2">Special Category Data</p>
                      <p className="text-gray-600">
                        Voice recordings may contain sensitive information. We process voice data with additional security measures and only for the purposes you authorize.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-800">How We Handle Voice Data:</h3>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li><strong>Encryption:</strong> All voice data is encrypted in transit and at rest</li>
                  <li><strong>Storage:</strong> Stored securely for up to 90 days (configurable)</li>
                  <li><strong>Access Controls:</strong> Strict access controls limit who can access recordings</li>
                  <li><strong>Anonymization:</strong> Voice data used for analytics is anonymized</li>
                  <li><strong>Deletion:</strong> You can request deletion of specific recordings at any time</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div id="security" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center">
                  <Lock className="w-8 h-8 mr-3 text-purple-600" />
                  7. Data Security
                </h2>
                <p className="text-gray-600 mb-6">
                  We implement robust technical and organizational measures to protect your personal data:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-3">Technical Measures</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• End-to-end encryption</li>
                      <li>• Secure servers and databases</li>
                      <li>• Regular security audits</li>
                      <li>• Intrusion detection systems</li>
                      <li>• Multi-factor authentication</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-bold text-gray-800 mb-3">Organizational Measures</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• Employee training on data protection</li>
                      <li>• Strict access controls</li>
                      <li>• Data processing agreements</li>
                      <li>• Incident response procedures</li>
                      <li>• Regular compliance reviews</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">8. International Data Transfers</h2>
                <p className="text-gray-600 mb-6">
                  Your personal data may be transferred to and processed in countries outside the United Kingdom. When we transfer data internationally, we ensure adequate safeguards are in place, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>Standard Contractual Clauses approved by the UK authorities</li>
                  <li>Adequacy decisions recognizing equivalent data protection</li>
                  <li>Binding Corporate Rules where applicable</li>
                </ul>
              </div>

              {/* Section 9 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">9. AI Training and Model Improvement</h2>
                <p className="text-gray-600 mb-6">
                  We may use anonymized voice data and conversation transcripts to improve our AI models. If you wish to opt out of having your data used for AI training:
                </p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    <strong>Opt-out options:</strong>
                  </p>
                  <ul className="list-disc pl-6 mt-3 text-gray-600 space-y-2">
                    <li>Adjust settings in your account dashboard</li>
                    <li>Email us at: <a href="mailto:admin@heymello.ai" className="text-purple-600 hover:underline">admin@heymello.ai</a></li>
                    {/* TODO: Replace admin@heymello.ai with support@heymello.ai when support email is ready */}
                    <li>Contact support at: <a href="mailto:admin@heymello.ai" className="text-purple-600 hover:underline">admin@heymello.ai</a></li>
                  </ul>
                </div>
              </div>

              {/* Section 10 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">10. Children's Privacy</h2>
                <p className="text-gray-600 mb-6">
                  Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal data from children. If we discover that we have inadvertently collected data from a child, we will delete it promptly.
                </p>
              </div>

              {/* Section 11 */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">11. Updates to This Privacy Policy</h2>
                <p className="text-gray-600 mb-6">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                  <li>Posting the updated policy on our website</li>
                  <li>Updating the "Last Updated" date</li>
                  <li>Sending email notifications to registered users</li>
                </ul>
              </div>

              {/* Contact Section */}
              <div id="contact" className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">12. Contact Us</h2>
                <p className="text-gray-600 mb-6">
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-800 mb-4">Data Protection Officer</h3>
                    <p className="text-gray-600 mb-2"><strong>Company:</strong> Mello AI Ltd</p>
                    <p className="text-gray-600 mb-2"><strong>Company Registration Number:</strong> 16931737</p>
                    <p className="text-gray-600 mb-2">Email: <a href="mailto:admin@heymello.ai" className="text-purple-600 hover:underline">admin@heymello.ai</a></p>
                    <p className="text-gray-600">Subject line: "Privacy Inquiry"</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-bold text-gray-800 mb-4">General Contact</h3>
                    <p className="text-gray-600 mb-2">Email: <a href="mailto:admin@heymello.ai" className="text-purple-600 hover:underline">admin@heymello.ai</a></p>
                    <p className="text-gray-600">Website: <a href="https://heymello.ai" className="text-purple-600 hover:underline">heymello.ai</a></p>
                  </div>
                </div>
              </div>

              {/* ICO Information */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4">Information Commissioner's Office (ICO)</h3>
                <p className="text-gray-600 mb-4">
                  If you believe we have not handled your data appropriately, you have the right to lodge a complaint with the UK's supervisory authority:
                </p>
                <div className="text-gray-700">
                  <p className="mb-1">Wycliffe House, Water Lane</p>
                  <p className="mb-1">Wilmslow, Cheshire, SK9 5AF</p>
                  <p className="mb-1">Tel: 0303 123 1113</p>
                  <p className="mb-1">Website: <a href="https://ico.org.uk" className="text-purple-600 hover:underline">ico.org.uk</a></p>
                  <p>Email: <a href="mailto:casework@ico.org.uk" className="text-purple-600 hover:underline">casework@ico.org.uk</a></p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
