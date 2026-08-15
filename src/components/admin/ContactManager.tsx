import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Check, Mail, Phone, MapPin, Globe, Share2, Link, UserCheck } from 'lucide-react';

export const ContactManager: React.FC = () => {
  const { data, updateContact } = usePortfolio();

  const [formData, setFormData] = useState({ ...data.contact });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateContact(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-black uppercase text-white">Contact Info & Social Links</h3>
          <p className="text-xs text-[#D7E2EA]/70 mt-1">
            Update your direct email, phone, location, role title, and social media URLs.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#B600A8] to-[#7621B0] hover:opacity-90 text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 shadow-lg"
        >
          <Check className="w-4 h-4" />
          <span>{saved ? 'Saved Changes!' : 'Save Contact Info'}</span>
        </button>
      </div>

      <div className="p-6 rounded-3xl bg-[#12141D] border border-[#D7E2EA]/15 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="flex items-center gap-2 text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
            <UserCheck className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>Full Name</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8]"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
            <UserCheck className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>Role / Title</span>
          </label>
          <input
            type="text"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8]"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
            <Mail className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>Email Address</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8]"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
            <Phone className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>Phone Number</span>
          </label>
          <input
            type="text"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="flex items-center gap-2 text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
            <MapPin className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>Location</span>
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8]"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
            <Globe className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>GitHub Profile URL</span>
          </label>
          <input
            type="text"
            value={formData.github}
            onChange={(e) => setFormData({ ...formData, github: e.target.value })}
            className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8]"
          />
        </div>

        <div>
          <label className="flex items-center gap-2 text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
            <Link className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>LinkedIn Profile URL</span>
          </label>
          <input
            type="text"
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8]"
          />
        </div>

        <div className="md:col-span-2">
          <label className="flex items-center gap-2 text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
            <Share2 className="w-3.5 h-3.5 text-[#B600A8]" />
            <span>Twitter / X Profile URL</span>
          </label>
          <input
            type="text"
            value={formData.twitter}
            onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
            className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#B600A8]"
          />
        </div>
      </div>
    </div>
  );
};
