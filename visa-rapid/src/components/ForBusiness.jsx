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
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left side - Content */}
            <div ref={contentRef} className={`bg-blue-100 slide-in-left ${contentVisible ? 'visible' : ''}`}>

            {/* Content with padding */}
            <div className="space-y-8 pr-12 lg:pr-18 pl-16 pb-16 pt-10">
              {/* Warning Icon and Alert */}
              <div className="flex items-start gap-3">
                <h2 className="text-5xl lg:text-5xl font-light text-gray-900 leading-tight font-serif">
                  The clock is ticking—move to a developed country before it's too late!
                </h2>
              </div>

              {/* Description */}
              <ul className="space-y-1 text-gray-700 text-lg leading-relaxed">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>US, Canada, Australia, and the UK have closed most immigration pathways.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Study visas now demand a hefty investment.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Securing a work visa is tougher than ever amid the AI crisis.</span>
                </li>
              </ul>

              {/* Main Message */}
              <h3 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight font-serif">
                When AI takes over jobs, immigration opportunities will disappear.
              </h3>

              {/* Solution */}
              <h4 className="text-2xl lg:text-3xl font-medium text-gray-900 leading-tight">
                Visa Rapid has the solution you need today:
              </h4>

              {/* Solution Points */}
              <ul className="space-y-1 text-gray-700 text-lg leading-relaxed">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>Start your journey with just a business idea and move to Europe permanently.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-3 mr-4 flex-shrink-0"></span>
                  <span>The world's most predictable and affordable immigration pathway.</span>
                </li>
              </ul>

              {/* Final Message */}
              <p className="text-gray-900 text-lg font-medium leading-relaxed">
                Don't wait until it's all over—we truly believe in acting now!
              </p>

              {/* CTA Button */}
              <button
                onClick={() => window.open('https://calendly.com/someshlingwal1', '_blank', 'noopener,noreferrer')}
                className="text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 cursor-pointer"
                style={{backgroundColor: 'rgb(59, 130, 246)'}}
              >
                SCHEDULE A MEETING
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div ref={imageRef} className={`relative slide-in-right ${imageVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <img 
              src="/image4.png" 
              alt="Business meeting"
              className="w-full h-130 lg:h-[820px] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ForBusiness