import { useMemo } from 'react'

interface AmbientDustProps {
  count?: number
  color?: string
}

export default function AmbientDust({ count = 16, color = '#F8BC23' }: AmbientDustProps) {
  // Generate deterministic particle configurations once
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${(i * 17 + 7) % 94}%`,
      top: `${(i * 23 + 11) % 90}%`,
      size: `${1.5 + (i % 3) * 0.8}px`,
      duration: `${12 + (i % 5) * 4}s`,
      delay: `${-(i * 2.3)}s`,
      blur: i % 2 === 0 ? '0.5px' : '0px',
      opacity: 0.25 + (i % 4) * 0.12,
    }))
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-pulse"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: color,
            opacity: p.opacity,
            filter: `blur(${p.blur})`,
            boxShadow: `0 0 8px ${color}66`,
            animation: `dustFloat ${p.duration} ease-in-out infinite alternate`,
            animationDelay: p.delay,
          }}
        />
      ))}
      <style>{`
        @keyframes dustFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(18px, -24px, 0) scale(1.15);
          }
          100% {
            transform: translate3d(-14px, -45px, 0) scale(0.9);
          }
        }
      `}</style>
    </div>
  )
}
