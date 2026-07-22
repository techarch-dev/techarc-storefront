import { ArrowRight, Boxes, ShieldCheck, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Badge */}
        <div className="reveal flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-glow/20 bg-cyan-glow/[0.04] px-4 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-cyan-glow/90">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-glow opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-glow" />
            </span>
            Enterprise Architecture & Biosecurity Systems
          </div>
        </div>

        {/* Headline */}
        <h1 className="reveal delay-1 mx-auto mt-8 max-w-4xl text-center font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl">
          Engineering Scalable Digital Infrastructure &{' '}
          <span className="text-gradient">Biosecurity Tech Solutions.</span>
        </h1>

        {/* Subheadline */}
        <p className="reveal delay-2 mx-auto mt-6 max-w-2xl text-center text-lg leading-relaxed text-slate-400">
          We architect enterprise cloud systems, web platforms, and automated tech
          infrastructures designed for maximum efficiency and modern growth.
        </p>

        {/* CTAs */}
        <div className="reveal delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#services" className="btn-primary group">
            Explore Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#resources" className="btn-outline group">
            <Boxes className="h-4 w-4 text-cyan-glow" />
            View Partner Vault
          </a>
        </div>

        {/* Stat strip */}
        <div className="reveal delay-4 mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-4 sm:gap-8">
          {[
            { icon: Zap, value: '99.9%', label: 'Uptime SLA' },
            { icon: ShieldCheck, value: 'Zero-Trust', label: 'Security Posture' },
            { icon: Boxes, value: '24/7', label: 'Automated Ops' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card flex flex-col items-center gap-1.5 px-3 py-5 text-center"
            >
              <stat.icon className="h-5 w-5 text-cyan-glow/70" strokeWidth={1.5} />
              <span className="font-display text-xl font-bold text-white sm:text-2xl">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
