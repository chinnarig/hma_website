'use client';

import React from 'react';
import Link from 'next/link';
import { mockData } from '@/data/mockData';

const Solutions: React.FC = () => {
  const { solutions } = mockData;

  return (
    <section id="solutions" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Solutions for Every 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Business Need</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Automate your workflows and enhance customer experience across multiple use cases
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <Link href="/contact-sales" className="text-purple-600 font-semibold hover:underline inline-flex items-center group">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
