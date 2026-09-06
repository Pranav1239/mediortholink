'use client';

import React, { useState } from 'react';
import styles from '@/styles/subpage.module.css';
import shared from '@/styles/shared.module.css';
import local from './contact.module.css';

const contactCards = [
  {
    icon: '📍',
    title: 'Office Address',
    lines: ['2,500 Sq. Ft. Facility, Yeshwanthpur,', 'Bangalore, Karnataka, India'],
  },
  {
    icon: '📞',
    title: 'Founders & Support',
    lines: ['Vinod Kumar & Sunil Kumar', 'Phone: +91 98450 00000', 'Email: info@mediortholink.com'],
  },
  {
    icon: '🛡️',
    title: 'Government Certifications',
    lines: ['Govt. of India Certified', 'ISO & MSME Registered', 'Global Quality Standard Implants'],
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>CONTACT MEDIORTHO LINK</span>
          <h1 className={styles.title}>
            Get in Touch with Our <span className={styles.accent}>Bangalore Office</span>
          </h1>
          <p className={`${styles.lede} ${styles.ledeNarrow}`}>
            Operating from our 2,500 sq. ft. facility at Yeshwanthpur, Bangalore. We are here to assist surgeons, hospitals, and medical device partners across the Indian subcontinent.
          </p>
        </div>

        <div className={`${styles.grid} ${styles.gridWide}`}>
          {contactCards.map((card) => (
            <div key={card.title} className={local.infoCard}>
              <div className={local.infoIcon}>{card.icon}</div>
              <h3 className={local.infoTitle}>{card.title}</h3>
              <p className={local.infoBody}>
                {card.lines.map((line, i) => (
                  <React.Fragment key={line}>
                    {line}
                    {i < card.lines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className={styles.card}>
          <h2 className={local.formTitle}>Send Us a Direct Inquiry</h2>
          <form
            className={local.form}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label htmlFor="contact-name" className={styles.formLabel}>Your Name / Designation</label>
              <input id="contact-name" name="name" type="text" placeholder="Dr. / Hospital Procurement Manager" required className={styles.formControl} />
            </div>
            <div>
              <label htmlFor="contact-phone" className={styles.formLabel}>Phone Number</label>
              <input id="contact-phone" name="phone" type="tel" placeholder="+91..." required className={styles.formControl} />
            </div>
            <div className={local.formFull}>
              <label htmlFor="contact-details" className={styles.formLabel}>Implant / Surgical Goods Requirement Details</label>
              <textarea id="contact-details" name="details" rows={4} placeholder="Please specify your product or partnership requirements..." required className={styles.formControl}></textarea>
            </div>
            <div className={local.formActions}>
              <button type="submit" className={shared.primaryButton}>
                <span className={shared.primaryButtonText}>SUBMIT INQUIRY TO MEDI ORTHO LINK</span>
                <span className={shared.primaryButtonBg}></span>
              </button>
              {submitted && (
                <p className={styles.formNote}>Thank you &mdash; your inquiry has been recorded. Our team will be in touch.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
