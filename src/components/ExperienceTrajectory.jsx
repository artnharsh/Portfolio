export default function ExperienceTrajectory() {
  const experiences = [
    {
      role: 'Full Stack Intern',
      organization: 'Pimpri Chinchwad College of Engineering',
      location: 'Pune, Maharashtra',
      period: 'Dec 2025 – Jan 2026',
      badge: 'INTERNSHIP',
      highlights: [
        'Engineered UniSphere, a comprehensive MERN platform with RBAC, smart QR attendance, and automated workflows serving 100+ users.',
        'Partnered with cross-functional team to architect secure REST APIs and real-time analytics pipeline following strict OOP design principles.',
        'Participated in code reviews and Agile sprint ceremonies, optimizing UI components and reducing feature turnaround by 30%.',
      ],
      tags: ['MERN', 'RBAC', 'QR Workflows', 'REST APIs', 'Agile'],
    },
    {
      role: 'Technical Lead',
      organization: 'PCCOE ACM Student Chapter',
      location: 'Pune, Maharashtra',
      period: 'Aug 2025 – Aug 2026',
      badge: 'LEADERSHIP',
      highlights: [
        'Spearheaded 5+ technical workshops and 2 hackathons, mentoring 50+ junior students in Data Structures, Algorithms, and full-stack development.',
        'Orchestrated Agile workflows across 3 core software projects, coordinating 6 developers and reducing pre-deployment bugs by 25%.',
      ],
      tags: ['Team Mentorship', 'Hackathon Lead', 'Agile Orchestration', 'Code Audits'],
    },
  ]

  const achievements = [
    {
      title: 'Winner – ML Mania',
      org: 'PCCOE',
      type: '1st Place',
      desc: 'Machine learning competition focused on algorithmic precision and model optimization.',
    },
    {
      title: '2nd Runner-Up – IEEE Ideathon',
      org: 'PICT',
      type: 'Podium Finish',
      desc: 'Ideated and prototyped innovative architectural system solution under competitive time constraints.',
    },
    {
      title: 'Top 30 (Rank 26) – Smart India Hackathon',
      org: 'Govt. of India',
      type: 'National Finalist',
      desc: 'Ranked in the top echelon nationally in India’s premier collegiate hackathon.',
    },
    {
      title: 'Google Arcade Cohort 2 (Legend Tier)',
      org: 'Google Cloud',
      type: 'Legend Tier',
      desc: 'Mastered cloud infrastructure modules and participated in 6+ hackathons including Google Solution Challenge.',
    },
  ]

  return (
    <section id="trajectory" className="py-28 px-6 md:px-12 bg-void relative z-20 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-accent text-xs tracking-widest block mb-4">
            03 // TRAJECTORY
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold text-text-main leading-tight">
            Experience &amp;<br />
            <span className="text-text-muted opacity-50">Leadership.</span>
          </h2>
        </div>

        {/* 2-Column Layout: Roles on left, Honors/Hackathons on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Roles & Internships */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">
              /// ROLES &amp; ORGANIZATIONS
            </h3>

            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="group border border-border p-6 md:p-8 bg-surface/30 hover:border-accent transition-colors duration-400 rounded-xs cursor-none"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs px-2.5 py-0.5 bg-accent/10 border border-accent/40 text-accent rounded">
                      {exp.badge}
                    </span>
                    <span className="font-mono text-xs text-text-muted">
                      {exp.period}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-text-muted">
                    {exp.location}
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-text-main mb-1 group-hover:text-accent transition-colors">
                  {exp.role}
                </h4>
                <div className="font-mono text-sm text-text-muted mb-4">
                  {exp.organization}
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="text-sm text-text-muted flex items-start gap-2.5 leading-relaxed">
                      <span className="text-accent font-mono text-xs mt-1">&gt;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/40">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2 py-0.5 bg-void border border-border text-text-muted rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Honors & Hackathon Wins */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-mono text-xs text-text-muted tracking-widest uppercase mb-4">
              /// COMPETITIVE HONORS &amp; ACHIEVEMENTS
            </h3>

            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="p-5 border border-border bg-surface/20 hover:border-accent transition-colors duration-300 rounded-xs group cursor-none"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-semibold text-accent">
                      {ach.type}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted px-2 py-0.5 bg-void border border-border rounded">
                      {ach.org}
                    </span>
                  </div>
                  <h5 className="text-base font-semibold text-text-main group-hover:text-accent transition-colors mb-1">
                    {ach.title}
                  </h5>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {ach.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Education Box */}
            <div className="p-6 border border-border bg-surface/40 rounded-xs font-mono">
              <span className="text-xs text-accent uppercase tracking-wider block mb-2">
                /// FORMAL EDUCATION
              </span>
              <h5 className="text-sm font-bold text-text-main">
                Pimpri Chinchwad College of Engineering (PCCOE)
              </h5>
              <div className="text-xs text-text-muted mt-1">
                Bachelor of Technology in Computer Engineering
              </div>
              <div className="text-[11px] text-text-muted mt-2 flex justify-between">
                <span>Pune, Maharashtra</span>
                <span className="text-accent">2023 – Present</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
