import { useState } from 'react'
import Icon from '@/components/ui/AppIcon'
import { motion, AnimatePresence } from 'framer-motion'

const finishes = [
  {
    id: 'foil',
    title: 'Metallic Hot Foil Stamping',
    badge: 'Reflective Finish',
    description: 'Precision heated brass dies transfer metallic pigments into deep fibers of textured board, producing a radiant, crisp specular reflection that catches natural light at every angle.',
    palette: [
      { name: 'Crown Champagne Gold', bg: 'linear-gradient(135deg, #F9E7B9 0%, #F8BC23 50%, #B28834 100%)', border: '#F8BC23' },
      { name: 'Imperial Rose Gold', bg: 'linear-gradient(135deg, #FAD0C4 0%, #E89E90 50%, #B86756 100%)', border: '#E89E90' },
      { name: 'Architectural Matte Silver', bg: 'linear-gradient(135deg, #FFFFFF 0%, #D4D4D8 50%, #8E8E93 100%)', border: '#D4D4D8' },
      { name: 'Burnished Copper Bronze', bg: 'linear-gradient(135deg, #E6A070 0%, #C46D3B 50%, #803D16 100%)', border: '#C46D3B' }
    ],
    substratePairing: '350–600 GSM Uncoated Cotton Paper & 1800 GSM Rigid Greyboard',
    idealFor: 'Perfumery boxes, luxury gifting cases, and boutique shopping bags.',
    tactileFeel: 'Crisp, micro-indented metallic edges with mirror-grade light catch.'
  },
  {
    id: 'emboss',
    title: 'Multi-Level 3D Sculpted Emboss & Deboss',
    badge: 'Tactile Relief',
    description: 'Crisp male and female brass dies sculpt paper fibers to elevate or depress typography and family crests, creating dramatic physical light and shadow play you can feel with your fingertips.',
    palette: [
      { name: 'Blind Deboss (No Foil/Ink)', bg: 'linear-gradient(135deg, #3A413C 0%, #20241F 100%)', border: '#5A655D' },
      { name: 'Registered Foil & Emboss', bg: 'linear-gradient(135deg, #F8BC23 0%, #20241F 70%)', border: '#F8BC23' },
      { name: 'Micro-Chiseled Texture', bg: 'linear-gradient(135deg, #4E5850 0%, #262B27 100%)', border: '#6B776D' }
    ],
    substratePairing: 'Heavyweight Virgin Kraft, Colorplan FSC Boards & Coated Art Stocks',
    idealFor: 'Boutique lookbooks, emblem seals, and fragrance presentation sleeves.',
    tactileFeel: 'Deep dimensional sculpted relief with perceptible shadow depth.'
  },
  {
    id: 'spot-uv',
    title: 'Soft-Touch Velvet & Raised 3D Spot UV',
    badge: 'Contrasting Surface',
    description: 'Ultra-matte peach-skin velvet lamination paired with high-build liquid clear polymer cured under ultraviolet lamps. The visual and haptic contrast between velvety matte and glass-like gloss creates instant tactile intrigue.',
    palette: [
      { name: 'High-Build Raised 3D Gloss', bg: 'linear-gradient(135deg, #5C7264 0%, #222923 100%)', border: '#7C9585' },
      { name: 'Peach-Skin Velvet Matte', bg: 'linear-gradient(135deg, #3A443E 0%, #24291F 100%)', border: '#525E54' },
      { name: 'Textured Drip-Off Varnish', bg: 'linear-gradient(135deg, #4B5A50 0%, #262E28 100%)', border: '#68796D' }
    ],
    substratePairing: '350–450 GSM Mono Cartons & Laminated Rigid Box Wraps',
    idealFor: 'Gourmet confectionery, artisan coffee bean pouches, and luxury cosmetics.',
    tactileFeel: 'Silky smooth velvet backdrop interrupted by high-gloss glass-like accents.'
  },
  {
    id: 'inserts',
    title: 'Bespoke Laser-Cut Foam & Velvet Inlays',
    badge: 'Cushioned Fit',
    description: 'Computer-routed high-density EVA foam and thermoformed trays wrapped in real Italian velvet or brushed satin. Engineered down to 0.5mm precision to securely cradle heavy glass flacons, porcelain jars, or watches during transit.',
    palette: [
      { name: 'Italian Black Velvet Flocking', bg: 'linear-gradient(135deg, #3A3C3A 0%, #17191A 100%)', border: '#565A56' },
      { name: 'High-Density Non-Dusting EVA', bg: 'linear-gradient(135deg, #464F49 0%, #21261F 100%)', border: '#616D63' },
      { name: 'Compostable Molded Paper Pulp', bg: 'linear-gradient(135deg, #8A7B68 0%, #5E5345 100%)', border: '#9E8D77' }
    ],
    substratePairing: 'Laser-Cut to exact CAD product drawings and 3D sample scans',
    idealFor: 'Fragrance flacons, crystal bottles, jewelry, and VIP gifting.',
    tactileFeel: 'Precision friction fit with plush, protective cushioning.'
  }
]

