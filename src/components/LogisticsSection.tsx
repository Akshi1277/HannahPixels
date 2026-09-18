import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from '@/components/ui/AppIcon'
import { whatsAppUrl } from '@/lib/contact'

interface ProcessStep {
  step: string
  phase: string
  title: string
  shortSummary: string
  description: string
  deliverable: string
  tools: string[]
  craftTag: string
}

const processSteps: ProcessStep[] = [
  {
    step: '01',
    phase: 'STAGE 01 · ARCHITECTURE',
    title: 'Discover & Structure',
    shortSummary: 'Unboxing ergonomics & structural blueprinting.',
    description: 'We deconstruct your product geometry, target market presence, and unboxing ergonomics to engineer the initial precision dieline blueprint.',
    deliverable: 'Bespoke 2D/3D Dieline CAD & Tolerance Spec',
    tools: ['Structural CAD', 'Geometry Mapping', 'Ergonomics Study'],
    craftTag: 'Dieline Blueprint'
  },
  {
    step: '02',
    phase: 'STAGE 02 · PROTOTYPE',
    title: 'Develop & White Sample',
    shortSummary: 'Physical white-mockup validation & friction fit.',
    description: 'Ideas take physical shape through unprinted white-box prototypes, friction-lock calibration, drop-fit tests, and closure resistance verification.',
    deliverable: '1:1 Scale Kongsberg Plotter White Mockup',
    tools: ['Kongsberg Cutting Table', 'Friction Fit', 'Drop Simulation'],
    craftTag: 'Physical Prototype'
  },
  {
    step: '03',
    phase: 'STAGE 03 · CURATION',
    title: 'Curate & Refine Substrates',
    shortSummary: 'Specialist papers, weights, and foil pairing.',
    description: 'We test virgin cotton pulps, textured rigid boards, Pantone spot inks, and Kurz hot-stamping foils under controlled lighting to achieve perfect tactile synergy.',
    deliverable: 'Custom Swatch Library & Surface Proofs',
    tools: ['Fedrigoni / GF Smith', 'Pantone Matching System', 'Kurz Foils'],
    craftTag: 'Substrate & Foil Library'
  },
  {
    step: '04',
    phase: 'STAGE 04 · PRESSWORK',
    title: 'Precision Production',
    shortSummary: 'Heidelberg offset press runs with zero tolerance.',
    description: 'Heidelberg multi-unit presswork executed with spectrophotometer densitometry, micro-dot registration, and standardized D50 press-sheet calibration.',
    deliverable: 'Press-Passed Production Sheets & Proofs',
    tools: ['Heidelberg Speedmaster', 'Micro-Densitometry', 'D50 Light Proofing'],
    craftTag: 'Heidelberg Precision'
  },
  {
    step: '05',
    phase: 'STAGE 05 · EMBELLISHMENT',
    title: 'Artisan Finishing & Assembly',
    shortSummary: 'Sculptural brass deboss, hot foil, and magnets.',
    description: 'Sculptural brass die stamping, crisp debossing, edge-gilding, and hand-wrapped rigid box assembly with concealed neodymium magnetic clasps.',
    deliverable: 'Finished Bespoke Packaging Artifacts',
    tools: ['Brass Tooling', 'Multi-Level Foil', 'Neodymium Magnets'],
    craftTag: 'Sculptural Finishing'
  },
  {
    step: '06',
    phase: 'STAGE 06 · WHITE-GLOVE',
    title: 'Global Delivery & Logistics',
    shortSummary: 'Climate-sealed transit packaging & global dispatch.',
    description: 'Every consignment is protected in custom moisture-resistant transit sleeves and dispatched with direct white-glove courier tracking to London, Dubai, and worldwide.',
    deliverable: 'Fully Cleared Worldwide Doorstep Logistics',
    tools: ['Moisture-Seal Crates', 'Expedited Air/Sea Freight', 'Customs Clearance'],
    craftTag: 'Worldwide Dispatch'
  }
]

