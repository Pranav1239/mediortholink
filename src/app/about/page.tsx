import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";
import shared from "@/styles/shared.module.css";
import { nucleus } from "@/lib/nucleus";
const badgeIcon = "/images/68f06809395a46f2d4696554_Group_3.svg";

export default async function AboutPage() {
  const leadership = await nucleus
    .get("leadership", {}, { revalidate: 300 })
    .then((page) => page.data.map((entry) => entry.data).sort((a, b) => (a.order ?? 0) - (b.order ?? 0)))
    .catch(() => fallbackLeadership);

  return (
    <div style={{ paddingTop: "100px" }}>
      
      {/* 1. ABOUT HERO SECTION (Redesigned per Reference Image) */}
      <section className={styles.aboutHeroNewSection}>
        <div className={shared.container}>
          <div className={styles.aboutHeroNewWrapper}>
            {/* Left Content Column */}
            <div className={styles.aboutHeroNewLeft}>
              <span className={styles.aboutHeroPillTag}>ABOUT US</span>
              <h1 className={styles.aboutHeroNewTitle}>About MediOrtho Link</h1>
              <p className={styles.aboutHeroNewPara}>
                MediOrtho Link is a renowned distributor of orthopaedic implants and surgical goods, founded in 2013 and based in Yeshwanthpur, Bangalore. Certified by the Government of India with ISO 13485:2012 and MSME registration, our team is committed to connecting healthcare professionals with exceptional implants and surgical goods that foster excellence in patient care.
              </p>
              
              {/* Action Buttons Row */}
              <div className={styles.aboutHeroButtonsRow}>
                <Link href="/services" className={styles.aboutHeroPrimaryBtn}>
                  Explore Products &rarr;
                </Link>
                <Link href="/contact" className={styles.aboutHeroSecondaryBtn}>
                  Contact Us
                </Link>
              </div>

              {/* Divider Line */}
              <div className={styles.aboutHeroDivider}></div>

              {/* Stats Metrics Row */}
              <div className={styles.aboutHeroMetricsRow}>
                <div className={styles.aboutHeroMetricItem}>
                  <span className={styles.aboutHeroMetricNumber}>15+</span>
                  <span className={styles.aboutHeroMetricLabel}>Years of Industry Experience</span>
                </div>
                <div className={styles.aboutHeroMetricItem}>
                  <span className={styles.aboutHeroMetricNumber}>2013</span>
                  <span className={styles.aboutHeroMetricLabel}>Founded in Bangalore</span>
                </div>
                <div className={styles.aboutHeroMetricItem}>
                  <span className={styles.aboutHeroMetricNumber}>100%</span>
                  <span className={styles.aboutHeroMetricLabel}>ISO &amp; MSME Govt. Certified</span>
                </div>
              </div>
            </div>

            {/* Right Portrait Image Column */}
            <div className={styles.aboutHeroNewRight}>
              <div className={styles.aboutHeroImageWrapper}>
                <Image
                  src="/images/698c244c655aa1ba0a300fa1_Frame_1000003067.webp"
                  width={1200}
                  height={1400}
                  priority
                  alt="MediOrtho Link Founders and Headquarters"
                  className={styles.aboutHeroMainImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1B. VISION & MISSION SECTION */}
      <section className={shared.section}>
        <div className={shared.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <p className={styles.innovative}>Our Vision</p>
              <p className={styles.aboutParaTight}>
                We envision a world where patients receive top-tier orthopedic solutions that accelerate recovery and enhance quality of life.
              </p>
            </div>
            <div className={styles.aboutContent}>
              <p className={styles.innovative}>Our Mission</p>
              <p className={styles.aboutParaTight}>
                To connect healthcare professionals with exceptional orthopedic implants and surgical goods, fostering excellence in patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUES SECTION */}
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

      {/* 3. EXCELLENCE & INFRASTRUCTURE SECTION (Redesigned per Reference Image) */}
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

      {/* 4. LEADERSHIP TEAM SECTION */}
      {leadership.length > 0 && (
      <section className={styles.expertSection}>
        <div className={shared.container}>
          <div className={styles.expertWrapper}>
            <div className={styles.expertTop}>
              <div className={styles.aboutFlex}>
                <Image src={badgeIcon} width={22} height={21} alt="" aria-hidden="true" className={styles.aboutIcon} />
                <p className={styles.aboutYear}>Our Leadership</p>
              </div>
              <h2 className={styles.aboutTitle}>Meet the Team</h2>
              <p className={styles.aboutPara}>
                Since 2013, MediOrtho Link combines deep technical expertise with commercial knowledge across the Indian subcontinent.
              </p>
            </div>
            <div className={styles.doctorsLists}>
              {leadership.map((person) => (
                <div key={person.name} className={styles.expertCard}>
                  <div className={styles.overflowExpert}>
                    <Image
                      src={person.image || "/images/68f222a1a881f028d1757038_Frame_100.webp"}
                      width={612}
                      height={720}
                      sizes="(max-width: 767px) 100vw, 28vw"
                      alt={person.name}
                      className={styles.expertImage}
                    />
                  </div>
                  <div className={styles.cardContentWrap} style={{ cursor: 'default' }}>
                    <p className={styles.expertDesignation}>{person.role}</p>
                    <p className={styles.expertName}>{person.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

    </div>
  );
}

const coreValues = [
  {
    title: "1. Compliance",
    description: "Every implant and instrument we distribute complies with ISO 13485:2012 international standards.",
    icon: "/images/698c8ac434c62ed3717bf9f5_Frame_1.webp",
    alt: "Compliance",
  },
  {
    title: "2. Quality Assurance",
    description: "Stringent quality norms and thorough checks ensure every product meets global surgical standards.",
    icon: "/images/698c8cddef506d391c6c44f8_Frame_2.webp",
    alt: "Quality Assurance",
  },
  {
    title: "3. Commitment",
    description: "We are committed to collaboration and innovation, partnering closely with surgeons and hospitals.",
    icon: "/images/698c8d2eb5cb37dc80f8d041_Frame_3.webp",
    alt: "Commitment",
  },
];

const fallbackLeadership: { name: string; role: string; image: string }[] = [];

