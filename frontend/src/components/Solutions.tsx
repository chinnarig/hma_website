'use client';

import React from 'react';
import Link from 'next/link';
import { mockData } from '@/data/mockData';

const Solutions: React.FC = () => {
  const { solutions } = mockData;

  return (
    <section id="solutions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 text-gray-900 tracking-tight leading-tight">
            Solutions for Every Business Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Automate your workflows and enhance customer experience across multiple use cases
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white border border-brand/20 rounded-2xl p-6 hover:shadow-2xl hover:shadow-brand/20 hover:border-brand/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Purple gradient background on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Purple accent line */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-brand to-purple-600 group-hover:h-full transition-all duration-300"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-brand transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {solution.description}
                </p>
                <Link href="/contact-sales" className="text-brand font-semibold hover:text-purple-700 transition-colors inline-flex items-center group/link">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
