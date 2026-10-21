import { useState, useEffect } from 'react'
import CustomCursor from './components/CustomCursor'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ProjectsHorizontal from './components/ProjectsHorizontal'
import TechnicalArchitecture from './components/TechnicalArchitecture'
import ExperienceTrajectory from './components/ExperienceTrajectory'
import Protocol from './components/Protocol'
import MarqueeStrip from './components/MarqueeStrip'
import Footer from './components/Footer'
import ResumeModal from './components/ResumeModal'
import './App.css'

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  // Intersection Observer for reveal animations on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    // Observe all reveal elements
    const elements = document.querySelectorAll('.reveal-text, .reveal-line, .reveal-blur')
    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [isLoaded])

  return (
    <div className="relative min-h-screen bg-void text-text-main selection:bg-accent selection:text-white">
      {/* Creative Code Brackets Cursor */}
      <CustomCursor />

      {/* Terminal Boot Sequence Loader */}
      <Loader onLoaded={() => setIsLoaded(true)} />

      {/* Background Matrix Grid */}
      <div className="fixed inset-0 bg-grid z-0 pointer-events-none" aria-hidden="true" />

      {/* Header Navigation */}
      <Navbar
        isLoaded={isLoaded}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main className="relative z-10">
        {/* Hero Section */}
        <Hero
          isLoaded={isLoaded}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Identity & Manifesto */}
        <About />

        {/* Selected Deployments Horizontal Scroll */}
        <ProjectsHorizontal />

        {/* Technical Architecture */}
        <TechnicalArchitecture />

        {/* Experience & Leadership Trajectory */}
        <ExperienceTrajectory />

        {/* Protocol Pipeline */}
        <Protocol />

        {/* Infinite Tech Marquee Strip */}
        <MarqueeStrip />
      </main>

      {/* Footer & Contact */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Full Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  )
}
