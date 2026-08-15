import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const characters = text.split('');

  return (
    <p ref={containerRef} className={`relative flex flex-wrap justify-center ${className}`}>
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = start + (1 / characters.length);

        return (
          <CharacterKey
            key={index}
            char={char}
            range={[start, end]}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
};

interface CharacterKeyProps {
  char: string;
  range: [number, number];
  progress: any;
}

const CharacterKey: React.FC<CharacterKeyProps> = ({ char, range, progress }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  if (char === ' ') {
    return <span className="inline-block w-[0.3em]">&nbsp;</span>;
  }

  return (
    <motion.span style={{ opacity }} className="inline-block transition-opacity">
      {char}
    </motion.span>
  );
};
