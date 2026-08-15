import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import type { ProjectItem } from '../../types/portfolio';
import { Plus, Trash2, ArrowUp, ArrowDown, Edit3, Check, X, Upload } from 'lucide-react';
import { createStandardPlaceholder } from '../../utils/placeholders';

export const ProjectsManager: React.FC = () => {
  const { data, addProject, updateProject, deleteProject, reorderProjects } = usePortfolio();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  // Form State
  const [formData, setFormData] = useState<Partial<ProjectItem>>({});
  const [techInput, setTechInput] = useState('');
  const [highlightInput, setHighlightInput] = useState('');

  const handleStartEdit = (proj: ProjectItem) => {
    setEditingId(proj.id);
    setIsAdding(false);
    setFormData({ ...proj });
    setTechInput(proj.techStack ? proj.techStack.join(', ') : '');
    setHighlightInput(proj.highlights ? proj.highlights.join(', ') : '');
  };

  const handleStartAdd = () => {
    setIsAdding(true);
    setEditingId(null);
    setFormData({
      category: 'Full-Stack SaaS',
      title: 'New AI Project',
      subtitle: 'Project Subtitle / Tech Stack Overview',
      description: 'Detailed explanation of project features, system architecture, and client impact.',
      techStack: ['React', 'Node.js', 'AI APIs'],
      highlights: ['Feature 1', 'Feature 2'],
      col1Img1: createStandardPlaceholder('PROJECT PREVIEW 1'),
      col1Img2: createStandardPlaceholder('PROJECT PREVIEW 2'),
      col2Img: createStandardPlaceholder('PROJECT FULL DASHBOARD'),
      liveUrl: 'https://',
      githubUrl: 'https://github.com/Immortal05-RAO',
      isFeatured: true,
    });
    setTechInput('React, Node.js, AI APIs');
    setHighlightInput('Feature 1, Feature 2');
  };

  const handleSave = () => {
    const techStack = techInput.split(',').map((s) => s.trim()).filter(Boolean);
    const highlights = highlightInput.split(',').map((s) => s.trim()).filter(Boolean);

    const payload = {
      ...formData,
      techStack,
      highlights,
    } as Omit<ProjectItem, 'id' | 'number'>;

    if (isAdding) {
      addProject(payload);
      setIsAdding(false);
    } else if (editingId) {
      updateProject(editingId, payload);
      setEditingId(null);
    }
  };

  // Image Upload Helper (converts image file to Base64 Data URL)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, fieldKey: 'col1Img1' | 'col1Img2' | 'col2Img') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setFormData((prev) => ({ ...prev, [fieldKey]: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-black uppercase text-white">Manage Projects</h3>
          <p className="text-xs text-[#D7E2EA]/70 mt-1">
            Add, edit, delete, reorder, and update project descriptions & preview images.
          </p>
        </div>

        <button
          onClick={handleStartAdd}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#B600A8] to-[#7621B0] hover:opacity-90 text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 shadow-lg"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Project</span>
        </button>
      </div>

      {/* Edit / Add Modal Form */}
      {(isAdding || editingId) && (
        <div className="p-6 rounded-3xl bg-[#181B26] border-2 border-[#B600A8] shadow-2xl flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-[#D7E2EA]/15 pb-4">
            <h4 className="text-xl font-bold uppercase text-white">
              {isAdding ? 'Add New Project' : `Edit Project #${formData.number || ''}`}
            </h4>
            <button
              onClick={() => {
                setIsAdding(false);
                setEditingId(null);
              }}
              className="text-[#D7E2EA]/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
                Project Title
              </label>
              <input
                type="text"
                value={formData.title || ''}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#B600A8]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
                Category
              </label>
              <input
                type="text"
                value={formData.category || ''}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#B600A8]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
                Subtitle
              </label>
              <input
                type="text"
                value={formData.subtitle || ''}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#B600A8]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
                Description
              </label>
              <textarea
                rows={3}
                value={formData.description || ''}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#B600A8]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
                Technologies (comma separated)
              </label>
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                placeholder="React, Node.js, n8n, AI APIs..."
                className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#B600A8]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
                Highlights (comma separated)
              </label>
              <input
                type="text"
                value={highlightInput}
                onChange={(e) => setHighlightInput(e.target.value)}
                placeholder="Idempotent Data, JWT Rotation..."
                className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#B600A8]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
                Live Demo URL
              </label>
              <input
                type="text"
                value={formData.liveUrl || ''}
                onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
                placeholder="https://..."
                className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#B600A8]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-[#D7E2EA]/70 mb-1">
                GitHub Repository URL
              </label>
              <input
                type="text"
                value={formData.githubUrl || ''}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                placeholder="https://github.com/..."
                className="w-full bg-[#12141D] border border-[#D7E2EA]/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#B600A8]"
              />
            </div>

            {/* Image Slots */}
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {/* Image 1 */}
              <div className="p-3 bg-[#12141D] border border-[#D7E2EA]/15 rounded-2xl flex flex-col gap-2">
                <span className="text-[11px] font-bold uppercase text-[#B600A8]">Preview Image 1</span>
                <input
                  type="text"
                  value={formData.col1Img1 || ''}
                  onChange={(e) => setFormData({ ...formData, col1Img1: e.target.value })}
                  placeholder="URL or upload file..."
                  className="w-full bg-[#1A1D28] border border-white/10 rounded-lg px-2 py-1 text-xs text-white"
                />
                <label className="cursor-pointer bg-neutral-800 hover:bg-neutral-700 text-white text-[10px] font-semibold uppercase tracking-wider py-1 px-2 rounded-lg flex items-center justify-center gap-1">
                  <Upload className="w-3 h-3" />
                  <span>Upload File</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'col1Img1')}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Image 2 */}
              <div className="p-3 bg-[#12141D] border border-[#D7E2EA]/15 rounded-2xl flex flex-col gap-2">
                <span className="text-[11px] font-bold uppercase text-[#B600A8]">Preview Image 2</span>
                <input
                  type="text"
                  value={formData.col1Img2 || ''}
                  onChange={(e) => setFormData({ ...formData, col1Img2: e.target.value })}
                  placeholder="URL or upload file..."
                  className="w-full bg-[#1A1D28] border border-white/10 rounded-lg px-2 py-1 text-xs text-white"
                />
                <label className="cursor-pointer bg-neutral-800 hover:bg-neutral-700 text-white text-[10px] font-semibold uppercase tracking-wider py-1 px-2 rounded-lg flex items-center justify-center gap-1">
                  <Upload className="w-3 h-3" />
                  <span>Upload File</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'col1Img2')}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Image 3 */}
              <div className="p-3 bg-[#12141D] border border-[#D7E2EA]/15 rounded-2xl flex flex-col gap-2">
                <span className="text-[11px] font-bold uppercase text-[#B600A8]">Main Dashboard Image 3</span>
                <input
                  type="text"
                  value={formData.col2Img || ''}
                  onChange={(e) => setFormData({ ...formData, col2Img: e.target.value })}
                  placeholder="URL or upload file..."
                  className="w-full bg-[#1A1D28] border border-white/10 rounded-lg px-2 py-1 text-xs text-white"
                />
                <label className="cursor-pointer bg-neutral-800 hover:bg-neutral-700 text-white text-[10px] font-semibold uppercase tracking-wider py-1 px-2 rounded-lg flex items-center justify-center gap-1">
                  <Upload className="w-3 h-3" />
                  <span>Upload File</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload(e, 'col2Img')}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              onClick={() => {
                setIsAdding(false);
                setEditingId(null);
              }}
              className="px-5 py-2.5 rounded-xl border border-[#D7E2EA]/20 bg-neutral-900 text-xs font-bold uppercase tracking-wider text-[#D7E2EA]"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2 shadow-lg"
            >
              <Check className="w-4 h-4" />
              <span>Save Project</span>
            </button>
          </div>
        </div>
      )}

      {/* Projects List */}
      <div className="flex flex-col gap-4">
        {data.projects.map((proj, idx) => (
          <div
            key={proj.id}
            className="p-5 rounded-2xl bg-[#12141D] border border-[#D7E2EA]/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-[#D7E2EA]/30 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="font-black text-2xl text-[#B600A8]">{proj.number}</span>
              <div>
                <span className="text-[10px] font-semibold uppercase text-[#D7E2EA]/60 tracking-wider">
                  {proj.category}
                </span>
                <h4 className="text-lg font-bold text-[#FFFFFF] uppercase leading-tight">
                  {proj.title}
                </h4>
                <p className="text-xs text-[#D7E2EA]/80 font-light max-w-xl truncate">
                  {proj.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end md:self-auto">
              {/* Reorder Buttons */}
              <button
                disabled={idx === 0}
                onClick={() => reorderProjects(idx, idx - 1)}
                className="p-2 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed"
                title="Move Up"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
              <button
                disabled={idx === data.projects.length - 1}
                onClick={() => reorderProjects(idx, idx + 1)}
                className="p-2 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 disabled:opacity-30 disabled:cursor-not-allowed"
                title="Move Down"
              >
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* Edit */}
              <button
                onClick={() => handleStartEdit(proj)}
                className="p-2 rounded-lg bg-neutral-800 text-white hover:bg-[#B600A8]"
                title="Edit Project"
              >
                <Edit3 className="w-4 h-4" />
              </button>

              {/* Delete */}
              <button
                onClick={() => {
                  if (confirm(`Are you sure you want to delete "${proj.title}"?`)) {
                    deleteProject(proj.id);
                  }
                }}
                className="p-2 rounded-lg bg-neutral-800 text-rose-400 hover:bg-rose-600 hover:text-white"
                title="Delete Project"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
