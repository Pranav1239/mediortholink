import React from 'react';
import Link from 'next/link';

export default function ServicesPage() {
  const productsList = [
    {
      title: 'Orthopaedic Implants',
      desc: 'High-precision joint replacement systems, trauma plates, interlocking nails, and spinal implants engineered for global quality.',
      badge: 'ISO & MSME Certified',
      icon: '🦴',
    },
    {
      title: 'Surgical Goods & Instruments',
      desc: 'Complete range of surgical equipment, OR sets, power tools, and specialized orthopaedic instruments.',
      badge: 'Govt. Approved',
      icon: '✂️',
    },
    {
      title: 'Manufacturer Distribution Partnership',
      desc: 'Clinical and commercial expertise, expansive sales network, and market knowledge across the Indian subcontinent.',
      badge: 'Commercial Partner',
      icon: '🤝',
    },
    {
      title: 'Surgeon Clinical Collaborations',
      desc: 'Partnering directly with orthopedic surgeons and academicians to transform clinical insights into tangible surgical solutions.',
      badge: 'Clinical Insights',
      icon: '💡',
    },
  ];

  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', backgroundColor: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '1000px', paddingBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '12px' }}>
            MEDI ORTHO LINK PRODUCTS &amp; SERVICES
          </span>
          <h1 style={{ fontSize: '44px', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '20px' }}>
            Global Quality <span style={{ color: '#0ea5e9' }}>Implants &amp; Surgical Goods</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto' }}>
            Dedicated to innovation, manufacturing, and marketing of medical implants and instruments operating from our 2,500 sq. ft. facility at Yeshwanthpur, Bangalore.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '60px' }}>
          {productsList.map((prod, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '40px 32px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ fontSize: '36px' }}>{prod.icon}</span>
                  <span style={{ fontSize: '12px', fontWeight: 700, background: 'rgba(14, 165, 233, 0.1)', color: '#0ea5e9', padding: '6px 12px', borderRadius: '12px' }}>
                    {prod.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>{prod.title}</h3>
                <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.65 }}>{prod.desc}</p>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px dashed #e2e8f0' }}>
                <Link href="/appointment" style={{ fontSize: '14px', fontWeight: 700, color: '#0ea5e9', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Request Technical Catalog →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: '#0f172a', borderRadius: '24px', padding: '48px', color: '#ffffff', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px' }}>Need Specific Implant Specifications?</h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto 30px' }}>
            We understand customer needs and help fulfill requirements instead of focusing on selling. Reach out to our technical specialists in Bangalore.
          </p>
          <Link href="/contact" className="primary-button w-inline-block">
            <div className="primary-button-text">CONTACT OUR BANGALORE OFFICE</div>
            <div className="primary-button-bg"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
