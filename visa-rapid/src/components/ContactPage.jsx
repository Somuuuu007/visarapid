import React from 'react'

const ContactPage = () => {
  return (
    <div className="h-160 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ">
        
        {/* Main Heading */}
        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-16">
          Offices and contacts
        </h1>

        {/* Meeting Section */}
        <div className="bg-gray-50 rounded-3xl px-7 flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Content */}
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Set up a one-on-one meeting
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
              Lawyers in citizenship by investment will analyze your case and help you find an individual solution.
            </p>
            
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

          {/* Right Side - Lawyer Image */}
          <div className="lg:w-1/3 relative overflow-visible">
            <div className="h-[300px] flex items-end justify-start overflow-visible">
              <img 
                src="/Lawyer.png" 
                alt="Legal Expert" 
                className="h-[400px] w-auto object-cover object-left"
              />
            </div>
            
            {/* Profile card overlay */}
            
          </div>
        </div>

        {/* Placeholder for additional content */}
        <div className="mt-16">
          {/* More content will be added here as requested */}
        </div>
      </div>
    </div>
  )
}

export default ContactPage