export default function FinishesSection() {
  const [selectedFinish, setSelectedFinish] = useState(finishes[0].id)
  const current = finishes.find(f => f.id === selectedFinish) || finishes[0]

  return (
    <section id="finishes" className="py-24 md:py-32 bg-[#F3EEE3] border-t border-[#E6E0D2] relative overflow-hidden scroll-mt-28" aria-label="Tactile Finishes Studio">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">05</span>
              <span className="w-8 h-px bg-[#93660C]/40" />
              <span className="editorial-tag text-[#93660C]">FINISHES &amp; CRAFT</span>
            </div>
            <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
              Specialist Foil, Embossing &amp; Surface Treatments
            </h2>
            <p className="text-[#4A4E43] text-base md:text-lg leading-relaxed font-normal">
              Packaging is experienced through touch before it is opened. Explore precision finishing techniques engineered with in-house tooling dies.
            </p>
          </div>

          <div className="text-xs text-[#6B6F62] border-l border-[#F8BC23]/40 pl-4 py-1">
            <span className="text-[#93660C] font-bold block mb-0.5">Tactile Proofing</span>
            <span>All finishes available in physical swatch kit</span>
          </div>
        </div>

        {/* Interactive Finishes Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Navigation Column */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {finishes.map((f) => {
              const active = f.id === selectedFinish
              return (
                <button
                  key={f.id}
                  onClick={() => setSelectedFinish(f.id)}
                  className={`text-left p-6 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                    active
                      ? 'bg-white border-[#F8BC23] shadow-lg shadow-[#F8BC23]/15'
                      : 'bg-white/60 border-[#E6E0D2] hover:border-[#F8BC23]/40 hover:bg-white'
                  }`}
                >
                  <div className="space-y-1.5">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      active ? 'bg-[#F8BC23] text-[#181A16]' : 'bg-[#F3EEE3] text-[#6B6F62]'
                    }`}>
                      {f.badge}
                    </span>
                    <h3 className={`text-lg font-bold transition-colors ${active ? 'text-[#181A16]' : 'text-[#4A4E43]'}`}>
                      {f.title}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    active ? 'bg-[#F8BC23] text-[#181A16]' : 'bg-[#F3EEE3] text-[#8A8E80]'
                  }`}>
                    <Icon name="ArrowRightIcon" size={14} />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Details Column */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="h-full bg-white border border-[#E6E0D2] rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[#F8BC23]/15 to-transparent pointer-events-none rounded-bl-full" />

                <div className="space-y-8 relative z-10">
                  <div className="space-y-3">
                    <span className="text-xs font-bold text-[#93660C] tracking-widest uppercase">
                      {current.badge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#181A16] tracking-tight">
                      {current.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#4A4E43] leading-relaxed pt-1 font-normal">
                      {current.description}
                    </p>
                  </div>

                  {/* Tactile Material Swatch Display */}
                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-bold text-[#181A16] tracking-wider uppercase">
                      Tactile Shade &amp; Substrate Options:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {current.palette.map((p) => (
                        <div
                          key={p.name}
                          className="flex items-center gap-3 p-3 rounded-xl bg-[#F3EEE3] border border-[#E6E0D2] text-xs text-[#181A16]"
                        >
                          <div
                            className="w-7 h-7 rounded-lg shrink-0 shadow-md border"
                            style={{ background: p.bg, borderColor: p.border }}
                          />
                          <span className="font-semibold">{p.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Substrate & Feel Specs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-4 rounded-xl bg-[#F3EEE3] border border-[#538B56]/25 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#3B6A3E]">Substrate Weight</span>
                      <p className="text-xs text-[#4A4E43]">{current.substratePairing}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F3EEE3] border border-[#538B56]/25 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#3B6A3E]">Haptic Feel</span>
                      <p className="text-xs text-[#4A4E43]">{current.tactileFeel}</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-8 mt-8 border-t border-[#E6E0D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                  <a
                    href="#sample-kit"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#93660C] hover:text-[#181A16] transition-colors"
                  >
                    <span>Order Physical Swatch in Sample Box</span>
                    <Icon name="ArrowRightIcon" size={12} />
                  </a>

                  <a
                    href="#quote-builder"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#F8BC23] text-[#181A16] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all shadow-md"
                  >
                    <span>Apply Finish to Custom Order</span>
                    <Icon name="ArrowRightIcon" size={12} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
