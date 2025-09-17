import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const JobSeekerVisa = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [benefitsRef, benefitsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [eligibilityRef, eligibilityVisible] = useScrollAnimation({ threshold: 0.1 })
  const [whoCanApplyRef, whoCanApplyVisible] = useScrollAnimation({ threshold: 0.1 })
  const [stepByStepRef, stepByStepVisible] = useScrollAnimation({ threshold: 0.1 })
  const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.1 })
  const [currentStep, setCurrentStep] = useState(0)

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone) => {
    const phoneRegex = /^[+]?[\d\s\-()]{10,}$/
    return phoneRegex.test(phone)
  }

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

  const steps = [
    {
      title: "Prepare Required Documents",
      description: "Gather your CV, passport, academic qualifications, and proof of financial resources to support yourself during your job search in Portugal."
    },
    {
      title: "Submit Job Seeker Visa Application",
      description: "Apply at the Portuguese embassy or consulate in your home country with all required documents and application forms."
    },
    {
      title: "Enter Portugal and Register",
      description: "Upon approval, enter Portugal and register with local authorities within the specified timeframe."
    },
    {
      title: "Search for Employment",
      description: "Actively search for employment opportunities in your field while maintaining legal status in Portugal."
    },
    {
      title: "Secure Job Offer",
      description: "Obtain a job offer from a Portuguese employer that meets the visa requirements and salary thresholds."
    },
    {
      title: "Apply for Work Permit",
      description: "Convert your job seeker visa to a work permit once you have secured employment with a Portuguese employer."
    },
    {
      title: "Obtain Residence Permit",
      description: "Apply for a residence permit that allows you to live and work in Portugal long-term, renewable based on employment status."
    }
  ]

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  return (
    <>
      <style>
        {`
          .fade-in-up {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          .fade-in-up.visible {
            opacity: 1;
            transform: translateY(0);
          }
          .hover-lift {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .hover-lift:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
          }
          .scale-on-hover {
            transition: transform 0.3s ease;
          }
          .scale-on-hover:hover {
            transform: scale(1.05);
          }
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={heroRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center fade-in-up ${heroVisible ? 'visible' : ''}`}
          >
            {/* Left Column - Content */}
            <div className="order-1 lg:order-1">
              <div className="space-y-3">
                <div>
                  <p className="text-5xl font-medium text-gray-900 tracking-wide mb-6">
                    What is the Portugal Job Seeker Visa & Work Visa?
                  </p>
                  <p className="text-xl text-gray-600 leading-relaxed mb-4">

                  The Portugal Job Seeker Visa allows non-EU nationals to enter Portugal temporarily to search for 
                  employment. Once you secure a job, you can convert it into a residence permit
                  (such as D1 for employment or D3 for highly qualified activity).
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    className="px-8 py-3 rounded-lg font-medium transition-colors"
                    style={{ backgroundColor: '#ef4444', color: 'white' }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#dc2626'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#ef4444'}
                    onClick={() => {
                      benefitsRef.current?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                  >
                    What are the benefits?
                  </button>
                  <button
                    className="border px-8 py-3 rounded-lg font-medium transition-colors"
                    style={{ borderColor: '#d1d5db', color: '#374151', backgroundColor: 'white' }}
                    onMouseEnter={(e) => e.target.style.borderColor = '#9ca3af'}
                    onMouseLeave={(e) => e.target.style.borderColor = '#d1d5db'}
                  >
                    Talk to our experts
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-2 lg:order-2">
              <div className="relative">
                <img
                  src="/Job.png"
                  alt="Portugal Job Seeker Visa"
                  className="w-full h-130 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            ref={benefitsRef}
            className={`fade-in-up ${benefitsVisible ? 'visible' : ''}`}
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
                Benefits of the Portugal Job Seeker Visa & Work Visa
              </h2>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
              {/* No Job Offer Required Card */}
              <div className={`bg-red-100 p-8 rounded-2xl hover-lift stagger-item ${benefitsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                <div className="mb-6">
                  <div className="mb-4 scale-on-hover">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    No Job Offer Required
                  </h3>
                  <p className="text-gray-700">
                  You can enter Portugal legally without needing an employment contract beforehand, 
                  giving you flexibility to explore opportunities.
                  </p>
                </div>
              </div>

              {/* 6-9 Months Stay Permit Card */}
              <div className={`bg-red-100 p-8 rounded-2xl hover-lift stagger-item ${benefitsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                <div className="mb-6">
                  <div className="mb-4 scale-on-hover">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 00-2-2H8a2 2 0 00-2 2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0h2a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    6-9 Months Stay Permit
                  </h3>
                  <p className="text-gray-700">
                  The visa gives you enough time to actively search for jobs, attend interviews, and
                  connect with employers in person.
                  </p>
                </div>
              </div>

              {/* Pathway to residency & citizenship Card */}
              <div className={`bg-red-100 p-8 rounded-2xl hover-lift stagger-item ${benefitsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
                <div className="mb-6">
                  <div className="mb-4 scale-on-hover">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Pathway to residency & citizenship
                  </h3>
                  <p className="text-gray-700">
                  After 5 years of legal residence, you can apply for permanent residency or 
                  even Portuguese/EU citizenship.
                  </p>
                </div>
              </div>

              {/* Family reunification Card */}
              <div className={`bg-red-100 p-8 rounded-2xl hover-lift stagger-item ${benefitsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                <div className="mb-6">
                  <div className="mb-4 scale-on-hover">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Family reunification 
                  </h3>
                  <p className="text-gray-700">
                  Once you secure a residence permit, your spouse, children, and eligible dependents
                  can also join you in Portugal with the same rights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility and Processing Time Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={eligibilityRef}
            className={`grid grid-cols-1 lg:grid-cols-5 gap-8 fade-in-up ${eligibilityVisible ? 'visible' : ''}`}
          >
            {/* Eligibility Criteria Container - 60% (3/5) */}
            <div className={`lg:col-span-3 bg-blue-100 p-8 rounded-2xl hover-lift fade-in-up ${eligibilityVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Left Column - Text Content */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="scale-on-hover">
                      <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      Eligibility Criteria
                    </h2>
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-3">
                      </div>
                      <p className="text-gray-700">
                      Bachelor's degree
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-3">
                      </div>
                      <p className="text-gray-700">
                       Health insurance
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-3">
                      </div>
                      <p className="text-gray-700">
                        No requirement for IELTS
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-3">
                      </div>
                      <p className="text-gray-700">
                      Evidence of having sufficient funds
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-3">
                      </div>
                      <p className="text-gray-700">
                       Authenticated airplane reservations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-black rounded-full mt-3">
                      </div>
                      <p className="text-gray-700">
                      Evidence of having booked accommodation in Portugal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <img
                      src="/Job1.jpg"
                      alt="Job Application Accepted"
                      className="w-90 h-85 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Processing Time Container - 40% (2/5) */}
            <div className={`lg:col-span-2 bg-blue-100 p-8 rounded-2xl hover-lift fade-in-up ${eligibilityVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="scale-on-hover">
                    <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    Processing Time
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  It usually takes 2 months to process a Portugal Jobseeker Visa. However, based on the situation, such as the stage of the year, if all your documents are in order, etc., it may take more time. Therefore, you must apply around a month ahead of your intended travel date but not before three months.
                </p>

                {/* Apply Now Button */}
                <button
                  onClick={openModal}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 mt-10"
                >
                  Apply Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="bg-red-500 text-white px-4 sm:px-6 py-4 rounded-t-lg relative">
              <h2 className="text-lg sm:text-xl font-semibold text-center">Apply for Job Seeker Visa</h2>
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
                        errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-400'
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
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-400'
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
                      errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-red-400'
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
                  className="w-full p-4 border border-gray-300 rounded bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-white"
                />

                {/* Message */}
                <textarea
                  placeholder="Tell us about your professional background and job search goals in Portugal..."
                  rows="4"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded bg-gray-100 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-white resize-none"
                ></textarea>

                {/* Terms */}
                <div className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-red-500" />
                  <p className="text-sm text-gray-600">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-red-500 hover:text-red-600">Terms of Use</a>
                    {' '}and{' '}
                    <a href="#" className="text-red-500 hover:text-red-600">Privacy Policy</a>
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default JobSeekerVisa