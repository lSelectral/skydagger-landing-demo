'use client'

import { cn } from '@/lib/utils'
import { useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface TypingAnimationProps {
  text: string
  duration?: number
  className?: string
}

export default function TypingAnimation({ text, duration = 200, className }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>('')
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      const typingEffect = setInterval(() => {
        setDisplayedText(prev => {
          const nextText = text.substring(0, prev.length + 1)
          if (nextText === text) clearInterval(typingEffect)
          return nextText
        })
      }, duration)

      return () => clearInterval(typingEffect)
    }
  }, [text, duration, isInView])

  return (
    <span
      ref={ref}
      className={cn('font-display text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm', className)}
    >
      {displayedText + (isInView && displayedText.length < text.length ? '|' : '')}
    </span>
  )
}
