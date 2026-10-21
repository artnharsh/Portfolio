export default function TechnicalArchitecture() {
  const skillCategories = [
    {
      index: '01',
      title: 'CORE LANGUAGES',
      skills: 'TypeScript, JavaScript, Python, C, C++, Java, SQL, Bash',
      description: 'Strong foundation in typed backend systems, systems programming, memory safety, and scripting.',
    },
    {
      index: '02',
      title: 'FRAMEWORKS & RUNTIMES',
      skills: 'Node.js, Express.js, FastAPI, React.js, Next.js, Spring Boot, Socket.io, Tailwind CSS',
      description: 'High-throughput microservices, real-time WebSocket pipelines, and reactive client interfaces.',
    },
    {
      index: '03',
      title: 'CLOUD, DEVOPS & INFRA',
      skills: 'AWS (EC2), GCP, Docker, Kubernetes, Terraform, Ansible, Nginx, CI/CD, GitHub Actions',
      description: 'Infrastructure as Code, container orchestration, reverse proxy routing, and automated deployments.',
    },
    {
      index: '04',
      title: 'DATABASES & CACHING',
      skills: 'PostgreSQL, pgvector, Redis, MongoDB, MySQL',
      description: 'Compound query indexing, DB-layer aggregations, low-latency in-memory pub/sub, vector stores.',
    },
    {
      index: '05',
      title: 'AI / ML & RETRIEVAL',
      skills: 'Gemini API, OpenAI API, Groq, Llama, RAG, FAISS, sentence-transformers, NLP',
      description: 'Semantic vector similarity, contextual prompt engineering, and hybrid RAG pipelines.',
    },
    {
      index: '06',
      title: 'CS & ARCHITECTURAL PATTERNS',
      skills: 'DSA (300+ LeetCode), Microservices, REST APIs, WebSockets, JWT, OAuth 2.0, RBAC, AES-256',
      description: 'Stateless auth, zero-knowledge encryption, event-driven architecture, and OOP design.',
    },
  ]

  return (
    <section id="skills" className="py-28 px-6 md:px-12 border-t border-border bg-void transition-colors duration-500 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Section Header */}
          <div className="lg:col-span-4">
            <span className="font-mono text-accent text-xs tracking-widest block mb-4">
              02 // ARCHITECTURE
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-text-main leading-tight">
              Technical<br />Architecture
            </h2>
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6">
              I build systems that are secure by default, observable by design, and scalable by necessity.
              Every tool in my stack is chosen for measurable throughput and determinism.
            </p>

            <div className="p-4 bg-surface/40 border border-border rounded font-mono text-xs text-text-muted space-y-2">
              <div className="flex justify-between">
                <span>LEETCODE PROFILE</span>
                <span className="text-accent">300+ SOLVED</span>
              </div>
              <div className="flex justify-between">
                <span>SECURITY STANDARD</span>
                <span className="text-text-main">AES-256 / PBKDF2</span>
              </div>
              <div className="flex justify-between">
                <span>REALTIME MODEL</span>
                <span className="text-text-main">SOCKET.IO + REDIS</span>
              </div>
            </div>
          </div>

          {/* Grid Blocks */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skillCategories.map((cat) => (
              <div key={cat.index} className="group cursor-none">
                <div className="h-[1px] w-full bg-border mb-4 group-hover:bg-accent transition-colors duration-300"></div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-mono text-xs text-accent font-semibold tracking-wider">
                    {cat.index} // {cat.title}
                  </h4>
                </div>
                <p className="text-text-main text-base sm:text-lg font-medium mb-2 leading-snug">
                  {cat.skills}
                </p>
                <p className="text-text-muted text-xs leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
