'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { mockData } from '@/data/mockData';
import CalendarModal from './CalendarModal';

const Hero: React.FC = () => {
  const { hero } = mockData;
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <section className="relative min-h-[65vh] pt-16 pb-12 overflow-hidden bg-[#0B0E14]">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-brand/20 text-brand border border-brand/30 rounded-full text-sm font-medium">
                {hero.badge}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-white tracking-tight mb-4">
              AI Voice Agents That Understand Your Customers
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base text-gray-300 max-w-xl mb-10 font-medium">
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
                {/* <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /> */}
              </Button>
            </div>
          </div>

          {/* Right Visual - AI Voice Agents Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 w-full h-full">
              <div className="relative w-full aspect-[4/3] max-w-2xl mx-auto rounded-2xl overflow-hidden border border-gray-700/50 shadow-xl shadow-brand/20">
                <Image
                  src="/heroimage_1.jpeg"
                  alt="AI Voice Agent - Customer Support"
                  fill
                  className="object-cover"
                  priority
                />
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
