import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import { whatsAppUrl, CONTACT_EMAIL } from '@/lib/contact'

const packagingServices = [
  { label: 'Luxury Packaging', href: '#services' },
  { label: 'Product Packaging', href: '#services' },
  { label: 'Fragrance & Beauty', href: '#services' },
  { label: 'Chocolate & Confectionery', href: '#services' },
  { label: 'Paper & Carry', href: '#services' },
  { label: 'Books & Publishing', href: '#services' }
]

const companyLinks = [
  { label: 'Our Vision', href: '#about' },
  { label: 'What We Create', href: '#services' },
  { label: 'The Process', href: '#process' },
  { label: 'The Standard', href: '#standards' },
  { label: 'Finishes & Craft', href: '#finishes' },
  { label: 'Sample Swatch Box', href: '#sample-kit' }
]

export default function Footer() {
  return (
    <footer className="border-t border-[#202824] bg-[#040605] pt-16 pb-12 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F8BC23]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Signature Brand Statement Banner */}
        <div className="pb-16 mb-16 border-b border-[#202824] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs font-mono font-bold tracking-[0.25em] text-[#F8BC23] uppercase">
              HANNAH PIXELS · DESIGN • PRINT • PACKAGING
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white uppercase leading-[1.1]">
              PRINT THAT SPEAKS. PACKAGING THAT STAYS.
            </h2>
            <p className="text-sm md:text-base text-white/65 font-normal">
              Hannah Pixels — Design • Print • Packaging — Worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
            <a
              href="#quote-builder"
              className="group w-full sm:w-auto text-center pl-8 pr-3 py-3 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-widest hover:bg-[#FFCB4D] transition-all hover:scale-105 active:scale-[0.98] shadow-lg shadow-[#F8BC23]/20 flex items-center justify-center gap-3"
            >
              <span>Request a Quotation</span>
              <span className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200">
                <Icon name="ArrowRightIcon" size={12} />
              </span>
            </a>
            <a
              href={whatsAppUrl('Hello Hannah Pixels, I would like to inquire about print and packaging services.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-6 py-4 rounded-full border border-white/20 hover:border-[#F8BC23]/50 text-white/90 font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <Icon name="MessageCircleIcon" size={15} className="text-[#F8BC23]" />
              <span>WhatsApp Studio</span>
            </a>
          </div>
        </div>

        {/* Navigation & Contact Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#202824]">
          {/* Brand & Atelier Footprint */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#" aria-label="Hannah Pixels homepage" className="inline-block group py-1">
              <AppImage
                src="/hannahpixels.png"
                alt="Hannah Pixels logo"
                width={150}
                height={50}
                className="h-8 md:h-9 w-auto object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm font-normal">
              Hannah Pixels is a print and packaging house creating considered physical experiences for brands across the world. Designed with intention. Made to be remembered.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-white/70">
              <p className="flex items-start gap-2">
                <Icon name="MapPinIcon" size={15} className="text-[#F8BC23] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Serving the UK</strong> — London &amp; nationwide delivery
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Icon name="MapPinIcon" size={15} className="text-[#F8BC23] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Serving the UAE</strong> — Dubai &amp; GCC-wide delivery
                </span>
              </p>
              <p className="flex items-center gap-2 pt-1 text-xs">
                <Icon name="CheckBadgeIcon" size={15} className="text-emerald-400 shrink-0" />
                <span className="text-white/80">FSC® Certified • UK VAT &amp; UAE TRN Invoicing Compliant</span>
              </p>
            </div>
          </div>

          {/* Service Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8BC23]">What We Create</h4>
            <ul className="space-y-2.5">
              {packagingServices.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-white/70 hover:text-[#F8BC23] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F8BC23]/50 group-hover:bg-[#F8BC23] transition-colors" />
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8BC23]">Hannah Pixels</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 hover:text-[#F8BC23] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#93660C]/40 group-hover:bg-[#F8BC23] transition-colors" />
                    <span>{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Atelier Support */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8BC23]">Direct Atelier Advisory</h4>
            <p className="text-sm text-white/70 leading-relaxed font-normal">
              Connect directly with our packaging specialists for material guidance, bespoke dielines, and international delivery.
            </p>

            <div className="space-y-2.5">
              <a
                href={whatsAppUrl("Hello Hannah Pixels team, I'd like to consult on a packaging project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#181A16] border border-[#F8BC23]/30 text-[#F8BC23] hover:bg-[#202824] hover:border-[#F8BC23]/60 text-xs font-bold transition-all shadow-sm"
              >
                <Icon name="MessageCircleIcon" size={16} />
                <span>WhatsApp Atelier Desk</span>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#181A16] border border-white/10 text-white/80 hover:text-white hover:border-[#F8BC23]/40 text-xs font-medium transition-all"
              >
                <Icon name="EnvelopeIcon" size={16} className="text-[#F8BC23]" />
                <span>{CONTACT_EMAIL}</span>
              </a>
            </div>

            <p className="text-[11px] text-white/50 pt-1">
              Atelier Hours: Mon – Sat · 9:00 AM – 7:00 PM (GMT / GST)
            </p>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Hannah Pixels. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-white/60">
            <span>Design</span>
            <span>·</span>
            <span>Print</span>
            <span>·</span>
            <span>Packaging</span>
            <span>·</span>
            <span>Worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

