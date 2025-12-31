import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Globe, Shield, Zap, Heart, Users, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'About Us - Hey Mello',
  description: 'Learn about Hey Mello - Transforming customer conversations with intelligent voice AI. Our mission, technology, and commitment to exceptional AI voice agent services.',
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                About Hey Mello
              </h1>
              <p className="text-xl text-gray-600">
                Transforming Customer Conversations with Intelligent Voice AI
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in the UK, Hey Mello (Mello AI Ltd) was born from a simple observation: businesses struggle to provide consistent, high-quality customer service at scale. Traditional call centers face challenges with staffing, training, and managing fluctuating call volumes, while customers expect instant, personalized support around the clock.
              </p>
              <p className="text-lg text-gray-600">
                We set out to solve this problem by harnessing the power of artificial intelligence to create voice agents that sound natural, understand context, and handle complex conversations with the empathy and intelligence of your best human agents.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-xl text-gray-700 font-semibold mb-8">
                To empower businesses of all sizes to deliver exceptional customer experiences through intelligent, accessible, and scalable AI voice technology.
              </p>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="flex items-start space-x-4">
                  <Zap className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Provide round-the-clock customer support without burnout</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Scale Operations</h3>
                    <p className="text-gray-600">Scale operations without compromising quality</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Heart className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Reduce Costs</h3>
                    <p className="text-gray-600">Reduce costs while improving customer satisfaction</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Focus Talent</h3>
                    <p className="text-gray-600">Focus human talent on complex, high-value interactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">What Makes Us Different</h2>
              <div className="space-y-8">
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">🎯 Human-Like Conversations</h3>
                  <p className="text-gray-600">
                    Our AI voice agents don't sound robotic. They understand context, handle interruptions naturally, and respond with the warmth and professionalism your customers deserve. Ultra-fast response times ensure smooth, natural conversations.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">🌍 Global Reach</h3>
                  <p className="text-gray-600">
                    With support for over 40 languages, we help businesses serve customers worldwide. Our AI agents adapt to accents, dialects, and regional nuances, ensuring clear communication across borders.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">🔧 Easy Integration</h3>
                  <p className="text-gray-600">
                    Deploy in days, not months. Our no-code tools and flexible APIs integrate seamlessly with your existing systems—CRM, helpdesk, booking platforms, and more. No technical expertise required.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">💡 Intelligent & Adaptive</h3>
                  <p className="text-gray-600">
                    Our AI learns from every interaction, continuously improving to handle increasingly complex scenarios. From simple FAQs to multi-step problem-solving, our agents evolve with your business needs.
                  </p>
                </div>
                
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">🛡️ Enterprise-Grade Security</h3>
                  <p className="text-gray-600">
                    We take data protection seriously. Our platform is built with enterprise-grade security, GDPR compliance, and industry-specific certifications including HIPAA for healthcare applications.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">📊 Data-Driven Insights</h3>
                  <p className="text-gray-600">
                    Every conversation generates valuable insights. Our analytics dashboard helps you understand customer needs, identify trends, and optimize operations with real-time performance metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Innovation</h3>
                  <p className="text-purple-100">
                    We stay at the forefront of AI technology, constantly pushing boundaries to deliver the most advanced voice solutions.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                  <p className="text-purple-100">
                    Enterprise-grade AI shouldn't be exclusive. We make powerful voice technology accessible to businesses of all sizes.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Reliability</h3>
                  <p className="text-purple-100">
                    Your customers depend on you, and you can depend on us. We build robust, secure systems with 99.9% uptime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Transform Your Customer Conversations?</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're more than just a technology provider—we're your partner in transforming customer experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/request-demo">
                  <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
                <Link href="/contact-sales">
                  <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all">
                    Contact Sales
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  <strong>Email:</strong> <a href="mailto:admin@heymello.ai" className="text-purple-600 hover:underline">admin@heymello.ai</a>
                </p>
                <p className="text-lg text-gray-600">
                  <strong>Website:</strong> <a href="https://heymello.ai" className="text-purple-600 hover:underline">heymello.ai</a>
                </p>
                {/* TODO: Replace admin@heymello.ai with support@heymello.ai when support email is ready */}
                <p className="text-lg text-gray-600">
                  <strong>Support:</strong> <a href="mailto:admin@heymello.ai" className="text-purple-600 hover:underline">admin@heymello.ai</a>
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
