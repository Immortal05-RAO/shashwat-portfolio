import React, { useEffect, useRef, useState } from 'react';
import { createProjectPlaceholder } from '../utils/placeholders';

const MARQUEE_MOCKUPS_ROW1 = [
  createProjectPlaceholder({ title: 'Flowchain AI Engine', subtitle: 'Agent Orchestration Pipeline', tag: 'AI Agency', variant: 'workflow', themeColor: '#B600A8', accentColor: '#7621B0' }),
  createProjectPlaceholder({ title: 'Intent Scoring SaaS', subtitle: 'Shopify Real-time Behavior Analytics', tag: 'Shopify AI', variant: 'analytics', themeColor: '#10B981', accentColor: '#3B82F6' }),
  createProjectPlaceholder({ title: 'TableFlow QR Menu', subtitle: 'Customer Instant Order Interface', tag: 'Full-Stack', variant: 'mobile', themeColor: '#F59E0B', accentColor: '#EF4444' }),
  createProjectPlaceholder({ title: 'Synterview Security', subtitle: 'JWT Refresh Rotation & Middleware', tag: 'Security', variant: 'code', themeColor: '#EC4899', accentColor: '#8B5CF6' }),
  createProjectPlaceholder({ title: 'AI Voice Receptionist', subtitle: 'Vapi & WhatsApp Lead Capture', tag: 'Voice AI', variant: 'workflow', themeColor: '#06B6D4', accentColor: '#10B981' }),
  createProjectPlaceholder({ title: 'ITR CA Automation', subtitle: 'Document Parsing & Tax Pipelines', tag: 'Automation', variant: 'dashboard', themeColor: '#3B82F6', accentColor: '#B600A8' }),
];

const MARQUEE_MOCKUPS_ROW2 = [
  createProjectPlaceholder({ title: 'Local Business Lead AI', subtitle: 'Google Maps Prospect Intelligence', tag: 'Lead Gen', variant: 'analytics', themeColor: '#10B981', accentColor: '#F59E0B' }),
  createProjectPlaceholder({ title: 'Idempotent Processing', subtitle: 'E-Commerce Data Stream Aggregation', tag: 'Architecture', variant: 'dashboard', themeColor: '#7621B0', accentColor: '#06B6D4' }),
  createProjectPlaceholder({ title: 'Real-time Kitchen Dashboard', subtitle: 'Table Tracking & Order Fulfillment', tag: 'Admin SaaS', variant: 'mobile', themeColor: '#EF4444', accentColor: '#3B82F6' }),
  createProjectPlaceholder({ title: 'Zod Validation Pipeline', subtitle: 'Account Lockout & Fallback Retry', tag: 'Backend Security', variant: 'code', themeColor: '#8B5CF6', accentColor: '#10B981' }),
  createProjectPlaceholder({ title: 'Multilingual Clinic Agent', subtitle: 'Appointment Booking Knowledge Base', tag: 'Conversational AI', variant: 'workflow', themeColor: '#06B6D4', accentColor: '#EC4899' }),
  createProjectPlaceholder({ title: 'Flowchain Enterprise', subtitle: 'Custom Enterprise System Integration', tag: 'Agency System', variant: 'dashboard', themeColor: '#B600A8', accentColor: '#10B981' }),
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
                alt={`AI System Preview ${idx}`}
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
                alt={`AI System Preview ${idx}`}
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