export default function LogisticsSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const activeStep = processSteps[activeStepIndex]

  return (
    <section id="process" className="py-24 md:py-32 bg-[#FBF9F4] border-t border-[#E6E0D2] relative overflow-hidden scroll-mt-28">
      {/* Anchor alias for backwards compatibility */}
      <div id="logistics" className="sr-only" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F8BC23]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">04</span>
              <span className="w-8 h-px bg-[#93660C]/40" />
              <span className="editorial-tag text-[#93660C]">THE PROCESS</span>
            </div>
            <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
              From Idea to Finished Piece.
            </h2>
          </div>
          <div className="space-y-2 max-w-md">
            <p className="text-[#4A4E43] text-base md:text-lg leading-relaxed font-normal">
              A disciplined progression from brand intent to physical reality, executed with intention at every stage.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#93660C] tracking-wide">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#93660C]" />
              <span>SIX SEQUENTIAL ATELIER PHASES</span>
            </div>
          </div>
        </div>

        {/* Desktop Connected Progress Pipeline Bar */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            {/* Background horizontal track */}
            <div className="absolute top-5 left-8 right-8 h-0.5 bg-[#E6E0D2]" />
            {/* Active progress fill */}
            <div
              className="absolute top-5 left-8 h-0.5 bg-gradient-to-r from-[#93660C] to-[#F8BC23] transition-all duration-500 ease-out"
              style={{ width: `${(activeStepIndex / (processSteps.length - 1)) * 90}%` }}
            />

            {/* Stepper nodes */}
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {processSteps.map((step, idx) => {
                const isActive = idx === activeStepIndex
                const isPassed = idx < activeStepIndex

                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className="flex flex-col items-center text-center group cursor-pointer focus:outline-none"
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                        isActive
                          ? 'bg-[#181A16] text-[#F8BC23] ring-4 ring-[#F8BC23]/30 scale-110 shadow-md'
                          : isPassed
                          ? 'bg-[#93660C] text-white'
                          : 'bg-white text-[#6B6F62] border border-[#E6E0D2] group-hover:border-[#93660C]/50'
                      }`}
                    >
                      {step.step}
                    </div>

                    {/* Step Title Label */}
                    <span
                      className={`mt-3 text-xs font-mono tracking-wider transition-colors uppercase ${
                        isActive ? 'text-[#181A16] font-bold' : 'text-[#6B6F62] group-hover:text-[#181A16]'
                      }`}
                    >
                      {step.title.split(' ')[0]}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Interactive Feature Stage Spotlight (Desktop & Tablet) */}
        <div className="mb-14 p-8 md:p-10 rounded-3xl bg-white border border-[#E6E0D2] shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#F8BC23]/10 to-transparent pointer-events-none rounded-bl-full" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 items-center relative z-10"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-3xl font-bold text-[#93660C]">
                    {activeStep.step}
                  </span>
                  <span className="text-xs font-mono tracking-widest uppercase text-[#93660C] bg-[#F3EEE3] border border-[#F8BC23]/30 px-3 py-1 rounded-full font-bold">
                    {activeStep.phase}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#181A16] tracking-tight">
                  {activeStep.title}
                </h3>

                <p className="text-base md:text-lg text-[#3E4237] leading-relaxed font-normal">
                  {activeStep.description}
                </p>

                <div className="pt-4 border-t border-[#E6E0D2]/80 space-y-2">
                  <p className="text-xs font-mono text-[#6B6F62]">
                    <strong className="text-[#181A16]">Key Deliverable:</strong> {activeStep.deliverable}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeStep.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono text-[#93660C] bg-[#FBF9F4] border border-[#E6E0D2] px-3 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side Craft Card Preview */}
              <div className="lg:col-span-5 bg-[#F4EFE6] border border-[#E2DDD1] rounded-2xl p-6 md:p-8 space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#93660C]">
                    Phase Highlight
                  </span>
                  <h4 className="text-lg font-bold text-[#181A16]">
                    {activeStep.craftTag}
                  </h4>
                  <p className="text-xs text-[#595E50] leading-relaxed">
                    {activeStep.shortSummary}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#E2DDD1] text-xs font-mono text-[#93660C]">
                  <span>HANNAH PIXELS ATELIER</span>
                  <div className="flex items-center gap-1.5">
                    <span>STEP {activeStep.step} OF 06</span>
                    <Icon name="ArrowRightIcon" size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 6 Connected Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {processSteps.map((step, idx) => {
            const isCurrent = idx === activeStepIndex

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-8 rounded-3xl transition-all duration-300 cursor-pointer relative group flex flex-col justify-between space-y-6 ${
                  isCurrent
                    ? 'bg-white border-2 border-[#93660C] shadow-lg scale-[1.02]'
                    : 'bg-white border border-[#E6E0D2] hover:border-[#93660C]/40 hover:shadow-md'
                }`}
              >
                {/* Connecting arrow badge at right on desktop */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-6 h-6 rounded-full bg-[#F4EFE6] border border-[#E6E0D2] flex items-center justify-center text-[#93660C] shadow-xs">
                      <Icon name="ArrowRightIcon" size={10} />
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold text-[#93660C]">
                      {step.step}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                        isCurrent
                          ? 'bg-[#181A16] text-[#F8BC23] border-[#181A16]'
                          : 'bg-[#F3EEE3] text-[#93660C] border-[#F8BC23]/30'
                      }`}
                    >
                      {step.craftTag}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold tracking-tight text-[#181A16] group-hover:text-[#93660C] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#4A4E43] leading-relaxed font-normal">
                      {step.shortSummary}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6E0D2]/70 flex items-center justify-between text-xs font-mono text-[#93660C]/80">
                  <span className="text-[11px] tracking-wider">{step.phase.split(' · ')[1]}</span>
                  <div className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span className="text-[10px] font-bold uppercase">Inspect</span>
                    <Icon name="ArrowRightIcon" size={12} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Global Distribution & Inquiry Banner */}
        <div className="p-8 md:p-10 rounded-3xl bg-[#090B0A] border border-[#202824] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left z-10">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-[#F8BC23]">
              <Icon name="GlobeAltIcon" size={16} />
              <span>Without Borders · Worldwide Delivery</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Ready to bring your packaging idea to life?
            </h4>
            <p className="text-xs md:text-sm text-white/70 max-w-xl">
              From bespoke single projects to scalable production runs, Hannah Pixels works with brands across the UK, UAE and worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full sm:w-auto">
            <a
              href="#quote-builder"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all shadow-md"
            >
              Start Project Inquiry
            </a>
            <a
              href={whatsAppUrl("Hello Hannah Pixels, I'd like to consult on a new print & packaging project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-5 py-3.5 rounded-full border border-white/20 hover:border-[#F8BC23]/60 text-white/90 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Icon name="MessageCircleIcon" size={14} className="text-[#F8BC23]" />
              <span>WhatsApp Studio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


