'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const mainNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Products' },
    { href: '/team', label: 'Leadership' },
    { href: '/faqs', label: 'FAQs' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled || menuOpen ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none',
      }}
    >
      <style>{`
        @media (max-width: 991px) {
          .desktop-nav-items { display: none !important; }
          .phone-pill-item { display: none !important; }
          .mobile-toggle-btn { display: flex !important; }
        }
        @media (min-width: 992px) {
          .desktop-nav-items { display: flex !important; }
          .phone-pill-item { display: inline-flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
        .nav-link-hover:hover {
          color: #38bdf8 !important;
        }
        .cta-btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(14, 165, 233, 0.5) !important;
        }
      `}</style>

      <div
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: scrolled ? '0.75rem 1.5rem' : '1.1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'padding 0.3s ease',
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          style={{
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(14, 165, 233, 0.4)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.5px' }}>
            MEDI<span style={{ color: '#0ea5e9' }}>ORTHO</span> LINK
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-items" style={{ alignItems: 'center', gap: '2rem' }}>
          {mainNavLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-hover"
                style={{
                  color: isActive ? '#38bdf8' : '#e2e8f0',
                  fontSize: '0.925rem',
                  fontWeight: isActive ? 700 : 500,
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '0.4rem 0',
                  transition: 'color 0.2s ease',
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#38bdf8',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Phone Quick Link */}
          <a
            href="tel:+919845000000"
            className="phone-pill-item"
            style={{
              alignItems: 'center',
              gap: '8px',
              color: '#ffffff',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'background-color 0.2s ease',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>+91 98450 00000</span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            style={{
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              backgroundColor: menuOpen ? '#0ea5e9' : 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: '1.2rem',
              outline: 'none',
              zIndex: 1002,
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: scrolled ? '62px' : '72px',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'calc(100vh - 62px)',
            backgroundColor: 'rgba(15, 23, 42, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '2rem 1.5rem 3rem',
            overflowY: 'auto',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Navigation Menu
            </span>
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                style={{
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: pathname === link.href ? '#38bdf8' : '#f8fafc',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <span>{link.label}</span>
                <span style={{ fontSize: '1rem', color: '#64748b' }}>→</span>
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={closeMenu}
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: pathname === '/contact' ? '#38bdf8' : '#f8fafc',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <span>Contact Us</span>
              <span style={{ fontSize: '1rem', color: '#64748b' }}>→</span>
            </Link>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <p style={{ color: '#0ea5e9', fontWeight: 700, fontSize: '0.85rem', marginBottom: '4px' }}>MediOrtho Link HQ</p>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>
                2,500 Sq. Ft. Facility • Yeshwanthpur, Bangalore<br />
                Govt. ISO &amp; MSME Certified Distributors
              </p>
            </div>

            <a
              href="tel:+919845000000"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                padding: '0.9rem',
                borderRadius: '12px',
                backgroundColor: 'rgba(14, 165, 233, 0.15)',
                color: '#38bdf8',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.95rem',
                border: '1px solid rgba(14, 165, 233, 0.3)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call +91 98450 00000</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


