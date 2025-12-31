'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import CalendarModal from './CalendarModal';

const CTA = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses using AI voice agents to scale their operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setShowCalendar(true)}
              className="bg-brand hover:bg-brand-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Request a Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/contact-sales">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-gray-700 text-white hover:bg-gray-800 hover:border-gray-600 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CalendarModal isOpen={showCalendar} onClose={() => setShowCalendar(false)} />
    </>
  );
};

export default CTA;
