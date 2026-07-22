import { Cloud, Droplets, Workflow, ArrowUpRight } from 'lucide-react';

type Service = {
  id: string;
  icon: typeof Cloud;
  title: string;
  tagline: string;
  features: string[];
};

const SERVICES: Service[] = [
  {
    id: 'web-cloud',
    icon: Cloud,
    title: 'Enterprise Web & Cloud Architecture',
    tagline:
      'Custom web apps, server setup, WHM/cPanel optimization, and API integrations built for scale.',
    features: ['Custom Web Apps', 'Server Setup', 'WHM/cPanel Optimization', 'API Integrations'],
  },
  {
    id: 'biosecurity',
    icon: Droplets,
    title: 'Biosecurity & Smart AgTech Systems',
    tagline:
      'Automated monitoring, tech-driven aquaculture, and biosecurity infrastructure solutions.',
    features: ['Automated Monitoring', 'Aquaculture Tech', 'Biosecurity Infrastructure', 'Smart Sensors'],
  },
  {
    id: 'consulting',
    icon: Workflow,
    title: 'Strategic Tech Consulting & Automation',
    tagline:
      'Workflow automation, secure email/DNS configurations, and digital growth engines.',
    features: ['Workflow Automation', 'Secure Email/DNS', 'Digital Growth Engines', 'Tech Strategy'],
  },
];

export function Services() {
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="section-label">
            <span className="h-px w-8 bg-cyan-glow/50" />
            Core Service Pillars
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Three pillars. One architecture-first approach.
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Every engagement is engineered around resilience, automation, and measurable
            growth — from cloud infrastructure to biosecurity systems.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <div
              key={service.id}
              onMouseMove={handleMove}
              className={`glass-card reveal p-7 flex flex-col delay-${i + 1}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-glow/20 bg-cyan-glow/[0.04]">
                  <service.icon className="h-6 w-6 text-cyan-glow" strokeWidth={1.5} />
                </div>
                <span className="font-mono text-xs text-slate-600">
                  0{i + 1}
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-white leading-snug">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {service.tagline}
              </p>

              <ul className="mt-6 space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-slate-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-cyan-glow" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-cyan-glow/80 hover:text-cyan-glow transition-colors"
              >
                Request Scope
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
