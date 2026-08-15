import React from 'react';
import { FadeIn } from './FadeIn';
import { Briefcase, GraduationCap, Code2, Cpu, Wrench, Shield } from 'lucide-react';

export const ExperienceEducation: React.FC = () => {
  return (
    <section id="experience" className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 sm:py-24 border-t border-[#D7E2EA]/15 z-30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column (5 cols): Experience & Education */}
        <div className="lg:col-span-5 flex flex-col gap-12">
          
          {/* Experience Card */}
          <FadeIn delay={0.1} y={30}>
            <div className="p-8 rounded-3xl bg-neutral-900/90 border border-[#D7E2EA]/20 relative overflow-hidden group hover:border-[#B600A8]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B600A8]/20 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#B600A8] mb-4">
                <Briefcase className="w-4 h-4" />
                <span>Entrepreneurship & Agency</span>
              </div>

              <h3 className="text-3xl font-black uppercase text-white mb-1">Flowchain</h3>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#D7E2EA]/70 mb-4">
                Co-Founder • Shashwat V Rao & Dev U
              </p>

              <p className="text-sm text-[#D7E2EA]/85 leading-relaxed">
                Co-founded Flowchain to build custom AI automation, business process automation, AI agents, and high-performance digital systems for business clients.
              </p>
            </div>
          </FadeIn>

          {/* Education Card */}
          <FadeIn delay={0.2} y={30}>
            <div className="p-8 rounded-3xl bg-neutral-900/90 border border-[#D7E2EA]/20 relative overflow-hidden group hover:border-[#7621B0]/50 transition-all duration-300">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#7621B0] mb-4">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </div>

              <h3 className="text-2xl font-black uppercase text-white mb-2">
                B.E. — Computer Science & Engineering
              </h3>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#B600A8] mb-2">
                Artificial Intelligence & Machine Learning
              </p>
              <p className="text-sm text-[#D7E2EA]/80 font-medium">
                Vijaya Vittala Institute of Technology, Bengaluru
              </p>
              <p className="text-xs text-[#D7E2EA]/60 uppercase tracking-widest mt-1">
                VTU (Visvesvaraya Technological University)
              </p>
            </div>
          </FadeIn>

        </div>

        {/* Right Column (7 cols): Specialized Skill System */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <FadeIn delay={0.15} y={30}>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-8">
              Technical Stack & Capabilities
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Category 1: Development */}
              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-[#D7E2EA]/15">
                <div className="flex items-center gap-2 font-bold uppercase text-xs tracking-wider text-emerald-400 mb-3">
                  <Code2 className="w-4 h-4" />
                  <span>Development</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'Node.js', 'React', 'Next.js', 'NestJS', 'REST APIs', 'Full-Stack'].map(s => (
                    <span key={s} className="px-2.5 py-1 bg-black/60 border border-white/10 rounded-lg text-xs font-medium text-[#D7E2EA]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 2: AI */}
              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-[#D7E2EA]/15">
                <div className="flex items-center gap-2 font-bold uppercase text-xs tracking-wider text-purple-400 mb-3">
                  <Cpu className="w-4 h-4" />
                  <span>AI & Reasoning</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['AI APIs / LLMs', 'AI Agents', 'Prompt Engineering', 'AI SaaS', 'Conversational AI'].map(s => (
                    <span key={s} className="px-2.5 py-1 bg-black/60 border border-white/10 rounded-lg text-xs font-medium text-[#D7E2EA]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 3: Automation */}
              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-[#D7E2EA]/15">
                <div className="flex items-center gap-2 font-bold uppercase text-xs tracking-wider text-amber-400 mb-3">
                  <Wrench className="w-4 h-4" />
                  <span>Automation</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['n8n', 'WhatsApp Automation', 'Voice AI (Vapi)', 'Workflow Pipelines', 'API Integrations'].map(s => (
                    <span key={s} className="px-2.5 py-1 bg-black/60 border border-white/10 rounded-lg text-xs font-medium text-[#D7E2EA]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category 4: Backend & Security */}
              <div className="p-6 rounded-2xl bg-neutral-900/60 border border-[#D7E2EA]/15">
                <div className="flex items-center gap-2 font-bold uppercase text-xs tracking-wider text-rose-400 mb-3">
                  <Shield className="w-4 h-4" />
                  <span>Backend & Security</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Express', 'MongoDB', 'Authentication', 'JWT Rotation', 'Rate Limiting', 'Zod'].map(s => (
                    <span key={s} className="px-2.5 py-1 bg-black/60 border border-white/10 rounded-lg text-xs font-medium text-[#D7E2EA]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
};
