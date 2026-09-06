import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '140px', minHeight: '80vh', backgroundColor: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '1000px', paddingBottom: '100px' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '12px' }}>
            ABOUT MEDIORTHO LINK
          </span>
          <h1 style={{ fontSize: '48px', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '20px' }}>
            Transforming Clinical Insights into <span style={{ color: '#0ea5e9' }}>Tangible Implants</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6, maxWidth: '750px', margin: '0 auto' }}>
            Founded in 2013 in Bangalore by Vinod Kumar &amp; Sunil Kumar, MediOrtho Link is a leading distributor of Orthopaedic Implants &amp; Surgical Goods certified by the Government of India with ISO &amp; MSME Registration.
          </p>
        </div>

        {/* Company Overview Card */}
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '48px', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)', marginBottom: '40px', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>Our Story &amp; Facility</h2>
          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.8, marginBottom: '20px' }}>
            MediOrtho Link was founded in the year 2013 in Bangalore, by Vinod Kumar &amp; Sunil Kumar. We are Distributors of Orthopaedic Implants &amp; Surgical Goods, certified by the Government of India with ISO &amp; MSME Registration. Operating from a 2,500 square feet office space at Yeshwanthpur, Bangalore, we are dedicated to innovation, manufacturing, and marketing of medical implants and instruments with a focus on &apos;global quality&apos; in the implants field.
          </p>
          <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.8 }}>
            To be a favored partner to reliable &amp; innovative medical device and equipment manufacturers, we provide clinical and commercial expertise, a strong sales network, and a deep knowledge of the healthcare market in the Indian subcontinent. We go beyond physical products by partnering with orthopedic surgeons, healthcare professionals, and medical academicians in our pursuit of transforming clinical insights into tangible implants.
          </p>
        </div>

        {/* Customer Service & Vision Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '40px' }}>
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(14, 165, 233, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0ea5e9', fontSize: '22px', fontWeight: 800, marginBottom: '20px' }}>
              🤝
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '14px' }}>Customer Service</h3>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7 }}>
              We at MediOrtho Link believe in high quality and exceptional customer service. We understand customers&apos; needs and help them to fulfill their requirements instead of focusing on selling our product.
            </p>
          </div>

          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: 'rgba(14, 165, 233, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0ea5e9', fontSize: '22px', fontWeight: 800, marginBottom: '20px' }}>
              🎯
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#0f172a', marginBottom: '14px' }}>Our Vision</h3>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.7 }}>
              We always want to keep an eye on the latest trends and put our customers&apos; wishes first. The interests of our customers are always the top priority for us. Finally, we want to bring a positive change to the Healthcare sector in India.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div style={{ background: '#0f172a', borderRadius: '24px', padding: '48px', color: '#ffffff', marginBottom: '60px' }}>
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 40px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>
              CONSCIOUS BUSINESS MODEL
            </span>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>Our 3 Core Principles</h2>
            <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.6 }}>
              MediOrtho Link works on a conscious business model, maximizing monetary benefits along with the happiness and success of everyone connected with us.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#38bdf8', marginBottom: '12px' }}>1. Honesty</h4>
              <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.6 }}>
                Being honest we build a stronger trust with our customers. In turn, having high integrity gives customers confidence.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#38bdf8', marginBottom: '12px' }}>2. Sincerity</h4>
              <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.6 }}>
                It is important to our consumers, to our company, and to one&apos;s self. We do things with utmost care, love and non-attachment.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '16px', padding: '30px' }}>
              <h4 style={{ fontSize: '20px', fontWeight: 700, color: '#38bdf8', marginBottom: '12px' }}>3. Excellence</h4>
              <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.6 }}>
                We strive for betterment at each and every level of our organization, motivating ourselves to become better than yesterday.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/contact" className="primary-button w-inline-block">
            <div className="primary-button-text">GET IN TOUCH WITH MEDI ORTHO LINK</div>
            <div className="primary-button-bg"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
