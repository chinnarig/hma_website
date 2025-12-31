import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://heymello.ai'),
  title: {
    default: 'Hey Mello - AI Voice Agents for Automated Phone Calls',
    template: '%s | Hey Mello'
  },
  description: 'Enterprise-ready AI voice agents for automated phone calls and 24/7 customer support. Deploy intelligent voice agents that deliver natural conversations and exceptional customer experiences.',
  keywords: ['AI voice agents', 'automated phone calls', 'customer support AI', 'voice automation', 'enterprise AI', 'call center automation', 'AI phone system'],
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
    locale: 'en_US',
    url: 'https://heymello.ai',
    title: 'Hey Mello - AI Voice Agents for Automated Phone Calls',
    description: 'Enterprise-ready AI voice agents for automated phone calls and 24/7 customer support.',
    siteName: 'Hey Mello',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hey Mello - AI Voice Agents for Automated Phone Calls',
    description: 'Enterprise-ready AI voice agents for automated phone calls and 24/7 customer support.',
    creator: '@heymelloai',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://heymello.ai" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
