export default function MarqueeStrip() {
  const items = [
    'DISTRIBUTED ARCHITECTURE',
    'HIGH-THROUGHPUT WEBSOCKETS',
    'RAG & VECTOR SEARCH',
    'CLOUD NATIVE & TERRAFORM',
    'ZERO-KNOWLEDGE ENCRYPTION',
    'DATABASE AGGREGATIONS',
    'SUB-50MS BROADCAST LATENCY',
    'EVENT-DRIVEN MICROSERVICES',
  ]

  return (
    <div className="py-12 border-y border-border bg-void transition-colors duration-500 overflow-hidden select-none">
      <div className="marquee-strip opacity-60 hover:opacity-100 transition-opacity">
        <div className="marquee-content font-mono text-xs sm:text-sm tracking-[0.25em] text-text-muted flex">
          {items.map((item, idx) => (
            <span key={idx} className="mx-8 flex items-center gap-6 whitespace-nowrap">
              <span>{item}</span>
              <span className="text-accent text-[8px]">●</span>
            </span>
          ))}
        </div>
        <div className="marquee-content font-mono text-xs sm:text-sm tracking-[0.25em] text-text-muted flex" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`clone-${idx}`} className="mx-8 flex items-center gap-6 whitespace-nowrap">
              <span>{item}</span>
              <span className="text-accent text-[8px]">●</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
