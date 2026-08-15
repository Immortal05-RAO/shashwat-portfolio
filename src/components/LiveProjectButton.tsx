import React from 'react';

interface LiveProjectButtonProps {
  label?: string;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  label = "Live Project",
  onClick,
  className = "",
  href,
}) => {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 hover:border-white hover:text-white px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm md:text-base ${className}`}
    >
      <span>{label}</span>
    </Component>
  );
};
