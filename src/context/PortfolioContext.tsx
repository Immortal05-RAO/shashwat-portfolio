import React, { createContext, useContext, useState, useEffect } from 'react';
import type { PortfolioData, ProjectItem, HeroData, AboutData, ContactInfo, SkillCategory, ExperienceItem, EducationItem, CapabilityItem } from '../types/portfolio';
import { INITIAL_PORTFOLIO_DATA } from '../data/defaultData';

const STORAGE_KEY = 'shashwat_portfolio_cms_data_v1';

interface PortfolioContextType {
  data: PortfolioData;
  // Hero & About
  updateHero: (hero: HeroData) => void;
  updateAbout: (about: AboutData) => void;
  // Projects CRUD & Reorder
  addProject: (project: Omit<ProjectItem, 'id' | 'number'>) => void;
  updateProject: (id: string, updated: Partial<ProjectItem>) => void;
  deleteProject: (id: string) => void;
  reorderProjects: (startIndex: number, endIndex: number) => void;
  // Capabilities
  updateCapabilities: (capabilities: CapabilityItem[]) => void;
  // Experience & Education
  updateExperience: (experience: ExperienceItem[]) => void;
  updateEducation: (education: EducationItem[]) => void;
  // Skills
  updateSkills: (skills: SkillCategory[]) => void;
  // Contact
  updateContact: (contact: ContactInfo) => void;
  // Data Management
  resetToDefaults: () => void;
  exportJSON: () => void;
  importJSON: (jsonData: string) => boolean;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PortfolioData>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse portfolio CMS data:', e);
        }
      }
    }
    return INITIAL_PORTFOLIO_DATA;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data]);

  // Hero & About
  const updateHero = (hero: HeroData) => {
    setData((prev) => ({ ...prev, hero }));
  };

  const updateAbout = (about: AboutData) => {
    setData((prev) => ({ ...prev, about }));
  };

  // Projects CRUD
  const addProject = (newProj: Omit<ProjectItem, 'id' | 'number'>) => {
    const id = `proj-${Date.now()}`;
    const nextNum = (data.projects.length + 1).toString().padStart(2, '0');
    const projectItem: ProjectItem = {
      ...newProj,
      id,
      number: nextNum,
    };
    setData((prev) => ({
      ...prev,
      projects: [...prev.projects, projectItem],
    }));
  };

  const updateProject = (id: string, updated: Partial<ProjectItem>) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, ...updated } : p)),
    }));
  };

  const deleteProject = (id: string) => {
    setData((prev) => {
      const filtered = prev.projects.filter((p) => p.id !== id);
      // Renumber remaining projects
      const renumbered = filtered.map((p, idx) => ({
        ...p,
        number: (idx + 1).toString().padStart(2, '0'),
      }));
      return { ...prev, projects: renumbered };
    });
  };

  const reorderProjects = (startIndex: number, endIndex: number) => {
    setData((prev) => {
      const result = Array.from(prev.projects);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      const renumbered = result.map((p, idx) => ({
        ...p,
        number: (idx + 1).toString().padStart(2, '0'),
      }));
      return { ...prev, projects: renumbered };
    });
  };

  // Capabilities
  const updateCapabilities = (capabilities: CapabilityItem[]) => {
    setData((prev) => ({ ...prev, capabilities }));
  };

  // Experience & Education
  const updateExperience = (experience: ExperienceItem[]) => {
    setData((prev) => ({ ...prev, experience }));
  };

  const updateEducation = (education: EducationItem[]) => {
    setData((prev) => ({ ...prev, education }));
  };

  // Skills
  const updateSkills = (skillCategories: SkillCategory[]) => {
    setData((prev) => ({ ...prev, skillCategories }));
  };

  // Contact
  const updateContact = (contact: ContactInfo) => {
    setData((prev) => ({ ...prev, contact }));
  };

  // Reset to Defaults
  const resetToDefaults = () => {
    setData(INITIAL_PORTFOLIO_DATA);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  // Export JSON File
  const exportJSON = () => {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `shashwat-portfolio-cms-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import JSON String
  const importJSON = (jsonData: string): boolean => {
    try {
      const parsed = JSON.parse(jsonData);
      if (parsed.hero && parsed.projects && parsed.contact) {
        setData(parsed);
        return true;
      }
    } catch (e) {
      console.error('Import failed:', e);
    }
    return false;
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        updateHero,
        updateAbout,
        addProject,
        updateProject,
        deleteProject,
        reorderProjects,
        updateCapabilities,
        updateExperience,
        updateEducation,
        updateSkills,
        updateContact,
        resetToDefaults,
        exportJSON,
        importJSON,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
