'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/app/page.module.css";
import shared from "@/styles/shared.module.css";
const badgeIcon = "/images/68f06809395a46f2d4696554_Group_3.svg";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "100px" }}>
      
      {/* 1. ABOUT HERO SECTION */}
      <section className={styles.discoverSection} style={{ paddingTop: "60px" }}>
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
                    <p className={styles.aboutYear}>ABOUT MEDI ORTHO LINK • EST. 2013</p>
                  </div>
                  <h1 className={styles.aboutTitle}>
                    Transforming Clinical Insights into <span className={styles.primaryColor}>Tangible Implants</span>
                  </h1>
                  <p className={styles.aboutPara}>
                    MediOrtho Link was founded in the year 2013 in Bangalore by Vinod Kumar &amp; Sunil Kumar. We are Distributors of Orthopaedic Implants &amp; Surgical Goods, certified by the Government of India with ISO &amp; MSME Registration. Operating from a 2,500 square feet facility at Yeshwanthpur, Bangalore, we are dedicated to innovation, manufacturing, and marketing of medical implants with a focus on global quality standards across the Indian subcontinent.
                  </p>
                  <div>
                    <Link href="/contact" className={shared.primaryButton}>
                      <div className={shared.primaryButtonText}>CONNECT WITH US</div>
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
                      src="/images/698c2f523d1538d40003f912_Frame_1000003074.webp"
                      width={261}
                      height={270}
                      loading="lazy"
                      alt="Founders"
                      className={styles.appointmentImage}
                    />
                    <div className={styles.appointmentBlock}>
                      <p className={styles.appointmentAuthorName}>Vinod Kumar &amp; Sunil Kumar</p>
                      <p className={styles.appointmentAuthorDesignation}>Founders, MediOrtho Link</p>
                    </div>
                  </div>
                  <Link href="/contact" className={`${shared.primaryButton} ${shared.primaryButtonAppointment}`}>
                    <div className={shared.primaryButtonText}>Contact Founders</div>
                    <div className={`${shared.primaryButtonBg} ${shared.primaryButtonBgAppointment}`}></div>
                  </Link>
                </div>
              </div>
              <div className={styles.aboutRight}>
                <Image
                  src="/images/698c244c655aa1ba0a300fa1_Frame_1000003067.webp"
                  width={1884}
                  height={2046}
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, 45vw"
                  alt="MediOrtho Link Office"
                  className={styles.aboutImage}
                />
              </div>
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
                <h2 className={styles.whyTitle}>Built on 3 Principles of Conscious Business</h2>
              </div>
              <p className={styles.whyDesp}>
                We work on a conscious business model, maximizing value alongside the happiness and success of everyone connected with us.
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
                  <span className={styles.metricNumber}>12+ Yrs</span>
                  <span className={styles.metricLabel}>Industry Experience</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricNumber}>2,500</span>
                  <span className={styles.metricLabel}>Sq. Ft. Facility</span>
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
                    <h3 className={styles.aboutDesignCardTitle}>ISO &amp; MSME Certified</h3>
                    <p className={styles.aboutDesignCardDesc}>
                      Certified by the Government of India with ISO and MSME registration, ensuring maximum surgical precision and international safety standards.
                    </p>
                    <Link href="/services" className={styles.aboutDesignPillBtn}>
                      Read More <span className={styles.chevron}>&rsaquo;</span>
                    </Link>
                  </div>

                  {/* Card 2: Neutral Off-White */}
                  <div className={`${styles.aboutDesignCard} ${styles.aboutDesignCardGray}`}>
                    <h3 className={styles.aboutDesignCardTitle}>2,500 Sq. Ft. Hub</h3>
                    <p className={styles.aboutDesignCardDesc}>
                      Operating from our modern facility in Yeshwanthpur, Bangalore, equipped for warehousing and 24/7 OT emergency fulfillment.
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

      {/* 4. FOUNDERS & LEADERSHIP TEAM SECTION */}
      <section className={styles.expertSection}>
        <div className={shared.container}>
          <div className={styles.expertWrapper}>
            <div className={styles.expertTop}>
              <div className={styles.aboutFlex}>
                <Image src={badgeIcon} width={22} height={21} alt="" aria-hidden="true" className={styles.aboutIcon} />
                <p className={styles.aboutYear}>Our Leadership</p>
              </div>
              <h2 className={styles.aboutTitle}>Meet the Founders &amp; Leadership Team</h2>
              <p className={styles.aboutPara}>
                Founded by Vinod Kumar &amp; Sunil Kumar in 2013, MediOrtho Link combines deep technical expertise with commercial knowledge across the Indian subcontinent.
              </p>
            </div>
            <div className={styles.doctorsLists}>
              {leadership.map((person) => (
                <div key={person.name} className={styles.expertCard}>
                  <div className={styles.overflowExpert}>
                    <Image
                      src={person.image}
                      width={person.width}
                      height={person.height}
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

    </div>
  );
}

const coreValues = [
  {
    title: "1. Honesty",
    description: "Being honest we build a stronger trust with our customers. High integrity gives clients confidence.",
    icon: "/images/698c8ac434c62ed3717bf9f5_Frame_1.webp",
    alt: "Honesty",
  },
  {
    title: "2. Sincerity",
    description: "We do things with utmost care, love and non-attachment, prioritizing consumer needs over sales.",
    icon: "/images/698c8cddef506d391c6c44f8_Frame_2.webp",
    alt: "Sincerity",
  },
  {
    title: "3. Excellence",
    description: "We strive for betterment at every level, motivating ourselves to become better than yesterday.",
    icon: "/images/698c8d2eb5cb37dc80f8d041_Frame_3.webp",
    alt: "Excellence",
  },
  {
    title: "Global Quality",
    description: "ISO & MSME registered operations at Yeshwanthpur Bangalore guaranteeing international standards.",
    icon: "/images/698c8d67805fced76ad4b28a_Frame_4.webp",
    alt: "Global Quality",
  },
];

const leadership = [
  {
    name: "Vinod Kumar",
    role: "Co-Founder & Managing Director",
    image: "/images/68f222a1a881f028d1757038_Frame_100.webp",
    width: 612,
    height: 720,
  },
  {
    name: "Sunil Kumar",
    role: "Co-Founder & Operations Director",
    image: "/images/696a7f5a729a13aa3d7cadbd_Frame_100_2.webp",
    width: 612,
    height: 720,
  },
  {
    name: "Dr. A. R. Sharma",
    role: "Clinical Implant Specialist",
    image: "/images/696a5e89f27fd687fae01719_Frame_100_1.webp",
    width: 612,
    height: 720,
  },
  {
    name: "Rajesh V. N.",
    role: "ISO & Quality Lead",
    image: "/images/696a7f5fcdcb2611feabd1a4_Frame_100.webp",
    width: 612,
    height: 720,
  },
];

