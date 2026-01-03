import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import FAQs from '@/components/FAQs'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { mockData } from '@/data/mockData'

export const metadata = {
  title: 'Resources - HeyMello AI Voice Agents',
  description: 'Customer testimonials, frequently asked questions, and resources to help you get started.',
}

export default function ResourcesPage() {
  // FAQPage Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mockData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <Testimonials />
          <FAQs />
        </main>
        <CTA />
        <Footer />
      </div>
    </>
  )
}
