import React, { useEffect, useRef, useState } from 'react';
import { ImagePlaceholder } from './ImagePlaceholder';

const MARQUEE_LABELS_ROW1 = [
  'FLOWCHAIN AGENT ENGINE',
  'SHOPIFY INTENT ANALYTICS',
  'TABLEFLOW QR MENU',
  'SYNTERVIEW SECURITY CODE',
  'AI VOICE RECEPTIONIST',
  'ITR DOCUMENT PARSING',
];

const MARQUEE_LABELS_ROW2 = [
  'LOCAL BUSINESS LEAD AI',
  'IDEMPOTENT EVENT AGGREGATION',
  'REALTIME KITCHEN DASHBOARD',
  'JWT ROTATION & LOCKOUT',
  'MULTILINGUAL CLINIC VOICE',
  'FLOWCHAIN ENTERPRISE SYSTEM',
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

  const row1LabelsTripled = [...MARQUEE_LABELS_ROW1, ...MARQUEE_LABELS_ROW1, ...MARQUEE_LABELS_ROW1];
  const row2LabelsTripled = [...MARQUEE_LABELS_ROW2, ...MARQUEE_LABELS_ROW2, ...MARQUEE_LABELS_ROW2];

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
          {row1LabelsTripled.map((label, idx) => (
            <div
              key={`r1-${idx}`}
              className="w-[280px] sm:w-[360px] md:w-[420px] h-[170px] sm:h-[220px] md:h-[260px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105"
            >
              <ImagePlaceholder label={label} />
            </div>
          ))}
        </div>

        {/* ROW 2: Moves Left on Scroll */}
        <div
          className="flex gap-3 w-max"
          style={{ transform: row2Transform, willChange: 'transform' }}
        >
          {row2LabelsTripled.map((label, idx) => (
            <div
              key={`r2-${idx}`}
              className="w-[280px] sm:w-[360px] md:w-[420px] h-[170px] sm:h-[220px] md:h-[260px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105"
            >
              <ImagePlaceholder label={label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
