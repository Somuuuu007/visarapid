import React from 'react'

const ForBusiness = () => {
  return (
    <section className="pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left side - Content */}
          <div className="bg-blue-100">
            {/* Tag - stays in original position */}
            <div className="inline-flex items-center bg-white px-16 py-7 shadow-sm mb-6">
              <svg className="w-6 h-6 text-gray-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-gray-700 font-medium text-2xl">For Businesses</span>
            </div>
            
            {/* Content with padding */}
            <div className="space-y-8 pr-12 lg:pr-16 pl-13 pb-16">
              {/* Main heading */}
              <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-serif">
                Scale Your Business<br />
                With Global Talent
              </h2>
            
              {/* Description */}
              <p className="text-gray-700 text-2xl leading-relaxed">
                Expand your team with international talent through Portugal's business-friendly visa programs. We streamline the process for work permits, investor visas, and corporate relocations to help your business thrive globally.
              </p>
              
              {/* CTA Button */}
              <button className="text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center gap-2" style={{backgroundColor: 'rgb(59, 130, 246)'}}>
                Schedule Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative">
            <img 
              src="/image4.jpg" 
              alt="Business meeting"
              className="w-full h-130 lg:h-[700px] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForBusiness