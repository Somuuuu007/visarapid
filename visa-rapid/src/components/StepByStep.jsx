import React, { useState } from 'react'

const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-content {
    animation: fadeInUp 0.5s ease-out forwards;
  }
`

const StepByStep = () => {
  const [selectedStep, setSelectedStep] = useState(0)

  const handleNext = () => {
    if (selectedStep < steps.length - 1) {
      setSelectedStep(selectedStep + 1)
    } else {
      // Scroll to Why Choose Us section
      const whyChooseUsSection = document.getElementById('why-choose-us')
      if (whyChooseUsSection) {
        whyChooseUsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      }
    }
  }

  const steps = [
    {
      number: 1,
      title: "Eligibility & Case Review",
      duration: "1-2 weeks",
      content: {
        title: "Eligibility & Case Review",
        description: "Lawyer-led consultation to identify the best visa type (D7, D2, Golden, Work, Family).",
        bulletPoints: [
          "Preliminary due diligence & personal document checklist."
        ]
        },
    },
    {
      number: 2,
      title: "Document Preparation",
      duration: "2-4 weeks",
      content: {
        title: "Document Preparation",
        description: "NIF (tax ID) & NISS (social security number) setup.",
        bulletPoints: [
          "Bank account opening support.",
          "Document drafting, notarisation, translations & apostille."
        ]
      }
    },
    {
      number: 3,
      title: "Application Submission",
      duration: "1-2 weeks",
      content: {
        title: "Application Submission",
        description: "Filing with SEF (Portuguese Immigration) or Embassy.",
        bulletPoints: [
          "Appointment scheduling & biometrics assistance.",
          "Full legal representation to avoid errors & delays."
        ]
      }
    },
    {
      number: 4,
      title: "Approval & Residence Permit",
      duration: "3-6 months",
      content: {
        title: "Approval & Residence Permit",
        description: "Residence card issued (2 years, renewable).",
        bulletPoints: [
          "Family reunification included.",
          "Guidance on rights (work, study, business setup)."
        ]
      }
    },
    {
      number: 5,
      title: "Post-Landing & Long-Term Support",
      duration: "Ongoing",
      content: {
        title: "Post-Landing & Long-Term Support",
        description: "Airport pickup & housing support (optional).",
        bulletPoints: [
          "NHR tax regime onboarding & accountant referrals.",
          "Renewals, appeals & future PR/Citizenship (after 5 years).",
          "Support with A2 Portuguese language test for citizenship."
        ]
      }
    }
  ]

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            We go through each stage with you
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            Portugal Visa Process - Step by Step
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Steps list */}
          <div className="bg-white p-6 h-fit">
            {steps.map((step, index) => (
              <div key={index}>
                <div
                  className={`flex items-center py-1 cursor-pointer transition-all duration-200 ${
                    selectedStep === index ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setSelectedStep(index)}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-base font-bold mr-5 ${
                    selectedStep === index 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-lg ${
                      selectedStep === index ? 'text-blue-600' : 'text-gray-900'
                    }`}>{step.title}</h3>
                  </div>
                  <svg 
                    className={`w-5 h-5 transition-transform ${
                      selectedStep === index ? 'rotate-90 text-blue-600' : 'text-gray-400'
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                {index < steps.length - 1 && (
                  <hr className="border-gray-200 my-3" />
                )}
              </div>
            ))}
          </div>

          {/* Right side - Selected step details */}
          <div className="bg-white p-8 h-fit" key={selectedStep}>
            <div className="animate-content">
              <div className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {steps[selectedStep].duration}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {steps[selectedStep].content.title}
              </h3>
            
              <div className="space-y-5">
                <p className="text-gray-600 text-base leading-relaxed">
                  {steps[selectedStep].content.description}
                </p>
                
                {steps[selectedStep].content.bulletPoints && (
                  <div className="space-y-3">
                    {steps[selectedStep].content.bulletPoints.map((point, index) => (
                      <p key={index} className="text-gray-600 text-base leading-relaxed">
                        {point}
                      </p>
                    ))}
                  </div>
                )}
                
                <div className="mt-8">
                  <button 
                    onClick={handleNext}
                    className="w-full py-4 px-6 font-semibold text-base transition-colors duration-200 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {selectedStep === steps.length - 1 ? 'Why Choose Us' : 'Next'}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default StepByStep