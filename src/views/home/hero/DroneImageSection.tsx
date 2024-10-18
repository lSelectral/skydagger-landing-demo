import CustomImage from '@/components/image'
import { useMediaQuery } from '@/hooks/use-media-query'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

type Line = {
  x1: number
  y1: number
  x2: number
  y2: number
}

type InfoPoint = {
  id: string
  buttonPosition: { x: string; y: string }
  anchorPosition: { x: string; y: string }
  text: string
  isHiddenByDefault?: boolean
  isBottom?: boolean
}

const INFO_POINTS: InfoPoint[] = [
  {
    id: 'battery',
    buttonPosition: { x: '48%', y: '50%' },
    anchorPosition: { x: '32%', y: '5%' },
    text: 'Battery Capacity 9000 Mah'
  },
  {
    id: 'temperature',
    buttonPosition: { x: '64%', y: '66%' },
    anchorPosition: { x: '62%', y: '22%' },
    text: 'Operating Temperature : 10C- 45C'
  },
  {
    id: 'speed',
    buttonPosition: { x: '20%', y: '67%' },
    anchorPosition: { x: '-20%', y: '110%' },
    text: 'Max Speed 45 Km/h',
    isHiddenByDefault: true,
    isBottom: true
  }
]

const DroneImageSection = ({
  openDroneInfo,
  handleButtonClick
}: {
  openDroneInfo: boolean
  handleButtonClick: () => void
}) => {
  const [activeInfo, setActiveInfo] = useState<string | null>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const [animationEnd, setAnimationEnd] = useState(false)
  const [lines, setLines] = useState<Line[]>([])

  const isMobile = useMediaQuery('(max-width: 640px)')

  const infoPoints = INFO_POINTS.slice(0, isMobile ? 1 : INFO_POINTS.length)

  useEffect(() => {
    if ((activeInfo || openDroneInfo) && svgRef.current && animationEnd) {
      const svgRect = svgRef.current.getBoundingClientRect()
      const newLines: Line[] = []

      infoPoints.forEach(point => {
        if (openDroneInfo || point.id === activeInfo) {
          const button = document.querySelector(`#button-${point.id}`) as HTMLElement
          const anchor = document.querySelector(`#anchor-${point.id}`) as HTMLElement
          if (button && anchor) {
            const buttonRect = button.getBoundingClientRect()
            const anchorRect = anchor.getBoundingClientRect()
            newLines.push({
              x1: buttonRect.left - svgRect.left + buttonRect.width / 2,
              y1: buttonRect.top - svgRect.top + buttonRect.height / 2,
              x2: anchorRect.left - svgRect.left + anchorRect.width / 2,
              y2: anchorRect.top + (!point.isBottom ? 12 : -12) - svgRect.top + anchorRect.height / 2
            })
          }
        }
      })

      setLines(newLines)
    } else if (!openDroneInfo) {
      setLines([])
    }
  }, [activeInfo, animationEnd, openDroneInfo])

  return (
    <motion.div
      className='relative flex size-full items-center justify-center max-lg:!left-0 max-lg:!translate-x-0'
      animate={{
        left: openDroneInfo ? '-90%' : 0,
        translateX: openDroneInfo ? '25%' : 0,
        zIndex: openDroneInfo ? 2 : 1
      }}
      transition={{ duration: 1, ease: 'easeInOut', delay: openDroneInfo ? 0.1 : 0 }}
    >
      {/* Background Shape Animation */}
      <motion.div
        className={cn(
          'absolute -bottom-[100%] -left-[15%] flex h-[170%] min-w-[130%] origin-bottom items-center',
          'justify-center bg-gradient-to-b from-transparent via-[#6F6A6A]/20 to-black/60'
        )}
        style={{
          clipPath: 'polygon(50% 100%, 0 0, 100% 0)'
        }}
        initial={{ opacity: 0, scaleY: 0.2 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            x: [-400, 60, 0],
            y: [100, 0]
          }
        }}
        onAnimationComplete={() => setAnimationEnd(true)}
        initial='hidden'
        animate='visible'
        transition={{ duration: 1.5, delay: 0.5 }}
        className={cn('h-auto w-full', animationEnd ? '' : '')}
      >
        <CustomImage src='/hero.png' alt='Hero' className='pointer-events-none h-auto select-none object-contain' />
        <svg ref={svgRef} className='pointer-events-none absolute left-0 top-0 z-10 h-full w-full overflow-visible'>
          <AnimatePresence>
            {lines.map((line, index) => (
              <motion.line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke='white'
                strokeWidth='2'
                style={{ zIndex: 1 }}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </AnimatePresence>
        </svg>
        {infoPoints.map(point => (
          <div key={point.id}>
            <button
              id={`button-${point.id}`}
              className={cn(
                'absolute z-[2] flex size-8 items-center justify-center rounded-full border-2 border-white transition-transform duration-300 hover:scale-110',
                point.isHiddenByDefault && !openDroneInfo ? 'hidden' : ''
              )}
              style={{ top: point.buttonPosition.y, left: point.buttonPosition.x }}
              onMouseEnter={() => !openDroneInfo && setActiveInfo(point.id)}
              onMouseLeave={() => !openDroneInfo && setActiveInfo(null)}
              onClick={handleButtonClick}
            >
              <div className='size-3 rotate-45 bg-blue-300' />
            </button>
            <AnimatePresence>
              {(openDroneInfo || activeInfo === point.id) && (
                <motion.div
                  id={`anchor-${point.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='absolute whitespace-nowrap rounded px-2 py-1 text-white'
                  style={{ top: point.anchorPosition.y, left: point.anchorPosition.x }}
                >
                  {point.text}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default DroneImageSection
