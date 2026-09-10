'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export interface CategoryMenuGroup {
  category: string;
  subcategories: string[];
}

const drawerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Products' },
  { href: '/#faq', label: 'FAQs' },
  { href: '/blogs', label: 'Blogs' },
  { href: '/contact', label: 'Contact Us' },
];

function PhoneIcon({ size, stroke }: { size: number; stroke: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transition: 'transform 0.25s ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}

export default function Navbar({ categoryMenu = [] }: { categoryMenu?: CategoryMenuGroup[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the drawer / mega menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!productsOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProductsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [productsOpen]);

  const closeMenu = () => setMenuOpen(false);

  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };

  const scheduleCloseProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setProductsOpen(false), 180);
  };

  const isSubpage = pathname !== '/';

  const headerClass = [
    styles.header,
    scrolled || isSubpage ? styles.headerScrolled : '',
    menuOpen ? styles.headerMenuOpen : '',
  ]
    .filter(Boolean)
    .join(' ');

  const catParam = (name: string) => `/services?category=${encodeURIComponent(name)}`;
  const subParam = (cat: string, sub: string) =>
    `/services?category=${encodeURIComponent(cat)}&subcategory=${encodeURIComponent(sub)}`;

  return (
    <header className={headerClass}>
      <div className={`${styles.inner} ${scrolled ? styles.innerScrolled : ''}`}>
        {/* Brand Logo */}
        <Link href="/" onClick={closeMenu} className={styles.brand}>
          <Image
            src="/images/logo.png"
            width={383}
            height={383}
            priority
            alt="MediOrtho Link"
            className={styles.brandLogo}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className={styles.desktopNav}>
          <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.navLinkActive : ''}`} aria-current={pathname === '/' ? 'page' : undefined}>
            Home
            {pathname === '/' && <span className={styles.navLinkUnderline} />}
          </Link>
          <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.navLinkActive : ''}`} aria-current={pathname === '/about' ? 'page' : undefined}>
            About Us
            {pathname === '/about' && <span className={styles.navLinkUnderline} />}
          </Link>

          {/* Products — hover mega menu */}
          <div
            className={styles.megaTrigger}
            onMouseEnter={openProducts}
            onMouseLeave={scheduleCloseProducts}
          >
            <Link
              href="/services"
              className={`${styles.navLink} ${styles.megaTriggerLink} ${pathname === '/services' ? styles.navLinkActive : ''}`}
              aria-current={pathname === '/services' ? 'page' : undefined}
              aria-expanded={productsOpen}
              onClick={() => setProductsOpen(false)}
            >
              Products
              <ChevronIcon open={productsOpen} />
              {pathname === '/services' && <span className={styles.navLinkUnderline} />}
            </Link>

            {categoryMenu.length > 0 && (
              <div className={`${styles.megaPanel} ${productsOpen ? styles.megaPanelOpen : ''}`}>
                <div className={styles.megaPanelGrid}>
                  {categoryMenu.map((group) => (
                    <div key={group.category} className={styles.megaColumn}>
                      <Link href={catParam(group.category)} className={styles.megaColumnTitle} onClick={() => setProductsOpen(false)}>
                        {group.category}
                      </Link>
                      {group.subcategories.length > 0 && (
                        <ul className={styles.megaList}>
                          {group.subcategories.map((sub) => (
                            <li key={sub}>
                              <Link href={subParam(group.category, sub)} className={styles.megaLink} onClick={() => setProductsOpen(false)}>
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
                <div className={styles.megaFooter}>
                  <Link href="/services" className={styles.megaFooterLink} onClick={() => setProductsOpen(false)}>
                    View Full Catalog &rarr;
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/#faq" className={styles.navLink}>
            FAQs
          </Link>

          <Link href="/blogs" className={`${styles.navLink} ${pathname === '/blogs' || pathname?.startsWith('/blogs/') ? styles.navLinkActive : ''}`} aria-current={pathname === '/blogs' ? 'page' : undefined}>
            Blogs
            {(pathname === '/blogs' || pathname?.startsWith('/blogs/')) && <span className={styles.navLinkUnderline} />}
          </Link>

          <Link href="/contact" className={`${styles.navLink} ${pathname === '/contact' ? styles.navLinkActive : ''}`} aria-current={pathname === '/contact' ? 'page' : undefined}>
            Contact Us
            {pathname === '/contact' && <span className={styles.navLinkUnderline} />}
          </Link>
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className={styles.rightCluster}>
          <a href="tel:+919845164422" className={styles.callButton} aria-label="Call MediOrtho Link at +91 98451 64422">
            <PhoneIcon size={15} stroke="#ffffff" />
            <span className={styles.callButtonText}>Call Now</span>
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
            {drawerLinks.map((link) =>
              link.href === '/services' ? (
                <div key={link.href} className={styles.drawerProductsBlock}>
                  <div className={styles.drawerLink} style={{ cursor: 'pointer' }} onClick={() => setMobileProductsOpen((o) => !o)}>
                    <span>{link.label}</span>
                    <span className={styles.drawerArrow}>
                      <ChevronIcon open={mobileProductsOpen} />
                    </span>
                  </div>
                  {mobileProductsOpen && (
                    <div className={styles.drawerCategoryList}>
                      <Link href="/services" onClick={closeMenu} className={styles.drawerCategoryLink}>
                        All Products
                      </Link>
                      {categoryMenu.map((group) => (
                        <Link
                          key={group.category}
                          href={catParam(group.category)}
                          onClick={closeMenu}
                          className={styles.drawerCategoryLink}
                        >
                          {group.category}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`${styles.drawerLink} ${pathname === link.href ? styles.drawerLinkActive : ''}`}
                >
                  <span>{link.label}</span>
                  <span className={styles.drawerArrow}>&rarr;</span>
                </Link>
              )
            )}
          </div>

          <div className={styles.drawerFooter}>
            <div className={styles.drawerCard}>
              <p className={styles.drawerCardTitle}>MediOrtho Link HQ</p>
              <p className={styles.drawerCardBody}>
                Yeshwanthpur, Bangalore, Karnataka<br />
                Govt. ISO 13485:2012 &amp; MSME Certified Distributors
              </p>
            </div>

            <a href="tel:+919845164422" className={styles.drawerCall}>
              <PhoneIcon size={16} stroke="currentColor" />
              <span>Call +91 98451 64422</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
