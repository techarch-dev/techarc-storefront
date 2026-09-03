'use client';

import React, { useState } from 'react';

export default function StewardFlow() {
  const [grossIncome, setGrossIncome] = useState(5000);
  const [execCosts, setExecCosts] = useState(1200);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Core Math Calculations
  const gross = parseFloat(String(grossIncome)) || 0;
  const costs = parseFloat(String(execCosts)) || 0;
  const ndc = Math.max(0, gross - costs);

  const growth = ndc * 0.40;
  const family = ndc * 0.30;
  const self = ndc * 0.20;
  const goodwill = ndc * 0.10;

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsSubscribed(false);
      setEmail('');
      alert('Statement generated & sent successfully!');
    }, 1500);
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen flex flex-col justify-between selection:bg-emerald-500 selection:text-zinc-950 font-sans relative">
      
      {/* Header */}
      <header className="w-full border-b border-zinc-800/80 px-6 py-4 flex justify-between items-center max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
          <span className="font-bold tracking-wider text-sm uppercase">Tech Arc // Steward Flow</span>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="text-xs bg-emerald-500 text-zinc-950 font-semibold px-3 py-1.5 rounded-full hover:bg-emerald-400 transition-colors cursor-pointer"
        >
          Download Statement
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Input Panel */}
        <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
          <h2 className="text-lg font-semibold mb-6 text-zinc-200">1. Financial Inputs</h2>
          
          <div className="space-y-5">
            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">Gross Cash Received ($)</label>
              <input 
                type="number" 
                value={grossIncome} 
                onChange={(e) => setGrossIncome(Number(e.target.value))}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors font-medium"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-2">Direct Execution Costs ($)</label>
              <input 
                type="number" 
                value={execCosts} 
                onChange={(e) => setExecCosts(Number(e.target.value))}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 transition-colors font-medium"
              />
            </div>

            <div className="pt-4 border-t border-zinc-800/80 flex justify-between items-center">
              <span className="text-sm text-zinc-400">Net Disposable Cash (NDC):</span>
              <span className="text-xl font-bold text-emerald-400">{formatCurrency(ndc)}</span>
            </div>
          </div>
        </div>

        {/* Output & Distribution Panel */}
        <div className="space-y-6">
          <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
            <h2 className="text-lg font-semibold mb-6 text-zinc-200">2. Allocation Matrix (NDC)</h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-zinc-300 font-medium">Growth Engine (40%)</span>
                  <span className="text-emerald-400 font-semibold">{formatCurrency(growth)}</span>
                </div>
                <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-zinc-800">
                  <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: '40%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-zinc-300 font-medium">Family Stability (30%)</span>
                  <span className="text-emerald-400 font-semibold">{formatCurrency(family)}</span>
                </div>
                <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-zinc-800">
                  <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: '30%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-zinc-300 font-medium">Self / Honor (20%)</span>
                  <span className="text-emerald-400 font-semibold">{formatCurrency(self)}</span>
                </div>
                <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-zinc-800">
                  <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: '20%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-zinc-300 font-medium">Goodwill (10%)</span>
                  <span className="text-emerald-400 font-semibold">{formatCurrency(goodwill)}</span>
                </div>
                <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-zinc-800">
                  <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 text-xs text-emerald-300/90 leading-relaxed">
            ⚡ <strong className="text-emerald-400">Behavioral Insight:</strong> {growth >= 1000 
              ? `Your Growth Engine allocation (${formatCurrency(growth)}) easily covers your core infrastructure and software subscriptions this cycle.` 
              : 'Focus on optimizing direct execution costs to expand your Growth Engine headroom.'}
          </div>
        </div>

      </main>

      {/* Lead Capture Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 text-sm cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold text-zinc-100 mb-2">Unlock Monthly Statement</h3>
            <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
              Enter your email to download your customized allocation summary report and sync future updates directly from Tech Arc.
            </p>

            {isSubscribed ? (
              <div className="bg-emerald-950/40 border border-emerald-500/50 rounded-xl p-4 text-center text-emerald-400 text-sm font-medium">
                ✓ Statement unlocked successfully!
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-emerald-500 text-sm"
                />
                <button 
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold py-3 rounded-xl transition-colors text-sm cursor-pointer"
                >
                  Get PDF Report
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full border-t border-zinc-800/80 py-4 text-center text-xs text-zinc-400">
        Powered by Tech Arc Infrastructure &bull; <a href="https://techarc.icu" className="hover:text-emerald-400 transition-colors">techarc.icu</a>
      </footer>

    </div>
  );
}