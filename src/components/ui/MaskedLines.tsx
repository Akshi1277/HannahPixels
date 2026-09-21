import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const

interface MaskedLinesProps {
  lines: (string | ReactNode)[]
  className?: string
  lineClassName?: string
  delay?: number
  stagger?: number
  mode?: 'load' | 'scroll'
}

export default function MaskedLines({
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
  stagger = 0.14,
  mode = 'load',
}: MaskedLinesProps) {
  const trigger =
    mode === 'load'
      ? { animate: 'visible' }
      : {
          whileInView: 'visible',
          viewport: { once: true, margin: '-10% 0px' },
        }

  return (
    <motion.div className={className} initial="hidden" {...trigger}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
          <motion.span
            className={`block will-change-transform ${lineClassName}`}
            variants={{
              hidden: { y: '115%' },
              visible: {
                y: '0%',
                transition: {
                  duration: 1.1,
                  delay: delay + i * stagger,
                  ease: LUXURY_EASE,
                },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}
