import React, { useEffect, useRef, useState } from 'react';

const ROW1_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const ROW2_IMAGES = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1ImagesTripled = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
  const row2ImagesTripled = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

  const row1Transform = `translateX(${scrollOffset - 200}px)`;
  const row2Transform = `translateX(${-(scrollOffset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full"
    >
      <div className="flex flex-col gap-3">
        {/* ROW 1: Moves Right on Scroll */}
        <div
          className="flex gap-3 w-max"
          style={{ transform: row1Transform, willChange: 'transform' }}
        >
          {row1ImagesTripled.map((imgUrl, idx) => (
            <div
              key={`r1-${idx}`}
              className="w-[300px] sm:w-[380px] md:w-[420px] h-[190px] sm:h-[240px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border border-[#D7E2EA]/10 shadow-lg"
            >
              <img
                src={imgUrl}
                alt={`Product Preview ${idx}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* ROW 2: Moves Left on Scroll */}
        <div
          className="flex gap-3 w-max"
          style={{ transform: row2Transform, willChange: 'transform' }}
        >
          {row2ImagesTripled.map((imgUrl, idx) => (
            <div
              key={`r2-${idx}`}
              className="w-[300px] sm:w-[380px] md:w-[420px] h-[190px] sm:h-[240px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border border-[#D7E2EA]/10 shadow-lg"
            >
              <img
                src={imgUrl}
                alt={`Product Preview ${idx}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
