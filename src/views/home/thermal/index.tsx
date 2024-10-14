import CustomImage from '@/components/image'
import { Play } from 'lucide-react'
import React from 'react'

const ThermalCamera = () => {
  return (
    <div className='h-full bg-gradient-to-b from-[#353535] to-[#050504] py-12'>
      <div className='container relative mx-auto flex flex-col gap-20 overflow-x-hidden 2xl:h-[740px]'>
        <div className='relative z-[1] self-start'>
          <h2 className='text-5xl font-extrabold uppercase leading-[60px] text-white'>
            <span className='text-white'>SICAK TAKİP</span>
            <br />
            <span className='text-[#E5631A]'>THERMAL AXIS CAMERA</span>
          </h2>
        </div>
        <div className='flex w-[90%] items-center justify-center'>
          <div className='relative max-md:px-10'>
            <div className='flex size-full items-center justify-center'>
              <Play size={100} className='absolute rounded-full bg-black/60 p-6 text-white' />
              <CustomImage src='/thermal.png' className='w-full' alt='Hero' width={700} height='auto' />
            </div>
          </div>
        </div>

        <CustomImage
          src='/camera.png'
          className='absolute right-0 top-1/3 w-80 md:-right-[20%] md:top-1/2 md:w-2/3 md:-translate-y-1/2 lg:right-0 lg:w-1/2 xl:right-20'
          alt='Hero'
          // width={500}
          height='auto'
        />
      </div>
    </div>
  )
}

export default ThermalCamera
