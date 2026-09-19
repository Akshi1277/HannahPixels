import { motion } from 'framer-motion'
import Icon from '@/components/ui/AppIcon'
import { whatsAppUrl } from '@/lib/contact'

interface ProcessStep {
  step: string
  title: string
  touchpoint: string
  description: string
}

const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    touchpoint: 'Brand & Purpose',
    description: 'We begin with your brand, your product and the purpose behind the piece.'
  },
  {
    step: '02',
    title: 'Develop',
    touchpoint: 'Structures & Details',
    description: 'Ideas become structures, materials, finishes and considered details.'
  },
  {
    step: '03',
    title: 'Refine',
    touchpoint: 'Papers & Finishes',
    description: 'We explore papers, boards, textures, colours and specialist finishes to find the right combination.'
  },
  {
    step: '04',
    title: 'Produce',
    touchpoint: 'Precision Craft',
    description: 'Every piece is produced with precision and close attention to detail.'
  },
  {
    step: '05',
    title: 'Finish',
    touchpoint: 'Bespoke Constructions',
    description: 'From embossing and debossing to foiling, speciality papers and bespoke constructions, the final details bring the work together.'
  },
  {
    step: '06',
    title: 'Deliver',
    touchpoint: 'Worldwide Delivery',
    description: 'Finished pieces are prepared for delivery across the world.'
  }
]

export default function LogisticsSection() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#FBF9F4] border-t border-[#E6E0D2] relative overflow-hidden scroll-mt-28" aria-label="Our Process">
      {/* Anchor alias for backwards compatibility */}
      <div id="logistics" className="sr-only" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#F8BC23]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#93660C]">04</span>
              <span className="w-8 h-px bg-[#93660C]/40" />
              <span className="editorial-tag text-[#93660C]">THE PROCESS</span>
            </div>
            <h2 className="section-headline text-[#181A16] text-3xl md:text-5xl font-medium tracking-tight">
              From Idea to Finished Piece.
            </h2>
          </div>
          <div className="space-y-2 max-w-md">
            <p className="text-[#4A4E43] text-base md:text-lg leading-relaxed font-normal">
              A disciplined progression from brand intent to physical reality, executed with intention at every stage.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#93660C] tracking-wide">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#93660C]" />
              <span>SIX SEQUENTIAL ATELIER PHASES</span>
            </div>
          </div>
        </div>

        {/* 6 Sequential Atelier Phases - Clean Editorial Journey */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="rounded-[2.25rem] p-1.5 bg-[#181A16]/5 ring-1 ring-[#93660C]/10 shadow-xs hover:shadow-xl hover:ring-[#93660C]/30 hover:-translate-y-1 transition-all duration-400 group flex flex-col"
            >
              <div className="rounded-[calc(2.25rem-0.375rem)] bg-white p-7 md:p-8 border border-[#E6E0D2] flex flex-col justify-between h-full relative overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]">
                {/* Subtle corner foil badge effect */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-[#F8BC23]/15 via-[#F8BC23]/5 to-transparent pointer-events-none rounded-bl-full group-hover:scale-110 transition-transform duration-500" />

                <div className="space-y-5 relative z-10">
                  {/* Header with step number and touchpoint */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl md:text-4xl font-bold text-[#93660C] group-hover:text-[#F8BC23] transition-colors">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#93660C] bg-[#F4EFE6] border border-[#F8BC23]/30 px-3 py-1 rounded-full">
                      {step.touchpoint}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5">
                    <h3 className="text-2xl font-serif font-bold tracking-tight text-[#181A16] group-hover:text-[#93660C] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-[15px] text-[#4A4E43] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Subtle bottom progression indicator */}
                <div className="pt-5 mt-6 border-t border-[#E6E0D2]/80 flex items-center justify-between text-xs font-mono text-[#93660C]/80 relative z-10">
                  <span className="text-[11px] tracking-wider uppercase">Stage {step.step} of 06</span>
                  <div className="flex items-center gap-1.5 text-[#93660C] group-hover:translate-x-1 transition-transform">
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {idx === processSteps.length - 1 ? 'Delivered' : 'Next Phase'}
                    </span>
                    <Icon name="ArrowRightIcon" size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Distribution & Inquiry Banner */}
        <div className="p-8 md:p-10 rounded-[2.25rem] bg-[#090B0A] border border-[#202824] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left z-10">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-[#F8BC23]">
              <Icon name="GlobeAltIcon" size={16} />
              <span>Without Borders · Worldwide Delivery</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Ready to bring your packaging idea to life?
            </h4>
            <p className="text-xs md:text-sm text-white/70 max-w-xl">
              From a single bespoke project to larger production runs, Hannah Pixels works with brands across markets and delivers worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full sm:w-auto">
            <a
              href="#quote-builder"
              className="group w-full sm:w-auto text-center pl-6 pr-2.5 py-2.5 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all hover:scale-105 active:scale-[0.98] shadow-md flex items-center justify-center gap-3"
            >
              <span>Start Project Inquiry</span>
              <span className="w-6 h-6 rounded-full bg-black/10 flex items-center justify-center group-hover:scale-110 group-hover:translate-x-0.5 transition-transform duration-200">
                <Icon name="ArrowRightIcon" size={11} />
              </span>
            </a>
            <a
              href={whatsAppUrl("Hello Hannah Pixels, I'd like to consult on a new print & packaging project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-5 py-3.5 rounded-full border border-white/20 hover:border-[#F8BC23]/60 text-white/90 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Icon name="MessageCircleIcon" size={14} className="text-[#F8BC23]" />
              <span>WhatsApp Studio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
