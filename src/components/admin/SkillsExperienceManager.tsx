import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Briefcase, GraduationCap, Code2, Check } from 'lucide-react';
import type { SkillCategory, ExperienceItem, EducationItem } from '../../types/portfolio';

export const SkillsExperienceManager: React.FC = () => {
  const { data, updateExperience, updateEducation, updateSkills } = usePortfolio();

  const [expList, setExpList] = useState<ExperienceItem[]>(data.experience);
  const [eduList, setEduList] = useState<EducationItem[]>(data.education);
  const [skillList, setSkillList] = useState<SkillCategory[]>(data.skillCategories);
  const [saved, setSaved] = useState(false);

  const handleSaveAll = () => {
    updateExperience(expList);
    updateEducation(eduList);
    updateSkills(skillList);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  // Experience Handlers
  const handleUpdateExp = (index: number, field: keyof ExperienceItem, value: string) => {
    const next = [...expList];
    next[index] = { ...next[index], [field]: value };
    setExpList(next);
  };

  // Education Handlers
  const handleUpdateEdu = (index: number, field: keyof EducationItem, value: string) => {
    const next = [...eduList];
    next[index] = { ...next[index], [field]: value };
    setEduList(next);
  };

  // Skills Handlers
  const handleUpdateSkillsCategory = (index: number, skillsCsv: string) => {
    const next = [...skillList];
    next[index] = {
      ...next[index],
      skills: skillsCsv.split(',').map((s) => s.trim()).filter(Boolean),
    };
    setSkillList(next);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-black uppercase text-white">Experience, Education & Skills</h3>
          <p className="text-xs text-[#D7E2EA]/70 mt-1">
            Manage your agency co-founder experience, engineering degree details, and technical skill categories.
          </p>
        </div>

        <button
          onClick={handleSaveAll}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#B600A8] to-[#7621B0] hover:opacity-90 text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 shadow-lg"
        >
          <Check className="w-4 h-4" />
          <span>{saved ? 'Saved Changes!' : 'Save Experience & Skills'}</span>
        </button>
      </div>

      {/* Experience Section */}
      <div className="p-6 rounded-3xl bg-[#12141D] border border-[#D7E2EA]/15 flex flex-col gap-5">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#B600A8]">
          <Briefcase className="w-4 h-4" />
          <span>Work & Entrepreneurship Experience</span>
        </div>

        {expList.map((exp, idx) => (
          <div key={exp.id || idx} className="p-4 bg-[#1A1D28] border border-[#D7E2EA]/10 rounded-2xl flex flex-col gap-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase text-[#D7E2EA]/60 mb-1">Company / Organization</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => handleUpdateExp(idx, 'company', e.target.value)}
                  className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-lg px-3 py-1.5 text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase text-[#D7E2EA]/60 mb-1">Role / Position</label>
                <input
                  type="text"
                  value={exp.role}
                  onChange={(e) => handleUpdateExp(idx, 'role', e.target.value)}
                  className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-lg px-3 py-1.5 text-xs text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-semibold uppercase text-[#D7E2EA]/60 mb-1">Subtitle / Founders</label>
              <input
                type="text"
                value={exp.subtitle}
                onChange={(e) => handleUpdateExp(idx, 'subtitle', e.target.value)}
                className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-lg px-3 py-1.5 text-xs text-white"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold uppercase text-[#D7E2EA]/60 mb-1">Description</label>
              <textarea
                rows={2}
                value={exp.description}
                onChange={(e) => handleUpdateExp(idx, 'description', e.target.value)}
                className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-lg px-3 py-1.5 text-xs text-white"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="p-6 rounded-3xl bg-[#12141D] border border-[#D7E2EA]/15 flex flex-col gap-5">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#7621B0]">
          <GraduationCap className="w-4 h-4" />
          <span>Education & Degree</span>
        </div>

        {eduList.map((edu, idx) => (
          <div key={edu.id || idx} className="p-4 bg-[#1A1D28] border border-[#D7E2EA]/10 rounded-2xl flex flex-col gap-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase text-[#D7E2EA]/60 mb-1">Degree Title</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => handleUpdateEdu(idx, 'degree', e.target.value)}
                  className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-lg px-3 py-1.5 text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase text-[#D7E2EA]/60 mb-1">Specialization / Field</label>
                <input
                  type="text"
                  value={edu.field}
                  onChange={(e) => handleUpdateEdu(idx, 'field', e.target.value)}
                  className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-lg px-3 py-1.5 text-xs text-white"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase text-[#D7E2EA]/60 mb-1">Institution / College</label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => handleUpdateEdu(idx, 'institution', e.target.value)}
                  className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-lg px-3 py-1.5 text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold uppercase text-[#D7E2EA]/60 mb-1">University</label>
                <input
                  type="text"
                  value={edu.university}
                  onChange={(e) => handleUpdateEdu(idx, 'university', e.target.value)}
                  className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-lg px-3 py-1.5 text-xs text-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Categories Section */}
      <div className="p-6 rounded-3xl bg-[#12141D] border border-[#D7E2EA]/15 flex flex-col gap-5">
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-emerald-400">
          <Code2 className="w-4 h-4" />
          <span>Technical Stack Categories</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillList.map((cat, idx) => (
            <div key={cat.id || idx} className="p-4 bg-[#1A1D28] border border-[#D7E2EA]/10 rounded-2xl flex flex-col gap-2">
              <span className={`text-xs font-bold uppercase tracking-wider ${cat.color}`}>
                Category: {cat.category}
              </span>
              <textarea
                rows={3}
                value={cat.skills.join(', ')}
                onChange={(e) => handleUpdateSkillsCategory(idx, e.target.value)}
                placeholder="Skill 1, Skill 2, Skill 3..."
                className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-lg px-3 py-2 text-xs text-white focus:outline-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
