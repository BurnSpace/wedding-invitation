'use client';

import { QRCodeSVG } from 'qrcode.react';
import config from '@/config/config.json';
import RevealSection from './RevealSection';

export default function QrCodeSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${config.acara.maps_lat},${config.acara.maps_lng}`;

  return (
    <section className="py-16 px-6 bg-theme-secondary text-center">
      <RevealSection>
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Scan Lokasi</p>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-theme mb-6">
          QR Code Menuju Lokasi
        </h2>
        <div className="inline-block bg-white p-4 rounded-2xl shadow-md">
          <QRCodeSVG value={mapsUrl} size={160} fgColor="#3a3328" />
        </div>
        <p className="text-xs text-theme-soft mt-4">Arahkan kamera HP Anda untuk membuka lokasi</p>
      </RevealSection>
    </section>
  );
}
