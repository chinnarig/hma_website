'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { mockData } from '@/data/mockData';
import CalendarModal from './CalendarModal';

const Hero: React.FC = () => {
  const { hero } = mockData;
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <section className="relative min-h-[75vh] pt-20 pb-20 overflow-hidden bg-gray-900">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6">
            {/* Badge */}
            <div className="inline-block pt-4">
              <span className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium">
                {hero.badge}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
              AI Voice Agents That Understand Your Customers
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-gray-400 max-w-xl mt-5">
              {hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                size="lg"
                onClick={() => setShowCalendar(true)}
                className="bg-brand hover:bg-brand-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group px-8 py-6 text-base font-semibold"
              >
                {hero.ctaSecondary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Visual - Dashboard Mockup */}
          <div className="relative hidden lg:block pt-8">
            <div className="relative z-10">
              {/* Main Dashboard Card */}
              <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-700 mt-4">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-base font-bold text-white">AI Agents Performance</h3>
                  <p className="text-xs text-gray-400 mt-0.5">Real-time operational metrics and insights.</p>
                </div>
                
                {/* Chart Visualization */}
                <div className="space-y-6">
                  {/* Success Rate */}
                  <div className="bg-gray-900 rounded-xl p-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-300">Success Rate</span>
                      <span className="text-3xl font-bold text-white">99.9%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden shadow-inner border border-gray-700">
                      <div className="h-full w-[99%] bg-brand rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-4 bg-gray-900 rounded-xl border border-gray-700">
                      <div className="text-2xl font-bold text-white">3K</div>
                      <div className="text-xs font-medium text-gray-400 mt-1">Calls Today</div>
                    </div>
                    <div className="text-center p-4 bg-gray-900 rounded-xl border border-gray-700">
                      <div className="text-2xl font-bold text-white">4.5min</div>
                      <div className="text-xs font-medium text-gray-400 mt-1">Avg Duration</div>
                    </div>
                    <div className="text-center p-4 bg-gray-900 rounded-xl border border-gray-700">
                      <div className="text-2xl font-bold text-white">98%</div>
                      <div className="text-xs font-medium text-gray-400 mt-1">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Agent Cards - Multiple Agents - Repositioned */}
              <div className="absolute -top-8 -right-4 bg-gray-800 rounded-xl shadow-lg p-3 w-44 animate-float z-20 border border-gray-700">
                <div className="flex items-center space-x-2 mb-2 pb-2 border-b border-gray-700">
                  <div className="w-8 h-8 bg-brand rounded-full flex-shrink-0"></div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-400">Agent</div>
                    <div className="text-sm font-semibold truncate text-white">Sarah</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex-shrink-0"></div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-400">Agent</div>
                    <div className="text-sm font-semibold truncate text-white">Johnson</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-16 -left-4 bg-gray-800 rounded-xl shadow-lg p-4 w-48 animate-float animation-delay-2000 z-20 border border-gray-700">
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-400">Live Call Status</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-white">In Progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CalendarModal isOpen={showCalendar} onClose={() => setShowCalendar(false)} />
    </>
  );
};

export default Hero;
