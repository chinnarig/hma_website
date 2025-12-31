'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, Shield, Users, Zap, Calendar, Database, MessageSquare, Server, LineChart, Rocket, FileCheck, AlertCircle, Download } from 'lucide-react';
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function OnboardingPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isExporting, setIsExporting] = useState(false);

  const handleExportPDF = async () => {
    if (!contentRef.current) return;
    
    setIsExporting(true);
    
    try {
      // Scroll to top to ensure everything is in view
      window.scrollTo(0, 0);
      
      // Wait a bit for any animations to complete
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Get the content element
      const content = contentRef.current;
      
      // Hide footer and CTA section during export
      const footer = document.querySelector('footer');
      const ctaSection = content.querySelector('.cta-section');
      const originalFooterDisplay = footer ? (footer as HTMLElement).style.display : '';
      const originalCtaDisplay = ctaSection ? (ctaSection as HTMLElement).style.display : '';
      if (footer) (footer as HTMLElement).style.display = 'none';
      if (ctaSection) (ctaSection as HTMLElement).style.display = 'none';
      
      // Fix gradient text for PDF - replace transparent text with solid color
      const gradientTexts = content.querySelectorAll('.bg-clip-text');
      const originalStyles: Array<{element: HTMLElement, color: string, background: string}> = [];
      gradientTexts.forEach((el) => {
        const htmlEl = el as HTMLElement;
        originalStyles.push({
          element: htmlEl,
          color: htmlEl.style.color || '',
          background: htmlEl.style.background || ''
        });
        htmlEl.style.color = '#7c3aed'; // Purple color for PDF
        htmlEl.style.background = 'none';
      });
      
      // Temporarily adjust styles for better PDF rendering
      const originalOverflow = content.style.overflow;
      const originalMaxWidth = content.style.maxWidth;
      content.style.overflow = 'visible';
      content.style.maxWidth = '210mm'; // A4 width
      
      // Create canvas from HTML with optimized settings for A4
      const canvas = await html2canvas(content, {
        scale: 3, // Higher quality for crisp text
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 794, // A4 width in pixels at 96 DPI (210mm)
        windowHeight: content.scrollHeight,
      });
      
      // Restore original styles
      content.style.overflow = originalOverflow;
      content.style.maxWidth = originalMaxWidth;
      if (footer) (footer as HTMLElement).style.display = originalFooterDisplay;
      if (ctaSection) (ctaSection as HTMLElement).style.display = originalCtaDisplay;
      
      // Restore gradient text styles
      originalStyles.forEach(({element, color, background}) => {
        element.style.color = color;
        element.style.background = background;
      });
      
      // Calculate PDF dimensions for A4
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      
      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      
      // Add image to PDF (handle multiple pages if needed)
      const imgData = canvas.toDataURL('image/png', 1.0);
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      // Save PDF
      pdf.save('HeyMello-AI-Onboarding-Journey.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Floating Export Button */}
      <button
        onClick={handleExportPDF}
        disabled={isExporting}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        title="Export to PDF"
      >
        <Download className="w-5 h-5" />
        {isExporting ? 'Generating PDF...' : 'Export to PDF'}
      </button>
      
      <div ref={contentRef} className="bg-white print:max-w-[210mm]">
      
      <main className="pt-16 pb-12 print:pt-8 print:pb-8">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden print:py-8">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-8 relative print:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent print:text-4xl print:mb-3">
                Client Onboarding Journey
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed print:text-base print:mb-4">
                A structured approach to deliver high-reliability AI integration with zero risk and 99.9% uptime guarantee
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8 print:gap-2 print:mb-6">
                <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-2 print:p-3 print:shadow-md">
                  <Calendar className="w-7 h-7 text-purple-600 print:w-6 print:h-6" />
                  <div className="text-left">
                    <div className="text-xl font-bold text-gray-900 print:text-lg">30 Days</div>
                    <div className="text-xs text-gray-600">To Production</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-2 print:p-3 print:shadow-md">
                  <Shield className="w-7 h-7 text-blue-600 print:w-6 print:h-6" />
                  <div className="text-left">
                    <div className="text-xl font-bold text-gray-900 print:text-lg">99.9%</div>
                    <div className="text-xs text-gray-600">Uptime SLA</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-4 flex items-center gap-2 print:p-3 print:shadow-md">
                  <Zap className="w-7 h-7 text-pink-600 print:w-6 print:h-6" />
                  <div className="text-left">
                    <div className="text-xl font-bold text-gray-900 print:text-lg">Zero Risk</div>
                    <div className="text-xs text-gray-600">Guaranteed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="py-10 bg-white print:py-6">
          <div className="container mx-auto px-8 print:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 print:mb-5">
                <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent print:text-2xl print:mb-2">
                  Our Guiding Principles
                </h2>
                <p className="text-gray-600 text-base print:text-sm">
                  The foundation of our integration excellence
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 print:gap-4">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200 print:rounded-xl print:p-4 print:border print:shadow-sm">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 print:w-10 print:h-10 print:mb-3">
                    <Shield className="w-6 h-6 text-white print:w-5 print:h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 print:text-lg print:mb-2">Zero-Risk</h3>
                  <p className="text-gray-700 leading-relaxed text-sm print:text-xs">
                    All integration actions are engineered to maintain platform stability and meet the 99.9% uptime guarantee.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200 print:rounded-xl print:p-4 print:border print:shadow-sm">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 print:w-10 print:h-10 print:mb-3">
                    <CheckCircle2 className="w-6 h-6 text-white print:w-5 print:h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 print:text-lg print:mb-2">Standardization</h3>
                  <p className="text-gray-700 leading-relaxed text-sm print:text-xs">
                    A detailed, replicable process ensures consistent quality and predictable outcomes for all clients.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border-2 border-pink-200 print:rounded-xl print:p-4 print:border print:shadow-sm">
                  <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4 print:w-10 print:h-10 print:mb-3">
                    <Users className="w-6 h-6 text-white print:w-5 print:h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 print:text-lg print:mb-2">Alignment</h3>
                  <p className="text-gray-700 leading-relaxed text-sm print:text-xs">
                    Seamless coordination is maintained between Sales, Architecture, DevOps, and Support teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        
         <br/>
        <br/>
        <br/>
        
         <br/>
        <br/>


        {/* Timeline */}
        <section className="py-10 bg-gradient-to-b from-gray-50 to-white print:py-6 print:bg-white print:break-before-page">
          <div className="container mx-auto px-8 print:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10 print:mb-5">
                <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent print:text-2xl print:mb-2">
                  🚀 The 30-Day Onboarding Plan
                </h2>
                <p className="text-gray-600 text-base print:text-sm">
                  Structured phases for seamless AI integration
                </p>
              </div>

              {/* Phase I */}
              <div className="mb-8 print:mb-5 print:break-after-page">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-purple-100 print:rounded-xl print:shadow-md print:border">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-5 print:p-4">
                    <div className="flex items-center gap-3 mb-3 print:gap-2 print:mb-2">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm print:w-10 print:h-10">
                        <Rocket className="w-6 h-6 print:w-5 print:h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold opacity-90 print:text-[10px]">PHASE I (Days 1-5)</div>
                        <h3 className="text-2xl font-bold print:text-xl">Setup & Foundation</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 print:p-4">
                    <div className="space-y-5 print:space-y-3">
                      {/* Commercial Finalization */}
                      <div>
                        <div className="flex items-center gap-2 mb-2 print:mb-1.5">
                          <FileCheck className="w-5 h-5 text-purple-600 print:w-4 print:h-4" />
                          <h4 className="text-lg font-bold text-gray-900 print:text-base">Commercial Finalization</h4>
                        </div>
                        <ul className="space-y-2 ml-7 print:space-y-1 print:ml-6">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Execute the Master Services Agreement (MSA) and SLA</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Collect the initial setup fee</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Create dedicated client user accounts with role-based access control (admin, ops manager, etc.)</span>
                          </li>
                        </ul>
                      </div>

                      {/* Technical Architecture */}
                      <div>
                        <div className="flex items-center gap-2 mb-2 print:mb-1.5">
                          <Server className="w-5 h-5 text-blue-600 print:w-4 print:h-4" />
                          <h4 className="text-lg font-bold text-gray-900 print:text-base">Technical Architecture</h4>
                        </div>
                        <ul className="space-y-2 ml-7 print:space-y-1 print:ml-6">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Map telephony integration via SIP trunking or webhook</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Define the call failover protocol for service continuity</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Complete a security review, including IP whitelisting</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Obtain signed compliance certification (e.g., HIPAA, PCI, GDPR)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

        
        
              {/* Phase II */}
              <div className="mb-8 print:mb-5 print:break-after-page">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-blue-100 print:rounded-xl print:shadow-md print:border">
                  <div className="bg-gradient-to-r from-blue-600 to-pink-600 text-white p-5 print:p-4">
                    <div className="flex items-center gap-3 mb-3 print:gap-2 print:mb-2">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm print:w-10 print:h-10">
                        <Database className="w-6 h-6 print:w-5 print:h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold opacity-90 print:text-[10px]">PHASE II (Days 6-15)</div>
                        <h3 className="text-2xl font-bold print:text-xl">Integration & Staging</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 print:p-4">
                    <div className="space-y-5 print:space-y-3">
                      {/* Data & Model Training */}
                      <div>
                        <div className="flex items-center gap-2 mb-2 print:mb-1.5">
                          <Database className="w-5 h-5 text-blue-600 print:w-4 print:h-4" />
                          <h4 className="text-lg font-bold text-gray-900 print:text-base">Data & Model Training</h4>
                        </div>
                        <ul className="space-y-2 ml-7 print:space-y-1 print:ml-6">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Securely ingest anonymized transcripts with mandatory PII stripping</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Establish the model baseline using the client's CRM schema and historical data</span>
                          </li>
                        </ul>
                      </div>

                      {/* Voice & Scripting */}
                      <div>
                        <div className="flex items-center gap-2 mb-2 print:mb-1.5">
                          <MessageSquare className="w-5 h-5 text-pink-600 print:w-4 print:h-4" />
                          <h4 className="text-lg font-bold text-gray-900 print:text-base">Voice & Scripting</h4>
                        </div>
                        <ul className="space-y-2 ml-7 print:space-y-1 print:ml-6">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Execute a custom voice cloning session or confirm a pre-built TTS model</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Lock the production voice asset to ensure a consistent audio identity</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Create a detailed intent taxonomy and define end-of-call states (e.g., transfer, resolve) for every branch</span>
                          </li>
                        </ul>
                      </div>

                      {/* API & Stress Testing */}
                      <div>
                        <div className="flex items-center gap-2 mb-2 print:mb-1.5">
                          <Server className="w-5 h-5 text-purple-600 print:w-4 print:h-4" />
                          <h4 className="text-lg font-bold text-gray-900 print:text-base">API & Stress Testing</h4>
                        </div>
                        <ul className="space-y-2 ml-7 print:space-y-1 print:ml-6">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Build internal API handlers with a circuit breaker pattern, exponential backoff, and timeout logic</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Deploy to an isolated staging environment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Simulate peak load and inject 4xx/5xx errors to validate failover mechanisms</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase III */}
              <div className="mb-8 print:mb-5 print:break-after-page">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-100 print:rounded-xl print:shadow-md print:border">
                  <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-5 print:p-4">
                    <div className="flex items-center gap-3 mb-3 print:gap-2 print:mb-2">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm print:w-10 print:h-10">
                        <LineChart className="w-6 h-6 print:w-5 print:h-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold opacity-90 print:text-[10px]">PHASE III (Days 16-30)</div>
                        <h3 className="text-2xl font-bold print:text-xl">Launch</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 print:p-4">
                    <div className="space-y-5 print:space-y-3">
                      {/* Client Validation */}
                      <div>
                        <div className="flex items-start gap-2 mb-2 print:mb-1.5">
                          <AlertCircle className="w-5 h-5 text-green-600 mt-0.5 print:w-4 print:h-4" />
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-1.5 print:text-base print:mb-1">Client Validation</h4>
                            <p className="text-gray-700 text-sm print:text-xs">The client's operational team must validate all use cases and telephony failover in the staging environment before the production release.</p>
                          </div>
                        </div>
                      </div>

                      {/* Phased Rollout */}
                      <div>
                        <div className="flex items-center gap-2 mb-2 print:mb-1.5">
                          <Zap className="w-5 h-5 text-blue-600 print:w-4 print:h-4" />
                          <h4 className="text-lg font-bold text-gray-900 print:text-base">Phased Rollout</h4>
                        </div>
                        <ul className="space-y-2 ml-7 print:space-y-1 print:ml-6">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Start with a 5-10% canary deployment during off-peak hours</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Gradually increase volume over 3-4 weeks, allowing for immediate rollback if needed</span>
                          </li>
                        </ul>
                      </div>

                      {/* Activation & Transition */}
                      <div>
                        <div className="flex items-center gap-2 mb-2 print:mb-1.5">
                          <LineChart className="w-5 h-5 text-purple-600 print:w-4 print:h-4" />
                          <h4 className="text-lg font-bold text-gray-900 print:text-base">Activation & Transition</h4>
                        </div>
                        <ul className="space-y-2 ml-7 print:space-y-1 print:ml-6">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Activate the real-time monitoring dashboard (tracking uptime, latency, call volume, etc.)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Configure proactive alerting based on custom KPI thresholds</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                            <span className="text-gray-700 text-sm print:text-xs">Transition to the recurring revenue model</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-10 bg-white print:py-6 print:break-before-page">
          <div className="container mx-auto px-8 print:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8 print:mb-5">
                <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent print:text-2xl print:mb-2">
                  ✅ Deliverables & Metrics by Phase
                </h2>
                <p className="text-gray-600 text-base print:text-sm">
                  Clear milestones and outcomes for each phase
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 print:gap-4 print:break-inside-avoid md:items-start">
                {/* Phase I Deliverables */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border-2 border-purple-100 print:rounded-lg print:p-4 print:border print:shadow-sm h-full">
                  <div className="bg-purple-600 text-white rounded-lg px-3 py-1.5 inline-block mb-4 font-bold text-sm print:text-xs print:mb-3 print:px-2 print:py-1">
                    Phase I
                  </div>
                  <ul className="space-y-3 print:space-y-1.5">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                      <span className="text-gray-700 text-sm print:text-xs">Signed contract</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                      <span className="text-gray-700 text-sm print:text-xs">Client user accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                      <span className="text-gray-700 text-sm print:text-xs">Finalized call flow with failover protocol</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                      <span className="text-gray-700 text-sm print:text-xs">Signed security/compliance checklist</span>
                    </li>
                  </ul>
                </div>

                {/* Phase II Deliverables */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border-2 border-blue-100 print:rounded-lg print:p-4 print:border print:shadow-sm h-full">
                  <div className="bg-blue-600 text-white rounded-lg px-3 py-1.5 inline-block mb-4 font-bold text-sm print:text-xs print:mb-3 print:px-2 print:py-1">
                    Phase II
                  </div>
                  <ul className="space-y-3 print:space-y-1.5">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                      <span className="text-gray-700 text-sm print:text-xs">Ingested training data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                      <span className="text-gray-700 text-sm print:text-xs">Approved production voice asset</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                      <span className="text-gray-700 text-sm print:text-xs">Finalized production script</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                      <span className="text-gray-700 text-sm print:text-xs">DevOps-signed API dependency matrix</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                      <span className="text-gray-700 text-sm print:text-xs">Passed internal UAT report</span>
                    </li>
                  </ul>
                </div>

                {/* Phase III Deliverables */}
                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-100 print:rounded-lg print:p-4 print:border print:shadow-sm h-full">
                  <div className="bg-green-600 text-white rounded-lg px-3 py-1.5 inline-block mb-4 font-bold text-sm print:text-xs print:mb-3 print:px-2 print:py-1">
                    Phase III
                  </div>
                  <ul className="space-y-3 print:space-y-1.5">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                      <span className="text-gray-700 text-sm print:text-xs">Live client monitoring dashboard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                      <span className="text-gray-700 text-sm print:text-xs">Active proactive alerting system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                      <span className="text-gray-700 text-sm print:text-xs">Formal client UAT sign-off document</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                      <span className="text-gray-700 text-sm print:text-xs">Successful Go-Live</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 print:w-3 print:h-3" />
                      <span className="text-gray-700 text-sm print:text-xs">Established stable MRR stream</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section py-12 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 relative overflow-hidden print:hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="container mx-auto px-8 relative print:px-6">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how our structured onboarding process can transform your customer engagement
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/request-demo"
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  Schedule a Demo
                </a>
                <a
                  href="/contact-sales"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      </div>
    </div>
  );
}
