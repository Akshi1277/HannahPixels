import { useRef } from 'react'
import AppImage from '@/components/ui/AppImage'
import Icon from '@/components/ui/AppIcon'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const wordItem = {
    hidden: { opacity: 0, y: 24 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const } 
    }
  }

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen min-h-[100dvh] flex items-end pb-12 md:pb-16 overflow-hidden bg-[#090B0A]"
      aria-label="Hannah Pixels Luxury Packaging"
    >
      {/* Background Image with Parallax & Daylight Luxury Lighting */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <AppImage
          src="/images/luxury-packaging-hero.jpg"
          alt="Hannah Pixels luxury packaging and rigid boxes on architectural stone"
          fill
          priority
          className="object-cover scale-110 translate-x-[6%] lg:translate-x-[8%] origin-right brightness-100 contrast-[1.03] saturate-[1.06]"
          sizes="100vw"
        />

        {/* Tailored Scrims — seamless dark field on left, sunlit physical packaging on right */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090B0A] via-[#090B0A]/40 via-30% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090B0A] via-[#090B0A]/85 via-32% via-[#090B0A]/15 via-55% to-transparent pointer-events-none" />
      </motion.div>

      {/* Content with Fade & Parallax */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-28 md:pt-36"
        style={{ y: textY, opacity }}
      >
        <div className="w-full space-y-6 md:space-y-7">
          {/* Eyebrow - Pure editorial typography with uniform bullet hierarchy */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <span className="w-6 h-px bg-[#F8BC23]" />
            <span className="font-mono text-[11px] tracking-[0.22em] text-[#F8BC23] uppercase font-medium">
              Design • Print • Packaging • Worldwide
            </span>
          </motion.div>

          {/* Stately Editorial Headline */}
          <motion.h1 
            variants={container}
            initial="hidden"
            animate="show"
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-medium text-white tracking-tight leading-[1.06] max-w-2xl"
          >
            <motion.span className="inline-block" variants={wordItem}>Where</motion.span>{' '}
            <motion.span className="inline-block" variants={wordItem}>Ideas</motion.span>{' '}
            <br className="hidden sm:block" />
            <motion.span className="inline-block text-[#F8BC23] font-normal italic" variants={wordItem}>Take</motion.span>{' '}
            <motion.span className="inline-block text-[#F8BC23] font-normal italic" variants={wordItem}>Form.</motion.span>
          </motion.h1>

          {/* Crisp, Dignified Sub-copy constrained to 420px to protect negative space */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-[420px] space-y-2.5"
          >
            <p className="text-base sm:text-lg text-white/90 leading-relaxed font-normal">
              A print and packaging house creating considered physical experiences for brands across the world.
            </p>
            <p className="text-sm sm:text-base text-[#F8BC23] font-medium tracking-wide">
              Designed with intention. Made to be remembered.
            </p>
          </motion.div>

          {/* Clean, Tactile CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
          >
            <a
              href="#quote-builder"
              className="group flex items-center gap-3 bg-[#F8BC23] text-[#090B0A] pl-7 pr-3 py-3.5 rounded-full font-bold text-xs sm:text-[13px] uppercase tracking-wider hover:bg-[#FFCB4D] transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/50 relative overflow-hidden"
            >
              <span className="relative z-10 font-bold">
                Start a Conversation
              </span>
              <span className="relative z-10 w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:scale-105 group-hover:translate-x-0.5 transition-transform duration-200">
                <Icon name="ArrowRightIcon" size={12} />
              </span>
            </a>

            <a
              href="#what-we-create"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full text-white/90 hover:text-white border border-white/25 hover:border-[#F8BC23]/60 bg-black/40 hover:bg-black/60 backdrop-blur-md transition-all text-xs sm:text-[13px] font-semibold uppercase tracking-wider"
            >
              <span>Explore Creations</span>
              <Icon name="ArrowDownIcon" size={12} className="text-[#F8BC23]" />
            </a>
          </motion.div>

          {/* Canonical Pillars Strip - Single Horizon Line */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-6 border-t border-white/10 max-w-2xl flex flex-wrap items-center gap-x-5 sm:gap-x-7 gap-y-2 text-[10px] sm:text-[11px] font-mono tracking-wider text-white/70 uppercase"
          >
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F8BC23]" />
              <span>Thoughtful Design</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F8BC23]" />
              <span>Exceptional Materials</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F8BC23]" />
              <span>Precise Production</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F8BC23]" />
              <span>Worldwide Delivery</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
