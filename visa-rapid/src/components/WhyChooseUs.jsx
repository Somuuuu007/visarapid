
import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const WhyChooseUs = () => {
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
      <section className="pt-1 sm:pt-6 lg:pt-10 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-10 sm:mb-12 lg:mb-10">
              Predictable Immigration - No Endless Waiting
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left side - Content */}
            <div ref={contentRef} className={`slide-in-left ${contentVisible ? 'visible' : ''}`}>
              <div className="space-y-8 pr-12 lg:pr-16 pl-8 pb-16">
                {/* Main heading */}
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight font-serif">
                  Don't wait, time is flying, start your application today!
                </h2>

                {/* Numbered list */}
                <ol className="space-y-3 text-gray-700 text-xl leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-black font-bold mr-4 mt-1">1.</span>
                    <span>Start your career abroad move to Europe without a job offer and find the right opportunity after arrival.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black font-bold mr-4 mt-1">2.</span>
                    <span>Begin your immigration journey today
                    minimal investment, lasting benefits.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black font-bold mr-4 mt-1">3.</span>
                    <span>Entrepreneurial mindset and willingness to start a business no prior company setup or external funding required.</span>
                  </li>
                </ol>

                {/* Final message */}
                <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 italic bg-yellow-200 inline-block font-serif">
                  Looks good?
                </p>

                {/* CTA Button */}
                <div className="flex justify-center mt-5 ">
                  <a
                    href="https://calendly.com/nikita-visarapid/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-md transition-colors font-medium flex items-center gap-2"
                    style={{
                      backgroundColor: 'rgb(111, 54, 2)',
                      color: 'white',
                      textDecoration: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(75, 37, 1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(111, 54, 2)'}
                  >
                    Contact Us Today

                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div ref={imageRef} className={`relative slide-in-right ${imageVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s', marginBottom: '60px' }}>
              <img
                src="/image7.png"
                alt="Visa Application with Passport"
                className="w-180 h-100 lg:h-130 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default WhyChooseUs