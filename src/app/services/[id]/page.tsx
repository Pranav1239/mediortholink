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

  return (
    <div style={{ paddingTop: '130px', paddingBottom: '100px', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Back Link */}
        <div style={{ marginBottom: '24px' }}>
          <Link
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#0ea5e9',
              fontWeight: 700,
              fontSize: '15px',
              textDecoration: 'none',
              backgroundColor: '#ffffff',
              padding: '10px 18px',
              borderRadius: '9999px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
            }}
          >
            ← Back to Products Catalog
          </Link>
        </div>

        {/* Product Detail Card */}
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.05)',
            border: '1px solid #e2e8f0',
            marginBottom: '40px',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '0' }}>

            {/* Left Image Column */}
            <div style={{ backgroundColor: '#f1f5f9', position: 'relative', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                <span style={{ fontSize: '12px', fontWeight: 800, backgroundColor: 'rgba(15, 23, 42, 0.9)', color: '#ffffff', padding: '6px 14px', borderRadius: '10px', backdropFilter: 'blur(8px)' }}>
                  SKU: {product.sku}
                </span>
              </div>
            </div>

            {/* Right Details Column */}
            <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '1px', background: 'rgba(14, 165, 233, 0.1)', padding: '4px 12px', borderRadius: '8px' }}>
                    {product.category}
                    {product.subcategory && ` › ${product.subcategory}`}
                  </span>
                  {product.certification && (
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#16a34a', background: 'rgba(22, 163, 74, 0.1)', padding: '4px 12px', borderRadius: '8px' }}>
                      {product.certification}
                    </span>
                  )}
                </div>

                <h1 style={{ fontSize: '32px', fontWeight: 900, color: '#0f172a', lineHeight: 1.2, marginBottom: '16px' }}>
                  {product.name}
                </h1>

                <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
                  {product.summary}
                </p>

                {/* Specification Table Box */}
                <div style={{ background: '#f8fafc', borderRadius: '16px', padding: '20px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {product.material && (
                      <div>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                          Primary Material
                        </span>
                        <span style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>
                          {product.material}
                        </span>
                      </div>
                    )}
                    <div>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                        Fulfillment Center
                      </span>
                      <span style={{ fontSize: '14px', fontWeight: 700, color: '#0ea5e9' }}>
                        Yeshwanthpur, Bangalore
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link
                  href="/appointment"
                  style={{
                    flex: 1,
                    backgroundColor: '#0ea5e9',
                    color: '#ffffff',
                    padding: '14px 24px',
                    borderRadius: '14px',
                    fontWeight: 700,
                    fontSize: '15px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    boxShadow: '0 4px 14px rgba(14, 165, 233, 0.4)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Request Technical Catalog &amp; Quote
                </Link>
                <Link
                  href="/contact"
                  style={{
                    backgroundColor: '#f1f5f9',
                    color: '#0f172a',
                    padding: '14px 20px',
                    borderRadius: '14px',
                    fontWeight: 700,
                    fontSize: '15px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Contact Specialists
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Detailed Engineering Features Section */}
        {product.specs.length > 0 && (
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '40px 36px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
          <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', marginBottom: '20px' }}>
            Key Engineering Specifications &amp; Features
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {product.specs.map((spec, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: '#f8fafc', padding: '16px 20px', borderRadius: '14px', border: '1px solid #f1f5f9' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(14, 165, 233, 0.15)', color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '13px', flexShrink: 0, marginTop: '2px' }}>
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

      </div>
    </div>
  );
}
