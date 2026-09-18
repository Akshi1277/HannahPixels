import { Suspense, lazy } from 'react'
import { ReactLenis } from 'lenis/react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const ServicesSection = lazy(() => import('@/components/ServicesSection'))
const FinishesSection = lazy(() => import('@/components/FinishesSection'))
const SampleKitSection = lazy(() => import('@/components/SampleKitSection'))
const AboutSection = lazy(() => import('@/components/AboutSection'))
const LogisticsSection = lazy(() => import('@/components/LogisticsSection'))
const IndustriesContactSection = lazy(() => import('@/components/IndustriesContactSection'))
const FaqSection = lazy(() => import('@/components/FaqSection'))

export default function App() {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-background text-foreground selection:bg-[#F8BC23] selection:text-black relative">
        {/* Luxury physical paper grain overlay */}
        <div className="paper-grain-overlay" aria-hidden="true" />
        <WhatsAppButton />
        <Header />
        <main>
          <HeroSection />
          <Suspense fallback={<div className="h-32 flex items-center justify-center opacity-60 text-xs tracking-widest uppercase text-[#93660C]">Loading…</div>}>
            <ServicesSection />
            <AboutSection />
            <LogisticsSection />
            <FinishesSection />
            <SampleKitSection />
            <IndustriesContactSection />
            <FaqSection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ReactLenis>
  )
}
