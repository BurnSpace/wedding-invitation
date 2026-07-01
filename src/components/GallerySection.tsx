'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import config from '@/config/config.json';
import RevealSection from './RevealSection';

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((prev) => (prev === null ? null : (prev - 1 + config.galeri.length) % config.galeri.length));
  const showNext = () =>
    setActiveIndex((prev) => (prev === null ? null : (prev + 1) % config.galeri.length));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) showPrev();
      else showNext();
    }
    touchStartX.current = null;
  };

  return (
    <section id="galeri" className="py-20 px-6 bg-theme-secondary">
      <RevealSection className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Moments</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-theme">Galeri Foto</h2>
      </RevealSection>

      <RevealSection>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {config.galeri.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setActiveIndex(i)}
              className="relative aspect-square rounded-xl overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      </RevealSection>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center px-4"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            className="absolute top-5 right-5 text-white text-3xl leading-none z-10"
            aria-label="Tutup"
          >
            &times;
          </button>

          <button
            onClick={showPrev}
            className="hidden sm:flex absolute left-5 text-white text-3xl items-center justify-center w-10 h-10"
            aria-label="Sebelumnya"
          >
            ‹
          </button>

          <div className="relative w-full max-w-2xl aspect-square">
            <Image
              src={config.galeri[activeIndex].src}
              alt={config.galeri[activeIndex].caption}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={showNext}
            className="hidden sm:flex absolute right-5 text-white text-3xl items-center justify-center w-10 h-10"
            aria-label="Berikutnya"
          >
            ›
          </button>

          <p className="absolute bottom-6 left-0 right-0 text-center text-white text-sm px-6">
            {config.galeri[activeIndex].caption}
          </p>
        </div>
      )}
    </section>
  );
}
