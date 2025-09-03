import React, { useState } from 'react'

const ForIndividuals = () => {
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
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/
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
    <section className="pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img 
              src="/image3.jpg" 
              alt="Family embracing"
              className="w-full h-130 lg:h-[700px] object-cover shadow-lg"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="bg-orange-200 ">
            {/* Tag - stays in original position */}
            <div className="inline-flex items-center bg-white px-16 py-7 shadow-sm mb-6">
              <svg className="w-6 h-6 text-gray-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-gray-700 font-medium text-2xl">Individuals & families</span>
            </div>
            
            {/* Content with padding */}
            <div className="space-y-8 pl-12 lg:pl-16 pr-8 pb-16">
              {/* Main heading */}
              <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight font-serif">
              Your Future, One<br />
              Clear Step at a Time
            </h2>
            
              {/* Description */}
              <p className="text-gray-700 text-2xl leading-relaxed">
                Navigate changing immigration requirements with confidence. Our proven process empowers both families and extraordinary individuals to build their future in the Portugal with experienced guidance and guaranteed success.
              </p>
              
              {/* CTA Button */}
              <button 
                onClick={openModal}
                className="text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors font-medium flex items-center gap-2" 
                style={{backgroundColor: 'rgb(111, 54, 2)'}}
              >
                Book An Appointment
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
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
  )
}

export default ForIndividuals