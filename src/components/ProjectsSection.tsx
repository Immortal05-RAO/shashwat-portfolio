import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { Zap, Bot, ChevronDown, ChevronUp } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import type { ProjectItem } from '../types/portfolio';

export type ProjectData = ProjectItem;

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const { data } = usePortfolio();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const featuredProjects = data.projects;

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
        {featuredProjects.map((project, index) => {
          const totalCards = featuredProjects.length;
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
