'use client';

import React, { useState } from 'react';
import styles from '@/app/page.module.css';

export default function HomeInquiryForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus('submitting');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: formData.get('field'),
          name: formData.get('Your-Name'),
          phone: formData.get('Phone-Number'),
          preferredDate: formData.get('Date'),
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('submitted');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form
      id="wf-form-Contact-Form"
      name="wf-form-Contact-Form"
      className={styles.contactForm}
      onSubmit={handleSubmit}
    >
      <h2 className={styles.appointmentTitle}>Request Implants &amp; Surgical Goods</h2>
      <div className={styles.formFields}>
        <label htmlFor="field" className={styles.inputTitle}>Select Category</label>
        <select id="field" name="field" required className={styles.selectDoctor} defaultValue="">
          <option value="">Choose Product Category</option>
          <option value="Orthopaedic Implants">Orthopaedic Implants (Joints/Trauma/Spine)</option>
          <option value="Surgical Goods & Instruments">Surgical Goods &amp; Instruments</option>
          <option value="Manufacturer Partnership">Manufacturer Partnership</option>
          <option value="Surgeon / Clinical Collaboration">Surgeon / Clinical Collaboration</option>
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
      <button type="submit" className={styles.contactButton} disabled={status === 'submitting'}>
        {status === 'submitted'
          ? 'Inquiry Received — We Will Be In Touch'
          : status === 'error'
          ? 'Something Went Wrong — Try Again'
          : status === 'submitting'
          ? 'Submitting…'
          : 'Submit Inquiry Now'}
      </button>
    </form>
  );
}
