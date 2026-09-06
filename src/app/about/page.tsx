import React from 'react';
import Link from 'next/link';
import styles from '@/styles/subpage.module.css';
import shared from '@/styles/shared.module.css';

const principles = [
  {
    title: '1. Honesty',
    body: 'Being honest we build a stronger trust with our customers. In turn, having high integrity gives customers confidence.',
  },
  {
    title: '2. Sincerity',
    body: 'It is important to our consumers, to our company, and to one’s self. We do things with utmost care, love and non-attachment.',
  },
  {
    title: '3. Excellence',
    body: 'We strive for betterment at each and every level of our organization, motivating ourselves to become better than yesterday.',
  },
];

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>ABOUT MEDIORTHO LINK</span>
          <h1 className={`${styles.title} ${styles.titleLarge}`}>
            Transforming Clinical Insights into <span className={styles.accent}>Tangible Implants</span>
          </h1>
          <p className={styles.lede}>
            Founded in 2013 in Bangalore by Vinod Kumar &amp; Sunil Kumar, MediOrtho Link is a leading distributor of Orthopaedic Implants &amp; Surgical Goods certified by the Government of India with ISO &amp; MSME Registration.
          </p>
        </div>

        {/* Company Overview Card */}
        <div className={`${styles.card} ${styles.cardSpaced}`}>
          <h2 className={styles.cardTitle}>Our Story &amp; Facility</h2>
          <p className={styles.cardBody}>
            MediOrtho Link was founded in the year 2013 in Bangalore, by Vinod Kumar &amp; Sunil Kumar. We are Distributors of Orthopaedic Implants &amp; Surgical Goods, certified by the Government of India with ISO &amp; MSME Registration. Operating from a 2,500 square feet office space at Yeshwanthpur, Bangalore, we are dedicated to innovation, manufacturing, and marketing of medical implants and instruments with a focus on &apos;global quality&apos; in the implants field.
          </p>
          <p className={styles.cardBody}>
            To be a favored partner to reliable &amp; innovative medical device and equipment manufacturers, we provide clinical and commercial expertise, a strong sales network, and a deep knowledge of the healthcare market in the Indian subcontinent. We go beyond physical products by partnering with orthopedic surgeons, healthcare professionals, and medical academicians in our pursuit of transforming clinical insights into tangible implants.
          </p>
        </div>

        {/* Customer Service & Vision Cards */}
        <div className={styles.grid}>
          <div className={styles.tile}>
            <div className={styles.tileIcon}>🤝</div>
            <h3 className={styles.tileTitle}>Customer Service</h3>
            <p className={styles.tileBody}>
              We at MediOrtho Link believe in high quality and exceptional customer service. We understand customers&apos; needs and help them to fulfill their requirements instead of focusing on selling our product.
            </p>
          </div>

          <div className={styles.tile}>
            <div className={styles.tileIcon}>🎯</div>
            <h3 className={styles.tileTitle}>Our Vision</h3>
            <p className={styles.tileBody}>
              We always want to keep an eye on the latest trends and put our customers&apos; wishes first. The interests of our customers are always the top priority for us. Finally, we want to bring a positive change to the Healthcare sector in India.
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className={`${styles.panel} ${styles.panelSpaced}`}>
          <div className={styles.panelHeader}>
            <span className={styles.panelEyebrow}>CONSCIOUS BUSINESS MODEL</span>
            <h2 className={styles.panelTitle}>Our 3 Core Principles</h2>
            <p className={styles.panelSub}>
              MediOrtho Link works on a conscious business model, maximizing monetary benefits along with the happiness and success of everyone connected with us.
            </p>
          </div>

          <div className={styles.panelGrid}>
            {principles.map((item) => (
              <div key={item.title} className={styles.panelCard}>
                <h4 className={styles.panelCardTitle}>{item.title}</h4>
                <p className={styles.panelCardBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={styles.centered}>
          <Link href="/contact" className={shared.primaryButton}>
            <div className={shared.primaryButtonText}>GET IN TOUCH WITH MEDI ORTHO LINK</div>
            <div className={shared.primaryButtonBg}></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
