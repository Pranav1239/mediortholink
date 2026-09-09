'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './HeroCarousel.module.css';

interface Slide {
  src: string;
  alt: string;
  position: string;
}

const slides: Slide[] = [
  {
    src: '/images/new/hero/Banner2.jpg',
    alt: 'Sprinter at the starting blocks with ankle and shin bone structure highlighted',
    position: '58% 45%',
  },
  {
    src: '/images/new/hero/Banner3.jpg',
    alt: 'Athlete performing a lunge on the beach with hip, knee and wrist bone structure highlighted',
    position: '45% 35%',
  },
  {
    src: '/images/new/hero/Banner4.jpg',
    alt: 'Orthopaedic doctor presenting a full skeletal model',
    position: '28% 40%',
  },
  {
    src: '/images/new/hero/Banner5.jpg',
    alt: 'Close up of a hand in a yoga pose highlighting wrist and hand anatomy',
    position: '55% 50%',
  },
];

const SLIDE_DURATION = 5500;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="group"
      aria-label="Orthopaedic care highlights"
    >
      {slides.map((slide, index) => (
        <div key={slide.src} className={`${styles.slide} ${index === activeIndex ? styles.slideActive : ''}`}>
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: slide.position }}
          />
        </div>
      ))}

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.dots}>
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
