import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: '001',
    subtitle: '001 // DISTRIBUTED SYSTEMS & REALTIME',
    title: 'BrainBrush',
    date: 'Jan 2026',
    tagline: 'High-Throughput Collaborative Canvas & Realtime Pipeline',
    description:
      'Diagnosed high-latency MongoDB queries & compound indexing, reducing p95 latency by 83% (3,500ms to 500ms). Architected an event-driven WebSocket pipeline (Socket.io + Redis) achieving sub-50ms broadcast latency and sustaining 1,174+ events/sec under Artillery load tests.',
    metrics: [
      { label: 'LATENCY', value: '< 50ms (p95 -83%)' },
      { label: 'THROUGHPUT', value: '1,174+ ev/s' },
      { label: 'QUERY GAIN', value: '+110% throughput' },
      { label: 'STACK', value: 'TS, Redis, Docker, AWS' },
    ],
    techList: ['TypeScript', 'Node.js', 'Redis', 'MongoDB', 'Docker', 'AWS EC2', 'Terraform', 'Ansible', 'Socket.io', 'Artillery'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    links: {
      live: '#',
      github: 'https://github.com/artnharsh',
    },
  },
  {
    id: '002',
    subtitle: '002 // AI & SEMANTIC RETRIEVAL',
    title: 'DayCache',
    date: 'Jul 2026',
    tagline: 'AI-Powered Journaling with Hybrid RAG & pgvector',
    description:
      'Retrieval-Augmented Generation (RAG) platform allowing conversational queries over years of personal journal archives. Designed a hybrid retrieval pipeline combining PostgreSQL full-text search with semantic cosine similarity search over pgvector, streaming real-time LLM responses.',
    metrics: [
      { label: 'AI ENGINE', value: 'Gemini RAG + pgvector' },
      { label: 'SEARCH', value: 'Hybrid FTS + Semantic' },
      { label: 'LATENCY', value: 'Streaming Token LLM' },
      { label: 'STACK', value: 'Python, FastAPI, React' },
    ],
    techList: ['Python', 'FastAPI', 'PostgreSQL', 'pgvector', 'Gemini API', 'React', 'RAG', 'Vector Embeddings'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
    links: {
      github: 'https://github.com/artnharsh',
    },
  },
  {
    id: '003',
    subtitle: '003 // CYBERSECURITY & ZERO-KNOWLEDGE CLOUD',
    title: 'Envault',
    date: 'Jul 2026',
    tagline: 'Serverless Zero-Knowledge Encrypted .env Secrets Vault',
    description:
      'Engineered an encrypted environment variable vault leveraging GitHub as a zero-cost storage backend. Implemented Fernet AES-256 encryption with PBKDF2-SHA256 key derivation (100k iterations + 16-byte salt), dual-access interface (React web + Bash CLI), and stateless JWT auth with HttpOnly cookies.',
    metrics: [
      { label: 'CIPHER', value: 'AES-256 + PBKDF2' },
      { label: 'INFRA', value: 'Zero-Cost Serverless' },
      { label: 'SECURITY', value: 'Stateless 2FA Auth' },
      { label: 'STACK', value: 'React, FastAPI, Docker' },
    ],
    techList: ['React', 'FastAPI', 'Python', 'GitHub API', 'Docker', 'AES-256', 'PBKDF2', 'Bash CLI'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop',
    links: {
      github: 'https://github.com/artnharsh',
    },
  },
]

export default function ProjectsHorizontal() {
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const [activeProjectModal, setActiveProjectModal] = useState(null)
  const [progressPercent, setProgressPercent] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    let animationFrameId

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const totalScrollable = container.offsetHeight - window.innerHeight
      if (totalScrollable <= 0) return

      // Progress from 0 (when top touches viewport) to 1 (when bottom exits viewport)
      const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable))
      const maxTrackScroll = track.scrollWidth - window.innerWidth
      const translateX = progress * maxTrackScroll

      track.style.transform = `translate3d(-${translateX}px, 0, 0)`
      setProgressPercent(Math.round(progress * 100))
    }

    const onScrollThrottled = () => {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', onScrollThrottled, { passive: true })
    window.addEventListener('resize', onScrollThrottled)
    handleScroll()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('scroll', onScrollThrottled)
      window.removeEventListener('resize', onScrollThrottled)
    }
  }, [])

  return (
    <>
      <section ref={containerRef} className="horizontal-scroll-container z-10" id="work">
        <div className="sticky-wrapper">
          {/* Subtle Progress Bar pinned to top of sticky section */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-border/40 z-20 pointer-events-none">
            <div
              className="h-full bg-accent transition-all duration-75"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div ref={trackRef} className="horizontal-track">
            {/* Title Card */}
            <div className="flex flex-col justify-center pb-8 md:pb-24 min-w-[75vw] sm:min-w-[45vw] md:min-w-[22vw] px-4 md:px-8 flex-shrink-0">
              <span className="font-mono text-accent text-xs tracking-widest uppercase mb-2">
                DEPLOYMENT SHOWCASE
              </span>
              <h2 className="text-3xl md:text-6xl font-semibold text-text-main mb-3 leading-tight">
                Selected<br />Deployments
              </h2>
              <span className="font-mono text-xs text-text-muted">
                /// CASE_STUDIES [001-003]
              </span>
              <p className="text-text-muted mt-4 md:mt-6 max-w-xs text-xs md:text-sm leading-relaxed">
                Scroll to navigate through production-grade systems evaluated under rigorous scale.
              </p>
              <div className="flex items-center gap-3 mt-4 text-text-main">
                <i className="fas fa-arrow-right text-lg text-accent animate-pulse"></i>
                <span className="font-mono text-[11px] text-text-muted uppercase">Horizontal Stream</span>
              </div>
            </div>

            {/* Project Cards */}
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="project-card-h group hover:border-accent/60 transition-colors duration-500 rounded-xs"
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-10 lg:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-border bg-surface transition-colors duration-500 overflow-y-auto">
                  <div>
                    <div className="flex items-center justify-between mb-2 md:mb-3">
                      <span className="font-mono text-accent text-[11px] md:text-xs tracking-wider">
                        {proj.subtitle}
                      </span>
                      <span className="font-mono text-[10px] md:text-xs text-text-muted px-2 py-0.5 border border-border/60 rounded">
                        {proj.date}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-1 md:mb-2 text-text-main">
                      {proj.title}
                    </h3>

                    <p className="font-mono text-[11px] md:text-xs text-accent/90 mb-2 md:mb-3 line-clamp-1">
                      {proj.tagline}
                    </p>

                    <p className="text-text-muted text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-3 sm:line-clamp-none">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-2 font-mono text-xs text-text-muted pt-2.5 border-t border-border">
                      {proj.metrics.map((m, idx) => (
                        <div key={idx} className="bg-void/40 p-1.5 sm:p-2.5 rounded border border-border/40">
                          <span className="block text-text-muted text-[9px] sm:text-[10px] tracking-wider mb-0.5">
                            {m.label}
                          </span>
                          <span className="block text-text-main font-semibold text-[10px] sm:text-xs truncate">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-4 mt-3 pt-2.5 border-t border-border/50">
                      <button
                        onClick={() => setActiveProjectModal(proj)}
                        className="font-mono text-[11px] md:text-xs text-accent hover:underline flex items-center gap-1.5"
                      >
                        <i className="fas fa-terminal text-xs"></i>
                        <span>Inspect Specs</span>
                      </button>

                      {proj.links.github && (
                        <a
                          href={proj.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-[11px] md:text-xs text-text-muted hover:text-text-main flex items-center gap-1.5 transition-colors"
                        >
                          <i className="fab fa-github text-xs"></i>
                          <span>GitHub</span>
                        </a>
                      )}

                      {proj.links.live && proj.links.live !== '#' && (
                        <a
                          href={proj.links.live}
                          target="_blank"
                          rel="noreferrer"
                          className="font-mono text-[11px] md:text-xs text-accent hover:underline flex items-center gap-1.5 transition-colors"
                        >
                          <i className="fas fa-external-link-alt text-xs"></i>
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Visual / Image Side */}
                <div className="w-full md:w-1/2 h-36 sm:h-44 md:h-auto relative bg-void/90 overflow-hidden flex items-center justify-center flex-shrink-0">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover img-filter opacity-70 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface via-transparent to-transparent opacity-80"></div>
                  
                  {/* Overlay Terminal Badge */}
                  <div className="absolute bottom-2 right-2 md:bottom-6 md:right-6 font-mono text-[9px] md:text-[11px] text-text-muted bg-void/80 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 border border-border/60 rounded">
                    <span className="text-accent">&gt;</span> STATUS: OPERATIONAL
                  </div>
                </div>
              </div>
            ))}

            {/* End Spacer */}
            <div className="w-[15vw] md:w-[10vw] flex-shrink-0 flex items-center justify-center">
              <div className="font-mono text-xs text-text-muted rotate-90 tracking-widest">
                /// END_OF_STREAM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for In-Depth Architectural Inspection */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6">
          <div className="bg-surface border border-accent/40 rounded max-w-2xl w-full p-6 sm:p-8 font-sans shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-5 right-5 text-text-muted hover:text-text-main font-mono text-sm px-2 py-1 border border-border rounded"
            >
              [ESC / CLOSE]
            </button>

            <span className="font-mono text-xs text-accent tracking-widest block mb-2">
              {activeProjectModal.subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-main mb-2">
              {activeProjectModal.title}
            </h3>
            <p className="font-mono text-xs text-text-muted mb-4 sm:mb-6">
              {activeProjectModal.tagline}
            </p>

            <div className="space-y-4 text-sm text-text-muted mb-6 leading-relaxed">
              <p>{activeProjectModal.description}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-mono text-xs text-text-main uppercase mb-3 tracking-wider">
                Key Performance Metrics
              </h4>
              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                {activeProjectModal.metrics.map((m, i) => (
                  <div key={i} className="p-3 bg-void border border-border rounded">
                    <div className="text-[10px] text-text-muted">{m.label}</div>
                    <div className="text-text-main font-bold mt-0.5">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs text-text-main uppercase mb-3 tracking-wider">
                Technology Stack & Components
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.techList.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2.5 py-1 bg-void border border-border/80 text-text-muted rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border flex justify-end gap-4 font-mono text-xs">
              {activeProjectModal.links.github && (
                <a
                  href={activeProjectModal.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-border hover:border-accent text-text-main rounded flex items-center gap-2"
                >
                  <i className="fab fa-github"></i>
                  <span>Inspect Code</span>
                </a>
              )}
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-4 py-2 bg-accent text-white rounded font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
