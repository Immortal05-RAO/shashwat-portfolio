import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { ArrowUpRight } from 'lucide-react';

interface FooterSectionProps {
  onOpenContact: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 pt-20 pb-12 border-t border-[#D7E2EA]/15 z-30">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <FadeIn delay={0} y={30} className="mb-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#B600A8] block">
            06 — Contact
          </span>
        </FadeIn>

        <FadeIn delay={0.1} y={40} className="mb-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white tracking-tight max-w-3xl leading-tight">
            Have an idea worth building?
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} y={30} className="mb-10">
          <p className="hero-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight">
            Let&apos;s build it.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="mb-16">
          <ContactButton label="Start A Project" onClick={onOpenContact} />
        </FadeIn>

        {/* Social Links & Direct Contacts */}
        <FadeIn delay={0.4} y={20} className="w-full pt-12 border-t border-[#D7E2EA]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs uppercase font-semibold text-[#D7E2EA]/70 tracking-widest flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span>© {new Date().getFullYear()} Shashwat V Rao</span>
            <span>•</span>
            <span className="text-[#B600A8]">Co-Founder, Flowchain</span>
            <span>•</span>
            <span className="text-[#D7E2EA]/50">Bengaluru, KA, India</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase font-medium tracking-wider">
            <a
              href="mailto:shashwatrao4@gmail.com"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B600A8]" />
            </a>
            <a
              href="tel:+919108324437"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <span>+91 91083 24437</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 border border-[#D7E2EA]/30 px-3 py-1 rounded-full text-[10px]"
            >
              <span>Back to top ↑</span>
            </button>
          </div>
        </FadeIn>

      </div>
    </footer>
  );
};
