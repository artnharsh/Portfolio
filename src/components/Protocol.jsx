export default function Protocol() {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Architectural Blueprint',
      desc: 'Mapping domain boundaries, defining strict API contracts (OpenAPI/gRPC/WebSockets), evaluating data-access patterns, and selecting optimal storage engines (pgvector, Redis, MongoDB). Architecture is decisions made early.',
      status: 'STATUS: MAPPED',
    },
    {
      num: '02',
      title: 'Implementation & Algorithmic Rigor',
      desc: 'Writing clean, type-safe, and thoroughly tested code. Implementing CI/CD pipelines with automated tests, security scans, and cryptographic integrity checks (AES-256 / PBKDF2). We ship engineering confidence, not guesswork.',
      status: 'STATUS: COMPILING',
    },
    {
      num: '03',
      title: 'Benchmarking, Scale & Observability',
      desc: 'Stress testing with load generators (Artillery), profiling database indexes to squash query latency by >80%, containerizing with Docker, and provisioning resilient cloud infrastructure via Terraform and Ansible.',
      status: 'STATUS: BENCHMARKED',
    },
  ]

  return (
    <section id="protocol" className="py-32 px-6 md:px-12 bg-void relative z-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-accent text-xs tracking-widest block mb-4 reveal-blur">
            04 // PROTOCOL
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold text-text-main leading-tight reveal-line">
            The Execution<br />{' '}
            <span className="text-text-muted opacity-50">Pipeline.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group border border-border p-8 md:p-12 hover:border-accent transition-colors duration-500 bg-surface/20 cursor-none rounded-xs"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 md:items-center">
                <div className="font-mono text-3xl md:text-4xl text-text-muted group-hover:text-accent transition-colors">
                  {step.num}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-text-main mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm md:text-base max-w-3xl leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="font-mono text-xs text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  &gt; {step.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
