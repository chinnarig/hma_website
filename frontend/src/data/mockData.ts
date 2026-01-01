import { MockData } from '@/types';

export const mockData: MockData = {
  hero: {
    badge: "Our Integrated AI Solutions",
    title: "AI Voice Agents That Understand Your Customers",
    subtitle: "Deploy intelligent voice agents that deliver natural conversations and exceptional customer experiences 24/7. ",
    ctaPrimary: "Contact Sales",
    ctaSecondary: "Request a Demo",
    disclaimer: "No credit card required"
  },
  stats: [
    { value: "16K+", label: "Calls Processed" },
    { value: "50+", label: "Active Users" },
    { value: "+35%", label: "Cost Reduction" },
    { value: "99.9%", label: "Uptime" }
  ],
  features: [
    {
      icon: "Phone",
      title: "AI-Powered Voice Calls",
      description: "Deploy human-like voice agents that understand context and handle complex conversations naturally."
    },
    {
      icon: "Clock",
      title: "24/7 Availability",
      description: "Provide round-the-clock support without hiring additional staff. Your AI agents never sleep."
    },
    {
      icon: "TrendingUp",
      title: "Scalable Solution",
      description: "Handle thousands of concurrent calls effortlessly. Scale up or down based on your needs."
    },
    {
      icon: "DollarSign",
      title: "Cost Effective",
      description: "Reduce operational costs by up to 70% while maintaining exceptional call quality."
    },
    {
      icon: "Languages",
      title: "Multi-Language Support",
      description: "Support customers globally with AI agents fluent in over 40 languages."
    },
    {
      icon: "BarChart",
      title: "Real-Time Analytics",
      description: "Track performance, call metrics, and customer satisfaction with detailed analytics."
    }
  ],
  solutions: [
    {
      title: "Customer Support",
      description: "Automate customer inquiries, troubleshooting, and support tickets with intelligent voice agents that provide instant, accurate assistance.",
      image: "customer-support"
    },
    {
      title: "Call Centers",
      description: "Transform your call center operations with AI agents that handle high volumes, reduce wait times, and maintain consistent quality.",
      image: "call-centers"
    },
    {
      title: "Appointment Scheduling",
      description: "Streamline booking processes with AI agents that manage calendars, send confirmations, and handle rescheduling automatically.",
      image: "scheduling"
    },
    {
      title: "Sales",
      description: "Qualify leads, schedule demos, and nurture prospects with personalized voice interactions that drive conversions.",
      image: "sales"
    },
    {
      title: "Healthcare",
      description: "Patient appointment scheduling, prescription refills, and medical inquiries handled with HIPAA-compliant AI voice agents.",
      image: "healthcare"
    },
    {
      title: "24/7 Support",
      description: "Provide round-the-clock assistance without hiring additional staff. Your AI agents never sleep and are always ready to help.",
      image: "support-247"
    }
  ],
  integrations: [
    { name: "Salesforce", logo: "salesforce" },
    { name: "HubSpot", logo: "hubspot" },
    { name: "Zendesk", logo: "zendesk" },
    { name: "Slack", logo: "slack" },
    { name: "Microsoft Teams", logo: "teams" },
    { name: "Twilio", logo: "twilio" },
    { name: "Zapier", logo: "zapier" },
    { name: "Google Calendar", logo: "google" }
  ],
  pricing: [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      description: "Perfect for small teams getting started",
      features: [
        "500 calls per month",
        "2 AI voice agents",
        "Basic analytics",
        "Email support",
        "5 integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "5,000 calls per month",
        "10 AI voice agents",
        "Advanced analytics",
        "Priority support",
        "Unlimited integrations",
        "Custom voice training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For large-scale operations",
      features: [
        "Unlimited calls",
        "Unlimited AI agents",
        "Custom analytics dashboard",
        "Dedicated account manager",
        "Custom integrations",
        "SLA guarantee",
        "White-label options"
      ],
      popular: false
    }
  ],
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      company: "TechCorp",
      testimonial: "HeyMello transformed our customer support. We've reduced costs by 60% while improving response times significantly.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "VP of Sales, GrowthLabs",
      company: "GrowthLabs",
      testimonial: "The AI voice agents handle lead qualification better than our human team. Our conversion rate increased by 40%.",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "Operations Manager, HealthPlus",
      company: "HealthPlus",
      testimonial: "Scheduling appointments has never been easier. Our patients love the 24/7 availability and natural conversations.",
      rating: 5
    }
  ],
  faqs: [
    {
      question: "How natural do the AI voice agents sound?",
      answer: "Our AI voice agents use advanced natural language processing and text-to-speech technology to deliver human-like conversations. Most callers can't tell the difference."
    },
    {
      question: "Can I customize the voice and personality?",
      answer: "Yes! You can customize the voice, tone, accent, and personality to match your brand. Choose from dozens of pre-trained voices or create a custom voice."
    },
    {
      question: "What languages are supported?",
      answer: "We support over 40 languages including English, Spanish, French, German, Mandarin, Japanese, and many more. The AI can also detect and switch languages during calls."
    },
    {
      question: "How quickly can I get started?",
      answer: "You can have your first AI voice agent up and running in less than 15 minutes. Our intuitive setup wizard guides you through the entire process."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use enterprise-grade encryption, comply with GDPR, HIPAA, and SOC 2 standards. Your data is stored securely and never shared with third parties."
    }
  ]
};
