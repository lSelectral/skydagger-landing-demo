'use client'
import CustomImage from '@/components/image'
import MotionCustomImage from '@/components/image/MotionCustomImage'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Download, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const productInfo = [
  { title: 'Adı:', value: 'SKYDAGGER 13"' },
  { title: 'Uçuş Kontrolü:', value: 'NX405' },
  { title: 'Vtx:', value: 'SKYDAGGER 5.8GHz / 2.5Watt' },
  { title: 'Kamera:', value: 'ANALOG' },
  { title: 'Rüzgar Direnci Sınıfı:', value: '9' },
  { title: 'Hız:', value: '100 km/s' },
  { title: 'Maks. Taşıma Kapasitesi:', value: '2.56 kg' },
  { title: 'Maksimum Menzil:', value: '12 km' },
  { title: 'Uçuş Süresi:', value: '10-14 dakika' },
  { title: 'Çalışma Sıcaklığı:', value: '-10°C ~ 45°C' },
  { title: 'Dingil Mesafesi:', value: '600 mm' },
  { title: 'Esc:', value: 'SKYDAGGER 80 Amper' },
  { title: 'Motorlar:', value: 'SKYDAGGER 4214 380KV' },
  { title: 'Pervaneler:', value: '1309' },
  { title: 'Alıcı:', value: 'ELRS 750 / ELRS 915 / TBS 868RX' },
  { title: 'Pil:', value: '21700 8S2P 8000mAh XT90' }
]

interface Image {
  id: number
  src: string
  alt: string
}

const images: Image[] = [
  {
    id: 1,
    src: '/dr1.png',
    alt: 'Drone 1'
  },
  {
    id: 2,
    src: '/dr2.png',
    alt: 'Drone 2'
  },
  {
    id: 3,
    src: '/logo.png',
    alt: 'Drone 3'
  }
]

const ProductImage = ({
  image,
  index,
  handleClick
}: {
  image: Image
  index: number
  handleClick: (index: number) => void
}) => {
  return (
    <motion.div className='w-24 cursor-pointer md:w-32' key={image.id} layoutId={`product-${image.id.toString()}`}>
      <MotionCustomImage
        src={image.src}
        alt={image.alt}
        onClick={() => handleClick(index)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='w-full'
        layoutId={`product-image-${image.id.toString()}`}
      />
    </motion.div>
  )
}

interface Props {
  id: string
}

export default function ProductView({ id }: Props) {
  const [clickedImageIndex, setClickedImageIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setClickedImageIndex(index)
  }

  const closeModal = () => {
    setClickedImageIndex(null)
  }

  const navigateImage = (direction: 'prev' | 'next') => {
    if (clickedImageIndex === null) return
    const newIndex =
      direction === 'prev'
        ? (clickedImageIndex - 1 + images.length) % images.length
        : (clickedImageIndex + 1) % images.length
    setClickedImageIndex(newIndex)
  }

  useEffect(() => {
    // When press ESC key, close the modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <main className='relative flex min-h-screen overflow-y-hidden bg-[#2F2E33] py-20'>
      <div className='absolute -left-1/3 top-1/4 -z-[0] size-[90rem] rounded-full bg-gradient-to-t from-black to-[#2F2E33] max-md:hidden' />
      <div className='container z-[2] mx-auto flex grid-cols-8 gap-10 max-xl:flex-col xl:grid'>
        <div className='col-span-5 grid items-center gap-10'>
          <CustomImage src='/hero.png' className='w-auto' alt='Hero' />
          <div className='flex items-center gap-5 max-md:justify-center'>
            {images.map((image, index) => (
              <ProductImage key={image.id} image={image} index={index} handleClick={handleClick} />
            ))}
          </div>
        </div>
        <div className='col-span-3 flex h-full flex-col justify-center p-4 text-white'>
          <h1 className='mb-6 text-5xl font-extrabold uppercase'>SkyDagger 13&quot;</h1>
          <h2 className='text-lg font-semibold text-gray-400'>Teknik Özellikler</h2>
          <table className='w-full'>
            <tbody>
              {productInfo.map((spec, index) => (
                <tr key={index} className='flex-col max-sm:flex max-sm:py-2 sm:text-nowrap'>
                  <td className='pr-6 text-gray-400'>{spec.title}</td>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button className='mt-10 flex w-full !bg-[#1A1A1C] px-10 py-12 text-lg !text-gray-300 hover:!bg-[#4A4A4A] md:text-2xl xl:w-auto'>
            <Download className='mr-2 size-10 md:size-14' />
            DOWNLOAD BROCHURE
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {clickedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            layoutId={`product-${images[clickedImageIndex].id.toString()}`}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75'
          >
            <div className='flex size-full items-center justify-center gap-4 max-md:flex-col-reverse'>
              <div className='flex gap-8 md:flex-col'>
                {images.map((image, index) => (
                  <MotionCustomImage
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    className={cn('w-24 cursor-pointer md:w-32', index !== clickedImageIndex && 'opacity-50')}
                    onClick={() => handleClick(index)}
                  />
                ))}
              </div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className='relative flex h-full max-h-[70vh] w-full max-w-2xl items-center justify-center rounded-2xl bg-[#d4d4d4]'
              >
                {/* <div className='size-full'> */}
                <MotionCustomImage
                  src={images[clickedImageIndex].src}
                  alt={images[clickedImageIndex].alt}
                  className='h-full object-contain'
                  layoutId={`product-image-${images[clickedImageIndex].id.toString()}`}
                />
                {/* </div> */}

                <button
                  onClick={closeModal}
                  className='absolute right-4 top-4 rounded-full bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-75'
                >
                  <X size={24} />
                </button>

                <button
                  onClick={e => {
                    e.stopPropagation()
                    navigateImage('prev')
                  }}
                  className='absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-75'
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={e => {
                    e.stopPropagation()
                    navigateImage('next')
                  }}
                  className='absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-75'
                >
                  <ChevronRight size={24} />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
