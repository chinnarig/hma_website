import Navbar from '@/components/Navbar'
import Solutions from '@/components/Solutions'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Solutions - HeyMello AI Voice Agents',
  description: 'Explore our AI voice agent solutions for customer support, sales, scheduling, and feedback collection.',
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Solutions />
      </main>
      <CTA />
      <Footer />
    </div>
  )
}
