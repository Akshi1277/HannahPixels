import { useState } from 'react'

interface Item {
  num: string
  slug: string
  title: string
  summary: string
  image: string
  imageAlt: string
}

export default function CatalogueReveal({ items }: { items: Item[] }) {
  const [active, setActive] = useState(0)

  return (
    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
      <div className="lg:col-span-7">
        {items.map((item, i) => (
          <a
            key={item.slug}
            href={`/capabilities#${item.slug}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className="group grid grid-cols-12 gap-4 sm:gap-8 items-center py-7 md:py-9 border-b border-grid hover:bg-secondary/40 transition-colors -mx-4 px-4"
          >
            <span className="col-span-2 sm:col-span-1 font-serif italic text-xl text-accent">{item.num}</span>
            <h3 className="col-span-9 sm:col-span-7 font-serif text-2xl sm:text-4xl md:text-[2.75rem] lg:text-5xl text-foreground group-hover:text-accent transition-colors leading-none">
              {item.title}
            </h3>
            <div className="hidden sm:block sm:col-span-3">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{item.summary}</p>
            </div>
            <div className="col-span-1 flex justify-end">
              <span className="text-lg text-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all inline-block">→</span>
            </div>
          </a>
        ))}
      </div>

      <div className="hidden lg:block lg:col-span-5 sticky top-32">
        <div className="aspect-[4/5] relative overflow-hidden bg-secondary">
          {items.map((item, i) => (
            <img
              key={item.slug}
              src={item.image}
              alt={item.imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-[cubic-bezier(.16,1,.3,1)]"
              style={{ opacity: active === i ? 1 : 0 }}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
