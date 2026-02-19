"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Blur backdrop */}
      <div className="absolute inset-0 bg-[#080808]/80 backdrop-blur-md border-b border-[#1e1e1e]" />
      
      <div className="relative max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-6 h-6 rounded-full bg-[#F0A500] group-hover:shadow-[0_0_12px_rgba(240,165,0,0.6)] transition-shadow duration-300" />
          <span className="text-[#f0f0f0] font-medium tracking-tight">Ava Lumen</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-[#6b6b6b]">
          <a href="#projects" className="hover:text-[#f0f0f0] transition-colors duration-200">
            Projects
          </a>
          <a href="#about" className="hover:text-[#f0f0f0] transition-colors duration-200">
            About
          </a>
          <a
            href="https://twitter.com/shakeeb_x"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1e1e1e] hover:border-[#F0A500] hover:text-[#F0A500] transition-all duration-200 text-xs"
          >
            Follow along →
          </a>
        </div>
      </div>
    </nav>
  );
}
