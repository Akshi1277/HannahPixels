import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '@/components/PageHeader'
import Icon from '@/components/ui/AppIcon'
import { whatsAppUrl } from '@/lib/contact'

const PackagingTransformationSection = lazy(() => import('@/components/PackagingTransformationSection'))
const LogisticsSection = lazy(() => import('@/components/LogisticsSection'))

export default function Process() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        badge="Manufacturing & Engineering"
        title="From CAD Dieline to"
        titleItalic="Finished Piece."
        description="A disciplined progression from brand intent to physical reality. Explore our interactive 4-stage transformation portal and dual-hub global logistics network."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Process' }
        ]}
      >
        {/* Quick Jump Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <span className="text-white/40 uppercase tracking-wider">Sections:</span>
          <a
            href="#transformation"
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-[#F8BC23] transition-colors"
          >
            4-Stage Transformation Portal ↓
          </a>
          <a
            href="#process"
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-[#F8BC23] transition-colors"
          >
            Six Atelier Phases ↓
          </a>
          <a
            href="#standards-matrix"
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-[#F8BC23] transition-colors"
          >
            Engineering Standards ↓
          </a>
          <Link
            to="/contact"
            className="px-3.5 py-1.5 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold uppercase tracking-wider hover:bg-[#FFCB4D] transition-colors flex items-center gap-1.5"
          >
            <span>Request CAD Dieline</span>
            <Icon name="ArrowRightIcon" size={10} />
          </Link>
        </div>
      </PageHeader>

      <Suspense fallback={<div className="h-40 flex items-center justify-center text-xs tracking-widest uppercase text-[#93660C]">Loading Engineering Journey…</div>}>
        {/* Stage 1-4 Interactive Transformation Portal */}
        <div id="transformation">
          <PackagingTransformationSection />
        </div>

        {/* 6 Sequential Atelier Phases + Global Logistics */}
        <LogisticsSection />

        {/* Technical Standards & Quality Matrices */}
        <section id="standards-matrix" className="py-20 md:py-28 bg-[#F4EFE6] border-t border-[#E6E0D2]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">PRECISION</span>
                <span className="w-8 h-px bg-[#93660C]/40" />
                <span className="editorial-tag text-[#93660C]">QUALITY CONTROLS</span>
              </div>
              <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
                Calibrated to 0.1mm Tolerances.
              </h2>
              <p className="text-[#4A4E43] text-base md:text-lg leading-relaxed mt-3">
                Every production run undergoes strict dimensional testing, adhesion scoring, and climate-resistant transit validation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  metric: '±0.1 mm',
                  title: 'Laser Cut & Score',
                  desc: 'High-frequency CNC die-cutting ensuring razor-sharp seams and seamless closure alignment.'
                },
                {
                  metric: '120°C',
                  title: 'Hot Foil Pressure',
                  desc: 'Thermal brass die stamping providing mirror metallic luster without paper fiber burning.'
                },
                {
                  metric: '44 ECT',
                  title: 'Edge Crush Test',
                  desc: 'High-density rigid greyboard profiles engineered to protect luxury items in international air transit.'
                },
                {
                  metric: '100% FSC',
                  title: 'Certified Sourcing',
                  desc: 'Strict chain-of-custody tracking across all sustainable virgin and recycled substrates.'
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-7 border border-[#E6E0D2] shadow-xs space-y-3"
                >
                  <span className="font-serif text-3xl font-bold text-[#93660C]">
                    {item.metric}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#181A16]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B6F62] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Suspense>

      {/* Dieline Consultation Banner */}
      <section className="py-16 md:py-20 bg-[#090B0A] border-t border-[#202824] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">
              Need a custom CAD dieline for your product?
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Send us your product dimensions or CAD models. Our structural engineers will create production-ready vector dielines within 24 hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all shadow-lg shadow-[#F8BC23]/20"
            >
              Start Dieline Consultation
            </Link>
            <a
              href={whatsAppUrl("Hello Hannah Pixels, I need assistance with a bespoke CAD packaging dieline.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full border border-white/20 hover:border-[#F8BC23]/60 text-white/90 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Icon name="MessageCircleIcon" size={15} className="text-[#F8BC23]" />
              <span>WhatsApp Engineers</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
