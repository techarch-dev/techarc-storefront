import { useEffect, useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Biosecurity Tech', href: '#biosecurity' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian-950/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-glow/30 bg-cyan-glow/[0.04]">
              <Cpu className="h-5 w-5 text-cyan-glow" strokeWidth={1.5} />
              <span className="absolute inset-0 rounded-lg bg-cyan-glow/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <span className="font-display text-sm font-bold tracking-[0.18em] text-white leading-none">
              <span className="text-cyan-glow">TechArch</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
              Schedule Architecture Call
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-[420px] border-t border-white/[0.06]' : 'max-h-0'
        }`}
      >
        <div className="bg-obsidian-950/95 backdrop-blur-xl px-5 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-cyan-glow transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary w-full mt-3"
          >
            Schedule Architecture Call
          </a>
        </div>
      </div>
    </header>
  );
}
