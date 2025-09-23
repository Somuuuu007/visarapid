import React, { useState, useEffect } from 'react'

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollThreshold = 100 // Hide buttons only when at top (navbar visible)

      // Show buttons when scrolled past threshold (navbar hidden)
      // Hide buttons only when at the very top (navbar fully visible)
      if (currentScrollY > scrollThreshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Show scroll to top button when user has scrolled down significantly
      setShowScrollTop(currentScrollY > 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const openWhatsApp = () => {
    // Replace with your WhatsApp number
    const phoneNumber = '9910578099' // Update with actual WhatsApp number
    const message = 'Hello, I would like to know more about your visa services.'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          backgroundColor: '#25D366',
          borderRadius: '50%',
          border: 'none'
        }}
        aria-label="Contact us on WhatsApp"
        
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          style={{
            width: '30px !important',
            height: '30px !important',
            fill: 'white',
            minWidth: '30px',
            minHeight: '30px'
          }}
        >
          <path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zM12.04 20.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78 1.00-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.09-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.3-.01-.47-.01a.718.718 0 0 0-.7.33c-.25.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26.96.38 1.29.49.59.19 1.10.16 1.51.10.46-.07 1.47-.60 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"/>
        </svg>
      </button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: '#374151' }}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="white"
            viewBox="0 0 24 24"
            style={{
              width: '26px !important',
              height: '26px !important',
              minWidth: '26px',
              minHeight: '26px',
              strokeWidth: '2px'
            }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default FloatingButtons