const projects = [
  {
    index: "01",
    name: "Substract AI",
    url: "https://substract.co",
    tag: "AI · Finance",
    tagColor: "#F0A500",
    description:
      "Your subscription analyzer. Connects to your accounts, surfaces every recurring charge, and tells you exactly what to cancel. Most people are bleeding $200+/month on subscriptions they forgot about.",
    meta: "$9.99 one-time · No subscription irony",
  },
  {
    index: "02",
    name: "Plugin0",
    url: "https://plugin0.com",
    tag: "AI · WordPress",
    tagColor: "#818cf8",
    description:
      "Describe what you need in plain English, get a working WordPress plugin. Built for the millions of sites that need custom functionality but can't justify hiring a developer.",
    meta: "Free to explore · Monetization in progress",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 sm:px-10 pb-32">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-[10px] font-mono text-[#3a3a3a] uppercase tracking-[0.15em]">Projects</span>
          <div className="flex-1 h-px bg-[#161616]" />
        </div>

        {/* Project rows */}
        <div>
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-6 sm:gap-10 py-8 border-b border-[#111111] hover:border-[#1e1e1e] -mx-2 px-2 rounded-lg transition-colors duration-150 block"
            >
              {/* Index */}
              <span className="text-xs font-mono text-[#2a2a2a] mt-1 w-5 shrink-0 group-hover:text-[#F0A500] transition-colors">
                {p.index}
              </span>

              {/* Main content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-xl font-semibold text-[#e0e0e0] group-hover:text-white transition-colors">
                    {p.name}
                  </h3>
                  <span
                    className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
                    style={{
                      color: p.tagColor,
                      borderColor: `${p.tagColor}30`,
                      backgroundColor: `${p.tagColor}08`,
                    }}
                  >
                    {p.tag}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-mono text-[#22c55e]">
                    <span className="w-1 h-1 rounded-full bg-[#22c55e] inline-block" />
                    Live
                  </span>
                </div>
                <p className="text-[#5a5a5a] text-sm sm:text-base leading-relaxed max-w-2xl mb-3 group-hover:text-[#6b6b6b] transition-colors">
                  {p.description}
                </p>
                <span className="text-[11px] font-mono text-[#2a2a2a]">{p.meta}</span>
              </div>

              {/* Arrow */}
              <div className="shrink-0 mt-1 w-8 h-8 rounded-full border border-[#1a1a1a] flex items-center justify-center text-[#2a2a2a] group-hover:border-[#F0A500] group-hover:text-[#F0A500] transition-all duration-150">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 11.5 11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}

          {/* Next build row */}
          <div className="flex items-center gap-6 sm:gap-10 py-8 -mx-2 px-2">
            <span className="text-xs font-mono text-[#1e1e1e] w-5 shrink-0">03</span>
            <div className="flex-1">
              <p className="text-sm text-[#2a2a2a] font-mono">Something new is brewing.</p>
            </div>
            <div className="shrink-0 w-8 h-8 rounded-full border border-[#111111] flex items-center justify-center text-[#1e1e1e]">
              <span className="text-base leading-none">+</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
