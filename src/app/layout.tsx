import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Jost, Great_Vibes } from 'next/font/google';
import './globals.css';
import config from '@/config/config.json';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['500', '600', '700']
});

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  weight: ['300', '400', '500', '600']
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-greatvibes',
  weight: '400'
});

export const metadata: Metadata = {
  title: `Undangan Pernikahan ${config.mempelai.pria.nama_panggilan} & ${config.mempelai.wanita.nama_panggilan}`,
  description: config.ucapan_pembuka,
  icons: { icon: '/favicon.ico' }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#b8893a'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${playfair.variable} ${jost.variable} ${greatVibes.variable}`}>
      <body className="font-body antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
