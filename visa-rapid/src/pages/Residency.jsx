import React, { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const Residency = () => {
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 })
  const [benefitsRef, benefitsVisible] = useScrollAnimation({ threshold: 0.1 })
  const [eligibilityRef, eligibilityVisible] = useScrollAnimation({ threshold: 0.1 })
  const [whoCanApplyRef, whoCanApplyVisible] = useScrollAnimation({ threshold: 0.1 })
  const [stepByStepRef, stepByStepVisible] = useScrollAnimation({ threshold: 0.1 })
  const [contactRef, contactVisible] = useScrollAnimation({ threshold: 0.1 })
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 })
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 })
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
      title: "Check Eligibility Requirements",
      description: "Verify you meet the minimum requirements for Portuguese residency including financial stability, clean criminal record, and health insurance."
    },
    {
      title: "Gather Required Documents",
      description: "Collect all necessary documents including passport, birth certificate, criminal background check, financial statements, and health insurance proof."
    },
    {
      title: "Submit Initial Application",
      description: "File your residency application at the Portuguese embassy or consulate in your home country or at SEF (AIMA) if already in Portugal."
    },
    {
      title: "Attend Biometric Appointment",
      description: "Schedule and attend your biometric data collection appointment at the designated immigration office."
    },
    {
      title: "Wait for Processing",
      description: "Allow 3-6 months for application processing while maintaining legal status if already in Portugal."
    },
    {
      title: "Receive Decision",
      description: "Receive notification of your application decision. If approved, you'll be issued a residence permit card."
    },
    {
      title: "Collect Residence Card",
      description: "Pick up your physical residence permit card which serves as proof of your legal residency status in Portugal."
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
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/Residency.png"
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
                  Maximise your wealth, visa,  tax status, 
                  property & investments in Portugal
                  </h1>
                  <p className="text-3xl font-bold text-gray-900 tracking-wide mb-6 mt-6">
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

      

      {/* Advantages Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            ref={eligibilityRef}
            className={`grid grid-cols-1 lg:grid-cols-5 gap-8 fade-in-up ${eligibilityVisible ? 'visible' : ''}`}
          >
            {/* Advantages Content Container - 60% (3/5) */}
            <div className={`lg:col-span-3 bg-green-100 p-8 rounded-2xl hover-lift fade-in-up ${eligibilityVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
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
                  src="/residency2.png"
                  alt="Portugal Residency Documentation"
                  className="w-full h-165 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left side - Content */}
            <div ref={contentRef} className={`bg-blue-100 slide-in-left ${contentVisible ? 'visible' : ''}`}>

            {/* Content with padding */}
            <div className="space-y-8 pr-12 lg:pr-18 pl-16 pb-16 pt-10">
              {/* Warning Icon and Alert */}
              <div className="flex items-start gap-3">
                <h2 className="text-5xl lg:text-5xl font-light text-gray-900 leading-tight font-serif">
                How to Apply for the Portugal <span className="bg-blue-300 text-gray-900 px-1 rounded transition-all duration-300 inline-block">D7 Visa?</span>
                </h2>
              </div>


              {/* Step-by-step process */}
              <div className="space-y-6">
                {/* Step 1 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">1. Prepare your documents</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Check that you meet the eligibility criteria (such as minimum passive income). Gather supporting documents: passport, photos, proof of income, proof of accommodation, health insurance, criminal record certificate, and bank statements. You'll also need a Portuguese NIF (tax number) and a local bank account, which can be set up from abroad.
                  </p>
                </div>

                {/* Step 2 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">2. Submit your application</h3>
                  <p className="text-gray-700 leading-relaxed">
                    File your completed application form and documents at your local Portuguese consulate/embassy. Pay the required fees. In some cases, the embassy may keep your passport while the application is processed.
                  </p>
                </div>

                {/* Step 3 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">3. Receive your visa</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If approved, your visa (valid for 120 days) will be stamped in your passport.
                  </p>
                </div>

                {/* Step 4 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">4. Travel to Portugal & book SEF appointment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Enter Portugal within the 120-day visa period. You must then attend an appointment with SEF (AIMA) to convert your D7 visa into a residence permit.
                  </p>
                </div>

                {/* Step 5 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">5. SEF appointment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    At SEF, bring all supporting documents: proof of funds, proof of accommodation, health insurance, NIF, and your visa. You'll also fill out forms for residency and a criminal record check. The appointment usually takes around 20 minutes.
                  </p>
                </div>

                {/* Step 6 */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">6. Obtain your residence permit</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Once approved, you'll receive your residence card within about 2-3 weeks. The first permit is typically valid for 2 years, with options for renewal and eventual permanent residency or citizenship.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => window.open('https://calendly.com/someshlingwal1', '_blank', 'noopener,noreferrer')}
                className="text-white px-8 py-4 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center gap-2 cursor-pointer"
                style={{backgroundColor: 'rgb(59, 130, 246)'}}
              >
                SCHEDULE A MEETING
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div ref={imageRef} className={`relative slide-in-right ${imageVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <img 
              src="/image4.png" 
              alt="Business meeting"
              className="w-full h-130 lg:h-[900px] object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Residency