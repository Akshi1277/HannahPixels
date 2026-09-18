import { motion } from 'framer-motion'

interface MarqueeProps {
  text: string
  speed?: number
  className?: string
}

export default function Marquee({ text, speed = 30, className = '' }: MarqueeProps) {
  // Create a long enough string to ensure the screen is filled
  const repeatedText = Array(6).fill(text).join(" • ") + " • "

  return (
    <div className={`relative w-full flex overflow-hidden whitespace-nowrap py-8 border-y border-white/5 bg-dark-surface ${className}`}>
      <motion.div
        className="flex shrink-0"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        <div 
          className="flex whitespace-nowrap text-5xl md:text-7xl font-sans font-black uppercase tracking-widest text-transparent" 
          style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.35)" }}
        >
          <span className="pr-8">{repeatedText}</span>
          <span className="pr-8">{repeatedText}</span>
        </div>
      </motion.div>
    </div>
  )
}
