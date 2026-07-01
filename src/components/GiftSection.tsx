'use client';

import { useState } from 'react';
import Image from 'next/image';
import config from '@/config/config.json';
import RevealSection from './RevealSection';

export default function GiftSection() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = async (nomor: string, index: number) => {
    try {
      await navigator.clipboard.writeText(nomor);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // clipboard tidak tersedia
    }
  };

  if (!config.rekening_kado?.length) return null;

  const BANK_LOGOS: Record<string, JSX.Element> = {
    BCA: (
      <Image src="/images/logo-bca.png" alt="BCA" width={100} height={40} className="mx-auto mb-3 object-contain" />
    ),
    Mandiri: (
      <Image src="/images/logo-mandiri.png" alt="Mandiri" width={100} height={40} className="mx-auto mb-3 object-contain" />
    ),
    BRI: (
      <Image src="/images/logo-bri.png" alt="BRI" width={100} height={40} className="mx-auto mb-3 object-contain" />
    ),
    BNI: (
      <Image src="/images/logo-bni.png" alt="BNI" width={100} height={40} className="mx-auto mb-3 object-contain" />
    ),
    BSI: (
      <Image src="/images/logo-bsi.png" alt="BSI" width={100} height={40} className="mx-auto mb-3 object-contain" />
    ),
    Dana: (
      <Image src="/images/logo-dana.png" alt="Dana" width={100} height={40} className="mx-auto mb-3 object-contain" />
    ),
    GoPay: (
      <Image src="/images/logo-gopay.png" alt="GoPay" width={100} height={40} className="mx-auto mb-3 object-contain" />
    ),
    OVO: (
      <Image src="/images/logo-ovo.png" alt="OVO" width={100} height={40} className="mx-auto mb-3 object-contain" />
    ),
  };

  return (
    <section className="py-20 px-6 bg-theme">
      <RevealSection className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Wedding Gift</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-theme mb-3">Kirim Hadiah</h2>
        <p className="text-sm text-theme-soft max-w-md mx-auto">
          Doa restu Anda adalah hadiah terindah bagi kami. Namun jika ingin memberi tanda kasih, dapat melalui:
        </p>
      </RevealSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
        {config.rekening_kado.map((r, i) => (
          <RevealSection key={r.nomor}>
            <div className="glass-card border border-accent rounded-2xl p-5 text-center">
              {BANK_LOGOS[r.bank] ?? (
                <p className="font-display text-lg text-accent mb-3">{r.bank}</p>
              )}
              <p className="text-theme font-medium tracking-wide mb-1">{r.nomor}</p>
              <p className="text-xs text-theme-soft mb-3">a.n {r.atas_nama}</p>
              <button
                onClick={() => handleCopy(r.nomor, i)}
                className="text-xs px-4 py-1.5 rounded-full border border-accent text-accent active:scale-95 transition-transform"
              >
                {copiedIndex === i ? 'Tersalin ✓' : 'Salin Nomor'}
              </button>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
}