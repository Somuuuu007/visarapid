import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const ResidencePermit = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [tableRef, tableVisible] = useScrollAnimation({ threshold: 0.1 })
  
  const countries = [
    {
      flag: 'https://flagcdn.com/w80/pt.png',
      name: 'Portugal',
      program: 'Golden Visa',
      investment: '€250,000+ (investment)',
      timeRequired: '12+ months',
      benefits: [
        'Visa-free entry to Schengen',
        'Path to citizenship in 5 years',
        'Family reunification',
        'NHR tax benefits',
        
      ]
    },
    {
      flag: 'https://flagcdn.com/w80/pt.png',
      name: 'Portugal',
      program: 'D7 Visa (Passive Income)',
      investment: 'Proof of stable passive income (€760+/month approx.)',
      timeRequired: '3-6 months',
      benefits: [
        'Live in Portugal legally',
        'Path to Portuguese citizenship in 5 years',
        'Low cost of living & tax benefits'
      ]
    },
    {
      flag: 'https://flagcdn.com/w80/pt.png',
      name: 'Portugal',
      program: 'D2 Visa (Entrepreneur)',
      investment: 'Business investment (no fixed minimum, usually €50,000+)',
      timeRequired: '3-6 months',
      benefits: [
        'Start/run a business in Portugal',
        'Family reunification',
        'Citizenship eligibility in 5 years'
      ]
    },
    {
      flag: 'https://flagcdn.com/w80/pt.png',
      name: 'Portugal',
      program: 'Work Visa',
      investment: 'Job offer + employer sponsorship',
      timeRequired: '2-4 months',
      benefits: [
        'Live and work in Portugal legally',
        'Social security & healthcare benefits',
        'Family reunification'
      ]
    },
    {
      flag: 'https://flagcdn.com/w80/pt.png',
      name: 'Portugal',
      program: 'Student Visa',
      investment: 'Admission in Portuguese university',
      timeRequired: '1-3 months',
      benefits: [
        'Stay during course duration',
        'Part-time work allowed',
        'Path to permanent residency after studies' 
      ]
    },
    {
      flag: 'https://flagcdn.com/w80/pt.png',
      name: 'Portugal',
      program: 'Family Reunification',
      investment: 'Family ties with resident/citizen',
      timeRequired: '2-6 months',
      benefits: [
        'Join family members in Portugal',
        'Right to live, work & study',
        'Citizenship path after 5 years'
      ]
    }
  ]

  return (
    <>
      <style>
        {`
          .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          .fade-in-up.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .stagger-animation {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease-out;
          }
          .stagger-animation.visible {
            opacity: 1;
            transform: translateY(0);
          }
        `}
      </style>
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 ref={titleRef} className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 lg:mb-16 text-center lg:text-left fade-in-up ${titleVisible ? 'visible' : ''}`}>
            Residence permit by investment
          </h2>
        
        {/* Table Header */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 xl:gap-20 py-4 text-sm font-semibold text-gray-600 uppercase tracking-wide border-b border-gray-200" style={{gridTemplateColumns: '1.8fr 1fr 1.2fr 2fr'}}>
          <div>Country and Visa Type</div>
          <div>Investment / Requirement</div>
          <div>Time required</div>
          <div>Benefits</div>
        </div>
        
        {/* Country Rows */}
        <div ref={tableRef} className="bg-white">
          {countries.map((country, index) => (
            <div 
              key={index} 
              className={`py-4 sm:py-6 lg:py-8 stagger-animation ${tableVisible ? 'visible' : ''} ${index !== countries.length - 1 ? 'border-b border-gray-200' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Mobile Card Layout */}
              <div className="lg:hidden bg-gray-50 rounded-lg p-4 space-y-4">
                {/* Country Info */}
                <div className="flex items-center space-x-3 pb-3 border-b border-gray-200">
                  <img 
                    src={country.flag} 
                    alt={`${country.name} flag`}
                    className="w-6 h-4 sm:w-8 sm:h-6 object-cover rounded border border-gray-200 shadow-sm"
                    style={{
                      imageRendering: 'crisp-edges',
                      msInterpolationMode: 'nearest-neighbor'
                    }}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">{country.name}</h3>
                    <p className="text-gray-600 text-sm">{country.program}</p>
                  </div>
                </div>
                
                {/* Investment */}
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-600 mb-1 uppercase tracking-wide">Investment / Requirement</div>
                  <p className="font-semibold text-gray-900 text-sm leading-relaxed">{country.investment}</p>
                </div>
                
                {/* Time Required */}
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-600 mb-1 uppercase tracking-wide">Time required</div>
                  <p className="font-semibold text-gray-900 text-base sm:text-lg">{country.timeRequired}</p>
                </div>
                
                {/* Benefits */}
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Benefits</div>
                  <ul className="space-y-2">
                    {country.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm leading-relaxed font-medium break-words">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Desktop Table Layout */}
              <div className="hidden lg:grid lg:grid-cols-4 gap-4 xl:gap-20 items-start" style={{gridTemplateColumns: '1.8fr 1fr 1.2fr 2fr'}}>
                {/* Country Info */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={country.flag} 
                    alt={`${country.name} flag`}
                    className="w-8 h-6 object-cover rounded border border-gray-200 shadow-sm"
                    style={{
                      imageRendering: 'crisp-edges',
                      msInterpolationMode: 'nearest-neighbor'
                    }}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">{country.name}</h3>
                    <p className="text-gray-600 text-sm">{country.program}</p>
                  </div>
                </div>
                
                {/* Investment */}
                <div>
                  <p className="font-semibold text-gray-900 text-sm leading-relaxed break-words">{country.investment}</p>
                </div>
                
                {/* Time Required */}
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{country.timeRequired}</p>
                </div>
                
                {/* Benefits */}
                <div>
                  <ul className="space-y-1">
                    {country.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm leading-relaxed font-medium break-words">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default ResidencePermit