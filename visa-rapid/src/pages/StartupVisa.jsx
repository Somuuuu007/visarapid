import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const StartupVisa = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [benefitsRef, benefitsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [whoCanApplyRef, whoCanApplyVisible] = useScrollAnimation({ threshold: 0.1 })
  const [stepByStepRef, stepByStepVisible] = useScrollAnimation({ threshold: 0.1 })
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

  const steps = [
    {
      title: "Build a strong business plan",
      description: "Create a clear, professional business plan that highlights technology, innovation and scalability — and explains how your project will positively impact the Portuguese economy."
    },
    {
      title: "Assemble required documents",
      description: "Prepare your CV, project presentation/pitch deck, motivation letter and any supporting materials."
    },
    {
      title: "Secure an accredited incubator",
      description: "Apply to one or more certified Portuguese incubators. An incubator's acceptance is essential; it fast-tracks your application and gives your project the credibility IAPMEI looks for."
    },
    {
      title: "Wait for IAPMEI decision",
      description: "Track your application on the IAPMEI dashboard. IAPMEI typically issues a decision within 30 working days. If successful you'll receive a Declaration of Participation (valid for 180 days)."
    },
    {
      title: "Apply for your entry visa at the consulate",
      description: "With the Declaration of Participation, book an appointment at the Portuguese embassy or consulate, submit your passport and documents, and apply for the D1-type entry visa."
    },
    {
      title: "Schedule your SEF appointment in Portugal",
      description: "After you arrive, schedule and attend your SEF (AIMA) appointment to convert the entry visa into a residence permit, you'll provide biometrics and originals at the SEF office."
    },
    {
      title: "Receive your residence card",
      description: "Once approved, you'll receive a temporary residence permit (typically valid 2 years), renewable in subsequent periods so you can continue building your company and living in Portugal."
    }
  ]

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
              <div className="space-y-1">
                <div>
                  <p className="text-6xl font-semibold text-gray-900 tracking-wide mb-8 ">
                    What is the Portugal Startup Visa?
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mb-10">
                    The StartUP Visa is a continuous hosting programme for non-EU entrepreneurs who want to develop an innovative or scalable 
                    project in Portugal. It enables incubator hosting, a Portuguese entry visa and a residence permit under the StartUP Visa rules. <br />
                    <br />
                    The program aims to strengthen the innovation ecosystem and to affirm Portugal as a country open to
                    entrepreneurship and to all those who will use  knowledge and innovation to invest in the Portuguese economy and build up the national skilled workforce.
                  </p>
                </div>


                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
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
                  src="/Startup.png"
                  alt="Portugal D2 Visa Documentation"
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
                Benefits of the Portugal Startup Visa?
              </h2>
            </div>

            {/* Benefits Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Support from Incubators Card */}
              <div className={`bg-yellow-100 p-6 rounded-2xl hover-lift stagger-item h-80 flex flex-col ${benefitsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
                <div className="flex-1">
                  <div className="mb-4 scale-on-hover">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Support from Incubators
                  </h3>
                  <p className="text-gray-700">
                    Every StartUP Visa applicant partners with a certified Portuguese incubator. Your incubator assists with:
                  </p>
                </div>
              </div>

              {/* Tax Benefits Card */}
              <div className={`bg-yellow-100 p-6 rounded-2xl hover-lift stagger-item h-80 flex flex-col ${benefitsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                <div className="flex-1">
                  <div className="mb-1 scale-on-hover">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Tax Benefits (NHR Regime)
                  </h3>
                  <p className="text-gray-700">
                    StartUP Visa holders must spend at least 183 days/year in Portugal. This makes you a Portuguese tax resident but you may qualify for the <strong>Non-Habitual Resident (NHR) regime.</strong>
                  </p>
                </div>
              </div>

              {/* Pathway to Citizenship Card */}
              <div className={`bg-yellow-100 p-6 rounded-2xl hover-lift stagger-item h-80 flex flex-col ${benefitsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
                <div className="flex-1">
                  <div className="mb-2 scale-on-hover">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Pathway to Citizenship
                  </h3>
                  <p className="text-gray-700">
                    With a StartUP Visa you can legally enter, live, and work in Portugal. After 5 years of residence, you may become eligible for permanent residency or Portuguese citizenship, unlocking full EU rights.
                  </p>
                </div>
              </div>

              {/* Affordable Residency Option Card */}
              <div className={`bg-yellow-100 p-6 rounded-2xl hover-lift stagger-item h-80 flex flex-col ${benefitsVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                <div className="flex-1">
                  <div className="mb-1 scale-on-hover">
                    <svg className="w-10 h-10 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Affordable Residency Option
                  </h3>
                  <p className="text-gray-700">
                    Compared with other visa routes, the StartUP Visa offers a cost-effective path to residency. After incubator approval, you can apply for your residence permit — valid for 2 years, and extendable to family members.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Who can Apply Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            ref={whoCanApplyRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start fade-in-up ${whoCanApplyVisible ? 'visible' : ''}`}
          >
            {/* Left Column - Heading */}
            <div className={`fade-in-up ${whoCanApplyVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-gray-900 leading-tighter">
                Who can <br/>
                <span className="bg-yellow-200 text-gray-900 px-1 rounded transition-all duration-300 inline-block">Apply?</span>
              </h2>
            </div>

            {/* Right Column - Content */}
            <div className={`fade-in-up ${whoCanApplyVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="space-y-10">
                <div className={`flex items-start gap-3 fade-in-up ${whoCanApplyVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-200 text-black rounded-full flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                  <p className="text-lg text-gray-700">
                    Non-EU nationals without permanent residence in the Schengen Area.
                  </p>
                </div>

                <div className={`flex items-start gap-3 fade-in-up ${whoCanApplyVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-200 text-black rounded-full flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                  <p className="text-lg text-gray-700">
                    Entrepreneurs with an innovative, scalable project (an idea or an already running project abroad intending to set up in Portugal).
                  </p>
                </div>

                <div className={`flex items-start gap-3 fade-in-up ${whoCanApplyVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-200 text-black rounded-full flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                  <p className="text-lg text-gray-700">
                    Must obtain interest/acceptance from at least one certified Portuguese incubator to progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div ref={stepByStepRef} className={`mb-12 fade-in-up ${stepByStepVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
              Step by Step Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Follow our comprehensive guide to obtain your Portugal Startup Visa
            </p>
          </div>

          <div ref={stepByStepRef} className={`fade-in-up ${stepByStepVisible ? 'visible' : ''}`}>
            {/* First 6 steps in 2-column grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {steps.slice(0, 6).map((step, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-8"
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  {/* Number */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold text-yellow-600">{index + 1}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Last step centered */}
            <div className="flex justify-center">
              <div
                className="bg-gray-50 rounded-lg p-8 max-w-lg w-full"
                style={{ transitionDelay: `${6 * 0.1}s` }}
              >
                {/* Number */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-yellow-600">7</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {steps[6].title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {steps[6].description}
                </p>
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


                    {/* Message */}
                    <textarea
                      placeholder="Tell us about your business plans and immigration goals..."
                      rows="4"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-400 focus:bg-white resize-none transition-all"
                    ></textarea>

                   

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 transform hover:scale-100 shadow-lg" style={{backgroundColor: '#ef4444'}} 
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

export default StartupVisa