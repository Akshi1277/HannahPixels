import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import ScrollToTop from '@/components/ScrollToTop'

const Home = lazy(() => import('@/pages/Home'))
const Capabilities = lazy(() => import('@/pages/Capabilities'))
const Process = lazy(() => import('@/pages/Process'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ReactLenis root>
        <div className="min-h-screen bg-background text-foreground selection:bg-[#F8BC23] selection:text-black relative flex flex-col justify-between">
          {/* Luxury physical paper grain overlay */}
          <div className="paper-grain-overlay" aria-hidden="true" />
          <WhatsAppButton />
          <Header />
          <main className="flex-1">
            <Suspense
              fallback={
                <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-[#93660C]/20 border-t-[#F8BC23] animate-spin" />
                  <span className="text-xs font-mono tracking-[0.2em] text-[#93660C] uppercase">
                    Hannah Pixels Atelier…
                  </span>
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/capabilities" element={<Capabilities />} />
                <Route path="/process" element={<Process />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ReactLenis>
    </BrowserRouter>
  )
}
