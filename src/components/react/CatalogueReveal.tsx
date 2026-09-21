import { useState } from 'react'

interface Item {
  num: string
  slug: string
  title: string
  summary?: string
  image: string
  imageAlt?: string
  imagePosition?: string
}

export default function CatalogueReveal({ items }: { items: Item[] }) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="w-full border-t border-grid">
      {items.map((item, i) => (
        <a
          key={item.slug}
          href={`/capabilities#${item.slug}`}
          className="group block border-b border-grid relative transition-colors hover:bg-secondary/20"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          onFocus={() => setHovered(i)}
          onBlur={() => setHovered(null)}
        >
          <div className="flex items-center py-6 md:py-8 lg:py-10 px-2 sm:px-4">
            {/* Left: Number */}
            <span className="font-serif italic text-sm md:text-base text-accent/80 w-10 sm:w-14 md:w-16 flex-shrink-0">
              {item.num}
            </span>

            {/* Title: 2-line stacked editorial */}
            <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-foreground group-hover:text-accent transition-colors leading-[0.96] max-w-[200px] sm:max-w-[240px] md:max-w-[280px] flex-shrink-0">
              {item.title}
            </h3>

            {/* Controlled editorial spacer between title and image */}
            <div className="flex-1 min-w-4 sm:min-w-8" />

            {/* Right: In-flow Preview Image + Arrow */}
            <div className="flex items-center gap-6 sm:gap-8 md:gap-12 flex-shrink-0">
              <div
                className="hidden md:block w-48 sm:w-56 md:w-60 h-28 sm:h-32 md:h-36 overflow-hidden pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-secondary/40"
                style={{
                  opacity: hovered === i ? 1 : 0,
                  transform:
                    hovered === i
                      ? 'translateX(-8px) scale(1)'
                      : 'translateX(6px) scale(0.96)',
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
                className="w-5 h-5 text-accent/70 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

