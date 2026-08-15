import React, { useState, useRef } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { ProjectsManager } from './ProjectsManager';
import { HeroAboutManager } from './HeroAboutManager';
import { SkillsExperienceManager } from './SkillsExperienceManager';
import { ContactManager } from './ContactManager';
import { FolderKanban, Sparkles, Code2, PhoneCall, Download, Upload, RotateCcw, X, ShieldAlert } from 'lucide-react';

interface AdminDashboardProps {
  onClose: () => void;
}

type TabType = 'projects' | 'hero-about' | 'skills-experience' | 'contact';

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const { exportJSON, importJSON, resetToDefaults, data } = usePortfolio();
  const [activeTab, setActiveTab] = useState<TabType>('projects');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        if (text) {
          const success = importJSON(text);
          if (success) {
            setImportStatus('JSON Data imported successfully!');
          } else {
            setImportStatus('Import failed. Invalid JSON structure.');
          }
          setTimeout(() => setImportStatus(null), 4000);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0C0C0C] text-[#D7E2EA] overflow-y-auto flex flex-col font-['Kanit',sans-serif]">
      {/* CMS Header Bar */}
      <header className="sticky top-0 z-40 bg-[#12141D]/90 backdrop-blur-md border-b border-[#D7E2EA]/15 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#B600A8] to-[#7621B0] flex items-center justify-center font-bold text-white shadow-lg">
            S
          </div>
          <div>
            <h1 className="text-lg font-black uppercase text-white tracking-tight leading-none">
              Shashwat V Rao CMS
            </h1>
            <span className="text-[10px] font-semibold uppercase text-emerald-400 tracking-widest">
              Live Content Management Dashboard
            </span>
          </div>
        </div>

        {/* Global Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Export JSON */}
          <button
            onClick={exportJSON}
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5 border border-white/10"
            title="Download JSON backup"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export JSON</span>
          </button>

          {/* Import JSON */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5 border border-white/10"
            title="Import JSON backup"
          >
            <Upload className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Import JSON</span>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleImportFile}
              className="hidden"
            />
          </button>

          {/* Reset to Defaults */}
          <button
            onClick={() => {
              if (confirm('Reset all CMS content back to original portfolio defaults?')) {
                resetToDefaults();
              }
            }}
            className="p-2 sm:px-3 sm:py-2 rounded-xl bg-neutral-800 hover:bg-rose-900 text-rose-400 hover:text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-rose-500/20"
            title="Reset Defaults"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          {/* Exit CMS */}
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#B600A8] to-[#7621B0] hover:opacity-90 text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5 shadow-lg ml-2"
          >
            <span>Exit CMS</span>
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Import Status Alert */}
      {importStatus && (
        <div className="bg-[#B600A8]/20 border-b border-[#B600A8]/40 px-6 py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-[#B600A8]" />
          <span>{importStatus}</span>
        </div>
      )}

      {/* Main CMS Layout */}
      <div className="max-w-7xl w-full mx-auto p-4 sm:p-8 flex flex-col md:flex-row gap-8 flex-1">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 flex-shrink-0 flex flex-col gap-2">
          <button
            onClick={() => setActiveTab('projects')}
            className={`w-full px-4 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-3 transition-all ${
              activeTab === 'projects'
                ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg'
                : 'bg-[#12141D] hover:bg-[#1A1D28] text-[#D7E2EA]/70'
            }`}
          >
            <FolderKanban className="w-4 h-4" />
            <span>Projects ({data.projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('hero-about')}
            className={`w-full px-4 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-3 transition-all ${
              activeTab === 'hero-about'
                ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg'
                : 'bg-[#12141D] hover:bg-[#1A1D28] text-[#D7E2EA]/70'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Hero & About</span>
          </button>

          <button
            onClick={() => setActiveTab('skills-experience')}
            className={`w-full px-4 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-3 transition-all ${
              activeTab === 'skills-experience'
                ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg'
                : 'bg-[#12141D] hover:bg-[#1A1D28] text-[#D7E2EA]/70'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Skills & Experience</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`w-full px-4 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-3 transition-all ${
              activeTab === 'contact'
                ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-lg'
                : 'bg-[#12141D] hover:bg-[#1A1D28] text-[#D7E2EA]/70'
            }`}
          >
            <PhoneCall className="w-4 h-4" />
            <span>Contact & Socials</span>
          </button>
        </aside>

        {/* Tab Content Panel */}
        <main className="flex-1 bg-[#12141D]/60 border border-[#D7E2EA]/15 rounded-3xl p-6 sm:p-8">
          {activeTab === 'projects' && <ProjectsManager />}
          {activeTab === 'hero-about' && <HeroAboutManager />}
          {activeTab === 'skills-experience' && <SkillsExperienceManager />}
          {activeTab === 'contact' && <ContactManager />}
        </main>
      </div>
    </div>
  );
};
