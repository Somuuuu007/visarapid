import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ForIndividuals from './components/ForIndividuals'
import ForBusiness from './components/ForBusiness'
import ResidencePermit from './components/ResidencePermit'
import StepByStep from './components/StepByStep'
import WhyChooseUs from './components/WhyChooseUs'
import ScheduleMeeting from './components/ScheduleMeeting'
import Footer from './components/Footer'
import ContactPage from './components/ContactPage'

// Home page component
const HomePage = () => (
  <>
    <HeroSection />
    <ForIndividuals />
    <ForBusiness />
    <ResidencePermit />
    <StepByStep />
    <WhyChooseUs />
    <ScheduleMeeting />
  </>
)

const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full bg-white">
        <Navbar />
        <main className="w-full">
          <Routes>
            <Route path="/" element={
              <>
                <HomePage />
                <Footer />
              </>
            } />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App