import type { ImgHTMLAttributes } from 'react'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  sizes?: string
  className?: string
}

export default function AppImage({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  sizes,
  className = '',
  ...props
}: AppImageProps) {
  if (fill) {
    return (
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full ${className}`}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        {...props}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  )
}
