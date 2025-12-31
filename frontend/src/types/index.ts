export interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  disclaimer: string;
}

export interface StatData {
  value: string;
  label: string;
}

export interface FeatureData {
  icon: string;
  title: string;
  description: string;
}

export interface SolutionData {
  title: string;
  description: string;
  image: string;
}

export interface IntegrationData {
  name: string;
  logo: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface MockData {
  hero: HeroData;
  stats: StatData[];
  features: FeatureData[];
  solutions: SolutionData[];
  integrations: IntegrationData[];
  pricing: PricingPlan[];
  testimonials: Testimonial[];
  faqs: FAQ[];
}
