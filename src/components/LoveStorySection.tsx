'use client';

import config from '@/config/config.json';
import RevealSection from './RevealSection';

export default function LoveStorySection() {
  return (
    <section id="cerita" className="py-20 px-6 bg-theme">
      <RevealSection className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Our Journey</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-theme">Cerita Cinta Kami</h2>
      </RevealSection>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden max-w-md mx-auto relative pl-8">
        <div className="absolute left-3 top-2 bottom-2 w-px bg-accent opacity-40" />
        <div className="space-y-10">
          {config.cerita_cinta.map((item, i) => (
            <RevealSection key={item.judul} className="relative">
              <div className="absolute -left-[1.4rem] top-1 w-3 h-3 rounded-full bg-accent" />
              <p className="text-xs uppercase tracking-widest text-accent mb-1">{item.tanggal}</p>
              <h3 className="font-display text-lg font-semibold text-theme mb-1">{item.judul}</h3>
              <p className="text-sm text-theme-soft leading-relaxed">{item.deskripsi}</p>
            </RevealSection>
          ))}
        </div>
      </div>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block max-w-5xl mx-auto relative">
        <div className="absolute top-3 left-0 right-0 h-px bg-accent opacity-40" />
        <div className="grid grid-cols-4 gap-6">
          {config.cerita_cinta.map((item) => (
            <RevealSection key={item.judul} className="relative pt-10 text-center">
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
              <p className="text-xs uppercase tracking-widest text-accent mb-1">{item.tanggal}</p>
              <h3 className="font-display text-lg font-semibold text-theme mb-2">{item.judul}</h3>
              <p className="text-sm text-theme-soft leading-relaxed">{item.deskripsi}</p>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}
