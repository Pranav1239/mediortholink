'use client';

import React from 'react';

export default function AppointmentPage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', backgroundColor: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '800px', paddingBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '12px' }}>
            PRODUCT &amp; IMPLANT INQUIRY
          </span>
          <h1 style={{ fontSize: '40px', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '16px' }}>
            Request Implants &amp; <span style={{ color: '#0ea5e9' }}>Surgical Goods</span>
          </h1>
          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6 }}>
            MediOrtho Link Bangalore • Certified by Govt. of India (ISO &amp; MSME). Partnering with orthopedic surgeons, hospitals, and academicians across India.
          </p>
        </div>

        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '48px', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)' }}>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Select Product / Service Category</label>
              <select required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '15px' }}>
                <option value="">Choose Category</option>
                <option value="Joint & Trauma Implants">Orthopaedic Joint &amp; Trauma Implants</option>
                <option value="Spinal Systems">Spinal Fixation Systems</option>
                <option value="Surgical Goods & Tools">Surgical Goods &amp; Instruments</option>
                <option value="Distribution Partnership">Manufacturer Distribution Partnership</option>
                <option value="Surgeon Clinical Collaboration">Surgeon Clinical Collaboration</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Your Name / Healthcare Practice</label>
              <input type="text" placeholder="Dr. / Hospital Name" required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '15px' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Phone Number</label>
              <input type="tel" placeholder="+91..." required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '15px' }} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>City / Location</label>
              <input type="text" placeholder="e.g. Bangalore, Hyderabad, Chennai..." required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '15px' }} />
            </div>

            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <button type="submit" className="primary-button" style={{ border: 'none', cursor: 'pointer', width: '100%', justifyContent: 'center' }}>
                SUBMIT REQUEST TO MEDI ORTHO LINK
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
