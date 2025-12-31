'use client';

import { Zap, Clock, Headphones, TrendingUp, LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ProductFeatures: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Zap,
      title: "Deploy in 3 Weeks",
      description: "Fast setup with no-code tools and flexible APIs",
    },
    {
      icon: Clock,
      title: "<500ms Latency",
      description: "Human-like voice with ultra-fast response times",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "AI engineers and specialists ensure reliability",
    },
    {
      icon: TrendingUp,
      title: "Maximum Performance",
      description: "Enterprise-grade calls from $0.08/min",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 block">
            PRODUCT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 tracking-tight leading-tight">
            Complete AI Voice OS for Enterprise Teams
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            One platform to automate, manage, and scale every phone conversation from routing to resolution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-xl bg-brand shadow-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
