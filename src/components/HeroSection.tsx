import React from 'react';
import { Magnet } from './Magnet';
import { ContactButton } from './ContactButton';
import { FadeIn } from './FadeIn';
import avatarTransparent from '../assets/avatar_transparent.png';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip px-4 sm:px-8 md:px-10 bg-[#0C0C0C]">
      {/* 1. NAVBAR */}
      <FadeIn delay={0} y={-20} className="w-full pt-5 sm:pt-6 md:pt-8 z-30">
        <nav className="flex items-center justify-between w-full text-[#D7E2EA] font-medium uppercase tracking-wider text-[11px] sm:text-sm md:text-lg lg:text-[1.4rem]">
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            About
          </a>
          <a
            href="#capabilities"
            onClick={(e) => { e.preventDefault(); scrollToSection('capabilities'); }}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Capabilities
          </a>
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); onOpenContact(); }}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            Contact
          </a>
        </nav>
      </FadeIn>

      {/* 2. MASSIVE HERO HEADING */}
      <div className="overflow-hidden w-full z-10 mt-1 sm:mt-2 md:mt-0 pt-1 flex justify-center">
        <FadeIn delay={0.15} y={40} className="w-full">
          <svg className="w-full h-auto max-h-[14vh] sm:max-h-[22vh] select-none" viewBox="0 0 1400 170" fill="none">
            <defs>
              <linearGradient id="heroGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#646973" />
                <stop offset="100%" stopColor="#BBCCD7" />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="url(#heroGradient)"
              style={{ fontFamily: 'Kanit, sans-serif', fontWeight: 900, fontSize: '138px', letterSpacing: '-0.03em' }}
            >
              HI, I&apos;M SHASHWAT
            </text>
          </svg>
        </FadeIn>
      </div>

      {/* 3. MAGNETIC PORTRAIT / CENTERPIECE VISUAL */}
      <div className="absolute left-1/2 -translate-x-1/2 z-30 top-[54%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-[-20px] md:bottom-[-30px] pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-[230px] sm:w-[350px] md:w-[440px] lg:w-[500px]"
          >
            <div className="relative group cursor-pointer flex flex-col items-center">
              <img
                src={avatarTransparent}
                alt="Shashwat V Rao - AI & Automation Developer"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03] select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 bg-[#0C0C0C]/85 backdrop-blur-md border border-[#D7E2EA]/30 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap text-[9px] sm:text-xs md:text-sm font-semibold tracking-widest text-[#D7E2EA] flex items-center gap-1.5 sm:gap-2 shadow-lg z-40">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>CO-FOUNDER @ FLOWCHAIN • AI/ML</span>
              </div>
            </div>
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. BOTTOM BAR */}
      <div className="flex items-end justify-between w-full pb-5 sm:pb-8 md:pb-10 z-30 gap-2">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[130px] sm:max-w-[220px] md:max-w-[280px]"
             style={{ fontSize: 'clamp(0.65rem, 1.3vw, 1.35rem)' }}>
            a cs & ai developer driven by crafting striking & automated digital products
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Contact Me" onClick={onOpenContact} className="px-5 py-2.5 sm:px-10 sm:py-3.5" />
        </FadeIn>
      </div>
    </section>
  );
};
