'use client';

import React from 'react';
import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
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
                className="w-10 h-10"
              />
              <div className="text-2xl font-bold text-white tracking-tight">
                <span className="font-extrabold">Hey Mello</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Enterprise-ready AI voice agents for automated phone calls and 24/7 customer support.
            </p>
            <div className="flex space-x-4">
                {/* <a href="#" className="hover:text-purple-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a> */}
                <a href="https://www.linkedin.com/company/heymello-ai/about/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
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
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              {/* <li><a href="#" className="hover:text-purple-400 transition-colors">API</a></li> */}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              {/* <li><a href="#" className="hover:text-white transition-colors">Careers</a></li> */}
              {/* <li><a href="#" className="hover:text-white transition-colors">Blog</a></li> */}
              {/* <li><a href="#" className="hover:text-white transition-colors">Press</a></li> */}
              <li><Link href="/contact-sales" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/help-center" className="hover:text-white transition-colors">Help Center</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
               <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
               <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
               <li><Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              {/* <li><a href="#" className="hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Status</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Security</a></li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
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
