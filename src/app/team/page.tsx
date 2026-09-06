import React from 'react';
import Link from 'next/link';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Vinod Kumar',
      role: 'Co-Founder & Director',
      bio: 'Founded MediOrtho Link in 2013 in Bangalore. Passionate about bringing global quality orthopaedic implants to the Indian subcontinent.',
      image: '/images/68f222a1a881f028d1757038_Frame_100.webp',
    },
    {
      name: 'Sunil Kumar',
      role: 'Co-Founder & Director',
      bio: 'Co-founded MediOrtho Link in 2013. Leads commercial expertise, logistics, and surgeon partnerships from Yeshwanthpur Bangalore.',
      image: '/images/696a7f5a729a13aa3d7cadbd_Frame_100_2.webp',
    },
    {
      name: 'Dr. A. R. Sharma',
      role: 'Clinical Advisory Lead',
      bio: 'Works closely with orthopedic surgeons to convert clinical insights into tangible, precision-engineered implants.',
      image: '/images/696a5e89f27fd687fae01719_Frame_100_1.webp',
    },
    {
      name: 'Rajesh V. N.',
      role: 'Quality & Regulatory Head',
      bio: 'Ensures 100% compliance with Government of India ISO & MSME certifications across all surgical goods.',
      image: '/images/696a7f5fcdcb2611feabd1a4_Frame_100.webp',
    },
  ];

  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', backgroundColor: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '1000px', paddingBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '12px' }}>
            MEDI ORTHO LINK LEADERSHIP
          </span>
          <h1 style={{ fontSize: '44px', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '20px' }}>
            Meet Our <span style={{ color: '#0ea5e9' }}>Founders &amp; Team</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto' }}>
            Founded in 2013 by Vinod Kumar &amp; Sunil Kumar, our team is dedicated to honesty, sincerity, and excellence in healthcare distribution.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginBottom: '60px' }}>
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: '32px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                textAlign: 'center',
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', margin: '0 auto 20px', border: '3px solid #0ea5e9' }}
              />
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '6px' }}>{member.name}</h3>
              <p style={{ fontSize: '14px', fontWeight: 600, color: '#0ea5e9', marginBottom: '14px' }}>{member.role}</p>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>{member.bio}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/contact" className="primary-button w-inline-block">
            <div className="primary-button-text">CONNECT WITH OUR LEADERSHIP</div>
            <div className="primary-button-bg"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
