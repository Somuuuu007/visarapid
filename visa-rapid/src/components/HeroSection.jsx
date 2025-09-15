import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const HeroSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 })
  const [buttonsRef, buttonsVisible] = useScrollAnimation({ threshold: 0.2 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.1 })

  const buttonStyle = `
    .btn-primary:hover {
      background-color: rgb(92, 44, 1) !important;
    }
    .btn-secondary:hover {
      background-color: rgb(136, 90, 30) !important;
      color: white !important;
    }
    .fade-in-up {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.8s ease-out;
    }
    .fade-in-up.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .fade-in-left {
      opacity: 0;
      transform: translateX(-50px);
      transition: all 0.8s ease-out;
    }
    .fade-in-left.visible {
      opacity: 1;
      transform: translateX(0);
    }
    .fade-in-right {
      opacity: 0;
      transform: translateX(50px);
      transition: all 0.8s ease-out;
    }
    .fade-in-right.visible {
      opacity: 1;
      transform: translateX(0);
    }
    .fade-in {
      opacity: 0;
      transition: all 0.6s ease-out;
    }
    .fade-in.visible {
      opacity: 1;
    }
  `
  return (
    <section className="bg-white pt-10 sm:pt-16 lg:pt-20 pb-6 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style>{buttonStyle}</style>
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left sm:ml-5 lg:mt-5">
            <div ref={titleRef} className={`fade-in-left ${titleVisible ? 'visible' : ''}`}>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-extralight text-gray-800 tracking-[0.2em] sm:tracking-[0.3em] font-serif">
                VISA-RAPID:
              </p>
              <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-tight font-serif block">
                Immigration That <br />
                Works
                <br />
              </span>
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 italic bg-blue-200 inline-block font-serif mt-2">
                For You
              </p>
            </div>
            
            <div ref={contentRef} className={`fade-in-up ${contentVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We specialize in Portuguese visa and immigration services—from Golden Visa programs and D7 visas to family reunification and residency permits—helping individuals and families achieve their Portugal dreams.
              </p>
            </div>
            
            <div ref={buttonsRef} className={`fade-in-up ${buttonsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
                <button className="btn-primary text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 font-medium text-sm sm:text-base lg:text-lg transition-all duration-300 whitespace-nowrap" style={{borderRadius: '50px', backgroundColor: 'rgb(111, 54, 2)'}}>
                  GET A FREE CONSULTATION
                </button>
                
                <button className="btn-secondary border-2 px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 font-medium text-sm sm:text-base lg:text-lg transition-all duration-300 whitespace-nowrap" style={{borderRadius: '50px', backgroundColor: 'white', borderColor: 'rgb(111, 54, 2)', color: 'rgb(111, 54, 2)'}}>
                  DISCOVER OUR SERVICES
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side - Images */}
          <div ref={imageRef} className={`relative mt-8 lg:mt-0 order-first lg:order-last hidden lg:block fade-in-right ${imageVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            {/* Background decorative image */}
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-30 lg:-right-37 w-16 h-16 sm:w-20 sm:h-20 lg:w-30 lg:h-30 xl:w-48 xl:h-48 overflow-hidden rounded-full opacity-80 z-0">
              <img 
                src="/bgimg1.jpg" 
                alt="Decorative background"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="grid grid-cols-1 gap-4 relative z-10">
              {/* First image - larger */}
              <div className="relative">
                <img 
                  src="/image1.png" 
                  alt="Family immigration consultation"
                  className="w-149 h-48 sm:h-60 md:h-72 lg:h-80 xl:h-80 object-cover rounded-lg shadow-lg mb-8 sm:mb-16 lg:mb-40"
                />
              </div>
              
              {/* Second image - smaller, positioned to the right */}
              <div className="relative lg:absolute lg:-bottom-8 lg:right-0 lg:w-64">
                <img 
                  src="/image2.jpg" 
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