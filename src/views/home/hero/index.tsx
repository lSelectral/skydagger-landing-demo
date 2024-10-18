'use client'
import { motion } from 'framer-motion'
import { Circle } from 'lucide-react'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import DroneImageSection from './DroneImageSection'

const Sparkles = dynamic(() => import('@/components/sparkles'), { ssr: false })

const Hero = () => {
  const [openDroneInfo, setOpenDroneInfo] = useState(false)

  const handleButtonClick = () => setOpenDroneInfo(prev => !prev)

  return (
    <div className='min-h-[800px] bg-gradient-to-b from-[#1C1C1D] via-[#353535] to-[#050504] px-8 sm:min-h-[1000px] lg:min-h-[750px]'>
      <div className='container mx-auto pt-28'>
        <Sparkles
          density={400}
          color='#48b6ff'
          size={1.3}
          direction='top'
          className='pointer-events-none absolute inset-x-0 top-0 h-full w-full select-none'
        />

        <div className='flex max-lg:flex-col'>
          {/* Text Section */}
          <div className='flex basis-4/6 flex-col'>
            <motion.h1
              className='font-extrabold text-white max-xl:!text-6xl max-md:text-center max-md:!text-5xl'
              initial={{ opacity: 0, y: -50, fontSize: '5rem' }}
              animate={{ opacity: 1, y: 0, fontSize: openDroneInfo ? '2.5rem' : '5rem' }}
              transition={{ duration: 1 }}
            >
              SKYDAGGER 13’’
            </motion.h1>
            <motion.div
              className='z-[2] flex basis-4/6 select-none flex-col gap-3 text-white max-md:text-center'
              // initial={{ opacity: 0, x: '-100%', scaleY: 0 }}
              animate={{
                opacity: openDroneInfo ? 0 : 1,
                x: openDroneInfo ? '-100%' : 0,
                maxHeight: openDroneInfo ? 0 : '100%'
              }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              <motion.h2
                className='text-3xl font-extrabold xl:text-5xl xl:leading-[60px]'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                GELECEK SEN
                <br />
                <span className='transform rounded-md bg-gradient-to-br from-orange-500/80 to-orange-400/80 px-2 text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg'>
                  HAYAL ETTİĞİN GİBİ
                </span>
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

            <motion.ul
              className='relative z-[2] mt-10 space-y-1 self-start text-white'
              initial={{ opacity: 0, left: -120 }}
              animate={{
                opacity: !openDroneInfo ? 0 : 1,
                left: !openDroneInfo ? -120 : -20
              }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              {['Flight Time 12-14 min', 'Maximum Rage 8-14 km', 'Maximum Payload 3-6 kg'].map((item, index) => (
                <motion.li key={index} className='flex items-center gap-6'>
                  <Circle size={14} className='fill-white' />
                  <span className='text-xl font-medium'>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className='relative flex basis-3/6 items-center'>
            <DroneImageSection openDroneInfo={openDroneInfo} handleButtonClick={handleButtonClick} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
