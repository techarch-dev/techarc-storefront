import { Cpu, Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const QUICK_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Biosecurity Tech', href: '#biosecurity' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

const SOLUTION_LINKS = [
  { label: 'Cloud Architecture', href: '#services' },
  { label: 'Biosecurity Systems', href: '#biosecurity' },
  { label: 'Steward Flow Calculator', href: 'https://stewardflow.techarc.icu', external: true },
  { label: 'Partner Vault', href: '#resources' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-obsidian-950/60">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-glow/30 bg-cyan-glow/[0.04]">
                <Cpu className="h-5 w-5 text-cyan-glow" strokeWidth={1.5} />
              </span>
              <span className="font-display text-sm font-bold tracking-[0.18em] text-white leading-none">
                <span className="text-cyan-glow">TechArch</span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-500">
              Architecture-first digital infrastructure and biosecurity technology for
              modern enterprise growth.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 hover:text-cyan-glow hover:border-cyan-glow/30 transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-glow transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              Solutions
            </h4>
            <ul className="mt-5 space-y-3">
              {SOLUTION_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-slate-400 hover:text-cyan-glow transition-colors inline-flex items-center gap-1.5"
                  >
                    {link.label}
                    {link.external && <ArrowUpRight className="h-3.5 w-3.5 text-cyan-glow/70" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              Get Started
            </h4>
            <p className="mt-5 text-sm text-slate-400">
              Ready to architect your next system?
            </p>
            <a href="#contact" className="btn-outline mt-4 text-sm py-2.5 px-5">
              Schedule Architecture Call
            </a>
          </div>
        </div>

        {/* CORRECTED BOTTOM ROW */}
        <div className="relative mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06] pt-8">
          <div className="flex items-center">
            <p className="font-mono text-xs text-slate-600">
              © {new Date().getFullYear()} TechArch. All rights reserved.
            </p>
            {/* Stealth Admin Link */}
            <a 
              href="/portal" 
              className="ml-4 font-mono text-xs text-white/[0.02] hover:text-white/20 select-none transition-colors duration-300"
              title="Admin Access"
            >
              TA
            </a>
          </div>
          
          <div className="flex items-center gap-2 font-mono text-xs text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow animate-pulse" />
            Systems Online
          </div>
        </div>
      </div>
    </footer>
  );
}