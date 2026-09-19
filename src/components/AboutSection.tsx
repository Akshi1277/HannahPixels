import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import { motion } from 'framer-motion'

const standards = [
  {
    num: '01',
    title: 'Thoughtful by Design.',
    subtitle: 'Where Ideas Take Form',
    body: 'Every decision has a purpose — from the structure of a box to the feel of the paper.',
    noteLabel: 'The Purpose',
    craftDetail: 'Ideas become structures, materials, finishes and considered details.',
    specs: ['Thoughtful Design', 'Exceptional Materials', 'Precise Production'],
    featured: true
  },
  {
    num: '02',
    title: 'Materials That Matter.',
    subtitle: 'Exceptional Materials',
    body: 'The right material can transform how a product is seen, held and remembered.',
    noteLabel: 'The First Touch',
    craftDetail: 'The first touch. The first impression. The moment a brand becomes tangible.',
    specs: ['Speciality Papers', 'Textures & Boards', 'Considered Finishes'],
    featured: false
  },
  {
    num: '03',
    title: 'Precision in Every Detail.',
    subtitle: 'Precise Production',
    body: 'Good packaging should feel effortless. That comes from getting the details right.',
    noteLabel: 'The Craft',
    craftDetail: 'Every piece is produced with precision and close attention to detail.',
    specs: ['Embossing & Foiling', 'Speciality Papers', 'Bespoke Constructions'],
    featured: false
  },
  {
    num: '04',
    title: 'Made to Last.',
    subtitle: 'Distinctive & Lasting',
    body: 'We create pieces designed to be experienced, kept and remembered.',
    noteLabel: 'The Vision',
    craftDetail: 'Print created for stories, ideas and objects worth keeping.',
    specs: ['Considered Craft', 'Enduring Character', 'Objects Worth Keeping'],
    featured: false
  },
  {
    num: '05',
    title: 'Without Borders.',
    subtitle: 'Delivered Worldwide',
    body: 'From a single bespoke project to larger production runs, Hannah Pixels works with brands across markets and delivers worldwide.',
    noteLabel: 'The Reach',
    craftDetail: 'Creating considered physical experiences for brands across the world.',
    specs: ['Bespoke Projects', 'Production Runs', 'Delivered Worldwide'],
    featured: false
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#FBF9F4] border-t border-[#E6E0D2] relative overflow-hidden scroll-mt-28" aria-label="Our Vision & Standards">
      {/* Brand Statement / Our Vision */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Authentic Atelier Master Image with Double-Bezel Hardware Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-[2.25rem] p-1.5 bg-[#181A16]/5 ring-1 ring-[#93660C]/15 shadow-sm hover:shadow-2xl hover:ring-[#93660C]/35 transition-all duration-500">
              <div className="rounded-[calc(2.25rem-0.375rem)] overflow-hidden aspect-[4/5] relative border border-[#E6E0D2] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] group">
                <AppImage
                  src="/images/atelier-vision-master.jpg"
                  alt="Hannah Pixels master artisan inspecting a custom gold debossed rigid presentation box in the atelier workshop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />

                {/* Gentle ambient lighting scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                {/* Subtle editorial watermark / caption at bottom left */}
                <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-white/90">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F8BC23] font-semibold">
                      Hannah Pixels Atelier
                    </p>
                    <p className="text-xs font-serif italic text-white/95">
                      Precision handcraft &amp; structural finishing
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-white/70 tracking-wider uppercase bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                    London &amp; Worldwide
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Vision Narrative */}
          <div className="lg:col-span-7 space-y-7">
            {/* Eyebrow & Headline */}
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

            {/* Featured Pull Quote - The Heart of the Vision */}
            <div className="p-6 md:p-8 rounded-2xl bg-white border border-[#E6E0D2] shadow-xs space-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F8BC23]/10 to-transparent rounded-bl-full pointer-events-none" />
              
              <p className="text-xs font-mono uppercase tracking-widest text-[#93660C] font-bold">
                The Philosophy
              </p>
              <blockquote className="text-xl md:text-2xl font-serif text-[#181A16] leading-snug">
                “We believe packaging is more than protection. It is the first touch. The first impression. The moment a brand becomes tangible.”
              </blockquote>
            </div>

            {/* Editorial Paragraphs */}
            <div className="space-y-4 text-[#3E4237] text-base md:text-lg leading-relaxed font-normal">
              <p>
                Hannah Pixels was created to bring greater thought, craft and character to the way brands are experienced in the physical world.
              </p>
              <p>
                We work with brands that value detail — creating print and packaging that feels considered, distinctive and made to last.
              </p>
            </div>

            {/* Accent Signature */}
            <div className="pt-5 border-t border-[#E6E0D2] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#93660C]" />
              <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-[#93660C] font-bold">
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
                <span className="editorial-tag text-[#93660C]">THE HANNAH PIXELS STANDARD</span>
              </div>
              <h3 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight text-balance">
                The Hannah Pixels Standard
              </h3>
            </div>
            <div className="space-y-2 max-w-md">
              <p className="text-base text-[#4A4E43] leading-relaxed font-normal">
                We bring together thoughtful design, exceptional materials and precise production.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono text-[#93660C] tracking-wide">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#93660C]" />
                <span>PRINT THAT SPEAKS · PACKAGING THAT STAYS</span>
              </div>
            </div>
          </div>

          {/* Asymmetric Editorial Bento Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Feature Anchor Card: Standard 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-12 xl:col-span-5 bg-[#090B0A] text-white p-8 md:p-10 rounded-[2.25rem] border border-[#202824] relative overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-[#F8BC23]/40 transition-colors"
            >
              {/* Background ambient gold gradient */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#F8BC23]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#F8BC23]/15 transition-all" />

              <div className="relative z-10 space-y-6">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-4xl font-bold text-[#F8BC23]">01</span>
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-white/10 text-white/90 border border-white/15 px-3 py-1 rounded-full">
                      Where Ideas Take Form
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#F8BC23] animate-pulse" />
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-mono tracking-widest text-[#F8BC23] uppercase">
                    {standards[0].subtitle}
                  </p>
                  <h4 className="text-3xl sm:text-4xl font-serif font-medium text-white tracking-tight leading-[1.12]">
                    Thoughtful by{' '}
                    <span className="italic font-normal text-[#F8BC23]">Design.</span>
                  </h4>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed font-normal">
                    {standards[0].body}
                  </p>
                </div>

                {/* Editorial Brand Inset (Pure authentic brand copy) */}
                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm space-y-4 my-2 relative overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-[#F8BC23] uppercase">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F8BC23]" />
                      Hannah Pixels
                    </span>
                    <span className="text-white/40">Worldwide</span>
                  </div>

                  <blockquote className="font-serif italic text-xl sm:text-2xl text-white/95 leading-snug">
                    “Designed with intention. Made to be remembered.”
                  </blockquote>

                  {/* 3 Core Pillars from User's text */}
                  <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center">
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <p className="text-xs font-serif font-bold text-[#F8BC23]">Design</p>
                      <p className="text-[10px] text-white/60 mt-0.5">Thoughtful</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <p className="text-xs font-serif font-bold text-white">Materials</p>
                      <p className="text-[10px] text-white/60 mt-0.5">Exceptional</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-black/40 border border-white/5">
                      <p className="text-xs font-serif font-bold text-[#F8BC23]">Production</p>
                      <p className="text-[10px] text-white/60 mt-0.5">Precise</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Detail Note & Tags */}
              <div className="relative z-10 pt-6 mt-4 border-t border-white/15 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#F8BC23]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon name="SparklesIcon" size={12} className="text-[#F8BC23]" />
                  </div>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    <strong className="text-white/95 font-medium">{standards[0].noteLabel}:</strong> {standards[0].craftDetail}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
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

            {/* Companion Cards: Standards 02 - 05 with Double-Bezel Framing */}
            <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {standards.slice(1).map((std, idx) => (
                <motion.div
                  key={std.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="rounded-[2.25rem] p-1.5 bg-[#181A16]/5 ring-1 ring-[#93660C]/10 shadow-sm hover:shadow-xl hover:ring-[#93660C]/25 transition-all duration-500 h-full flex flex-col"
                >
                  <div className="rounded-[calc(2.25rem-0.375rem)] bg-white p-7 md:p-8 border border-[#E6E0D2] flex flex-col justify-between h-full relative overflow-hidden group shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                    {/* Subtle corner foil badge effect */}
                    <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#F8BC23]/15 via-[#F8BC23]/5 to-transparent pointer-events-none rounded-bl-full group-hover:scale-110 transition-transform duration-500" />

                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-serif font-bold text-[#93660C] group-hover:scale-105 transition-transform">
                          {std.num}
                        </span>
                        <span className="text-[10px] font-mono tracking-wider uppercase text-[#93660C] bg-[#F3EEE3] border border-[#F8BC23]/35 px-3 py-1 rounded-full">
                          {std.subtitle}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#181A16] group-hover:text-[#93660C] transition-colors leading-snug">
                          {std.title}
                        </h4>
                        <p className="text-sm text-[#4A4E43] leading-relaxed font-normal">
                          {std.body}
                        </p>
                      </div>
                    </div>

                    <div className="pt-5 mt-6 border-t border-[#E6E0D2]/80 space-y-3 relative z-10">
                      <p className="text-[11px] font-mono text-[#6B6F62] leading-snug">
                        <strong className="text-[#181A16] font-medium">{std.noteLabel}:</strong> {std.craftDetail}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {std.specs.map((spec) => (
                          <span
                            key={spec}
                            className="text-[10px] font-mono text-[#93660C] bg-[#FBF9F4] border border-[#E6E0D2] px-2.5 py-0.5 rounded-md"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
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


