'use client'

import NumberTicker from '@/components/magicui/number-ticker'
import { useEffect, useState } from 'react'

export function Loading({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2000
    let startTime: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const runtime = timestamp - startTime
      const relativeProgress = Math.min(runtime / duration, 1)
      const currentNumber = Math.floor(relativeProgress * 100)

      setProgress(currentNumber)

      if (currentNumber < 100) {
        requestAnimationFrame(animate)
      } else {
        setTimeout(onLoadingComplete, 1000)
      }
    }

    requestAnimationFrame(animate)
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-background">
      <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
        <NumberTicker value={progress} />
      </p>
    </div>
  )
} 