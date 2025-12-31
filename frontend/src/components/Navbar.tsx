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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logos/logo1.svg"
              alt="Hey Mello Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Hey Mello
            </div>
          </Link>

          {/* Desktop Navigation - Moved to Right */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link href="/#solutions" className="text-gray-700 hover:text-gray-900 transition-colors">
              Solutions
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-gray-900 transition-colors">
              How It Works
            </Link>
            <Link href="/#integrations" className="text-gray-700 hover:text-gray-900 transition-colors">
              Integrations
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900 transition-colors">
              Pricing
            </Link>
            <Link href="/help-center" className="text-gray-700 hover:text-gray-900 transition-colors">
              Help Center
            </Link>
            
            {/* CTA Button */}
            <Button 
              onClick={() => setShowCalendar(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            >
              Request a Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-gray-900"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link href="/" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/#solutions" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Solutions
            </Link>
            <Link href="/how-it-works" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              How It Works
            </Link>
            <Link href="/#integrations" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Integrations
            </Link>
            <Link href="/pricing" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
            <Link href="/help-center" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Help Center
            </Link>
            <Button 
              onClick={() => {
                setIsOpen(false);
                setShowCalendar(true);
              }}
              className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
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
