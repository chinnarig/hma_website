'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQs from '@/components/FAQs';
import { Phone, Mail } from 'lucide-react';

export default function HelpCenter() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section with Search */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                How can we help you?
              </h1>
              <p className="text-base md:text-lg text-gray-600 mb-6 font-medium">
                Find answers to common questions or <span className="text-brand font-semibold">talk to our agent</span> for personalized assistance
              </p>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <div className="bg-white">
          <FAQs />
        </div>

        {/* Need Help Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Need help?
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 font-medium">
                Our support team is here to assist you 24/7
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* <div className="bg-white rounded-xl p-6 shadow-sm">
                  <MessageCircle className="w-10 h-10 text-purple-600 mb-4 mx-auto" />
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-sm text-gray-600 mb-4">Chat with our support team in real-time</p>
                  <button className="text-purple-600 font-semibold hover:underline">Start Chat</button>
                </div> */}
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Mail className="w-10 h-10 text-brand mb-4 mx-auto" />
                  <h3 className="font-semibold mb-2 text-sm">Email Support</h3>
                  <p className="text-xs text-gray-600 mb-4 font-medium">Send us an email and we'll respond within 24 hours</p>
                  {/* TODO: Replace admin@heymello.ai with support@heymello.ai when support email is ready */}
                  <a href="mailto:admin@heymello.ai" className="text-brand font-semibold hover:underline text-sm">Send Email</a>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Phone className="w-10 h-10 text-brand mb-4 mx-auto" />
                  <h3 className="font-semibold mb-2 text-sm">Talk to Our Agent</h3>
                  <p className="text-xs text-gray-600 mb-4 font-medium">Experience our AI voice agent directly</p>
                  <a href="tel:+44-1695-665111" className="text-brand font-semibold hover:underline text-sm">
                    +44 1695 665111</a>
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
