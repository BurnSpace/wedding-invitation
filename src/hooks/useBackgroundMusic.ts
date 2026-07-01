'use client';

import { useEffect, useRef, useState } from 'react';

export function useBackgroundMusic(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.55;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, [src]);

  const play = async () => {
    try {
      await audioRef.current?.play();
      setIsPlaying(true);
    } catch (err) {
      // autoplay diblokir browser, butuh interaksi user
      setIsPlaying(false);
    }
  };

  const pause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return { isPlaying, play, pause, toggle };
}
