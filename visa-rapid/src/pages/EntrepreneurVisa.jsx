import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const EntrepreneurVisa = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 })
  const [benefitsRef, benefitsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.3 })
  const [detailsRef, detailsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [processRef, processVisible] = useScrollAnimation({ threshold: 0.1 })
  const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.1 })

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
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }
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
          .fade-in-left {
            opacity: 0;
            transform: translateX(-40px);
            transition: all 0.8s ease-out;
          }
          .fade-in-left.visible {
            opacity: 1;
            transform: translateX(0);
          }
          .fade-in-right {
            opacity: 0;
            transform: translateX(40px);
            transition: all 0.8s ease-out;
          }
          .fade-in-right.visible {
            opacity: 1;
            transform: translateX(0);
          }
          .stagger-item {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease-out;
          }
          .stagger-item.visible {
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
        `}
      </style>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={heroRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center fade-in-up ${heroVisible ? 'visible' : ''}`}
          >
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/Entrepreneur.png"
                  alt="Portugal D2 Visa Documentation"
                  className="w-full h-160 object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                <div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-600 leading-tight mb-4">
                    Secure EU residency with Portugal's visa for entrepreneurs
                  </h1>
                  <p className="text-3xl font-bold text-gray-900  tracking-wide mb-6 mt-6">
                    What is the Portugal Entrepreneur(D2) Visa?
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                  

                    If you are an  entrepreneur who wants to enter Portugal and open a new business, 
                      buy an already existing business or its share, or set up a branch of an already existing business you need 
                      to obtain the Portugal D2 visa.

                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <p className="text-gray-700 ">Dual residency in Portugal/EU for you and your qualifying family</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">If eligible, enjoy tax benefits when combined with the RCH, HNR 2.0, tax regime</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-700">Pathway to Portuguese citizenship after five years</p>
                  </div>
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
                What are the Benefits of the D2 'Entrepreneur' Visa in Portugal?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Unlock EU residency, a path to dual citizenship, and visa-free travel across the Schengen Zone as an entrepreneur or freelancer.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
              {/* Schengen Area Access Card */}
              <div className={`bg-red-100 p-8 rounded-2xl hover-lift stagger-item ${benefitsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                <div className="mb-6">
                  <div className="mb-4 scale-on-hover">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Schengen Area Access
                  </h3>
                  <p className="text-gray-700">
                    Enjoy free entry and circulation within the Schengen Area, comprising 27 European countries, without the need for an additional visa. Essentially, the D2 Visa provides travel rights equivalent to those of European Union citizens, facilitating seamless networking and corporate connections throughout Europe.
                  </p>
                </div>
              </div>

              {/* Family Reunification Card */}
              <div className={`bg-red-100 p-8 rounded-2xl hover-lift stagger-item ${benefitsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                <div className="mb-6">
                  <div className="mb-4 scale-on-hover">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Family Reunification
                  </h3>
                  <p className="text-gray-700">
                    The visa allows for family reunification in Portugal, enabling the family, including partners, children, parents, or siblings dependent on either partner, to also live in the country.
                  </p>
                </div>
              </div>

              <div className={`bg-red-100 p-8 rounded-2xl hover-lift stagger-item ${benefitsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
                <div className="mb-6">
                  <div className="mb-4 scale-on-hover">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Portuguese Residency Rights
                  </h3>
                  <p className="text-gray-700">
                    Enjoy Portuguese residency rights, including access to the Public Healthcare System for you and your family, as well as enrolment of your children in the Public Education System.
                  </p>
                </div>
              </div>

              {/* Qualification for Permanent Residence Card */}
              <div className={`bg-red-100 p-8 rounded-2xl hover-lift stagger-item ${benefitsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                <div className="mb-6">
                  <div className="mb-4 scale-on-hover">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Qualification for Permanent Residence or Citizenship
                  </h3>
                  <p className="text-gray-700">
                    After five years of legal permanent residence, D2 Visa holders may be eligible for permanent citizenship in Portugal through the country's residency program. It's important to note that citizenship is contingent upon passing a basic Portuguese language test.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* What is Portugal's D2 Entrepreneur Visa Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 -mb-16">
        <div className="max-w-7xl mx-auto">
          <div
            ref={headerRef}
            className={`flex justify-between items-center fade-in-up ${headerVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-semibold text-gray-900">
              Who is eligible for Portugal's <span className="bg-red-300 text-gray-900 px-2 py-1 rounded transition-all duration-300 hover:bg-red-400">D2 Entrepreneur Visa?</span>
            </h2>
            <button
              className="px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              style={{ backgroundColor: '#f87171', color: 'white' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#ef4444'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#f87171'}
            >
              Get started
            </button>
          </div>
        </div>
      </section>

      {/* D2 Visa Details Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={detailsRef}
            className={`grid grid-cols-1 lg:grid-cols-10 gap-8 items-start fade-in-up ${detailsVisible ? 'visible' : ''}`}
          >
            {/* Left Column - Eligibility Requirements (70%) */}
            <div className={`lg:col-span-7 bg-red-100 p-8 rounded-3xl fade-in-left ${detailsVisible ? 'visible' : ''}`}>
              <div className="mb-6">
                <p className="text-gray-900 mb-6 text-center text-2xl font-semibold">
                  To qualify for Portugal's D2 Visa, applicants must:
                </p>
              </div>

              <div className="space-y-4">
                <div className={`flex items-start gap-3 stagger-item ${detailsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                  <div className="w-6 h-6 bg-red-400 rounded flex-shrink-0 flex items-center justify-center mt-0.5 scale-on-hover">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm font-medium">Be a non-EU national</p>
                </div>

                <div className={`flex items-start gap-3 stagger-item ${detailsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                  <div className="w-6 h-6 bg-red-400 rounded flex-shrink-0 flex items-center justify-center mt-0.5 scale-on-hover">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm font-medium">Plan to start a new business or invest in an existing Portuguese business</p>
                </div>

                <div className={`flex items-start gap-3 stagger-item ${detailsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
                  <div className="w-6 h-6 bg-red-400 rounded flex-shrink-0 flex items-center justify-center mt-0.5 scale-on-hover">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm font-medium">Freelancers or independent professionals with a contract or business opportunity in Portugal</p>
                </div>

                <div className={`flex items-start gap-3 stagger-item ${detailsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                  <div className="w-6 h-6 bg-red-400 rounded flex-shrink-0 flex items-center justify-center mt-0.5 scale-on-hover">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm font-medium">Demonstrate sufficient funds to support themselves and their business</p>
                </div>

                <div className={`flex items-start gap-3 stagger-item ${detailsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
                  <div className="w-6 h-6 bg-red-400 rounded flex-shrink-0 flex items-center justify-center mt-0.5 scale-on-hover">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 text-sm font-medium">Show a viable business plan with economic and social value for Portugal</p>
                </div>
              </div>

              <div className={`mt-6 stagger-item ${detailsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.6s' }}>
                <p className="text-gray-700 text-sm leading-relaxed">
                  For eligible applicants, the D2 Visa also allows for family reunification, granting your family members the same residency rights as you. This includes your partner, children under 18, dependent children over 18 (if they are studying), parents, and minor siblings.
                </p>
              </div>
            </div>

            {/* Right Column - Image (30%) */}
            <div className={`lg:col-span-3 relative fade-in-right ${detailsVisible ? 'visible' : ''}`}>
              <img
                src="/Visa1.png"
                alt="Portugal historic building"
                className="w-full h-95 rounded-3xl shadow-lg transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={processRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start fade-in-up ${processVisible ? 'visible' : ''}`}
          >
            {/* Left Column - Process Steps */}
            <div className={`fade-in-left ${processVisible ? 'visible' : ''}`}>
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-light font-serif text-gray-900 leading-tight">
                  What is the application process for Portugal's D2 Visa in 2025?
                </h2>
              </div>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className={`stagger-item ${processVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Prepare Your Business Plan
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        A detailed business plan showcasing financial projections, job creation potential, and economic benefits to Portugal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className={`stagger-item ${processVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Register Your Business
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Obtain a Portuguese Tax Identification Number (NIF), register your business and open a Portuguese bank account.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className={`stagger-item ${processVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Submit Your Visa Application
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Apply at the Portuguese Consulate in your country with all required documents, including proof of accommodation and financial means. It is advisable to engage a Portuguese attorney before prior to the application.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className={`stagger-item ${processVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Obtain Your Residence Permit
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        After arriving in Portugal, schedule an appointment with SEF (Portuguese Immigration and Borders Service) to finalise your residency permit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className={`fade-in-right ${processVisible ? 'visible' : ''}`}>
              <div className="relative">
                <img
                  src="/Visa.png"
                  alt="Portugal street scene with colorful buildings and tram"
                  className="w-full h-150 object-cover rounded-2xl shadow-lg transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div
            ref={contactRef}
            className={`relative rounded-3xl overflow-hidden fade-in-up ${contactVisible ? 'visible' : ''}`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/Visa2.jpg"
                alt="Portugal castle landscape"
                className="w-full h-full object-cover"
              />
             
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 p-8 lg:p-16">
              <div className="max-w-4xl mx-auto">
                {/* Form Container */}
                <div className={`bg-white rounded-2xl p-8 lg:p-12 shadow-2xl stagger-item ${contactVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
                      Schedule a free expert consultation for your D2 Visa application
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Please contact our team to arrange a initial no-obligation discovery call with our D2 Visa specialists to assess your eligibility and receive personalised guidance. To ensure we provide the most relevant advice, please provide some basic information about your background and goals.
                    </p>
                  </div>

                  {/* Form */}
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          className={`w-full p-4 border rounded-lg bg-gray-50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
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
                          className={`w-full p-4 border rounded-lg bg-gray-50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
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
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`w-full p-4 border rounded-lg bg-gray-50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
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
                      className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-white transition-all"
                    />

                    {/* Message */}
                    <textarea
                      placeholder="Tell us about your business plans and immigration goals..."
                      rows="4"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-white resize-none transition-all"
                    ></textarea>

                    {/* Terms */}
                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-400" />
                      <p className="text-sm text-gray-600 leading-relaxed">
                        By submitting this form, you agree to our{' '}
                        <a href="#" className="text-red-500 hover:text-red-600 underline">Terms of Use</a>
                        {' '}and{' '}
                        <a href="#" className="text-red-500 hover:text-red-600 underline">Privacy Policy</a>
                      </p>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Schedule Free Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EntrepreneurVisa