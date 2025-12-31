'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { mockData } from '@/data/mockData';

const FAQs = () => {
  const { faqs } = mockData;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about HeyMello AI voice agents
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
              >
                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`transition-all duration-200 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 bg-gray-50 text-gray-600 leading-relaxed border-t border-gray-200">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
