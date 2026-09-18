import { useRef } from 'react'
import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

const standardPillars = [
  {
    num: '01',
    title: 'Direct Manufacturing',
    tag: 'Zero Broker Margin',
    body: 'We own and operate our precision die-cutting, foil stamping, and case-making lines. You collaborate directly with packaging engineers, cutting out trading agents and broker markups.'
  },
  {
    num: '02',
    title: 'Certified FSC® Material Integrity',
    tag: 'Sustainable Sourcing',
    body: 'From recycled greyboard to virgin kraft, every substrate is sustainably harvested. Our food-grade packaging uses plastic-free aqueous barriers fully exempt from the UK Plastic Packaging Tax.'
  },
  {
    num: '03',
    title: 'Low MOQ from 100 Units',
    tag: 'Agile Procurement',
    body: 'Launch new lines, seasonal drops, or limited-run packaging without tying up capital in 5,000-unit minimums. We scale from 100 units up to full commercial volume.'
  },
  {
    num: '04',
    title: 'UK & UAE Logistics',
    tag: 'Door-to-Door Delivery',
    body: 'Serving clients across the United Kingdom and the UAE with unified cross-border clearance, full UK VAT invoicing, and UAE TRN compliance.'
  }
]

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"]
  })

  const text = "Hannah Pixels is a packaging manufacturer specializing in bespoke rigid boxes, certified eco food and drink disposables, boutique bags, and precision print finishes. From initial structural CAD dielines to master assembly, our focus is tactile quality, zero middleman markups, and punctual delivery."
  const words = text.split(" ")

  return (
    <section id="about" className="bg-[#FBF9F4] border-t border-[#E6E0D2] relative overflow-hidden scroll-mt-28" aria-label="About Hannah Pixels">
      {/* Brand Statement */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Authentic Artisan Image */}
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Floating Hallmark Seal */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-xl border border-[#F8BC23]/30 rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-extrabold text-[#181A16] tracking-tight">100 Pcs</p>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#93660C] mt-0.5">Starting Minimum Order</p>
                      <p className="text-[11px] text-[#6B6F62] mt-0.5">Serving the UK &amp; UAE</p>
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-[#F8BC23]/15 border border-[#F8BC23]/30 flex items-center justify-center shrink-0">
                      <Icon name="WrenchScrewdriverIcon" size={20} className="text-[#93660C]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F8BC23]/40">
                <span className="w-2 h-2 rounded-full bg-[#F8BC23]" />
                <span className="label-tag text-[#93660C] text-[11px]">About Hannah Pixels</span>
              </div>
              <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
                Architectural Packaging.<br />
                <span className="text-[#93660C] font-normal italic">Precision Manufacturing.</span>
              </h2>
            </div>

            {/* Kinetic Text Scrub */}
            <div ref={containerRef} className="flex flex-wrap gap-x-2 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed max-w-xl">
              {words.map((word, i) => {
                const start = i / words.length
                const end = start + (1 / words.length)
                return (
                  <WordSpan
                    key={i}
                    word={word}
                    progress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                )
              })}
            </div>

            {/* Key Metrics */}
            <div className="pt-6 border-t border-[#E6E0D2] grid grid-cols-3 gap-6">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#181A16]">Direct</p>
                <p className="text-xs text-[#93660C] font-semibold mt-1">Factory Manufacturing</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#181A16]">24–48h</p>
                <p className="text-xs text-[#93660C] font-semibold mt-1">CAD Digital Proofs</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#181A16]">100 Pcs</p>
                <p className="text-xs text-[#93660C] font-semibold mt-1">Starting MOQ</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The 4-Pillar Standard */}
      <div className="border-t border-[#E6E0D2] bg-[#F3EEE3] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#93660C]">The Quality Benchmark</span>
              <h3 className="section-headline text-[#181A16] text-2xl md:text-4xl font-medium tracking-tight">
                The Hannah Pixels Standard
              </h3>
            </div>
            <p className="text-sm text-[#4A4E43] max-w-md leading-relaxed font-normal">
              We eliminate traditional agency layers and trading markups, giving you direct access to precision packaging manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standardPillars.map((pillar) => (
              <div
                key={pillar.num}
                className="p-8 rounded-2xl border border-[#E6E0D2] bg-white hover:border-[#F8BC23]/50 transition-all duration-300 space-y-4 group relative overflow-hidden shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-bold text-[#93660C] group-hover:scale-110 transition-transform">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#3B6A3E] bg-[#F3EEE3] border border-[#538B56]/30 px-2.5 py-0.5 rounded-full">
                    {pillar.tag}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-[#181A16] group-hover:text-[#93660C] transition-colors leading-snug">
                  {pillar.title}
                </h4>

                <p className="text-sm text-[#4A4E43] leading-relaxed font-normal">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function WordSpan({
  word,
  progress,
  start,
  end
}: {
  word: string
  progress: MotionValue<number>
  start: number
  end: number
}) {
  const opacity = useTransform(progress, [start, end], [0.35, 1])
  const color = useTransform(progress, [start, end], ["#C6C1B2", "#181A16"])

  return (
    <motion.span style={{ opacity, color }} className="inline-block transition-colors">
      {word}
    </motion.span>
  )
}
