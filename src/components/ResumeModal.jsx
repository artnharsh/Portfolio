export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
      <div className="bg-surface border border-accent/40 rounded-xs max-w-4xl w-full p-6 sm:p-10 font-sans shadow-2xl relative my-auto max-h-[92vh] overflow-y-auto">
        {/* Modal Controls */}
        <div className="flex items-center justify-between pb-6 border-b border-border mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse"></span>
            <span className="font-mono text-xs text-accent uppercase tracking-wider font-semibold">
              Curriculum Vitae // Harshal Pravin Patil
            </span>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 border border-border hover:border-accent text-text-main rounded flex items-center gap-1.5 transition-colors cursor-none bg-void/50"
            >
              <i className="fas fa-print text-accent"></i>
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 border border-border hover:border-rose-500 text-text-muted hover:text-text-main rounded transition-colors cursor-none"
            >
              [CLOSE]
            </button>
          </div>
        </div>

        {/* Resume Content Paper */}
        <div className="space-y-8 text-text-main">
          {/* Header */}
          <div className="border-b border-border/80 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main">
                Harshal Pravin Patil
              </h1>
              <p className="text-accent font-mono text-xs tracking-wider uppercase mt-1">
                Systems Architect &amp; Full Stack Engineer
              </p>
              <p className="text-text-muted text-xs font-mono mt-1">
                Pimpri Chinchwad, Pune, Maharashtra
              </p>
            </div>

            <div className="font-mono text-xs text-text-muted text-right space-y-1">
              <div>
                <a href="mailto:harshal.patil.0516@gmail.com" className="hover:text-accent transition-colors">
                  harshal.patil.0516@gmail.com
                </a>
              </div>
              <div>
                <a href="tel:+919699650972" className="hover:text-accent transition-colors">
                  +91-9699650972
                </a>
              </div>
              <div className="flex gap-4 justify-end pt-1">
                <a
                  href="https://linkedin.com/in/harshal-patil1604"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-main hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
                <span>•</span>
                <a
                  href="https://github.com/artnharsh"
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-main hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent border-b border-border pb-1 mb-3">
              EDUCATION
            </h3>
            <div className="flex justify-between items-baseline">
              <div>
                <div className="font-semibold text-text-main text-sm sm:text-base">
                  Pimpri Chinchwad College of Engineering, Pune
                </div>
                <div className="text-text-muted text-xs sm:text-sm">
                  Bachelor of Technology in Computer Engineering
                </div>
              </div>
              <div className="font-mono text-xs text-text-muted">
                Aug 2023 – Present
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent border-b border-border pb-1 mb-3">
              TECHNICAL SKILLS
            </h3>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div>
                <strong className="text-text-main font-mono text-xs">Languages: </strong>
                <span className="text-text-muted">C, C++, Java, Python, JavaScript, TypeScript, SQL, Bash, HTML5, CSS3</span>
              </div>
              <div>
                <strong className="text-text-main font-mono text-xs">Frameworks: </strong>
                <span className="text-text-muted">Spring Framework, Spring Boot, Maven, React.js, Next.js, Node.js, Express.js, FastAPI, Socket.io, Tailwind CSS</span>
              </div>
              <div>
                <strong className="text-text-main font-mono text-xs">AI / ML: </strong>
                <span className="text-text-muted">OpenAI API, LLMs (Groq, Llama), sentence-transformers, FAISS, NLP, RAG, pgvector</span>
              </div>
              <div>
                <strong className="text-text-main font-mono text-xs">Databases: </strong>
                <span className="text-text-muted">MongoDB, MySQL, Redis, PostgreSQL</span>
              </div>
              <div>
                <strong className="text-text-main font-mono text-xs">Cloud &amp; DevOps: </strong>
                <span className="text-text-muted">AWS (EC2), GCP, Vercel, Railway, Render, Terraform, Ansible, Docker, Kubernetes, Nginx, CI/CD, GitHub Actions</span>
              </div>
              <div>
                <strong className="text-text-main font-mono text-xs">CS Fundamentals: </strong>
                <span className="text-text-muted">Data Structures &amp; Algorithms, OOP, Microservices, REST APIs, WebSockets, JWT, OAuth, RBAC, Agile, DevOps</span>
              </div>
              <div>
                <strong className="text-text-main font-mono text-xs">DSA Track Record: </strong>
                <span className="text-accent font-mono">Solved 300+ problems on LeetCode</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent border-b border-border pb-1 mb-3">
              PROFESSIONAL EXPERIENCE
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-text-main text-sm sm:text-base">
                    Full Stack Intern — <span className="font-normal text-text-muted">Pimpri Chinchwad College of Engineering</span>
                  </div>
                  <div className="font-mono text-xs text-text-muted">
                    Dec 2025 – Jan 2026
                  </div>
                </div>
                <div className="font-mono text-[11px] text-accent mb-2">Pune, Maharashtra</div>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-text-muted">
                  <li>Engineered UniSphere, a MERN platform with RBAC, smart QR attendance, and automated workflows for 100+ users.</li>
                  <li>Partnered with cross-functional team to architect secure REST APIs and real-time analytics pipeline following OOP design principles.</li>
                  <li>Participated in code reviews and Agile sprint ceremonies, optimizing UI components and reducing feature turnaround by 30%.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent border-b border-border pb-1 mb-3">
              SELECTED PROJECTS
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-text-main text-sm sm:text-base">
                    BrainBrush <span className="text-xs text-accent font-mono">| TypeScript, Node.js, Redis, MongoDB, Docker, AWS EC2, Terraform, Ansible</span>
                  </div>
                  <div className="font-mono text-xs text-text-muted">Jan 2026</div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-text-muted mt-1.5">
                  <li>Diagnosed high-latency MongoDB queries and optimized compound indexing, reducing p95 latency by 83% (3,500ms to 500ms) under 200 users.</li>
                  <li>Evaluated query patterns and replaced populate() joins with DB-layer aggregation, improving throughput by 110% (48 to 100+ req/s).</li>
                  <li>Architected event-driven WebSocket pipeline (Socket.io + Redis), achieving sub-50ms broadcast latency and sustaining 1,174+ events/sec with 100% success rate under multi-user load testing using Artillery.</li>
                  <li>Secured APIs and WebSocket connections with Google OAuth 2.0 and JWT; containerized with Docker and configured Nginx for production deployment.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-text-main text-sm sm:text-base">
                    DayCache – AI-Powered Journaling Platform <span className="text-xs text-accent font-mono">| Python, FastAPI, PostgreSQL, pgvector, Gemini API, React</span>
                  </div>
                  <div className="font-mono text-xs text-text-muted">Jul 2026</div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-text-muted mt-1.5">
                  <li>Built an AI-powered journaling platform that lets users conversationally query years of personal entries using Retrieval-Augmented Generation (RAG), with responses grounded exclusively in the user’s journal history.</li>
                  <li>Implemented the Recall feature with vector embeddings and cosine similarity search over pgvector, streaming LLM responses while persisting multi-turn conversation state.</li>
                  <li>Designed a hybrid retrieval pipeline combining PostgreSQL full-text search with semantic search, improving retrieval of vaguely worded queries without needing a separate vector database.</li>
                  <li>Built the Reflect feature to guide users through contextual conversations and generate editable first-person journal drafts through LLM prompting.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-text-main text-sm sm:text-base">
                    Envault <span className="text-xs text-accent font-mono">| React, FastAPI, Python, GitHub API, Docker</span>
                  </div>
                  <div className="font-mono text-xs text-text-muted">Jul 2026</div>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-text-muted mt-1.5">
                  <li>Engineered a serverless encrypted .env vault using GitHub as a zero-cost storage backend, eliminating database dependency while maintaining full CRUD and version history.</li>
                  <li>Implemented AES-256 encryption (Fernet) with PBKDF2-SHA256 key derivation (100,000 iterations + random 16-byte salt), ensuring no plaintext secrets are ever stored.</li>
                  <li>Designed dual-access interface (React web app + Bash CLI) over a FastAPI backend, enabling secure .env upload/download from any device or CI/CD pipeline.</li>
                  <li>Architected stateless JWT auth with HttpOnly cookies and a two-factor passphrase model, ensuring stolen session tokens cannot decrypt any vault file.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Leadership & Awards */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent border-b border-border pb-1 mb-3">
              LEADERSHIP &amp; EXTRACURRICULAR
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <div className="font-semibold text-text-main text-sm sm:text-base">
                    PCCOE ACM Student Chapter — Technical Lead
                  </div>
                  <div className="font-mono text-xs text-text-muted">Aug 2025 – Present</div>
                </div>
                <p className="text-xs text-text-muted mt-1">
                  Spearheaded 5+ workshops and 2 hackathons, mentoring 50+ students in DSA and full-stack development. Orchestrated Agile workflows across 3 projects, managing 6 developers and reducing pre-deployment bugs by 25%.
                </p>
              </div>

              <div className="text-xs text-text-muted space-y-1">
                <div>• <strong className="text-text-main">Winner – ML Mania</strong> (PCCOE)</div>
                <div>• <strong className="text-text-main">2nd Runner-Up – IEEE Ideathon</strong> (PICT)</div>
                <div>• <strong className="text-text-main">Top 30 (Rank 26) – Smart India Hackathon</strong></div>
                <div>• Completed Google Arcade Cohort 2 (Legend Tier); participated in 6+ hackathons including Google Solution Challenge.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer in modal */}
        <div className="mt-8 pt-6 border-t border-border flex justify-between items-center font-mono text-xs text-text-muted">
          <span>Harshal Pravin Patil // Portfolio CV</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-accent text-white rounded cursor-none font-semibold hover:opacity-90"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  )
}
