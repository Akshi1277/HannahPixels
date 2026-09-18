import { Suspense, lazy } from 'react'
import { ReactLenis } from 'lenis/react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

// DielineSection is built but temporarily disabled: useScroll() returns a
// frozen value (never updates past its mount-time value) whenever its target
// is a tall section with a sticky child, reproduced even in a minimal
// from-scratch test — see conversation notes. Not a Lenis, StrictMode, lazy-
// loading, or framer-motion 13.0 vs 13.4 issue; all ruled out individually.
// const DielineSection = lazy(() => import('@/components/DielineSection'))
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
      <div className="min-h-screen bg-background text-foreground selection:bg-[#F8BC23] selection:text-black">
        <WhatsAppButton />
        <Header />
        <main>
          <HeroSection />
          {/* <DielineSection /> — disabled, see note above import */}
          <Suspense fallback={<div className="h-32 flex items-center justify-center opacity-60 text-xs tracking-widest uppercase text-[#93660C]">Loading...</div>}>
            <ServicesSection />
            <FinishesSection />
            <SampleKitSection />
            <AboutSection />
            <LogisticsSection />
            <IndustriesContactSection />
            <FaqSection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ReactLenis>
  )
}
