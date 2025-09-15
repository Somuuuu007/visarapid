import { useEffect, useRef, useState, useMemo } from 'react'

const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  const observerOptions = useMemo(() => ({
    threshold: options.threshold || 0.1,
    rootMargin: options.rootMargin || '0px 0px -50px 0px',
    ...options
  }), [options])

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Unobserve after animation triggers to avoid retriggering
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        } else if (options.once === false) {
          setIsVisible(false)
        }
      },
      observerOptions
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [observerOptions, options.once])

  return [ref, isVisible]
}

export default useScrollAnimation