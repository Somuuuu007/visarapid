import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const ScheduleMeeting = () => {
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 })
  
  return (
    <>
      <style>
        {`
          .slide-in-left {
            opacity: 0;
            transform: translateX(-50px);
            transition: all 0.8s ease-out;
          }
          .slide-in-left.visible {
            opacity: 1;
            transform: translateX(0);
          }
          .slide-in-right {
            opacity: 0;
            transform: translateX(50px);
            transition: all 0.8s ease-out;
          }
          .slide-in-right.visible {
            opacity: 1;
            transform: translateX(0);
          }
        `}
      </style>
      <section className="pt-8 sm:pt-12 lg:pt-20 pb-10 sm:pb-8 lg:pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-gray-50 px-4 sm:px-6 lg:px-15 rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div ref={contentRef} className={`text-center lg:text-left slide-in-left ${contentVisible ? 'visible' : ''}`}>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4 sm:mb-4 pt-10">
                Schedule a meeting
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 leading-tight mb-4 sm:mb-6">
                Let's discuss the details
              </h2>
              <p className="text-base sm:text-md text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Schedule an online meeting with our legal team. They will review your case, estimate the costs, and recommend the best solution based on your goals.
                </p>
            </div>

            <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
              <a 
                href="https://calendly.com/someshlingwal1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block !bg-orange-500 hover:!bg-orange-600 !text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-colors duration-200 border-none outline-none rounded-md cursor-pointer text-center w-full sm:w-auto"
              >
                Schedule a meeting
              </a>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-3 mb-6">
                <span className="text-gray-700 font-medium text-sm sm:text-base">Prefer messengers?</span>
                <a 
                  href="https://wa.me/9910578099" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 !text-green-600 hover:!text-green-700 transition-colors cursor-pointer"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.10-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.512z"/>
                  </svg>
                  <span className="font-medium text-sm sm:text-base ">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Image and Profile */}
          <div ref={imageRef} className={`relative overflow-visible mt-8 lg:mt-0 order-first lg:order-last slide-in-right ${imageVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            {/* Lawyer image - full height without container styling */}
            <div className="h-[300px] sm:h-[350px] lg:h-[450px] flex items-end justify-center lg:justify-start overflow-visible">
              <img 
                src="/Lawyer.png" 
                alt="Lawyer" 
                className="h-[350px] sm:h-[400px] lg:h-[550px] w-auto object-cover object-center lg:object-left lg:ml-15"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ScheduleMeeting