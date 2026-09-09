'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { faqs } from '@/data/faqs';
import styles from './FaqAccordion.module.css';

const badgeIcon = '/images/68f06809395a46f2d4696554_Group_3.svg';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.eyebrowRow}>
          <Image src={badgeIcon} width={22} height={21} alt="" aria-hidden="true" className={styles.eyebrowIcon} />
          <p className={styles.eyebrowText}>FAQ</p>
        </div>
        <h2 className={styles.title}>Frequently Asked Questions</h2>
        <p className={styles.subtitle}>
          Learn more about MediOrtho Link, our Bangalore distribution facility, ISO &amp; MSME certifications, and surgeon partnerships.
        </p>
      </div>

      <div className={styles.list}>
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
              <button
                type="button"
                className={styles.question}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <span>{item.q}</span>
                <span className={styles.toggleIcon} aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              <div className={styles.answerWrap} style={{ maxHeight: isOpen ? '400px' : '0px' }}>
                <p className={styles.answer}>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
