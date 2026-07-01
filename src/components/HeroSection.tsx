'use client';

import config from '@/config/config.json';
import { useCountdown } from '@/hooks/useCountdown';

export default function HeroSection() {
  const countdown = useCountdown(config.acara.tanggal_iso);

  return (
    <section
      id="home"
      className="min-h-[100svh] flex flex-col items-center justify-center px-6 py-20 text-center relative bg-theme"
    >
      <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-theme-soft mb-6 animate-fadeIn">
        {config.ucapan_pembuka}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-6 sm:gap-10 w-full max-w-2xl mb-8">
        <div className="animate-fadeInUp">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-theme mb-1">
            {config.mempelai.pria.nama_lengkap}
          </h2>
          <p className="text-sm text-theme-soft">
            {config.mempelai.pria.anak_ke}
            <br />
            {config.mempelai.pria.orang_tua}
          </p>
        </div>

        <div className="font-script text-3xl sm:text-4xl text-accent">&amp;</div>

        <div className="animate-fadeInUp">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-theme mb-1">
            {config.mempelai.wanita.nama_lengkap}
          </h2>
          <p className="text-sm text-theme-soft">
            {config.mempelai.wanita.anak_ke}
            <br />
            {config.mempelai.wanita.orang_tua}
          </p>
        </div>
      </div>

      <div className="ornament-divider w-full max-w-xs mb-6">
        <span className="text-accent">✦</span>
      </div>

      <p className="font-display text-lg sm:text-xl text-theme mb-2">{config.acara.tanggal_tampil}</p>
      <p className="text-sm text-theme-soft mb-10 max-w-md">{config.acara.alamat_lengkap}</p>

      {!countdown.selesai ? (
        <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md w-full">
          {[
            { label: 'Hari', value: countdown.hari },
            { label: 'Jam', value: countdown.jam },
            { label: 'Menit', value: countdown.menit },
            { label: 'Detik', value: countdown.detik }
          ].map((item) => (
            <div
              key={item.label}
              className="glass-card border border-accent rounded-2xl py-3 sm:py-4 shadow-sm"
            >
              <p className="font-display text-2xl sm:text-3xl font-semibold text-accent">
                {String(item.value).padStart(2, '0')}
              </p>
              <p className="text-[10px] sm:text-xs uppercase tracking-widest text-theme-soft mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="font-display text-xl text-accent">Acara sedang/telah berlangsung 🎉</p>
      )}
    </section>
  );
}
