import { useEffect, useRef, useState } from 'react'

export interface ProcessStageItem {
  num: string
  title: string
  desc: string
}

export default function ProcessTimeline({ stages }: { stages: ProcessStageItem[] }) {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            if (!isNaN(index)) {
              setActiveStep(index)
            }
          }
        });
      },
      { threshold: 0.4, rootMargin: '-25% 0px -25% 0px' }
    )

    stepRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [stages])

  return (
    <div className="relative">
      {/* Central Vertical Timeline Spine */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-grid md:-translate-x-1/2" />

      {stages.map((step, i) => (
        <div
          key={step.num}
          ref={(el) => {
            stepRefs.current[i] = el
          }}
          data-index={i}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 py-12 md:py-20 transition-opacity duration-500 ease-out"
          style={{
            opacity: activeStep === i ? 1 : 0.35,
          }}
        >
          {/* Timeline Node Dot */}
          <div
            className={`absolute left-0 md:left-1/2 top-14 md:top-16 w-3 h-3 rounded-full md:-translate-x-1/2 -translate-x-1/2 transition-all duration-500 z-10 ${
              activeStep === i ? 'bg-accent scale-125 ring-4 ring-background' : 'bg-grid'
            }`}
          />

          {/* Title & Giant Numeral Column */}
          <div
            className={`pl-8 md:pl-0 ${
              i % 2 === 0 ? 'md:text-right md:pr-16' : 'md:col-start-2 md:pl-16'
            }`}
          >
            <span className="font-serif text-6xl md:text-8xl font-light text-accent/30 block leading-none mb-3">
              {step.num}
            </span>
            <h3
              className={`font-serif text-3xl md:text-4xl lg:text-5xl font-light transition-colors duration-500 ${
                activeStep === i ? 'text-foreground' : 'text-foreground/50'
              }`}
            >
              {step.title}
            </h3>
          </div>

          {/* Description Paragraph Column */}
          <div
            className={`pl-8 md:pl-0 flex items-center ${
              i % 2 === 0
                ? 'md:col-start-2 md:pl-16'
                : 'md:row-start-1 md:text-right md:pr-16 md:justify-end'
            }`}
          >
            <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-md">
              {step.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
