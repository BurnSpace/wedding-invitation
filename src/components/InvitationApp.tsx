'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import config from '@/config/config.json';
import CoverScreen from './CoverScreen';
import HeroSection from './HeroSection';
import EventSection from './EventSection';
import LoveStorySection from './LoveStorySection';
import GallerySection from './GallerySection';
import QrCodeSection from './QrCodeSection';
import GiftSection from './GiftSection';
import RsvpSection from './RsvpSection';
import FooterSection from './FooterSection';
import MusicButton from './MusicButton';
import ThemeSwitcher from './ThemeSwitcher';
import BottomNav from './BottomNav';
import { useBackgroundMusic } from '@/hooks/useBackgroundMusic';

export default function InvitationApp() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get('to')?.replace(/\+/g, ' ') || 'Tamu Undangan';

  const [isOpened, setIsOpened] = useState(false);
  const [theme, setTheme] = useState(config.tema.default);

  const { isPlaying, play, toggle } = useBackgroundMusic(config.musik.url);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (isOpened) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpened]);

  const handleOpen = () => {
    setIsOpened(true);
    if (config.musik.autoplay) {
      play();
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isOpened && <CoverScreen guestName={guestName} onOpen={handleOpen} />}
      </AnimatePresence>

      {isOpened && (
        <main className="pb-16 sm:pb-0">
          <HeroSection />
          <EventSection />
          <LoveStorySection />
          <GallerySection />
          <QrCodeSection />
          <GiftSection />
          <RsvpSection />
          <FooterSection />

          <MusicButton isPlaying={isPlaying} onToggle={toggle} />
          <ThemeSwitcher theme={theme} setTheme={setTheme} />
          <BottomNav />
        </main>
      )}
    </>
  );
}
