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
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const wordItem = {
    hidden: { opacity: 0, y: 30 },
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
      className="relative min-h-[105vh] flex items-end pb-16 md:pb-24 overflow-hidden bg-[#090B0A]"
      aria-label="Hannah Pixels Luxury Packaging"
    >
      {/* Background Image with Parallax & Daylight Luxury Lighting */}
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
        <AppImage
          src="/images/luxury-packaging-hero.jpg"
          alt="Hannah Pixels luxury packaging and rigid boxes on architectural stone"
          fill
          priority
          className="object-cover scale-105 origin-center brightness-100 contrast-[1.03] saturate-[1.06]"
          sizes="100vw"
        />

        {/* Tailored Scrims — high legibility on left, 100% open & sunlit on right */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090B0A]/90 via-[#090B0A]/20 via-20% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090B0A]/92 via-[#090B0A]/60 via-35% via-[#090B0A]/10 via-55% to-transparent pointer-events-none" />
      </motion.div>

      {/* Content with Fade & Parallax */}
      <motion.div 
        className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-36"
        style={{ y: textY, opacity }}
      >
        <div className="w-full space-y-6 md:space-y-8">
          {/* Eyebrow tag */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#F8BC23]/35 bg-black/40 backdrop-blur-md"
          >
            <span className="editorial-tag text-[#F8BC23] tracking-[0.22em] font-semibold text-[10px]">
              ATELIER PACKAGING · UK &amp; UAE · LOW MOQ FROM 100 PCS
            </span>
          </motion.div>

          {/* Stately Editorial Headline */}
          <motion.h1 
            variants={container}
            initial="hidden"
            animate="show"
            className="display-headline text-white perspective-[1000px] max-w-4xl tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
          >
            <motion.span className="inline-block" variants={wordItem}>Custom</motion.span>{' '}
            <motion.span className="inline-block" variants={wordItem}>Packaging,</motion.span>
            <br className="hidden md:block" />
            <motion.span className="inline-block text-[#F8BC23] font-normal italic" variants={wordItem}>Manufactured</motion.span>{' '}
            <motion.span className="inline-block text-[#F8BC23] font-normal italic" variants={wordItem}>Direct.</motion.span>
          </motion.h1>

          {/* Sub-copy with breathing room */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
          >
            From magnetic rigid boxes for oud and luxury confectionery to certified eco-friendly hospitality containers. Direct manufacturing, rapid 24-hour CAD dielines, and uncompromised tactile finishing.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2"
          >
            <a
              href="#quote-builder"
              className="flex items-center gap-3 bg-[#F8BC23] text-[#090B0A] px-8 py-4 rounded-full font-bold text-sm hover:bg-[#FFCB4D] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#F8BC23]/25 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2 font-semibold tracking-wide">
                Request Quote
                <Icon name="ArrowRightIcon" size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </a>

            <a
              href="#sample-kit"
              className="flex items-center gap-2.5 px-7 py-4 rounded-full text-white border border-white/25 hover:border-[#F8BC23]/60 bg-black/35 hover:bg-black/55 backdrop-blur-md transition-all text-sm font-medium hover:scale-105 active:scale-95 shadow-lg shadow-black/30"
            >
              <Icon name="CubeIcon" size={16} className="text-[#F8BC23]" />
              <span>Order Sample Swatch Kit</span>
            </a>
          </motion.div>

          {/* Trust badges strip */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-white/80 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-center gap-2">
              <Icon name="CheckBadgeIcon" size={15} className="text-[#F8BC23]" />
              <span>FSC® Certified Sourcing</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="ClockIcon" size={15} className="text-[#F8BC23]" />
              <span>24–48h CAD Dieline Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="GlobeAltIcon" size={15} className="text-[#F8BC23]" />
              <span>UK &amp; UAE Consolidated Freight</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
