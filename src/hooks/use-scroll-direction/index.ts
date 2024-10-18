import { useEffect, useState } from 'react'

/**
 * Hook to get the scroll direction
 * @returns {string | null} scrollDirection
 * @example
 * const scrollDirection = useScrollDirection()
 * console.log(scrollDirection) // 'up' | 'down' | null
 */
function useScrollDirection(): string | null {
  const [scrollDirection, setScrollDirection] = useState<string | null>(null)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0
    }
    window.addEventListener('scroll', updateScrollDirection) // add event listener

    return () => {
      window.removeEventListener('scroll', updateScrollDirection) // clean up
    }
  }, [scrollDirection])

  return scrollDirection
}

export default useScrollDirection
