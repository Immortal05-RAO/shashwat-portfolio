import React from 'react';
import { FadeIn } from './FadeIn';

interface CapabilityItem {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

const CAPABILITIES: CapabilityItem[] = [
  {
    number: "01",
    title: "AI & LLM Systems",
    description: "Building intent intelligence platforms, custom AI agents, conversational AI workflows, scoring systems, and integrating state-of-the-art LLM APIs for automated reasoning.",
    tags: ["AI APIs", "AI Agents", "Prompt Engineering", "Conversational AI", "AI SaaS"]
  },
  {
    number: "02",
    title: "Automation Workflows",
    description: "Designing end-to-end business process automations using n8n, Meta WhatsApp API, Voice AI (Vapi), web scraper pipelines, and automated client filing workflows.",
    tags: ["n8n", "WhatsApp API", "Voice AI", "Lead Research", "Workflow Automation"]
  },
  {
    number: "03",
    title: "Full-Stack SaaS Architecture",
    description: "Architecting scalable full-stack web platforms with Next.js, NestJS, React, Node.js, and MongoDB with production deployments on Vercel & Railway.",
    tags: ["Next.js", "NestJS", "React", "MongoDB", "REST APIs", "Node.js"]
  },
  {
    number: "04",
    title: "Backend Security & Engineering",
    description: "Engineering resilient RESTful services with JWT refresh-token rotation, rate limiting, account lockout protection, Zod schema validation, and fallback mechanisms.",
    tags: ["Authentication", "JWT Security", "Rate Limiting", "Zod", "Middleware"]
  },
  {
    number: "05",
    title: "Web & Digital Systems",
    description: "Creating sleek, modern, conversion-focused web applications and digital agency solutions via Flowchain, prioritizing micro-interactions and visual excellence.",
    tags: ["Flowchain Agency", "Responsive UI", "Framer Motion", "Tailwind CSS", "Vite"]
  }
];

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-20">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-28 text-center">
          <h2
            className="font-black uppercase tracking-tight leading-none text-[#0C0C0C] select-none"
            style={{ fontSize: 'clamp(2.8rem, 11vw, 150px)' }}
          >
            Capabilities
          </h2>
        </FadeIn>

        {/* Capabilities Vertical List */}
        <div className="divide-y divide-[#0C0C0C]/15 border-t border-b border-[#0C0C0C]/15">
          {CAPABILITIES.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.1} y={30}>
              <div className="py-8 sm:py-10 md:py-12 flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-12 group hover:bg-[#0C0C0C]/[0.02] transition-colors duration-300 px-3 sm:px-6 rounded-2xl">
                
                {/* Left Number */}
                <div
                  className="font-black text-[#0C0C0C] leading-none tracking-tight select-none opacity-90 group-hover:text-[#B600A8] transition-colors duration-300"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
                >
                  {item.number}
                </div>

                {/* Right Title + Description + Tags */}
                <div className="flex-1 flex flex-col gap-3 md:gap-4 pt-1">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.title}
                  </h3>
                  
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C]/75 max-w-2xl"
                    style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.25rem)' }}
                  >
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 rounded-full text-xs sm:text-sm font-medium uppercase text-[#0C0C0C]/80 tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
