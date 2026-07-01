'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import config from '@/config/config.json';

interface CoverScreenProps {
  guestName: string;
  onOpen: () => void;
}

export default function CoverScreen({ guestName, onOpen }: CoverScreenProps) {
  const showPhoto = config.cover?.tampilkan_foto;
  const gayaFoto = config.cover?.gaya_foto ?? 'lingkaran';
  const isBackground = showPhoto && gayaFoto === 'background';
  const isCircle = showPhoto && gayaFoto === 'lingkaran';

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-center bg-theme overflow-hidden"
    >
      {isBackground && (
        <>
          <Image
            src={config.mempelai.wanita.foto}
            alt="Foto mempelai"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}

      {!isBackground && (
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='%23b8893a' stroke-width='1'%3E%3Ccircle cx='60' cy='60' r='40'/%3E%3C/g%3E%3C/svg%3E\")",
            backgroundSize: '120px 120px'
          }}
        />
      )}

      <div className="relative z-10 flex flex-col items-center pb-12">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className={`text-xs sm:text-sm uppercase tracking-[0.35em] mb-4 ${
            isBackground ? 'text-white/85' : 'text-theme-soft'
          }`}
        >
          We Invited You To Celebrate Our Wedding
        </motion.p>

        {isCircle && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="flex items-center justify-center mb-5"
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-accent shadow-lg -mr-4 z-10">
              <Image
                src={config.mempelai.pria.foto}
                alt={config.mempelai.pria.nama_panggilan}
                fill
                priority
                sizes="120px"
                className="object-cover"
              />
            </div>
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-accent shadow-lg">
              <Image
                src={config.mempelai.wanita.foto}
                alt={config.mempelai.wanita.nama_panggilan}
                fill
                priority
                sizes="120px"
                className="object-cover"
              />
            </div>
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`font-script text-5xl sm:text-6xl md:text-7xl mb-2 leading-tight ${
            isBackground ? 'text-white' : 'text-accent'
          }`}
        >
          {config.mempelai.pria.nama_panggilan}
          <span
            className={`block sm:inline font-body text-2xl sm:text-3xl mx-2 ${
              isBackground ? 'text-white/80' : 'text-theme-soft'
            }`}
          >
            &amp;
          </span>
          {config.mempelai.wanita.nama_panggilan}
        </motion.h1>

        {isBackground && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-white/90 text-sm mb-2"
          >
            {config.acara.tanggal_tampil}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="ornament-divider my-6 w-full max-w-xs"
        >
          <span className={isBackground ? 'text-white text-lg' : 'text-accent text-lg'}>❧</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="mb-10"
        >
          <p className={`text-sm mb-2 ${isBackground ? 'text-white/85' : 'text-theme-soft'}`}>
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <p
            className={`font-display text-xl sm:text-2xl font-semibold break-words max-w-xs sm:max-w-sm mx-auto ${
              isBackground ? 'text-white' : 'text-theme'
            }`}
          >
            {guestName}
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="group relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-accent text-white text-sm sm:text-base tracking-wide shadow-lg shadow-amber-900/20 active:scale-95 transition-transform"
        >
          <span className="animate-float inline-block">💌</span>
          Buka Undangan
        </motion.button>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className={`absolute bottom-6 left-0 right-0 text-center z-10 text-xs tracking-widest uppercase ${
          isBackground ? 'text-white/80' : 'text-theme-soft'
        }`}
      >
        {config.hashtag}
      </motion.p>
    </motion.div>
  );
}