'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  material: string;
  certification: string;
  image: string;
  summary: string;
  specs: string[];
}

const products: Product[] = [
  {
    id: 'pro-titan-hip',
    sku: 'MOL-THR-9021',
    name: 'ProTitan™ Total Hip Replacement System',
    category: 'Joint Replacements',
    material: 'Titanium Alloy (Ti-6Al-4V) & CoCrMo',
    certification: 'ISO 13485 & Govt. MSME Certified',
    image: '/images/698c43ed432314ea73136553_Card_Image.webp',
    summary: 'High-precision modular femoral heads and porous-coated stems for enhanced osseointegration and long-term joint stability.',
    specs: [
      'Porous titanium coating for primary mechanical stability',
      'High-polished cobalt-chrome alloy modular heads',
      'Ultra-high molecular weight polyethylene acetabular liner',
      'Available in 12 anatomical sizes (Left & Right offset options)',
    ],
  },
  {
    id: 'flexilock-knee',
    sku: 'MOL-TKR-4410',
    name: 'FlexiLock™ Biconcave Knee Implant Set',
    category: 'Joint Replacements',
    material: 'Cobalt-Chrome & Highly Crosslinked Polyethylene',
    certification: 'ISO 13485 & Govt. Approved',
    image: '/images/698c8190d729cfa8619f96cf_download_2.webp',
    summary: 'Anatomically contoured total knee joint replacement engineered for optimal articulation kinematic performance.',
    specs: [
      'High-flexion femoral component supporting up to 145° bend',
      'Deep tibial locking mechanism preventing polyethylene wear',
      'Patellar resurfacing button with triple peg fixation',
      'Biocompatible surface finishing minimizing friction',
    ],
  },
  {
    id: 'veloplate-trauma',
    sku: 'MOL-TRM-3108',
    name: 'VeloPlate™ Titanium Trauma Locking System',
    category: 'Trauma & Fixation',
    material: 'Medical Grade Ti-6Al-4V Grade 5',
    certification: 'ISO 13485 & Govt. MSME Certified',
    image: '/images/698c8238c6804b943f934e98_Card_Image_3.webp',
    summary: 'Low-profile anatomical locking compression plates and self-tapping screws for complex distal & proximal fracture fixation.',
    specs: [
      'Combi-holes allowing both locking and cortex screw insertion',
      'Pre-contoured anatomical shapes reducing operative bending time',
      'Color-coded titanium screws (3.5mm / 4.5mm / 5.0mm)',
      'Tapered plate ends for minimally invasive percutaneous insertion',
    ],
  },
  {
    id: 'verteguard-spine',
    sku: 'MOL-SPN-7702',
    name: 'VerteGuard™ Pedicle Screw & Spinal Rod System',
    category: 'Spine & Arthroscopy',
    material: 'Titanium & PEEK (Polyether Ether Ketone)',
    certification: 'ISO 13485 Certified',
    image: '/images/698c8275ddd097906e5f0ebc_Card_Image_4.webp',
    summary: 'Dynamic polyaxial spinal pedicle screws and interbody cages designed for multi-level lumbar & thoracic stabilization.',
    specs: [
      'Polyaxial screw head allowing up to 55° multi-angle trajectory',
      'Friction-head design preventing premature screw floppiness',
      'Radiolucent PEEK lumbar cages with tantalum markers',
      'Self-breaking set screws ensuring accurate torque tightening',
    ],
  },
  {
    id: 'ultracut-power-tools',
    sku: 'MOL-INS-1190',
    name: 'UltraCut™ High-Torque Surgical Power Tool Set',
    category: 'Instruments & Tools',
    material: 'Autoclavable 316L Stainless Steel & Aluminum',
    certification: 'ISO 13485 & Govt. Approved',
    image: '/images/698c81b6e95d89b9e26989dc_Card_Image_1.webp',
    summary: 'Heavy-duty autoclavable battery-powered surgical drill and sagittal saw system for orthopaedic operating suites.',
    specs: [
      'Variable speed trigger (0 - 1,200 RPM high torque mode)',
      'Li-ion quick-recharge battery module with thermal protection',
      'Cannulated drill handpiece for K-wire & intramedullary pin driving',
      'IPX7 waterproof rating for steam sterilization',
    ],
  },
  {
    id: 'endojoint-arthroscopy',
    sku: 'MOL-ART-5044',
    name: 'EndoJoint™ Arthroscopy Anchors & Cannulas',
    category: 'Spine & Arthroscopy',
    material: 'PEEK & Biocomposite Polymer',
    certification: 'ISO 13485 Certified',
    image: '/images/698c82a83074d76d7d745c04_download_7.webp',
    summary: 'Knotless suture anchors and fluid management cannulas for shoulder rotator cuff and knee ACL ligament reconstruction.',
    specs: [
      'High pull-out strength biocomposite thread geometry',
      'Pre-loaded with UltraBraid™ high-molecular suture tapes',
      'Flexible transparent arthroscopic working cannulas with valves',
      'Sterile single-use surgical packaging',
    ],
  },
  {
    id: 'orthoshield-drapes',
    sku: 'MOL-SGD-8812',
    name: 'OrthoShield™ Sterile Operating Suite Packs',
    category: 'Surgical Goods',
    material: 'Medical Grade Non-Woven Polypropylene',
    certification: 'ISO 9001 & MSME Certified',
    image: '/images/698c83651ab19382d4fa35d7_Card_Image_5.webp',
    summary: 'Comprehensive sterile surgical drape packs, fluid collection pouches, and reinforced operating gowns for orthopaedic surgeries.',
    specs: [
      'Impermeable fluid barrier with integrated incision film',
      'Low-linting SMS fabric reducing bacterial contamination',
      'Includes arm/leg sleeves and cable holding Velcro straps',
      'EO Gas sterilized with double indicator strip',
    ],
  },
  {
    id: 'optifix-external-fixator',
    sku: 'MOL-TRM-6620',
    name: 'OptiFix™ External Ring Fixator System',
    category: 'Trauma & Fixation',
    material: 'Carbon Fiber & Stainless Steel',
    certification: 'ISO 13485 Certified',
    image: '/images/698c81e8ff1f0106581b1d49_Card_Image_2.webp',
    summary: 'Radiolucent carbon fiber circular rings and threaded rods for complex open fractures, deformity correction, and limb lengthening.',
    specs: [
      'Ultra-lightweight carbon fiber rings offering 100% X-ray translucency',
      'Adjustable telescopic struts with millimeter gradient markings',
      'Self-drilling Schanz pins with anti-pin-tract infection coating',
      'Modular connecting clamps for quick intraoperative setup',
    ],
  },
];

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
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

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
    <div style={{ paddingTop: '130px', paddingBottom: '100px', backgroundColor: '#f8fafc', minHeight: '100vh' }}>
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '32px', marginBottom: '60px' }}>
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

                  {/* Card Info Content */}
                  <div style={{ padding: '28px 24px 16px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '8px' }}>
                      {prod.category}
                    </span>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '10px' }}>
                      {prod.name}
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
                  <button
                    onClick={() => setActiveModalProduct(prod)}
                    style={{
                      flex: 1,
                      padding: '10px 14px',
                      borderRadius: '12px',
                      backgroundColor: '#f1f5f9',
                      color: '#0f172a',
                      fontSize: '13px',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background-color 0.2s ease',
                    }}
                  >
                    View Specs
                  </button>
                  <Link
                    href="/appointment"
                    style={{
                      flex: 1,
                      padding: '10px 14px',
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
                    Inquire Now →
                  </Link>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Technical Specification Modal */}
        {activeModalProduct && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={() => setActiveModalProduct(null)}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                maxWidth: '680px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '32px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalProduct(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: '#f1f5f9',
                  border: 'none',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  fontWeight: 700,
                  fontSize: '16px',
                  cursor: 'pointer',
                  color: '#475569',
                }}
              >
                ✕
              </button>

              <span style={{ fontSize: '12px', fontWeight: 800, color: '#0ea5e9', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '6px' }}>
                Technical Specification Sheet • {activeModalProduct.sku}
              </span>
              <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '16px' }}>
                {activeModalProduct.name}
              </h2>

              <div style={{ width: '100%', height: '220px', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px' }}>
                <img src={activeModalProduct.image} alt={activeModalProduct.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', fontWeight: 700, display: 'block' }}>Primary Material</span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a' }}>{activeModalProduct.material}</span>
                </div>
                <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', fontWeight: 700, display: 'block' }}>Certification</span>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#0ea5e9' }}>{activeModalProduct.certification}</span>
                </div>
              </div>

              <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>Key Engineering Specs &amp; Features:</h4>
              <ul style={{ paddingLeft: '20px', margin: '0 0 24px 0', color: '#475569', fontSize: '14px', lineHeight: 1.7 }}>
                {activeModalProduct.specs.map((spec, idx) => (
                  <li key={idx} style={{ marginBottom: '6px' }}>{spec}</li>
                ))}
              </ul>

              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '20px', display: 'flex', gap: '12px' }}>
                <Link
                  href="/appointment"
                  onClick={() => setActiveModalProduct(null)}
                  style={{
                    flex: 1,
                    backgroundColor: '#0ea5e9',
                    color: '#ffffff',
                    padding: '12px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                >
                  Request Technical Catalog &amp; Quote
                </Link>
                <button
                  onClick={() => setActiveModalProduct(null)}
                  style={{
                    backgroundColor: '#f1f5f9',
                    color: '#334155',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Facility & Support Banner */}
        <div style={{ background: '#0f172a', borderRadius: '24px', padding: '48px 36px', color: '#ffffff', textAlign: 'center' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '10px' }}>
            Direct OT Supply &amp; Custom Requirements
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px' }}>Need Customized Surgical Implants or Bulk Fulfillment?</h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 1.6, maxWidth: '650px', margin: '0 auto 28px' }}>
            MediOrtho Link operates a 2,500 sq. ft. facility at Yeshwanthpur, Bangalore, servicing leading hospitals and orthopedic surgeons with 24/7 emergency OT fulfillment.
          </p>
          <Link href="/contact" className="primary-button w-inline-block">
            <div className="primary-button-text">GET IN TOUCH WITH OUR SPECIALISTS</div>
            <div className="primary-button-bg"></div>
          </Link>
        </div>

      </div>
    </div>
  );
}

