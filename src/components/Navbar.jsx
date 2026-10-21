import { useState, useEffect } from 'react'

export default function Navbar({ isLoaded, onOpenResume }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  const navLinks = [
    { name: 'IDENTITY', href: '#about' },
    { name: 'DEPLOYMENTS', href: '#work' },
    { name: 'ARCHITECTURE', href: '#skills' },
    { name: 'TRAJECTORY', href: '#trajectory' },
    { name: 'PROTOCOL', href: '#protocol' },
    { name: 'CONTACT', href: '#contact' },
  ]

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 top-0 left-0 px-6 md:px-12 py-5 flex justify-between items-center transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      } backdrop-blur-md bg-void/70 border-b border-border/40`}
    >
      {/* Brand */}
      <a
        href="#"
        onClick={(e) => handleLinkClick(e, '#top')}
        className="font-mono text-sm tracking-widest uppercase text-text-main flex items-center gap-2 group cursor-none"
      >
        <span className="w-2 h-2 bg-accent inline-block rounded-xs"></span>
        <span className="font-bold">Harshal Patil</span>
        <span className="text-accent font-mono">.sys</span>
      </a>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex items-center gap-8 font-mono text-xs text-text-muted">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="hover:text-text-main transition-colors duration-200 cursor-none relative py-1 hover:border-b hover:border-accent"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Right Actions: Status, Resume, Theme Toggle */}
      <div className="flex items-center gap-6 md:gap-8 font-mono text-xs text-text-muted">
        {/* Availability Badge */}
        <div className="hidden sm:flex items-center gap-2.5 text-right">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-text-main text-[11px] font-semibold tracking-wider">AVAILABLE</span>
            <span className="text-[10px] text-text-muted">FOR ROLES</span>
          </div>
        </div>

        {/* Resume Trigger */}
        <button
          onClick={onOpenResume}
          className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 border border-border hover:border-accent text-text-main text-xs font-mono rounded transition-colors duration-300 cursor-none bg-surface/40 hover:bg-surface"
        >
          <i className="fas fa-file-pdf text-accent text-xs"></i>
          <span>RESUME</span>
        </button>

        {/* Theme Toggle */}
        <div
          className="theme-switch select-none cursor-none"
          id="theme-toggle"
          onClick={toggleTheme}
          role="button"
          tabIndex={0}
          title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} mode`}
        >
          <span className={theme === 'dark' ? 'text-text-main font-semibold' : 'opacity-60'}>DARK</span>
          <div className="switch-track">
            <div className="switch-thumb"></div>
          </div>
          <span className={theme === 'light' ? 'text-text-main font-semibold' : 'opacity-60'}>LITE</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-text-main hover:text-accent transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-void/95 border-b border-border backdrop-blur-xl px-6 py-6 flex flex-col gap-4 font-mono text-sm shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-text-muted hover:text-accent py-2 border-b border-border/30 transition-colors"
            >
              // {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              if (onOpenResume) onOpenResume()
            }}
            className="flex items-center justify-center gap-2 py-2.5 mt-2 border border-accent text-accent rounded font-mono text-xs uppercase"
          >
            <i className="fas fa-file-pdf"></i>
            View Resume (PDF)
          </button>
        </div>
      )}
    </nav>
  )
}
