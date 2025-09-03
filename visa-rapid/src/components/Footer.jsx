import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 lg:mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          
          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-300 font-semibold mb-2 sm:mb-3 uppercase tracking-wide text-xs sm:text-sm">CONTACT US</h3>
            <div className="space-y-1 text-xs">
              <p className="text-xs sm:text-sm">Portugal +351 21 027 0734</p>
              <p className="pt-3 sm:pt-6 text-xs sm:text-sm">legal@visarapid.com</p>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-300 font-semibold mb-2 sm:mb-3 uppercase tracking-wide text-xs sm:text-sm">SERVICES</h3>
            <div className="space-y-1 text-xs">
              <p>Immigration</p>
              <p>Business</p>
              
              <p>Tax</p>
              
            </div>
          </div>

          {/* Insights */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-300 font-semibold mb-2 sm:mb-3 uppercase tracking-wide text-xs sm:text-sm">INSIGHTS</h3>
            <div className="space-y-1 text-xs">
              <p>Knowledge Hub</p>
              
            </div>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-300 font-semibold mb-2 sm:mb-3 uppercase tracking-wide text-xs sm:text-sm">LEGAL</h3>
            <div className="space-y-1 text-xs">
              <p>Legal Note</p>
              <p>Privacy Policy</p>
              
              <p>Sitemap</p>
            </div>
          </div>

          {/* Follow Us */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-300 font-semibold mb-2 sm:mb-3 uppercase tracking-wide text-xs sm:text-sm">FOLLOW US</h3>
            <div className="flex space-x-2 sm:space-x-3 flex-wrap">
              {/* LinkedIn */}
              <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              {/* Facebook */}
              <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986 6.618 0 11.986-5.368 11.986-11.986C24.003 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.435-3.396-1.153-.315-.238-.315-.595 0-.833.318-.238.833-.238 1.151 0 .714.536 1.594.833 2.245.833.651 0 1.531-.297 2.245-.833.318-.238.833-.238 1.151 0 .315.238.315.595 0 .833-.948.718-2.099 1.153-3.396 1.153zm7.598-1.153c-.315-.238-.315-.595 0-.833.318-.238.833-.238 1.151 0 .714.536 1.594.833 2.245.833.651 0 1.531-.297 2.245-.833.318-.238.833-.238 1.151 0 .315.238.315.595 0 .833-.948.718-2.099 1.153-3.396 1.153s-2.448-.435-3.396-1.153z"/>
                </svg>
              </a>
              
              {/* Twitter/X */}
              <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* YouTube */}
              <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-700 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © 2025 Visa Rapid - MAKING LAW SIMPLE. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer