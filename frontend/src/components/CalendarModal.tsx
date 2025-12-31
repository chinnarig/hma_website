'use client';

import { useState } from 'react';
import { CalendarCheck } from 'lucide-react';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b bg-brand">
          <h3 className="text-xl font-semibold text-white flex items-center">
            <CalendarCheck className="w-6 h-6 mr-2" />
            Schedule Your Demo
          </h3>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
            aria-label="Close calendar"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Calendar iFrame with Loading State */}
        <div className="flex-1 overflow-hidden relative">
          {/* Loading Spinner */}
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
              <div className="relative">
                {/* Spinning Circle */}
                <div className="w-20 h-20 border-4 border-gray-200 border-t-brand rounded-full animate-spin"></div>
                {/* Stylized Z Letter in Center with Effects */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="text-4xl font-bold text-brand animate-pulse">
                      Z
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-gray-600 font-medium">Loading calendar...</p>
              <div className="mt-2 flex space-x-1">
                <div className="w-2 h-2 bg-brand rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-brand rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-brand rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          )}
          
          <iframe
            src="https://app.cal.eu/heymello/hey-mello-demo"
            className="w-full h-full border-0"
            title="Schedule Demo"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
}
