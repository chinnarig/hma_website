'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import CalendarModal from './CalendarModal';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0E14] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logos/website_logo_new.svg"
              alt="Hey Mello Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="text-2xl font-semibold text-white tracking-tight">
              <span className="font-semibold">Hey Mello</span>
            </div>
          </Link>

          {/* Desktop Navigation - Moved to Right */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-200 hover:text-white transition-colors font-medium">
              Home
            </Link>
            <Link href="/#solutions" className="text-gray-200 hover:text-white transition-colors font-medium">
              Solutions
            </Link>
            <Link href="/#how-it-works" className="text-gray-200 hover:text-white transition-colors font-medium">
              How It Works
            </Link>
            <Link href="/#integrations" className="text-gray-200 hover:text-white transition-colors font-medium">
              Integrations
            </Link>
            <Link href="/pricing" className="text-gray-200 hover:text-white transition-colors font-medium">
              Pricing
            </Link>
            <Link href="/help-center" className="text-gray-200 hover:text-white transition-colors font-medium">
              Help Center
            </Link>
            
            {/* CTA Button */}
            <Button 
              onClick={() => setShowCalendar(true)}
              className="bg-brand hover:bg-brand-600 text-white"
            >
              Request a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-200 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0E14] border-t border-gray-800/50">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-200 hover:text-white font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/#solutions" className="block py-2 text-gray-200 hover:text-white font-medium" onClick={() => setIsOpen(false)}>
              Solutions
            </Link>
            <Link href="/#how-it-works" className="block py-2 text-gray-200 hover:text-white font-medium" onClick={() => setIsOpen(false)}>
              How It Works
            </Link>
            <Link href="/#integrations" className="block py-2 text-gray-200 hover:text-white font-medium" onClick={() => setIsOpen(false)}>
              Integrations
            </Link>
            <Link href="/pricing" className="block py-2 text-gray-200 hover:text-white font-medium" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link href="/help-center" className="block py-2 text-gray-200 hover:text-white font-medium" onClick={() => setIsOpen(false)}>
              Help Center
            </Link>
            <Button 
              onClick={() => {
                setIsOpen(false);
                setShowCalendar(true);
              }}
              className="w-full mt-4 bg-brand hover:bg-brand-600 text-white"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      )}
    </nav>

    <CalendarModal isOpen={showCalendar} onClose={() => setShowCalendar(false)} />
    </>
  );
};

export default Navbar;
