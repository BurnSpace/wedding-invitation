'use client';

import confetti from 'canvas-confetti';
import config from '@/config/config.json';

export default function FooterSection() {
  const fireConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#b8893a', '#e9d6a5', '#f5d8dd', '#bdd0ad']
    });
  };

  return (
    <footer className="py-16 px-6 bg-theme-secondary text-center">
      <p className="font-script text-4xl text-accent mb-4">Terima Kasih</p>
      <p className="text-sm text-theme-soft max-w-md mx-auto mb-6 leading-relaxed">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
        dan memberikan doa restu kepada kami.
      </p>

      <button
        onClick={fireConfetti}
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-white text-sm shadow-md active:scale-95 transition-transform mb-8"
      >
        🎉 Rayakan Bersama Kami
      </button>

      <p className="font-display text-xl text-theme mb-1">
        {config.mempelai.pria.nama_panggilan} &amp; {config.mempelai.wanita.nama_panggilan}
      </p>
      <p className="text-xs uppercase tracking-widest text-theme-soft">{config.hashtag}</p>
    </footer>
  );
}
