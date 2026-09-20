import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
  borderColor?: string
  tilt?: boolean
  maxTilt?: number
}

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(248, 188, 35, 0.08)',
  borderColor = 'rgba(248, 188, 35, 0.4)',
  tilt = true,
  maxTilt = 3.5,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  // Spring physics for buttery 3D tilt with mass and damping
  const rotateXValue = useMotionValue(0)
  const rotateYValue = useMotionValue(0)
  const springRotateX = useSpring(rotateXValue, { stiffness: 300, damping: 22, mass: 0.5 })
  const springRotateY = useSpring(rotateYValue, { stiffness: 300, damping: 22, mass: 0.5 })

  useEffect(() => {
    const isTouchDevice =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches)
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    setIsTouch(isTouchDevice || prefersReduced)
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePos({ x, y })

    if (tilt && !isTouch) {
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      // Invert Y for intuitive 3D tilt orientation
      const rX = ((y - centerY) / centerY) * -maxTilt
      const rY = ((x - centerX) / centerX) * maxTilt
      rotateXValue.set(rX)
      rotateYValue.set(rY)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (tilt && !isTouch) {
      rotateXValue.set(0)
      rotateYValue.set(0)
    }
  }

  return (
    <motion.div
      ref={cardRef}
      style={{
        rotateX: tilt && !isTouch ? springRotateX : 0,
        rotateY: tilt && !isTouch ? springRotateY : 0,
        transformPerspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      className={`group relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      {...(props as any)}
    >
      {/* Dynamic Surface Ambient Beam */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-10"
        style={{
          background: isHovered
            ? `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 80%)`
            : undefined,
        }}
        aria-hidden="true"
      />

      {/* Dynamic Specular Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-20"
        style={{
          background: isHovered
            ? `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, ${borderColor}, transparent 70%)`
            : undefined,
          maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
        }}
        aria-hidden="true"
      />

      {/* Card Content */}
      <div className="relative z-0 h-full w-full">
        {children}
      </div>
    </motion.div>
  )
}
