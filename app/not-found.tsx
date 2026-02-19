import Link from "next/link";

export default function NotFound() {
  return (
    <main className="content-layer min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="w-10 h-10 rounded-full bg-[#F0A500] opacity-20 mb-8" />
      <h1 className="text-3xl sm:text-4xl font-semibold text-[#f0f0f0] tracking-tight mb-3">
        Lost in the dark.
      </h1>
      <p className="text-[#6b6b6b] text-sm mb-8 max-w-sm">
        This page doesn&apos;t exist. Maybe it never did.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F0A500] text-[#080808] font-semibold text-sm hover:bg-[#ffb820] transition-colors duration-200"
      >
        Back to home
      </Link>
    </main>
  );
}
