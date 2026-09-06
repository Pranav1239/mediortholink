import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/subpage.module.css';
import shared from '@/styles/shared.module.css';
import local from './team.module.css';

const teamMembers = [
  {
    name: 'Vinod Kumar',
    role: 'Co-Founder & Director',
    bio: 'Founded MediOrtho Link in 2013 in Bangalore. Passionate about bringing global quality orthopaedic implants to the Indian subcontinent.',
    image: '/images/68f222a1a881f028d1757038_Frame_100.webp',
    width: 320,
    height: 391,
  },
  {
    name: 'Sunil Kumar',
    role: 'Co-Founder & Director',
    bio: 'Co-founded MediOrtho Link in 2013. Leads commercial expertise, logistics, and surgeon partnerships from Yeshwanthpur Bangalore.',
    image: '/images/696a7f5a729a13aa3d7cadbd_Frame_100_2.webp',
    width: 960,
    height: 1173,
  },
  {
    name: 'Dr. A. R. Sharma',
    role: 'Clinical Advisory Lead',
    bio: 'Works closely with orthopedic surgeons to convert clinical insights into tangible, precision-engineered implants.',
    image: '/images/696a5e89f27fd687fae01719_Frame_100_1.webp',
    width: 1279,
    height: 1564,
  },
  {
    name: 'Rajesh V. N.',
    role: 'Quality & Regulatory Head',
    bio: 'Ensures 100% compliance with Government of India ISO & MSME certifications across all surgical goods.',
    image: '/images/696a7f5fcdcb2611feabd1a4_Frame_100.webp',
    width: 960,
    height: 1173,
  },
];

export default function TeamPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>MEDI ORTHO LINK LEADERSHIP</span>
          <h1 className={styles.title}>
            Meet Our <span className={styles.accent}>Founders &amp; Team</span>
          </h1>
          <p className={`${styles.lede} ${styles.ledeNarrow}`}>
            Founded in 2013 by Vinod Kumar &amp; Sunil Kumar, our team is dedicated to honesty, sincerity, and excellence in healthcare distribution.
          </p>
        </div>

        <div className={`${styles.grid} ${styles.gridTight}`}>
          {teamMembers.map((member) => (
            <div key={member.name} className={local.memberCard}>
              <Image
                src={member.image}
                width={member.width}
                height={member.height}
                sizes="120px"
                alt={member.name}
                className={local.memberPhoto}
              />
              <h3 className={local.memberName}>{member.name}</h3>
              <p className={local.memberRole}>{member.role}</p>
              <p className={local.memberBio}>{member.bio}</p>
            </div>
          ))}
        </div>

        <div className={styles.centered}>
          <Link href="/contact" className={shared.primaryButton}>
            <div className={shared.primaryButtonText}>CONNECT WITH OUR LEADERSHIP</div>
            <div className={shared.primaryButtonBg}></div>
          </Link>
        </div>
      </div>
    </div>
  );
}
