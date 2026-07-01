import fs from 'fs';
import path from 'path';
import { GuestbookEntry } from '@/types';

const DB_PATH = path.join(process.cwd(), 'data', 'guestbook.json');

function ensureDb() {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(DB_PATH)) fs.writeFileSync(DB_PATH, '[]', 'utf-8');
}

export function getEntries(): GuestbookEntry[] {
  ensureDb();
  const raw = fs.readFileSync(DB_PATH, 'utf-8');
  try {
    return JSON.parse(raw) as GuestbookEntry[];
  } catch {
    return [];
  }
}

export function addEntry(entry: GuestbookEntry): GuestbookEntry[] {
  ensureDb();
  const entries = getEntries();
  entries.unshift(entry);
  fs.writeFileSync(DB_PATH, JSON.stringify(entries, null, 2), 'utf-8');
  return entries;
}
