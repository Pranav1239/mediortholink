import React from 'react';
import Link from 'next/link';

export default function FaqsPage() {
  const faqs = [
    {
      q: 'When was MediOrtho Link founded and where are you located?',
      a: 'MediOrtho Link was founded in the year 2013 in Bangalore by Vinod Kumar & Sunil Kumar. We operate from a 2,500 square feet office and warehousing facility in Yeshwanthpur, Bangalore, Karnataka.',
    },
    {
      q: 'What certifications does MediOrtho Link hold?',
      a: 'We are certified by the Government of India with ISO & MSME Registration, ensuring all orthopaedic implants and surgical goods meet international global quality standards.',
    },
    {
      q: 'What products does MediOrtho Link distribute?',
      a: 'We specialize in Orthopaedic Implants (joint replacement, trauma plates, interlocking systems, spinal fixation) and Surgical Goods & Instruments for hospitals and surgical centers.',
    },
    {
      q: 'How do you partner with orthopedic surgeons and medical device manufacturers?',
      a: 'We partner with reliable & innovative manufacturers to provide clinical and commercial expertise and a strong sales network across the Indian subcontinent. We also collaborate directly with orthopedic surgeons and academicians to transform clinical insights into tangible surgical implants.',
    },
    {
      q: 'What are MediOrtho Link’s core principles?',
      a: 'Our business is built on 3 core principles: 1. Honesty (building strong trust & high integrity), 2. Sincerity (caring for customer needs above selling), and 3. Excellence (striving for betterment at every level).',
    },
  ];

  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', backgroundColor: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '900px', paddingBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '12px' }}>
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h1 style={{ fontSize: '44px', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '20px' }}>
            Frequently Asked <span style={{ color: '#0ea5e9' }}>Questions</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6, maxWidth: '650px', margin: '0 auto' }}>
            Learn more about MediOrtho Link, our Bangalore distribution facility, ISO &amp; MSME certifications, and surgeon partnerships.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '60px' }}>
          {faqs.map((item, idx) => (
            <div key={idx} style={{ background: '#ffffff', borderRadius: '20px', padding: '32px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.03)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>{item.q}</h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7 }}>{item.a}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/contact" className="primary-button w-inline-block">
            <div className="primary-button-text">HAVE MORE QUESTIONS? CONTACT US</div>
            <div className="primary-button-bg"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
