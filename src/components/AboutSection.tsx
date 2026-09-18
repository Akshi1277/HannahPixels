import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import { motion } from 'framer-motion'

const standards = [
  {
    num: '01',
    title: 'Thoughtful by Design',
    subtitle: 'Structural Intent & Ergonomics',
    body: 'Every fold, closure angle, and unboxing reveal has intentional purpose. We calibrate tactile anticipation into the physical architecture before ink ever touches substrate.',
    craftDetail: 'Micron-calibrated dieline geometry & friction-fit tolerances',
    specs: ['Structural CAD', 'Friction Clasp', 'Tactile Motion'],
    featured: true
  },
  {
    num: '02',
    title: 'Materials That Matter',
    subtitle: 'Curated Substrates',
    body: 'The right substrate transforms how a brand is held and remembered. We curate virgin cotton pulps, textured FSC-certified boards, and eco-conscious luxury stocks.',
    craftDetail: 'FSC® Certified Cotton Pulp & Textured Rigid Greyboard',
    specs: ['350–600 GSM', 'Acid-Free', 'FSC® Certified'],
    featured: false
  },
  {
    num: '03',
    title: 'Precision in Every Detail',
    subtitle: 'Zero-Tolerance Calibration',
    body: 'True luxury lives in invisible tolerances. Flawless 45° corner mitres, micro-registered hot foil stamping, and crisp magnetic snap closures.',
    craftDetail: '±0.2mm registration accuracy & laser-guided steel rule die cutting',
    specs: ['Laser Dielines', '±0.2mm Registration', 'Magnetic Snaps'],
    featured: false
  },
  {
    num: '04',
    title: 'Made to Endure',
    subtitle: 'Keepsake Longevity',
    body: 'We create pieces designed to be preserved, showcased, and treasured on vanity tables and executive desks long after the unboxing moment.',
    craftDetail: 'High-density fiber core with scuff-resistant soft-touch coatings',
    specs: ['Anti-Scuff Matte', 'Reinforced Edges', 'Heirloom Grade'],
    featured: false
  },
  {
    num: '05',
    title: 'Without Borders',
    subtitle: 'Global Atelier Logistics',
    body: 'From single bespoke client prototypes to multi-thousand enterprise rollouts, Hannah Pixels delivers worldwide with white-glove transit packaging.',
    craftDetail: 'Multi-hub production dispatch across London, Dubai & worldwide freight nodes',
    specs: ['Worldwide Air/Sea', 'Customs Cleared', 'White-Glove Pack'],
    featured: false
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#FBF9F4] border-t border-[#E6E0D2] relative overflow-hidden scroll-mt-28" aria-label="Our Vision & Standards">
      {/* Brand Statement / Our Vision */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Authentic Atelier Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] border border-[#E6E0D2] shadow-xl group">
              <AppImage
                src="/images/atelier-craft-emboss.jpg"
                alt="Hannah Pixels artisan holding custom embossed gold foil rigid box"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Floating Atelier Seal */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-xl border border-[#F8BC23]/30 rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#93660C]">Hannah Pixels Atelier</p>
                      <p className="text-base font-extrabold text-[#181A16] tracking-tight mt-0.5">Design • Print • Packaging</p>
                      <p className="text-[11px] text-[#6B6F62] mt-0.5">Delivered Worldwide</p>
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-[#F8BC23]/15 border border-[#F8BC23]/30 flex items-center justify-center shrink-0">
                      <Icon name="SparklesIcon" size={20} className="text-[#93660C]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Vision Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">02</span>
                <span className="w-8 h-px bg-[#93660C]/40" />
                <span className="editorial-tag text-[#93660C]">OUR VISION</span>
              </div>
              <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-[1.15]">
                To Make the Physical World of Brands More Beautiful.
              </h2>
            </div>

            {/* Editorial Paragraphs */}
            <div className="space-y-5 text-[#2D3129] font-normal text-base md:text-lg leading-relaxed">
              <p className="text-xl md:text-2xl text-[#181A16] font-medium leading-snug">
                We believe packaging is more than protection.
              </p>
              <p className="text-lg md:text-xl text-[#3E4237] leading-relaxed">
                It is the first touch. The first impression. The moment a brand becomes tangible.
              </p>
              <p>
                Hannah Pixels was created to bring greater thought, craft and character to the way brands are experienced in the physical world.
              </p>
              <p>
                We work with brands that value detail — creating print and packaging that feels considered, distinctive and made to last.
              </p>
            </div>

            {/* Accent Signature */}
            <div className="pt-4 border-t border-[#E6E0D2] flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F8BC23]" />
              <p className="text-sm font-semibold tracking-wide uppercase text-[#93660C]">
                Made for brands with a point of view.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The 5 Hannah Pixels Standards - Elevated Editorial Atelier Layout */}
      <div id="standards" className="border-t border-[#E6E0D2] bg-[#F4EFE6] py-24 md:py-32 scroll-mt-28 relative">
        {/* Subtle background ambient blur */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F8BC23]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">03</span>
                <span className="w-8 h-px bg-[#93660C]/40" />
                <span className="editorial-tag text-[#93660C]">THE STANDARD</span>
              </div>
              <h3 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
                The Hannah Pixels Standard
              </h3>
            </div>
            <div className="space-y-2 max-w-md">
              <p className="text-base text-[#4A4E43] leading-relaxed font-normal">
                Five non-negotiable principles that guide every piece we design, engineer, and produce.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#93660C] tracking-wide">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#93660C]" />
                <span>CRAFTED TO KEPT STANDARDS · ZERO COMPROMISE</span>
              </div>
            </div>
          </div>

          {/* Asymmetric Editorial Bento Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Feature Anchor Card: Standard 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-12 xl:col-span-5 bg-[#090B0A] text-white p-8 md:p-10 rounded-3xl border border-[#202824] relative overflow-hidden shadow-xl flex flex-col justify-between group hover:border-[#F8BC23]/40 transition-colors"
            >
              {/* Background ambient gold gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#F8BC23]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#F8BC23]/15 transition-all" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl font-bold text-[#F8BC23]">01</span>
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 text-white/90 border border-white/15 px-2.5 py-0.5 rounded-full">
                      Foundation Principle
                    </span>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F8BC23] animate-pulse" />
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-mono tracking-widest text-[#F8BC23] uppercase">
                    {standards[0].subtitle}
                  </p>
                  <h4 className="text-2xl md:text-3xl font-serif font-bold text-white tracking-tight leading-tight">
                    {standards[0].title}
                  </h4>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed font-normal">
                    {standards[0].body}
                  </p>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-6 border-t border-white/15 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#F8BC23]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="SparklesIcon" size={12} className="text-[#F8BC23]" />
                  </div>
                  <p className="text-xs font-mono text-white/70 leading-relaxed">
                    <strong className="text-white/95">Atelier Spec:</strong> {standards[0].craftDetail}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {standards[0].specs.map((spec) => (
                    <span
                      key={spec}
                      className="text-[11px] font-mono tracking-wider text-[#F8BC23] bg-[#F8BC23]/10 border border-[#F8BC23]/20 px-3 py-1 rounded-lg"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Companion Cards: Standards 02 - 05 */}
            <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {standards.slice(1).map((std, idx) => (
                <motion.div
                  key={std.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 rounded-3xl border border-[#E6E0D2] bg-white hover:border-[#93660C]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group relative overflow-hidden"
                >
                  {/* Subtle corner foil badge effect */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F8BC23]/10 to-transparent pointer-events-none rounded-bl-full" />

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-serif font-bold text-[#93660C] group-hover:scale-105 transition-transform">
                        {std.num}
                      </span>
                      <span className="text-[10px] font-mono tracking-wider uppercase text-[#93660C] bg-[#F3EEE3] border border-[#F8BC23]/30 px-2.5 py-0.5 rounded-full">
                        {std.subtitle}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg font-bold tracking-tight text-[#181A16] group-hover:text-[#93660C] transition-colors leading-snug">
                        {std.title}
                      </h4>
                      <p className="text-sm text-[#4A4E43] leading-relaxed font-normal">
                        {std.body}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E6E0D2]/80 space-y-3 relative z-10">
                    <p className="text-[11px] font-mono text-[#6B6F62] leading-snug">
                      <strong className="text-[#181A16]">Craft Note:</strong> {std.craftDetail}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {std.specs.map((spec) => (
                        <span
                          key={spec}
                          className="text-[10px] font-mono text-[#93660C] bg-[#FBF9F4] border border-[#E6E0D2] px-2 py-0.5 rounded-md"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


