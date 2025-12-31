import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cookies Policy - Hey Mello',
  description: 'Learn about how Hey Mello uses cookies and similar tracking technologies to improve your experience on our website.',
};

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Cookies Policy
              </h1>
              <p className="text-lg text-gray-600">
                Last Updated: December 25, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">1. Introduction</h2>
              <p className="text-gray-600 mb-6">
                This Cookies Policy explains how HeyMello AI ("we," "us," "our," or "HeyMello AI") uses cookies and similar tracking technologies on our website heymello.ai and through our AI voice agent services (collectively, the "Services").
              </p>
              <p className="text-gray-600 mb-6">
                By using our Services, you consent to the use of cookies in accordance with this Cookies Policy. If you do not agree with our use of cookies, you should change your browser settings accordingly or discontinue use of our Services.
              </p>
              
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">2. What Are Cookies?</h2>
              <p className="text-gray-600 mb-6">
                Cookies are small text files that are placed on your device (computer, smartphone, tablet, or other electronic device) when you visit a website. Cookies are widely used by website owners to make their websites function more efficiently and to provide reporting information.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">First-Party Cookies</h3>
              <p className="text-gray-600 mb-6">
                These are cookies set by HeyMello AI directly. We use them to provide core functionality and improve your experience on our Services.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Third-Party Cookies</h3>
              <p className="text-gray-600 mb-6">
                These are cookies set by parties other than HeyMello AI, such as analytics providers, advertising networks, or social media platforms. These cookies enable third-party features and functionality on our Services.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">3. How We Use Cookies</h2>
              
              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Essential Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies are essential for the operation of our Services and cannot be disabled. They enable core functionality such as:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Account access and authentication</li>
                <li>Security and fraud prevention</li>
                <li>Session management</li>
                <li>Load balancing</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Performance and Analytics Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies help us understand how visitors interact with our Services, enabling us to improve functionality and user experience. They collect:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Page views and navigation patterns</li>
                <li>Browser type and device information</li>
                <li>Performance metrics and error logs</li>
                <li>Usage statistics</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Functionality Cookies</h3>
              <p className="text-gray-600 mb-4">
                These cookies enable enhanced functionality and personalization:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Language preferences</li>
                <li>User interface customizations</li>
                <li>Login details (if chosen)</li>
                <li>Voice settings</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Targeting and Advertising Cookies</h3>
              <p className="text-gray-600 mb-6">
                These cookies are used to deliver relevant advertisements and measure the effectiveness of advertising campaigns. They track browsing activity and build profiles of interests. These cookies are used only with your explicit consent.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">4. Your Cookie Choices</h2>
              <p className="text-gray-600 mb-4">
                You have several options to manage and control cookies:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Use our cookie consent manager when you first visit our website</li>
                <li>Change your cookie preferences through browser settings</li>
                <li>Click "Cookie Settings" in our website footer</li>
                <li>Email us at: admin@heymello.ai</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800">Browser Settings</h3>
              <p className="text-gray-600 mb-4">
                Most browsers allow you to control cookies through their settings:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
                <p className="text-gray-700">
                  <strong>Note:</strong> Blocking or deleting cookies may affect your ability to use certain features of our Services.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">5. Third-Party Opt-Out</h2>
              <p className="text-gray-600 mb-4">
                You can opt out of interest-based advertising using these resources:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                <li>Your Online Choices (EU): <a href="https://www.youronlinechoices.com" className="text-purple-600 hover:underline">youronlinechoices.com</a></li>
                <li>Network Advertising Initiative: <a href="https://www.networkadvertising.org/choices/" className="text-purple-600 hover:underline">networkadvertising.org/choices</a></li>
                <li>Digital Advertising Alliance: <a href="https://www.aboutads.info/choices/" className="text-purple-600 hover:underline">aboutads.info/choices</a></li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">6. Updates to This Policy</h2>
              <p className="text-gray-600 mb-6">
                We may update this Cookies Policy from time to time. When we make material changes, we will update the "Last Updated" date and notify you through our website or by email if you have an account with us.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">7. Contact Us</h2>
              <p className="text-gray-600 mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <p className="text-gray-700 mb-2"><strong>HeyMello AI</strong></p>
                <p className="text-gray-600 mb-2">Email: <a href="mailto:admin@heymello.ai" className="text-purple-600 hover:underline">admin@heymello.ai</a></p>
                <p className="text-gray-600">Website: <a href="https://heymello.ai" className="text-purple-600 hover:underline">heymello.ai</a></p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">8. UK Information Commissioner's Office</h2>
              <p className="text-gray-600 mb-4">
                If you are not satisfied with how we handle cookies, you can file a complaint with the UK's supervisory authority:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700 mb-2"><strong>Information Commissioner's Office</strong></p>
                <p className="text-gray-600 mb-2">Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
                <p className="text-gray-600 mb-2">Telephone: 0303 123 1113</p>
                <p className="text-gray-600 mb-2">Website: <a href="https://ico.org.uk" className="text-purple-600 hover:underline">ico.org.uk</a></p>
                <p className="text-gray-600">Email: <a href="mailto:casework@ico.org.uk" className="text-purple-600 hover:underline">casework@ico.org.uk</a></p>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
