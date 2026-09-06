'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.footerCard}>
          {/* Main 4-Column Grid */}
          <div className={styles.grid}>
            {/* Column 1: Brand & Bio */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.logoWrap}>
                <div className={styles.logoIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className={styles.logoText}>
                  MEDI<span className={styles.logoAccent}>ORTHO</span> LINK
                </span>
              </Link>
              <p className={styles.brandBio}>
                At MediOrtho Link, we connect top-tier healthcare professionals and orthopedic surgeons with global-quality implants, trauma fixation systems, and surgical goods across India.
              </p>
            </div>

            {/* Column 2: Company Links */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Company Links</h4>
              <ul className={styles.linksList}>
                <li><Link href="/" className={styles.footerLink}>Home</Link></li>
                <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
                <li><Link href="/services" className={styles.footerLink}>Products</Link></li>
                <li><Link href="/team" className={styles.footerLink}>Leadership</Link></li>
                <li><Link href="/faqs" className={styles.footerLink}>FAQs</Link></li>
                <li><Link href="/contact" className={styles.footerLink}>Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Office Address */}
            <div className={styles.addressCol}>
              <h4 className={styles.colTitle}>Office Address</h4>
              <div className={styles.addressText}>
                <p>2,500 Sq. Ft. Facility, Yeshwanthpur</p>
                <p>Bangalore, Karnataka 560022, India</p>
                <p>Govt. ISO &amp; MSME Certified</p>
                <p className={styles.phoneHighlight}>Ph: +91 98450 00000</p>
              </div>
            </div>

            {/* Column 4: Contact Us */}
            <div className={styles.contactCol}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <div className={styles.contactText}>
                <p><a href="mailto:info@mediortholink.com" className={styles.emailLink}>info@mediortholink.com</a></p>
                <p>+91 98450 00000 - Office</p>
                <p>+91 80 2345 6789 - Sales</p>
                <p className={styles.hoursText}>Mon to Sat: 9:00AM &ndash; 6:00PM</p>
              </div>
            </div>
          </div>

          {/* Divider & Copyright */}
          <div className={styles.divider} />
          <div className={styles.bottomBar}>
            <p className={styles.copyrightText}>
              MediOrtho Link LLC {new Date().getFullYear()} | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

