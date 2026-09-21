import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '@/components/PageHeader'
import Icon from '@/components/ui/AppIcon'
import { CONTACT_EMAIL } from '@/lib/contact'

const AboutSection = lazy(() => import('@/components/AboutSection'))
const FaqSection = lazy(() => import('@/components/FaqSection'))

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        badge="Our Heritage & Vision"
        title="The Hannah Pixels Atelier &"
        titleItalic="Global Presence."
        description="Hannah Pixels was founded to bring greater thought, craft, and character to physical packaging. From our dual hubs in London and Dubai, we engineer packaging for brands with a distinct point of view."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' }
        ]}
      >
        {/* Quick Jump Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
          <span className="text-white/40 uppercase tracking-wider">Explore:</span>
          <a
            href="#about"
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-[#F8BC23] transition-colors"
          >
            Our Vision ↓
          </a>
          <a
            href="#standards"
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-[#F8BC23] transition-colors"
          >
            The 5 Standards ↓
          </a>
          <a
            href="#sustainability"
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-[#F8BC23] transition-colors"
          >
            Sustainability &amp; Materials ↓
          </a>
          <a
            href="#faq"
            className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/80 hover:text-[#F8BC23] transition-colors"
          >
            Procurement FAQ ↓
          </a>
        </div>
      </PageHeader>

      <Suspense fallback={<div className="h-40 flex items-center justify-center text-xs tracking-widest uppercase text-[#93660C]">Loading Atelier Heritage…</div>}>
        {/* Core Vision & The 5 Standards */}
        <AboutSection />

        {/* Sustainability, Dual Hubs & Material Ethics */}
        <section id="sustainability" className="py-20 md:py-28 bg-[#090B0A] text-white border-t border-[#202824]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141A17] border border-[#C9A050]/30 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#C9A050]" />
                <span className="label-tag text-[#DFBF75]">MATERIAL ETHICS</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight leading-[1.12]">
                Conscious Luxury.{' '}
                <span className="italic text-[#F8BC23] font-normal">Uncompromised Quality.</span>
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mt-4">
                We believe true luxury is sustainable by design. We eliminate unnecessary single-use plastics in favor of archival greyboard, soy-based inks, and water-based adhesives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-[#0F1412] border border-[#202824] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1E3A2F]/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Icon name="CheckBadgeIcon" size={24} />
                </div>
                <h3 className="font-serif text-2xl font-medium text-white">FSC® Certified Greyboard</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  All rigid box cores utilize 100% recycled, post-consumer pulp greyboards ranging from 1.2mm to 3.0mm thickness, fully recyclable and biologically inert.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#0F1412] border border-[#202824] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#93660C]/20 border border-[#F8BC23]/30 flex items-center justify-center text-[#F8BC23]">
                  <Icon name="SparklesIcon" size={24} />
                </div>
                <h3 className="font-serif text-2xl font-medium text-white">Greenguard Soy &amp; UV Inks</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Zero volatile organic compounds (VOCs). Our offset and digital presses utilize food-safe, child-safe mineral-free vegetal inks with razor-sharp color gamut.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#0F1412] border border-[#202824] space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center text-white">
                  <Icon name="GlobeAltIcon" size={24} />
                </div>
                <h3 className="font-serif text-2xl font-medium text-white">Dual-Hub Regional Logistics</h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  Dedicated operations in London and Dubai minimize unnecessary transcontinental transit footprints, providing expedited regional delivery across the UK, Europe, and the GCC.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dual-Hub Atelier Desks */}
        <section className="py-20 md:py-28 bg-[#FBF9F4] border-t border-[#E6E0D2]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">ATELIER DESKS</span>
                <span className="w-8 h-px bg-[#93660C]/40" />
                <span className="editorial-tag text-[#93660C]">GLOBAL HUBS</span>
              </div>
              <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
                London &amp; Dubai Operations.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* London Desk */}
              <div className="p-8 md:p-10 rounded-[2.25rem] bg-white border border-[#E6E0D2] shadow-xs space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#93660C] font-bold">
                    United Kingdom &amp; Europe
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#93660C]/20 text-[11px] font-mono text-[#93660C]">
                    GMT Timezone
                  </span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#181A16]">
                  London Atelier Desk
                </h3>
                <p className="text-sm text-[#4A4E43] leading-relaxed">
                  Serving luxury fragrance houses, Mayfair boutiques, publishing houses, and specialty beverage brands across London and the UK. Full UK VAT invoicing compliant.
                </p>
                <div className="pt-4 border-t border-[#E6E0D2] space-y-2 text-xs font-mono text-[#6B6F62]">
                  <p>• Expedited UK Nationwide Courier &amp; Palletized Distribution</p>
                  <p>• In-Person Physical Material Proofing Sessions</p>
                  <p>• Dieline Review Desk: Mon – Fri (9:00 – 18:00 GMT)</p>
                </div>
              </div>

              {/* Dubai Desk */}
              <div className="p-8 md:p-10 rounded-[2.25rem] bg-white border border-[#E6E0D2] shadow-xs space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#93660C] font-bold">
                    United Arab Emirates &amp; GCC
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F4EFE6] border border-[#93660C]/20 text-[11px] font-mono text-[#93660C]">
                    GST Timezone
                  </span>
                </div>
                <h3 className="font-serif text-3xl font-bold text-[#181A16]">
                  Dubai Atelier Desk
                </h3>
                <p className="text-sm text-[#4A4E43] leading-relaxed">
                  Engineering opulent rigid gift hampers, perfume coffrets, date confectionery packaging, and VIP presentation boxes across the UAE, Saudi Arabia, and Qatar. UAE TRN compliant.
                </p>
                <div className="pt-4 border-t border-[#E6E0D2] space-y-2 text-xs font-mono text-[#6B6F62]">
                  <p>• GCC Direct Land &amp; Air Freight Door-to-Door Delivery</p>
                  <p>• Dedicated WhatsApp Client Relationship Specialist</p>
                  <p>• Studio Consultation Desk: Mon – Sat (9:00 – 19:00 GST)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Procurement & FAQ */}
        <FaqSection />
      </Suspense>

      {/* Consultation Banner */}
      <section className="py-16 md:py-20 bg-[#090B0A] border-t border-[#202824] text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">
              Ready to collaborate with Hannah Pixels?
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Connect with our creative directors and procurement leads to discuss your upcoming packaging requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              to="/contact"
              className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all shadow-lg shadow-[#F8BC23]/20"
            >
              Request a Quotation
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full border border-white/20 hover:border-[#F8BC23]/60 text-white/90 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Icon name="EnvelopeIcon" size={15} className="text-[#F8BC23]" />
              <span>Email the Atelier</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
