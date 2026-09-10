'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export interface GridProduct {
  slug: string;
  sku: string;
  name: string;
  category: string;
  subcategory: string;
  material: string;
  certification: string;
  image: string;
  summary: string;
}

const CATEGORY_ALL = 'All Products';
const SUBCATEGORY_ALL = 'All Subcategories';
const PAGE_SIZE = 12;

export default function ProductsGrid({ products }: { products: GridProduct[] }) {
  const searchParams = useSearchParams();

  const initialCategory = (() => {
    const fromUrl = searchParams.get('category');
    const match = fromUrl && products.some((p) => p.category === fromUrl);
    return match ? (fromUrl as string) : CATEGORY_ALL;
  })();

  const initialSubcategory = (() => {
    const fromUrl = searchParams.get('subcategory');
    const match = fromUrl && products.some((p) => p.category === initialCategory && p.subcategory === fromUrl);
    return match ? (fromUrl as string) : SUBCATEGORY_ALL;
  })();

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState(initialSubcategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const gridTopRef = React.useRef<HTMLDivElement>(null);

  // Clicking a mega-menu / footer link while already on this page only changes the
  // URL's query string — Next.js doesn't remount this component for that, so the
  // filters need to re-sync from the URL whenever it changes rather than just on mount.
  const searchParamsKey = searchParams.toString();
  useEffect(() => {
    const fromUrlCategory = searchParams.get('category');
    const nextCategory =
      fromUrlCategory && products.some((p) => p.category === fromUrlCategory) ? fromUrlCategory : CATEGORY_ALL;

    const fromUrlSubcategory = searchParams.get('subcategory');
    const nextSubcategory =
      fromUrlSubcategory && products.some((p) => p.category === nextCategory && p.subcategory === fromUrlSubcategory)
        ? fromUrlSubcategory
        : SUBCATEGORY_ALL;

    setSelectedCategory(nextCategory);
    setSelectedSubcategory(nextSubcategory);
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParamsKey]);

  const categories = [CATEGORY_ALL, ...Array.from(new Set(products.map((p) => p.category))).sort()];

  const subcategories =
    selectedCategory === CATEGORY_ALL
      ? []
      : [
          SUBCATEGORY_ALL,
          ...Array.from(
            new Set(
              products
                .filter((p) => p.category === selectedCategory)
                .map((p) => p.subcategory)
                .filter(Boolean)
            )
          ).sort(),
        ];

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setSelectedSubcategory(SUBCATEGORY_ALL);
    setPage(1);
  };

  const handleSubcategorySelect = (subcat: string) => {
    setSelectedSubcategory(subcat);
    setPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setPage(1);
  };

  const filteredProducts = products.filter((item) => {
    const matchesCategory = selectedCategory === CATEGORY_ALL || item.category === selectedCategory;
    const matchesSubcategory =
      selectedSubcategory === SUBCATEGORY_ALL || item.subcategory === selectedSubcategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pagedProducts = filteredProducts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const goToPage = (next: number) => {
    const clamped = Math.max(1, Math.min(totalPages, next));
    setPage(clamped);
    gridTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Windowed page numbers so we never dump 80+ page buttons on screen at once.
  const pageNumbers: (number | '...')[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
  } else {
    pageNumbers.push(1);
    if (currentPage > 3) pageNumbers.push('...');
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pageNumbers.push(i);
    }
    if (currentPage < totalPages - 2) pageNumbers.push('...');
    pageNumbers.push(totalPages);
  }

  return (
    <>
      {/* Live Search & Category Pill Filters */}
      <div style={{ background: '#ffffff', borderRadius: '24px', padding: '24px 32px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', border: '1px solid #e2e8f0', marginBottom: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

          {/* Search Input Bar */}
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              type="text"
              placeholder="Search products by name, SKU (e.g. MOL-THR), material, or keywords..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
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
                onClick={() => handleSearchChange('')}
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
                  onClick={() => handleCategorySelect(cat)}
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

          {/* Subcategory Dropdown — only shown once a category is picked, so we never dump 40+ options on screen */}
          {subcategories.length > 1 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', marginRight: '6px' }}>
                Subcategory:
              </span>
              <div style={{ position: 'relative' }}>
                <select
                  value={selectedSubcategory}
                  onChange={(e) => handleSubcategorySelect(e.target.value)}
                  style={{
                    appearance: 'none',
                    padding: '10px 40px 10px 18px',
                    borderRadius: '9999px',
                    fontSize: '14px',
                    fontWeight: 600,
                    border: selectedSubcategory !== SUBCATEGORY_ALL ? '1px solid #0f172a' : '1px solid #e2e8f0',
                    backgroundColor: selectedSubcategory !== SUBCATEGORY_ALL ? '#0f172a' : '#ffffff',
                    color: selectedSubcategory !== SUBCATEGORY_ALL ? '#ffffff' : '#334155',
                    cursor: 'pointer',
                    minWidth: '220px',
                  }}
                >
                  {subcategories.map((subcat) => (
                    <option key={subcat} value={subcat}>
                      {subcat}
                    </option>
                  ))}
                </select>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={selectedSubcategory !== SUBCATEGORY_ALL ? '#ffffff' : '#64748b'}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Counter */}
      <div ref={gridTopRef} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '8px', scrollMarginTop: '110px' }}>
        <p style={{ fontSize: '15px', color: '#64748b', margin: 0, fontWeight: 500 }}>
          Showing <strong style={{ color: '#0f172a' }}>{pagedProducts.length === 0 ? 0 : (currentPage - 1) * PAGE_SIZE + 1}–{(currentPage - 1) * PAGE_SIZE + pagedProducts.length}</strong> of{' '}
          <strong style={{ color: '#0f172a' }}>{filteredProducts.length}</strong> product{filteredProducts.length === 1 ? '' : 's'}
          {selectedCategory !== CATEGORY_ALL && ` in "${selectedCategory}"`}
          {selectedSubcategory !== SUBCATEGORY_ALL && ` › "${selectedSubcategory}"`}
        </p>
        {totalPages > 1 && (
          <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0, fontWeight: 600 }}>
            Page {currentPage} of {totalPages}
          </p>
        )}
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length === 0 ? (
        <div style={{ background: '#ffffff', borderRadius: '24px', padding: '60px 20px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: '40px', display: 'block', marginBottom: '12px' }}>🔍</span>
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>No products found</h3>
          <p style={{ color: '#64748b', fontSize: '15px', marginBottom: '20px' }}>Try searching with a different keyword or select another category filter.</p>
          <button
            onClick={() => {
              setSelectedCategory(CATEGORY_ALL);
              setSelectedSubcategory(SUBCATEGORY_ALL);
              setSearchQuery('');
              setPage(1);
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(360px, 100%), 1fr))', gap: '32px' }}>
          {pagedProducts.map((prod) => (
            <div
              key={prod.slug}
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
                <Link href={`/services/${prod.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
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
                    {prod.certification && (
                      <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 700, backgroundColor: 'rgba(14, 165, 233, 0.9)', color: '#ffffff', padding: '4px 10px', borderRadius: '8px' }}>
                          {prod.certification}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>

                {/* Card Info Content */}
                <div style={{ padding: '28px 24px 16px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '8px' }}>
                    {prod.category}
                    {prod.subcategory && ` › ${prod.subcategory}`}
                  </span>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '10px' }}>
                    <Link href={`/services/${prod.slug}`} style={{ color: '#0f172a', textDecoration: 'none' }}>
                      {prod.name}
                    </Link>
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                    {prod.summary}
                  </p>

                  {prod.material && (
                    <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '12px', marginBottom: '16px', border: '1px solid #f1f5f9' }}>
                      <p style={{ fontSize: '12px', fontWeight: 700, color: '#334155', margin: '0 0 4px 0' }}>Material &amp; Standard:</p>
                      <p style={{ fontSize: '13px', color: '#0ea5e9', fontWeight: 600, margin: 0 }}>{prod.material}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Action Buttons */}
              <div style={{ padding: '16px 24px 24px', borderTop: '1px solid #f1f5f9', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Link
                  href={`/services/${prod.slug}`}
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '40px' }}>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            style={{
              padding: '10px 18px',
              borderRadius: '9999px',
              fontSize: '14px',
              fontWeight: 700,
              border: '1px solid #e2e8f0',
              backgroundColor: '#ffffff',
              color: currentPage === 1 ? '#cbd5e1' : '#334155',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            }}
          >
            ← Prev
          </button>

          {pageNumbers.map((num, idx) =>
            num === '...' ? (
              <span key={`ellipsis-${idx}`} style={{ padding: '0 6px', color: '#94a3b8', fontWeight: 700 }}>
                &hellip;
              </span>
            ) : (
              <button
                key={num}
                onClick={() => goToPage(num)}
                aria-current={num === currentPage ? 'page' : undefined}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '9999px',
                  fontSize: '14px',
                  fontWeight: 700,
                  border: num === currentPage ? '1px solid #0ea5e9' : '1px solid #e2e8f0',
                  backgroundColor: num === currentPage ? '#0ea5e9' : '#ffffff',
                  color: num === currentPage ? '#ffffff' : '#334155',
                  cursor: 'pointer',
                  boxShadow: num === currentPage ? '0 4px 12px rgba(14, 165, 233, 0.3)' : 'none',
                }}
              >
                {num}
              </button>
            )
          )}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            style={{
              padding: '10px 18px',
              borderRadius: '9999px',
              fontSize: '14px',
              fontWeight: 700,
              border: '1px solid #e2e8f0',
              backgroundColor: '#ffffff',
              color: currentPage === totalPages ? '#cbd5e1' : '#334155',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            }}
          >
            Next →
          </button>
        </div>
      )}
    </>
  );
}
