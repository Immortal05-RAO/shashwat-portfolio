import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';

interface AdminLoginProps {
  onLoginSuccess: () => void;
  onCancel: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess, onCancel }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default password check
    if (password === 'shashwat2026' || password === 'admin') {
      onLoginSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-md bg-[#12141D] border border-[#D7E2EA]/20 rounded-3xl p-8 shadow-2xl text-white">
        <div className="flex items-center gap-3 text-[#B600A8] font-bold uppercase text-xs tracking-widest mb-4">
          <ShieldCheck className="w-5 h-5" />
          <span>Shashwat V Rao CMS Access</span>
        </div>

        <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Admin Login</h2>
        <p className="text-sm text-[#D7E2EA]/70 mb-6 leading-relaxed">
          Enter your admin password to open the portfolio Content Management System.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter admin password..."
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

          <div className="flex items-center gap-3 mt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 py-3 rounded-xl border border-[#D7E2EA]/20 bg-neutral-900 hover:bg-neutral-800 text-xs uppercase font-bold tracking-wider text-[#D7E2EA]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#B600A8] to-[#7621B0] hover:opacity-95 text-xs uppercase font-bold tracking-wider text-white flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Unlock CMS</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
