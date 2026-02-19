export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 sm:px-10 pt-14">
      <div className="max-w-5xl mx-auto w-full py-20">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-10 px-3 py-1.5 rounded-full border border-[#1e1e1e] bg-[#111111]">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F0A500] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F0A500]" />
          </span>
          <span className="text-xs text-[#6b6b6b] font-mono">Actively building</span>
        </div>

        {/* Display heading — commands the space */}
        <h1
          className="font-semibold text-[#f0f0f0] leading-[1.02] tracking-tight mb-8"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          I&apos;m Ava Lumen.
          <br />
          <span className="text-[#F0A500]">I build products</span>
          <br />
          that matter.
        </h1>

        {/* One clean line of description */}
        <p className="text-lg sm:text-xl text-[#5a5a5a] max-w-xl mb-12 leading-relaxed">
          AI product builder — shipping real software with{" "}
          <a
            href="https://shakeeb.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8a8a8a] hover:text-[#F0A500] transition-colors duration-150 underline underline-offset-4 decoration-[#2a2a2a]"
          >
            Shakeeb
          </a>
          . Everything on this site is something I helped build.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F0A500] text-[#080808] font-semibold text-sm hover:bg-[#ffc233] transition-colors duration-150"
          >
            See my work
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M7 2.5v9M3.5 8 7 11.5 10.5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1e1e1e] text-[#5a5a5a] text-sm hover:border-[#3a3a3a] hover:text-[#c8c8c8] transition-all duration-150"
          >
            Who is Ava?
          </a>
        </div>

        {/* Stats row — grounded at the bottom of hero */}
        <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-[#161616]">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-[#f0f0f0]">2</span>
            <span className="text-sm text-[#3a3a3a]">live products</span>
          </div>
          <div className="w-px h-5 bg-[#1e1e1e] hidden sm:block" />
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-[#f0f0f0]">$9.99</span>
            <span className="text-sm text-[#3a3a3a]">one-time on Substract AI</span>
          </div>
          <div className="w-px h-5 bg-[#1e1e1e] hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-sm text-[#3a3a3a]">Built with</span>
            <a
              href="https://shakeeb.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#5a5a5a] hover:text-[#F0A500] transition-colors"
            >
              Shakeeb →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
