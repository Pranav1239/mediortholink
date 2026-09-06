import React from 'react';
import Link from 'next/link';
import styles from './about.module.css';

const stats = [
  { number: '2013', label: 'Year Established', desc: 'Founded in Bangalore by Vinod & Sunil' },
  { number: '2,500', label: 'Sq. Ft. HQ Facility', desc: 'Warehousing in Yeshwanthpur, Bangalore' },
  { number: '100%', label: 'Certified Compliance', desc: 'Govt. ISO 13485 & MSME Registered' },
  { number: '10+ Yrs', label: 'Subcontinent Supply', desc: 'Trusted by leading surgeons & hospitals' },
];

const principles = [
  {
    icon: '🤝',
    title: '1. Honesty',
    body: 'Being honest we build a stronger trust with our customers. In turn, having high integrity gives healthcare providers complete confidence in our products.',
  },
  {
    icon: '❤️',
    title: '2. Sincerity',
    body: 'We prioritize surgeon and patient requirements over selling. We do things with utmost care, dedication, and non-attachment.',
  },
  {
    icon: '⭐',
    title: '3. Excellence',
    body: 'We strive for betterment at each and every level of our supply network, continuously motivating ourselves to surpass benchmark quality standards.',
  },
];

const teamMembers = [
  {
    name: 'Vinod Kumar',
    role: 'Co-Founder & Managing Director',
    bio: 'Founded MediOrtho Link in 2013. Dedicated to bringing international quality orthopaedic implants to healthcare providers.',
    image: '/images/68f222a1a881f028d1757038_Frame_100.webp',
  },
  {
    name: 'Sunil Kumar',
    role: 'Co-Founder & Operations Director',
    bio: 'Co-founded MediOrtho Link in 2013. Directs commercial distribution, OT fulfillment, and surgeon partnerships.',
    image: '/images/696a7f5a729a13aa3d7cadbd_Frame_100_2.webp',
  },
  {
    name: 'Dr. A. R. Sharma',
    role: 'Clinical Advisory Lead',
    bio: 'Transforms clinical feedback into precision-engineered implants through active surgeon collaboration.',
    image: '/images/696a5e89f27fd687fae01719_Frame_100_1.webp',
  },
  {
    name: 'Rajesh V. N.',
    role: 'Quality & Regulatory Head',
    bio: 'Oversees 100% ISO & MSME regulatory compliance and batch quality verification across all surgical goods.',
    image: '/images/696a7f5fcdcb2611feabd1a4_Frame_100.webp',
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        
        {/* Hero Section */}
        <div className={styles.hero}>
          <span className={styles.badge}>ABOUT MEDIORTHO LINK • BANGALORE</span>
          <h1 className={styles.heroTitle}>
            Transforming Clinical Insights into <span className={styles.heroAccent}>Tangible Surgical Implants</span>
          </h1>
          <p className={styles.heroLede}>
            Founded in 2013 by <strong>Vinod Kumar</strong> &amp; <strong>Sunil Kumar</strong>, MediOrtho Link is a leading Government of India ISO &amp; MSME certified distributor of orthopaedic implants &amp; surgical goods operating from a 2,500 sq. ft. facility in Yeshwanthpur, Bangalore.
          </p>
        </div>

        {/* Key Metrics Stats */}
        <div className={styles.statsGrid}>
          {stats.map((item, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statNumber}>{item.number}</div>
              <div className={styles.statLabel}>{item.label}</div>
              <p className={styles.statDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Our Story & Founders Spotlight */}
        <div className={styles.storyGrid}>
          <div className={styles.storyContent}>
            <h2 className={styles.storyTitle}>Our Journey &amp; Clinical Mission</h2>
            <p className={styles.storyPara}>
              MediOrtho Link was established in 2013 in Bangalore with a mission to bridge the gap between world-class orthopaedic engineering and surgeons in the Indian subcontinent. Operating out of a 2,500 square feet facility at Yeshwanthpur, we manufacture and distribute global-grade surgical implants and operating room tools.
            </p>
            <p className={styles.storyPara}>
              Beyond supplying physical products, we actively partner with orthopaedic surgeons, medical academicians, and healthcare centers. We listen to clinical feedback in the operating theater and transform surgical insights into durable, high-precision implants designed for superior anatomical performance.
            </p>
          </div>

          <div className={styles.founderCard}>
            <img
              src="/images/698c2f523d1538d40003f912_Frame_1000003074.webp"
              alt="Vinod Kumar & Sunil Kumar"
              className={styles.founderImage}
            />
            <div className={styles.founderBody}>
              <h3 className={styles.founderName}>Vinod Kumar &amp; Sunil Kumar</h3>
              <p className={styles.founderRole}>Founders, MediOrtho Link (Est. 2013)</p>
              <p className={styles.founderQuote}>
                &ldquo;Our commitment is built on conscious business principles &mdash; prioritizing surgeon trust, patient safety, and genuine healthcare value above transactions.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className={styles.valuesSection}>
          <div className={styles.valuesHeader}>
            <span className={styles.valuesEyebrow}>CONSCIOUS BUSINESS MODEL</span>
            <h2 className={styles.valuesTitle}>Our 3 Core Principles</h2>
            <p className={styles.valuesLede}>
              MediOrtho Link works on a conscious business model, maximizing value alongside the happiness, trust, and success of everyone connected with us.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {principles.map((item, idx) => (
              <div key={idx} className={styles.valueCard}>
                <span className={styles.valueIcon}>{item.icon}</span>
                <h4 className={styles.valueName}>{item.title}</h4>
                <p className={styles.valueText}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Facility & Customer Service Grid */}
        <div className={styles.facilityGrid}>
          <div className={styles.facilityCard}>
            <div className={styles.facilityIcon}>🏢</div>
            <h3 className={styles.facilityTitle}>2,500 Sq. Ft. Distribution HQ</h3>
            <p className={styles.facilityText}>
              Located strategically in Yeshwanthpur, Bangalore, our modern warehouse facility maintains controlled sterile inventory and rapid 24/7 emergency dispatch to operating suites across Karnataka and South India.
            </p>
          </div>

          <div className={styles.facilityCard}>
            <div className={styles.facilityIcon}>🛡️</div>
            <h3 className={styles.facilityTitle}>Govt. ISO &amp; MSME Certified</h3>
            <p className={styles.facilityText}>
              Certified by the Government of India with ISO 13485 quality management system compliance and MSME registration, guaranteeing strict traceability and high biological safety standards.
            </p>
          </div>
        </div>

        {/* Leadership Team Preview */}
        <div className={styles.teamSection}>
          <div className={styles.teamHeader}>
            <span className={styles.teamEyebrow}>LEADERSHIP &amp; SPECIALISTS</span>
            <h2 className={styles.teamTitle}>Meet Our Leadership Team</h2>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, idx) => (
              <div key={idx} className={styles.teamMemberCard}>
                <img src={member.image} alt={member.name} className={styles.memberAvatar} />
                <h4 className={styles.memberName}>{member.name}</h4>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={styles.ctaWrap}>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              backgroundColor: '#0ea5e9',
              color: '#ffffff',
              padding: '16px 36px',
              borderRadius: '9999px',
              fontWeight: 800,
              fontSize: '15px',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(14, 165, 233, 0.4)',
              transition: 'transform 0.2s ease, background-color 0.2s ease',
            }}
          >
            CONNECT WITH MEDI ORTHO LINK LEADERSHIP →
          </Link>
        </div>

      </div>
    </div>
  );
}

