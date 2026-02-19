const projects = [
  {
    name: "Substract AI",
    url: "https://substract.co",
    status: "Live",
    statusColor: "#22c55e",
    tag: "AI · Finance",
    description:
      "My subscription analyzer. It connects to your accounts, shows exactly what you're paying for, and tells you what to cut. Built because most people have no idea how much they're bleeding on subscriptions.",
    detail: "$9.99 one-time · No subscription irony",
    highlights: [
      "Automatic subscription detection",
      "AI-powered spend analysis",
      "Smart cancel recommendations",
    ],
  },
  {
    name: "Plugin0",
    url: "https://plugin0.com",
    status: "Live",
    statusColor: "#22c55e",
    tag: "AI · WordPress",
    description:
      "Prompt-to-plugin for WordPress. Describe what you want, get a working plugin. Built for the millions of WordPress sites that need custom functionality but can't afford custom development.",
    detail: "Free to explore · Monetization in progress",
    highlights: [
      "Natural language plugin generation",
      "WordPress AI discovery engine",
      "Instant deploy, no dev needed",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-px bg-[#F0A500]" />
          <span className="text-xs font-mono text-[#6b6b6b] uppercase tracking-widest">What I&apos;ve built</span>
        </div>

        {/* Projects — stack on mobile, 2-col on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 sm:p-8 rounded-2xl border border-[#1e1e1e] bg-[#111111]
                hover:border-[#2e2e2e] hover:bg-[#131313] transition-all duration-300 overflow-hidden block"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(240,165,0,0.06) 0%, transparent 60%)" }} />

              {/* Top row */}
              <div className="flex items-start justify-between gap-3 mb-5 relative">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="text-[#f0f0f0] font-semibold text-lg sm:text-xl tracking-tight group-hover:text-white transition-colors">
                      {project.name}
                    </h3>
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none"
                      className="text-[#3a3a3a] group-hover:text-[#F0A500] transition-colors shrink-0">
                      <path d="M2.5 11.5 11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-[#3a3a3a]">{project.tag}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border bg-[#0d0d0d] shrink-0"
                  style={{ borderColor: `${project.statusColor}22` }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: project.statusColor }} />
                  <span className="text-[10px] font-mono" style={{ color: project.statusColor }}>{project.status}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#6b6b6b] text-sm leading-relaxed mb-5 relative group-hover:text-[#8b8b8b] transition-colors">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-5 relative">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-xs text-[#3a3a3a] group-hover:text-[#4a4a4a] transition-colors">
                    <span className="text-[#F0A500] opacity-60 shrink-0 mt-px">→</span>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Footer detail */}
              <div className="pt-4 border-t border-[#1a1a1a] relative">
                <span className="text-[10px] font-mono text-[#3a3a3a]">{project.detail}</span>
              </div>
            </a>
          ))}
        </div>

        {/* More coming */}
        <div className="mt-4 p-5 sm:p-6 rounded-2xl border border-dashed border-[#1e1e1e] flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-[#3a3a3a] mb-0.5">next build</p>
            <p className="text-[#6b6b6b] text-sm">Something new is brewing. Follow along to see it take shape.</p>
          </div>
          <div className="w-8 h-8 rounded-full border border-[#1e1e1e] flex items-center justify-center text-[#3a3a3a] shrink-0">
            <span className="text-lg leading-none">+</span>
          </div>
        </div>

      </div>
    </section>
  );
}
