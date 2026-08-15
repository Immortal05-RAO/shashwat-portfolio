import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, Check } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI & Automation Agency Build',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/85 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-2xl bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 text-[#D7E2EA] shadow-2xl"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-neutral-900 border border-[#D7E2EA]/30 text-white hover:bg-neutral-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black uppercase text-white">Message Sent!</h3>
              <p className="text-sm text-[#D7E2EA]/80 max-w-md">
                Thank you for reaching out, {formData.name || 'friend'}. Shashwat will review your request and get back to you shortly.
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#B600A8] block mb-1">
                  Start A Conversation
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                  Have an idea worth building?
                </h2>
                <p className="text-sm text-[#D7E2EA]/80 mt-1">
                  Let&apos;s turn your vision into an intelligent, high-performance product.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase font-semibold tracking-wider text-[#D7E2EA]/80 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-[#D7E2EA]/20 text-white placeholder-neutral-500 focus:outline-none focus:border-[#B600A8] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold tracking-wider text-[#D7E2EA]/80 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-[#D7E2EA]/20 text-white placeholder-neutral-500 focus:outline-none focus:border-[#B600A8] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold tracking-wider text-[#D7E2EA]/80 mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-[#D7E2EA]/20 text-white focus:outline-none focus:border-[#B600A8] text-sm"
                  >
                    <option value="AI & Automation Agency Build">AI & Automation Agency Solution</option>
                    <option value="Full-Stack SaaS Platform">Full-Stack SaaS Platform</option>
                    <option value="Voice AI / Receptionist System">Voice AI / Receptionist System</option>
                    <option value="Business Workflow Pipeline">Business Workflow Pipeline</option>
                    <option value="General Collaboration">General Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold tracking-wider text-[#D7E2EA]/80 mb-1">
                    Project Overview
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your goals, timelines, or architecture requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-[#D7E2EA]/20 text-white placeholder-neutral-500 focus:outline-none focus:border-[#B600A8] text-sm resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <ContactButton label="Send Proposal Request" type="submit" />
                </div>
              </form>

              {/* Direct Links */}
              <div className="mt-8 pt-6 border-t border-[#D7E2EA]/15 flex flex-wrap items-center justify-between gap-4 text-xs text-[#D7E2EA]/80 font-medium">
                <a href="mailto:shashwatrao4@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-[#B600A8]" />
                  <span>shashwatrao4@gmail.com</span>
                </a>
                <a href="tel:+919108324437" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+91 91083 24437</span>
                </a>
                <div className="flex items-center gap-2 text-[#D7E2EA]/60">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
