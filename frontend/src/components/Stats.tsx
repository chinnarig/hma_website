'use client';

import React from 'react';
import { mockData } from '@/data/mockData';

const Stats = () => {
  const { stats } = mockData;

  return (
    <section className="py-12 bg-[#0B0E14] border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl md:text-4xl font-semibold text-white mb-2 group-hover:text-brand transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-300 group-hover:text-gray-200 transition-colors font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
