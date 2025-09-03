
import React from 'react'

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      title: "Local Setup in Portugal",
      description: "We have an operational office and registered entity in Portugal — which means faster in-country support, an address for applications, local bank introductions and easier bank/KYC processes"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Portuguese Team, Real Edge",
      description: "Portuguese-speaking advisors handle SEF, consulate, and municipal formalities directly — fewer translation errors, faster document legalisation (apostilles) and smoother in-person steps."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
        </svg>
      ),
      title: "Incubator & Startup Links",
      description: "Direct relationships with certified incubators (IAPMEI partners) and local VCs — we facilitate StartUP acceptance, mentor introductions and investor warm-intros."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Lawyer-led team",
      description: "Legal partners in Portugal, ensuring company setup, immigration compliance, tax structuring, and post-landing formalities are handled accurately and legally."
    }
  ]

  return (
    <section id="why-choose-us" className="pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            <div className="flex items-center">
              <div className="w-8 sm:w-10 lg:w-12 h-0.5 bg-teal-400"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-teal-400 rounded-full mx-2 sm:mx-3"></div>
              <div className="w-8 sm:w-10 lg:w-12 h-0.5 bg-teal-400"></div>
            </div>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 sm:mb-4">
            WHY CHOOSE US
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            Why Choose Visa Rapid<br />
            for Your Immigration Journey?
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 lg:p-6 text-center group hover:shadow-xl hover:-translate-y-2 hover:border-teal-300 transition-all duration-300 border border-gray-300 cursor-pointer rounded-lg">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-teal-700 rounded-full mb-4 sm:mb-5 lg:mb-6">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  {feature.icon.props.children}
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs