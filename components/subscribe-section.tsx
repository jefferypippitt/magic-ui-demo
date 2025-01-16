'use client'

import { useState } from 'react'
import { CheckIcon, ChevronRightIcon } from 'lucide-react'
import { AnimatedSubscribeButton } from './magicui/animated-subscribe-button'

export function SubscribeSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your newsletter subscription logic here
    console.log('Subscribing email:', email)
    setEmail('')
  }

  return (
    <section className='container relative z-10 mx-auto py-6'>
      <div className='mb-6 flex flex-col items-center justify-center space-y-2 text-center'>
        <h2 className='text-2xl font-semibold tracking-tight md:text-3xl'>
          Ready to get started?
        </h2>
        <p className='text-sm text-muted-foreground md:text-base'>
          Join our newsletter to receive updates and tips about Magicui
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className='mx-auto flex max-w-lg flex-col items-center gap-4 sm:flex-row'
      >
        <div className='relative w-full'>
          <input
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Enter your email'
            className='w-full rounded-lg border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50'
            required
          />
        </div>
        <AnimatedSubscribeButton className='w-32'>
          <span className='group inline-flex items-center text-sm'>
            Follow
            <ChevronRightIcon className='ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
          </span>
          <span className='group inline-flex items-center text-sm'>
            <CheckIcon className='mr-1.5 h-4 w-4' />
            Subscribed
          </span>
        </AnimatedSubscribeButton>
      </form>
    </section>
  )
}
