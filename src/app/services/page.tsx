import { Suspense } from 'react';
import ProductsGrid from '@/components/ProductsGrid';
import { nucleus } from '@/lib/nucleus';
import { products as fallbackProductsData } from '@/data/products';

const fallbackProducts = fallbackProductsData.map((p) => ({
  slug: p.id,
  sku: p.sku,
  name: p.name,
  category: p.category,
  subcategory: p.subcategory ?? '',
  material: p.material,
  certification: p.certification,
  image: p.image,
  summary: p.summary,
}));

export default async function ProductsPage() {
  const products = await nucleus
    .getAll('products', { limit: 200 }, { revalidate: 300 })
    .then((entries) =>
      entries
        .map((entry) => entry.data)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .map((p) => ({
          slug: p.slug,
          sku: p.sku,
          name: p.name,
          category: p.category,
          subcategory: p.subcategory ?? '',
          material: p.material ?? '',
          certification: p.certification ?? '',
          image: p.image ?? '',
          summary: p.summary ?? '',
        }))
    )
    .catch(() => fallbackProducts);

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
            Explore our comprehensive range of high-precision joint replacements, trauma fixation systems, spinal implants, and surgical tools distributed directly from our facility in Yeshwanthpur, Bangalore.
          </p>
        </div>

        <Suspense fallback={null}>
          <ProductsGrid products={products} />
        </Suspense>

      </div>
    </div>
  );
}
