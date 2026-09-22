import { useState, useSyncExternalStore } from 'react'

interface Item {
  num: string
  slug: string
  title: string
  summary?: string
  image: string
  imageAlt?: string
  imagePosition?: string
  accentHex?: string
  accentInkHex?: string
}

function subscribeHoverCapable(callback: () => void) {
  const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
  mq.addEventListener('change', callback)
  return () => mq.removeEventListener('change', callback)
}
const getHoverCapable = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches
// Assume hover-capable during SSR/pre-hydration — matches the prior (desktop-only) behavior until corrected client-side.
const getHoverCapableServer = () => true

export default function CatalogueReveal({ items }: { items: Item[] }) {
  const [hovered, setHovered] = useState<number | null>(null)
  // Devices with no real pointer (touch) get an always-visible thumbnail
  // instead of a hover-gated one — hover is a desktop-mouse affordance,
  // not something a tap can reliably simulate.
  const hoverCapable = useSyncExternalStore(subscribeHoverCapable, getHoverCapable, getHoverCapableServer)

  return (
    <div className="w-full border-t border-grid">
      {items.map((item, i) => {
        const accent = item.accentHex ?? 'var(--accent)'
        const accentInk = item.accentInkHex ?? 'var(--accent-ink)'
        const isHovered = hovered === i
        const imageVisible = !hoverCapable || isHovered
        return (
        <a
          key={item.slug}
          href={`/capabilities#${item.slug}`}
          className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-0 border-b border-grid relative transition-colors py-6 md:py-8 lg:py-10 px-2 sm:px-4"
          style={{ backgroundColor: isHovered ? `color-mix(in srgb, ${accent} 8%, transparent)` : undefined }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered(i)}
          onBlur={() => setHovered(null)}
        >
          <div className="flex items-center md:contents">
            {/* Number — always carries this category's own accent, so each row reads as distinct at rest */}
            <span
              className="font-serif italic text-sm md:text-base w-10 sm:w-14 md:w-16 flex-shrink-0 transition-colors duration-300"
              style={{ color: accentInk }}
            >
              {item.num}
            </span>

            {/* Title: 2-line stacked editorial */}
            <h3
              className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-foreground transition-colors duration-300 leading-[0.96] max-w-[200px] sm:max-w-[240px] md:max-w-[280px] flex-shrink-0"
              style={{ color: isHovered ? accent : undefined }}
            >
              {item.title}
            </h3>
          </div>

          {/* Controlled editorial spacer between title and image — desktop row layout only */}
          <div className="hidden md:block flex-1 min-w-4 sm:min-w-8" />

          {/* Preview image + arrow — its own row on mobile, inline on desktop */}
          <div className="flex items-center justify-between md:justify-normal gap-6 sm:gap-8 md:gap-12 flex-shrink-0">
            <div
              className="block w-28 h-20 sm:w-36 sm:h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 xl:w-60 xl:h-36 overflow-hidden pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-secondary/40"
              style={{
                opacity: imageVisible ? 1 : 0,
                transform: hoverCapable ? (isHovered ? 'translateX(-8px) scale(1)' : 'translateX(6px) scale(0.96)') : 'none',
                boxShadow: `inset 0 -4px 0 0 ${accent}`,
              }}
            >
              <img
                src={item.image}
                alt={item.imageAlt || item.title}
                className="w-full h-full object-cover"
                style={{ objectPosition: item.imagePosition || 'center' }}
                loading="lazy"
              />
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 transition-all duration-300 flex-shrink-0"
              style={{
                color: isHovered ? accentInk : 'color-mix(in srgb, var(--muted-foreground) 70%, transparent)',
                transform: isHovered ? 'translate(4px, -4px)' : undefined,
              }}
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </a>
        )
      })}
    </div>
  )
}
