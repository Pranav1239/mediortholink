import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="section home-hero" style={{ paddingTop: '160px', paddingBottom: '100px', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '80px', color: '#fff', marginBottom: '10px' }}>404</h1>
        <h2 style={{ fontSize: '32px', color: '#fff', marginBottom: '20px' }}>Page Not Found</h2>
        <p className="large-paragraph white-text" style={{ maxWidth: '500px', margin: '0 auto 30px' }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className="primary-button w-inline-block">
          <div className="primary-button-text">RETURN HOME</div>
          <div className="primary-button-bg"></div>
        </Link>
      </div>
    </section>
  );
}
