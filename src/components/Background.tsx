export function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-overlay animate-grid-move opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/0 via-obsidian-900/40 to-obsidian-950" />

      {/* Ambient glow orbs */}
      <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-electric/10 blur-[120px] animate-glow-pulse" />
      <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] rounded-full bg-cyan-glow/[0.07] blur-[100px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-[10%] left-[40%] w-[450px] h-[450px] rounded-full bg-electric/[0.06] blur-[110px] animate-glow-pulse" style={{ animationDelay: '3s' }} />

      {/* Scan line */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/30 to-transparent animate-scan-line" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(7,10,18,0.6)_100%)]" />
    </div>
  );
}
