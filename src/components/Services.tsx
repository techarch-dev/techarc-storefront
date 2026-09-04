import { Database, Globe, Server, FileText, Cpu, ArrowRight, ExternalLink } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Database,
      title: 'System Architecture & RLS',
      description: 'Design and deployment of robust relational database schemas, secure RESTful APIs, and strict Row Level Security (RLS) enforcement for high-security applications.',
    },
    {
      icon: Globe,
      title: 'Domain Infrastructure & Management',
      description: 'End-to-end domain portfolio management, custom DNS optimization, and registrar security (leveraging Namecheap integration) for zero-downtime availability.',
    },
    {
      icon: Server,
      title: 'High-Performance Hosting Operations',
      description: 'Deployment and tuning of scalable web assets, VPS configurations, and server resource management anchored by reliable environments like JaguarPC.',
    },
    {
      icon: FileText,
      title: 'Document Automation & Workflows',
      description: 'Custom PDF and Microsoft Word letterhead formatting, dynamic document templates, and seamless integration of client service pipelines into custom admin portals.',
    },
    {
      icon: Cpu,
      title: 'Green Tech & Micro-SaaS Operations',
      description: 'Integration of sustainable, data-driven frameworks (such as automated aquaculture and green operational models) with scalable digital monetization tools.',
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-glow">
            // Core Competencies
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Architected for Scale & Reliability
          </h2>
          <p className="mt-4 text-slate-400">
            Comprehensive technical infrastructure, secure hosting frameworks, and automated operational engines built for modern digital businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass-card group relative p-8 transition-all hover:border-cyan-glow/50 ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-glow/[0.03] to-transparent opacity-0 transition-opacity group-hover:opacity-100 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-glow/20 bg-cyan-glow/10 text-cyan-glow mb-6">
                  <service.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

          {/* Callout Card for Steward Flow */}
          <div className="glass-card group relative p-8 flex flex-col justify-between bg-gradient-to-br from-cyan-glow/10 via-slate-900 to-slate-950 border-cyan-glow/30">
            <div>
              <span className="inline-block px-2.5 py-1 rounded bg-cyan-glow/20 font-mono text-[10px] text-cyan-glow uppercase tracking-wider mb-4">
                Flagship Micro-SaaS
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Steward Flow Calculator
              </h3>
              <p className="text-sm leading-relaxed text-slate-300 mb-6">
                Experience our real-time Net Disposable Cash allocation engine and secure lead-capture pipeline live in action.
              </p>
            </div>
            <a
              href="https://stewardflow.techarc.icu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-mono font-semibold text-cyan-glow hover:text-cyan-300 transition-colors"
            >
              <span>Launch Calculator</span>
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}