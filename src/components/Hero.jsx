import { useEffect, useRef } from 'react'

export default function Hero({ isLoaded, onOpenResume }) {
  const heroRef = useRef(null)

  useEffect(() => {
    if (!isLoaded) return
    const reveals = heroRef.current?.querySelectorAll('.reveal-line, .reveal-blur')
    reveals?.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('active')
      }, index * 180)
    })
  }, [isLoaded])

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 z-10 pt-20 pb-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Subhead Badge */}
        <div className="mb-6 flex items-center gap-4 reveal-container">
          <div className="reveal-blur flex items-center gap-4">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="font-mono text-xs text-accent tracking-widest uppercase font-semibold">
              Systems Architect & Full Stack Engineer
            </span>
            <span className="hidden sm:inline-block font-mono text-[11px] text-text-muted border-l border-border pl-4">
              Pune, India // B.Tech PCCOE
            </span>
          </div>
        </div>

        {/* Primary Kinetic Titles */}
        <div className="reveal-container overflow-hidden">
          <h1 className="reveal-line text-[11vw] md:text-[12vw] leading-[0.8] font-bold kerning-tight text-text-main mb-2 tracking-tighter select-none">
            ENGINEERED
          </h1>
        </div>
        <div className="reveal-container overflow-hidden">
          <h1 className="reveal-line text-[11vw] md:text-[12vw] leading-[0.8] font-bold kerning-tight text-text-main opacity-35 mb-2 tracking-tighter select-none">
            FOR SCALE
          </h1>
        </div>

        {/* Description & Value Proposition */}
        <div className="mt-12 md:mt-16 max-w-2xl reveal-container">
          <p className="font-sans text-lg md:text-xl text-text-muted leading-relaxed reveal-blur">
            Designing resilient, high-throughput distributed systems, real-time event pipelines, and AI retrieval architectures. 
            From diagnosing micro-benchmarks to zero-cost encrypted vaults, I build infrastructure engineered to thrive under load.
          </p>
        </div>

        {/* Quick Links & CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-4 reveal-container">
          <div className="reveal-blur flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="px-6 py-3 bg-accent text-white font-mono text-xs uppercase tracking-wider rounded-sm font-semibold hover:opacity-90 transition-all flex items-center gap-2 group cursor-none shadow-lg shadow-accent/20"
            >
              <span>Explore Deployments</span>
              <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
            </a>

            <button
              onClick={onOpenResume}
              className="px-6 py-3 border border-border hover:border-accent text-text-main font-mono text-xs uppercase tracking-wider rounded-sm transition-all flex items-center gap-2 bg-surface/50 hover:bg-surface cursor-none"
            >
              <i className="fas fa-file-pdf text-accent"></i>
              <span>View Resume</span>
            </button>

            <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-border">
              <a
                href="https://github.com/artnharsh"
                target="_blank"
                rel="noreferrer"
                title="GitHub: artnharsh"
                className="w-9 h-9 rounded border border-border flex items-center justify-center text-text-muted hover:text-text-main hover:border-accent transition-colors cursor-none"
              >
                <i className="fab fa-github text-sm"></i>
              </a>
              <a
                href="https://linkedin.com/in/harshal-patil1604"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn: harshal-patil1604"
                className="w-9 h-9 rounded border border-border flex items-center justify-center text-text-muted hover:text-text-main hover:border-accent transition-colors cursor-none"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a
                href="mailto:harshal.patil.0516@gmail.com"
                title="Email Harshal"
                className="w-9 h-9 rounded border border-border flex items-center justify-center text-text-muted hover:text-text-main hover:border-accent transition-colors cursor-none"
              >
                <i className="fas fa-envelope text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 md:bottom-12 right-6 md:right-12 hidden sm:flex items-center gap-4 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        id="scroll-indicator"
      >
        <span className="font-mono text-xs text-text-muted tracking-widest">SCROLL TO EXPLORE</span>
        <div className="w-[1px] h-12 bg-text-muted/40 relative overflow-hidden">
          <div className="w-full h-1/2 bg-accent animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
