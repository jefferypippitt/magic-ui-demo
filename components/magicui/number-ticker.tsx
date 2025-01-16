'use client'

import { useEffect, useState } from 'react'

interface NumberTickerProps {
  value: number
}

export default function NumberTicker({ value }: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(value)

  useEffect(() => {
    setDisplayValue(value)
  }, [value])

  return (
    <span className="inline-flex">
      <span className="inline-block tabular-nums">
        {displayValue}
      </span>
    </span>
  )
} 