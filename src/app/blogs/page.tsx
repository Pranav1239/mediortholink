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

const coverVariants = [local.coverArtVariant1, local.coverArtVariant2, local.coverArtVariant3];

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
}

function CoverArt({ index, tag }: { index: number; tag?: string }) {
  return (
    <div className={`${local.coverArt} ${coverVariants[index % coverVariants.length]}`}>
      <div className={local.coverArtGlow} />
      {tag && <span className={local.coverArtTag}>{tag}</span>}
      <img
        src="/images/68f06809395a46f2d4696554_Group_3.svg"
        alt=""
        aria-hidden="true"
        className={local.coverArtMark}
      />
    </div>
  );
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

  const [featured, ...rest] = posts;

  return (
    <div className={styles.page}>
      <div className={`${styles.inner} ${local.pageInner}`}>
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
          <div className={local.emptyState}>
            <h3 className={local.emptyStateTitle}>No posts yet</h3>
            <p className={local.emptyStateBody}>Check back soon for updates from MediOrtho Link.</p>
          </div>
        ) : (
          <>
            <Link href={`/blogs/${featured.slug}`} className={local.featuredCard}>
              <div className={local.featuredImageWrap}>
                {featured.coverImage ? (
                  <img src={featured.coverImage} alt={featured.title} className={local.featuredImage} />
                ) : (
                  <CoverArt index={0} tag="Latest Article" />
                )}
              </div>
              <div className={local.featuredBody}>
                <span className={local.featuredEyebrow}>Featured</span>
                <h2 className={local.featuredTitle}>{featured.title}</h2>
                {featured.excerpt && <p className={local.featuredExcerpt}>{featured.excerpt}</p>}
                <div className={local.featuredMeta}>
                  {formatDate(featured.publishedDate)}
                  {featured.author && (
                    <>
                      <span className={local.featuredMetaDivider}>&bull;</span>
                      {featured.author}
                    </>
                  )}
                </div>
                <span className={local.featuredCta}>Read Full Article &rarr;</span>
              </div>
            </Link>

            {rest.length > 0 && (
              <>
                <h3 className={local.gridHeading}>More Articles</h3>
                <div className={local.blogGrid}>
                  {rest.map((post, idx) => (
                    <Link key={post.slug} href={`/blogs/${post.slug}`} className={local.blogCard}>
                      <div className={local.blogImageWrap}>
                        {post.coverImage ? (
                          <img src={post.coverImage} alt={post.title} className={local.blogImage} />
                        ) : (
                          <CoverArt index={idx + 1} />
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
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
