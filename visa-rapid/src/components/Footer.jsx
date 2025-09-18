import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute top-10 right-10 w-96 h-96" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5"/>
        </svg>
        <svg className="absolute bottom-10 left-10 w-64 h-64" viewBox="0 0 200 200" fill="none">
          <polygon points="100,20 180,180 20,180" stroke="currentColor" strokeWidth="0.5" fill="none"/>
          <polygon points="100,40 160,160 40,160" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Section - Logo and Description */}
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold">VISA-RAPID</h2>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8">
            We’ve been in your shoes — that’s why we know how to make immigration simple.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 rounded transition-colors flex items-center justify-center"
                style={{
                  backgroundColor: '#374151',
                  color: '#ffffff'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#4b5563'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{color: '#ffffff'}}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded transition-colors flex items-center justify-center"
                style={{
                  backgroundColor: '#374151',
                  color: '#ffffff'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#4b5563'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{color: '#ffffff'}}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded transition-colors flex items-center justify-center"
                style={{
                  backgroundColor: '#374151',
                  color: '#ffffff'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#4b5563'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{color: '#ffffff'}}>
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zm5.524 7.47c0 4.129-3.141 8.893-8.893 8.893-1.771 0-3.413-.515-4.797-1.404.246.029.495.041.747.041 1.463 0 2.812-.495 3.885-1.336-1.368-.025-2.522-.928-2.922-2.168.191.037.387.057.588.057.285 0 .561-.038.824-.108-1.429-.287-2.504-1.549-2.504-3.063v-.039c.422.234.904.375 1.416.391-.837-.559-1.387-1.512-1.387-2.591 0-.571.153-1.106.421-1.567 1.541 1.891 3.843 3.134 6.441 3.267-.053-.227-.08-.464-.08-.707 0-1.711 1.389-3.1 3.1-3.1.893 0 1.702.377 2.269.981.709-.139 1.375-.398 1.977-.755-.232.725-.725 1.333-1.366 1.717.628-.075 1.227-.241 1.784-.487-.416.622-.943 1.169-1.549 1.607z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded transition-colors flex items-center justify-center"
                style={{
                  backgroundColor: '#374151',
                  color: '#ffffff'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#4b5563'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#374151'}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{color: '#ffffff'}}>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center bg-transparent border border-gray-600 text-gray-300 px-4 py-2 rounded hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              BACK TO TOP
            </button>
          </div>

          {/* Middle Section - Site Map */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Site Map</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="/entrepreneur-visa" className="hover:text-white transition-colors" style={{color: '#d1d5db'}}>Entrepreneur Visa</a></li>
              <li><a href="/startup-visa" className="hover:text-white transition-colors" style={{color: '#d1d5db'}}>Startup Visa</a></li>
              <li><a href="/job-seeker-visa" className="hover:text-white transition-colors" style={{color: '#d1d5db'}}>Job Seeker Visa</a></li>
              <li><a href="/residency" className="hover:text-white transition-colors" style={{color: '#d1d5db'}}>Residency</a></li>
              <li><a href="/blogs" className="hover:text-white transition-colors" style={{color: '#d1d5db'}}>Blogs</a></li>
            </ul>
          </div>

          {/* Right Section - Have A Question */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Have A Question?</h3>

            <div className="mt-8">
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors font-medium"
                style={{backgroundColor: '#dc2626'}}
              >
                Contact Us Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer