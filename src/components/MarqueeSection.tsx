import React, { useEffect, useRef, useState } from 'react';
import { createStandardPlaceholder } from '../utils/placeholders';

const MARQUEE_MOCKUPS_ROW1 = [
  createStandardPlaceholder('FLOWCHAIN AGENT ENGINE'),
  createStandardPlaceholder('SHOPIFY INTENT ANALYTICS'),
  createStandardPlaceholder('TABLEFLOW QR MENU'),
  createStandardPlaceholder('SYNTERVIEW SECURITY CODE'),
  createStandardPlaceholder('AI VOICE RECEPTIONIST'),
  createStandardPlaceholder('ITR DOCUMENT PARSING'),
];

const MARQUEE_MOCKUPS_ROW2 = [
  createStandardPlaceholder('LOCAL BUSINESS LEAD AI'),
  createStandardPlaceholder('IDEMPOTENT EVENT AGGREGATION'),
  createStandardPlaceholder('REALTIME KITCHEN DASHBOARD'),
  createStandardPlaceholder('JWT ROTATION & LOCKOUT'),
  createStandardPlaceholder('MULTILINGUAL CLINIC VOICE'),
  createStandardPlaceholder('FLOWCHAIN ENTERPRISE SYSTEM'),
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

  const row1ImagesTripled = [...MARQUEE_MOCKUPS_ROW1, ...MARQUEE_MOCKUPS_ROW1, ...MARQUEE_MOCKUPS_ROW1];
  const row2ImagesTripled = [...MARQUEE_MOCKUPS_ROW2, ...MARQUEE_MOCKUPS_ROW2, ...MARQUEE_MOCKUPS_ROW2];

  const row1Transform = `translateX(${scrollOffset - 200}px)`;
  const row2Transform = `translateX(${-(scrollOffset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-4 sm:pt-8 md:pt-16 pb-10 overflow-hidden w-full"
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
              className="w-[280px] sm:w-[360px] md:w-[420px] h-[170px] sm:h-[220px] md:h-[260px] flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border border-[#D7E2EA]/15 shadow-xl transition-transform duration-500 hover:scale-105"
            >
              <img
                src={imgUrl}
                alt={`System Placeholder ${idx}`}
                loading="lazy"
                className="w-full h-full object-cover"
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
              className="w-[280px] sm:w-[360px] md:w-[420px] h-[170px] sm:h-[220px] md:h-[260px] flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border border-[#D7E2EA]/15 shadow-xl transition-transform duration-500 hover:scale-105"
            >
              <img
                src={imgUrl}
                alt={`System Placeholder ${idx}`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
