'use client';

import React from 'react';
import { Phone, Clock, TrendingUp, DollarSign, Languages, BarChart } from 'lucide-react';
import { mockData } from '@/data/mockData';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  Phone: Phone,
  Clock: Clock,
  TrendingUp: TrendingUp,
  DollarSign: DollarSign,
  Languages: Languages,
  BarChart: BarChart
};

const Features = () => {
  const { features } = mockData;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight leading-tight">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to deploy and manage AI voice agents at scale
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-gray-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
