import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import { motion } from 'framer-motion'

const standards = [
  {
    num: '01',
    title: 'THOUGHTFUL BY DESIGN.',
    body: 'Every decision has a purpose — from the structure of a box to the feel of the paper.'
  },
  {
    num: '02',
    title: 'MATERIALS THAT MATTER.',
    body: 'The right material can transform how a product is seen, held and remembered.'
  },
  {
    num: '03',
    title: 'PRECISION IN EVERY DETAIL.',
    body: 'Good packaging should feel effortless. That comes from getting the details right.'
  },
  {
    num: '04',
    title: 'MADE TO LAST.',
    body: 'We create pieces designed to be experienced, kept and remembered.'
  },
  {
    num: '05',
    title: 'WITHOUT BORDERS.',
    body: 'From a single bespoke project to larger production runs, Hannah Pixels works with brands across markets and delivers worldwide.'
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

      {/* The 5 Hannah Pixels Standards */}
      <div id="standards" className="border-t border-[#E6E0D2] bg-[#F3EEE3] py-20 md:py-28 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">03</span>
                <span className="w-8 h-px bg-[#93660C]/40" />
                <span className="editorial-tag text-[#93660C]">THE STANDARD</span>
              </div>
              <h3 className="section-headline text-[#181A16] text-2xl md:text-4xl font-medium tracking-tight">
                The Hannah Pixels Standard
              </h3>
            </div>
            <p className="text-sm text-[#4A4E43] max-w-md leading-relaxed font-normal">
              Five principles that guide every piece we design, refine and produce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((std, idx) => (
              <div
                key={std.num}
                className={`p-8 rounded-2xl border border-[#E6E0D2] bg-white hover:border-[#F8BC23]/50 transition-all duration-300 space-y-4 group relative overflow-hidden shadow-sm hover:shadow-lg ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-bold text-[#93660C] group-hover:scale-110 transition-transform">
                    {std.num}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#F8BC23]/60 group-hover:bg-[#F8BC23] transition-colors" />
                </div>

                <h4 className="text-base font-bold tracking-wider uppercase text-[#181A16] group-hover:text-[#93660C] transition-colors leading-snug">
                  {std.title}
                </h4>

                <p className="text-sm text-[#4A4E43] leading-relaxed font-normal">
                  {std.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


