import { useState } from 'react'
import Icon from '@/components/ui/AppIcon'
import { motion, AnimatePresence } from 'framer-motion'

interface FinishItem {
  id: string
  title: string
  badge: string
  subtitle: string
  description: string
  image: string
  palette: { name: string; descriptor: string; bg: string; border: string }[]
  substratePairing: string
  idealFor: string
  tactileFeel: string
}

const finishes: FinishItem[] = [
  {
    id: 'foil',
    title: 'Hot Foil Stamping',
    badge: 'Reflective Detail',
    subtitle: 'Radiant metallic foil on textured boards',
    description: 'Heated brass tooling transfers fine metallic pigments directly into the fibers of heavy paper and rigid greyboard. Reflects natural ambient light with crisp, razor-sharp edge definition.',
    image: '/images/finish-gold-foil.jpg',
    palette: [
      { name: 'Crown Champagne Gold', descriptor: 'Lustrous satin gold', bg: 'linear-gradient(135deg, #F9E7B9 0%, #F8BC23 50%, #B28834 100%)', border: '#D89E1E' },
      { name: 'Architectural Matte Silver', descriptor: 'Cool muted platinum', bg: 'linear-gradient(135deg, #FFFFFF 0%, #D4D4D8 50%, #8E8E93 100%)', border: '#C0C0C4' },
      { name: 'Imperial Rose Gold', descriptor: 'Warm blush copper', bg: 'linear-gradient(135deg, #FAD0C4 0%, #E89E90 50%, #B86756 100%)', border: '#D48677' },
      { name: 'Burnished Bronze', descriptor: 'Deep antique sheen', bg: 'linear-gradient(135deg, #E6A070 0%, #C46D3B 50%, #803D16 100%)', border: '#A65628' }
    ],
    substratePairing: '350–600 GSM Cotton Paper, Uncoated Linen & Rigid Greyboard',
    idealFor: 'Perfumery cartons, luxury rigid gift boxes, boutique shopping bags',
    tactileFeel: 'Micro-indented metallic edges with mirror-grade light catch'
  },
  {
    id: 'emboss',
    title: 'Sculpted Emboss & Deboss',
    badge: 'Dimensional Relief',
    subtitle: 'Sculptural relief carved into raw fibers',
    description: 'Crisp matched brass dies sculpt paper fibers to elevate or depress typography and emblems. Creates dramatic physical light and shadow play you can feel across your fingertips.',
    image: '/images/finish-blind-deboss.jpg',
    palette: [
      { name: 'Deep Blind Deboss', descriptor: 'Pure shadow relief (no ink)', bg: 'linear-gradient(135deg, #F5EFE4 0%, #DDD6C6 100%)', border: '#C4BCA8' },
      { name: 'Registered Foil & Emboss', descriptor: 'Gold foil elevated in 3D', bg: 'linear-gradient(135deg, #F8BC23 0%, #8A6414 100%)', border: '#B28834' },
      { name: 'Multi-Level Sculpted Relief', descriptor: 'Graduated contour levels', bg: 'linear-gradient(135deg, #EBE3D3 0%, #BAAE96 100%)', border: '#A89B82' },
      { name: 'Micro-Chiseled Crest', descriptor: 'Fine precision bevel lines', bg: 'linear-gradient(135deg, #FAF7F0 0%, #CCC4B2 100%)', border: '#B8AF9B' }
    ],
    substratePairing: 'Heavyweight Virgin Cotton, Colorplan FSC Boards & Raw Pulp Stock',
    idealFor: 'Emblem seals, luxury lookbook covers, fragrance sleeves',
    tactileFeel: 'Deep dimensional sculpted relief with perceptible shadow depth'
  },
  {
    id: 'speciality-papers',
    title: 'Curated Speciality Papers & Textures',
    badge: 'Tactile Substrates',
    subtitle: 'Tactile cotton, laid & uncoated papers',
    description: 'A curated library of tactile surfaces: deckle-edged virgin cotton, Japanese laid papers, ribbed kraft, and fibrous uncoated stocks. We know precisely how each substrate responds to print, fold, foil, and finish.',
    image: '/images/finish-speciality-papers.jpg',
    palette: [
      { name: 'Deckle-Edge Cotton', descriptor: 'Raw, fibrous deckled pulp', bg: 'linear-gradient(135deg, #FDFBF7 0%, #EFE9DC 100%)', border: '#DCD4C4' },
      { name: 'Japanese Ribbed Laid', descriptor: 'Fine horizontal tactile ribs', bg: 'linear-gradient(135deg, #F5F0E4 0%, #DDD5C2 100%)', border: '#C5BBA6' },
      { name: 'Warm Charcoal Uncoated', descriptor: 'Deep dyed matte texture', bg: 'linear-gradient(135deg, #2A2E2A 0%, #171916 100%)', border: '#3F443E' },
      { name: 'Gold-Flecked Ivory Board', descriptor: 'Warm ivory with mineral specks', bg: 'linear-gradient(135deg, #FFFDF8 0%, #EBE0C8 100%)', border: '#D9CDB2' }
    ],
    substratePairing: '120 GSM Flyleaves to 800 GSM Multi-Ply Pasted Boards',
    idealFor: 'Rigid box wraps, editorial lookbooks, letterpress stationery',
    tactileFeel: 'Natural organic paper grain with rich haptic warmth'
  },
  {
    id: 'inlays',
    title: 'Bespoke Constructions & Inlays',
    badge: 'Tailored Fit',
    subtitle: 'Custom velvet trays & magnetic closures',
    description: 'Every element of the opening ritual is considered. Custom precision-molded inlays lined in plush Italian velvet or brushed satin cradle the object within, paired with concealed magnetic clasps and grosgrain ribbon pulls.',
    image: '/images/finish-velvet-inlays.jpg',
    palette: [
      { name: 'Midnight Emerald Velvet', descriptor: 'Plush tailored fluted tray', bg: 'linear-gradient(135deg, #1C3B2B 0%, #0D1C14 100%)', border: '#2C5C43' },
      { name: 'Obsidian Black Velvet', descriptor: 'Deep matte light-absorbing pile', bg: 'linear-gradient(135deg, #252825 0%, #121412 100%)', border: '#383D38' },
      { name: 'Champagne Grosgrain Ribbon', descriptor: 'Ribbed textile pull tab', bg: 'linear-gradient(135deg, #F8E3BE 0%, #D8B778 100%)', border: '#C5A362' },
      { name: 'Concealed Magnetic Flap', descriptor: 'Satisfying snap closure', bg: 'linear-gradient(135deg, #C2B6A3 0%, #857A68 100%)', border: '#6E6454' }
    ],
    substratePairing: 'High-Density Precision Foam, FSC Molded Pulp & Italian Velvet',
    idealFor: 'Fragrance flacons, fine jewelry cases, crystal presentation boxes',
    tactileFeel: 'Smooth friction fit with plush, protective cushioning'
  }
]

