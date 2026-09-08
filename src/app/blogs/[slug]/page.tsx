import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from '@/styles/subpage.module.css';
import local from '../blogs.module.css';
import { nucleus } from '@/lib/nucleus';
import type { NucleusModels } from '@techsolace-studios/nucleus-sdk';

const fallbackPosts = [
  {
    slug: 'bring-life-back-to-your-bones',
    title: 'Bring Life Back to Your Bones',
    content: `<p>We are India's most reputed <strong>Distributors of Implants</strong> in Bangalore, started in 2013 with 15 years of experience.</p>
<h2>Our Certifications</h2>
<ul>
<li>Certified by the Government of India</li>
<li>ISO 13485:2012 Registered</li>
<li>MSME Registered</li>
</ul>
<p>Our head office is situated in Bangalore, serving healthcare professionals with global-quality orthopaedic implants and surgical goods.</p>`,
    coverImage: '',
    author: 'Medi Ortho',
    publishedDate: '2017-06-06',
  },
];

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

export async function generateStaticParams() {
  const slugs = await nucleus
    .getAll('blogs', { select: 'slug', limit: 100 }, { revalidate: 300 })
    .then((entries) => entries.map((entry) => entry.data.slug))
    .catch(() => fallbackPosts.map((p) => p.slug));
  return slugs.map((slug) => ({ slug }));
}

async function getPost(slug: string) {
  const entry = await nucleus
    .findOne<'blogs', NucleusModels['blogs']>('blogs', { filter: { slug } })
    .catch(() => null);
  if (entry) {
    const p = entry.data;
    return {
      title: p.title,
      content: p.content,
      coverImage: p.coverImage ?? '',
      author: p.author ?? '',
      publishedDate: p.publishedDate,
    };
  }
  return fallbackPosts.find((p) => p.slug === slug) ?? null;
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div style={{ marginBottom: '24px' }}>
          <Link
            href="/blogs"
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
            ← Back to Blog
          </Link>
        </div>

        <div className={styles.header} style={{ marginBottom: '32px' }}>
          <h1 className={styles.title} style={{ marginBottom: '10px' }}>
            {post.title}
          </h1>
          <div className={local.postMeta}>
            {formatDate(post.publishedDate)}
            {post.author && (
              <>
                <span className={local.postMetaDivider}>&bull;</span>
                {post.author}
              </>
            )}
          </div>
        </div>

        <div className={local.postCoverWrap}>
          {post.coverImage ? (
            <img src={post.coverImage} alt={post.title} className={local.postCoverImage} />
          ) : (
            <div className={local.postCoverPlaceholder}>📰</div>
          )}
        </div>

        {/* Content is authored as HTML by trusted CMS editors in the Nucleus dashboard, not public user input. */}
        <div className={local.postBody} dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className={styles.centered} style={{ marginTop: '56px' }}>
          <Link href="/contact" className={styles.eyebrow} style={{ textDecoration: 'none' }}>
            Have a question about this post? Contact MediOrtho Link &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
