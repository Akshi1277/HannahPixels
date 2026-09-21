import { Suspense, lazy } from 'react'
import PageHeader from '@/components/PageHeader'
import Icon from '@/components/ui/AppIcon'
import { whatsAppUrl, CONTACT_EMAIL, PHONE_NUMBER } from '@/lib/contact'

const IndustriesContactSection = lazy(() => import('@/components/IndustriesContactSection'))

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        badge="Direct Atelier Consultation"
        title="Request a Bespoke Quotation &"
        titleItalic="CAD Specification."
        description="Configure your box structure, dimensions, and specialized tactile finishes with our interactive console, or transmit your artwork files directly to our production desks in London and Dubai."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact & Quote' }
        ]}
      >
        {/* Quick Channel Contact Row */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
          <a
            href={whatsAppUrl("Hello Hannah Pixels, I'd like to consult on a packaging project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A2F]/80 hover:bg-[#1E3A2F] border border-emerald-500/40 text-emerald-300 font-semibold transition-all"
          >
            <Icon name="MessageCircleIcon" size={14} />
            <span>Instant WhatsApp Studio: +44 7904 905154</span>
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white/85 transition-all"
          >
            <Icon name="EnvelopeIcon" size={14} className="text-[#F8BC23]" />
            <span>{CONTACT_EMAIL}</span>
          </a>
          <span className="text-white/40 text-[11px] py-1">
            Studio Hours: Mon – Sat · 9:00 AM – 7:00 PM (GMT &amp; GST)
          </span>
        </div>
      </PageHeader>

      <Suspense fallback={<div className="h-40 flex items-center justify-center text-xs tracking-widest uppercase text-[#93660C]">Loading Quote Builder…</div>}>
        {/* The Interactive Quotation Console & Sector Navigator */}
        <IndustriesContactSection />
      </Suspense>

      {/* Direct Atelier Desks Footprint */}
      <section className="py-16 md:py-24 bg-[#F4EFE6] border-t border-[#E6E0D2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">ATELIER CHANNELS</span>
              <span className="w-8 h-px bg-[#93660C]/40" />
              <span className="editorial-tag text-[#93660C]">GLOBAL HUBS</span>
            </div>
            <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
              Two Production Desks. Global Reach.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-[#E6E0D2] shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#93660C] font-bold">
                <Icon name="MapPinIcon" size={15} />
                <span>London Desk</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#181A16]">UK &amp; Europe Inquiries</h3>
              <p className="text-xs text-[#4A4E43] leading-relaxed">
                Mayfair, London, United Kingdom. Nationwide delivery, custom dieline support, and UK VAT invoicing.
              </p>
              <div className="pt-2 text-xs font-mono text-[#6B6F62]">
                <p>Phone: {PHONE_NUMBER}</p>
                <p>Email: {CONTACT_EMAIL}</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E6E0D2] shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#93660C] font-bold">
                <Icon name="MapPinIcon" size={15} />
                <span>Dubai Desk</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#181A16]">UAE &amp; GCC Inquiries</h3>
              <p className="text-xs text-[#4A4E43] leading-relaxed">
                Business Bay, Dubai, United Arab Emirates. GCC-wide pallet and air-express freight, UAE TRN compliant.
              </p>
              <div className="pt-2 text-xs font-mono text-[#6B6F62]">
                <p>WhatsApp: Instant Consultation</p>
                <p>Email: {CONTACT_EMAIL}</p>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#E6E0D2] shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#93660C] font-bold">
                <Icon name="CheckBadgeIcon" size={15} />
                <span>Procurement Support</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#181A16]">Production Assurances</h3>
              <p className="text-xs text-[#4A4E43] leading-relaxed">
                Pre-press dieline check, physical digital proofs, NDA confidentiality, and door-to-door insured logistics.
              </p>
              <div className="pt-2 text-xs font-mono text-[#6B6F62]">
                <p>Turnaround: 24h Quoting</p>
                <p>Sample Swatch: 48h Dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
