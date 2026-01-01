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
    <section className="py-16 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 text-white tracking-tight leading-tight">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to deploy and manage AI voice agents at scale
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div 
                key={index}
                className="bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-brand/20 transition-all duration-300 group hover:-translate-y-2 border border-gray-700 hover:border-brand/30"
              >
                <div className="w-14 h-14 bg-brand/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-brand/30 group-hover:bg-brand/30 group-hover:border-brand/50">
                  <Icon className="w-7 h-7 text-brand" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-brand transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
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
