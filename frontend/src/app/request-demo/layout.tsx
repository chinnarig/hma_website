import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request a Demo - HeyMello AI',
  description: 'Request a personalized demo of HeyMello AI voice agents and see how they can transform your business operations.',
  openGraph: {
    title: 'Request a Demo | HeyMello AI',
    description: 'Experience our AI voice agents in action. Schedule a personalized demo today.',
  },
};

export default function RequestDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
