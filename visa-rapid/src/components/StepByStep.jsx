import React from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const styles = `
  .slide-in-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
  }
  .slide-in-up.visible {
    opacity: 1;
    transform: translateY(0);
  }
`

const StepByStep = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 })
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 })

  const services = [
    {
      icon: (
        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
      ),
      title: "Document Preparation",
      description: "Our specialist team helps compile and verify your visa documents for complete accuracy, sidestepping potential delays and maximising your tax position within the relevant visa exemption."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
      ),
      title: "Application Submission",
      description: "Submit your application with ease. Our team guides you through every step from filling out forms to preparing documents ensuring your Portugal visa application is accurate, complete, and ready for approval."
    },
    {
      icon: (
        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          </svg>
        </div>
      ),
      title: "Continuous Support",
      description: "We don’t stop at application submission our team stays connected with you throughout the entire process. Whether it’s tracking updates, clarifying requirements, or resolving queries, we provide ongoing guidance to make your visa journey smooth and worry-free."
    },
      {
      icon: (
        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      ),
      title: "Customised Solutions",
      description: "Every journey is unique  and so is our approach. Our legal team craft a personalised visa strategy designed around your goals, background, and future plans. With tailored guidance and one-to-one support, we ensure the best pathway for a successful visa outcome."
    }
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div ref={titleRef} className={`mb-12 slide-in-up ${titleVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
              How we can help?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Discover the advantages of entrusting your visa journey to our experienced team.
            </p>
          </div>

          <div ref={cardsRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-6 slide-in-up ${cardsVisible ? 'visible' : ''}`}>
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default StepByStep