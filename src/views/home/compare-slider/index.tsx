import TypingAnimation from '@/components/ui/typing-animation'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

const CompareSlider = () => {
  return (
    <div className='bg-gradient-to-b from-[#070707] to-[#56626C] px-8 pt-24'>
      <div className='container mx-auto flex h-full flex-col items-center justify-center'>
        <div className='mx-4 self-start'>
          <h2 className='text-3xl font-extrabold uppercase md:text-4xl lg:text-5xl'>
            <span className='text-white'>Yüksek</span>
            <br />
            <span className='text-sky-400'>Mühendislik</span>
          </h2>
        </div>

        <div className='flex max-h-[400px] items-center overflow-hidden'>
          <ReactCompareSlider
            className='h-[110%] w-fit'
            itemOne={<ReactCompareSliderImage src='/slider/slider-1.png' alt='Slider 1' />}
            itemTwo={<ReactCompareSliderImage src='/slider/slider-2.png' alt='Slider 2' />}
          />
        </div>

        <div className='flex flex-col self-end pt-8 text-white'>
          <div className='flex items-center gap-5'>
            <h3 className='text-xl font-extrabold uppercase md:text-2xl lg:text-4xl'>SKYDAGGER 13’’</h3>
            <div
              className='h-8 w-10 self-end bg-white'
              style={{
                clipPath: 'polygon(50% 80%, 0 0, 100% 0)'
              }}
            />
          </div>
          <div className='mt-2 flex flex-col self-end border-2 border-white bg-white/20 p-3.5 pr-12 font-extrabold'>
            <TypingAnimation text='SKYDAGGER 10’’' className='text-xl font-extrabold md:text-2xl' />
            <TypingAnimation text='SKYDAGGER 7’’' className='text-xl font-extrabold md:text-2xl' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareSlider
