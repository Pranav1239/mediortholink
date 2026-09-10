'use client';

import React, { useState } from 'react';
import styles from '@/styles/subpage.module.css';
import shared from '@/styles/shared.module.css';
import local from './contact.module.css';

const OFFICE_ADDRESS = 'No. 18, 1st Floor, 1st Main Road, Gokul 1st Stage, 3rd Phase, Yeshwanthpur, Bangalore, Karnataka - 560022';
const OFFICE_PHONE = '+91 98451 64422';
const SALES_PHONE = '+91 94830 64422';
const OFFICE_PHONE_TEL = '+919845164422';
const WHATSAPP_NUMBER = '919845164422';
const WHATSAPP_MESSAGE = "Hi MediOrtho Link, I'd like to know more about your orthopaedic implants & surgical goods.";
const EMAIL = 'mediortholink4@gmail.com';

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2c-5.514 0-9.997 4.483-9.997 9.997 0 1.763.464 3.489 1.346 5.005L2 22l5.13-1.336a9.965 9.965 0 0 0 4.874 1.24h.004c5.514 0 9.996-4.483 9.996-9.997C21.999 6.483 17.518 2 12.004 2zm0 18.176h-.003a8.16 8.16 0 0 1-4.157-1.14l-.298-.177-3.045.793.813-2.968-.194-.305a8.156 8.156 0 0 1-1.253-4.382c0-4.508 3.669-8.177 8.18-8.177 2.185 0 4.238.852 5.783 2.398a8.126 8.126 0 0 1 2.395 5.786c0 4.508-3.67 8.172-8.221 8.172z" />
    </svg>
  );
}

const infoRows = [
  {
    icon: <MapPinIcon />,
    title: 'Office Address',
    lines: ['No. 18, 1st Floor, 1st Main Road,', 'Gokul 1st Stage, 3rd Phase, Yeshwanthpur,', 'Bangalore, Karnataka - 560022'],
  },
  {
    icon: <PhoneIcon />,
    title: 'Phone',
    lines: [`Office: ${OFFICE_PHONE}`, `Sales: ${SALES_PHONE}`],
  },
  {
    icon: <MailIcon />,
    title: 'Email',
    lines: [EMAIL, 'info@mediortholink.com'],
  },
  {
    icon: <ShieldIcon />,
    title: 'Certifications',
    lines: ['Govt. of India Certified', 'ISO 13485:2012 & MSME Registered'],
  },
];

export default function ContactPage() {
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
          category: formData.get('category'),
          name: formData.get('name'),
          phone: formData.get('phone'),
          preferredDate: formData.get('date'),
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
    <div className={styles.page}>
      <div className={`${styles.inner} ${local.pageInner}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>CONTACT MEDIORTHO LINK</span>
          <h1 className={styles.title}>
            Get in Touch with Our <span className={styles.accent}>Bangalore Office</span>
          </h1>
          <p className={`${styles.lede} ${styles.ledeNarrow}`}>
            Operating from our facility at Yeshwanthpur, Bangalore. We are here to assist surgeons, hospitals, and medical device partners across the Indian subcontinent.
          </p>
        </div>

        <div className={local.contactGrid}>
          {/* LEFT: Info panel */}
          <div className={local.infoPanel}>
            <h2 className={local.infoPanelTitle}>Contact Information</h2>

            <div className={local.quickActions}>
              <a href={`tel:${OFFICE_PHONE_TEL}`} className={local.quickActionBtn}>
                <PhoneIcon />
                Call Now
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${local.quickActionBtn} ${local.quickActionBtnWhatsapp}`}
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <a href={`mailto:${EMAIL}`} className={local.quickActionBtn}>
                <MailIcon />
                Email
              </a>
            </div>

            <ul className={local.infoList}>
              {infoRows.map((row) => (
                <li key={row.title} className={local.infoRow}>
                  <span className={local.infoRowIcon}>{row.icon}</span>
                  <span>
                    <span className={local.infoRowTitle}>{row.title}</span>
                    <span className={local.infoRowBody}>
                      {row.lines.map((line, i) => (
                        <React.Fragment key={line}>
                          {line}
                          {i < row.lines.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <div className={local.mapWrap}>
              <iframe
                title="MediOrtho Link office location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={local.mapFrame}
              />
            </div>
          </div>

          {/* RIGHT: Form panel */}
          <div className={local.formPanel}>
            <h2 className={local.formTitle}>Send Us a Direct Inquiry</h2>
            <p className={local.formSubtitle}>
              Tell us what you&rsquo;re looking for and our Bangalore team will get back to you shortly.
            </p>
            <form className={local.form} onSubmit={handleSubmit}>
              <div className={local.formFull}>
                <label htmlFor="contact-category" className={styles.formLabel}>What can we help with?</label>
                <select id="contact-category" name="category" required className={styles.formControl} defaultValue="">
                  <option value="" disabled>Choose an inquiry type</option>
                  <option value="Orthopaedic Implants">Orthopaedic Implants (Joints/Trauma/Spine)</option>
                  <option value="Surgical Goods & Instruments">Surgical Goods &amp; Instruments</option>
                  <option value="Manufacturer Partnership">Manufacturer Partnership</option>
                  <option value="Surgeon / Clinical Collaboration">Surgeon / Clinical Collaboration</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-name" className={styles.formLabel}>Your Name / Healthcare Facility</label>
                <input id="contact-name" name="name" type="text" placeholder="Dr. / Hospital Name" required className={styles.formControl} />
              </div>
              <div>
                <label htmlFor="contact-phone" className={styles.formLabel}>Phone Number</label>
                <input id="contact-phone" name="phone" type="tel" placeholder="+91..." required className={styles.formControl} />
              </div>
              <div className={local.formFull}>
                <label htmlFor="contact-date" className={styles.formLabel}>Preferred Contact Date (optional)</label>
                <input id="contact-date" name="date" type="date" className={styles.formControl} />
              </div>
              <div className={local.formActions}>
                <button type="submit" className={`${shared.primaryButton} ${local.submitButton}`} disabled={status === 'submitting'}>
                  <span className={shared.primaryButtonText}>
                    {status === 'submitting' ? 'SUBMITTING…' : 'SUBMIT INQUIRY TO MEDI ORTHO LINK'}
                  </span>
                  <span className={shared.primaryButtonBg}></span>
                </button>
                {status === 'submitted' && (
                  <p className={styles.formNote}>Thank you &mdash; your inquiry has been recorded. Our team will be in touch shortly.</p>
                )}
                {status === 'error' && (
                  <p className={local.formError}>Something went wrong. Please try again, or call us directly at {OFFICE_PHONE}.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
