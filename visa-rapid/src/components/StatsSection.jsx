import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const StatsSection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation({ threshold: 0.2 })

  const stats = [
    {
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "98%+ Success Rate",
      description: "Transparent processes and careful application handling."
    },
    {
      icon: (
        <div className="flex items-center justify-center">
          {[...Array(4)].map((_, i) => (
            <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-black fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      ),
      title: "4.8/5 Client Rating",
      description: "Consistently high satisfaction across independent reviews."
    },
    {
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Backed by European Lawyers",
      description: "Every case reviewed to meet legal compliance."
    },
    {
      icon: (
        <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "End-to-End Support",
      description: "From application preparation to final approval."
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
        `}
      </style>
      <section className="py-8 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-10 mb-18 bg-blue-200 mt-10">
        <div className="max-w-8xl mx-auto">
          <div
            ref={sectionRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 fade-in-up ${sectionVisible ? 'visible' : ''}`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-left px-4 sm:px-6 ${index < 3 ? 'border-r border-black' : ''}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start mb-4 text-black">
                  {stat.icon}
                </div>
                <div className="text-lg sm:text-xl font-bold text-black mb-2">
                  {stat.title}
                </div>
                <div className="text-sm sm:text-base text-black leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default StatsSection