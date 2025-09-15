import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const HeroSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 })
  const [buttonsRef, buttonsVisible] = useScrollAnimation({ threshold: 0.2 })
  const [image1Ref, image1Visible] = useScrollAnimation({ threshold: 0.1 })
  const [image2Ref, image2Visible] = useScrollAnimation({ threshold: 0.1 })

  return (
    <section className="bg-white pt-10 sm:pt-14 lg:pt-14 pb-6 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left sm:ml-5 lg:mt-5">
            <div ref={titleRef} className={`fade-in-left ${titleVisible ? 'visible' : ''}`}>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extralight text-gray-800 tracking-[0.2em] sm:tracking-[0.3em] font-serif">
                VISA-RAPID:
              </p>
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-light text-gray-900 leading-tight font-serif block">         
Are you a working professional and want to 
              </span>
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 italic bg-yellow-200 inline-block font-serif mt-2">
                Move to Europe 
              </p>
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-light text-gray-900 leading-tight font-serif block">         
                permanently?
              </span>
            </div>
            
            <div ref={contentRef} className={`fade-in-up animation-delay-200 ${contentVisible ? 'visible' : ''}`}>
              <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                
            We can help with your immigration journey 
            with an investment starting from 8 Lakhs.
              </p>
            </div>
            
            <div ref={buttonsRef} className={`fade-in-up animation-delay-400 ${buttonsVisible ? 'visible' : ''}`}>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
                <button 
                  onClick={() => window.open('https://calendly.com/someshlingwal1', '_blank', 'noopener,noreferrer')}
                  className="btn-primary text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 font-medium text-sm sm:text-base lg:text-lg transition-all duration-300 whitespace-nowrap cursor-pointer" 
                  style={{borderRadius: '50px', backgroundColor: 'rgb(111, 54, 2)'}}
                >
                    BOOK A CALL WITH US!
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side - Images */}
          <div className="relative mt-8 lg:mt-0 order-first lg:order-last hidden lg:block">
            
            <div className="grid grid-cols-1 gap-4 relative z-10">
              {/* First image - larger - animates first */}
              <div ref={image1Ref} className={`relative fade-in-right animation-delay-200 ${image1Visible ? 'visible' : ''}`}>
                <img 
                  src="/image1.png" 
                  alt="Family immigration consultation"
                  className="w-149 h-50 sm:h-60 md:h-72 lg:h-80 xl:h-80 object-cover rounded-lg shadow-lg mb-8 sm:mb-16 lg:mb-40"
                />
              </div>
              
              {/* Second image - smaller, positioned to the right - animates later */}
              <div ref={image2Ref} className={`relative lg:absolute lg:-bottom-8 lg:right-0 lg:w-64 fade-in-right animation-delay-500 ${image2Visible ? 'visible' : ''}`}>
                <img 
                  src="/image2.png" 
                  alt="Business immigration meeting"
                  className="w-full h-40 sm:h-44 md:h-48 lg:h-48 object-cover rounded-lg shadow-lg mb-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection