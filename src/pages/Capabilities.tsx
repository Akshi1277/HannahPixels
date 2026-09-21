import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '@/components/PageHeader'
import Icon from '@/components/ui/AppIcon'
import { whatsAppUrl } from '@/lib/contact'

const ServicesSection = lazy(() => import('@/components/ServicesSection'))
const FinishesSection = lazy(() => import('@/components/FinishesSection'))
const SampleKitSection = lazy(() => import('@/components/SampleKitSection'))

export default function Capabilities() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        badge="What We Create"
        title="Packaging Collections &"
        titleItalic="Specialist Finishes."
        description="Six bespoke structural disciplines engineered to elevate brand tactile presence, from high-caliper rigid unboxing sets to sustainable FMCG and hardcover publishing."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Capabilities' }
        ]}
      >
        {/* Quick Jump Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <span className="text-white/40 uppercase tracking-wider">Direct Navigation:</span>
          <a
            href="#services"
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-[#F8BC23] transition-colors"
          >
            Packaging Collections ↓
          </a>
          <a
            href="#finishes"
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-[#F8BC23] transition-colors"
          >
            Specialist Finishes ↓
          </a>
          <a
            href="#sample-kit"
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-[#F8BC23] transition-colors"
          >
            Material Sample Kit ↓
          </a>
          <Link
            to="/contact"
            className="px-3.5 py-1.5 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold uppercase tracking-wider hover:bg-[#FFCB4D] transition-colors flex items-center gap-1.5"
          >
            <span>Custom Quote</span>
            <Icon name="ArrowRightIcon" size={10} />
          </Link>
        </div>
      </PageHeader>

      <Suspense fallback={<div className="h-40 flex items-center justify-center text-xs tracking-widest uppercase text-[#93660C]">Loading Capabilities…</div>}>
        {/* The 6 Collections */}
        <ServicesSection />

        {/* The Specialist Finishes Studio */}
        <FinishesSection />

        {/* The Physical Sample Swatch Box */}
        <SampleKitSection />
      </Suspense>

      {/* Consultation Banner */}
      <section className="py-16 md:py-20 bg-[#090B0A] border-t border-[#202824] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">
              Have a bespoke substrate or structure in mind?
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Our engineering studio produces tailored CAD dielines and provides paper swatches matched to your exact Pantone and caliper specifications.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all shadow-lg shadow-[#F8BC23]/20"
            >
              Configure Specifications
            </Link>
            <a
              href={whatsAppUrl("Hello Hannah Pixels, I'm reviewing your capabilities and would like to discuss a custom packaging project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full border border-white/20 hover:border-[#F8BC23]/60 text-white/90 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Icon name="MessageCircleIcon" size={15} className="text-[#F8BC23]" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
