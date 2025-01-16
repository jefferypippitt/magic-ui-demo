'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { InteractiveBackground } from '@/components/interactive-background'
import { HeroSection } from '@/components/hero-section'
import { FeaturesGrid } from '@/components/features-grid'
import { ShowcaseStats } from '@/components/showcase-stats'
import { Waterfall } from '@/components/waterfall'
import { SubscribeSection } from '@/components/subscribe-section'
import { Loading } from '@/components/loading'
import { Header } from '@/components/header'

export function HomeContent() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading ? (
        <Loading onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <motion.div
          className='relative min-h-screen'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <InteractiveBackground />
          <main className='space-y-2 pb-24'>
            <Waterfall>
              <HeroSection />
            </Waterfall>
            <Waterfall delay={200}>
              <FeaturesGrid />
            </Waterfall>
            <Waterfall delay={400}>
              <ShowcaseStats />
            </Waterfall>
            <Waterfall delay={600}>
              <SubscribeSection />
            </Waterfall>
          </main>
          <div className='fixed bottom-0 left-0 right-0 z-50'>
            <Header />
          </div>
        </motion.div>
      )}
    </>
  )
}
