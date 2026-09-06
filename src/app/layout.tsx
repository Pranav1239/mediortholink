import React from 'react';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MediOrtho Link - Distributors of Orthopaedic Implants & Surgical Goods',
  description: 'MediOrtho Link was founded in 2013 in Bangalore by Vinod Kumar & Sunil Kumar. ISO & MSME certified distributors of orthopaedic implants & surgical goods in Yeshwanthpur, Bangalore.',
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
    <html lang="en" className="w-mod-js w-mod-touch">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="/css/whhub.webflow.shared.f6d5e6173.min.css" rel="stylesheet" type="text/css" />
        <link href="/css/hero.css" rel="stylesheet" type="text/css" />
        <link href="/images/68ef4f6f725f45bc2392aff8_Group.png" rel="shortcut icon" type="image/x-icon" />
        <link href="/images/68ef4f71a167946204ad4b4b_Group_1.png" rel="apple-touch-icon" />
        <Script src="/js/jquery-3.5.1.min.dc5e7f18c8.js" strategy="beforeInteractive" />
        <Script src="/js/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/js/SplitText.min.js" strategy="beforeInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      </head>
      <body>
        <div className="page-wrapper">
          <div className="main-wrapper">
            <Navbar />
            {children}
            <Footer />
          </div>
        </div>

        <Script src="/js/webfont.js" strategy="afterInteractive" />
        <Script id="webfont-init" strategy="afterInteractive">
          {`if (typeof WebFont !== 'undefined') { WebFont.load({ google: { families: ["Urbanist:300,400,500,600,700"] } }); }`}
        </Script>

        <Script src="/js/webflow.schunk.e0c428ff9737f919.js" strategy="afterInteractive" />
        <Script src="/js/webflow.schunk.d17b7717ed13625b.js" strategy="afterInteractive" />
        <Script src="/js/webflow.542fbd30.471423b46adfa2f0.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
