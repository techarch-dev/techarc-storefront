import { Activity, ShieldCheck, Waves, Cpu, Gauge, Leaf } from 'lucide-react';

const FEATURES = [
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    desc: 'Continuous sensor telemetry across water quality, biosecurity thresholds, and system health — surfaced in a unified dashboard.',
  },
  {
    icon: Waves,
    title: 'Automated Aquaculture',
    desc: 'Smart filtration, feeding, and circulation systems orchestrated by rule-based automation to maximize yield and minimize waste.',
  },
  {
    icon: ShieldCheck,
    title: 'Biosecurity Protocols',
    desc: 'Tech-enabled containment, traceability, and compliance workflows that integrate with modern regulatory frameworks.',
  },
  {
    icon: Cpu,
    title: 'Edge & IoT Integration',
    desc: 'Low-latency edge compute paired with IoT sensor arrays for on-site intelligence without cloud round-trips.',
  },
  {
    icon: Gauge,
    title: 'Predictive Analytics',
    desc: 'Trend modeling and anomaly detection that flag biosecurity risks before they escalate into operational losses.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Infrastructure',
    desc: 'Energy-conscious system design that lowers operational cost while meeting sustainability and ESG reporting needs.',
  },
];

export function Biosecurity() {
  return (
    <section id="biosecurity" className="relative py-24 sm:py-32">
      {/* Section divider glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: heading + visual */}
          <div className="reveal lg:sticky lg:top-24">
            <span className="section-label">
              <span className="h-px w-8 bg-cyan-glow/50" />
              Specialized Feature
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl leading-tight">
              Biosecurity & Aquaculture Tech
            </h2>
            <p className="mt-5 text-slate-400 leading-relaxed">
              We build modern, tech-enabled monitoring and automated systems that harden
              biosecurity protocols and make sustainable aquaculture infrastructure
              observable, controllable, and resilient.
            </p>

            {/* Decorative circuit visual */}
            <div className="mt-8 relative h-48 rounded-2xl border border-white/[0.06] bg-obsidian-950/60 overflow-hidden">
              <div className="absolute inset-0 grid-overlay opacity-40" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 200" fill="none">
                {/* Circuit traces */}
                <path d="M20 100 H80 L100 80 H160 L180 100 H220 L240 60 H300 L320 100 H380" stroke="#00F0FF" strokeWidth="1" opacity="0.4" />
                <path d="M20 140 H60 L80 120 H140 L160 140 H200" stroke="#3B82F6" strokeWidth="1" opacity="0.3" />
                <path d="M280 60 V100 H340" stroke="#00F0FF" strokeWidth="1" opacity="0.3" />
                {/* Nodes */}
                {[
                  [80, 80], [180, 100], [240, 60], [320, 100], [160, 140], [60, 120],
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="3" fill="#00F0FF" opacity="0.7">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                  </circle>
                ))}
                {/* Pulse */}
                <circle cx="180" cy="100" r="3" fill="#00F0FF">
                  <animate attributeName="r" values="3;10;3" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
              <div className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-widest text-cyan-glow/50">
                Live Telemetry Feed
              </div>
            </div>
          </div>

          {/* Right: feature grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className={`glass-card reveal p-6 delay-${(i % 5) + 1}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02]">
                  <feature.icon className="h-5 w-5 text-cyan-glow" strokeWidth={1.5} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
