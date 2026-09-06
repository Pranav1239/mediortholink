'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ProcessSteps() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const steps = [
    {
      num: '01',
      title: 'Surgeon & Partner Consultation',
      subtitle: 'Clinical Insights & Requirement Analysis',
      desc: 'We partner directly with orthopedic surgeons and healthcare professionals to translate real-world clinical requirements into precise implant specifications.',
      highlights: ['Clinical Case Consultation', 'Surgeon Collaboration', 'Custom Equipment Sourcing'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          <path d="M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"/>
        </svg>
      )
    },
    {
      num: '02',
      title: 'ISO & MSME Quality Assured Selection',
      subtitle: 'Global Quality & Certified Procurement',
      desc: 'Sourced and managed at our 2500 sq. ft. facility in Yeshwanthpur, Bangalore, ensuring full compliance with ISO standards and Government of India MSME registration.',
      highlights: ['ISO & MSME Certified', '2500 Sq. Ft. Facility', 'Global Implant Standards'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.8 2.3A.3.3 0 0 0 4.5 2.6V5A4 4 0 0 0 8 9h12a2 2 0 0 0 2-2V4.5a.5.5 0 0 0-.5-.5H4.8z"/>
          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
          <circle cx="12" cy="14" r="3"/>
          <path d="M12 17v4"/>
          <path d="M8 21h8"/>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Subcontinent Network & Support',
      subtitle: 'Swift Distribution & Technical Expertise',
      desc: 'Our dedicated sales and technical team delivers orthopaedic implants and surgical goods across the Indian subcontinent with exceptional customer service.',
      highlights: ['Indian Subcontinent Reach', 'Technical Expertise', 'Dedicated Customer Support'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m9 12 2 2 4-4"/>
        </svg>
      )
    }
  ];

  return (
    <section className="section process-steps" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%)', padding: '80px 0 60px', position: 'relative', height: 'auto', minHeight: 'auto' }}>
      <div className="container">
        {/* Header Title */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '20px', color: '#0ea5e9', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
            <img src="/images/68f06809395a46f2d4696554_Group_3.svg" alt="Process Icon" style={{ width: '16px', height: '16px' }} />
            Our Clinical Partnership Process
          </div>
          <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '16px' }}>
            Transforming Clinical Insights into <span style={{ color: '#0ea5e9' }}>Tangible Implants</span>
          </h2>
          <p style={{ fontSize: '17px', color: '#64748b', lineHeight: 1.6 }}>
            We go beyond physical products by partnering with orthopedic surgeons, healthcare professionals, and medical academicians across India.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', position: 'relative', alignItems: 'stretch' }}>
          {steps.map((step, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  background: isHovered ? '#ffffff' : 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '24px',
                  padding: '40px 32px',
                  border: isHovered ? '2px solid #0ea5e9' : '2px solid #e2e8f0',
                  boxShadow: isHovered ? '0 20px 40px rgba(14, 165, 233, 0.15)' : '0 10px 25px rgba(0, 0, 0, 0.03)',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease, background 0.3s ease',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  boxSizing: 'border-box'
                }}
              >
                {/* Top Badge & Number */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '16px',
                      background: isHovered ? 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)' : '#f1f5f9',
                      color: isHovered ? '#ffffff' : '#0ea5e9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {step.icon}
                  </div>
                  <span style={{ fontSize: '28px', fontWeight: 900, color: isHovered ? '#0ea5e9' : '#cbd5e1', transition: 'color 0.3s ease' }}>
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '0.8px', display: 'block', marginBottom: '6px' }}>
                    {step.subtitle}
                  </span>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '14px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, marginBottom: '24px' }}>
                    {step.desc}
                  </p>
                </div>

                {/* Highlights List */}
                <div style={{ borderTop: '1px dashed #e2e8f0', paddingTop: '20px', marginTop: 'auto' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {step.highlights.map((item, hIdx) => (
                      <span
                        key={hIdx}
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          color: '#334155',
                          background: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          padding: '4px 10px',
                          borderRadius: '12px'
                        }}
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link
            href="/appointment"
            className="primary-button w-inline-block"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}
          >
            <div className="primary-button-text">REQUEST PRODUCT CATALOG &amp; IMPLANTS</div>
            <div className="primary-button-bg"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
