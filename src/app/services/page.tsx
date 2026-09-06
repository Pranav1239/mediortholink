'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';

const categories = [
  'All Products',
  'Joint Replacements',
  'Trauma & Fixation',
  'Spine & Arthroscopy',
  'Surgical Goods',
  'Instruments & Tools',
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((item) => {
    const matchesCategory = selectedCategory === 'All Products' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '130px', paddingBottom: '100px', backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Page Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 50px' }}>
          <span style={{ fontSize: '13px', fontWeight: 800, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '1.5px', display: 'inline-block', padding: '6px 16px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '20px', marginBottom: '16px' }}>
            Govt. ISO &amp; MSME Certified Catalog
          </span>
          <h1 style={{ fontSize: '44px', fontWeight: 900, color: '#0f172a', lineHeight: 1.15, marginBottom: '18px' }}>
            Orthopaedic Implants &amp; <span style={{ color: '#0ea5e9' }}>Surgical Products</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
            Explore our comprehensive range of high-precision joint replacements, trauma fixation systems, spinal implants, and surgical tools distributed directly from our 2,500 sq. ft. facility in Yeshwanthpur, Bangalore.
          </p>
        </div>

        {/* Live Search & Category Pill Filters */}
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '24px 32px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', border: '1px solid #e2e8f0', marginBottom: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Search Input Bar */}
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type="text"
                placeholder="Search products by name, SKU (e.g. MOL-THR), material, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 20px 14px 48px',
                  borderRadius: '16px',
                  border: '1px solid #cbd5e1',
                  fontSize: '15px',
                  outline: 'none',
                  color: '#0f172a',
                  backgroundColor: '#f8fafc',
                  transition: 'border-color 0.2s ease',
                }}
              />
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64748b"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                >
                  Clear ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginRight: '6px' }}>
                Filter:
              </span>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '8px 18px',
                      borderRadius: '9999px',
                      fontSize: '14px',
                      fontWeight: isActive ? 700 : 500,
                      border: isActive ? '1px solid #0ea5e9' : '1px solid #e2e8f0',
                      backgroundColor: isActive ? '#0ea5e9' : '#ffffff',
                      color: isActive ? '#ffffff' : '#334155',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? '0 4px 12px rgba(14, 165, 233, 0.3)' : 'none',
                    }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <p style={{ fontSize: '15px', color: '#64748b', margin: 0, fontWeight: 500 }}>
            Showing <strong style={{ color: '#0f172a' }}>{filteredProducts.length}</strong> product{filteredProducts.length === 1 ? '' : 's'}
            {selectedCategory !== 'All Products' && ` in "${selectedCategory}"`}
          </p>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '60px 20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
            <span style={{ fontSize: '40px', display: 'block', marginBottom: '12px' }}>🔍</span>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>No products found</h3>
            <p style={{ color: '#64748b', fontSize: '15px', marginBottom: '20px' }}>Try searching with a different keyword or select another category filter.</p>
            <button
              onClick={() => {
                setSelectedCategory('All Products');
                setSearchQuery('');
              }}
              style={{
                backgroundColor: '#0ea5e9',
                color: '#ffffff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '9999px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '32px' }}>
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <div>
                  {/* Product Image Header */}
                  <Link href={`/services/${prod.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{ position: 'relative', width: '100%', height: '240px', backgroundColor: '#f1f5f9', overflow: 'hidden' }}>
                      <img
                        src={prod.image}
                        alt={prod.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{ position: 'absolute', top: '16px', left: '16px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, backgroundColor: 'rgba(15, 23, 42, 0.85)', color: '#ffffff', padding: '4px 10px', borderRadius: '8px', backdropFilter: 'blur(8px)' }}>
                          {prod.sku}
                        </span>
                      </div>
                      <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, backgroundColor: 'rgba(14, 165, 233, 0.9)', color: '#ffffff', padding: '4px 10px', borderRadius: '8px' }}>
                          {prod.certification}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Card Info Content */}
                  <div style={{ padding: '28px 24px 16px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '8px' }}>
                      {prod.category}
                    </span>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '10px' }}>
                      <Link href={`/services/${prod.id}`} style={{ color: '#0f172a', textDecoration: 'none' }}>
                        {prod.name}
                      </Link>
                    </h3>
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                      {prod.summary}
                    </p>

                    <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '12px', marginBottom: '16px', border: '1px solid #f1f5f9' }}>
                      <p style={{ fontSize: '12px', fontWeight: 700, color: '#334155', margin: '0 0 4px 0' }}>Material &amp; Standard:</p>
                      <p style={{ fontSize: '13px', color: '#0ea5e9', fontWeight: 600, margin: 0 }}>{prod.material}</p>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div style={{ padding: '16px 24px 24px', borderTop: '1px solid #f1f5f9', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <Link
                    href={`/services/${prod.id}`}
                    style={{
                      flex: 1,
                      padding: '12px 14px',
                      borderRadius: '12px',
                      backgroundColor: '#f1f5f9',
                      color: '#0f172a',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      textAlign: 'center',
                      transition: 'background-color 0.2s ease',
                    }}
                  >
                    View Specs Page →
                  </Link>
                  <Link
                    href="/appointment"
                    style={{
                      flex: 1,
                      padding: '12px 14px',
                      borderRadius: '12px',
                      backgroundColor: '#0ea5e9',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      textAlign: 'center',
                      boxShadow: '0 4px 12px rgba(14, 165, 233, 0.3)',
                    }}
                  >
                    Inquire Now
                  </Link>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}


