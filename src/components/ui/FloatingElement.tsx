import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Icon from './AppIcon'
import type { IconName } from './AppIcon'

interface FloatingElementProps {
  icon?: IconName
  shape?: 'circle' | 'square' | 'asterisk'
  className?: string
  depth?: number // Determines parallax speed
  delay?: number
}

export default function FloatingElement({ 
  icon, 
  shape = 'asterisk', 
  className = '', 
  depth = 1, 
  delay = 0 
}: FloatingElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Create parallax effect on Y axis
  const y = useTransform(scrollYProgress, [0, 1], [depth * 150, depth * -150])
  // Slight rotation for organic feel
  const rotate = useTransform(scrollYProgress, [0, 1], [0, depth * 45])
  
  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay, ease: [0.23, 1, 0.32, 1] }}
      className={`absolute pointer-events-none will-change-transform z-0 ${className}`}
    >
      {icon ? (
        <Icon name={icon} size={48} className="w-full h-full text-current opacity-20" />
      ) : shape === 'circle' ? (
        <div className="w-full h-full rounded-full border-2 border-current opacity-10" />
      ) : shape === 'square' ? (
        <div className="w-full h-full border-2 border-current opacity-10" />
      ) : (
        <span className="text-current leading-none font-sans opacity-10" style={{ fontSize: 'inherit' }}>*</span>
      )}
    </motion.div>
  )
}
