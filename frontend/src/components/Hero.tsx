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
      <section className="relative min-h-[70vh] pt-14 pb-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"></div>
      
      {/* Animated Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="text-left space-y-4">
            {/* Badge */}
            <div className="inline-block pt-4">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                {hero.badge}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Voice Agents
              </span>
              {' '}
              <span className="text-gray-900">
                That Understand Your
              </span>
              {' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Customers
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-gray-600 max-w-xl">
              {hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <Button 
                size="sm"
                onClick={() => setShowCalendar(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {hero.ctaSecondary}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Visual - Dashboard Mockup */}
          <div className="relative hidden lg:block pt-8">
            <div className="relative z-10">
              {/* Main Dashboard Card */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-100 mt-4">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-base font-bold text-gray-900">AI Agents Performance</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Real-time operational metrics and insights.</p>
                </div>
                
                {/* Chart Visualization */}
                <div className="space-y-6">
                  {/* Success Rate */}
                  <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-700">Success Rate</span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">99.9%</span>
                    </div>
                    <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
                      <div className="h-full w-[99%] bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-100">
                      <div className="text-2xl font-bold text-purple-600">3K</div>
                      <div className="text-xs font-medium text-purple-700 mt-1">Calls Today</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-100">
                      <div className="text-2xl font-bold text-blue-600">4.5min</div>
                      <div className="text-xs font-medium text-blue-700 mt-1">Avg Duration</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl border border-pink-100">
                      <div className="text-2xl font-bold text-pink-600">98%</div>
                      <div className="text-xs font-medium text-pink-700 mt-1">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Agent Cards - Multiple Agents - Repositioned */}
              <div className="absolute -top-8 -right-4 bg-white rounded-xl shadow-lg p-3 w-44 animate-float z-20 border border-gray-100">
                <div className="flex items-center space-x-2 mb-2 pb-2 border-b border-gray-100">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex-shrink-0"></div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500">Agent</div>
                    <div className="text-sm font-semibold truncate">Sarah</div>
                  </div>
                </div>
                {/* <div className="flex items-center space-x-2 mb-2 pb-2 border-b border-gray-100">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex-shrink-0"></div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500">Agent</div>
                    <div className="text-sm font-semibold truncate">Amy</div>
                  </div>
                </div> */}
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex-shrink-0"></div>
                  <div className="min-w-0">
                    <div className="text-xs text-gray-500">Agent</div>
                    <div className="text-sm font-semibold truncate">Johnson</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-16 -left-4 bg-white rounded-xl shadow-lg p-4 w-48 animate-float animation-delay-2000 z-20 border border-gray-100">
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-500">Live Call Status</div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900">In Progress</span>
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
