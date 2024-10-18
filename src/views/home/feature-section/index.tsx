'use client'
import CustomImage from '@/components/image'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

//TODO : Improve mobile version to display the image down the corresponding text instead of at the full bottom

const data = [
  {
    title: 'Taktiksel Drone',
    content:
      'Taktiksel drone, askeri ve güvenlik alanlarında kullanılan bir drone türüdür. Taktiksel drone, genellikle küçük ve hafif bir yapıya sahiptir.',
    srcImage: 'drone-b.png'
  },
  {
    title: 'Kameralar',
    content:
      'Drone kameraları, drone’ların üzerine monte edilen kameralardır. Bu kameralar, drone’ların uçuş sırasında çektiği görüntüleri kaydetmektedir. Drone kameraları, genellikle yüksek çözünürlüklü görüntüler çekebilmektedir.',
    srcImage: '/camera.png'
  },
  {
    title: 'Aksesuarlar',
    content:
      'Drone kullanımına yardımcı olabilecek, taşımayı ve kurulumu kolaylaştıran, drone kullanımını daha keyifli hale getiren aksesuarlar bulunmaktadır. Bu aksesuarlar, genellikle drone’ların üzerine monte edilmektedir.',
    srcImage: 'thermal.png'
  },
  {
    title: 'Batarya',
    content:
      'Drone bataryaları, drone’ların uçuş süresini belirleyen en önemli parçalardan biridir. Bu bataryalar, genellikle hafif ve kompakt bir yapıya sahiptir. Drone bataryaları, genellikle birkaç saatlik uçuş süresine sahiptir',
    srcImage: 'battary.png'
  }
]

export function HeroFeatureSection() {
  const [featureOpen, setFeatureOpen] = useState<number>(0)
  const [timer, setTimer] = useState<number>(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 10)
    }, 10)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (timer > 10000) {
      setFeatureOpen(prev => (prev + 1) % data.length)
      setTimer(0)
    }
  }, [timer])

  return (
    <div className='container mx-auto my-8 px-8 py-16'>
      <div className='mb-20 text-center'>
        <p className='mb-2 text-lg font-medium uppercase text-sky-400'>SKYDAGGER DRONE</p>

        <h4 className='mb-4 shrink-0 text-3xl font-medium text-gray-800 dark:text-gray-300'>Öne Çıkan Özellikler</h4>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <div className='space-y-6'>
          {data.map((item, index) => (
            <button
              className='w-full'
              key={item.title}
              onClick={() => {
                setFeatureOpen(index)
                setTimer(0)
              }}
              type='button'
            >
              <TextComponent
                content={item.content}
                isOpen={featureOpen === index}
                loadingWidthPercent={featureOpen === index ? timer / 100 : 0}
                number={index + 1}
                title={item.title}
              />
            </button>
          ))}
        </div>
        <CustomImage
          alt={data[featureOpen].title}
          className={cn('aspect-square max-h-[400px] w-full rounded-lg object-contain transition-all duration-300')}
          key={data[featureOpen].title}
          src={data[featureOpen].srcImage}
        />
      </div>
    </div>
  )
}

function TextComponent({
  number,
  title,
  content,
  isOpen,
  loadingWidthPercent
}: Readonly<{
  number: number
  title: string
  content: string
  isOpen: boolean
  loadingWidthPercent?: number
}>) {
  return (
    <div
      className={cn('transform-gpu rounded-lg transition-colors', isOpen ? 'bg-sky-600/10' : 'opacity-50 saturate-0')}
    >
      <div className='flex w-full items-center gap-4 p-4'>
        <p className={cn('inline-flex size-8 items-center justify-center rounded-md bg-sky-500/20 text-sky-600')}>
          {number}
        </p>
        <h2 className={cn('text-left text-xl font-medium text-gray-800 dark:text-gray-200')}>{title}</h2>
      </div>
      <div
        className={cn(
          'w-full transform-gpu overflow-hidden text-left text-gray-600 transition-all duration-500 dark:text-gray-400',
          isOpen ? 'max-h-64' : 'max-h-0'
        )}
      >
        <p className='p-4 text-lg'>{content}</p>
        <div className='w-full px-4 pb-4'>
          <div className='relative h-1 w-full overflow-hidden rounded-full'>
            <div className={cn('absolute left-0 top-0 h-1 bg-sky-500')} style={{ width: `${loadingWidthPercent}%` }} />
          </div>
        </div>
      </div>
    </div>
  )
}
