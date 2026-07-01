'use client';

const NAV_ITEMS = [
  { id: 'home', icon: '🏠', label: 'Home' },
  { id: 'acara', icon: '📅', label: 'Acara' },
  { id: 'cerita', icon: '💞', label: 'Cerita' },
  { id: 'galeri', icon: '🖼️', label: 'Galeri' },
  { id: 'rsvp', icon: '✍️', label: 'RSVP' }
];

export default function BottomNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 glass-card border-t border-accent flex justify-around py-2 sm:hidden">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className="flex flex-col items-center gap-0.5 px-2 py-1 text-theme-soft active:scale-90 transition-transform"
        >
          <span className="text-base leading-none">{item.icon}</span>
          <span className="text-[9px]">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
