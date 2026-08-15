import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Check, Sparkles, User } from 'lucide-react';

export const HeroAboutManager: React.FC = () => {
  const { data, updateHero, updateAbout } = usePortfolio();

  const [tagline, setTagline] = useState(data.hero.tagline);
  const [badgeText, setBadgeText] = useState(data.hero.badgeText);
  const [bioText, setBioText] = useState(data.about.bioText);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateHero({ tagline, badgeText });
    updateAbout({ bioText, highlightWords: data.about.highlightWords });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-black uppercase text-white">Hero & About CMS</h3>
          <p className="text-xs text-[#D7E2EA]/70 mt-1">
            Update the hero section tagline, badge overlay text, and full bio paragraph.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#B600A8] to-[#7621B0] hover:opacity-90 text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 shadow-lg"
        >
          <Check className="w-4 h-4" />
          <span>{saved ? 'Saved Successfully!' : 'Save Hero & About'}</span>
        </button>
      </div>

      {/* Hero Settings */}
      <div className="p-6 rounded-3xl bg-[#12141D] border border-[#D7E2EA]/15 flex flex-col gap-5">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#B600A8]">
          <Sparkles className="w-4 h-4" />
          <span>Hero Section Settings</span>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
            Bottom Hero Tagline
          </label>
          <textarea
            rows={2}
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B600A8]"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
            3D Avatar Badge Text
          </label>
          <input
            type="text"
            value={badgeText}
            onChange={(e) => setBadgeText(e.target.value)}
            className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B600A8]"
          />
        </div>
      </div>

      {/* About Settings */}
      <div className="p-6 rounded-3xl bg-[#12141D] border border-[#D7E2EA]/15 flex flex-col gap-5">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#7621B0]">
          <User className="w-4 h-4" />
          <span>About Me Bio Paragraph</span>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
            Full Bio Text (Reveals character-by-character on scroll)
          </label>
          <textarea
            rows={5}
            value={bioText}
            onChange={(e) => setBioText(e.target.value)}
            className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#7621B0]"
          />
        </div>
      </div>
    </div>
  );
};
