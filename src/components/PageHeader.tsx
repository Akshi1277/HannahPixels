import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface PageHeaderProps {
  badge: string
  title: string
  titleItalic?: string
  description: string
  breadcrumbs?: { label: string; href?: string }[]
  children?: ReactNode
}

export default function PageHeader({
  badge,
  title,
  titleItalic,
  description,
  breadcrumbs = [{ label: 'Home', href: '/' }],
  children
}: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#090B0A] text-white border-b border-[#202824] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#F8BC23]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[200px] bg-[#3B6A3E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono tracking-wider text-white/50 mb-6">
          {breadcrumbs.map((crumb, idx) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {idx > 0 && <span className="text-white/30">/</span>}
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-[#F8BC23] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white/80">{crumb.label}</span>
              )}
            </span>
          ))}
          <span className="text-white/30">/</span>
          <span className="text-[#F8BC23] font-semibold">{badge}</span>
        </nav>

        {/* Header Content */}
        <div className="space-y-5 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141A17] border border-[#F8BC23]/30">
            <span className="w-2 h-2 rounded-full bg-[#F8BC23]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#F8BC23] uppercase">
              {badge}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-medium tracking-tight text-white leading-[1.08]">
            {title}{' '}
            {titleItalic && (
              <span className="shimmer-gold italic font-normal">{titleItalic}</span>
            )}
          </h1>

          <p className="text-base sm:text-lg text-white/75 leading-relaxed font-normal max-w-2xl">
            {description}
          </p>
        </div>

        {children && <div className="mt-8 pt-8 border-t border-white/10">{children}</div>}
      </div>
    </div>
  )
}
