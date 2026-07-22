import { ExternalLink, Server, Code2, Mail, Database, Globe, Lock, Terminal } from 'lucide-react';

type Resource = {
  icon: typeof Server;
  name: string;
  category: string;
  desc: string;
  href: string;
};

const RESOURCES: Resource[] = [
  {
    icon: Server,
    name: 'Cloud Hosting',
    category: 'Infrastructure',
    desc: 'High-availability VPS and dedicated server hosting with optimized stack configs.',
    href: '#',
  },
  {
    icon: Globe,
    name: 'WHM/cPanel Stack',
    category: 'Server Management',
    desc: 'Hardened control panel deployments with tuned PHP, MySQL, and caching layers.',
    href: '#',
  },
  {
    icon: Code2,
    name: 'Headless CMS',
    category: 'Web Platforms',
    desc: 'API-first content platforms for composable, multi-channel digital experiences.',
    href: '#',
  },
  {
    icon: Database,
    name: 'Managed Postgres',
    category: 'Data Layer',
    desc: 'Relational backends with automated backups, point-in-time recovery, and pooling.',
    href: '#',
  },
  {
    icon: Mail,
    name: 'Secure Email Suite',
    category: 'Communications',
    desc: 'DMARC/DKIM/SPF-configured transactional and business email with deliverability tuning.',
    href: '#',
  },
  {
    icon: Lock,
    name: 'Zero-Trust Access',
    category: 'Security',
    desc: 'Identity-aware proxies and DNS hardening for least-privilege infrastructure access.',
    href: '#',
  },
  {
    icon: Terminal,
    name: 'CI/CD Pipelines',
    category: 'Automation',
    desc: 'Git-driven deployment pipelines with automated testing and rollback safety nets.',
    href: '#',
  },
  {
    icon: Globe,
    name: 'Edge CDN',
    category: 'Performance',
    desc: 'Global content delivery with intelligent caching and DDoS mitigation at the edge.',
    href: '#',
  },
];

export function Resources() {
  return (
    <section id="resources" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="section-label">
              <span className="h-px w-8 bg-cyan-glow/50" />
              Affiliate & Resource Vault
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
              Curated tools we trust and deploy.
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              A vetted stack of hosting, software, and infrastructure partners we recommend
              for enterprise-grade builds.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RESOURCES.map((resource, i) => (
            <a
              key={resource.name}
              href={resource.href}
              className={`glass-card reveal p-6 group delay-${(i % 4) + 1} flex flex-col`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-glow/20 bg-cyan-glow/[0.04]">
                  <resource.icon className="h-5 w-5 text-cyan-glow" strokeWidth={1.5} />
                </div>
                <ExternalLink className="h-4 w-4 text-slate-600 group-hover:text-cyan-glow transition-colors" />
              </div>
              <span className="mt-5 font-mono text-[10px] uppercase tracking-widest text-cyan-glow/60">
                {resource.category}
              </span>
              <h3 className="mt-1.5 font-display text-base font-semibold text-white">
                {resource.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400 flex-1">
                {resource.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-slate-500 group-hover:text-cyan-glow transition-colors">
                Explore
                <span className="h-px w-4 bg-current transition-all group-hover:w-8" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
