
import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const WhyChooseUs = () => {
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    country: '',
    currentLocation: '',
    profession: '',
    experience: '',
    education: '',
    preferredDestination: '',
    budget: '',
    timeframe: '',
  })
  const [errors, setErrors] = useState({})

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
    setErrors({})
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
      country: '',
      currentLocation: '',
      profession: '',
      experience: '',
      education: '',
      preferredDestination: '',
      budget: '',
      timeframe: '',
    })
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone) => {
    const phoneRegex = /^[+]?[\d\s\-()]{10,}$/
    return phoneRegex.test(phone)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {}

    // Validate email
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Validate phone
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)'
    }

    // Validate required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    }

    setErrors(newErrors)

    // If no errors, submit the form
    if (Object.keys(newErrors).length === 0) {
      // Handle form submission here
      console.log('Form submitted:', formData)
      closeModal()
    }
  }

  return (
    <>
      <style>
        {`
          .slide-in-left {
            opacity: 0;
            transform: translateX(-50px);
            transition: all 0.8s ease-out;
          }
          .slide-in-left.visible {
            opacity: 1;
            transform: translateX(0);
          }
          .slide-in-right {
            opacity: 0;
            transform: translateX(50px);
            transition: all 0.8s ease-out;
          }
          .slide-in-right.visible {
            opacity: 1;
            transform: translateX(0);
          }
        `}
      </style>
      <section className="pt-1 sm:pt-1 lg:pt-1 pb-6 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-8xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center justify-center mb-4 sm:mb-6">
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-10 sm:mb-12 lg:mb-10">
              Predictable Immigration - No Endless Waiting
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left side - Content */}
            <div ref={contentRef} className={`slide-in-left ${contentVisible ? 'visible' : ''}`}>
              <div className="space-y-8 pr-12 lg:pr-16 pl-8 pb-16">
                {/* Main heading */}
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight font-serif">
                  Don't wait, time is flying, start your application today!
                </h2>

                {/* Numbered list */}
                <ol className="space-y-3 text-gray-700 text-xl leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-black font-bold mr-4 mt-1">1.</span>
                    <span>Minimum budget of ₹8 lakhs (payable in phases over 1 year).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black font-bold mr-4 mt-1">2.</span>
                    <span>Proof of ₹10-15 lakhs as financial security.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black font-bold mr-4 mt-1">3.</span>
                    <span>Entrepreneurial mindset and willingness to start a business (prior experience not mandatory).</span>
                  </li>
                </ol>

                {/* Final message */}
                <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-gray-900 italic bg-yellow-200 inline-block font-serif">
                  Looks good?
                </p>

                {/* CTA Button */}
                <div className="flex justify-center ">
                  <button
                    onClick={openModal}
                    className="text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors font-medium flex items-center gap-2"
                    style={{backgroundColor: 'rgb(111, 54, 2)'}}
                  >
                    Contact Us Today
                    
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div ref={imageRef} className={`relative slide-in-right ${imageVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s', marginBottom: '60px' }}>
              <img
                src="/image7.png"
                alt="Visa Application with Passport"
                className="w-180 h-100 lg:h-120 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto mx-4 sm:mx-0"
              onClick={(e) => e.stopPropagation()}
            >

              {/* Header */}
              <div className="bg-teal-500 text-white px-4 sm:px-6 py-4 rounded-t-lg relative">
                <h2 className="text-lg sm:text-xl font-semibold text-center">Contact Us Today</h2>
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors bg-transparent border-none p-1"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Form */}
              <div className="p-4 sm:p-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className={`w-full p-4 border rounded bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white ${
                          errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                        }`}
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full p-4 border rounded bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full p-4 border rounded bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white ${
                        errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                      }`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  

                  {/* Message */}
                  <textarea
                    placeholder="Write a Message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full p-4 border border-gray-300 rounded bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white resize-none"
                  ></textarea>

                  

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-3 px-6 rounded transition-colors"
                  >
                    Send a Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default WhyChooseUs