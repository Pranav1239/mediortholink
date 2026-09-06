import ProcessSteps from "@/components/ProcessSteps";
import HomeInquiryForm from "@/components/HomeInquiryForm";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import shared from "@/styles/shared.module.css";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
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
                Welcome to MediOrtho Link (Est. 2013, Bangalore). Govt. of India Certified (ISO &amp; MSME). Dedicated to innovation, manufacturing &amp; distribution of global-quality medical implants.
              </p>
              <div className={styles.ratingWrap}>
                <div className={styles.heroRatings}>
                  <div className={styles.ratingImages}>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Image
                        key={i}
                        src="/images/695a3a46f19056467592c28b_Frame.webp"
                        width={80}
                        height={80}
                        priority
                        alt="Rating Star"
                        className={styles.starIcon}
                      />
                    ))}
                  </div>
                  <div className={styles.ratingFlex}>
                    <div className={styles.clientCounters}>
                      <div className={styles.counterFlex}>
                        <div className={styles.counterWrap}>
                          <div className={styles.counterItems}>
                            <h2 className={styles.counterText}>4.9</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className={styles.ratingWhite}>/5.0</p>
                  </div>
                </div>
                <div className={styles.heroBorder}></div>
                <div className={styles.heroInformations}>
                  <div className={styles.avatarGroup}>
                    {heroAvatars.map((src) => (
                      <Image
                        key={src}
                        src={src}
                        width={176}
                        height={176}
                        priority
                        alt="User"
                        className={styles.heroAvatar}
                      />
                    ))}
                  </div>
                  <p className={styles.trustedPara}>Trusted by Leading Surgeons &amp; Hospitals</p>
                </div>
              </div>
            </div>
            <a href="tel:+919845000000" className={styles.heroContactWrapper}>
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
                    MediOrtho Link was founded in the year 2013 in Bangalore by Vinod Kumar &amp; Sunil Kumar. We are Distributors of Orthopaedic Implants &amp; Surgical Goods, certified by the Government of India with ISO &amp; MSME Registration. Operating from a 2,500 square feet facility at Yeshwanthpur, Bangalore, we are dedicated to innovation, manufacturing, and marketing of medical implants with a focus on global quality standards.
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
                        width={978}
                        height={1032}
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

      {/* PROCESS STEPS */}
      <ProcessSteps />

      {/* FOUNDERS & LEADERSHIP */}
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
              <div>
                <Link href="/about" className={shared.primaryButton}>
                  <div className={shared.primaryButtonText}>MORE ABOUT US</div>
                  <div className={shared.primaryButtonBg}></div>
                </Link>
              </div>
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
                  <Link href="/about" className={styles.cardContentWrap}>
                    <p className={styles.expertDesignation}>{person.role}</p>
                    <p className={styles.expertName}>{person.name}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              {[...testimonialsList, ...testimonialsList].map((testi, idx) => (
                <div key={idx} className={styles.testimonialsMarqueeItem}>
                  <div className={styles.topTestimonial}>
                    <Image
                      src={testi.image}
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
                    <p className={styles.testiAuthorDesig}>{testi.desig}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const badgeIcon = "/images/68f06809395a46f2d4696554_Group_3.svg";

const heroAvatars = [
  "/images/695a40b0a853abe31fceebeb_User_Image_Container.webp",
  "/images/695a40d0dfba7ed401bf3714_User_Image_Container_1.webp",
  "/images/695a41099850b96d92d83a1f_User_Image_Container_2.webp",
  "/images/695a411d9d9fc271593183b1_User_Image_Container_3.webp",
];

const coreValues = [
  {
    title: "1. Honesty",
    alt: "Honesty",
    description: "Being honest we build a stronger trust with our customers. High integrity gives clients confidence.",
    icon: "/images/698c8ac434c62ed3717bf9f5_Frame_1.webp",
  },
  {
    title: "2. Sincerity",
    alt: "Sincerity",
    description: "We do things with utmost care, love and non-attachment, prioritizing consumer needs over sales.",
    icon: "/images/698c8cddef506d391c6c44f8_Frame_2.webp",
  },
  {
    title: "3. Excellence",
    alt: "Excellence",
    description: "We strive for betterment at every level, motivating ourselves to become better than yesterday.",
    icon: "/images/698c8d2eb5cb37dc80f8d041_Frame_3.webp",
  },
  {
    title: "Global Quality",
    alt: "Global Quality",
    description: "ISO & MSME registered operations at Yeshwanthpur Bangalore guaranteeing international standards.",
    icon: "/images/698c8d67805fced76ad4b28a_Frame_4.webp",
  },
];

const leadership = [
  {
    name: "Vinod Kumar",
    role: "Co-Founder & Managing Director",
    image: "/images/68f222a1a881f028d1757038_Frame_100.webp",
    width: 320,
    height: 391,
  },
  {
    name: "Sunil Kumar",
    role: "Co-Founder & Operations Director",
    image: "/images/696a7f5a729a13aa3d7cadbd_Frame_100_2.webp",
    width: 960,
    height: 1173,
  },
  {
    name: "Dr. A. R. Sharma",
    role: "Clinical Implant Specialist",
    image: "/images/696a5e89f27fd687fae01719_Frame_100_1.webp",
    width: 1279,
    height: 1564,
  },
  {
    name: "Rajesh V. N.",
    role: "ISO & Quality Lead",
    image: "/images/696a7f5fcdcb2611feabd1a4_Frame_100.webp",
    width: 960,
    height: 1173,
  },
];

const testimonialsList = [
  {
    name: "Dr. Vikram R. Patel",
    desig: "Senior Joint Replacement Surgeon, Fortis Hospital",
    quote: "MediOrtho Link has been our primary distributor for orthopaedic implants for over 7 years. Their commitment to ISO certified global quality and 24/7 emergency delivery is unmatched.",
    image: "/images/698cb68ab2803d1b98558b5d_Profile_Image.webp",
  },
  {
    name: "Dr. Ananya Deshmukh",
    desig: "Chief Spine & Orthopedic Specialist, Sakra World Hospital",
    quote: "Working with Vinod Kumar & Sunil Kumar has been fantastic. Their deep knowledge of surgical implants and rapid fulfillment make them our most trusted healthcare supply partner.",
    image: "/images/698cbe4afcfb7372c6b1172a_Profile_Image_1.webp",
  },
  {
    name: "Dr. Rajeshwar Rao",
    desig: "Director of Orthopedics, Sparsh Hospital Yeshwanthpur",
    quote: "Operating near their 2,500 sq. ft. facility in Yeshwanthpur gives us immense confidence. High-grade implants delivered on short notice during complex trauma procedures.",
    image: "/images/698cbe9a46d0124466286958_Profile_Image_2.webp",
  },
  {
    name: "Mr. S. K. Subramaniam",
    desig: "Supply Chain & Procurement Head, Manipal Hospitals",
    quote: "MediOrtho Link is our favored commercial distribution partner across South India. Their transparency, MSME compliance, and stock reliability are exemplary.",
    image: "/images/698cbedcb2803d1b9857f91b_Profile_Image_3.webp",
  },
  {
    name: "Dr. Meera Nambiar",
    desig: "Consultant Arthroscopy & Trauma Surgeon, Aster CMI",
    quote: "From precision joint implants to customized surgical instruments, MediOrtho Link consistently delivers top-tier reliability. Outstanding service every single time.",
    image: "/images/698cbf45c463849592154d54_Profile_Image_4.webp",
  },
  {
    name: "Mr. Arvind Mehta",
    desig: "Managing Director, Apex Medical Devices Corp",
    quote: "An exemplary partner for international medical device manufacturers looking for robust distribution, ethical compliance, and doctor trust across Karnataka.",
    image: "/images/695a40b0a853abe31fceebeb_User_Image_Container.webp",
  },
];

const offeringsList = [
  {
    title: "Orthopaedic Implants",
    description: "Comprehensive range of joint replacement, trauma plates, and spinal implants engineered for global quality.",
    btnText: "Explore Products",
    btnHref: "/services",
    image: "/images/698c43ed432314ea73136553_Card_Image.webp",
  },
  {
    title: "Surgical Goods & Tools",
    description: "High-precision surgical instruments and operating room supplies for hospitals and specialized clinics.",
    btnText: "Explore Products",
    btnHref: "/services",
    image: "/images/698c81b6e95d89b9e26989dc_Card_Image_1.webp",
  },
  {
    title: "Manufacturer Partnerships",
    description: "Favored commercial partner for reliable & innovative medical device manufacturers across the Indian subcontinent.",
    btnText: "Explore Partnership",
    btnHref: "/services",
    image: "/images/698c81e8ff1f0106581b1d49_Card_Image_2.webp",
  },
  {
    title: "Trauma & Fixation Systems",
    description: "Advanced internal & external fixation systems designed for complex fracture management and rapid recovery.",
    btnText: "Explore Trauma Range",
    btnHref: "/services",
    image: "/images/698c8238c6804b943f934e98_Card_Image_3.webp",
  },
  {
    title: "Spine & Arthroscopy Solutions",
    description: "Specialized endoscopic, arthroscopic, and spinal fixation instruments for minimally invasive surgeries.",
    btnText: "Explore Spine Range",
    btnHref: "/services",
    image: "/images/698c8275ddd097906e5f0ebc_Card_Image_4.webp",
  },
  {
    title: "24/7 OT Supply Logistics",
    description: "Direct-to-OT emergency implant delivery service servicing leading hospitals across Bangalore & Karnataka.",
    btnText: "Request Supply",
    btnHref: "/appointment",
    image: "/images/698c83651ab19382d4fa35d7_Card_Image_5.webp",
  },
];
