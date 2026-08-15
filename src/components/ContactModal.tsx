import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { data } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI System / Agent Automation',
    budget: '$1,000 - $5,000',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        projectType: 'AI System / Agent Automation',
        budget: '$1,000 - $5,000',
        message: '',
      });
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-[#12141D] border-2 border-[#D7E2EA] rounded-[28px] sm:rounded-[40px] p-6 sm:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.9)] z-10 my-auto text-[#D7E2EA]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-900 border border-[#D7E2EA]/20 hover:border-white text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-400 animate-bounce" />
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white">Proposal Transmitted!</h3>
                <p className="text-sm text-[#D7E2EA]/80 max-w-md">
                  Thank you for getting in touch. {data.contact.name} will review your request and reach back out shortly.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B600A8] block mb-2">
                  // CONTACT {data.contact.name.toUpperCase()}
                </span>

                <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight mb-2">
                  Start A Project Proposal
                </h2>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light mb-8">
                  Direct Email: <a href={`mailto:${data.contact.email}`} className="text-[#B600A8] font-semibold underline">{data.contact.email}</a> • Phone: <a href={`tel:${data.contact.phone.replace(/\s+/g, '')}`} className="text-[#7621B0] font-semibold">{data.contact.phone}</a>
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80 mb-2">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                      >
                        <option value="AI System / Agent Automation">AI System / Agent Automation</option>
                        <option value="Full-Stack SaaS Platform">Full-Stack SaaS Platform</option>
                        <option value="WhatsApp / Voice Agent">WhatsApp / Voice Agent</option>
                        <option value="n8n Business Workflow">n8n Business Workflow</option>
                        <option value="Other Project Request">Other Project Request</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors"
                      >
                        <option value="< $1,000">&lt; $1,000</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000+">$15,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/80 mb-2">
                      Project Details & Requirements
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what you'd like to build..."
                      className="w-full bg-[#1A1D28] border border-[#D7E2EA]/20 rounded-2xl px-4 py-3 text-sm text-white placeholder-[#D7E2EA]/40 focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#18011F] via-[#B600A8] to-[#7621B0] hover:opacity-95 text-white font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Proposal</span>
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
