'use client'

import { motion } from 'framer-motion'
import { Star, Download, Github, Heart } from 'lucide-react'

const stats = [
  {
    title: 'GitHub Stars',
    value: '2.3k+',
    description: 'Active community',
    icon: <Star className='h-3.5 w-3.5 text-primary' />
  },
  {
    title: 'Downloads',
    value: '50k+',
    description: 'Monthly npm installs',
    icon: <Download className='h-3.5 w-3.5 text-primary' />
  },
  {
    title: 'Contributors',
    value: '40+',
    description: 'Open source devs',
    icon: <Github className='h-3.5 w-3.5 text-primary' />
  },
  {
    title: 'Happy Users',
    value: '1000+',
    description: '30+ countries',
    icon: <Heart className='h-3.5 w-3.5 text-primary' />
  }
]

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.97
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.03 * index,
      duration: 0.3,
      ease: 'easeOut'
    }
  })
}

export function ShowcaseStats() {
  return (
    <section className='container relative z-10 mx-auto py-6'>
      <div className='mb-4 flex flex-col items-center justify-center'>
        <h2 className='text-center text-xl font-semibold tracking-tight md:text-2xl'>
          Trusted by Developers
        </h2>
        <p className='mt-1 text-center text-sm text-muted-foreground'>
          Join thousands of developers building better UIs
        </p>
      </div>

      <div className='mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4'>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true }}
            custom={index}
            className='group relative flex flex-col items-center space-y-1 text-center'
          >
            <div className='relative rounded-full bg-primary/10 p-1.5 ring-1 ring-primary/25'>
              <div className='absolute inset-0 rounded-full bg-primary/10 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-100 group-hover:blur-xl' />
              <div className='h-4 w-4 text-primary'>{stat.icon}</div>
            </div>
            <p className='text-xl font-bold tracking-tight text-foreground'>
              {stat.value}
            </p>
            <div>
              <h3 className='text-xs font-medium text-foreground'>
                {stat.title}
              </h3>
              <p className='text-xs text-muted-foreground'>
                {stat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
