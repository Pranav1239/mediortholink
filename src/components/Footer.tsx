import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import { nucleus } from '@/lib/nucleus';

const fallbackSettings = {
  brandBio:
    'MediOrtho Link is a renowned distributor of orthopaedic implants and surgical goods, founded in 2013 in Bangalore. Certified by the Government of India with ISO 13485:2012 and MSME registration, we connect healthcare professionals with exceptional orthopaedic implants and surgical goods, fostering excellence in patient care.',
  addressLine1: 'No. 18, 1st Floor, 1st Main Road, Gokul 1st Stage, 3rd Phase',
  addressLine2: 'Yeshwanthpur, Bangalore, Karnataka - 560022',
  certificationText: 'ISO 13485:2012 & MSME, Govt. of India Certified',
  officePhone: '+91 98451 64422',
  salesPhone: '+91 94830 64422',
  email: 'mediortholink4@gmail.com',
  businessHours: '',
};

export default async function Footer() {
  const settings = await nucleus
    .findOne('site-settings', {})
    .then((entry) => entry?.data ?? fallbackSettings)
    .catch(() => fallbackSettings);

  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        <div className={styles.footerCard}>
          {/* Main 4-Column Grid */}
          <div className={styles.grid}>
            {/* Column 1: Brand & Bio */}
            <div className={styles.brandCol}>
              <Link href="/" className={styles.logoWrap}>
                <Image
                  src="/images/logo.png"
                  width={383}
                  height={383}
                  alt="MediOrtho Link"
                  className={styles.footerLogo}
                />
              </Link>
              <p className={styles.brandBio}>
                {settings.brandBio}
              </p>
            </div>

            {/* Column 2: Company Links */}
            <div className={styles.linksCol}>
              <h4 className={styles.colTitle}>Company Links</h4>
              <ul className={styles.linksList}>
                <li><Link href="/" className={styles.footerLink}>Home</Link></li>
                <li><Link href="/about" className={styles.footerLink}>About Us</Link></li>
                <li><Link href="/services" className={styles.footerLink}>Products</Link></li>
                <li><Link href="/#faq" className={styles.footerLink}>FAQs</Link></li>
                <li><Link href="/blogs" className={styles.footerLink}>Blogs</Link></li>
                <li><Link href="/contact" className={styles.footerLink}>Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Office Address */}
            <div className={styles.addressCol}>
              <h4 className={styles.colTitle}>Office Address</h4>
              <div className={styles.addressText}>
                <p>{settings.addressLine1}</p>
                <p>{settings.addressLine2}</p>
                <p>{settings.certificationText}</p>
                <p className={styles.phoneHighlight}>Ph: {settings.officePhone}</p>
              </div>
            </div>

            {/* Column 4: Contact Us */}
            <div className={styles.contactCol}>
              <h4 className={styles.colTitle}>Contact Us</h4>
              <div className={styles.contactText}>
                <p><a href={`mailto:${settings.email}`} className={styles.emailLink}>{settings.email}</a></p>
                <p>{settings.officePhone} - Office</p>
                <p>{settings.salesPhone} - Sales</p>
                {settings.businessHours && <p className={styles.hoursText}>{settings.businessHours}</p>}
              </div>
            </div>
          </div>

          {/* Divider & Copyright */}
          <div className={styles.divider} />
          <div className={styles.bottomBar}>
            <p className={styles.copyrightText}>
              MediOrtho Link {new Date().getFullYear()} | All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

