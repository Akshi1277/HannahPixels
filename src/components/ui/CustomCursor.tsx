import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  // Do not render on small screens/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null
  if (!isVisible) return null

  return (
    <>
      {/* Precision Core Dot */}
      <motion.div
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28, mass: 0.1 }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-primary pointer-events-none z-[9999] hidden md:block"
      />

      {/* Smooth Trailing Focus Ring */}
      <motion.div
        animate={{
          x: mousePosition.x - (isHovered ? 18 : 12),
          y: mousePosition.y - (isHovered ? 18 : 12),
          width: isHovered ? 36 : 24,
          height: isHovered ? 36 : 24,
          borderColor: isHovered ? 'rgba(255, 90, 31, 0.8)' : 'rgba(255, 255, 255, 0.25)',
          backgroundColor: isHovered ? 'rgba(255, 90, 31, 0.08)' : 'transparent',
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22, mass: 0.2 }}
        className="fixed top-0 left-0 rounded-full border border-white/20 pointer-events-none z-[9998] hidden md:block"
      />
    </>
  )
}
