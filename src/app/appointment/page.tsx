'use client';

import React, { useState } from 'react';
import styles from '@/styles/subpage.module.css';
import shared from '@/styles/shared.module.css';
import local from './appointment.module.css';

export default function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={styles.page}>
      <div className={`${styles.inner} ${styles.innerForm}`}>
        <div className={`${styles.header} ${styles.headerTight}`}>
          <span className={styles.eyebrow}>PRODUCT &amp; IMPLANT INQUIRY</span>
          <h1 className={`${styles.title} ${styles.titleSmall}`}>
            Request Implants &amp; <span className={styles.accent}>Surgical Goods</span>
          </h1>
          <p className={`${styles.lede} ${styles.ledeSmall}`}>
            MediOrtho Link Bangalore &bull; Certified by Govt. of India (ISO &amp; MSME). Partnering with orthopedic surgeons, hospitals, and academicians across India.
          </p>
        </div>

        <div className={styles.card}>
          <form
            className={local.form}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div>
              <label htmlFor="category" className={styles.formLabel}>Select Product / Service Category</label>
              <select id="category" name="category" required defaultValue="" className={styles.formControl}>
                <option value="">Choose Category</option>
                <option value="Joint & Trauma Implants">Orthopaedic Joint &amp; Trauma Implants</option>
                <option value="Spinal Systems">Spinal Fixation Systems</option>
                <option value="Surgical Goods & Tools">Surgical Goods &amp; Instruments</option>
                <option value="Distribution Partnership">Manufacturer Distribution Partnership</option>
                <option value="Surgeon Clinical Collaboration">Surgeon Clinical Collaboration</option>
              </select>
            </div>

            <div>
              <label htmlFor="practice" className={styles.formLabel}>Your Name / Healthcare Practice</label>
              <input id="practice" name="practice" type="text" placeholder="Dr. / Hospital Name" required className={styles.formControl} />
            </div>

            <div>
              <label htmlFor="phone" className={styles.formLabel}>Phone Number</label>
              <input id="phone" name="phone" type="tel" placeholder="+91..." required className={styles.formControl} />
            </div>

            <div>
              <label htmlFor="city" className={styles.formLabel}>City / Location</label>
              <input id="city" name="city" type="text" placeholder="e.g. Bangalore, Hyderabad, Chennai..." required className={styles.formControl} />
            </div>

            <div className={local.actions}>
              <button type="submit" className={`${shared.primaryButton} ${local.submit}`}>
                <span className={shared.primaryButtonText}>SUBMIT REQUEST TO MEDI ORTHO LINK</span>
                <span className={shared.primaryButtonBg}></span>
              </button>
              {submitted && (
                <p className={styles.formNote}>Request received &mdash; our Bangalore team will contact you shortly.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
