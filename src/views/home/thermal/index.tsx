import CustomImage from '@/components/image'

const ThermalCamera = () => {
  return (
    <div className='h-full bg-gradient-to-t from-[#353535] to-[#56626C] py-24'>
      <div className='container relative mx-auto flex flex-col gap-8 overflow-x-hidden md:gap-20 2xl:h-[740px]'>
        <div className='relative z-[1] mx-4 self-start'>
          <h2 className='text-3xl font-extrabold uppercase leading-8 text-white md:text-4xl md:leading-10 lg:text-5xl lg:leading-[60px]'>
            <span className='text-white'>SICAK TAKİP</span>
            <br />
            <span className='text-orange-400'>THERMAL AXIS CAMERA</span>
          </h2>
        </div>
        <div className='flex w-[90%] items-center justify-center'>
          <div className='relative max-md:px-10'>
            <div className='flex size-full items-center justify-center'>
              {/* <Play size={100} className='absolute rounded-full bg-black/60 p-6 text-white' /> */}
              <CustomImage src='/visible-vs-thermal.jpg' className='hidden h-auto w-full sm:block' alt='Hero' />
            </div>
          </div>
        </div>

        <CustomImage
          src='/camera.png'
          className='md:-right-[s0%] right-0 top-1/3 w-64 self-center md:absolute md:top-24 md:w-1/3 md:-translate-y-1/2 lg:right-0 lg:w-64 xl:right-20'
          alt='Hero'
          height='auto'
        />
      </div>
    </div>
  )
}

export default ThermalCamera
