import './globals.css'
import { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

export const metadata: Metadata = {
  metadataBase: new URL('https://heymello.ai'),
  title: {
    default: 'Hey Mello - AI Voice Agents for Automated Phone Calls',
    template: '%s | Hey Mello'
  },
  description: 'Enterprise-ready AI voice agents. Intelligent voice agents that deliver natural conversations and exceptional customer experiences. UK-based AI voice technology.AI Voice Agents That Understand Your Customers.',
  keywords: [
    'AI voice agents',
    'automated phone calls',
    'customer support AI',
    'voice automation',
    'enterprise AI',
    'call center automation',
    'AI phone system',
    'AI voice agents UK',
    'automated phone calls United Kingdom',
    'UK customer support AI',
    'British AI voice technology',
    'voice AI UK',
    'call centre automation UK',
    'AI phone assistant UK',
    'UK voice automation',
    'AI receptionist UK',
    'automated customer service UK'
  ],
  authors: [{ name: 'Hey Mello' }],
  creator: 'Hey Mello',
  publisher: 'Mello AI Ltd',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://heymello.ai',
    title: 'Hey Mello - AI Voice Agents for Automated Phone Calls',
    description: 'Intelligent voice agents that deliver natural conversations and exceptional customer experiences 24/7.',
    siteName: 'Hey Mello',
    countryName: 'United Kingdom',
    images: [
      {
        url: '/heroimage_1.jpeg',
        width: 1200,
        height: 630,
        alt: 'Hey Mello AI Voice Agents - Customer Support',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hey Mello - AI Voice Agents for Automated Phone Calls',
    description: 'Enterprise-ready AI voice agents for automated phone calls and 24/7 customer support.',
    creator: '@heymelloai',
    images: ['/heroimage_1.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'k52w_ql9bCPjmoHkOSt5BRMnYj6Qlx1aRoskPrrro-Y',
  },
}

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  preload: true,
  adjustFontFallback: true,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Organization Schema for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://heymello.ai/#organization",
    "name": "Mello AI Ltd",
    "alternateName": [
      "heymello",
      "hey mello AI",
      "hey mello",
      "heymello.ai",
      "mello ai",
      "mello ai uk",
      "heymelloai.com"
    ],
    "description": "Mello AI Ltd (trading as heymello) is an AI company specializing in intelligent voice agents that deliver natural conversations and exceptional customer experiences 24/7.",
    "url": "https://heymello.ai",
    "logo": [
      {
        "@type": "ImageObject",
        "url": "https://heymello.ai/logos/website_logo_new.svg",
        "width": 77,
        "height": 78,
        "encodingFormat": "image/svg+xml"
      },
      {
        "@type": "ImageObject",
        "url": "https://heymello.ai/logos/website_logo_new.png",
        "width": 77,
        "height": 78,
        "encodingFormat": "image/png"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/heymello-ai",
      "https://heymelloai.com",
      "https://heymello.co.uk"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "admin@heymello.ai"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB"
    },
    "foundingLocation": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  };

  // WebSite Schema for SEO
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Hey Mello",
    "alternateName": "Mello AI Ltd",
    "url": "https://heymello.ai",
    "description": "AI Voice Agents That Understand Your Customers - Intelligent voice agents that deliver natural conversations and exceptional customer experiences 24/7.",
    "publisher": {
      "@type": "Organization",
      "name": "Mello AI Ltd",
      "logo": [
        {
          "@type": "ImageObject",
          "url": "https://heymello.ai/logos/website_logo_new.svg",
          "width": 77,
          "height": 78,
          "encodingFormat": "image/svg+xml"
        },
        {
          "@type": "ImageObject",
          "url": "https://heymello.ai/logos/website_logo_new.png",
          "width": 77,
          "height": 78,
          "encodingFormat": "image/png"
        }
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://heymello.ai/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className={plusJakartaSans.variable}>
      <head>
        <link rel="icon" href="/logos/logo_tab.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="canonical" href="https://heymello.ai" />
        <link rel="alternate" href="https://heymello.co.uk" hrefLang="en-GB" />
        <link rel="alternate" href="https://heymelloai.com" hrefLang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`min-h-screen antialiased font-sans ${plusJakartaSans.variable}`} suppressHydrationWarning>{children}</body>
    </html>
  )
}
