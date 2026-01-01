'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Building, Mail, Phone, User, Check, Shield, Clock, TrendingUp, Zap, HeadphonesIcon } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  callVolume: string;
  message: string;
}

export default function PricingPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    callVolume: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
      const response = await fetch('/api/forms/pricing-inquiry', {
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
          callVolume: '',
          message: ''
        });
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

  const includedFeatures = [
    {
      icon: HeadphonesIcon,
      title: '24/7/365 Support',
      description: 'Support system including a web ticket portal and emergency support phone line'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Highest standards of data security with compliance certificates and regular audits'
    },
    {
      icon: Clock,
      title: '99.9% Uptime SLA',
      description: 'Guaranteed uptime for your voice assistant services and phone lines'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvements',
      description: 'Proactive performance monitoring and optimization for best results'
    },
    {
      icon: Zap,
      title: 'Latest Features',
      description: 'Automatic upgrades to the latest system features for best-in-class performance'
    },
    {
      icon: Check,
      title: 'Cutting-Edge Tech',
      description: 'Ever-evolving tech stack built with the latest AI technology'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
                Simple pricing that scales with your needs
              </h1>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-medium">
                Scale your AI voice assistant with confidence across your organization and use cases with a transparent pricing structure.
              </p>
              <p className="text-sm md:text-base text-gray-600 mt-4 max-w-2xl mx-auto font-medium">
                Ongoing use of the voice assistant is priced on a per-minute basis, which includes proactive performance improvements, maintenance and 24/7 support.
              </p>
            </div>
          </div>
        </section>

        {/* Included Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
                Included in all plans
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {includedFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                      <p className="text-gray-600 text-sm font-medium">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                  Ready to hear it for yourself?
                </h2>
                <p className="text-base md:text-lg text-gray-600 font-medium">
                  Get a personalized demo to learn how HeyMello AI can help you drive measurable business value.
                </p>
              </div>

              {/* Form */}
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-8 md:p-12 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-brand/5 pointer-events-none"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Request Pricing Information</h3>
                  <p className="text-gray-600 mb-8 text-sm font-medium">Get personalized pricing for your business needs</p>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                        First Name 
                        <span className="ml-1 text-brand font-bold">*</span>
                      </label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-brand focus:ring-4 focus:ring-brand/20 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                        placeholder=""
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                        Last Name 
                        <span className="ml-1 text-brand font-bold">*</span>
                      </label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-brand focus:ring-4 focus:ring-brand/20 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
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

                  {/* Email */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      Work Email 
                      <span className="ml-1 text-purple-600 font-bold">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-brand w-5 h-5 transition-colors duration-300" />
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

                  {/* Job Title */}
                  <div className="group">
                    <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      Job Title 
                      <span className="ml-1 text-purple-600 font-bold">*</span>
                    </label>
                    <Input
                      id="jobTitle"
                      name="jobTitle"
                      type="text"
                      required
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full h-12 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300"
                      placeholder=""
                    />
                  </div>

                  {/* Phone */}
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      Phone Number 
                      <span className="ml-1 text-purple-600 font-bold">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-brand w-5 h-5 transition-colors duration-300" />
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

                  {/* Call Volume */}
                  <div className="group">
                    <label htmlFor="callVolume" className="block text-sm font-semibold text-gray-800 mb-3 flex items-center">
                      Annual Call Volume 
                      <span className="ml-1 text-purple-600 font-bold">*</span>
                    </label>
                    <select
                      id="callVolume"
                      name="callVolume"
                      required
                      value={formData.callVolume}
                      onChange={handleChange}
                      className="w-full h-12 px-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300 text-gray-900"
                    >
                      <option value="">Select a range</option>
                      <option value="less-10k">Less than 10,000</option>
                      <option value="10k-50k">10,000 - 50,000</option>
                      <option value="50k-250k">50,000 - 250,000</option>
                      <option value="250k-500k">250,000 - 500,000</option>
                      <option value="500k-1m">500,000 - 1,000,000</option>
                      <option value="more-1m">More than 1,000,000</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-3">
                      Tell us about your project
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-200 rounded-xl focus:border-brand focus:ring-4 focus:ring-brand/20 transition-all duration-300 bg-gray-50 focus:bg-white hover:border-gray-300 resize-none"
                      placeholder=""
                    />
                  </div>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                      <p className="text-green-800 font-semibold">✓ Pricing inquiry submitted successfully!</p>
                      <p className="text-green-700 text-sm mt-1">We'll send you custom pricing details within 24 hours.</p>
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
                      className="w-full h-14 bg-brand hover:bg-brand-600 text-white font-semibold text-base rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Request Pricing Info'}
                      {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500 text-center">
                    Your personal data will be processed in accordance with our privacy policy.
                  </p>
                </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Contact Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-semibold text-center mb-8">Other Ways to Reach Us</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl shadow-sm">
                  <Phone className="w-10 h-10 text-brand mb-4 mx-auto" />
                  <h3 className="font-semibold mb-2 text-sm">Call Us</h3>
                  <p className="text-xs text-gray-600 mb-3 font-medium">Mon-Fri, 9am-6pm EST</p>
                  <a href="tel:+44-1695-665111" className="text-brand font-semibold hover:underline text-sm">
                    +44 1695 665111
                  </a>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-sm">
                  <Mail className="w-10 h-10 text-brand mb-4 mx-auto" />
                  <h3 className="font-semibold mb-2 text-sm">Email Us</h3>
                  <p className="text-xs text-gray-600 mb-3 font-medium">Response within 24 hours</p>
                  {/* TODO: Replace admin@heymello.ai with sales@heymello.ai when sales email is ready */}
                  <a href="mailto:admin@heymello.ai" className="text-brand font-semibold hover:underline text-sm">
                    admin@heymello.ai
                  </a>
                </div>
                
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl shadow-sm">
                  <Phone className="w-10 h-10 text-purple-600 mb-4 mx-auto" />
                  <h3 className="font-semibold mb-2">Talk to Our Agent</h3>
                  <p className="text-sm text-gray-600 mb-3">Experience our AI voice agent directly</p>
                  <a href="tel:+44-1695-665111" className="text-purple-600 font-semibold hover:underline">
                    +44 1695 665111
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
