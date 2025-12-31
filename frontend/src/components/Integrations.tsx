'use client';

import React from 'react';
import Link from 'next/link';
import { mockData } from '@/data/mockData';

const Integrations = () => {
  const { integrations } = mockData;

  return (
    <section id="integrations" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight leading-tight">
            Seamless Integrations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Connect with your favorite tools and platforms effortlessly. Our AI voice agents integrate seamlessly with your existing workflow.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 hover:border-gray-300 relative overflow-hidden">
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                    {integration.name}
                  </h3>
                  <div className="w-12 h-1 bg-brand mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <p className="text-lg text-gray-700 mb-4">
              Need a custom integration for your specific workflow?
            </p>
            <Link 
              href="/contact-sales" 
              className="inline-flex items-center px-6 py-3 bg-brand text-white font-semibold rounded-xl hover:bg-brand-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
