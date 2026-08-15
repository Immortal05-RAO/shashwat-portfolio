import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const bioText = "I’m Shashwat V Rao, a Computer Science and Engineering student specializing in AI & Machine Learning. I build AI-powered products, automation systems, SaaS platforms, and high-performance web experiences. I enjoy taking ideas from concept to a working product—from architecture and backend systems to polished frontend experiences. Let's build something incredible together!";

  return (
    <section id="about" className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 overflow-hidden">
      
      {/* 4 DECORATIVE 3D FLOATING CORNER ICONS */}
      {/* Top-Left: Moon Icon */}
      <div className="absolute top-[2%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-40} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="Decorative Moon Icon"
            className="w-[65px] sm:w-[130px] md:w-[190px] h-auto object-contain animate-float-slow opacity-60 sm:opacity-80"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[4%] left-[2%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-40} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="Decorative 3D Object"
            className="w-[55px] sm:w-[110px] md:w-[160px] h-auto object-contain animate-float-slow opacity-60 sm:opacity-80"
            style={{ animationDelay: '1.5s' }}
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego Icon */}
      <div className="absolute top-[2%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={40} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="Decorative Lego Icon"
            className="w-[65px] sm:w-[130px] md:w-[190px] h-auto object-contain animate-float-slow opacity-60 sm:opacity-80"
            style={{ animationDelay: '0.8s' }}
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[4%] right-[2%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.3} x={40} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="Decorative 3D Group"
            className="w-[70px] sm:w-[140px] md:w-[200px] h-auto object-contain animate-float-slow opacity-60 sm:opacity-80"
            style={{ animationDelay: '2.2s' }}
          />
        </FadeIn>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight select-none"
            style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Character-by-character Scroll Opacity Animated Text */}
        <div className="mb-14 sm:mb-20 md:mb-24 max-w-[640px]">
          <AnimatedText
            text={bioText}
            className="text-[#D7E2EA] font-medium leading-relaxed"
          />
        </div>

        {/* Action Button */}
        <FadeIn delay={0.2} y={30}>
          <ContactButton label="Let's build together" onClick={onOpenContact} />
        </FadeIn>
      </div>

    </section>
  );
};
