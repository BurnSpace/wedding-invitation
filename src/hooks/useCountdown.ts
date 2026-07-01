'use client';

import { useEffect, useState } from 'react';

interface CountdownValue {
  hari: number;
  jam: number;
  menit: number;
  detik: number;
  selesai: boolean;
}

export function useCountdown(targetIso: string): CountdownValue {
  const calculate = (): CountdownValue => {
    const target = new Date(targetIso).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) {
      return { hari: 0, jam: 0, menit: 0, detik: 0, selesai: true };
    }

    return {
      hari: Math.floor(diff / (1000 * 60 * 60 * 24)),
      jam: Math.floor((diff / (1000 * 60 * 60)) % 24),
      menit: Math.floor((diff / (1000 * 60)) % 60),
      detik: Math.floor((diff / 1000) % 60),
      selesai: false
    };
  };

  const [value, setValue] = useState<CountdownValue>(calculate);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(calculate());
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetIso]);

  return value;
}
