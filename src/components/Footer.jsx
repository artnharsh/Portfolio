import { useState } from 'react'

export default function Footer({ onOpenResume }) {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText('harshal.patil.0516@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <footer id="contact" className="py-28 md:py-36 px-6 md:px-12 bg-void transition-colors duration-500 text-center relative z-20 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <span className="font-mono text-xs text-accent tracking-widest uppercase block mb-6">
          // INITIATE CONTACT
        </span>

        {/* Big Let's Build Link */}
        <a
          href="mailto:harshal.patil.0516@gmail.com"
          onClick={handleCopyEmail}
          className="group inline-block cursor-none"
          title="Click to copy email address"
        >
          <div className="reveal-container">
            <h2 className="reveal-line text-5xl md:text-8xl font-semibold text-text-main tracking-tight group-hover:text-accent transition-colors duration-300">
              Let&apos;s Build.
            </h2>
          </div>
          <span className="font-mono text-xs text-accent mt-4 inline-block tracking-wider group-hover:underline">
            {copied ? '✓ COPIED EMAIL TO CLIPBOARD!' : 'harshal.patil.0516@gmail.com'}
          </span>
        </a>

        {/* Contact Quick Details */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 font-mono text-xs text-text-muted">
          <span className="flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-accent"></i>
            Pune, Maharashtra
          </span>
          <span>•</span>
          <a
            href="tel:+919699650972"
            className="hover:text-accent transition-colors cursor-none flex items-center gap-2"
          >
            <i className="fas fa-phone text-accent"></i>
            +91-9699650972
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-text-muted border-t border-border pt-8">
          <div className="text-center md:text-left mb-6 md:mb-0 leading-relaxed">
            &copy; {new Date().getFullYear()} HARSHAL PRAVIN PATIL<br />
            <span className="text-[11px] text-accent">SYSTEMS ARCHITECT &amp; FULL STACK ENGINEER</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <a
              href="https://github.com/artnharsh"
              target="_blank"
              rel="noreferrer"
              className="hover:text-text-main transition-colors cursor-none"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com/in/harshal-patil1604"
              target="_blank"
              rel="noreferrer"
              className="hover:text-text-main transition-colors cursor-none"
            >
              LINKEDIN
            </a>
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-text-main transition-colors cursor-none"
            >
              LEETCODE
            </a>
            <button
              onClick={onOpenResume}
              className="hover:text-accent transition-colors cursor-none font-mono text-xs uppercase"
            >
              RESUME.CV
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
