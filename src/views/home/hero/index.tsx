'use client'
import CustomImage from '@/components/image'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Hero = () => {
  const [openDroneInfo, setOpenDroneInfo] = useState(false)

  const handleButtonClick = () => setOpenDroneInfo(prev => !prev)

  return (
    <div className='overflow-hidden bg-gradient-to-b from-[#1C1C1D] via-[#353535] to-[#050504] lg:h-[500px] xl:h-[600px] 2xl:h-[650px]'>
      <div className='container mx-auto pt-28'>
        <div className='grid lg:grid-cols-5'>
          {/* Text Section */}
          <motion.div
            className='z-[2] flex flex-col gap-3 text-white max-md:text-center lg:col-span-3'
            animate={{ opacity: openDroneInfo ? 0 : 1, x: openDroneInfo ? -100 : 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            {/* Header Animation */}
            <motion.h1
              className='text-5xl font-extrabold lg:text-7xl 2xl:text-8xl'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              SKYDAGGER 13’’
            </motion.h1>
            {/* Subheader Animation */}
            <motion.h2
              className='text-3xl font-extrabold xl:text-5xl xl:leading-[60px]'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
            >
              GELECEK <span className='text-stroke stroke-2 text-black'>SEN</span> <br />
              HAYAL ETTİĞİN GİBİ
            </motion.h2>
            {/* Description Animation */}
            <motion.p
              className='font-medium'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Skydagger 13” ile her türlü hava koşulunda <br /> askeri operasyonların verimliliğini arttır
            </motion.p>
          </motion.div>

          {/* Drone Image Section */}
          <div className='flex items-center lg:col-span-2'>
            <motion.div
              className='relative flex size-full items-center justify-center max-lg:!left-0 max-lg:!translate-x-0'
              animate={{
                left: openDroneInfo ? '-100%' : 0,
                translateX: openDroneInfo ? '25%' : 0,
                scale: openDroneInfo ? 1.2 : 1,
                zIndex: openDroneInfo ? 2 : 1
              }}
              transition={{ duration: 1, ease: 'easeInOut', delay: openDroneInfo ? 0.5 : 0 }}
            >
              {/* Background Shape Animation */}
              <motion.div
                className='absolute -bottom-[100%] -left-[15%] flex h-[170%] min-w-[130%] origin-bottom items-center justify-center bg-gradient-to-b from-transparent via-[#6F6A6A]/20 to-black'
                style={{
                  clipPath: 'polygon(50% 100%, 0 0, 100% 0)'
                }}
                initial={{ opacity: 0, scaleY: 0.2 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              {/* Drone Image Animation */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1.2,
                    x: [-400, 60, 0],
                    y: [100, 0]
                  }
                }}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1.5, delay: 0.5 }}
                className='group relative size-full max-lg:!scale-75'
              >
                <button
                  className='position-center absolute z-[2] flex size-8 items-center justify-center rounded-full border-2 border-white transition-transform duration-300 hover:scale-110'
                  onClick={handleButtonClick}
                >
                  <div className='size-3 rotate-45 bg-blue-300' />
                </button>
                <button
                  className='absolute bottom-16 right-[15%] z-[2] flex size-8 items-center justify-center rounded-full border-2 border-white transition-transform duration-300 hover:scale-110'
                  onClick={handleButtonClick}
                >
                  <div className='size-3 rotate-45 bg-blue-300' />
                </button>

                <CustomImage
                  src='/hero.png'
                  className={cn(
                    'animate-fly-animation group-hover:animate-none',
                    openDroneInfo && 'animate-none'
                  )}
                  alt='Hero'
                  width={900}
                  height='auto'
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
