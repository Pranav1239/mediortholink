'use client';

import React, { useState } from 'react';
import styles from '@/app/page.module.css';

export default function HomeInquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      id="wf-form-Contact-Form"
      name="wf-form-Contact-Form"
      className={styles.contactForm}
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h2 className={styles.appointmentTitle}>Request Implants &amp; Surgical Goods</h2>
      <div className={styles.formFields}>
        <label htmlFor="field" className={styles.inputTitle}>Select Category</label>
        <select id="field" name="field" required className={styles.selectDoctor} defaultValue="">
          <option value="">Choose Product Category</option>
          <option value="Orthopaedic Implants">Orthopaedic Implants (Joints/Trauma/Spine)</option>
          <option value="Surgical Goods">Surgical Goods &amp; Instruments</option>
          <option value="Manufacturer Partnership">Manufacturer Partnership</option>
          <option value="Surgeon Collaboration">Surgeon / Clinical Collaboration</option>
        </select>
      </div>
      <div className={styles.formFields}>
        <label htmlFor="Your-Name" className={styles.inputTitle}>Your Name / Healthcare Facility</label>
        <input className={styles.inputField} maxLength={256} name="Your-Name" placeholder="Dr. / Hospital Name" type="text" id="Your-Name" required />
      </div>
      <div className={styles.formFields}>
        <label htmlFor="Phone-Number" className={styles.inputTitle}>Phone Number</label>
        <input className={styles.inputField} maxLength={256} name="Phone-Number" placeholder="+91..." type="tel" id="Phone-Number" required />
      </div>
      <div className={styles.formFields}>
        <label htmlFor="Date" className={styles.inputTitle}>Preferred Contact Date</label>
        <input type="date" id="Date" name="Date" className={styles.inputField} />
      </div>
      <button type="submit" className={styles.contactButton}>
        {submitted ? 'Inquiry Received — We Will Be In Touch' : 'Submit Inquiry Now'}
      </button>
    </form>
  );
}
