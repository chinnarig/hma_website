'use client';

import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#211F23] text-gray-300 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logos/logo1.svg"
                alt="Hey Mello Logo"
                width={40}
                height={40}
                className="w-10 h-10 brightness-150 drop-shadow-[0_0_8px_rgba(140,82,255,0.6)]"
              />
              <div className="text-2xl font-semibold text-white tracking-tight">
                <span className="font-semibold">Hey Mello</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-4">
            Intelligent voice agents that deliver natural conversations and exceptional customer experiences 24/7.
            </p>
            <div className="flex space-x-4">
                {/* <a href="#" className="hover:text-brand transition-colors">
                  <Twitter className="w-5 h-5" />
                </a> */}
                <a href="https://www.linkedin.com/company/heymello-ai/about/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                {/* <a href="#" className="hover:text-purple-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  <Mail className="w-5 h-5" />
                </a> */}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#features" className="hover:text-brand transition-colors">Features</Link></li>
              <li><Link href="/solutions" className="hover:text-brand transition-colors">Solutions</Link></li>
              <li><Link href="/integrations" className="hover:text-brand transition-colors">Integrations</Link></li>
              <li><Link href="/pricing" className="hover:text-brand transition-colors">Pricing</Link></li>
              {/* <li><a href="#" className="hover:text-purple-400 transition-colors">API</a></li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-brand transition-colors">About Us</Link></li>
              {/* <li><a href="#" className="hover:text-brand transition-colors">Careers</a></li> */}
              {/* <li><a href="#" className="hover:text-brand transition-colors">Blog</a></li> */}
              {/* <li><a href="#" className="hover:text-brand transition-colors">Press</a></li> */}
              <li><Link href="/contact-sales" className="hover:text-brand transition-colors">Contact</Link></li>
              <li><Link href="/help-center" className="hover:text-brand transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
               <li><Link href="/privacy" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
               <li><Link href="/terms" className="hover:text-brand transition-colors">Terms of Service</Link></li>
               <li><Link href="/cookies" className="hover:text-brand transition-colors">Cookie Policy</Link></li>
              {/* <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Security</a></li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            © 2025 Mello AI Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            {/* <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-purple-400 transition-colors">Cookie Policy</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
