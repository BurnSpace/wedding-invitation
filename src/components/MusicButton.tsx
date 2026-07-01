'use client';

interface MusicButtonProps {
  isPlaying: boolean;
  onToggle: () => void;
}

export default function MusicButton({ isPlaying, onToggle }: MusicButtonProps) {
  return (
    <button
      onClick={onToggle}
      aria-label={isPlaying ? 'Jeda musik' : 'Putar musik'}
      className="fixed bottom-20 right-4 z-40 w-12 h-12 rounded-full bg-accent text-white shadow-lg flex items-center justify-center active:scale-90 transition-transform"
    >
      <span className="text-xl">
        {isPlaying ? '🎵' : '🔇'}
      </span>
    </button>
  );
}