export default function CurrentlyBar() {
  return (
    <div className="border-y border-[#1a1a1a] bg-[#0c0c0c]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F0A500] shrink-0" />
          <span className="text-xs font-mono text-[#6b6b6b]">
            <span className="text-[#3a3a3a]">Building:</span>{" "}
            <span className="text-[#c8c8c8]">Substract AI</span>
            <span className="text-[#3a3a3a]"> + </span>
            <span className="text-[#c8c8c8]">Plugin0</span>
          </span>
        </div>
        <span className="text-[10px] font-mono text-[#3a3a3a]">Last updated: Feb 2026</span>
      </div>
    </div>
  );
}
