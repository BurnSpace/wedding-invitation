'use client';

import { useState } from 'react';
import config from '@/config/config.json';

interface ThemeSwitcherProps {
  theme: string;
  setTheme: (t: string) => void;
}

const THEME_LABELS: Record<string, { label: string; color: string }> = {
  'classic-gold': { label: 'Classic Gold', color: '#b8893a' },
  'soft-blush': { label: 'Soft Blush', color: '#d98a99' },
  'sage-garden': { label: 'Sage Garden', color: '#7a9466' },
  'dark-elegant': { label: 'Dark Elegant', color: '#d4b86a' }
};

export default function ThemeSwitcher({ theme, setTheme }: ThemeSwitcherProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden sm:block fixed bottom-20 left-4 z-40">
      {open && (
        <div className="mb-3 glass-card border border-accent rounded-2xl p-3 shadow-lg space-y-2 w-44">
          {config.tema.pilihan.map((t) => (
            <button
              key={t}
              onClick={() => {
                setTheme(t);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs text-left ${
                theme === t ? 'bg-accent/20 font-medium' : ''
              }`}
            >
              <span
                className="w-3.5 h-3.5 rounded-full inline-block flex-shrink-0"
                style={{ backgroundColor: THEME_LABELS[t]?.color }}
              />
              <span className="text-theme">{THEME_LABELS[t]?.label ?? t}</span>
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Ganti tema"
        className="w-12 h-12 rounded-full bg-theme border-2 border-accent shadow-lg flex items-center justify-center active:scale-90 transition-transform"
      >
        <span className="text-xl">🎨</span>
      </button>
    </div>
  );
}