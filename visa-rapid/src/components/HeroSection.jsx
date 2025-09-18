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
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 italic inline-block font-serif mt-2" style={{backgroundColor: '#fde68a'}}>
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
                  style={{borderRadius: '8px', backgroundColor: 'rgb(111, 54, 2)'}}
                >
                    BOOK A CALL WITH US!
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side - Images */}
          <div className="relative mt-8 lg:mt-0 order-first lg:order-last hidden lg:block h-96 lg:h-[500px] xl:h-[600px]">
            <div className="relative flex justify-center items-center h-full w-full">
              {/* First image - positioned on the left and slightly up */}
                <div ref={image1Ref} className={`absolute left-0 top-0 fade-in-right animation-delay-200 ${image1Visible ? 'visible' : ''}`}>
                  <img 
                    src="/image6.png" 
                    alt="Family immigration consultation"
                    className="w-80 h-60 lg:w-70 lg:h-120 xl:w-[300px] xl:h-130 object-cover shadow-xl border-b-8 border-orange-300"
                  />
                </div>
              
              {/* Second image - positioned on the right and slightly down */}
                <div ref={image2Ref} className={`absolute right-0 top-24 lg:top-32 xl:top-30 fade-in-right animation-delay-500 ${image2Visible ? 'visible' : ''}`}>
                  <img 
                    src="/Job.png" 
                    alt="Business immigration meeting"
                    className="w-72 h-52 lg:w-70 lg:h-95 xl:w-96 xl:h-120 object-cover shadow-xl border-t-8 border-blue-400"
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