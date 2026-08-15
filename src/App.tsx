import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ProjectsSection } from './components/ProjectsSection';
import type { ProjectData } from './components/ProjectsSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { FooterSection } from './components/FooterSection';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';

export function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-['Kanit',sans-serif] selection:bg-[#B600A8]/30 selection:text-white overflow-x-clip">
      {/* 1. HERO SECTION */}
      <HeroSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 4. CAPABILITIES / SERVICES SECTION */}
      <CapabilitiesSection />

      {/* 5. PROJECTS SECTION (STICKY STACKING CARDS) */}
      <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

      {/* 6. EXPERIENCE & EDUCATION SECTION */}
      <ExperienceEducation />

      {/* 7. FOOTER / CONTACT SECTION */}
      <FooterSection onOpenContact={() => setIsContactOpen(true)} />

      {/* MODALS */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
