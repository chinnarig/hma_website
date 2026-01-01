'use client';

import React from 'react';
import { UserPlus, Headphones, LayoutDashboard, Phone, Rocket } from 'lucide-react';

const HowItWorks = () => {
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* <span className="text-sm font-semibold text-brand uppercase tracking-wide mb-3 block">
            CLIENT ONBOARDING
          </span> */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            From signup to going live, we're with you every step of the way. See how easy it is to get started with HeyMello AI.
          </p>
        </div>

        {/* Steps in One Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:border-brand/30 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-brand to-brand-600 bg-clip-text text-transparent opacity-30 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-brand transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

