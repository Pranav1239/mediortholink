'use client';

import React, { useEffect, useRef, useState } from 'react';

const pillData = [
  { text: 'Honesty & Integrity', delay: '0.1s', tilt: '-6deg', left: '10%', bottom: '22%' },
  { text: 'Sincerity in Care', delay: '0.25s', tilt: '+8deg', left: '52%', bottom: '8%' },
  { text: 'Excellence Always', delay: '0.38s', tilt: '-10deg', left: '26%', bottom: '38%' },
  { text: 'Surgeon Partnerships', delay: '0.52s', tilt: '+12deg', left: '48%', bottom: '32%' },
  { text: 'Global Quality', delay: '0.65s', tilt: '-5deg', left: '8%', bottom: '10%' },
];

export default function FallingPills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="specialities-card _03"
      style={{
        backgroundColor: '#0284c7',
        backgroundImage: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
        borderRadius: '1.75rem',
        padding: '2.5rem',
        position: 'relative',
        minHeight: '280px',
        overflow: 'hidden',
        boxShadow: '0 15px 35px -5px rgba(2, 132, 199, 0.3)',
      }}
    >
      <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '230px' }}>
        {pillData.map((pill, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              left: pill.left,
              bottom: pill.bottom,
              padding: '0.75rem 1.4rem',
              borderRadius: '9999px',
              border: '1.5px solid rgba(255, 255, 255, 0.65)',
              backgroundColor: 'rgba(255, 255, 255, 0.18)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer',
              userSelect: 'none',
              transform: isVisible
                ? `translateY(0) rotate(${pill.tilt})`
                : 'translateY(-240px) rotate(-25deg) scale(0.5)',
              opacity: isVisible ? 1 : 0,
              transition: `transform 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) ${pill.delay}, opacity 0.5s ease ${pill.delay}, background-color 0.25s ease, color 0.25s ease`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = `translateY(-10px) scale(1.1) rotate(0deg)`;
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.color = '#0284c7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = `translateY(0) rotate(${pill.tilt})`;
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.18)';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            {pill.text}
          </div>
        ))}
      </div>
    </div>
  );
}
