'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', backgroundColor: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '1000px', paddingBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '12px' }}>
            CONTACT MEDIORTHO LINK
          </span>
          <h1 style={{ fontSize: '44px', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '20px' }}>
            Get in Touch with Our <span style={{ color: '#0ea5e9' }}>Bangalore Office</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
            Operating from our 2,500 sq. ft. facility at Yeshwanthpur, Bangalore. We are here to assist surgeons, hospitals, and medical device partners across the Indian subcontinent.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '60px' }}>
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '36px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)' }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>📍</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Office Address</h3>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6 }}>
              2,500 Sq. Ft. Facility, Yeshwanthpur,<br />
              Bangalore, Karnataka, India
            </p>
          </div>

          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '36px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)' }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>📞</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Founders &amp; Support</h3>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6 }}>
              Vinod Kumar &amp; Sunil Kumar<br />
              Phone: +91 98450 00000<br />
              Email: info@mediortholink.com
            </p>
          </div>

          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '36px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)' }}>
            <div style={{ fontSize: '32px', marginBottom: '16px' }}>🛡️</div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>Government Certifications</h3>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6 }}>
              Govt. of India Certified<br />
              ISO &amp; MSME Registered<br />
              Global Quality Standard Implants
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '48px', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a', marginBottom: '24px', textAlign: 'center' }}>Send Us a Direct Inquiry</h2>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Your Name / Designation</label>
              <input type="text" placeholder="Dr. / Hospital Procurement Manager" required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '15px' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Phone Number</label>
              <input type="tel" placeholder="+91..." required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '15px' }} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: '#334155', marginBottom: '8px' }}>Implant / Surgical Goods Requirement Details</label>
              <textarea rows={4} placeholder="Please specify your product or partnership requirements..." required style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '15px' }}></textarea>
            </div>
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '10px' }}>
              <button type="submit" className="primary-button" style={{ border: 'none', cursor: 'pointer' }}>
                SUBMIT INQUIRY TO MEDI ORTHO LINK
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
