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
    country: '',
    currentLocation: '',
    profession: '',
    experience: '',
    education: '',
    preferredDestination: '',
    budget: '',
    timeframe: '',
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
      country: '',
      currentLocation: '',
      profession: '',
      experience: '',
      education: '',
      preferredDestination: '',
      budget: '',
      timeframe: '',
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
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required'
    }
    if (!formData.profession.trim()) {
      newErrors.profession = 'Profession is required'
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
                src="/image3.webp"
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
              <a
                href="https://calendly.com/nikita-visarapid/30min?back=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-md transition-colors font-medium items-center gap-2 inline-flex"
                style={{backgroundColor: 'rgb(111, 54, 2)', color: 'white'}}
              >
                Book An Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 backdrop-blur-[2px] flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg max-w-5xl w-full max-h-[92vh] overflow-y-auto mx-4 sm:mx-0"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Header */}
            <div className="bg-blue-600 text-white px-4 sm:px-6 py-4 rounded-t-lg relative">
              <h2 className="text-lg sm:text-xl font-semibold text-center">Request a Appointment</h2>
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 transition-colors p-1"
                style={{
                  color: '#ffffff',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '4px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#e5e7eb';
                  e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#ffffff';
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} style={{color: 'inherit'}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Form */}
            <div className="p-4 sm:p-5">
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Personal Information Section */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">Personal Information</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span style={{color: '#ef4444'}}>*</span></label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className={`w-full p-3 border rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent ${
                          errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                        }`}
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span style={{color: '#ef4444'}}>*</span></label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`w-full p-3 border rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent ${
                          errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full p-3 border rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent ${
                          errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                        }`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Country <span style={{color: '#ef4444'}}>*</span></label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className={`w-full p-3 border rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent ${
                          errors.country ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                        }`}
                      />
                      {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                    </div>
                  </div>
                </div>

                {/* Professional Information Section */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">Professional Background</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Location</label>
                      <input
                        type="text"
                        value={formData.currentLocation}
                        onChange={(e) => handleInputChange('currentLocation', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Profession <span style={{color: '#ef4444'}}>*</span></label>
                      <input
                        type="text"
                        value={formData.profession}
                        onChange={(e) => handleInputChange('profession', e.target.value)}
                        className={`w-full p-3 border rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white focus:border-transparent ${
                          errors.profession ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-teal-500'
                        }`}
                      />
                      {errors.profession && <p className="text-red-500 text-xs mt-1">{errors.profession}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                      <select
                        value={formData.experience}
                        onChange={(e) => handleInputChange('experience', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent"
                      >
                        <option value="">Select experience</option>
                        <option value="0-2">0-2 years</option>
                        <option value="3-5">3-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="10+">10+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Education Level</label>
                      <select
                        value={formData.education}
                        onChange={(e) => handleInputChange('education', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent"
                      >
                        <option value="">Select education</option>
                        <option value="highschool">High School</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">PhD</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Immigration Preferences Section */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">Immigration Preferences</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Destination</label>
                      <select
                        value={formData.preferredDestination}
                        onChange={(e) => handleInputChange('preferredDestination', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent"
                      >
                        <option value="">Select destination</option>
                        <option value="germany">Germany</option>
                        <option value="netherlands">Netherlands</option>
                        <option value="portugal">Portugal</option>
                        <option value="spain">Spain</option>
                        <option value="other">Other European Country</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent"
                      >
                        <option value="">Select budget</option>
                        <option value="under-50k">Under $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-200k">$100,000 - $200,000</option>
                        <option value="above-200k">Above $200,000</option>
                      </select>
                    </div>
                    <div className="lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Timeframe</label>
                      <select
                        value={formData.timeframe}
                        onChange={(e) => handleInputChange('timeframe', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent"
                      >
                        <option value="">When do you plan to relocate?</option>
                        <option value="asap">ASAP (0-6 months)</option>
                        <option value="6-12months">6-12 months</option>
                        <option value="1-2years">1-2 years</option>
                        <option value="2+years">2+ years</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your specific needs, family situation, or any questions you have..."
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white focus:border-transparent resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full font-semibold py-3 px-6 rounded-lg transition-colors text-lg"
                  style={{
                    backgroundColor: '#0d9488',
                    color: '#ffffff',
                    border: 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#0d9488'}
                >
                  Request Consultation
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