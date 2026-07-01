'use client';

import { useEffect, useState } from 'react';
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import RevealSection from './RevealSection';

type Kehadiran = 'Hadir' | 'Tidak Hadir' | 'Masih Ragu';

interface GuestbookEntry {
  id: string;
  nama: string;
  kehadiran: Kehadiran;
  pesan: string;
  createdAt: string;
}

const KEHADIRAN_OPTIONS: Kehadiran[] = ['Hadir', 'Tidak Hadir', 'Masih Ragu'];

export default function RsvpSection() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    nama: '',
    kehadiran: 'Hadir' as Kehadiran,
    pesan: ''
  });

  useEffect(() => {
    const q = query(collection(db, 'guestbook'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<GuestbookEntry, 'id'>),
        createdAt: doc.data().createdAt?.toDate?.()?.toISOString() ?? ''
      }));
      setEntries(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!form.nama.trim() || !form.pesan.trim()) {
      setError('Nama dan pesan wajib diisi.');
      return;
    }

    setSubmitting(true);
    try {
      await addDoc(collection(db, 'guestbook'), {
        nama: form.nama.slice(0, 100),
        kehadiran: form.kehadiran,
        pesan: form.pesan.slice(0, 500),
        createdAt: serverTimestamp()
      });
      setForm({ nama: '', kehadiran: 'Hadir', pesan: '' });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch {
      setError('Gagal mengirim ucapan. Coba lagi.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="py-20 px-6 bg-theme">
      <RevealSection className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">RSVP</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-theme">
          Konfirmasi Kehadiran &amp; Ucapan
        </h2>
      </RevealSection>

      <RevealSection className="max-w-xl mx-auto mb-14">
        <form onSubmit={handleSubmit} className="glass-card border border-accent rounded-3xl p-6 sm:p-8 space-y-5">
          <div>
            <label className="block text-sm text-theme-soft mb-1.5" htmlFor="nama">Nama</label>
            <input
              id="nama"
              type="text"
              value={form.nama}
              onChange={(e) => setForm((f) => ({ ...f, nama: e.target.value }))}
              className="w-full rounded-xl border border-accent bg-theme px-4 py-2.5 text-sm text-theme focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Nama lengkap Anda"
              maxLength={100}
            />
          </div>

          <div>
            <label className="block text-sm text-theme-soft mb-1.5">Konfirmasi Kehadiran</label>
            <div className="grid grid-cols-3 gap-2">
              {KEHADIRAN_OPTIONS.map((opt) => (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setForm((f) => ({ ...f, kehadiran: opt }))}
                  className={`text-xs sm:text-sm py-2.5 rounded-xl border transition-colors ${
                    form.kehadiran === opt
                      ? 'bg-accent text-white border-accent'
                      : 'border-accent text-theme-soft'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-theme-soft mb-1.5" htmlFor="pesan">Ucapan &amp; Doa</label>
            <textarea
              id="pesan"
              value={form.pesan}
              onChange={(e) => setForm((f) => ({ ...f, pesan: e.target.value }))}
              rows={4}
              maxLength={500}
              className="w-full rounded-xl border border-accent bg-theme px-4 py-2.5 text-sm text-theme focus:outline-none focus:ring-2 focus:ring-accent resize-none"
              placeholder="Tuliskan ucapan dan doa terbaik Anda..."
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}
          {success && <p className="text-sm text-green-600">Terima kasih, ucapan Anda telah terkirim! 🎉</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3 rounded-full bg-accent text-white text-sm font-medium shadow-md disabled:opacity-60 active:scale-95 transition-transform"
          >
            {submitting ? 'Mengirim...' : 'Kirim Ucapan'}
          </button>
        </form>
      </RevealSection>

      <RevealSection className="max-w-xl mx-auto">
        <h3 className="font-display text-xl text-theme mb-4 text-center">
          Ucapan dari Tamu {entries.length > 0 && `(${entries.length})`}
        </h3>
        {loading ? (
          <p className="text-center text-sm text-theme-soft">Memuat ucapan...</p>
        ) : entries.length === 0 ? (
          <p className="text-center text-sm text-theme-soft">Jadilah yang pertama memberi ucapan!</p>
        ) : (
          <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
            {entries.map((entry) => (
              <div key={entry.id} className="glass-card border border-accent rounded-2xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-medium text-sm text-theme">{entry.nama}</p>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    entry.kehadiran === 'Hadir' ? 'bg-green-100 text-green-700' :
                    entry.kehadiran === 'Tidak Hadir' ? 'bg-red-100 text-red-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {entry.kehadiran}
                  </span>
                </div>
                <p className="text-sm text-theme-soft leading-relaxed">{entry.pesan}</p>
              </div>
            ))}
          </div>
        )}
      </RevealSection>
    </section>
  );
}