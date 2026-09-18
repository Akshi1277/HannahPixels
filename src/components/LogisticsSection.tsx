import Icon from '@/components/ui/AppIcon'
import { whatsAppUrl } from '@/lib/contact'

const processSteps = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'We begin with your brand, your product and the purpose behind the piece.'
  },
  {
    step: '02',
    title: 'DEVELOP',
    description: 'Ideas become structures, materials, finishes and considered details.'
  },
  {
    step: '03',
    title: 'REFINE',
    description: 'We explore papers, boards, textures, colours and specialist finishes to find the right combination.'
  },
  {
    step: '04',
    title: 'PRODUCE',
    description: 'Every piece is produced with precision and close attention to detail.'
  },
  {
    step: '05',
    title: 'FINISH',
    description: 'From embossing and debossing to foiling, speciality papers and bespoke constructions, the final details bring the work together.'
  },
  {
    step: '06',
    title: 'DELIVER',
    description: 'Finished pieces are prepared for delivery across the world.'
  }
]

export default function LogisticsSection() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#FBF9F4] border-t border-[#E6E0D2] relative overflow-hidden scroll-mt-28">
      {/* Anchor alias for backwards compatibility */}
      <div id="logistics" className="sr-only" />

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
          <p className="text-[#4A4E43] text-base md:text-lg leading-relaxed max-w-md font-normal">
            A disciplined progression from brand intent to physical reality, executed with intention at every stage.
          </p>
        </div>

        {/* 6-Step Editorial Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="p-8 rounded-2xl bg-white border border-[#E6E0D2] hover:border-[#F8BC23]/50 transition-all duration-300 relative group shadow-sm hover:shadow-lg flex flex-col justify-between space-y-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-[#93660C] tracking-wider">
                  {step.step}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#93660C] bg-[#F3EEE3] border border-[#F8BC23]/30 px-2.5 py-0.5 rounded-full">
                  Stage {step.step}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-tight text-[#181A16] group-hover:text-[#93660C] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#4A4E43] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#E6E0D2]/60 flex items-center justify-between text-xs text-[#93660C]/70">
                <span className="font-mono text-[11px] tracking-wider">HANNAH PIXELS</span>
                <Icon name="ArrowRightIcon" size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Global Distribution & Inquiry Banner */}
        <div className="p-8 md:p-10 rounded-3xl bg-[#090B0A] border border-[#202824] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left z-10">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-wider text-[#F8BC23]">
              <Icon name="GlobeAltIcon" size={16} />
              <span>Without Borders · Worldwide Delivery</span>
            </div>
            <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
              Ready to bring your packaging idea to life?
            </h4>
            <p className="text-xs md:text-sm text-white/70 max-w-xl">
              From bespoke single projects to scalable production runs, Hannah Pixels works with brands across the UK, UAE and worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 z-10 w-full sm:w-auto">
            <a
              href="#quote-builder"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-full bg-[#F8BC23] text-[#090B0A] font-bold text-xs uppercase tracking-wider hover:bg-[#FFCB4D] transition-all shadow-md"
            >
              Start Project Inquiry
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

