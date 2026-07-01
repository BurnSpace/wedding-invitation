'use client';

import config from '@/config/config.json';
import RevealSection from './RevealSection';

export default function EventSection() {
  const { acara } = config;
  const mapsEmbedUrl = `https://www.google.com/maps?q=${acara.maps_lat},${acara.maps_lng}&z=${acara.maps_embed_zoom}&output=embed`;
  const mapsDirectUrl = `https://www.google.com/maps/search/?api=1&query=${acara.maps_lat},${acara.maps_lng}`;

  const akadTanggal = (acara.akad as any).tanggal_tampil ?? acara.tanggal_tampil;
  const resepsiTanggal = (acara.resepsi as any).tanggal_tampil ?? acara.tanggal_tampil;
  const tanggalList = [akadTanggal, resepsiTanggal];
  const sesi = [acara.akad, acara.resepsi];

  return (
    <section id="acara" className="py-20 px-6 bg-theme-secondary">
      <RevealSection className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Save The Date</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-theme">Waktu dan Tempat</h2>
      </RevealSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
        {sesi.map((s, i) => (
          <RevealSection key={s.label} className={`delay-${i}`}>
            <div className="glass-card border border-accent rounded-3xl p-6 sm:p-8 h-full text-center shadow-sm">
              <h3 className="font-display text-xl sm:text-2xl text-accent mb-3">{s.label}</h3>
              <p className="text-theme font-medium mb-1">{tanggalList[i]}</p>
              <p className="text-theme-soft text-sm mb-3">{s.waktu}</p>
              <p className="text-theme-soft text-sm">{s.lokasi}</p>
            </div>
          </RevealSection>
        ))}
      </div>
      <RevealSection className="max-w-3xl mx-auto">
        <div className="rounded-3xl overflow-hidden border border-accent shadow-sm">
          <iframe src={mapsEmbedUrl} width="100%" height="320" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokasi Acara" className="w-full h-72 sm:h-96" />
        </div>
        <div className="text-center mt-5">
          <a href={mapsDirectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-sm shadow-md active:scale-95 transition-transform">
            Buka di Google Maps
          </a>
        </div>
      </RevealSection>
    </section>
  );
}
