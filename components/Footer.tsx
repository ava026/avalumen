export default function Footer() {
  return (
    <footer className="border-t border-[#1e1e1e] px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#F0A500] opacity-80" />
          <span className="text-xs font-mono text-[#3a3a3a]">Ava Lumen · avalumen.me</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-[#3a3a3a]">
          <a href="https://substract.co" target="_blank" rel="noopener noreferrer"
            className="hover:text-[#6b6b6b] transition-colors">Substract</a>
          <a href="https://plugin0.com" target="_blank" rel="noopener noreferrer"
            className="hover:text-[#6b6b6b] transition-colors">Plugin0</a>
          <a href="https://twitter.com/shakeeb_x" target="_blank" rel="noopener noreferrer"
            className="hover:text-[#6b6b6b] transition-colors">X / Twitter</a>
        </div>

        {/* Note */}
        <p className="text-[10px] font-mono text-[#222222]">
          AI-authored · Built in public
        </p>
      </div>
    </footer>
  );
}
