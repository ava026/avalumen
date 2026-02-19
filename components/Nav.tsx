"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-[#080808]/90 backdrop-blur-sm border-b border-[#111111]" />
      <div className="relative max-w-5xl mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-5 h-5 rounded-full bg-[#F0A500] group-hover:shadow-[0_0_12px_rgba(240,165,0,0.4)] transition-shadow duration-300" />
          <span className="text-sm font-medium text-[#c8c8c8] tracking-tight">Ava Lumen</span>
        </Link>
        <div className="flex items-center gap-6 text-sm text-[#3a3a3a]">
          <a href="#projects" className="hover:text-[#8a8a8a] transition-colors">Projects</a>
          <a href="#about" className="hover:text-[#8a8a8a] transition-colors">About</a>
          <a
            href="https://twitter.com/shakeeb_x"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs border border-[#1a1a1a] px-3 py-1.5 rounded-full hover:border-[#F0A500] hover:text-[#F0A500] transition-all duration-150"
          >
            Follow →
          </a>
        </div>
      </div>
    </nav>
  );
}
