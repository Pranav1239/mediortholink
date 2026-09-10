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

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1V9.5" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5" />
      <circle cx="12" cy="7.75" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 8.5 12 3 3 8.5 12 14l9-5.5Z" />
      <path d="M3 8.5V16l9 5 9-5V8.5" />
      <path d="M12 14v7" />
    </svg>
  );
}

function QuestionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.25a2.5 2.5 0 0 1 4.9.75c0 1.67-2.4 1.9-2.4 3.5" />
      <circle cx="12" cy="16.75" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3.5h8l4 4V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V8h4" />
      <path d="M8.5 12.5h7M8.5 16h5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6.2 8-6.2" />
    </svg>
  );
}

const drawerIcons: Record<string, React.ReactNode> = {
  '/': <HomeIcon />,
  '/about': <InfoIcon />,
  '/services': <BoxIcon />,
  '/#faq': <QuestionIcon />,
  '/blogs': <DocumentIcon />,
  '/contact': <MailIcon />,
};

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
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track the header's actual rendered height (it changes with the logo size,
  // scrolled padding, and breakpoint) so the mobile drawer can start exactly
  // below it instead of at a guessed fixed offset.
  useEffect(() => {
    const el = innerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const observer = new ResizeObserver((entries) => {
      const height = entries[0]?.contentRect.height;
      if (height) setHeaderHeight(Math.round(height));
    });
    observer.observe(el);
    return () => observer.disconnect();
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
  const isTransparent = !isSubpage && !scrolled && !menuOpen;

  const headerClass = [
    styles.header,
    scrolled || isSubpage ? styles.headerScrolled : '',
    menuOpen ? styles.headerMenuOpen : '',
    isTransparent ? styles.headerTransparent : '',
  ]
    .filter(Boolean)
    .join(' ');

  const catParam = (name: string) => `/services?category=${encodeURIComponent(name)}`;
  const subParam = (cat: string, sub: string) =>
    `/services?category=${encodeURIComponent(cat)}&subcategory=${encodeURIComponent(sub)}`;

  return (
    <header
      className={headerClass}
      style={headerHeight ? ({ '--header-height': `${headerHeight}px` } as React.CSSProperties) : undefined}
    >
      <div ref={innerRef} className={`${styles.inner} ${scrolled ? styles.innerScrolled : ''}`}>
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
        <div className={styles.drawerOverlay}>
          <div className={styles.drawerScroll}>
            <span className={styles.drawerLabel}>Navigation</span>
            <nav className={styles.drawerLinks}>
              {drawerLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : link.href === '/services'
                    ? pathname === '/services' || pathname?.startsWith('/services/')
                    : link.href === '/blogs'
                    ? pathname === '/blogs' || pathname?.startsWith('/blogs/')
                    : pathname === link.href;

                if (link.href === '/services') {
                  return (
                    <div key={link.href} className={styles.drawerProductsBlock}>
                      <div
                        className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''} ${mobileProductsOpen ? styles.drawerLinkExpanded : ''}`}
                        role="button"
                        tabIndex={0}
                        onClick={() => setMobileProductsOpen((o) => !o)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') setMobileProductsOpen((o) => !o);
                        }}
                        aria-expanded={mobileProductsOpen}
                      >
                        <span className={styles.drawerLinkIcon}>{drawerIcons[link.href]}</span>
                        <span className={styles.drawerLinkLabel}>{link.label}</span>
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
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`}
                  >
                    <span className={styles.drawerLinkIcon}>{drawerIcons[link.href]}</span>
                    <span className={styles.drawerLinkLabel}>{link.label}</span>
                    <span className={styles.drawerArrow}>&rarr;</span>
                  </Link>
                );
              })}
            </nav>

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
        </div>
      )}
    </header>
  );
}
