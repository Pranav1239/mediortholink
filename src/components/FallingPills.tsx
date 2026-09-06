'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './FallingPills.module.css';

const pillData = [
  { text: 'Honesty & Integrity', delay: '0.1s', tilt: '-6deg', left: '10%', bottom: '22%' },
  { text: 'Sincerity in Care', delay: '0.25s', tilt: '8deg', left: '52%', bottom: '8%' },
  { text: 'Excellence Always', delay: '0.38s', tilt: '-10deg', left: '26%', bottom: '38%' },
  { text: 'Surgeon Partnerships', delay: '0.52s', tilt: '12deg', left: '48%', bottom: '32%' },
  { text: 'Global Quality', delay: '0.65s', tilt: '-5deg', left: '8%', bottom: '10%' },
];

export default function FallingPills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={styles.card}>
      <div className={styles.stage}>
        {pillData.map((pill) => (
          <div
            key={pill.text}
            className={`${styles.pill} ${isVisible ? styles.pillVisible : ''}`}
            style={
              {
                ['--pill-left' as string]: pill.left,
                ['--pill-bottom' as string]: pill.bottom,
                ['--pill-tilt' as string]: pill.tilt,
                ['--pill-delay' as string]: pill.delay,
              } as React.CSSProperties
            }
          >
            {pill.text}
          </div>
        ))}
      </div>
    </div>
  );
}
