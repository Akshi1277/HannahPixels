import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

// Box proportions (px) — a rigid gift-box ratio, not a cube
const W = 200 // front-facing width
const D = 132 // side depth
const H = 168 // wall height

const SHADE = {
  front: '#F5F1E6',
  left: '#E2DAC4',
  lid: '#FBF9F2',
}

const copyLines = [
  'Every box starts as a dieline.',
  'Precision-engineered folds.',
  'Hand-finished and sealed.',
  'Delivered ready to ship.',
]

export default function DielineSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  // KNOWN BUG (unresolved): scrollYProgress is frozen at its mount-time value
  // and never updates on scroll. Reproduced with every offset variant tried,
  // with Lenis removed entirely, with this component loaded eagerly instead
  // of via React.lazy, in headed and headless Chromium, and in a minimal
  // from-scratch component containing only a tall section + sticky child +
  // this hook — so the trigger is specifically "useScroll target is a tall
  // section with a sticky-positioned child," not anything about this
  // component's own complexity. Framer Motion 13.0.0 and 13.4.0 both affected.
  // Next step: try a manually-driven progress value (window scroll listener
  // + useMotionValue.set()) as a workaround, or file/search a framer-motion
  // GitHub issue for "useScroll sticky target frozen".
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // --- Stage 1: blueprint intro fades out as the fold begins ---
  const blueprintOpacity = useTransform(scrollYProgress, [0, 0.1, 0.22], [1, 1, 0])
  const blueprintScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.92])

  // --- Stage 2: the box assembles piece by piece ---
  const groupOpacity = useTransform(scrollYProgress, [0.14, 0.24], [0, 1])
  const groupScale = useTransform(scrollYProgress, [0.2, 0.55], [0.82, 1])

  const frontProgress = useTransform(scrollYProgress, [0.2, 0.36], [0, 1])
  const frontOpacity = frontProgress
  const frontY = useTransform(frontProgress, [0, 1], [26, 0])

  const leftProgress = useTransform(scrollYProgress, [0.3, 0.46], [0, 1])
  const leftOpacity = leftProgress
  const leftX = useTransform(leftProgress, [0, 1], [-24, 0])

  const lidProgress = useTransform(scrollYProgress, [0.42, 0.6], [0, 1])
  const lidOpacity = lidProgress
  const lidY = useTransform(lidProgress, [0, 1], [-22, 0])

  // --- Stage 3: gold foil stamp presses onto the closed lid ---
  const stampScale = useTransform(scrollYProgress, [0.6, 0.68, 0.74], [0, 1.15, 1])
  const stampOpacity = useTransform(scrollYProgress, [0.58, 0.64], [0, 1])

  // --- Stage 4: settle — shadow solidifies, box gets a gentle living sway ---
  const shadowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 1], [0.1, 0.38, 0.46])
  const shadowScale = useTransform(scrollYProgress, [0.2, 0.5], [0.7, 1])
  const idleSway = useTransform(scrollYProgress, [0.78, 0.89, 1], [0, -4, 4])

  const line1 = useTransform(scrollYProgress, [0, 0.1, 0.19], [1, 1, 0])
  const line2 = useTransform(scrollYProgress, [0.19, 0.27, 0.42, 0.48], [0, 1, 1, 0])
  const line3 = useTransform(scrollYProgress, [0.48, 0.56, 0.74, 0.8], [0, 1, 1, 0])
  const line4 = useTransform(scrollYProgress, [0.8, 0.88], [0, 1])

  const line1Y = useTransform(line1, [0, 1], [10, 0])
  const line2Y = useTransform(line2, [0, 1], [10, 0])
  const line3Y = useTransform(line3, [0, 1], [10, 0])
  const line4Y = useTransform(line4, [0, 1], [10, 0])

  if (prefersReducedMotion) {
    return (
      <section className="bg-[#FBF9F4] border-t border-[#E6E0D2] py-24 md:py-32" aria-label="From dieline to finished box">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F8BC23]/40">
            <span className="w-2 h-2 rounded-full bg-[#F8BC23]" />
            <span className="label-tag text-[#93660C] text-[11px]">From Dieline to Box</span>
          </div>
          <StaticBox />
          <p className="text-[#181A16] text-xl md:text-2xl font-medium max-w-md">
            Every box starts as a dieline — precision-engineered, hand-finished, delivered ready to ship.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FBF9F4] border-t border-[#E6E0D2] h-[220vh] md:h-[320vh]"
      aria-label="From dieline to finished box"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        {/* Eyebrow */}
        <div className="absolute top-24 md:top-28 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F8BC23]/40 z-20">
          <span className="w-2 h-2 rounded-full bg-[#F8BC23]" />
          <span className="label-tag text-[#93660C] text-[11px]">From Dieline to Box</span>
        </div>

        {/* Copy stack, bottom-left */}
        <div className="absolute bottom-16 md:bottom-24 left-6 md:left-16 right-6 md:right-auto z-20 h-24 md:w-[22rem]">
          <motion.p
            style={{ opacity: line1, y: line1Y }}
            className="absolute inset-0 text-[#181A16] text-xl md:text-3xl font-medium leading-snug"
          >
            {copyLines[0]}
          </motion.p>
          <motion.p
            style={{ opacity: line2, y: line2Y }}
            className="absolute inset-0 text-[#181A16] text-xl md:text-3xl font-medium leading-snug"
          >
            {copyLines[1]}
          </motion.p>
          <motion.p
            style={{ opacity: line3, y: line3Y }}
            className="absolute inset-0 text-[#181A16] text-xl md:text-3xl font-medium leading-snug"
          >
            {copyLines[2]}
          </motion.p>
          <motion.p
            style={{ opacity: line4, y: line4Y }}
            className="absolute inset-0 text-[#181A16] text-xl md:text-3xl font-medium leading-snug"
          >
            {copyLines[3]}
          </motion.p>
        </div>

        {/* Ground shadow */}
        <motion.div
          style={{ opacity: shadowOpacity, scale: shadowScale }}
          className="absolute top-[58%] left-1/2 -translate-x-1/2 w-56 h-14 rounded-full bg-black/40 blur-2xl pointer-events-none"
        />

        {/* Blueprint layer */}
        <motion.div
          style={{ opacity: blueprintOpacity, scale: blueprintScale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <Blueprint />
        </motion.div>

        {/* Box assembly layer */}
        <motion.div
          style={{ opacity: groupOpacity, scale: groupScale, rotateY: idleSway }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div style={{ perspective: 1200 }}>
            <div style={{ width: W, height: H + D, position: 'relative', transformStyle: 'preserve-3d' }}>
              {/* Front face */}
              <motion.div
                style={{
                  position: 'absolute',
                  width: W,
                  height: H,
                  left: -W / 2,
                  top: -D * 0.15,
                  background: SHADE.front,
                  border: '1px solid rgba(24,26,22,0.12)',
                  boxShadow: '0 30px 50px -20px rgba(24,26,22,0.35)',
                  opacity: frontOpacity,
                  y: frontY,
                }}
              />

              {/* Left side face (fixed foreshortened angle) */}
              <motion.div
                style={{
                  position: 'absolute',
                  width: D,
                  height: H,
                  left: -W / 2 - D * 0.62,
                  top: -D * 0.15,
                  background: SHADE.left,
                  border: '1px solid rgba(24,26,22,0.12)',
                  transform: 'rotateY(42deg)',
                  transformOrigin: 'right center',
                  opacity: leftOpacity,
                  x: leftX,
                }}
              />

              {/* Lid (fixed foreshortened angle) */}
              <motion.div
                style={{
                  position: 'absolute',
                  width: W,
                  height: D * 0.85,
                  left: -W / 2,
                  top: -D * 0.15 - D * 0.66,
                  background: SHADE.lid,
                  border: '1px solid rgba(24,26,22,0.12)',
                  transform: 'rotateX(52deg)',
                  transformOrigin: 'bottom center',
                  opacity: lidOpacity,
                  y: lidY,
                }}
              >
                <motion.div
                  style={{ scale: stampScale, opacity: stampOpacity }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#F8BC23] border border-[#DFA30F] shadow-lg flex items-center justify-center"
                >
                  <span className="font-serif italic text-[#181A16] text-sm">H</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StaticBox() {
  return (
    <div style={{ perspective: 1200 }}>
      <div style={{ width: W, height: H + D, position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            width: W,
            height: H,
            left: -W / 2,
            top: -D * 0.15,
            background: SHADE.front,
            border: '1px solid rgba(24,26,22,0.12)',
            boxShadow: '0 30px 50px -20px rgba(24,26,22,0.35)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: D,
            height: H,
            left: -W / 2 - D * 0.62,
            top: -D * 0.15,
            background: SHADE.left,
            border: '1px solid rgba(24,26,22,0.12)',
            transform: 'rotateY(42deg)',
            transformOrigin: 'right center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: W,
            height: D * 0.85,
            left: -W / 2,
            top: -D * 0.15 - D * 0.66,
            background: SHADE.lid,
            border: '1px solid rgba(24,26,22,0.12)',
            transform: 'rotateX(52deg)',
            transformOrigin: 'bottom center',
          }}
        >
          <div className="absolute w-9 h-9 rounded-full bg-[#F8BC23] border border-[#DFA30F] shadow-lg flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="font-serif italic text-[#181A16] text-sm">H</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Blueprint() {
  return (
    <svg width="480" height="360" viewBox="0 0 480 360" fill="none" aria-hidden="true">
      <g stroke="#93660C" strokeWidth="1.5">
        <rect x="170" y="130" width="140" height="90" fill="none" />
        <rect x="170" y="220" width="140" height="100" fill="none" />
        <rect x="170" y="320" width="140" height="24" fill="none" strokeDasharray="5 4" />
        <rect x="80" y="130" width="90" height="90" fill="none" />
        <rect x="310" y="130" width="90" height="90" fill="none" />
        <line x1="170" y1="130" x2="170" y2="220" strokeDasharray="5 4" />
        <line x1="310" y1="130" x2="310" y2="220" strokeDasharray="5 4" />
        <line x1="170" y1="220" x2="310" y2="220" strokeDasharray="5 4" />
        <line x1="170" y1="320" x2="310" y2="320" strokeDasharray="5 4" />
      </g>
      {[[80, 130], [400, 130], [80, 220], [400, 220]].map(([x, y]) => (
        <g key={`${x}-${y}`} stroke="#93660C" strokeWidth="1.3">
          <line x1={x - 6} y1={y} x2={x + 6} y2={y} />
          <line x1={x} y1={y - 6} x2={x} y2={y + 6} />
        </g>
      ))}
      <text x="170" y="112" fill="#93660C" fontSize="12" letterSpacing="1.8" fontWeight="700">
        REF. HP-104 · RIGID BOX
      </text>
      <line x1="80" y1="250" x2="170" y2="250" stroke="#93660C" strokeWidth="1.3" />
      <text x="92" y="267" fill="#93660C" fontSize="10.5" letterSpacing="1" fontWeight="700">120MM</text>
    </svg>
  )
}
