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

  const ContactPage = () => {

  return (
      <>
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        

        {/* Meeting Section */}
        <div className="bg-gray-200 rounded-3xl px-7 py-12 mt-10">

          {/* Content */}
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Set up a one-on-one meeting
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            Expert one-on-one guidance on Portugal  visas, reinforced by our legal team.            </p>

            {/* Book Appointment Button */}
            <a
              href="https://calendly.com/someshlingwal1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors duration-200"
            >
              Book your appointment now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

        </div>

        {/* Placeholder for additional content */}
        <div className="mt-16">
          {/* More content will be added here as requested */}
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactPage