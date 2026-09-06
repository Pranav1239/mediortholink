'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const mainNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Products' },
  { href: '/team', label: 'Leadership' },
  { href: '/faqs', label: 'FAQs' },
];

const drawerLinks = [...mainNavLinks, { href: '/contact', label: 'Contact Us' }];

function PhoneIcon({ size, stroke }: { size: number; stroke: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const closeMenu = () => setMenuOpen(false);

  const isSubpage = pathname !== '/';

  const headerClass = [
    styles.header,
    scrolled || isSubpage ? styles.headerScrolled : '',
    menuOpen ? styles.headerMenuOpen : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <header className={headerClass}>
      <div className={`${styles.inner} ${scrolled ? styles.innerScrolled : ''}`}>
        {/* Brand Logo */}
        <Link href="/" onClick={closeMenu} className={styles.brand}>
          <div className={styles.brandMark}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className={styles.brandText}>
            MEDI<span className={styles.brandAccent}>ORTHO</span> LINK
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {isActive && <span className={styles.navLinkUnderline} />}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className={styles.rightCluster}>
          <a href="tel:+919845000000" className={styles.phonePill}>
            <PhoneIcon size={14} stroke="#0ea5e9" />
            <span>+91 98450 00000</span>
          </a>

          <button
            type="button"
            className={`${styles.toggleButton} ${menuOpen ? styles.toggleButtonOpen : ''}`}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className={`${styles.drawer} ${scrolled ? styles.drawerScrolled : ''}`}>
          <div className={styles.drawerLinks}>
            <span className={styles.drawerLabel}>Navigation Menu</span>
            {drawerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`${styles.drawerLink} ${pathname === link.href ? styles.drawerLinkActive : ''}`}
              >
                <span>{link.label}</span>
                <span className={styles.drawerArrow}>&rarr;</span>
              </Link>
            ))}
          </div>

          <div className={styles.drawerFooter}>
            <div className={styles.drawerCard}>
              <p className={styles.drawerCardTitle}>MediOrtho Link HQ</p>
              <p className={styles.drawerCardBody}>
                2,500 Sq. Ft. Facility &bull; Yeshwanthpur, Bangalore<br />
                Govt. ISO &amp; MSME Certified Distributors
              </p>
            </div>

            <a href="tel:+919845000000" className={styles.drawerCall}>
              <PhoneIcon size={16} stroke="currentColor" />
              <span>Call +91 98450 00000</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
