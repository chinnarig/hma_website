import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Sales - HeyMello AI',
  description: 'Get in touch with our sales team to learn more about HeyMello AI voice agents and how they can transform your business.',
  openGraph: {
    title: 'Contact Sales | HeyMello AI',
    description: 'Connect with our team to discuss your AI voice agent needs.',
  },
};

export default function ContactSalesLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return children
}
