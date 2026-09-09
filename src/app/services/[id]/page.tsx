import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById, products as fallbackProductsData } from '@/data/products';
import { nucleus } from '@/lib/nucleus';
import type { NucleusModels } from '@techsolace-studios/nucleus-sdk';

export async function generateStaticParams() {
  const slugs = await nucleus
    .getAll('products', { select: 'slug', limit: 200 }, { revalidate: 300 })
    .then((entries) => entries.map((entry) => entry.data.slug))
    .catch(() => fallbackProductsData.map((p) => p.id));
  return slugs.map((id) => ({ id }));
}

async function getProduct(slug: string) {
  const entry = await nucleus
    .findOne<'products', NucleusModels['products']>('products', { filter: { slug } })
    .catch(() => null);
  if (entry) {
    const p = entry.data;
    return {
      sku: p.sku,
      name: p.name,
      category: p.category,
      subcategory: p.subcategory ?? '',
      material: p.material ?? '',
      certification: p.certification ?? '',
      image: p.image ?? '',
      summary: p.summary ?? '',
      specs: p.specs ?? [],
    };
  }
  return getProductById(slug) ?? null;
}

const trustPoints = [
  { icon: '🛡️', label: 'ISO 13485:2012 Certified Manufacturing' },
  { icon: '🚚', label: 'Fulfilled from Yeshwanthpur, Bangalore' },
  { icon: '⚙️', label: 'Precision Engineered & Quality Tested' },
  { icon: '📋', label: 'Technical Documentation on Request' },
];

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const catHref = `/services?category=${encodeURIComponent(product.category)}`;

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>

      {/* Breadcrumb bar */}
      <div style={{ paddingTop: '110px', backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '18px 1.5rem' }}>
          <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px', fontSize: '13px', fontWeight: 600, color: '#64748b' }}>
            <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#cbd5e1' }}>/</span>
            <Link href="/services" style={{ color: '#64748b', textDecoration: 'none' }}>Products</Link>
            <span style={{ color: '#cbd5e1' }}>/</span>
            <Link href={catHref} style={{ color: '#64748b', textDecoration: 'none' }}>{product.category}</Link>
            <span style={{ color: '#cbd5e1' }}>/</span>
            <span style={{ color: '#0f172a' }}>{product.name}</span>
          </nav>
        </div>
      </div>

      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '48px 1.5rem 100px' }}>

        {/* Product Hero */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(320px, 460px) 1fr',
            gap: '48px',
            marginBottom: '56px',
          }}
        >
          {/* Image column */}
          <div>
            <div
              style={{
                position: 'sticky',
                top: '110px',
                backgroundColor: '#f1f5f9',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.06)',
                aspectRatio: '1 / 1',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, backgroundColor: 'rgba(15, 23, 42, 0.85)', color: '#ffffff', padding: '6px 14px', borderRadius: '10px', backdropFilter: 'blur(8px)' }}>
                  SKU: {product.sku}
                </span>
              </div>
              {product.certification && (
                <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, backgroundColor: 'rgba(22, 163, 74, 0.92)', color: '#ffffff', padding: '6px 14px', borderRadius: '10px' }}>
                    ✓ {product.certification}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Details column */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '13px', fontWeight: 800, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>
              {product.category}
              {product.subcategory && ` › ${product.subcategory}`}
            </span>

            <h1 style={{ fontSize: '36px', fontWeight: 900, color: '#0f172a', lineHeight: 1.15, marginBottom: '18px' }}>
              {product.name}
            </h1>

            <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.75, marginBottom: '28px', maxWidth: '620px' }}>
              {product.summary}
            </p>

            {/* Quick spec strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '1px',
                backgroundColor: '#e2e8f0',
                border: '1px solid #e2e8f0',
                borderRadius: '18px',
                overflow: 'hidden',
                marginBottom: '32px',
              }}
            >
              <div style={{ backgroundColor: '#f8fafc', padding: '18px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>
                  SKU
                </span>
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>{product.sku}</span>
              </div>
              {product.material && (
                <div style={{ backgroundColor: '#f8fafc', padding: '18px 20px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>
                    Primary Material
                  </span>
                  <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>{product.material}</span>
                </div>
              )}
              <div style={{ backgroundColor: '#f8fafc', padding: '18px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>
                  Fulfillment Center
                </span>
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#0ea5e9' }}>Yeshwanthpur, Bangalore</span>
              </div>
              <div style={{ backgroundColor: '#f8fafc', padding: '18px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '6px' }}>
                  Certification
                </span>
                <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>{product.certification || 'On Request'}</span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '10px' }}>
                <Link
                  href="/appointment"
                  style={{
                    flex: '1 1 260px',
                    backgroundColor: '#0ea5e9',
                    color: '#ffffff',
                    padding: '16px 24px',
                    borderRadius: '14px',
                    fontWeight: 700,
                    fontSize: '15px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(14, 165, 233, 0.4)',
                  }}
                >
                  Get Pricing &amp; Availability
                </Link>
                <Link
                  href="/contact"
                  style={{
                    flex: '1 1 200px',
                    backgroundColor: '#f1f5f9',
                    color: '#0f172a',
                    padding: '16px 20px',
                    borderRadius: '14px',
                    fontWeight: 700,
                    fontSize: '15px',
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                >
                  Talk to a Product Specialist
                </Link>
              </div>
              <p style={{ fontSize: '12.5px', color: '#94a3b8', margin: 0, fontWeight: 500 }}>
                No obligation — our team replies with catalogs, MOQs &amp; certification documents within 1 business day.
              </p>
            </div>

            {/* Trust points */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              {trustPoints.map((point) => (
                <div key={point.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '18px', flexShrink: 0 }}>{point.icon}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#475569', lineHeight: 1.4 }}>{point.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Engineering Features Section */}
        {product.specs.length > 0 && (
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
              Key Engineering Specifications &amp; Features
            </h2>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>
              Precision detailing for {product.name.toLowerCase()}, verified against clinical and export documentation standards.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {product.specs.map((spec, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    background: '#f8fafc',
                    padding: '18px 20px',
                    borderRadius: '16px',
                    border: '1px solid #e2e8f0',
                    transition: 'border-color 0.2s ease',
                  }}
                >
                  <div style={{ width: '26px', height: '26px', borderRadius: '50%', backgroundColor: 'rgba(14, 165, 233, 0.15)', color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '13px', flexShrink: 0, marginTop: '1px' }}>
                    ✓
                  </div>
                  <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                    {spec}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Closing CTA banner */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            background: 'linear-gradient(135deg, #0f172a 0%, #0ea5e9 140%)',
            borderRadius: '24px',
            padding: '36px 40px',
          }}
        >
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginBottom: '6px' }}>
              Sourcing {product.name} in bulk or for export?
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
              We quote MOQs, landed costs, and lead times directly from our Bangalore facility — no distributor markup.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <Link
              href="/appointment"
              style={{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                padding: '14px 24px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '14px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Request Bulk Pricing
            </Link>
            <Link
              href={catHref}
              style={{
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#ffffff',
                padding: '14px 24px',
                borderRadius: '12px',
                fontWeight: 700,
                fontSize: '14px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Browse {product.category} →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
