import { useEffect, useRef, useState } from 'react'

interface Stage {
  num: string
  title: string
  desc: string
  image: string
  imageAlt: string
}

export default function ProcessStepper({ stages }: { stages: Stage[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.indexOf(entry.target as HTMLDivElement)
            if (idx !== -1) setActiveIndex(idx)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {stages.map((stage, i) => {
        const isActive = activeIndex === i
        return (
          <div
            key={stage.num}
            ref={(el) => {
              refs.current[i] = el
            }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center py-12 md:py-16 border-t border-grid first:border-t-0 first:pt-0 last:pb-0 transition-opacity duration-500 ease-out"
            style={{ opacity: isActive ? 1 : 0.35 }}
          >
            <div className="lg:col-span-4 order-2 lg:order-1">
              <div className="flex items-baseline gap-5">
                <span
                  className="font-serif italic text-accent shrink-0 origin-left transition-transform duration-500 text-[2rem]"
                  style={{ transform: isActive ? 'scale(1.75)' : 'scale(1)' }}
                >
                  {stage.num}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-foreground">{stage.title}</h2>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mt-4">
                {stage.desc}
              </p>
            </div>

            <div className="lg:col-span-8 order-1 lg:order-2">
              <div
                className="aspect-[16/9] lg:aspect-[21/9] relative overflow-hidden bg-secondary transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  transform: isActive ? 'scale(1)' : 'scale(0.98)',
                  boxShadow: 'inset 0 -4px 0 0 var(--accent)',
                }}
              >
                <img
                  src={stage.image}
                  alt={stage.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                  style={{ opacity: isActive ? 1 : 0.7 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
