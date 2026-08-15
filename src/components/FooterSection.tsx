import React from 'react';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface FooterSectionProps {
  onOpenContact: () => void;
  onOpenAdmin: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact, onOpenAdmin }) => {
  const { data } = usePortfolio();

  return (
    <footer id="contact" className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 pt-24 pb-12 border-t border-[#D7E2EA]/15 z-30">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* Main CTA & Contact Details Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div>
            <FadeIn delay={0} y={20}>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#B600A8] block mb-3">
                // LET'S CONNECT & BUILD
              </span>
            </FadeIn>
            
            <FadeIn delay={0.1} y={30}>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight leading-none">
                Start A Project
              </h2>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} y={20}>
            <ContactButton
              label="Send Message / Proposal"
              onClick={onOpenContact}
              className="px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm"
            />
          </FadeIn>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#D7E2EA]/10">
          <FadeIn delay={0.25} y={20}>
            <a href={`mailto:${data.contact.email}`} className="p-6 rounded-2xl bg-neutral-900/60 border border-[#D7E2EA]/15 flex items-start gap-4 hover:border-[#B600A8]/50 transition-colors group">
              <Mail className="w-5 h-5 text-[#B600A8] group-hover:scale-110 transition-transform" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D7E2EA]/60 block mb-1">Direct Email</span>
                <span className="text-sm font-semibold text-white group-hover:text-[#B600A8] transition-colors">{data.contact.email}</span>
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={0.3} y={20}>
            <a href={`tel:${data.contact.phone.replace(/\s+/g, '')}`} className="p-6 rounded-2xl bg-neutral-900/60 border border-[#D7E2EA]/15 flex items-start gap-4 hover:border-[#7621B0]/50 transition-colors group">
              <Phone className="w-5 h-5 text-[#7621B0] group-hover:scale-110 transition-transform" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D7E2EA]/60 block mb-1">Phone / WhatsApp</span>
                <span className="text-sm font-semibold text-white group-hover:text-[#7621B0] transition-colors">{data.contact.phone}</span>
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={0.35} y={20}>
            <div className="p-6 rounded-2xl bg-neutral-900/60 border border-[#D7E2EA]/15 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-emerald-400" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D7E2EA]/60 block mb-1">Location</span>
                <span className="text-sm font-semibold text-white">{data.contact.location}</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#D7E2EA]/10 text-xs text-[#D7E2EA]/60 font-light">
          <p>© {new Date().getFullYear()} {data.contact.name} ({data.contact.role}). All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href={data.contact.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={data.contact.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
            
            {/* Admin CMS Button */}
            <button
              onClick={onOpenAdmin}
              className="px-3 py-1 rounded-lg bg-neutral-800 hover:bg-[#B600A8] text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>Admin CMS</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
