'use client'

import { useRef } from 'react'
import { cn } from '@/lib/utils'

export const InteractiveGridPattern = ({
  width = 20,
  height = 20,
  className,
  squaresClassName
}: {
  width?: number
  height?: number
  className?: string
  squaresClassName?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className={cn('absolute inset-0 z-0', className)}>
      <svg width='100%' height='100%'>
        <pattern
          id='grid'
          width={width}
          height={height}
          patternUnits='userSpaceOnUse'
        >
          <rect
            width={width - 1}
            height={height - 1}
            className={cn(
              'fill-neutral-950/[0.1] transition-colors duration-500 hover:fill-blue-500 dark:fill-neutral-50/[0.1]',
              squaresClassName
            )}
          />
        </pattern>
        <rect width='100%' height='100%' fill='url(#grid)' />
      </svg>
    </div>
  )
}
