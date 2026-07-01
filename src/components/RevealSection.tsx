'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function RevealSection({ children, className = '', id }: RevealSectionProps) {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref} id={id} className={`section-fade ${className}`}>
      {children}
    </div>
  );
}
