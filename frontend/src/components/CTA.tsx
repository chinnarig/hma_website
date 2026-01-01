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
      <section className="py-16 bg-brand relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-3 tracking-tight leading-tight">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses using AI voice agents to scale their operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setShowCalendar(true)}
              className="bg-white hover:bg-gray-100 text-brand shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Request a Demo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link href="/contact-sales">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:border-white shadow-xl hover:shadow-2xl transition-all duration-300"
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
