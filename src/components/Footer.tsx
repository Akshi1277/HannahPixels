import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import { whatsAppUrl, CONTACT_EMAIL } from '@/lib/contact'

const packagingServices = [
  { label: 'Luxury Rigid Presentation Boxes', href: '#services' },
  { label: 'Eco-Friendly Food & Beverage', href: '#services' },
  { label: 'Boutique Retail Bags', href: '#services' },
  { label: 'Custom Cartons & Roll Labels', href: '#services' },
  { label: 'Tactile Hot Foil & 3D Embossing', href: '#finishes' },
  { label: 'Sample Swatch Kit', href: '#sample-kit' },
]

const companyLinks = [
  { label: 'About Hannah Pixels', href: '#about' },
  { label: 'Tactile Finishes Showcase', href: '#finishes' },
  { label: 'UK & UAE Logistics', href: '#logistics' },
  { label: 'Get a Quote', href: '#contact' },
  { label: 'Production & MOQ FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#202824] bg-[#040605] pt-16 pb-12 text-white relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F8BC23]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              Hannah Pixels is a direct packaging manufacturer, specializing in rigid presentation boxes, hot foil finishes, eco-certified food &amp; drink containers, and boutique retail packaging — serving the UK, UAE, and beyond.
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
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8BC23]">Packaging</h4>
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
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8BC23]">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 hover:text-[#F8BC23] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A2F] group-hover:bg-[#F8BC23] transition-colors" />
                    <span>{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Atelier Support */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F8BC23]">Direct Packaging Advisor</h4>
            <p className="text-sm text-white/70 leading-relaxed font-normal">
              Connect with our structural packaging engineers for custom dielines, foil swatches, and international freight coordination.
            </p>

            <div className="space-y-2.5">
              <a
                href={whatsAppUrl("Hello Hannah Pixels team, I'd like to request a bespoke packaging quote and dieline.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/20 text-xs font-bold transition-all"
              >
                <Icon name="MessageCircleIcon" size={16} />
                <span>WhatsApp Packaging Advisor</span>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-[#141A17] border border-[#264A38]/50 text-white/80 hover:text-white hover:border-[#F8BC23]/40 text-xs font-medium transition-all"
              >
                <Icon name="EnvelopeIcon" size={16} className="text-[#F8BC23]" />
                <span>{CONTACT_EMAIL}</span>
              </a>
            </div>

            <p className="text-[11px] text-white/50 pt-1">
              Business Hours: Mon – Sat · 9:00 AM – 7:00 PM (GMT / GST)
            </p>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Hannah Pixels. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-white/60">
            <span>UK</span>
            <span>·</span>
            <span>UAE</span>
            <span>·</span>
            <span>International Door-to-Door Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
