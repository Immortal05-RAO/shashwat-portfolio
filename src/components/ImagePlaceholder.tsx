import React from 'react';

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label = "IMAGE PLACEHOLDER",
  className = "",
}) => {
  return (
    <div className={`relative w-full h-full min-h-[140px] bg-[#141620] border border-[#2D3345] rounded-2xl flex flex-col items-center justify-center p-4 overflow-hidden select-none group ${className}`}>
      {/* Background Subtle Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2D3345" strokeWidth="1" strokeDasharray="3 3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridPattern)" />
      </svg>

      {/* Classic Picture Icon (Mountain + Sun Wireframe - Screenshot 2) */}
      <svg
        className="w-16 h-16 sm:w-20 sm:h-20 text-[#64748B] group-hover:text-[#94A3B8] transition-colors duration-300 relative z-10"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Box Frame */}
        <rect x="10" y="15" width="80" height="60" rx="12" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Sun Circle */}
        <circle cx="68" cy="35" r="8" fill="currentColor"/>
        {/* Mountain Peaks */}
        <path d="M 18 68 L 45 38 L 60 55 L 72 43 L 82 68 Z" fill="currentColor"/>
      </svg>

      {/* Label */}
      <span className="mt-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#94A3B8] relative z-10 text-center">
        {label}
      </span>
    </div>
  );
};
