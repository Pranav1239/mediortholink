import Link from 'next/link';
import styles from '@/styles/subpage.module.css';
import local from './blogs.module.css';
import { nucleus } from '@/lib/nucleus';

const fallbackPosts = [
  {
    slug: 'bring-life-back-to-your-bones',
    title: 'Bring Life Back to Your Bones',
    excerpt:
      "We are India's most reputed distributors of orthopaedic implants in Bangalore, started in 2013 with 15 years of experience.",
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

export default async function BlogsPage() {
  const posts = await nucleus
    .getAll('blogs', { limit: 100 }, { revalidate: 300 })
    .then((entries) =>
      entries
        .map((entry) => ({
          slug: entry.data.slug,
          title: entry.data.title,
          excerpt: entry.data.excerpt ?? '',
          coverImage: entry.data.coverImage ?? '',
          author: entry.data.author ?? '',
          publishedDate: entry.data.publishedDate,
        }))
        .sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime())
    )
    .catch(() => fallbackPosts);

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>MEDIORTHO LINK BLOG</span>
          <h1 className={styles.title}>
            Insights &amp; <span className={styles.accent}>Updates</span>
          </h1>
          <p className={styles.lede}>
            News, orthopaedic industry updates, and stories from MediOrtho Link&rsquo;s Bangalore facility.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className={styles.card} style={{ textAlign: 'center' }}>
            <h3 style={{ marginBottom: '8px', color: '#0f172a' }}>No posts yet</h3>
            <p style={{ color: '#64748b', margin: 0 }}>Check back soon for updates from MediOrtho Link.</p>
          </div>
        ) : (
          <div className={local.blogGrid}>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blogs/${post.slug}`} className={local.blogCard}>
                <div className={local.blogImageWrap}>
                  {post.coverImage ? (
                    <img src={post.coverImage} alt={post.title} className={local.blogImage} />
                  ) : (
                    <div className={local.blogImagePlaceholder}>📰</div>
                  )}
                </div>
                <div className={local.blogCardBody}>
                  <span className={local.blogMeta}>
                    {formatDate(post.publishedDate)}
                    {post.author && (
                      <>
                        <span className={local.blogMetaDivider}>&bull;</span>
                        {post.author}
                      </>
                    )}
                  </span>
                  <h3 className={local.blogTitle}>{post.title}</h3>
                  {post.excerpt && <p className={local.blogExcerpt}>{post.excerpt}</p>}
                  <span className={local.blogReadMore}>Read Details &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
