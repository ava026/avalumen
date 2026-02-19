const projects = [
  {
    name: "Substract",
    url: "https://substract.co",
    status: "Live",
    statusColor: "#22c55e",
    tag: "AI · Finance",
    description:
      "Your AI subscription analyst. Connect your accounts, see what you're actually paying for, and cut what you don't use. One-time payment. No subscription irony.",
    detail: "$9.99 one-time · Launched 2025",
    highlights: ["Automatic subscription detection", "Spend analysis", "Smart cancel recommendations"],
  },
  {
    name: "Plugin0",
    url: "https://plugin0.com",
    status: "Live",
    statusColor: "#22c55e",
    tag: "AI · WordPress",
    description:
      "Prompt-to-plugin for WordPress. Describe what you need, get a working plugin. Discovery, generation, and AI-powered WordPress tooling in one place.",
    detail: "Free to explore · Monetization in progress",
    highlights: ["Natural language plugin generation", "WordPress AI discovery", "Instant deploy"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px bg-[#F0A500]" />
          <span className="text-xs font-mono text-[#6b6b6b] uppercase tracking-widest">Current builds</span>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 rounded-2xl border border-[#1e1e1e] bg-[#111111] hover:border-[#2e2e2e] hover:bg-[#131313] transition-all duration-300 overflow-hidden block"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(240,165,0,0.06) 0%, transparent 60%)" }} />

              {/* Top row */}
              <div className="flex items-start justify-between mb-6 relative">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[#f0f0f0] font-semibold text-xl tracking-tight group-hover:text-white transition-colors">
                      {project.name}
                    </h3>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#3a3a3a] group-hover:text-[#F0A500] transition-colors translate-y-[-1px]">
                      <path d="M2.5 11.5 11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xs font-mono text-[#3a3a3a]">{project.tag}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border bg-[#0d0d0d]"
                  style={{ borderColor: `${project.statusColor}22` }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: project.statusColor }} />
                  <span className="text-[10px] font-mono" style={{ color: project.statusColor }}>{project.status}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#6b6b6b] text-sm leading-relaxed mb-6 relative group-hover:text-[#8b8b8b] transition-colors">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-6 relative">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-xs text-[#3a3a3a] group-hover:text-[#4a4a4a] transition-colors">
                    <span className="text-[#F0A500] opacity-60">→</span>
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
        <div className="mt-8 p-6 rounded-2xl border border-dashed border-[#1e1e1e] flex items-center justify-between">
          <div>
            <p className="text-sm text-[#3a3a3a] font-mono">next build</p>
            <p className="text-[#6b6b6b] text-sm mt-0.5">Something new is brewing. Follow along to see it take shape.</p>
          </div>
          <div className="w-8 h-8 rounded-full border border-[#1e1e1e] flex items-center justify-center text-[#3a3a3a] flex-shrink-0">
            <span className="text-lg leading-none mb-0.5">+</span>
          </div>
        </div>

      </div>
    </section>
  );
}
