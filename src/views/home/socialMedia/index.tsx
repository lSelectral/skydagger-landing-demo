'use client'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const SocialMediaCarousel = dynamic(() => import('./SocialMediaCarousel'), { ssr: false })

const SocialMedia = () => {
  const [isInView, setIsInView] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return

    const currentElement = elementRef.current

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true) // Set to true when the element enters the viewport
            observer.disconnect() // Optionally disconnect after the component is loaded
          }
        })
      },
      { threshold: 0.1 } // 10% of the element should be visible to trigger the loading
    )

    observer.observe(currentElement)

    // Cleanup function
    return () => {
      if (observer && currentElement) {
        observer.unobserve(currentElement)
      }
    }
  }, [])

  return (
    <div className='h-auto bg-gradient-to-b from-[#353535] to-[#050504] py-16'>
      <div className='container mx-auto flex h-full flex-col items-center justify-center gap-6'>
        <div className='mx-4 self-start'>
          <h2 className='text-5xl font-extrabold'>
            <span className='text-white'>Skydagger ile</span>
            <br />
            <span className='text-sky-400'>Sınırları Zorla</span>
          </h2>
        </div>

        <div ref={elementRef} className='flex w-full px-12 py-10'>
          {isInView && <SocialMediaCarousel />}
        </div>
      </div>
    </div>
  )
}

export default SocialMedia
