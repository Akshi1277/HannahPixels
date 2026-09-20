import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  strength?: number
  id?: string
  'aria-label'?: string
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  strength = 30,
  id,
  'aria-label': ariaLabel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [isTouch, setIsTouch] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 350, damping: 22, mass: 0.35 })
  const springY = useSpring(y, { stiffness: 350, damping: 22, mass: 0.35 })

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
    if (!buttonRef.current || isTouch) return
    const { clientX, clientY } = e
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const distanceX = clientX - centerX
    const distanceY = clientY - centerY

    // Pull toward cursor by percentage of strength
    x.set(distanceX * (strength / 100))
    y.set(distanceY * (strength / 100))
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const motionProps = {
    style: {
      x: isTouch ? 0 : springX,
      y: isTouch ? 0 : springY,
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    className: `inline-block cursor-pointer ${className}`,
    id,
    'aria-label': ariaLabel,
  }

  if (href) {
    return (
      <motion.div ref={buttonRef} {...motionProps}>
        <a href={href} target={target} rel={rel} onClick={onClick} className="contents">
          {children}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.div ref={buttonRef} {...motionProps} onClick={onClick}>
      {children}
    </motion.div>
  )
}
