'use client';

import React, { useState } from 'react';
import styles from './AppointmentForm.module.css';
import shared from '@/styles/shared.module.css';

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <h3 className={styles.successTitle}>Appointment Request Received!</h3>
        <p className={styles.successBody}>
          Thank you for booking with Whhub Healthcare. Our staff will contact you shortly to confirm your schedule.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <div>
          <label htmlFor="af-name" className={styles.label}>Full Name *</label>
          <input id="af-name" name="name" type="text" required placeholder="John Doe" className={styles.control} />
        </div>
        <div>
          <label htmlFor="af-phone" className={styles.label}>Phone Number *</label>
          <input id="af-phone" name="phone" type="tel" required placeholder="+1 (555) 000-0000" className={styles.control} />
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label htmlFor="af-email" className={styles.label}>Email Address *</label>
          <input id="af-email" name="email" type="email" required placeholder="john@example.com" className={styles.control} />
        </div>
        <div>
          <label htmlFor="af-department" className={styles.label}>Department *</label>
          <select id="af-department" name="department" required defaultValue="orthopedics" className={styles.control}>
            <option value="orthopedics">Orthopedics</option>
            <option value="dermatology">Dermatology</option>
            <option value="neurology">Neurology</option>
            <option value="cardiology">Cardiology</option>
            <option value="oncology">Oncology</option>
            <option value="pediatrics">Pediatrics</option>
          </select>
        </div>
      </div>

      <div className={styles.row}>
        <div>
          <label htmlFor="af-date" className={styles.label}>Preferred Date *</label>
          <input id="af-date" name="date" type="date" required className={styles.control} />
        </div>
        <div>
          <label htmlFor="af-time" className={styles.label}>Preferred Time *</label>
          <input id="af-time" name="time" type="time" required className={styles.control} />
        </div>
      </div>

      <div>
        <label htmlFor="af-message" className={styles.label}>Message / Notes</label>
        <textarea id="af-message" name="message" rows={4} placeholder="Briefly describe your symptoms or reason for visit..." className={styles.control}></textarea>
      </div>

      <button type="submit" className={`${shared.primaryButton} ${styles.submit}`}>
        <span className={shared.primaryButtonText}>CONFIRM BOOKING</span>
        <span className={shared.primaryButtonBg}></span>
      </button>
    </form>
  );
}
