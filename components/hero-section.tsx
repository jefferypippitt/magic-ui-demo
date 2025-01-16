'use client'

import { RainbowButton } from './magicui/rainbow-button'
import { WordRotate } from './magicui/word-rotate'

export function HeroSection() {
  return (
    <div className='pointer-events-none relative z-10 w-full'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center gap-3 pb-3 pt-4 lg:pb-4 lg:pt-6'>
          <div className='flex flex-col items-center gap-3'>
            <h1 className='max-w-xl text-center text-xl font-semibold leading-normal tracking-tight md:text-3xl lg:text-4xl'>
              Welcome to{' '}
              <span className='animate-gradient inline-block bg-gradient-to-r from-[hsl(var(--color-1))] via-[hsl(var(--color-2))] to-[hsl(var(--color-3))] bg-clip-text py-1 leading-[1.2] text-transparent'>
                Magicui
              </span>
            </h1>
            <div className='flex h-10 items-center justify-center md:h-14'>
              <WordRotate
                className='text-lg font-bold tracking-tight text-foreground md:text-2xl lg:text-3xl'
                words={[
                  'Beautiful UI Components',
                  'Smooth Animations',
                  'Modern Design System',
                  'Developer Friendly',
                  'Production Ready'
                ]}
              />
            </div>

            <div className='mx-auto max-w-lg text-center text-muted-foreground'>
              <p className='text-xs font-medium leading-relaxed md:text-sm'>
                50+ free and open-source animated components built with React,
                Typescript, Tailwind CSS, and Framer Motion.
              </p>
              <p className='mt-2 text-xs font-normal md:text-sm'>
                Perfect companion for shadcn/ui.
              </p>
              <div className='pointer-events-auto mt-4'>
                <RainbowButton className='text-xs font-semibold tracking-wide text-white dark:text-black'>
                  Get Unlimited Access
                </RainbowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
