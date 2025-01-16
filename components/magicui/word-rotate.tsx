'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface WordRotateProps {
  words: string[]
  className?: string
  delay?: number
}

export function WordRotate({
  words,
  className,
  delay = 2000
}: WordRotateProps) {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShow(false)
      setTimeout(() => {
        setIndex(prev => (prev + 1) % words.length)
        setShow(true)
      }, 200)
    }, delay)

    return () => clearInterval(intervalId)
  }, [delay, words.length])

  return (
    <span className='relative inline-flex'>
      <AnimatePresence mode='wait'>
        {show && (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={className}
          >
            {words[index]}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}
