import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Urbanist } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { nucleus } from '@/lib/nucleus';
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
    'MediOrtho Link, founded in 2013 in Bangalore, is a Govt. of India certified (ISO 13485:2012 & MSME) distributor of orthopaedic implants & surgical goods in Yeshwanthpur, Bangalore.',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

async function getCategoryMenu() {
  return nucleus
    .getAll('products', { select: ['category', 'subcategory'], limit: 200 }, { revalidate: 300 })
    .then((entries) => {
      const map = new Map<string, Set<string>>();
      for (const entry of entries) {
        const category = entry.data.category;
        const subcategory = entry.data.subcategory;
        if (!category) continue;
        if (!map.has(category)) map.set(category, new Set());
        if (subcategory) map.get(category)!.add(subcategory);
      }
      return Array.from(map.entries())
        .map(([category, subcategories]) => ({
          category,
          subcategories: Array.from(subcategories).sort(),
        }))
        .sort((a, b) => a.category.localeCompare(b.category));
    })
    .catch(() => [] as { category: string; subcategories: string[] }[]);
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categoryMenu = await getCategoryMenu();

  return (
    <html lang="en" className={urbanist.variable}>
      <body suppressHydrationWarning>
        <div className={styles.pageWrapper}>
          <div className={styles.mainWrapper}>
            <Navbar categoryMenu={categoryMenu} />
            {children}
            <Footer />
          </div>
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
