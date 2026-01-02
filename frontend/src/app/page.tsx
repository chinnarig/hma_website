import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import ProductFeatures from '@/components/ProductFeatures'
import HowItWorks from '@/components/HowItWorks'
import Demos from '@/components/Demos'
import Solutions from '@/components/Solutions'
import Integrations from '@/components/Integrations'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hey Mello - AI Voice Agents',
  description: 'Intelligent voice agents that deliver natural conversations and exceptional customer experiences 24/7. 1M+ calls processed, 10K+ active users.',
  openGraph: {
    title: 'AI Voice Agents That Understand Your Customers | Hey Mello',
    description: 'Intelligent voice agents that deliver natural conversations and exceptional customer experiences 24/7.',
    url: 'https://heymello.ai',
    type: 'website',
  },
}

export default function Home() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Hey Mello",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock",
      "url": "https://heymello.ai/pricing"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1000"
    },
    "description": "Enterprise-ready AI voice agents for automated phone calls and 24/7 customer support",
    "provider": {
      "@type": "Organization",
      "name": "Mello AI Ltd",
      "url": "https://heymello.ai",
      "logo": "https://heymello.ai/logos/website_logo_new.svg",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "GB"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44-1695-665111",
        "contactType": "customer service",
        "areaServed": ["GB", "UK"],
        "availableLanguage": "en"
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen relative">
        {/* Nebula Gradient Effect - Subtle purple radial gradient in corner */}
        <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[#8c52ff] opacity-[0.05] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2 z-0" />
        
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Stats />
          <div id="features">
            <Features />
          </div>
          <ProductFeatures />
          <div id="how-it-works">
            <HowItWorks />
          </div>
          <Demos />
          <div id="solutions">
            <Solutions />
          </div>
          <div id="integrations">
            <Integrations />
          </div>
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  )
}
