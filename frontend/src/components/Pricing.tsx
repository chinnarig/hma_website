'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Check } from 'lucide-react';
import { mockData } from '@/data/mockData';

const Pricing = () => {
  const { pricing } = mockData;

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-lg border bg-white hover:shadow-2xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-purple-500 shadow-xl scale-105' 
                  : 'border-gray-200 hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Card Header */}
              <div className="text-center pb-8 pt-8 px-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-600">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  {plan.period !== 'contact sales' && (
                    <span className="text-gray-500 ml-2">/{plan.period.replace('per ', '')}</span>
                  )}
                  {plan.period === 'contact sales' && (
                    <span className="text-gray-500 ml-2 block text-sm mt-2">{plan.period}</span>
                  )}
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Card Footer */}
              <div className="p-6 pt-0">
                <Link href="/contact-sales" className="w-full block">
                  <Button 
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                        : 'border-2 border-gray-300 hover:border-purple-600 hover:text-purple-600 bg-white text-gray-700'
                    }`}
                    size="lg"
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
