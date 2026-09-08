import ProcessSteps from "@/components/ProcessSteps";
import HomeInquiryForm from "@/components/HomeInquiryForm";
import HeroCarousel from "@/components/HeroCarousel";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import shared from "@/styles/shared.module.css";
import { nucleus } from "@/lib/nucleus";
import { products as fallbackProductsData } from "@/data/products";

export default async function HomePage() {
  const testimonials = await nucleus
    .get("testimonials", {}, { revalidate: 300 })
    .then((page) => page.data.map((entry) => entry.data).sort((a, b) => (a.order ?? 0) - (b.order ?? 0)))
    .catch(() => fallbackTestimonials);

  const latestProducts = await nucleus
    .get("products", { sort: "-createdAt", limit: 4 }, { revalidate: 300 })
    .then((page) =>
      page.data.map((entry) => ({
        slug: entry.data.slug,
        sku: entry.data.sku,
        name: entry.data.name,
        category: entry.data.category,
        subcategory: entry.data.subcategory ?? "",
        image: entry.data.image ?? "",
      }))
    )
    .catch(() =>
      fallbackProductsData.slice(0, 4).map((p) => ({
        slug: p.id,
        sku: p.sku,
        name: p.name,
        category: p.category,
        subcategory: p.subcategory ?? "",
        image: p.image,
      }))
    );

  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <HeroCarousel />
        <div className={shared.container}>
          <div className={styles.heroWrapper}>
            <div className={styles.heroLeft}>
              <h1 className={styles.healthTitle}>
                Orthopaedic Implants &amp; Surgical Goods
              </h1>
              <div className={styles.globalButtons}>
                <Link href="/appointment" className={shared.primaryButton}>
                  <div className={shared.primaryButtonText}>REQUEST IMPLANTS</div>
                  <div className={shared.primaryButtonBg}></div>
                </Link>
                <Link href="/services" className={styles.secondaryButton}>
                  <div className={styles.buttonTexts}>
                    <div className={styles.buttonText}>Our Products</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.heroRight}>
              <p className={styles.heroParagraph}>
                Welcome to MediOrtho Link. Govt. of India Certified (ISO 13485:2012 &amp; MSME). A renowned distributor of global-quality orthopaedic implants &amp; surgical goods.
              </p>
            </div>
            <a href="tel:+919845164422" className={styles.heroContactWrapper}>
              <div className={styles.contactIconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 18" fill="none" className={styles.contactIconSvg}>
                  <path d="M9.79481 0.796362C9.79013 0.697945 9.80488 0.59957 9.83823 0.506856C9.87158 0.414142 9.92286 0.328908 9.98916 0.256024C10.0555 0.183139 10.1355 0.124032 10.2246 0.0820805C10.3138 0.040129 10.4103 0.016155 10.5087 0.011528C11.9436 -0.0655957 13.3731 0.241162 14.6499 0.900208C15.9268 1.55925 17.0049 2.54676 17.7732 3.76103C17.8265 3.84393 17.8628 3.93651 17.8803 4.03349C17.8977 4.13046 17.8959 4.22992 17.8749 4.32618C17.8539 4.42244 17.8141 4.51363 17.7579 4.59452C17.7016 4.67541 17.63 4.74442 17.547 4.79761C17.4917 4.83272 17.4322 4.86065 17.3699 4.88072C17.2125 4.93098 17.043 4.92791 16.8876 4.87199C16.7322 4.81606 16.5997 4.71041 16.5105 4.57143C15.8836 3.57989 15.0036 2.77348 13.9613 2.23535C12.9189 1.69722 11.7519 1.44683 10.5805 1.51001C10.4821 1.51482 10.3836 1.50016 10.2908 1.46689C10.198 1.43361 10.1127 1.38237 10.0397 1.31609C9.96674 1.2498 9.90755 1.16978 9.86553 1.08061C9.8235 0.991426 9.79947 0.894837 9.79481 0.796362Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className={styles.contactNumberWrapper}>
                <div className={styles.homePhone}>Est. 2013 | Bangalore</div>
                <div className={styles.duty}>Govt. ISO &amp; MSME Certified</div>
              </div>
            </a>
          </div>
        </div>
        <Image
          src="/images/698c1a685792bc3a80304aa3_Frame.webp"
          width={7680}
          height={160}
          loading="lazy"
          sizes="100vw"
          alt="Hero Line"
          className={styles.heroLine}
        />
      </section>

      {/* ABOUT MEDI ORTHO LINK SECTION */}
      <section className={styles.discoverSection}>
        <Image
          src="/images/695a5bffebea08352d2f46f6_675d6fafc8d538425e0683dd_about-vector_1.webp"
          width={2832}
          height={4580}
          sizes="(max-width: 479px) 22rem, (max-width: 767px) 28rem, (max-width: 991px) 36rem, 44.25rem"
          alt=""
          aria-hidden="true"
          className={styles.aboutBackground}
        />
        <div className={styles.aboutWrapper}>
          <div className={shared.container}>
            <div className={styles.aboutBottom}>
              <div className={styles.aboutLeft}>
                <div className={styles.aboutTop}>
                  <div className={styles.aboutFlex}>
                    <Image src={badgeIcon} width={22} height={21} alt="" aria-hidden="true" className={styles.aboutIcon} />
                    <p className={styles.aboutYear}>Welcome to MediOrtho Link</p>
                  </div>
                  <h2 className={styles.aboutTitle}>
                    Discover <span className={styles.primaryColor}>MediOrtho Link</span>
                  </h2>
                  <p className={styles.aboutPara}>
                    MediOrtho Link was founded in the year 2013 in Bangalore. We are a renowned Distributor of Orthopaedic Implants &amp; Surgical Goods, certified by the Government of India with ISO 13485:2012 &amp; MSME Registration. Operating from Yeshwanthpur, Bangalore, we are dedicated to connecting healthcare professionals with exceptional orthopaedic implants and surgical goods, fostering excellence in patient care.
                  </p>
                  <div>
                    <Link href="/about" className={shared.primaryButton}>
                      <div className={shared.primaryButtonText}>MORE ABOUT US</div>
                      <div className={shared.primaryButtonBg}></div>
                    </Link>
                  </div>
                </div>
                <div className={styles.aboutLine}></div>
                <div className={styles.aboutGrid}>
                  <div className={styles.aboutContent}>
                    <p className={styles.innovative}>Global Quality Implants</p>
                    <p className={styles.aboutParaTight}>We market top-grade orthopaedic implants and instruments engineered for precision and durability.</p>
                  </div>
                  <div className={styles.aboutContent}>
                    <p className={styles.innovative}>Surgeon &amp; Clinical Partnerships</p>
                    <p className={styles.aboutParaTight}>We partner with orthopedic surgeons and academicians to transform clinical insights into tangible surgical solutions.</p>
                  </div>
                </div>
                <div className={styles.appointmentCard}>
                  <div className={styles.appointmentFlex}>
                    <Image
                      src="/images/new/IMG_0527-300x300.jpg"
                      width={300}
                      height={300}
                      loading="lazy"
                      alt="MediOrtho Link team celebrating a milestone"
                      className={styles.appointmentImage}
                    />
                    <div className={styles.appointmentBlock}>
                      <p className={styles.appointmentAuthorName}>MediOrtho Link</p>
                      <p className={styles.appointmentAuthorDesignation}>Est. 2013 &middot; Bangalore</p>
                    </div>
                  </div>
                  <Link href="/contact" className={`${shared.primaryButton} ${shared.primaryButtonAppointment}`}>
                    <div className={shared.primaryButtonText}>Contact Us</div>
                    <div className={`${shared.primaryButtonBg} ${shared.primaryButtonBgAppointment}`}></div>
                  </Link>
                </div>
              </div>
              <div className={styles.aboutRight}>
                <Image
                  src="/images/new/IMG_7094-1-300x300.jpg"
                  width={300}
                  height={300}
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, 45vw"
                  alt="MediOrtho Link team welcoming visiting partners at their Bangalore office"
                  className={styles.aboutImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS & SOLUTIONS MARQUEE */}
      <section className={styles.solutionsSection}>
        <div className={styles.solutionsWrap}>
          <div className={styles.sectionIntro}>
            <div className={styles.eyebrow}>
              <Image src={badgeIcon} width={22} height={21} alt="" aria-hidden="true" className={styles.eyebrowIcon} />
              Our Offerings
            </div>
            <h2 className={styles.sectionHeading}>
              Orthopaedic Implants &amp; <span className={styles.accent}>Surgical Solutions.</span>
            </h2>
            <p className={styles.sectionSub}>
              Discover our comprehensive range of ISO &amp; MSME certified joint replacements, trauma plates, and specialized surgical tools engineered for healthcare excellence.
            </p>
          </div>
          <div className={styles.solutionsMarquee}>
            <div className={styles.solutionsMarqueeItems}>
              {[...offeringsList, ...offeringsList].map((item, idx) => (
                <div key={idx} className={styles.solutionMarqueeItem}>
                  <div className={styles.solutionCard}>
                    <div className={styles.overflowService}>
                      <Image
                        src={item.image}
                        width={600}
                        height={452}
                        loading="lazy"
                        sizes="250px"
                        alt={item.title}
                        className={styles.solutionImage}
                      />
                    </div>
                    <div className={styles.solutionDetail}>
                      <div className={styles.solutionInfo}>
                        <h3 className={styles.orthopedics}>{item.title}</h3>
                        <p className={styles.comprehensivePara}>{item.description}</p>
                      </div>
                      <Link href={item.btnHref} className={styles.exploreButton}>
                        <div className={styles.exploreText}>{item.btnText}</div>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LATEST PRODUCTS */}
      {latestProducts.length > 0 && (
      <section className={shared.section}>
        <div className={shared.container}>
          <div className={styles.latestTop}>
            <div className={styles.aboutFlex}>
              <Image src={badgeIcon} width={22} height={21} alt="" aria-hidden="true" className={styles.aboutIcon} />
              <p className={styles.aboutYear}>Fresh to the Catalog</p>
            </div>
            <div className={styles.latestHeaderRow}>
              <h2 className={styles.latestTitle}>Latest Products</h2>
              <Link href="/services" className={styles.latestViewAll}>
                View All Products &rarr;
              </Link>
            </div>
          </div>
          <div className={styles.latestGrid}>
            {latestProducts.map((product) => (
              <Link key={product.slug} href={`/services/${product.slug}`} className={styles.latestCard}>
                <div className={styles.latestImageWrap}>
                  {product.image ? (
                    <img src={product.image} alt={product.name} className={styles.latestImage} />
                  ) : (
                    <div className={styles.latestImagePlaceholder} />
                  )}
                  <span className={styles.latestBadge}>New</span>
                </div>
                <div className={styles.latestCardBody}>
                  <span className={styles.latestCategory}>
                    {product.category}
                    {product.subcategory && ` › ${product.subcategory}`}
                  </span>
                  <h3 className={styles.latestName}>{product.name}</h3>
                  <span className={styles.latestSku}>SKU: {product.sku}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* WHY CHOOSE US - CORE VALUES SECTION */}
      <section className={shared.section}>
        <div className={shared.container}>
          <div className={styles.whyWrapper}>
            <div className={styles.whyTop}>
              <div className={styles.whyFlex}>
                <div className={styles.aboutFlex}>
                  <Image src={badgeIcon} width={22} height={21} alt="" aria-hidden="true" className={styles.aboutIcon} />
                  <p className={styles.aboutYear}>Our Core Values</p>
                </div>
                <h2 className={styles.whyTitle}>Built on 3 Principles</h2>
              </div>
              <p className={styles.whyDesp}>
                Compliance, quality assurance, and commitment guide everything we do at MediOrtho Link.
              </p>
            </div>
            <div className={styles.whyCards}>
              {coreValues.map((value) => (
                <div key={value.title}>
                  <div className={styles.whyCard}>
                    <Image
                      src={value.icon}
                      width={240}
                      height={240}
                      loading="lazy"
                      sizes="60px"
                      alt={value.alt}
                      className={styles.whyIcon}
                    />
                    <div className={styles.careFlex}>
                      <h3 className={styles.careText}>{value.title}</h3>
                      <p className={styles.careDesp}>{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <ProcessSteps />

      {/* EXCELLENCE & INFRASTRUCTURE SECTION (Redesigned per Reference Image) */}
      <section className={styles.aboutDesignSection}>
        <div className={shared.container}>
          <div className={styles.aboutDesignWrapper}>
            
            {/* Top Header Row */}
            <div className={styles.aboutDesignHeader}>
              <div className={styles.aboutDesignHeaderLeft}>
                <p className={styles.aboutDesignSubtag}>Govt. Certified ISO &amp; MSME</p>
                <h2 className={styles.aboutDesignTitle}>
                  MediOrtho Link provides global quality implants for surgical excellence.
                </h2>
              </div>
              <div className={styles.aboutDesignMetrics}>
                <div className={styles.metricItem}>
                  <span className={styles.metricNumber}>15+ Yrs</span>
                  <span className={styles.metricLabel}>Industry Experience</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricNumber}>2013</span>
                  <span className={styles.metricLabel}>Founded in Bangalore</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricNumber}>100%</span>
                  <span className={styles.metricLabel}>ISO &amp; MSME Certified</span>
                </div>
              </div>
            </div>

            {/* Main Body Grid */}
            <div className={styles.aboutDesignBody}>
              {/* Left Tall Portrait Image Card */}
              <div className={styles.aboutDesignImageCard}>
                <Image
                  src="/images/698c244c655aa1ba0a300fa1_Frame_1000003067.webp"
                  width={1200}
                  height={1400}
                  alt="MediOrtho Link Infrastructure & Implants"
                  className={styles.aboutDesignMainImage}
                />
              </div>

              {/* Right Cards Grid */}
              <div className={styles.aboutDesignCardsGrid}>
                {/* Top Cards Row */}
                <div className={styles.aboutDesignCardRow}>
                  {/* Card 1: Light Pastel Blue */}
                  <div className={`${styles.aboutDesignCard} ${styles.aboutDesignCardBlue}`}>
                    <h3 className={styles.aboutDesignCardTitle}>ISO 13485:2012 &amp; MSME Certified</h3>
                    <p className={styles.aboutDesignCardDesc}>
                      Certified by the Government of India with ISO 13485:2012 and MSME registration, ensuring maximum surgical precision and international safety standards.
                    </p>
                    <Link href="/services" className={styles.aboutDesignPillBtn}>
                      Read More <span className={styles.chevron}>&rsaquo;</span>
                    </Link>
                  </div>

                  {/* Card 2: Neutral Off-White */}
                  <div className={`${styles.aboutDesignCard} ${styles.aboutDesignCardGray}`}>
                    <h3 className={styles.aboutDesignCardTitle}>Yeshwanthpur, Bangalore Hub</h3>
                    <p className={styles.aboutDesignCardDesc}>
                      Operating from our facility in Yeshwanthpur, Bangalore, equipped for warehousing and rapid order fulfillment.
                    </p>
                    <Link href="/contact" className={styles.aboutDesignPillBtn}>
                      Read More <span className={styles.chevron}>&rsaquo;</span>
                    </Link>
                  </div>
                </div>

                {/* Bottom Card: Full-width */}
                <div className={`${styles.aboutDesignCard} ${styles.aboutDesignCardGray} ${styles.aboutDesignCardFull}`}>
                  <h3 className={styles.aboutDesignCardTitle}>Pan-India &amp; Subcontinent Supply</h3>
                  <p className={styles.aboutDesignCardDesc}>
                    Over a decade of trusted distribution of orthopaedic joint replacements, trauma plates, and specialized surgical instruments to leading healthcare providers.
                  </p>
                  <Link href="/services" className={styles.aboutDesignPillBtn}>
                    Read More <span className={styles.chevron}>&rsaquo;</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* APPOINTMENT / INQUIRY FORM */}
      <section className={shared.section}>
        <div className={shared.container}>
          <div className={styles.bookWrapper}>
            <div className={styles.contactLeft}>
              <div className={styles.contactFormBlock}>
                <HomeInquiryForm />
              </div>
            </div>
            <Image
              src="/images/696a80deed8fbcbc1b7aa4b1_Frame_141_1.webp"
              width={1821}
              height={2199}
              sizes="(max-width: 991px) 100vw, 45vw"
              alt="MediOrtho Link Facility"
              className={styles.contactImage}
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {testimonials.length > 0 && (
      <section className={shared.section}>
        <div className={styles.testimonialsWrapper}>
          <div className={styles.testimonialsTop}>
            <div className={styles.aboutFlex}>
              <Image src={badgeIcon} width={22} height={21} alt="" aria-hidden="true" className={styles.aboutIcon} />
              <p className={styles.aboutYear}>Clinical Testimonials</p>
            </div>
            <h2 className={styles.completeText}>Trusted by Orthopedic Surgeons &amp; Healthcare Leaders</h2>
          </div>
          <div className={styles.testimonialsMarquee}>
            <div className={styles.testimonialsMarqueeItems}>
              {[...testimonials, ...testimonials].map((testi, idx) => (
                <div key={idx} className={styles.testimonialsMarqueeItem}>
                  <div className={styles.topTestimonial}>
                    <Image
                      src={testi.image || "/images/698cb68ab2803d1b98558b5d_Profile_Image.webp"}
                      width={240}
                      height={240}
                      loading="lazy"
                      sizes="52px"
                      alt={testi.name}
                      className={styles.testiIcon}
                    />
                    <Image
                      src="/images/698cb6c54e15a0922e59ac51_Frame_95876.webp"
                      width={208}
                      height={208}
                      loading="lazy"
                      sizes="36px"
                      alt=""
                      aria-hidden="true"
                      className={`${styles.testiIcon} ${styles.testiIconQuote}`}
                    />
                  </div>
                  <div className={styles.middleTestimonial}>
                    <p className={styles.testimonialsDesp}>&ldquo;{testi.quote}&rdquo;</p>
                  </div>
                  <div className={styles.bottomTestimonial}>
                    <p className={styles.testiAuthorName}>{testi.name}</p>
                    <p className={styles.testiAuthorDesig}>{testi.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}
    </>
  );
}

const badgeIcon = "/images/68f06809395a46f2d4696554_Group_3.svg";

const coreValues = [
  {
    title: "1. Compliance",
    alt: "Compliance",
    description: "Every implant and instrument we distribute complies with ISO 13485:2012 international standards.",
    icon: "/images/698c8ac434c62ed3717bf9f5_Frame_1.webp",
  },
  {
    title: "2. Quality Assurance",
    alt: "Quality Assurance",
    description: "Stringent quality norms and thorough checks ensure every product meets global surgical standards.",
    icon: "/images/698c8cddef506d391c6c44f8_Frame_2.webp",
  },
  {
    title: "3. Commitment",
    alt: "Commitment",
    description: "We are committed to collaboration and innovation, partnering closely with surgeons and hospitals.",
    icon: "/images/698c8d2eb5cb37dc80f8d041_Frame_3.webp",
  },
];

const fallbackTestimonials: { name: string; designation: string; quote: string; image: string }[] = [];

const offeringsList = [
  {
    title: "Orthopaedic Implants",
    description: "Comprehensive range of joint replacement, trauma plates, and spinal implants engineered for global quality.",
    btnText: "Explore Products",
    btnHref: "/services",
    image: "/images/new/SPINE-Surgical-home-page-Category-600x452.jpg",
  },
  {
    title: "Surgical Goods & Tools",
    description: "High-precision surgical instruments and operating room supplies for hospitals and specialized clinics.",
    btnText: "Explore Products",
    btnHref: "/services",
    image: "/images/new/SURGICAL-INSTRUMENTS-Surgical-home-page-Category-600x452.jpg",
  },
  {
    title: "Manufacturer Partnerships",
    description: "Favored commercial partner for reliable & innovative medical device manufacturers across the Indian subcontinent.",
    btnText: "Explore Partnership",
    btnHref: "/services",
    image: "/images/new/MAXILLOFACIAL-SYSTEM-Surgical-home-page-Category-600x452.jpg",
  },
  {
    title: "Trauma & Fixation Systems",
    description: "Advanced internal & external fixation systems designed for complex fracture management and rapid recovery.",
    btnText: "Explore Trauma Range",
    btnHref: "/services",
    image: "/images/new/TRAUMA-Surgical-home-page-Category-600x452.jpg",
  },
  {
    title: "Spine & Arthroscopy Solutions",
    description: "Specialized endoscopic, arthroscopic, and spinal fixation instruments for minimally invasive surgeries.",
    btnText: "Explore Spine Range",
    btnHref: "/services",
    image: "/images/new/ARTHROSCOPIC-SYSTEM-Surgical-home-page-Category-600x452.jpg",
  },
  {
    title: "OT Supply Logistics",
    description: "Direct-to-OT implant delivery servicing hospitals across Bangalore & Karnataka.",
    btnText: "Request Supply",
    btnHref: "/appointment",
    image: "/images/new/EXTERNAL-FIXATOR-SYSTEM-Surgical-home-page-Category-600x452.jpg",
  },
];
