import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion'
import { useRef } from 'react'
import Icon from './AppIcon'

export default function RotatingBadge({ className = '' }: { className?: string }) {
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  })
  
  const velocityFactor = useTransform(smoothVelocity, [-1000, 0, 1000], [-0.05, 0, 0.05], {
    clamp: false
  })

  const baseX = useRef(0)
  const rotate = useTransform(() => {
    // Continuous rotation + scroll velocity rotation
    baseX.current += 0.5 + velocityFactor.get()
    return baseX.current
  })

  return (
    <div className={`relative flex items-center justify-center w-32 h-32 rounded-full ${className}`}>
      <motion.div 
        style={{ rotate }} 
        className="absolute inset-0 rounded-full flex items-center justify-center"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-white/60">
          <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
          <text fontSize="9" fontWeight="bold" letterSpacing="0.25em" fill="currentColor">
            <textPath href="#circlePath" startOffset="0%">
              HANNAH PIXELS • LUXURY ATELIER • LONDON &amp; DUBAI •
            </textPath>
          </text>
        </svg>
      </motion.div>
      <div className="absolute bg-[#C9A050] text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg border border-[#DFBF75]/40 backdrop-blur-md">
        <Icon name="SparklesIcon" size={20} />
      </div>
    </div>
  )
}
