import { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';

export function AdminPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const documentRef = useRef<HTMLDivElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'TechArc26!') {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  const handleDownload = () => {
    if (!documentRef.current) return;
    const opt = {
      margin: 0,
      filename: 'Candela_Energy_Retainer.pdf',
      image: { type: 'jpeg' as 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm' as 'mm', format: 'a4', orientation: 'portrait' as 'portrait' }
    };
    html2pdf().set(opt).from(documentRef.current).save();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-obsidian-950">
        <form onSubmit={handleLogin} className="bg-white/5 p-8 rounded-lg shadow-xl border border-white/10 w-96 backdrop-blur-sm">
          <h2 className="text-cyan-glow text-sm font-mono font-bold mb-6 tracking-[0.2em] uppercase text-center">System Access</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 bg-black/50 text-white rounded border border-white/10 focus:outline-none focus:border-cyan-glow font-mono text-sm"
            placeholder="Enter passkey..."
            autoFocus
          />
          {error && <p className="text-red-400 text-xs font-mono mb-4 text-center">Access Denied</p>}
          <button type="submit" className="w-full bg-cyan-glow/10 text-cyan-glow border border-cyan-glow/30 p-3 rounded hover:bg-cyan-glow/20 transition-colors font-mono text-sm uppercase tracking-widest">
            Authenticate
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8 flex flex-col items-center">
      <button 
        onClick={handleDownload}
        className="mb-8 px-6 py-3 bg-obsidian-950 text-white font-mono text-sm tracking-wider rounded shadow-lg hover:bg-slate-800 transition-colors"
      >
        Export PDF
      </button>

      <div 
        ref={documentRef} 
        className="bg-white shadow-2xl p-[20mm] w-[210mm] min-h-[297mm] text-slate-900"
      >
        <div className="border-b-2 border-slate-900 pb-2 mb-8 text-right">
          <h1 className="text-2xl font-bold uppercase tracking-widest m-0 text-slate-900">Tech Arc</h1>
          <p className="text-xs text-slate-500 font-mono mt-1">Architecture | Technical Design | IT Infrastructure</p>
        </div>
        
        <div 
          contentEditable 
          suppressContentEditableWarning
          className="outline-none leading-relaxed text-sm"
        >
          <h2 className="text-lg font-bold mb-4">Retainer Agreement & Technical Proposal</h2>
          <p className="mb-1"><strong>Prepared For:</strong> Candela Energy Limited</p>
          <p className="mb-6"><strong>Prepared By:</strong> Dr. Peter C. Onuorah</p>
          <p className="text-slate-400 italic">Delete this text and paste your proposal here...</p>
        </div>
      </div>
    </div>
  );
}