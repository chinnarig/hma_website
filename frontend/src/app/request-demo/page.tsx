'use client';

import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Building, Mail, Phone, User, Calendar, Clock, CheckCircle2, CalendarCheck } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  message: string;
}

// Extend Window interface for Cal
declare global {
  interface Window {
    Cal?: any;
  }
}

export default function RequestDemo() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [calendarBooked, setCalendarBooked] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);

  const openCalendar = () => {
    setShowCalendarModal(true);
  };

  const closeCalendar = () => {
    setShowCalendarModal(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/forms/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          jobTitle: '',
          message: ''
        });
        setCalendarBooked(false);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.errors?.join(', ') || data.error || 'Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
                Experience AI Voice Agents in Action
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Schedule a personalized demo and see how our AI voice agents can transform your business operations.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Live Demo</h3>
                  <p className="text-sm text-gray-600">See our AI agents in real-time action</p>
                </div>
                
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Personalized</h3>
                  <p className="text-sm text-gray-600">Tailored to your industry needs</p>
                </div>
                
                <div className="text-center p-6 bg-pink-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">30 Minutes</h3>
                  <p className="text-sm text-gray-600">Quick and informative session</p>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-3xl shadow-2xl border border-purple-100 p-8 md:p-12 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-blue-50/30 pointer-events-none"></div>
                
                <div className="relative">
                  <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Request a Demo</h2>
                  <p className="text-gray-600 mb-8">Fill out the form below and we'll schedule a personalized demo session</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                          First Name 
                          <span className="ml-1 text-purple-600 font-bold">*</span>
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                          placeholder=""
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                          Last Name 
                          <span className="ml-1 text-purple-600 font-bold">*</span>
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                          placeholder=""
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                        Work Email 
                        <span className="ml-1 text-purple-600 font-bold">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 w-5 h-5 transition-colors duration-300" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full h-12 pl-12 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                          placeholder=""
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="group">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                        Phone Number 
                        <span className="ml-1 text-purple-600 font-bold">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 w-5 h-5 transition-colors duration-300" />
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full h-12 pl-12 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                          placeholder=""
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                        Company Name 
                        <span className="ml-1 text-purple-600 font-bold">*</span>
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 w-5 h-5 transition-colors duration-300" />
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full h-12 pl-12 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                          placeholder=""
                        />
                      </div>
                    </div>

                    {/* Job Title */}
                    <div className="group">
                      <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-800 mb-3">
                        Job Title
                      </label>
                      <Input
                        id="jobTitle"
                        name="jobTitle"
                        type="text"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                        placeholder=""
                      />
                    </div>

                    {/* Calendar Booking */}
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                        <CalendarCheck className="w-5 h-5 mr-2 text-purple-600" />
                        Schedule Your Demo
                        <span className="ml-1 text-purple-600 font-bold">*</span>
                      </label>
                      
                      {!calendarBooked ? (
                        <button
                          type="button"
                          onClick={openCalendar}
                          className="w-full p-6 border-2 border-dashed border-purple-300 rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 transition-all duration-300 group/cal"
                        >
                          <div className="flex flex-col items-center space-y-3">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center group-hover/cal:scale-110 transition-transform duration-300">
                              <CalendarCheck className="w-8 h-8 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                                Select Date & Time
                              </h3>
                              <p className="text-sm text-gray-600">
                                Choose your preferred demo slot
                              </p>
                            </div>
                            <div className="flex items-center space-x-2 text-purple-600 font-medium">
                              <Clock className="w-4 h-4" />
                              <span className="text-sm">30 minute session</span>
                            </div>
                          </div>
                        </button>
                      ) : (
                        <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                              <CheckCircle2 className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-green-800 mb-1">
                                Demo Scheduled!
                              </h3>
                              <p className="text-sm text-green-700 mb-3">
                                Your meeting has been scheduled. You'll receive a confirmation email.
                              </p>
                              <button
                                type="button"
                                onClick={() => {
                                  setCalendarBooked(false);
                                  openCalendar();
                                }}
                                className="text-sm text-purple-600 hover:text-purple-700 font-medium underline flex items-center space-x-1"
                              >
                                <Calendar className="w-4 h-4" />
                                <span>Change appointment</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <p className="text-xs text-gray-500 mt-2">
                        {calendarBooked 
                          ? 'Complete the form below to finalize your demo request.'
                          : 'Click above to view available time slots and book your demo session.'}
                      </p>
                    </div>

                    {/* Message */}
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-3">
                        What would you like to see in the demo?
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300 resize-none"
                        placeholder="Tell us about your specific use case or industry..."
                      />
                    </div>

                    {/* Success Message */}
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                        <p className="text-green-800 font-semibold">✓ Demo request submitted successfully!</p>
                        <p className="text-green-700 text-sm mt-1">We look forward to meeting you at your scheduled time! You'll receive a confirmation email shortly.</p>
                      </div>
                    )}

                    {/* Error Message */}
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                        <p className="text-red-800 font-semibold">✗ Error submitting form</p>
                        <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Complete Demo Request'}
                        {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                      </Button>
                    </div>

                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">What to Expect in Your Demo</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Live Agent Demonstration</h3>
                      <p className="text-sm text-gray-600">
                        Interact with our AI voice agents and experience natural conversations in real-time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Custom Use Cases</h3>
                      <p className="text-sm text-gray-600">
                        See how our AI agents can be customized for your specific industry and needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Integration Overview</h3>
                      <p className="text-sm text-gray-600">
                        Learn how easily our AI agents integrate with your existing systems and workflows.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-600 font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Q&A Session</h3>
                      <p className="text-sm text-gray-600">
                        Get all your questions answered by our AI voice agent specialists.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Calendar Modal Overlay */}
      {showCalendarModal && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeCalendar}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-purple-600 to-blue-600">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <CalendarCheck className="w-6 h-6 mr-2" />
                Schedule Your Demo
              </h3>
              <button
                onClick={closeCalendar}
                className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
                aria-label="Close calendar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Calendar iFrame */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://app.cal.eu/heymello/hey-mello-demo"
                className="w-full h-full border-0"
                title="Schedule Demo"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
