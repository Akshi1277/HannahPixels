import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useLenis } from 'lenis/react'

interface StageInfo {
  id: number
  key: string
  title: string
  eyebrow: string
  description: string
  specs: { label: string; value: string }[]
  pins: { id: string; x: number; y: number; title: string; detail: string }[]
}

const STAGES: StageInfo[] = [
  {
    id: 1,
    key: 'dieline',
    eyebrow: 'Stage 01 · Structural Drafting',
    title: 'Precision CAD Dieline',
    description: 'Every bespoke package starts as a flat structural blueprint. We engineer exact fold tolerances, grain orientation, and laser-guided score paths.',
    specs: [
      { label: 'Substrate', value: '350 GSM Virgin Kraft' },
      { label: 'Cut Tolerance', value: '±0.1 mm' },
      { label: 'CAD Reference', value: 'KPC-4021' },
    ],
    pins: [
      { id: 'p1', x: 28, y: 55, title: 'Glue Tab Matrix', detail: 'Reinforced 18mm adhesive surface for high-shear bond strength.' },
      { id: 'p2', x: 65, y: 44, title: 'Main Panel Luxe No. 1', detail: 'Calibrated grain direction prevents warping across wide spans.' },
      { id: 'p3', x: 50, y: 72, title: 'Crease Score Rule', detail: 'Precision round-channel score preserving surface fibers.' },
    ],
  },
  {
    id: 2,
    key: 'creasing',
    eyebrow: 'Stage 02 · Thermal Scoring',
    title: 'Laser Crease & Mechanical Fold',
    description: 'The transformation portal sweeps across the raw sheet. High-speed thermal matrix scoring creates micro-grooves that bend cleanly without cracking.',
    specs: [
      { label: 'Crease Pressure', value: '4.2 Bar' },
      { label: 'Score Angle', value: '90° / 45° Dual' },
      { label: 'Thermal Beam', value: 'Active' },
    ],
    pins: [
      { id: 'p4', x: 38, y: 46, title: 'Thermal Score Line', detail: 'Laser-activated score line heats cellulose to fold without fiber rupture.' },
      { id: 'p5', x: 72, y: 35, title: 'Wall Flap Tension', detail: 'Pre-stressed structural walls self-lock when folded upward.' },
    ],
  },
  {
    id: 3,
    key: 'assembly',
    eyebrow: 'Stage 03 · Structural Integrity',
    title: 'Formed Rigid Corrugate Box',
    description: 'Folded along engineered planes, the carton locks into a high-rigidity structural box built to withstand transit while preserving bespoke proportions.',
    specs: [
      { label: 'Edge Rigidity', value: '44 ECT Crush Test' },
      { label: 'Wall Profile', value: 'B-Flute Corrugated' },
      { label: 'Assembly', value: 'Zero Adhesive Clasp' },
    ],
    pins: [
      { id: 'p6', x: 52, y: 42, title: 'Friction Tuck Clasp', detail: 'Signature double-walled lid with positive haptic click closure.' },
      { id: 'p7', x: 32, y: 62, title: 'Reinforced Corners', detail: 'Triple-layer corner seams absorb impact during global transit.' },
    ],
  },
  {
    id: 4,
    key: 'luxury',
    eyebrow: 'Stage 04 · Atelier Packaging',
    title: 'Luxury Black & Hot Gold Foil',
    description: 'Wrapped in tactile soft-touch charcoal black paper, stamped with a 120°C hot metallic gold foil monogram, and finished with a satin gold pull seal.',
    specs: [
      { label: 'Foil Temp', value: '120°C Hot Stamp' },
      { label: 'Laminate', value: 'Matte Soft-Touch' },
      { label: 'Finish Grade', value: 'Atelier Bespoke' },
    ],
    pins: [
      { id: 'p8', x: 50, y: 36, title: 'Gold Foil Monogram', detail: 'Micro-embossed 24k luster foil with sharp edge definition.' },
      { id: 'p9', x: 59, y: 52, title: 'Satin Pull Tab', detail: 'Branded champagne-gold satin loop for seamless magnetic unboxing.' },
    ],
  },
]

