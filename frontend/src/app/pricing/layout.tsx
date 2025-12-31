import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - HeyMello AI Voice Agents',
  description: 'Transparent pricing for AI voice agents. Scale your business with per-minute pricing and enterprise-grade support. Get a personalized demo today.',
  openGraph: {
    title: 'Pricing - HeyMello AI Voice Agents',
    description: 'Transparent pricing for AI voice agents. Scale your business with per-minute pricing and enterprise-grade support.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - HeyMello AI Voice Agents',
    description: 'Transparent pricing for AI voice agents. Scale your business with per-minute pricing.',
  },
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
