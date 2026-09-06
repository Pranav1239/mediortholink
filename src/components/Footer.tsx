'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#ffffff', padding: '60px 0 40px', fontFamily: 'inherit' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Top Floating CTA Banner */}
        <div
          style={{
            backgroundColor: '#0f172a',
            borderRadius: '1.5rem',
            padding: '2rem 3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.35)',
            marginBottom: '2rem',
          }}
        >
          <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', margin: 0, letterSpacing: '-0.5px' }}>
            Partnering for Clinical Excellence
          </h2>
          <Link
            href="/appointment"
            style={{
              backgroundColor: '#0ea5e9',
              color: '#ffffff',
              padding: '0.8rem 1.75rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '0.825rem',
              letterSpacing: '0.05em',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 14px rgba(14, 165, 233, 0.4)',
              transition: 'transform 0.2s ease, background-color 0.2s ease',
            }}
          >
            REQUEST IMPLANTS CONSULTATION
          </Link>
        </div>

        {/* Main Footer Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(280px, 320px) 1fr',
            gap: '1.75rem',
            alignItems: 'stretch',
          }}
        >
          {/* Left Vibrant Blue Logo Box */}
          <div
            style={{
              backgroundColor: '#0284c7',
              backgroundImage: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)',
              borderRadius: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem 2rem',
              boxShadow: '0 10px 30px -5px rgba(14, 165, 233, 0.25)',
              minHeight: '260px',
            }}
          >
            <Link href="/" style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: '28px', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.5px' }}>
                MEDI<span style={{ color: '#0f172a' }}>ORTHO</span> LINK
              </span>
            </Link>
          </div>

          {/* Right Light Blue Info & Links Box */}
          <div
            style={{
              backgroundColor: '#f0f9ff',
              borderRadius: '1.5rem',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '2rem',
              border: '1px solid #e0f2fe',
            }}
          >
            {/* Top Bio & Subscription Form */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'start' }}>
              <div>
                <p style={{ color: '#334155', fontSize: '0.925rem', lineHeight: 1.65, margin: 0 }}>
                  MediOrtho Link (Est. 2013, Bangalore) is an ISO &amp; MSME certified distributor of orthopaedic implants &amp; surgical goods. We partner with healthcare professionals across India to transform clinical insights into tangible surgical solutions.
                </p>
              </div>

              <div>
                <p style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.85rem 0', lineHeight: 1.4 }}>
                  Sign up for product updates and clinical catalog announcements.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  style={{ display: 'flex', alignItems: 'center', maxWidth: '420px' }}
                >
                  <input
                    type="email"
                    placeholder="Your Professional Email*"
                    required
                    style={{
                      border: '1px solid #bae6fd',
                      borderRight: 'none',
                      padding: '0.75rem 1.25rem',
                      borderRadius: '9999px 0 0 9999px',
                      fontSize: '0.9rem',
                      outline: 'none',
                      backgroundColor: '#ffffff',
                      width: '100%',
                      color: '#0f172a',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#0ea5e9',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0 9999px 9999px 0',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)',
                    }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Middle Nav Links */}
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                paddingTop: '1.5rem',
                borderTop: '1px solid #e0f2fe',
              }}
            >
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Implants & Products', href: '/services' },
                { label: 'Leadership', href: '/team' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Bottom Copyright & Legal Links */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid #e0f2fe',
              }}
            >
              <p style={{ color: '#64748b', fontSize: '0.85rem', margin: 0 }}>
                Copyright © {new Date().getFullYear()} MediOrtho Link. Govt. of India ISO &amp; MSME Certified.
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <Link
                  href="/faqs"
                  style={{ color: '#334155', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}
                >
                  FAQs
                </Link>
                <Link
                  href="/appointment"
                  style={{ color: '#334155', fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}
                >
                  Request Implants
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
