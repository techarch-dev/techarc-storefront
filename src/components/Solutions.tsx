import { CheckCircle2, Layers, GitBranch, LineChart, ServerCog, Workflow } from 'lucide-react';

const SOLUTIONS = [
  {
    icon: Layers,
    title: 'Composable Architecture',
    desc: 'Modular, API-first systems that swap components without re-platforming.',
  },
  {
    icon: GitBranch,
    title: 'Version-Controlled Infra',
    desc: 'Infrastructure-as-code with reviewable, reversible deployments.',
  },
  {
    icon: LineChart,
    title: 'Growth Telemetry',
    desc: 'Instrumented funnels and KPIs wired directly into your data layer.',
  },
  {
    icon: ServerCog,
    title: 'Self-Healing Ops',
    desc: 'Automated failover, scaling, and alerting that reduces manual toil.',
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    desc: 'Workflow engines that eliminate repetitive manual operations.',
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal max-w-2xl">
          <span className="section-label">
            <span className="h-px w-8 bg-cyan-glow/50" />
            Solutions
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Built to scale. Engineered to last.
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Our solutions layer across every pillar — from infrastructure to automation —
            so your systems compound in capability over time.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {SOLUTIONS.map((solution, i) => (
            <div
              key={solution.title}
              className={`glass-card reveal p-6 flex items-start gap-4 delay-${(i % 4) + 1}`}
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-glow/20 bg-cyan-glow/[0.04]">
                <solution.icon className="h-5 w-5 text-cyan-glow" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-white">
                  {solution.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                  {solution.desc}
                </p>
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className="reveal delay-3 glass-card p-6 flex flex-col justify-center items-start gap-3 border-cyan-glow/20">
            <CheckCircle2 className="h-6 w-6 text-cyan-glow" strokeWidth={1.5} />
            <h3 className="font-display text-base font-semibold text-white">
              Not sure where to start?
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Get a free 30-minute architecture audit. We'll map your current stack and
              identify the highest-leverage next move.
            </p>
            <a href="#contact" className="btn-primary mt-2 text-sm py-2.5 px-5">
              Book a Free Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
