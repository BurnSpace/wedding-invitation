import { NextRequest, NextResponse } from 'next/server';
import { addEntry, getEntries } from '@/lib/guestbookStore';
import { GuestbookEntry } from '@/types';

export async function GET() {
  const entries = getEntries();
  return NextResponse.json({ entries });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nama, kehadiran, pesan } = body;

    if (!nama || !kehadiran || !pesan) {
      return NextResponse.json({ error: 'Semua field wajib diisi.' }, { status: 400 });
    }

    if (!['Hadir', 'Tidak Hadir', 'Masih Ragu'].includes(kehadiran)) {
      return NextResponse.json({ error: 'Nilai kehadiran tidak valid.' }, { status: 400 });
    }

    const entry: GuestbookEntry = {
      id: crypto.randomUUID(),
      nama: String(nama).slice(0, 100),
      kehadiran,
      pesan: String(pesan).slice(0, 500),
      createdAt: new Date().toISOString()
    };

    const entries = addEntry(entry);
    return NextResponse.json({ entries }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: 'Terjadi kesalahan pada server.' }, { status: 500 });
  }
}
