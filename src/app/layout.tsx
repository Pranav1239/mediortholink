import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Urbanist } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';
import styles from './layout.module.css';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: 'MediOrtho Link - Distributors of Orthopaedic Implants & Surgical Goods',
  description:
    'MediOrtho Link was founded in 2013 in Bangalore by Vinod Kumar & Sunil Kumar. ISO & MSME certified distributors of orthopaedic implants & surgical goods in Yeshwanthpur, Bangalore.',
  icons: {
    icon: '/images/68ef4f6f725f45bc2392aff8_Group.png',
    apple: '/images/68ef4f71a167946204ad4b4b_Group_1.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body>
        <div className={styles.pageWrapper}>
          <div className={styles.mainWrapper}>
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
