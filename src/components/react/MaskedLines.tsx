import { Fragment } from 'react'
import { motion } from 'framer-motion'

const LUXURY_EASE = [0.16, 1, 0.3, 1] as const

interface MaskedLinesProps {
  /** Plain strings. Wrap a word/phrase in *asterisks* to render it as the italic accent. */
  lines: string[]
  className?: string
  lineClassName?: string
  /** Class applied to *accented* words — defaults to the standard ink accent. */
  accentClassName?: string
  delay?: number
  stagger?: number
  mode?: 'load' | 'scroll'
}

function renderAccented(line: string, accentClassName: string) {
  const parts = line.split(/(\*[^*]+\*)/g).filter(Boolean)
  return parts.map((part, i) => {
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} className={`italic ${accentClassName}`}>
          {part.slice(1, -1)}
        </em>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

export default function MaskedLines({
  lines,
  className = '',
  lineClassName = '',
  accentClassName = 'text-accent',
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
            {renderAccented(line, accentClassName)}
          </motion.span>
        </span>
      ))}
    </motion.div>
  )
}
