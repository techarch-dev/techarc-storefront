'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase'; // Adjust path to match your project's supabase client location

export default function StewardFlow() {
  const [grossIncome, setGrossIncome] = useState(5000);
  const [execCosts, setExecCosts] = useState(1200);
  
  const [growthWeight, setGrowthWeight] = useState(40);
  const [familyWeight, setFamilyWeight] = useState(30);
  const [selfWeight, setSelfWeight] = useState(20);
  const [goodwillWeight, setGoodwillWeight] = useState(10);

  const [isCustomMode, setIsCustomMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Core Math Calculations
  const gross = parseFloat(String(grossIncome)) || 0;
  const costs = parseFloat(String(execCosts)) || 0;
  const ndc = Math.max(0, gross - costs);

  const totalWeight = growthWeight + familyWeight + selfWeight + goodwillWeight;

  const growth = ndc * (growthWeight / 100);
  const family = ndc * (familyWeight / 100);
  const self = ndc * (selfWeight / 100);
  const goodwill = ndc * (goodwillWeight / 100);

  const formatCurrency = (amount: number) => {
    return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const handleResetDefaults = () => {
    setGrowthWeight(40);
    setFamilyWeight(30);
    setSelfWeight(20);
    setGoodwillWeight(10);
    setIsCustomMode(false);
  };

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('steward_leads')
        .insert([{ email, source: 'steward-flow-matrix' }]);

      if (error) {
        // Handle duplicate email or constraint errors gracefully
        if (error.code === '23505') {
          setIsSubscribed(true); // Treat existing email as a successful unlock
        } else {
          throw error;
        }
      } else {
        setIsSubscribed(true);
      }

      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubscribed(false);
        setEmail('');
      }, 2000);
    } catch (err: any) {
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen flex flex-col justify-between selection:bg-emerald-500 selection:text-zinc-950 font-sans relative">
      
      {/* Header */}
      <header className="w-full border-b border-zinc-800/80 px-6 py-4 flex justify-between items-center max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
          <span className="font-bold tracking-wider text-sm uppercase">Tech Arc // Steward Flow</span>
        </div>
        <div className="flex items-center gap-3">
          {isCustomMode && (
            <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2.5 py-1 rounded-full">
              Custom Matrix Active
            </span>
          )}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-xs bg-emerald-500 text-zinc-950 font-semibold px-3 py-1.5 rounded-full hover:bg-emerald-400 transition-colors cursor-pointer"
          >
            Save Profile ($1.99)
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Input Panel */}
        <div className="space-y-6">
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

          {/* Allocation Weight Controls */}
          <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-zinc-200">Allocation Matrix Controls</h2>
              {isCustomMode && (
                <button 
                  onClick={handleResetDefaults}
                  className="text-xs text-zinc-400 hover:text-emerald-400 underline transition-colors cursor-pointer"
                >
                  Reset Defaults
                </button>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-zinc-300">Growth Engine</span>
                  <span className="text-emerald-400 font-semibold">{growthWeight}%</span>
                </div>
                <input 
                  type="range" min="0" max="100" value={growthWeight}
                  onChange={(e) => { setGrowthWeight(Number(e.target.value)); setIsCustomMode(true); }}
                  className="w-full accent-emerald-500 bg-zinc-950 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-zinc-300">Family Stability</span>
                  <span className="text-emerald-400 font-semibold">{familyWeight}%</span>
                </div>
                <input 
                  type="range" min="0" max="100" value={familyWeight}
                  onChange={(e) => { setFamilyWeight(Number(e.target.value)); setIsCustomMode(true); }}
                  className="w-full accent-emerald-500 bg-zinc-950 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-zinc-300">Self / Honor</span>
                  <span className="text-emerald-400 font-semibold">{selfWeight}%</span>
                </div>
                <input 
                  type="range" min="0" max="100" value={selfWeight}
                  onChange={(e) => { setSelfWeight(Number(e.target.value)); setIsCustomMode(true); }}
                  className="w-full accent-emerald-500 bg-zinc-950 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-zinc-300">Goodwill</span>
                  <span className="text-emerald-400 font-semibold">{goodwillWeight}%</span>
                </div>
                <input 
                  type="range" min="0" max="100" value={goodwillWeight}
                  onChange={(e) => { setGoodwillWeight(Number(e.target.value)); setIsCustomMode(true); }}
                  className="w-full accent-emerald-500 bg-zinc-950 cursor-pointer"
                />
              </div>

              <div className={`pt-3 text-xs flex justify-between items-center border-t border-zinc-800/80 ${totalWeight !== 100 ? 'text-amber-400' : 'text-zinc-400'}`}>
                <span>Total Allocation:</span>
                <span className="font-bold">{totalWeight}% {totalWeight !== 100 && '(Target: 100%)'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Output & Distribution Panel */}
        <div className="space-y-6">
          <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
            <h2 className="text-lg font-semibold mb-6 text-zinc-200">2. Real-Time Distribution</h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-zinc-300 font-medium">Growth Engine ({growthWeight}%)</span>
                  <span className="text-emerald-400 font-semibold">{formatCurrency(growth)}</span>
                </div>
                <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-zinc-800">
                  <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${Math.min(100, growthWeight)}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-zinc-300 font-medium">Family Stability ({familyWeight}%)</span>
                  <span className="text-emerald-400 font-semibold">{formatCurrency(family)}</span>
                </div>
                <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-zinc-800">
                  <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${Math.min(100, familyWeight)}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-zinc-300 font-medium">Self / Honor ({selfWeight}%)</span>
                  <span className="text-emerald-400 font-semibold">{formatCurrency(self)}</span>
                </div>
                <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-zinc-800">
                  <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${Math.min(100, selfWeight)}%` }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-zinc-300 font-medium">Goodwill ({goodwillWeight}%)</span>
                  <span className="text-emerald-400 font-semibold">{formatCurrency(goodwill)}</span>
                </div>
                <div className="w-full bg-zinc-950 h-2 rounded-full overflow-hidden border border-zinc-800">
                  <div className="bg-emerald-500 h-full transition-all duration-300" style={{ width: `${Math.min(100, goodwillWeight)}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-4 text-xs text-emerald-300/90 leading-relaxed">
            ⚡ <strong className="text-emerald-400">Behavioral Insight:</strong> {growthWeight >= 40 
              ? `Your Growth Engine allocation headroom (${formatCurrency(growth)}) is optimized to aggressively compound your core technical and digital assets.` 
              : 'Your Growth allocation is restricted. Consider raising your growth threshold to sustain long-term infrastructure scaling.'}
          </div>
        </div>

      </main>

      {/* Upgrade / Save Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-100 text-sm cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold text-zinc-100 mb-2">Unlock Custom Profile Save</h3>
            <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
              Lock in your custom allocation matrix weights, export historical monthly statements, and sync your micro-SaaS preferences.
            </p>

            {isSubscribed ? (
              <div className="bg-emerald-950/40 border border-emerald-500/50 rounded-xl p-4 text-center text-emerald-400 text-sm font-medium">
                ✓ Profile saved to database successfully!
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
                {errorMessage && <p className="text-xs text-rose-400">{errorMessage}</p>}
                <button 
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold py-3 rounded-xl transition-colors text-sm cursor-pointer"
                >
                  Save Profile & Continue
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