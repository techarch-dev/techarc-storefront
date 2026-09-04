import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const SCOPES = [
  'Enterprise Web & Cloud',
  'Biosecurity & AgTech',
  'Tech Consulting & Automation',
  'Full Architecture Audit',
  'Other / Not Sure Yet',
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const project_scope = String(formData.get('project_scope') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (!name || !email || !project_scope || !message) {
      setStatus('error');
      setErrorMsg('All fields are required.');
      return;
    }

    const { error } = await supabase.from('leads').insert({
      name,
      email,
      project_scope,
      message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
      return;
    }

    setStatus('success');
    form.reset();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-glow/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: pitch */}
          <div className="reveal">
            <span className="section-label">
              <span className="h-px w-8 bg-cyan-glow/50" />
              Start a Project
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl leading-tight">
              Let's architect your next system.
            </h2>
            <p className="mt-5 text-slate-400 leading-relaxed">
              Tell us about your project scope. We'll respond within one business day with
              an architecture roadmap and next steps.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { label: 'Response Time', value: '< 1 business day' },
                { label: 'Discovery Call', value: 'Free, 30 minutes' },
                { label: 'Engagement Model', value: 'Project or retainer' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-white/[0.06] pb-4"
                >
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal delay-2">
            <div className="glass-card p-7 sm:p-9">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-glow/30 bg-cyan-glow/[0.06]">
                    <CheckCircle2 className="h-8 w-8 text-cyan-glow" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold text-white">
                    Message received.
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 max-w-xs">
                    Thanks for reaching out. We'll be in touch within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-outline mt-8 text-sm"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" name="name" placeholder="Jane Doe" />
                    <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2">
                      Project Scope
                    </label>
                    <select
                      name="project_scope"
                      defaultValue=""
                      className="w-full rounded-lg border border-white/10 bg-obsidian-950/60 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-cyan-glow/50 focus:ring-1 focus:ring-cyan-glow/20"
                    >
                      <option value="" disabled>
                        Select a scope…
                      </option>
                      {SCOPES.map((scope) => (
                        <option key={scope} value={scope} className="bg-obsidian-900">
                          {scope}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Describe your project, goals, and timeline…"
                      className="w-full resize-none rounded-lg border border-white/10 bg-obsidian-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-colors focus:border-cyan-glow/50 focus:ring-1 focus:ring-cyan-glow/20"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/[0.06] px-4 py-3 text-sm text-red-300">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-obsidian-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-colors focus:border-cyan-glow/50 focus:ring-1 focus:ring-cyan-glow/20"
      />
    </div>
  );
}