import { motion } from 'framer-motion'
import type { ProcessStage } from '@/data/process'

export default function ProcessCutoutSections({ stages }: { stages: ProcessStage[] }) {
  return (
    <div className="relative w-full border-t border-grid">
      {stages.map((stage, idx) => {
        const imageRight = idx % 2 === 0 // 01: right, 02: left, 03: right, 04: left, 05: right, 06: left

        return (
          <section
            key={stage.num}
            id={stage.title.toLowerCase()}
            className="relative z-10 bg-background border-b border-grid overflow-hidden"
          >
            <div
              className={`flex flex-col lg:flex-row ${
                imageRight ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* ── Text column ───────────────────── */}
              <div className="w-full lg:w-1/2 flex items-center bg-background px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-28">
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="max-w-xl w-full"
                >
                  {/* Step Numeral & Eyebrow */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <span className="font-serif italic text-2xl sm:text-3xl text-accent font-light">
                      {stage.num}
                    </span>
                    <span className="w-8 h-px bg-accent/30" />
                    <span className="text-[11px] uppercase tracking-[0.25em] font-mono text-muted-foreground">
                      Stage {stage.num} of {String(stages.length).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Stage Heading */}
                  <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-foreground tracking-tight leading-[1.02] mb-7">
                    {stage.title}
                  </h2>

                  {/* Body Paragraphs */}
                  <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed font-light">
                    {stage.paragraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {/* Key Deliverables & Focus Badges */}
                  {stage.highlights && stage.highlights.length > 0 && (
                    <div className="mt-8 pt-7 border-t border-grid/70">
                      <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-accent block mb-3 font-medium">
                        Focus &amp; Deliverables
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {stage.highlights.map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-3 py-1 text-xs text-foreground/85 bg-secondary/50 border border-grid rounded-full font-mono tracking-tight"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              {/*
                ── Image column — THE CUTOUT WINDOW ────────────
                background-attachment: fixed pins the image relative
                to the viewport so the cutout window scrolls up the page
                while the image stays frozen behind it, producing
                the clipping/parallax aperture effect.
              */}
              <div
                className={`w-full lg:w-1/2 min-h-[48vh] sm:min-h-[58vh] lg:min-h-[75vh] relative bg-secondary/30 bg-cover bg-center lg:bg-fixed ${
                  imageRight ? 'lg:bg-right' : 'lg:bg-left'
                }`}
                style={{
                  backgroundImage: `url("${stage.image}")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                }}
                role="img"
                aria-label={stage.imageAlt}
              >
                {/* Subtle scrim for luxury color temperature consistency */}
                <div className="absolute inset-0 bg-ink/[0.05] pointer-events-none" />
                <div className="hidden lg:block absolute inset-y-0 w-px bg-grid pointer-events-none" style={{ [imageRight ? 'left' : 'right']: 0 }} />
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
