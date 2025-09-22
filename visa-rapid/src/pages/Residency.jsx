import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Residency = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [benefitsRef, benefitsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [eligibilityRef, eligibilityVisible] = useScrollAnimation({ threshold: 0.1 })
  const [whoCanApplyRef, whoCanApplyVisible] = useScrollAnimation({ threshold: 0.1 })
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 })

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
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/Residency.webp"
                  alt="Portugal D2 Visa Documentation"
                  className="w-full h-160 object-cover "
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                <div>
                  
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-600 leading-tight mb-4">
                  Maximise your wealth, visa,  tax status, 
                  property & investments in Portugal
                  </h1>
                  <p className="text-4xl font-semibold text-gray-900 tracking-wide mb-6 mt-6">
                    What is the D7 Visa?
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">    
                   The Portugal D7 visa is also commonly known as the Portugal Passive Income visa, or in many cases, the Retirement Visa. 
                   This visa acts as a route to permanent residency in Portugal and is aimed at non-EU and non-EEA citizens who do 
                   not need to rely on an active, salaried income.
                   <br />

                   Portugal has so much to offer; a vibrant culture, exquisite cuisine, and diverse landscapes provide an enriching 
experience for investors, business people looking for improved financial security or retirees and individuals seeking a fulfilling overseas lifestyle.
<br />
Under the D7 Visa, holders also have the option of 'family reunification' where family members will be granted a residence visa that is valid for one year. 
After one year, they can apply for permanent residency.
                  </p>
                </div>

                
              </div>
              <a
                    href="https://calendly.com/nikita-visarapid/30min?back=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border px-8 py-3 rounded-lg font-medium transition-colors inline-block text-center"
                    style={{ borderColor: '#d1d5db', color: '#374151', backgroundColor: 'white', textDecoration: 'none' }}
                    onMouseEnter={(e) => e.target.style.borderColor = '#9ca3af'}
                    onMouseLeave={(e) => e.target.style.borderColor = '#d1d5db'}
                  >
                    Arrange a Call
                  </a>
            </div>
            
          </div>
          
        </div>
      </section>

      

      {/* Advantages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={eligibilityRef}
            className={`grid grid-cols-1 lg:grid-cols-5 gap-8 fade-in-up ${eligibilityVisible ? 'visible' : ''}`}
          >
            {/* Advantages Content Container - 60% (3/5) */}
            <div className={`lg:col-span-3 bg-green-100 p-8 rounded-2xl fade-in-up ${eligibilityVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
              <div className="mb-6">
                <h2 className="text-5xl font-medium font-serif text-gray-900 mb-8">
                  Discover the advantages of living in Portugal
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-3">
                    </div>
                     <p className="text-gray-700">
                      Visa-free travel to anywhere in the Schengen area.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-3">
                    </div>
                    <p className="text-gray-700">
                      Access to the Portuguese National Health Service.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-3">
                    </div>
                    <p className="text-gray-700">
                      Access to Portuguese National Education Services, professional training, schools, and vocational training.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-3">
                    </div>
                    <p className="text-gray-700">
                      Full protection via Portuguese law and legal system.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-3">
                    </div>
                    <p className="text-gray-700">
                      Exemptions or otherwise reduced tax rates should the applicant sign up for the NHR (Non-Habitual Residency) programme.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-3">
                    </div>
                    <p className="text-gray-700">
                      Being able to work in Portugal.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-3">
                    </div>
                    <p className="text-gray-700">
                      Being able to pass on Portuguese citizenship to any newborn children after a year of permanent residency.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-3">
                    </div>
                    <p className="text-gray-700">
                      The ability to obtain citizenship in Portugal and acquire a Portuguese passport after 5 years of permanent residency.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-black rounded-full mt-3">
                    </div>
                    <p className="text-gray-700 ">
                      A fast application process in comparison to other routes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Container - 40% (2/5) */}
            <div className={`lg:col-span-2 flex items-center justify-center fade-in-up ${eligibilityVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <div className="relative">
                <img
                  src="/residency2.webp"
                  alt="Portugal Residency Documentation"
                  className="w-full h-165 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step by Step Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-8xl mx-auto">
          <div ref={contentRef} className={`mb-12 fade-in-up ${contentVisible ? 'visible' : ''}`}>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
              <div className='pl-8'>
                <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
                  How to Apply for the Portugal <span className="bg-blue-300 text-gray-900 px-1 rounded transition-all duration-300 inline-block">D7 Visa?</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl">
                  Follow our comprehensive guide to obtain your Portugal D7 Visa
                </p>
              </div>
            </div>
          </div>

          <div ref={contentRef} className={`fade-in-up ${contentVisible ? 'visible' : ''}`}>
            {/* All 6 steps in 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div
                className="bg-gray-50 rounded-lg p-8"
                style={{ transitionDelay: '0.1s' }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Prepare your documents
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Check that you meet the eligibility criteria (such as minimum passive income). Gather supporting documents: passport, photos, proof of income, proof of accommodation, health insurance, criminal record certificate, and bank statements.
                </p>
              </div>

              {/* Step 2 */}
              <div
                className="bg-gray-50 rounded-lg p-8"
                style={{ transitionDelay: '0.2s' }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">2</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Submit your application
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  File your completed application form and documents at your local Portuguese consulate/embassy. Pay the required fees. In some cases, the embassy may keep your passport while the application is processed.
                </p>
              </div>

              {/* Step 3 */}
              <div
                className="bg-gray-50 rounded-lg p-8"
                style={{ transitionDelay: '0.3s' }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">3</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Receive your visa
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  If approved, your visa (valid for 120 days) will be stamped in your passport.
                </p>
              </div>

              {/* Step 4 */}
              <div
                className="bg-gray-50 rounded-lg p-8"
                style={{ transitionDelay: '0.4s' }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">4</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Travel to Portugal & book SEF appointment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Enter Portugal within the 120-day visa period. You must then attend an appointment with SEF (AIMA) to convert your D7 visa into a residence permit.
                </p>
              </div>

              {/* Step 5 */}
              <div
                className="bg-gray-50 rounded-lg p-8"
                style={{ transitionDelay: '0.5s' }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">5</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  SEF appointment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  At SEF, bring all supporting documents: proof of funds, proof of accommodation, health insurance, NIF, and your visa. You'll also fill out forms for residency and a criminal record check. The appointment usually takes around 20 minutes.
                </p>
              </div>

              {/* Step 6 */}
              <div
                className="bg-gray-50 rounded-lg p-8"
                style={{ transitionDelay: '0.6s' }}
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">6</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Obtain your residence permit
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Once approved, you'll receive your residence card within about 2-3 weeks. The first permit is typically valid for 2 years, with options for renewal and eventual permanent residency or citizenship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Residency