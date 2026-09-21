import { useEffect, useRef, useState } from 'react'

interface Stage {
  num: string
  title: string
  desc: string
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
      {stages.map((stage, i) => (
        <div
          key={stage.num}
          ref={(el) => {
            refs.current[i] = el
          }}
          className="py-16 md:py-24 border-t border-grid first:border-t-0 transition-[opacity,filter] duration-500 ease-out"
          style={{
            opacity: activeIndex === i ? 1 : 0.35,
            filter: activeIndex === i ? 'none' : 'blur(0.5px)',
          }}
        >
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-16 items-start">
            <div className="lg:col-span-4 flex items-baseline gap-5">
              <span
                className="font-serif italic text-accent shrink-0 transition-[font-size] duration-500"
                style={{ fontSize: activeIndex === i ? '3.5rem' : '2rem' }}
              >
                {stage.num}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-foreground">{stage.title}</h3>
            </div>
            <div className="lg:col-span-6">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                {stage.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
