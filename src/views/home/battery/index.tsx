import CustomImage from '@/components/image'

const BattarySection = () => {
  return (
    <div className='h-[700px] bg-gradient-to-t from-[#070707] to-[#56626C] py-20'>
      <div className='container relative mx-auto flex h-full flex-col items-center gap-20'>
        <div className='relative z-[1] grid w-full grid-cols-3'>
          <div className='col-span-2 mx-4 flex flex-col gap-20'>
            <div className='self-start'>
              <h2 className='text-5xl font-extrabold uppercase'>
                <span className='text-[#08B500]'>Batarya</span>
                <br />
                <span className='text-white'>Kapasitesi</span>
              </h2>
            </div>
            <div className='w-2/3'>
              <p className='hidden !w-auto text-lg font-medium text-white sm:block md:text-2xl lg:w-1/2'>
                Drone&apos;un motorları, pilleri ve elektronik bileşenleri, sıcaklık koşullarına bağlı olarak farklı
                şekilde çalışır. Genellikle -10°C ila 40°C arası çalışma sıcaklığına sahip olan dronlar, bu aralığın
                dışında performans kaybı, pil ömründe azalma veya elektronik sistemlerde arızalar yaşayabilir.
              </p>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <CustomImage src='/battary.png' className='z-[1]' alt='Hero' width={300} height='auto' />
          </div>
        </div>
        <CustomImage
          src='/drone-b.png'
          className='absolute z-0 h-full w-auto opacity-35'
          alt='Hero'
          width={850}
          height='auto'
        />
      </div>
    </div>
  )
}

export default BattarySection
