export default function About() {
  return (
    <section id="about" className="relative py-32 bg-void z-10 border-t border-border overflow-hidden">
      {/* Background Kinetic Marquee */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none overflow-hidden opacity-10">
        <div className="marquee-content animate-[marquee_30s_linear_infinite]">
          <span className="about-kinetic-type">SCALABILITY RELIABILITY CONSISTENCY </span>
          <span className="about-kinetic-type">SCALABILITY RELIABILITY CONSISTENCY </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <span className="font-mono text-accent text-xs tracking-widest block mb-4 reveal-blur">
            01 // IDENTITY
          </span>
          <h2 className="text-4xl md:text-7xl font-semibold text-text-main leading-tight reveal-line">
            The Engineer&apos;s<br />{' '}
            <span className="text-text-muted opacity-50">Manifesto.</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Main Bio */}
          <div className="md:col-span-7 space-y-8">
            <p className="text-lg md:text-xl text-text-muted leading-relaxed reveal-blur">
              I don&apos;t just write code; I architect{' '}
              <span className="text-text-main font-semibold border-b border-accent/50 pb-0.5">
                resilient ecosystems
              </span>
              . My passion lies in high-throughput backend infrastructure, event-driven pipelines, 
              zero-knowledge encryption, and intelligent RAG vector engines that solve complex engineering bottlenecks.
            </p>

            <div className="reveal-blur">
              <p className="font-mono text-sm text-accent border-l-2 border-accent pl-4 py-3 bg-surface/40 leading-relaxed">
                &ldquo;Complexity is the adversary. Simplicity, raw performance, and ironclad reliability are the ultimate benchmarks of architectural mastery.&rdquo;
              </p>
            </div>

            <p className="text-sm md:text-base text-text-muted leading-relaxed reveal-blur">
              Currently pursuing Computer Engineering at PCCOE Pune, leading technical initiatives at PCCOE ACM, 
              and building production-ready distributed systems evaluated under heavy load simulations.
            </p>
          </div>

          {/* Stats & Benchmarks from Resume */}
          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-10 font-mono text-xs text-text-muted reveal-blur bg-surface/30 p-8 border border-border rounded-xs">
              <div className="group">
                <span className="block text-text-main text-3xl sm:text-4xl mb-1 font-sans font-bold group-hover:text-accent transition-colors">
                  300+
                </span>
                <span className="text-text-muted tracking-wider">DSA PROBLEMS</span>
                <span className="block text-[10px] text-accent mt-0.5">LeetCode Solved</span>
              </div>

              <div className="group">
                <span className="block text-text-main text-3xl sm:text-4xl mb-1 font-sans font-bold group-hover:text-accent transition-colors">
                  83%
                </span>
                <span className="text-text-muted tracking-wider">LATENCY DROP</span>
                <span className="block text-[10px] text-accent mt-0.5">BrainBrush p95</span>
              </div>

              <div className="group">
                <span className="block text-text-main text-3xl sm:text-4xl mb-1 font-sans font-bold group-hover:text-accent transition-colors">
                  1,174+
                </span>
                <span className="text-text-muted tracking-wider">EVENTS / SEC</span>
                <span className="block text-[10px] text-accent mt-0.5">Sub-50ms Broadcast</span>
              </div>

              <div className="group">
                <span className="block text-text-main text-3xl sm:text-4xl mb-1 font-sans font-bold group-hover:text-accent transition-colors">
                  100%
                </span>
                <span className="text-text-muted tracking-wider">SECURITY & UP</span>
                <span className="block text-[10px] text-accent mt-0.5">AES-256 & Load Tests</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
