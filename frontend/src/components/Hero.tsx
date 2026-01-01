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
      <section className="relative min-h-[65vh] pt-16 pb-12 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-left space-y-4">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-brand/20 text-brand border border-brand/30 rounded-full text-sm font-medium">
                {hero.badge}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight">
              AI Voice Agents That Understand Your Customers
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-gray-400 max-w-xl mt-3 font-medium">
              {hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => setShowCalendar(true)}
                className="bg-brand hover:bg-brand-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group px-6 py-3 text-base font-semibold"
              >
                {hero.ctaSecondary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Visual - AI Voice Agents Image Placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 w-full h-full">
              {/* Placeholder for AI Voice Agents Image */}
              <div className="relative w-full aspect-square max-w-lg mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-gray-700 shadow-xl shadow-brand/10">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-40 h-40 mx-auto mb-6 bg-brand/10 rounded-full flex items-center justify-center border border-brand/20">
                      <svg className="w-20 h-20 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">AI Voice Agents</h3>
                    <p className="text-gray-400 text-sm mb-4">Intelligent Solutions for Your Business</p>
                    <p className="text-gray-500 text-xs">Add your image: /public/images/ai-voice-agents.jpg</p>
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
