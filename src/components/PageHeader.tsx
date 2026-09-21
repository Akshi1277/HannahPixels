import type { ReactNode } from 'react'

interface PageHeaderProps {
  eyebrow: string
  titleLine1?: string
  titleLine2?: string
  titleItalic: string
  description: string
  subnav?: { num: string; label: string; href?: string }[]
  children?: ReactNode
}

export default function PageHeader({
  eyebrow,
  titleLine1,
  titleLine2,
  titleItalic,
  description,
  subnav,
  children,
}: PageHeaderProps) {
  return (
    <div className="bg-[#F3EFEA] border-b border-[#E2DDD5] pt-32 sm:pt-36 md:pt-44 pb-14 md:pb-20 px-6 lg:px-12 relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Eyebrow */}
        <div className="text-[11px] font-mono tracking-[0.24em] text-[#111111]/60 uppercase mb-8 md:mb-12">
          {eyebrow}
        </div>

        {/* Headline + Subtitle Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="font-serif text-[3.75rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] leading-[0.9] font-normal tracking-[-0.02em] text-[#111111] uppercase select-none">
              {titleLine1 && <span className="block">{titleLine1}</span>}
              {titleLine2 && <span className="block">{titleLine2}</span>}
              <span className="block italic text-[#A67C52]">{titleItalic}</span>
            </h1>
          </div>

          <div className="lg:col-span-4 pb-2 md:pb-4">
            <p className="text-base sm:text-lg text-[#111111]/80 font-normal leading-relaxed max-w-md">
              {description}
            </p>
          </div>
        </div>

        {/* Optional Sub-nav Bar (e.g. on Process page) */}
        {subnav && subnav.length > 0 && (
          <div className="mt-12 pt-6 border-t border-[#E2DDD5] flex flex-wrap items-center gap-6 md:gap-10 text-[11px] font-mono tracking-[0.22em] text-[#111111]/70 uppercase">
            {subnav.map((item) => (
              <a
                key={item.num}
                href={item.href || `#stage-${item.num}`}
                className="hover:text-[#A67C52] transition-colors"
              >
                <span className="text-[#A67C52] mr-2">{item.num} —</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        )}

        {children}
      </div>
    </div>
  )
}
