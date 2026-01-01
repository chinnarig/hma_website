'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CalendarModal from '@/components/CalendarModal';
import Link from 'next/link';
import { UserPlus, Headphones, LayoutDashboard, Phone, Rocket, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Sign Up & Get Started",
      description: "Create your account and our team reaches out to understand your needs",
                      color: "from-brand to-brand-600",
    },
    {
      number: "02",
      icon: Headphones,
      title: "HeyMello Team Assists Setup",
      description: "Our experts help configure your voice agents, integrate tools, and customize for your business",
                      color: "from-brand-600 to-brand",
    },
    {
      number: "03",
      icon: LayoutDashboard,
      title: "Access Your Dashboard",
      description: "Get your personalized dashboard link to manage agents, view metrics, and track billing",
                      color: "from-brand to-brand-600",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Go Live with Agents",
      description: "Your AI voice agents are deployed and ready to handle calls 24/7",
                      color: "from-brand-600 to-brand",
    },
    {
      number: "05",
      icon: Phone,
      title: "End-Users Call In",
      description: "Your customers interact with intelligent voice agents by simply calling your number",
                      color: "from-brand to-brand-600",
    },
  ];

  return (
    <>
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16 pb-12">
        {/* Hero Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-sm font-semibold text-brand uppercase tracking-wide mb-3 block">
                CLIENT ONBOARDING
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-gray-900">
                How It Works
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
                From signup to going live, we're with you every step of the way. See how easy it is to get started with HeyMello AI.
              </p>
            </div>
          </div>
        </section>

        {/* Onboarding Flow */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Connection Line */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand via-brand-600 to-brand opacity-20"></div>
                
                {/* Steps */}
                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`relative flex items-center gap-8 ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      }`}
                    >
                      {/* Step Content Card */}
                      <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:border-brand/30 transition-all duration-300">
                        <div className="flex items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className="text-5xl font-bold bg-gradient-to-r from-brand to-brand-600 bg-clip-text text-transparent opacity-30">
                              {step.number}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center mb-4`}>
                              <step.icon className="h-7 w-7 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                            <p className="text-gray-600 text-sm font-medium">{step.description}</p>
                          </div>
                        </div>
                      </div>

                      {/* Center Dot */}
                      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.color} shadow-lg border-4 border-white`}></div>
                      </div>

                      {/* Spacer for alternating layout */}
                      <div className="hidden lg:block flex-1"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-gray-900">
                Your Control Center
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 font-medium">
                Once onboarded, your dashboard gives you complete visibility and control
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
                  <LayoutDashboard className="h-10 w-10 text-brand mb-4 mx-auto" />
                  <h3 className="font-semibold mb-2 text-sm text-gray-900">Agent Management</h3>
                  <p className="text-xs text-gray-600 font-medium">View and manage all your AI voice agents in one place</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
                  <svg className="h-10 w-10 text-brand mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <h3 className="font-semibold mb-2 text-sm text-gray-900">Real-Time Metrics</h3>
                  <p className="text-xs text-gray-600 font-medium">Track performance, call volume, and customer satisfaction</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
                  <svg className="h-10 w-10 text-brand mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <h3 className="font-semibold mb-2 text-sm text-gray-900">Billing Overview</h3>
                  <p className="text-xs text-gray-600 font-medium">Transparent usage tracking and billing information</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900">
                Ready to Get Started?
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 font-medium">
                Join hundreds of businesses already using HeyMello AI to transform their customer interactions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-sales">
                  <button className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold bg-brand hover:bg-brand-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all">
                    Contact Sales
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </Link>
                <button 
                  onClick={() => setShowCalendar(true)}
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2 border-brand text-brand rounded-lg hover:bg-brand hover:text-white transition-all"
                >
                  Request a Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>

    <CalendarModal isOpen={showCalendar} onClose={() => setShowCalendar(false)} />
    </>
  );
};

export default HowItWorks;
