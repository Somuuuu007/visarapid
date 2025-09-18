import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const ForIndividuals = () => {
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 })
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 })
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
      subject: '',
      message: ''
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
      <section className="pt-6 sm:pt-8 lg:pt-10 pb-4 sm:pb-6 lg:pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left side - Image */}
            <div ref={imageRef} className={`relative slide-in-left ${imageVisible ? 'visible' : ''}`}>
              <img
                src="/image3.png"
                alt="Family embracing"
                className="w-full h-96 lg:h-[500px] object-cover shadow-lg"
              />
            </div>
            
            {/* Right side - Content */}
            <div ref={contentRef} className={`bg-orange-200 slide-in-right ${contentVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            {/* Tag - stays in original position */}
            <div className="inline-flex items-center bg-white px-12 py-4 shadow-sm mb-4">
              <svg className="w-5 h-5 text-gray-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 919-9" />
              </svg>
              <span className="text-gray-700 font-medium text-xl">Europe :</span>
            </div>
            
            {/* Content with padding */}
            <div className="space-y-6 pl-8 lg:pl-12 pr-6 pb-8">
              {/* Main heading */}
              <h2 className="text-3xl lg:text-4xl font-light text-gray-900 leading-tight font-serif">
              The Next Step For<br />
              Your Career & Family
            </h2>
            
              {/* Description */}
              <ul className="space-y-2 text-gray-700 text-lg leading-relaxed">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>One of the cleanest and safest places to live and retire.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Give your family weekends holidays in Switzerland.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Breathe clean air, enjoy fresh food, and drink pure water.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Clear PR and citizenship pathway, unlike the uncertainty in the US or Canada.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Lower cost of living compared to most Western countries.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Free healthcare for the entire family.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Free, quality education for your children.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                  <span>Financial security with unemployment benefits.</span>
                </li>
              </ul>
              
              {/* CTA Button */}
              <button 
                onClick={openModal}
                className="text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors font-medium flex items-center gap-2" 
                style={{backgroundColor: 'rgb(111, 54, 2)'}}
              >
                Book An Appointment
              </button>
            </div>
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
              <h2 className="text-lg sm:text-xl font-semibold text-center">Request a Appointment</h2>
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

                {/* Subject */}
                <input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white"
                />

                {/* Message */}
                <textarea
                  placeholder="Write a Message"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white resize-none"
                ></textarea>

                {/* Terms */}
                <div className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-teal-500" />
                  <p className="text-sm text-gray-600">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-blue-500 hover:text-blue-600">Terms of Use</a>
                    {' '}and{' '}
                    <a href="#" className="text-blue-500 hover:text-blue-600">Privacy Policy</a>
                  </p>
                </div>

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

export default ForIndividuals