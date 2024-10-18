import CustomImage from '@/components/image'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

type Prop = {
  title: string
  imageSrc: string
}

export function CategoryHeader({ title, imageSrc }: Prop) {
  return (
    <div className='flex justify-between border-b-4 border-[#18171B] max-sm:flex-col md:max-h-52 md:pl-20 xl:gap-20'>
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className='w-min pb-3 pl-5 pt-11 text-4xl font-bold uppercase text-white/70 md:text-5xl xl:text-6xl'
      >
        {title}
      </motion.h1>
      <motion.div
        className='relative h-auto w-full overflow-hidden'
        initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
        animate={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0% 100%)' }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
      >
        <Play className='absolute left-2/3 top-1/2 size-16 -translate-y-1/2 transform rounded-full bg-black/20 fill-white p-4 text-white max-md:size-10 max-md:p-2' />
        <CustomImage src={imageSrc} className='h-full w-full object-cover max-md:min-h-24' alt='Drone' />
      </motion.div>
    </div>
  )
}
