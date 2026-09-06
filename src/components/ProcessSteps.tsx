'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ProcessSteps.module.css';
import shared from '@/styles/shared.module.css';

const steps = [
  {
    num: '01',
    title: 'Surgeon & Partner Consultation',
    subtitle: 'Clinical Insights & Requirement Analysis',
    desc: 'We partner directly with orthopedic surgeons and healthcare professionals to translate real-world clinical requirements into precise implant specifications.',
    highlights: ['Clinical Case Consultation', 'Surgeon Collaboration', 'Custom Equipment Sourcing'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'ISO & MSME Quality Assured Selection',
    subtitle: 'Global Quality & Certified Procurement',
    desc: 'Sourced and managed at our 2500 sq. ft. facility in Yeshwanthpur, Bangalore, ensuring full compliance with ISO standards and Government of India MSME registration.',
    highlights: ['ISO & MSME Certified', '2500 Sq. Ft. Facility', 'Global Implant Standards'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.8 2.3A.3.3 0 0 0 4.5 2.6V5A4 4 0 0 0 8 9h12a2 2 0 0 0 2-2V4.5a.5.5 0 0 0-.5-.5H4.8z" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <circle cx="12" cy="14" r="3" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Subcontinent Network & Support',
    subtitle: 'Swift Distribution & Technical Expertise',
    desc: 'Our dedicated sales and technical team delivers orthopaedic implants and surgical goods across the Indian subcontinent with exceptional customer service.',
    highlights: ['Indian Subcontinent Reach', 'Technical Expertise', 'Dedicated Customer Support'],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  // Replaces the former GSAP + ScrollTrigger staggered reveal.
  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={shared.container}>
        {/* Header Title */}
        <div className={styles.intro}>
          <div className={styles.eyebrow}>
            <Image
              src="/images/68f06809395a46f2d4696554_Group_3.svg"
              width={22}
              height={21}
              alt=""
              aria-hidden="true"
              className={styles.eyebrowIcon}
            />
            Our Clinical Partnership Process
          </div>
          <h2 className={styles.heading}>
            Transforming Clinical Insights into <span className={styles.accent}>Tangible Implants</span>
          </h2>
          <p className={styles.sub}>
            We go beyond physical products by partnering with orthopedic surgeons, healthcare professionals, and medical academicians across India.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className={styles.grid} ref={gridRef}>
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`${styles.card} ${revealed ? styles.cardVisible : ''}`}
              style={{ ['--reveal-delay' as string]: `${idx * 0.12}s` }}
            >
              {/* Top Badge & Number */}
              <div className={styles.cardHead}>
                <div className={styles.iconBox}>{step.icon}</div>
                <span className={styles.stepNumber}>{step.num}</span>
              </div>

              {/* Content */}
              <div>
                <span className={styles.stepSubtitle}>{step.subtitle}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>

              {/* Highlights List */}
              <div className={styles.highlights}>
                <div className={styles.highlightList}>
                  {step.highlights.map((item) => (
                    <span key={item} className={styles.highlight}>
                      &#10003; {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className={styles.cta}>
          <Link href="/appointment" className={shared.primaryButton}>
            <div className={shared.primaryButtonText}>REQUEST PRODUCT CATALOG &amp; IMPLANTS</div>
            <div className={shared.primaryButtonBg}></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
