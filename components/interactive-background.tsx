'use client'

import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'

export function InteractiveBackground() {
  return (
    <InteractiveGridPattern
      className='absolute inset-0 z-0 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]'
      width={20}
      height={20}
      squares={[80, 80]}
      squaresClassName='hover:fill-blue-500/50'
    />
  )
}
