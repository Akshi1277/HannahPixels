import Icon from '@/components/ui/AppIcon'
import { whatsAppUrl } from '@/lib/contact'

export default function LogisticsSection() {
  return (
    <section id="logistics" className="py-24 md:py-32 bg-[#FBF9F4] border-t border-[#E6E0D2] relative overflow-hidden scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">05</span>
              <span className="w-8 h-px bg-[#93660C]/40" />
              <span className="editorial-tag text-[#93660C]">INTERNATIONAL FOOTPRINT</span>
            </div>
            <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
              Cross-Continental Reach. UK &amp; UAE Freight.
            </h2>
          </div>
          <p className="text-[#4A4E43] text-base md:text-lg leading-relaxed max-w-md font-normal">
            Serving both markets with localized client advisory, rapid dieline approvals, and seamless door-to-door freight.
          </p>
        </div>

        {/* Dual Hub Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* London / UK Hub */}
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#E6E0D2] hover:border-[#F8BC23]/40 transition-all duration-300 relative overflow-hidden group shadow-md">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#F8BC23]/10 rounded-bl-full pointer-events-none" />
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <Icon name="GlobeAltIcon" size={22} className="text-[#93660C]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#93660C] px-3 py-1 rounded-full bg-white border border-[#F8BC23]/30">
                  UK &amp; European Distribution
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#181A16]">United Kingdom Operations</h3>
                <p className="text-xs text-[#93660C] font-semibold mt-1">Nationwide Delivery &amp; Direct Support</p>
              </div>

              <p className="text-sm text-[#4A4E43] leading-relaxed font-normal">
                Direct mainland delivery covering London, Manchester, Birmingham, Edinburgh, and across the British Isles. Serving sustainable coffee roasters, gourmet food brands, and luxury retail boutiques.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#E6E0D2] text-xs text-[#4A4E43]">
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size={14} className="text-[#3B6A3E]" />
                  <span>Plastic Packaging Tax (PPT) compliant substrates</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size={14} className="text-[#3B6A3E]" />
                  <span>Next-day digital artwork &amp; dieline verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size={14} className="text-[#3B6A3E]" />
                  <span>Full UK VAT invoicing &amp; DPD / Palletways freight</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dubai / UAE Hub */}
          <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#E6E0D2] hover:border-[#F8BC23]/40 transition-all duration-300 relative overflow-hidden group shadow-md">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#538B56]/10 rounded-bl-full pointer-events-none" />
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <Icon name="GlobeAltIcon" size={22} className="text-[#93660C]" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#93660C] px-3 py-1 rounded-full bg-white border border-[#F8BC23]/30">
                  UAE &amp; GCC Regional Hub
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-[#181A16]">Dubai &amp; GCC Operations</h3>
                <p className="text-xs text-[#93660C] font-semibold mt-1">GCC-Wide Delivery &amp; Direct Support</p>
              </div>

              <p className="text-sm text-[#4A4E43] leading-relaxed font-normal">
                Serving Dubai, Abu Dhabi, Sharjah, and cross-border GCC export to Saudi Arabia (KSA), Qatar, and Kuwait. Specializing in luxury rigid perfume boxes, dates gifting, and VIP hospitality packaging.
              </p>

              <div className="space-y-2 pt-2 border-t border-[#E6E0D2] text-xs text-[#4A4E43]">
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size={14} className="text-[#3B6A3E]" />
                  <span>Dubai Municipality &amp; Food Safety Grade materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size={14} className="text-[#3B6A3E]" />
                  <span>Expertise in Oud, Perfume &amp; Date confectionery packaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size={14} className="text-[#3B6A3E]" />
                  <span>Direct WhatsApp B2B coordination &amp; GCC customs clearance</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#181A16] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white">Need multi-location pallet distribution or customs assistance?</h4>
            <p className="text-xs text-white/60">Our freight team coordinates export paperwork, consolidated shipments, and scheduled replenishment.</p>
          </div>
          <a
            href={whatsAppUrl("Hello Hannah Pixels, I'd like to inquire about international packaging freight and orders.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#F8BC23] text-[#181A16] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all shrink-0 flex items-center gap-2"
          >
            <span>Consult Logistics Desk</span>
            <Icon name="ArrowRightIcon" size={12} />
          </a>
        </div>
      </div>
    </section>
  )
}
