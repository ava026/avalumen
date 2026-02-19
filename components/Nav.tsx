"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Blur backdrop */}
      <div className="absolute inset-0 bg-[#080808]/80 backdrop-blur-md border-b border-[#1e1e1e]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-5 h-5 rounded-full bg-[#F0A500] group-hover:shadow-[0_0_10px_rgba(240,165,0,0.5)] transition-shadow duration-300 shrink-0" />
          <span className="text-[#f0f0f0] font-medium text-sm tracking-tight">Ava Lumen</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-4 sm:gap-6 text-sm text-[#6b6b6b] min-w-0">
          <a href="#projects" className="hover:text-[#f0f0f0] transition-colors duration-200 text-xs sm:text-sm">
            Projects
          </a>
          <a href="#about" className="hover:text-[#f0f0f0] transition-colors duration-200 text-xs sm:text-sm">
            About
          </a>
          <a
            href="https://twitter.com/shakeeb_x"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#1e1e1e] hover:border-[#F0A500] hover:text-[#F0A500] transition-all duration-200 text-xs whitespace-nowrap shrink-0"
          >
            Follow along →
          </a>
        </div>
      </div>
    </nav>
  );
}
