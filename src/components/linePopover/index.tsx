import React, { useEffect, useRef, useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { motion } from 'framer-motion'

type Props = {
  open: boolean
  trigger: React.ReactNode
  children: React.ReactNode
  sideOffset?: number
}

const LinePopover = (props: Props) => {
  const triggerRef = useRef<HTMLButtonElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [lineHeight, setLineHeight] = useState(22)

  useEffect(() => {
    if (!triggerRef.current || !contentRef.current) return
    const triggerRect = triggerRef.current.getBoundingClientRect()
    const contentRect = contentRef.current.getBoundingClientRect()
    const distance = Math.abs(triggerRect.top - contentRect.bottom)
    setLineHeight(distance)
  }, [triggerRef, contentRef, props.open])

  return (
    <Popover open={props.open}>
      <PopoverTrigger ref={triggerRef} asChild>
        {props.trigger}
      </PopoverTrigger>
      <PopoverContent
        ref={contentRef}
        sideOffset={props.sideOffset}
        className='w-auto border-0 bg-transparent p-0'
        side='top'
      >
        <motion.div
          className='absolute left-1/2 top-full z-0 w-[2px] -translate-x-1/2 bg-border'
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: lineHeight, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeInOut' }}
        >
          <div className='absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-border bg-background'></div>
        </motion.div>
        <motion.div
          className='bg-transparent text-white shadow-lg'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {props.children}
        </motion.div>
      </PopoverContent>
    </Popover>
  )
}

export default LinePopover
