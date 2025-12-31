import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import FAQs from '@/components/FAQs'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Resources - HeyMello AI Voice Agents',
  description: 'Customer testimonials, frequently asked questions, and resources to help you get started.',
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Testimonials />
        <FAQs />
      </main>
      <CTA />
      <Footer />
    </div>
  )
}
