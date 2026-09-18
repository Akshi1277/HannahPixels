import Icon from '@/components/ui/AppIcon'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Hannah Pixels is our exclusive packaging atelier for luxury rigid fragrance boxes. Their gold hot foil debossing and precision velvet-flocked inserts exceed the quality standards we demanded for our Dubai launch.',
    name: 'Tariq Al-Mansoor',
    role: 'Creative Director',
    company: 'Oud Royal Parfums',
    location: 'Dubai, UAE',
    industry: 'Niche Perfumery & Fragrances',
    initials: 'TA',
  },
  {
    quote:
      'Finding certified eco-friendly cups with bespoke prints and zero plastic liners was tough until we partnered with Hannah Pixels. Our cafes across London love the durability and crisp print definition.',
    name: 'Oliver Sterling',
    role: 'Co-Founder & Operations',
    company: 'Sterling Coffee Roasters',
    location: 'London, UK',
    industry: 'Specialty Coffee & Hospitality',
    initials: 'OS',
  },
  {
    quote:
      'The book-style rigid boxes for our Ramadan date confectionery collections were breathtaking. The magnetic snap closure, custom partition trays, and satin feel made an immediate impression on our VIP corporate clients.',
    name: 'Noor Al-Hassan',
    role: 'Head of Procurement',
    company: 'Barakah Fine Confectionery',
    location: 'Abu Dhabi, UAE',
    industry: 'Gourmet Dates & Sweets',
    initials: 'NA',
  },
  {
    quote:
      'Their boutique carrier bags with knotted grosgrain handles and hot-stamped copper branding have elevated our retail unboxing experience. The low MOQ allowed us to test two seasonal colorways with zero waste.',
    name: 'Charlotte Wright',
    role: 'Brand Director',
    company: 'Maison Wright',
    location: 'Mayfair, London',
    industry: 'Luxury Fashion & Accessories',
    initials: 'CW',
  },
  {
    quote:
      'Hannah Pixels supplies our waterproof metallic BOPP labels and folding mono cartons. Their prepress team caught a dieline bleed discrepancy before plate-making, saving us critical launch days.',
    name: 'Dr. James MacLeod',
    role: 'Founder',
    company: 'Caledonian Botanics',
    location: 'Edinburgh, UK',
    industry: 'Organic D2C Skincare',
    initials: 'JM',
  },
  {
    quote:
      'Punctual cross-continental logistics and impeccable communication over WhatsApp. They delivered 500 bespoke presentation hampers for our global summit in Dubai well ahead of schedule.',
    name: 'Fatima Al-Nuaimi',
    role: 'Director of Brand Experience',
    company: 'Crestline Global Hospitality',
    location: 'Dubai & London',
    industry: 'Corporate VIP Hospitality',
    initials: 'FA',
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#090B0A] border-t border-[#202824] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141A17] border border-[#C9A050]/30">
              <span className="w-2 h-2 rounded-full bg-[#C9A050]" />
              <span className="label-tag text-[#DFBF75]">Client Perspectives</span>
            </div>
            <h2 className="section-headline text-white text-3xl md:text-5xl font-medium tracking-tight">
              Trusted by Discerning Brands in<br />
              <span className="text-[#DFBF75] font-normal italic">London, Dubai &amp; Beyond.</span>
            </h2>
          </div>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md font-normal">
            Hear from visionary founders, procurement directors, and creative heads who rely on Hannah Pixels for brand-defining packaging.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-[#0F1412] border border-[#202824] hover:border-[#C9A050]/40 transition-all duration-300 flex flex-col justify-between shadow-xl group"
            >
              <div className="space-y-4">
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-[#DFBF75]">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="StarIcon" size={16} variant="solid" />
                  ))}
                </div>

                <p className="text-sm text-white/80 leading-relaxed font-normal italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#202824] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#141A17] border border-[#C9A050]/30 flex items-center justify-center text-xs font-extrabold text-[#DFBF75]">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#DFBF75] transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-white/50">{t.role}, {t.company}</p>
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-[#C9A050] bg-[#141A17] border border-[#264A38] px-2 py-0.5 rounded-full">
                  {t.location}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