export default function FinishesSection() {
  const [selectedFinish, setSelectedFinish] = useState(finishes[0].id)
  const current = finishes.find(f => f.id === selectedFinish) || finishes[0]

  return (
    <section id="finishes" className="pt-20 md:pt-28 pb-12 md:pb-16 bg-[#FBF9F4] border-t border-[#E6E0D2] relative overflow-hidden scroll-mt-28" aria-label="Tactile Finishes Studio">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-14">
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
              Packaging is experienced through touch before it is opened. We explore papers, boards, textures, finishes, and colours — and know how each will respond to print, fold, foil, and finish.
            </p>
          </div>

          <div className="text-xs text-[#6B6F62] border-l-2 border-[#93660C]/40 pl-4 py-1">
            <span className="text-[#93660C] font-bold block mb-0.5 tracking-wide uppercase">Tactile Proofing</span>
            <span>All finishes available in physical swatch kit</span>
          </div>
        </div>

        {/* Interactive Finishes Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Navigation Column: Horizontal scroll strip on mobile, vertical stack on desktop */}
          <div className="lg:col-span-4 flex flex-col justify-start gap-4" role="tablist" aria-label="Finishes selector">
            <div className="flex lg:flex-col gap-3 overflow-x-auto no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0 pb-2 lg:pb-0">
              {finishes.map((f, idx) => {
                const active = f.id === selectedFinish
                return (
                  <button
                    key={f.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedFinish(f.id)}
                    className={`text-left p-3.5 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 sm:gap-4 group shrink-0 min-w-[240px] sm:min-w-[280px] lg:min-w-0 lg:w-full ${
                      active
                        ? 'bg-white border-[#F8BC23] shadow-md shadow-[#93660C]/10 ring-2 ring-[#F8BC23]/25'
                        : 'bg-white/70 border-[#E6E0D2] hover:border-[#93660C]/40 hover:bg-white'
                    }`}
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] text-[#93660C] font-bold">0{idx + 1}</span>
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          active ? 'bg-[#F8BC23]/25 text-[#93660C]' : 'bg-[#F3EEE3] text-[#6B6F62]'
                        }`}>
                          {f.badge}
                        </span>
                      </div>
                      <h3 className={`text-sm sm:text-base font-bold transition-colors truncate ${active ? 'text-[#181A16]' : 'text-[#4A4E43] group-hover:text-[#181A16]'}`}>
                        {f.title}
                      </h3>
                      <p className={`text-xs leading-snug truncate ${active ? 'text-[#6B6F62]' : 'text-[#8A8E80]'}`}>
                        {f.subtitle}
                      </p>
                    </div>

                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      active ? 'bg-[#F8BC23] text-[#181A16] scale-105' : 'bg-[#F3EEE3] text-[#8A8E80] group-hover:bg-[#E6E0D2] group-hover:text-[#181A16]'
                    }`}>
                      <Icon name="ArrowRightIcon" size={13} />
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Atelier Physical Proofing Notice Card - hidden on mobile to eliminate clutter, visible on lg */}
            <div className="hidden lg:block p-5 rounded-2xl bg-[#F3EEE3] border border-[#E6E0D2] space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#93660C]/10 flex items-center justify-center text-[#93660C] shrink-0">
                  <Icon name="SparklesIcon" size={16} />
                </div>
                <div>
                  <p className="font-bold text-xs text-[#181A16]">Physical Atelier Proofing</p>
                  <span className="text-[10px] text-[#6B6F62] uppercase tracking-wider font-mono">Custom Swatches Available</span>
                </div>
              </div>
              <p className="text-xs text-[#4A4E43] leading-relaxed">
                Every finish can be sampled on your exact brand paper stock or flacon dimensions before production.
              </p>
              <a
                href="#sample-kit"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#93660C] hover:text-[#181A16] transition-colors pt-1"
              >
                <span>Request Swatches in Sample Box</span>
                <Icon name="ArrowRightIcon" size={12} />
              </a>
            </div>
          </div>

          {/* Right: Active Detail Showcase with Double-Bezel Architecture */}
          <div className="lg:col-span-8">
            <div className="rounded-[2.25rem] p-2 md:p-2.5 bg-[#181A16]/5 ring-1 ring-[#93660C]/20 shadow-2xl h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  role="tabpanel"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="h-full bg-white border border-[#E6E0D2] rounded-[calc(2.25rem-0.375rem)] p-6 md:p-8 lg:p-9 flex flex-col justify-between shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-[#F8BC23]/10 to-transparent pointer-events-none rounded-bl-full" />

                  <div className="space-y-6 relative z-10">
                    {/* Visual Showcase: Physical Macro Photography */}
                    <div className="relative rounded-2xl overflow-hidden border border-[#E6E0D2] shadow-md group aspect-[16/9] md:aspect-[16/8] lg:h-72 w-full bg-[#F3EEE3]">
                      <img
                        src={current.image}
                        alt={`${current.title} physical macro craft`}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-white">
                        <div>
                          <span className="text-[10px] font-mono tracking-widest uppercase text-[#F8BC23] font-bold block">
                            ATELIER CRAFT DETAIL
                          </span>
                          <span className="text-sm md:text-base font-serif font-medium drop-shadow-sm">
                            {current.subtitle}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 text-white/90 hidden sm:inline-block">
                          Macro 1:1
                        </span>
                      </div>
                    </div>

                    {/* Description & Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-[#93660C] tracking-widest uppercase">
                          {current.badge}
                        </span>
                        <span className="text-[#C4BCA8]">•</span>
                        <span className="text-xs text-[#6B6F62]">In-House Tooling &amp; Application</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#181A16] tracking-tight">
                        {current.title}
                      </h3>
                      <p className="text-sm md:text-base text-[#4A4E43] leading-relaxed pt-0.5 font-normal">
                        {current.description}
                      </p>
                    </div>

                    {/* Tactile Material Swatch Display */}
                    <div className="space-y-2.5 pt-0.5">
                      <p className="text-xs font-bold text-[#181A16] tracking-wider uppercase flex items-center justify-between">
                        <span>Tactile Swatches &amp; Variations:</span>
                        <span className="text-[10px] font-mono text-[#93660C] font-normal lowercase">physical swatches available</span>
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {current.palette.map((p) => (
                          <div
                            key={p.name}
                            className="flex items-center gap-3 p-2.5 rounded-xl bg-[#FBF9F4] border border-[#E6E0D2] hover:border-[#93660C]/30 transition-colors"
                          >
                            <div
                              className="w-8 h-8 rounded-lg shrink-0 shadow-sm border"
                              style={{ background: p.bg, borderColor: p.border }}
                            />
                            <div className="min-w-0">
                              <span className="font-semibold text-xs text-[#181A16] block truncate">{p.name}</span>
                              <span className="text-[10px] text-[#6B6F62] block truncate">{p.descriptor}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Substrate & Feel Specs */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-0.5">
                      <div className="p-3.5 rounded-xl bg-[#FBF9F4] border border-[#E6E0D2] space-y-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#93660C] block">Substrates</span>
                        <p className="text-xs text-[#4A4E43] leading-snug">{current.substratePairing}</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#FBF9F4] border border-[#E6E0D2] space-y-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#93660C] block">Haptic Feel</span>
                        <p className="text-xs text-[#4A4E43] leading-snug">{current.tactileFeel}</p>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#FBF9F4] border border-[#E6E0D2] space-y-1 sm:col-span-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#93660C] block">Best Suited For</span>
                        <p className="text-xs text-[#4A4E43] leading-snug">{current.idealFor}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action with Button-in-Button */}
                  <div className="pt-5 mt-5 border-t border-[#E6E0D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                    <a
                      href="#sample-kit"
                      className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#93660C] hover:text-[#181A16] transition-colors"
                    >
                      <span>Request Physical Swatch in Sample Box</span>
                      <Icon name="ArrowRightIcon" size={12} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    <a
                      href="#quote-builder"
                      className="group inline-flex items-center gap-3 pl-6 pr-2.5 py-2.5 rounded-full bg-[#F8BC23] text-[#181A16] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all hover:scale-105 active:scale-[0.98] shadow-md shadow-[#F8BC23]/20"
                    >
                      <span>Apply Finish to Custom Inquiry</span>
                      <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200">
                        <Icon name="ArrowRightIcon" size={11} />
                      </span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

