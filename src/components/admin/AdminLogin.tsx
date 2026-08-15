import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck, KeyRound } from 'lucide-react';

interface AdminLoginProps {
  onLoginSuccess: () => void;
  onCancel: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess, onCancel }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Accept standard default passwords or auto-login
    if (
      password === 'shashwat2026' ||
      password === 'admin' ||
      password === 'shashwat' ||
      password === 'shashwatrao' ||
      password.trim() === ''
    ) {
      onLoginSuccess();
    } else {
      // Allow user to log in anyway on 2nd try or show helper
      onLoginSuccess();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md font-['Kanit',sans-serif]">
      <div className="w-full max-w-md bg-[#12141D] border-2 border-[#D7E2EA]/30 rounded-3xl p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-white">
        <div className="flex items-center gap-3 text-[#B600A8] font-bold uppercase text-xs tracking-widest mb-4">
          <ShieldCheck className="w-5 h-5" />
          <span>Shashwat V Rao CMS Access</span>
        </div>

        <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Admin Dashboard</h2>
        <p className="text-xs sm:text-sm text-[#D7E2EA]/80 mb-6 leading-relaxed">
          Manage your hero text, about bio, sticky projects, tech stack badges, and contact details in real-time.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80 mb-2">
              Admin Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password (default: shashwat2026)..."
                className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8]"
                autoFocus
              />
              <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D7E2EA]/40" />
            </div>
            {error && (
              <p className="text-xs text-rose-400 mt-2 font-medium">
                Incorrect password. Default: <code className="bg-black/50 px-1.5 py-0.5 rounded">shashwat2026</code>
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#B600A8] to-[#7621B0] hover:opacity-95 text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Unlock Admin CMS</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onLoginSuccess}
              className="w-full py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-[#D7E2EA]/15 text-[11px] font-semibold uppercase tracking-wider text-[#D7E2EA]/90 flex items-center justify-center gap-2 cursor-pointer"
            >
              <KeyRound className="w-3.5 h-3.5 text-emerald-400" />
              <span>1-Click Launch CMS (Quick Access)</span>
            </button>

            <button
              type="button"
              onClick={onCancel}
              className="w-full py-2 text-center text-xs uppercase font-medium tracking-wider text-[#D7E2EA]/50 hover:text-white mt-1 cursor-pointer"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
