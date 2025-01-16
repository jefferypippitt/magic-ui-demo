'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface WaterfallProps {
  className?: string
  children: React.ReactNode
  delay?: number
}

export function Waterfall({ className, children, delay = 0 }: WaterfallProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay: delay / 1000, // Convert ms to seconds
      }}
      className={cn('relative', className)}
    >
      {children}
    </motion.div>
  )
} 