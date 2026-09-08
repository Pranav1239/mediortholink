import React from 'react';
import Link from 'next/link';
import styles from '@/styles/subpage.module.css';
import shared from '@/styles/shared.module.css';
import local from './faqs.module.css';

const faqs = [
  {
    q: 'When was MediOrtho Link founded and where are you located?',
    a: 'MediOrtho Link was founded in the year 2013 in Bangalore. We operate from No. 18, 1st Floor, 1st Main Road, Gokul 1st Stage, 3rd Phase, Yeshwanthpur, Bangalore, Karnataka - 560022.',
  },
  {
    q: 'What certifications does MediOrtho Link hold?',
    a: 'We are certified by the Government of India with ISO 13485:2012 & MSME Registration, ensuring all orthopaedic implants and surgical goods meet international global quality standards.',
  },
  {
    q: 'What products does MediOrtho Link distribute?',
    a: 'We specialize in Orthopaedic Implants (joint replacement, trauma plates, interlocking systems, spinal fixation) and Surgical Goods & Instruments for hospitals and surgical centers.',
  },
  {
    q: 'How do you partner with orthopedic surgeons and medical device manufacturers?',
    a: 'We partner with reliable & innovative manufacturers to provide clinical and commercial expertise and a strong sales network across the Indian subcontinent. We also collaborate directly with orthopedic surgeons and academicians to transform clinical insights into tangible surgical implants.',
  },
  {
    q: 'What are MediOrtho Link’s core principles?',
    a: 'Our business is built on 3 core principles: 1. Compliance (ISO 13485:2012 adherence), 2. Quality Assurance (stringent quality norms and thorough checks), and 3. Commitment (collaboration and innovation in orthopedic care).',
  },
];

export default function FaqsPage() {
  return (
    <div className={styles.page}>
      <div className={`${styles.inner} ${styles.innerNarrow}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>FREQUENTLY ASKED QUESTIONS</span>
          <h1 className={styles.title}>
            Frequently Asked <span className={styles.accent}>Questions</span>
          </h1>
          <p className={`${styles.lede} ${styles.ledeTight}`}>
            Learn more about MediOrtho Link, our Bangalore distribution facility, ISO &amp; MSME certifications, and surgeon partnerships.
          </p>
        </div>

        <div className={local.list}>
          {faqs.map((item) => (
            <div key={item.q} className={local.item}>
              <h3 className={local.question}>{item.q}</h3>
              <p className={local.answer}>{item.a}</p>
            </div>
          ))}
        </div>

        <div className={styles.centered}>
          <Link href="/contact" className={shared.primaryButton}>
            <div className={shared.primaryButtonText}>HAVE MORE QUESTIONS? CONTACT US</div>
            <div className={shared.primaryButtonBg}></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
