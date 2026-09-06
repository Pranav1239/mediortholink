import React from 'react';
import Link from 'next/link';
import styles from './not-found.module.css';
import shared from '@/styles/shared.module.css';

export default function NotFound() {
  return (
    <section className={styles.section}>
      <div className={shared.container}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page Not Found</h2>
        <p className={styles.lede}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link href="/" className={shared.primaryButton}>
          <div className={shared.primaryButtonText}>RETURN HOME</div>
          <div className={shared.primaryButtonBg}></div>
        </Link>
      </div>
    </section>
  );
}