export default function PackagingTransformationSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activePin, setActivePin] = useState<string | null>(null)
  const [currentStageIndex, setCurrentStageIndex] = useState(0)

  const scrollYProgress = useMotionValue(0)
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 })

  const updateProgress = useCallback(() => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const totalScrollable = rect.height - windowHeight
    if (totalScrollable <= 0) return
    const currentScrolled = -rect.top
    const rawProgress = currentScrolled / totalScrollable
    const clamped = Math.max(0, Math.min(1, rawProgress))
    
    scrollYProgress.set(clamped)

    if (clamped < 0.25) setCurrentStageIndex(0)
    else if (clamped < 0.50) setCurrentStageIndex(1)
    else if (clamped < 0.75) setCurrentStageIndex(2)
    else setCurrentStageIndex(3)
  }, [scrollYProgress])

  useLenis(() => {
    updateProgress()
  })

  useEffect(() => {
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress, { passive: true })
    updateProgress()
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [updateProgress])

  const currentStage = STAGES[currentStageIndex]

  const scrollToStage = (stageIdx: number) => {
    if (!sectionRef.current) return
    const rect = sectionRef.current.getBoundingClientRect()
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const sectionStart = rect.top + scrollTop
    const totalScrollable = rect.height - window.innerHeight

    const targetProgress = [0.08, 0.35, 0.60, 0.95][stageIdx]
    const targetScrollY = sectionStart + totalScrollable * targetProgress

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    })
  }

  // Animation Transforms mapping to smoothProgress
  // Stage 1 (Dieline): Active 0.0 - 0.25. Fades out by 0.3.
  const dielineOpacity = useTransform(smoothProgress, [0, 0.25, 0.3], [1, 1, 0])
  const dielineScale = useTransform(smoothProgress, [0, 0.25, 0.3], [0.9, 1, 1.1])
  const dielineY = useTransform(smoothProgress, [0, 0.25, 0.3], [0, 0, 50])

  // Stage 2 (Folding): Fades in 0.2 - 0.25. Active 0.25 - 0.50. Fades out by 0.55.
  const foldingOpacity = useTransform(smoothProgress, [0.2, 0.25, 0.5, 0.55], [0, 1, 1, 0])
  const foldingScale = useTransform(smoothProgress, [0.2, 0.25, 0.5, 0.55], [0.8, 1, 1.1, 1.2])
  const foldingY = useTransform(smoothProgress, [0.2, 0.25, 0.5, 0.55], [-50, 0, 0, 50])

  // Stage 3 (Rigid Box): Fades in 0.45 - 0.50. Active 0.50 - 0.75. Fades out by 0.8.
  const rigidOpacity = useTransform(smoothProgress, [0.45, 0.5, 0.75, 0.8], [0, 1, 1, 0])
  const rigidScale = useTransform(smoothProgress, [0.45, 0.5, 0.75, 0.8], [0.8, 1, 1.1, 1.2])
  const rigidY = useTransform(smoothProgress, [0.45, 0.5, 0.75, 0.8], [-50, 0, 0, 50])

  // Stage 4 (Luxury Box): Fades in 0.7 - 0.75. Active 0.75 - 1.0.
  const luxuryOpacity = useTransform(smoothProgress, [0.7, 0.75, 1], [0, 1, 1])
  const luxuryScale = useTransform(smoothProgress, [0.7, 0.75, 1], [0.8, 1, 1.05])
  const luxuryY = useTransform(smoothProgress, [0.7, 0.75, 1], [-50, 0, 0])

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative bg-[#090B0A] text-[#FAF8F5] min-h-[400vh] border-t border-b border-[#202824]"
      aria-label="Packaging Transformation Story"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between pt-24 pb-4 md:pt-28 md:pb-6 px-4 md:px-8 select-none">
        
        {/* Header */}
        <header className="relative z-40 max-w-7xl mx-auto w-full flex items-center justify-between gap-4 mb-2">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#F8BC23] animate-pulse shadow-[0_0_10px_#F8BC23]" />
            <span className="editorial-tag text-[#F8BC23] tracking-[0.2em] font-semibold text-[11px] uppercase">
              The Evolution of Packaging
            </span>
          </div>

          <nav aria-label="Stages" className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {STAGES.map((s, idx) => {
              const isActive = currentStageIndex === idx
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => scrollToStage(idx)}
                  className={`px-3.5 py-1 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-[#F8BC23] text-[#181A16] font-semibold shadow-[0_0_15px_rgba(248,188,35,0.35)]'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-[#181A16]/70' : 'text-white/40'}`}>
                    0{s.id}
                  </span>
                  <span>{s.title.split(' ')[0]}</span>
                </button>
              )
            })}
          </nav>
        </header>

        {/* Central Stage: Storytelling Portal Viewport */}
        <div className="relative z-10 max-w-6xl w-full mx-auto my-auto flex items-center justify-center">
          <div className="relative w-full aspect-[16/9] max-h-[50vh] md:max-h-[58vh] lg:max-h-[64vh] rounded-3xl overflow-hidden bg-[#0A0D0B] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9)] border border-white/10">
            
            {/* Layer 1: Deep Background Factory (Darkened) */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/transform/factory-bg.jpg"
                alt="Factory Background"
                className="w-full h-full object-cover opacity-20 scale-105 filter blur-sm"
              />
              <div className="absolute inset-0 bg-black/60 shadow-[inset_0_0_150px_rgba(0,0,0,1)]" />
              {/* Backlight glow for the portal */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F8BC23]/10 rounded-full blur-[100px]" />
            </div>

            {/* Layer 2: The Transformative Cutout Items */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <AnimatePresence>
                <motion.img
                  src="/images/transform/dieline.png"
                  alt="Dieline Cutout"
                  className="absolute max-w-[85%] max-h-[85%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                  style={{ opacity: dielineOpacity, scale: dielineScale, y: dielineY }}
                />
                
                <motion.img
                  src="/images/transform/folding.png"
                  alt="Folding Cutout"
                  className="absolute max-w-[85%] max-h-[85%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                  style={{ opacity: foldingOpacity, scale: foldingScale, y: foldingY }}
                />

                <motion.img
                  src="/images/transform/rigid-box.png"
                  alt="Rigid Box Cutout"
                  className="absolute max-w-[85%] max-h-[85%] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
                  style={{ opacity: rigidOpacity, scale: rigidScale, y: rigidY }}
                />

                <motion.img
                  src="/images/transform/luxury-box.png"
                  alt="Luxury Box Cutout"
                  className="absolute max-w-[85%] max-h-[85%] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,1)]"
                  style={{ opacity: luxuryOpacity, scale: luxuryScale, y: luxuryY }}
                />
              </AnimatePresence>
            </div>

            {/* Layer 3: Foreground Portal Overlay (Masked Hole) */}
            <div 
              className="absolute inset-0 z-20 pointer-events-none"
              style={{
                // Mask out the center to see the items "inside" the machine/portal
                maskImage: 'radial-gradient(ellipse at 50% 50%, transparent 35%, black 65%)',
                WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, transparent 35%, black 65%)',
              }}
            >
              <img
                src="/images/transform/factory-bg.jpg"
                alt="Factory Foreground Mask"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
            </div>

            {/* Layer 4: Interactive Pins (Always on top) */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              {currentStage.pins.map((pin) => {
                const isPinActive = activePin === pin.id
                return (
                  <div
                    key={pin.id}
                    className="absolute pointer-events-auto"
                    style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                  >
                    <button
                      type="button"
                      onClick={() => setActivePin(isPinActive ? null : pin.id)}
                      onMouseEnter={() => setActivePin(pin.id)}
                      onMouseLeave={() => setActivePin(null)}
                      aria-label={pin.title}
                      className="group relative -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/70 border border-[#F8BC23] flex items-center justify-center cursor-pointer shadow-[0_0_12px_rgba(248,188,35,0.6)] hover:scale-125 transition-transform"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#F8BC23] group-hover:scale-150 transition-transform" />
                      <span className="absolute inset-0 rounded-full border border-[#F8BC23] animate-ping opacity-60 pointer-events-none" />
                    </button>

                    <AnimatePresence>
                      {isPinActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 w-60 p-3 rounded-xl bg-[#090B0A]/95 border border-[#F8BC23]/40 shadow-2xl backdrop-blur-xl text-left pointer-events-none"
                        >
                          <p className="text-[11px] font-bold text-[#F8BC23] uppercase tracking-wider mb-1">
                            {pin.title}
                          </p>
                          <p className="text-[12px] text-white/80 leading-relaxed font-sans">
                            {pin.detail}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Context Card */}
        <footer className="relative z-40 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end bg-[#0F1412]/90 border border-white/10 p-5 md:p-6 rounded-3xl backdrop-blur-xl shadow-2xl">
            <div className="lg:col-span-7 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F8BC23]">
                  {currentStage.eyebrow}
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-medium">
                {currentStage.title}
              </h3>
              <p className="text-white/70 text-sm md:text-base leading-relaxed font-sans max-w-2xl">
                {currentStage.description}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-wrap gap-2.5 justify-start lg:justify-end">
              {currentStage.specs.map((spec, i) => (
                <div
                  key={i}
                  className="px-3.5 py-2 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-0.5 min-w-[120px]"
                >
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/40">
                    {spec.label}
                  </span>
                  <span className="text-xs font-semibold text-[#FAF8F5]">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 pt-4 text-[11px] text-white/40 tracking-wider font-mono">
            <span>SCROLL TO ADVANCE ASSEMBLY</span>
            <span className="animate-bounce text-[#F8BC23]">↓</span>
          </div>
        </footer>
      </div>
    </section>
  )
}
