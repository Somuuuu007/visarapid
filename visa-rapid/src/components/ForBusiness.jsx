import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const ForBusiness = () => {
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
      <section className="pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left side - Content */}
            <div ref={contentRef} className={`bg-blue-100 slide-in-left ${contentVisible ? 'visible' : ''}`}>

            {/* Content with padding */}
            <div className="space-y-6 pl-8 lg:pl-12 pr-6 pb-8 pt-6">

              {/* Main heading */}
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight font-serif">
              When AI takes over jobs, <br />
              immigration opportunities will disappear.
              </h2> 

              {/* Solution */}
              <h4 className="text-xl lg:text-2xl font-medium text-gray-900 leading-tight">
                Visa Rapid has the solution you need today:
              </h4>

              {/* Description */}
              <ul className="space-y-2 text-gray-700 text-lg leading-relaxed">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Start your journey with just a business idea and move to Europe <br />
                     permanently.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>The world's most predictable and affordable immigration pathway.</span>
                </li>
              </ul>

              <h3 className='text-black'>Don’t wait until it’s all over—we truly believe in acting now!</h3>


              {/* CTA Button */}
              <button
                onClick={() => window.open('https://calendly.com/someshlingwal1', '_blank', 'noopener,noreferrer')}
                className="text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 cursor-pointer"
                style={{backgroundColor: 'rgb(59, 130, 246)'}}
              >
                Schedule a meeting
              </button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div ref={imageRef} className={`relative slide-in-right ${imageVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <img
              src="/image4.png"
              alt="Business meeting"
              className="w-full h-96 lg:h-[550px] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ForBusiness