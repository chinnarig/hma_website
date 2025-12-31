import Navbar from '@/components/Navbar'
import Integrations from '@/components/Integrations'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Integrations - HeyMello AI Voice Agents',
  description: 'Seamlessly integrate HeyMello with your favorite tools and platforms.',
}

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Integrations />
      </main>
      <CTA />
      <Footer />
    </div>
  )
}
