'use client'

import { motion } from 'framer-motion'
import { Code, Sparkles, Zap, GitBranch } from 'lucide-react'

const features = [
  {
    title: 'Modern Components',
    description:
      'Built with React 18, TypeScript, and modern web standards in mind.',
    icon: <Code className='h-3.5 w-3.5 text-primary' />
  },
  {
    title: 'Animation Ready',
    description: 'Powered by Framer Motion for buttery-smooth transitions.',
    icon: <Sparkles className='h-3.5 w-3.5 text-primary' />
  },
  {
    title: 'Performance First',
    description:
      'Optimized for speed and efficiency without sacrificing quality.',
    icon: <Zap className='h-3.5 w-3.5 text-primary' />
  },
  {
    title: 'Open Source',
    description: 'Free to use and modify under MIT license. PRs welcome!',
    icon: <GitBranch className='h-3.5 w-3.5 text-primary' />
  }
]

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * index
    }
  })
}

export function FeaturesGrid() {
  return (
    <section className='container relative z-10 mx-auto py-6'>
      <div className='mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2'>
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            custom={index}
            className='group relative rounded-lg border border-transparent bg-gradient-to-b from-background/60 to-background/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-muted-foreground/20 hover:shadow-sm'
          >
            <div className='mb-2 w-fit rounded-md bg-primary/10 p-1.5 ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/15 group-hover:ring-primary/30'>
              <div className='h-4 w-4 text-primary'>{feature.icon}</div>
            </div>
            <div className='space-y-1'>
              <h3 className='text-sm font-semibold tracking-tight text-foreground'>
                {feature.title}
              </h3>
              <p className='text-xs leading-relaxed text-muted-foreground'>
                {feature.description}
              </p>
            </div>
            <div className='absolute inset-0 rounded-lg bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
