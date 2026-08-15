import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { Zap, Bot, ChevronDown, ChevronUp } from 'lucide-react';

export interface ProjectData {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  techStack: string[];
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
  liveUrl?: string;
  githubUrl?: string;
}

const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: 'flowchain',
    number: '01',
    category: 'AI & Automation Agency',
    title: 'Flowchain Agency',
    subtitle: 'Co-Founded by Shashwat V Rao & Dev U',
    description: 'An AI, automation, web development, and digital systems agency building custom AI agents, business process automation, and high-performance digital architecture for enterprises.',
    highlights: ['Business Process Automation', 'Custom AI Agents', 'Web Systems Architecture', 'Enterprise Integration'],
    techStack: ['n8n', 'AI APIs', 'Node.js', 'React', 'Automation Pipelines'],
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    liveUrl: 'https://flowchain.agency'
  },
  {
    id: 'ai-shopping',
    number: '02',
    category: 'AI SaaS / E-Commerce Intelligence',
    title: 'AI Shopping Intelligence',
    subtitle: 'Shopify Intent Detection & Scoring Engine',
    description: 'An AI-powered system designed to analyze shopping intent and customer behavior in real-time with idempotent data processing, scoring algorithms, and seamless Shopify API aggregation layers.',
    highlights: ['Shopping-Intent Detection', 'Idempotent Data Processing', 'Real-time Scoring Systems', 'Shopify Store Integration'],
    techStack: ['Shopify APIs', 'JavaScript/Node.js', 'AI Models', 'REST APIs', 'Databases'],
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    id: 'tableflow',
    number: '03',
    category: 'Full-Stack SaaS Architecture',
    title: 'TableFlow',
    subtitle: 'QR Restaurant Ordering System',
    description: 'Full-stack QR ordering platform featuring customer-side menu navigation & instant order placement alongside a real-time restaurant admin dashboard for table tracking and order fulfillment.',
    highlights: ['QR Code Table Association', 'Customer Order UX', 'Real-time Admin Dashboard', 'Microservice API Layer'],
    techStack: ['Next.js', 'NestJS', 'MongoDB', 'REST APIs', 'Vercel', 'Railway'],
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  },
  {
    id: 'synterview',
    number: '04',
    category: 'AI SaaS & Backend Security',
    title: 'Synterview',
    subtitle: 'AI Mock Interview & Security System',
    description: 'AI mock interview application engineered with rigorous security: JWT refresh-token rotation, rate limiting, account lockout protection, Zod validation, and AI service retry/fallback mechanisms.',
    highlights: ['AI Interview Generation', 'Refresh-Token Rotation', 'Rate Limiting & Lockout', 'AI Fallback Resilience'],
    techStack: ['Node.js', 'Express', 'MongoDB', 'Zod', 'AI APIs', 'Railway'],
    col1Img1: 'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
    col1Img2: 'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
    col2Img: 'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  },
  {
    id: 'ai-receptionist',
    number: '05',
    category: 'Conversational AI & Automation',
    title: 'AI Receptionist / Voice Agent',
    subtitle: 'Multilingual Voice & Business Workflows',
    description: 'Autonomous AI voice agent handling business communication: call handling, FAQs, lead capture, appointment scheduling, WhatsApp automation, and custom knowledge base integration for clinics & gyms.',
    highlights: ['Multilingual Voice AI', 'Lead Capture & Scheduling', 'WhatsApp Meta Automation', 'Custom Business KB'],
    techStack: ['Vapi', 'n8n', 'WhatsApp API', 'Voice AI', 'Webhooks'],
    col1Img1: 'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
    col1Img2: 'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
    col2Img: 'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  }
];

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 pb-32"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-24 text-center">
        <h2
          className="hero-heading font-black uppercase tracking-tight leading-none select-none"
          style={{ fontSize: 'clamp(3rem, 11vw, 150px)' }}
        >
          Project
        </h2>
      </FadeIn>

      {/* Sticky Stacking Cards Container */}
      <div className="relative max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
        {FEATURED_PROJECTS.map((project, index) => {
          const totalCards = FEATURED_PROJECTS.length;
          const targetScale = 1 - (totalCards - 1 - index) * 0.03;

          return (
            <ProjectCardContainer
              key={project.id}
              project={project}
              index={index}
              totalCards={totalCards}
              targetScale={targetScale}
              progress={scrollYProgress}
              onSelectProject={onSelectProject}
            />
          );
        })}
      </div>

      {/* Secondary Projects Drawer */}
      <div className="max-w-5xl mx-auto mt-24 sm:mt-32 pt-12 border-t border-[#D7E2EA]/15 text-center">
        <button
          onClick={() => setShowMoreProjects(!showMoreProjects)}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#D7E2EA]/30 bg-[#D7E2EA]/5 hover:bg-[#D7E2EA]/10 text-white font-medium uppercase tracking-wider text-sm sm:text-base transition-all duration-300"
        >
          <span>{showMoreProjects ? "Hide Additional Business Systems" : "Explore More Work & Automation Pipelines"}</span>
          {showMoreProjects ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {showMoreProjects && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left"
          >
            {/* Secondary 1: ITR Filing Automation */}
            <div className="p-8 rounded-3xl bg-neutral-900/80 border border-[#D7E2EA]/20 hover:border-[#B600A8]/50 transition-colors">
              <div className="flex items-center gap-3 text-xs uppercase font-semibold text-[#B600A8] tracking-widest mb-3">
                <Zap className="w-4 h-4" />
                <span>Business Automation</span>
              </div>
              <h3 className="text-2xl font-bold uppercase text-white mb-2">ITR Filing Automation</h3>
              <p className="text-sm text-[#D7E2EA]/80 leading-relaxed mb-4">
                Automation workflow concept tailored for CA firms and Income Tax Return filing pipelines. Streamlines manual document processing, client data organization, and multi-stage filing workflows.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black/60 border border-white/10 rounded-full text-xs text-[#D7E2EA]">n8n</span>
                <span className="px-3 py-1 bg-black/60 border border-white/10 rounded-full text-xs text-[#D7E2EA]">Document Parsing</span>
                <span className="px-3 py-1 bg-black/60 border border-white/10 rounded-full text-xs text-[#D7E2EA]">Filing Pipelines</span>
              </div>
            </div>

            {/* Secondary 2: Local Business Lead Generation */}
            <div className="p-8 rounded-3xl bg-neutral-900/80 border border-[#D7E2EA]/20 hover:border-[#B600A8]/50 transition-colors">
              <div className="flex items-center gap-3 text-xs uppercase font-semibold text-[#B600A8] tracking-widest mb-3">
                <Bot className="w-4 h-4" />
                <span>AI Lead Intelligence</span>
              </div>
              <h3 className="text-2xl font-bold uppercase text-white mb-2">Local Business Lead Gen System</h3>
              <p className="text-sm text-[#D7E2EA]/80 leading-relaxed mb-4">
                AI-powered lead researcher that scans Google Maps, Instagram, LinkedIn, and websites to analyze digital presence, site quality, and evaluate prospective business automation needs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-black/60 border border-white/10 rounded-full text-xs text-[#D7E2EA]">Google Maps API</span>
                <span className="px-3 py-1 bg-black/60 border border-white/10 rounded-full text-xs text-[#D7E2EA]">Web Scrapers</span>
                <span className="px-3 py-1 bg-black/60 border border-white/10 rounded-full text-xs text-[#D7E2EA]">LLM Analysis</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

interface ProjectCardContainerProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  targetScale: number;
  progress: any;
  onSelectProject: (project: ProjectData) => void;
}

const ProjectCardContainer: React.FC<ProjectCardContainerProps> = ({
  project,
  index,
  totalCards,
  targetScale,
  progress,
  onSelectProject,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const range = [index / totalCards, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky w-full flex items-center justify-center min-h-[70vh] sm:min-h-[82vh]"
      style={{ top: `calc(4rem + ${index * 16}px)` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[28px] sm:rounded-[48px] md:rounded-[60px] p-4 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300"
      >
        {/* Top Bar Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 md:mb-8 pb-4 md:pb-6 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-3 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none opacity-80 text-3xl sm:text-5xl md:text-7xl"
            >
              {project.number}
            </span>
            <div>
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-widest text-[#B600A8] block">
                {project.category}
              </span>
              <h3 className="text-lg sm:text-2xl md:text-3xl font-bold uppercase text-white tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <LiveProjectButton
              label="Architecture"
              onClick={() => onSelectProject(project)}
              className="px-4 py-2 sm:px-8 sm:py-3 text-[11px] sm:text-sm"
            />
          </div>
        </div>

        {/* Description & Tech Tags */}
        <div className="mb-4 sm:mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p className="text-xs sm:text-base text-[#D7E2EA]/90 max-w-2xl font-light leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {project.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 text-[10px] sm:text-xs uppercase tracking-wider text-[#D7E2EA]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Two-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6">
          {/* Left Column (40% - 5 cols): 2 Stacked Images */}
          <div className="md:col-span-5 flex flex-col gap-3">
            <div className="w-full h-[120px] sm:h-[180px] md:h-[210px] rounded-[18px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden border border-[#D7E2EA]/20 bg-neutral-900">
              <img
                src={project.col1Img1}
                alt={`${project.title} Preview 1`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="w-full h-[130px] sm:h-[220px] md:h-[260px] rounded-[18px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden border border-[#D7E2EA]/20 bg-neutral-900">
              <img
                src={project.col1Img2}
                alt={`${project.title} Preview 2`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column (60% - 7 cols): 1 Tall Image */}
          <div className="md:col-span-7 w-full h-[180px] sm:h-[340px] md:h-[486px] rounded-[18px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden border border-[#D7E2EA]/20 bg-neutral-900">
            <img
              src={project.col2Img}
              alt={`${project.title} Full View`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
