import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page Header */}
        <div className="mb-16">
          <p className="text-5xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6">
            Read our articles
          </p>
          <p className="text-lg text-gray-600 max-w-2xl">
            Expert articles on lifestyle, tax, visas, investment, healthcare, as well as finances for an affluent expat's life in Portugal
          </p>
        </div>

        {/* Featured Article */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 bg-gray-100 rounded-2xl p-4 lg:p-0">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/Blog.webp"
              alt="Lisbon's iconic Rua Augusta Arch"
              className="w-full h-64 sm:h-80 lg:h-[500px] object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 p-4 lg:pl-1">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-gray-600 text-sm rounded-full">
                Visa & Finance
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 lg:mb-6 leading-tight">
            Luxembourg to scrap Golden Visa as Portugal stands strong
            </h2>

            <p className="text-gray-600 text-sm sm:text-md leading-relaxed mb-6">
            Luxembourg is set to terminate its Golden Visa programme following seven years of limited success and uptake.
            </p>

            <Link
              to="/blogs/luxembourg-golden-visa"
              className="inline-flex items-center font-medium transition-colors lg:mt-35"
              style={{color: 'black', textDecoration: 'none'}}
            >
              Read more
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Additional Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Article 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src="/Blog2.webp"
              alt="Luxembourg Airport"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <div className="p-8">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-blue-100 text-gray-600 text-sm rounded-full">
                  Visa & Finance
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight mt-5">
              Portugal now outranks UK and US in passport power
              </h3>
              <a
                href="#"
                className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors mt-4"
                style={{color: 'gray'}}
              >
                Read more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src="/Blog3.webp"
              alt="Portuguese Passport"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <div className="p-8">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-blue-100 text-gray-600 text-sm rounded-full">
                  Culture & Heritage
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight mt-5">
              LGBTQ+ Americans choose Portugal's Golden Visa
              </h3>
              <a
                href="#"
                className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors mt-4"
                style={{color: 'gray'}}
              >
                Read more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blogs