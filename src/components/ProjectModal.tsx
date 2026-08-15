import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectData } from './ProjectsSection';
import { X, ExternalLink, CheckCircle2, ShieldCheck, Cpu, Code } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-md">
        
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-4xl bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 text-[#D7E2EA] max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-900 border border-[#D7E2EA]/30 text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B600A8] block mb-2">
              {project.category}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-[#D7E2EA]/70 mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Image Banner */}
          <div className="w-full h-[220px] sm:h-[320px] rounded-2xl overflow-hidden border border-[#D7E2EA]/20 mb-8 bg-neutral-900">
            <img
              src={project.col2Img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Technical Overview */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold uppercase text-white mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#B600A8]" />
                <span>Architecture & Business Impact</span>
              </h3>
              <p className="text-sm sm:text-base text-[#D7E2EA]/90 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            {/* Highlights List */}
            <div>
              <h3 className="text-lg font-bold uppercase text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Core System Capabilities</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-neutral-900/80 border border-[#D7E2EA]/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-lg font-bold uppercase text-white mb-3 flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-400" />
                <span>Technologies & Frameworks</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-[#D7E2EA]/10 border border-[#D7E2EA]/20 text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-[#D7E2EA]/20 flex flex-wrap items-center justify-between gap-4">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D7E2EA] text-[#0C0C0C] font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-white transition-colors"
                >
                  <span>Visit Live Platform</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-xs uppercase text-[#D7E2EA]/60 font-semibold tracking-wider">
                  Internal Production Build
                </span>
              )}

              <ContactButton
                label="Build Similar Solution"
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
              />
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
