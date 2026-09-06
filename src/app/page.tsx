'use client';

import ProcessSteps from "@/components/ProcessSteps";
import FallingPills from "@/components/FallingPills";
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="section home-hero">
        <div className="container">
          <div className="wrapper home-hero">
            <div className="hero-left">
              <h1 data-w-id="8d3a8aa1-47f6-6517-8242-1e6773d095a4" style={{ opacity: 1 }} className="white-text health-title">
                Orthopaedic Implants &amp; Surgical Goods
              </h1>
              <div data-w-id="5ca073e1-19f2-dc72-64da-951a16904e5b" style={{ opacity: 1 }} className="global-buttons">
                <a data-wf--primary-button--variant="base" href="/appointment" className="primary-button w-inline-block">
                  <div className="primary-button-text">REQUEST IMPLANTS</div>
                  <div className="primary-button-bg"></div>
                </a>
                <a href="/services" className="secondary-button w-inline-block">
                  <div className="button-texts">
                    <div className="button-text _01">Our Products</div>
                    <div className="button-text _02">Our Products</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="hero-right">
              <p data-w-id="73dd6006-9880-dbb1-9a10-01b3dcb67bad" style={{ opacity: 1 }} className="large-paragraph white-text">
                Welcome to MediOrtho Link (Est. 2013, Bangalore). Govt. of India Certified (ISO &amp; MSME). Dedicated to innovation, manufacturing &amp; distribution of global-quality medical implants.
              </p>
              <div data-w-id="3c834c93-f0c5-9f40-598c-0c759141ae8e" style={{ opacity: 1 }} className="rating-wrap">
                <div className="hero-ratings">
                  <div className="rating-images">
                    <img src="/images/695a3a46f19056467592c28b_Frame.webp" loading="eager" alt="Rating Star" className="star-icon" />
                    <img src="/images/695a3a46f19056467592c28b_Frame.webp" loading="eager" alt="Rating Star" className="star-icon" />
                    <img src="/images/695a3a46f19056467592c28b_Frame.webp" loading="eager" alt="Rating Star" className="star-icon" />
                    <img src="/images/695a3a46f19056467592c28b_Frame.webp" loading="eager" alt="Rating Star" className="star-icon" />
                    <img src="/images/695a3a46f19056467592c28b_Frame.webp" loading="eager" alt="Rating Star" className="star-icon" />
                  </div>
                  <div className="rating-flex">
                    <div className="client-counters">
                      <div className="empowering-counter-flex">
                        <div className="empowering-counter-wrap">
                          <div style={{ opacity: 1 }} className="empowering-counter-items _01">
                            <h2 className="empowering-counter-text">4.9</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="rating-white">/5.0</p>
                  </div>
                </div>
                <div className="hero-border"></div>
                <div className="hero-informations">
                  <div className="avatar-group">
                    <img src="/images/695a40b0a853abe31fceebeb_User_Image_Container.webp" loading="eager" alt="User" className="hero-avatar" />
                    <img src="/images/695a40d0dfba7ed401bf3714_User_Image_Container_1.webp" loading="eager" alt="User" className="hero-avatar" />
                    <img src="/images/695a41099850b96d92d83a1f_User_Image_Container_2.webp" loading="eager" alt="User" className="hero-avatar" />
                    <img src="/images/695a411d9d9fc271593183b1_User_Image_Container_3.webp" loading="eager" alt="User" className="hero-avatar" />
                  </div>
                  <p className="trusted-para">Trusted by Leading Surgeons &amp; Hospitals</p>
                </div>
              </div>
            </div>
            <a href="tel:+919845000000" className="hero-contact-wrapper w-inline-block">
              <div className="contact-icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 21 18" fill="none" className="contact-icon-svg">
                  <path d="M9.79481 0.796362C9.79013 0.697945 9.80488 0.59957 9.83823 0.506856C9.87158 0.414142 9.92286 0.328908 9.98916 0.256024C10.0555 0.183139 10.1355 0.124032 10.2246 0.0820805C10.3138 0.040129 10.4103 0.016155 10.5087 0.011528C11.9436 -0.0655957 13.3731 0.241162 14.6499 0.900208C15.9268 1.55925 17.0049 2.54676 17.7732 3.76103C17.8265 3.84393 17.8628 3.93651 17.8803 4.03349C17.8977 4.13046 17.8959 4.22992 17.8749 4.32618C17.8539 4.42244 17.8141 4.51363 17.7579 4.59452C17.7016 4.67541 17.63 4.74442 17.547 4.79761C17.4917 4.83272 17.4322 4.86065 17.3699 4.88072C17.2125 4.93098 17.043 4.92791 16.8876 4.87199C16.7322 4.81606 16.5997 4.71041 16.5105 4.57143C15.8836 3.57989 15.0036 2.77348 13.9613 2.23535C12.9189 1.69722 11.7519 1.44683 10.5805 1.51001C10.4821 1.51482 10.3836 1.50016 10.2908 1.46689C10.198 1.43361 10.1127 1.38237 10.0397 1.31609C9.96674 1.2498 9.90755 1.16978 9.86553 1.08061C9.8235 0.991426 9.79947 0.894837 9.79481 0.796362Z" fill="currentColor"></path>
                </svg>
              </div>
              <div className="contact-nuber-wrapper">
                <div className="home-phone">Est. 2013 | Bangalore</div>
                <div className="duty">Govt. ISO &amp; MSME Certified</div>
              </div>
            </a>
          </div>
        </div>
        <img src="/images/698c1a685792bc3a80304aa3_Frame.webp" loading="lazy" alt="Hero Line" className="hero-line" />
      </section>

      {/* ABOUT MEDI ORTHO LINK SECTION */}
      <section className="section discover">
        <img src="/images/695a5bffebea08352d2f46f6_675d6fafc8d538425e0683dd_about-vector_1.webp" loading="eager" alt="Background" className="about-background" />
        <div className="wrapper about-wrapper">
          <div className="container">
            <div className="about-bottom">
              <div className="about-left _02">
                <div className="about-top">
                  <div className="about-flex">
                    <img loading="eager" src="/images/68f06809395a46f2d4696554_Group_3.svg" alt="Icon" className="about-icon" />
                    <p className="small-paragraph about-year">Welcome to MediOrtho Link</p>
                  </div>
                  <h2 className="about-title _02">
                    Discover <span className="primary-color">MediOrtho Link</span>
                  </h2>
                  <p className="about-para">
                    MediOrtho Link was founded in the year 2013 in Bangalore by Vinod Kumar &amp; Sunil Kumar. We are Distributors of Orthopaedic Implants &amp; Surgical Goods, certified by the Government of India with ISO &amp; MSME Registration. Operating from a 2,500 square feet facility at Yeshwanthpur, Bangalore, we are dedicated to innovation, manufacturing, and marketing of medical implants with a focus on global quality standards.
                  </p>
                  <div>
                    <a href="/about" className="primary-button w-inline-block">
                      <div className="primary-button-text">MORE ABOUT US</div>
                      <div className="primary-button-bg"></div>
                    </a>
                  </div>
                </div>
                <div className="about-line"></div>
                <div className="about-grid">
                  <div className="about-content">
                    <p className="medium-paragraph innovative">Global Quality Implants</p>
                    <p className="about-para _01">We market top-grade orthopaedic implants and instruments engineered for precision and durability.</p>
                  </div>
                  <div className="about-content">
                    <p className="medium-paragraph innovative">Surgeon &amp; Clinical Partnerships</p>
                    <p className="about-para _01">We partner with orthopedic surgeons and academicians to transform clinical insights into tangible surgical solutions.</p>
                  </div>
                </div>
                <div className="appointment-card">
                  <div className="appointment-flex">
                    <img src="/images/698c2f523d1538d40003f912_Frame_1000003074.webp" loading="lazy" alt="Founders" className="appointment-image" />
                    <div className="appointment-block">
                      <p className="appointment-author-name">Vinod Kumar &amp; Sunil Kumar</p>
                      <p className="appointment-author-designatiomn">Founders, MediOrtho Link</p>
                    </div>
                  </div>
                  <a href="/contact" className="primary-button appointment w-inline-block">
                    <div className="primary-button-text appointment">Contact Founders</div>
                    <div className="primary-button-bg appointment"></div>
                  </a>
                </div>
              </div>
              <div className="about-right _02">
                <img src="/images/698c244c655aa1ba0a300fa1_Frame_1000003067.webp" loading="lazy" alt="MediOrtho Link Office" className="about-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS & SOLUTIONS MARQUEE */}
      <section className="section solutions">
        <div className="wrapper solutions-wrap">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '20px', color: '#0ea5e9', fontWeight: 600, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
              <img src="/images/68f06809395a46f2d4696554_Group_3.svg" alt="Icon" style={{ width: '16px', height: '16px' }} />
              Our Offerings
            </div>
            <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '16px', whiteSpace: 'nowrap' }}>
              Orthopaedic Implants &amp; <span style={{ color: '#0ea5e9' }}>Surgical Solutions.</span>
            </h2>
            <p style={{ fontSize: '17px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
              Discover our comprehensive range of ISO &amp; MSME certified joint replacements, trauma plates, and specialized surgical tools engineered for healthcare excellence.
            </p>
          </div>
          <div className="solutions-marquee">
            <div className="solutions-marquee-items">
              {[...offeringsList, ...offeringsList].map((item, idx) => (
                <div key={idx} className="solution-marquee-item">
                  <div className="solution-card">
                    <div className="overflow service">
                      <img loading="lazy" src={item.image} alt={item.title} className="solution-image" />
                    </div>
                    <div className="solution-detail">
                      <div className="solution-info">
                        <h3 className="orthopedics">{item.title}</h3>
                        <p className="comprehensive-para">{item.description}</p>
                      </div>
                      <a href={item.btnHref} className="explore-button w-inline-block">
                        <div className="explore-text">{item.btnText}</div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - CORE VALUES SECTION */}
      <section className="section">
        <div className="container">
          <div className="wrapper why-wrapper">
            <div className="why-top">
              <div className="why-flex">
                <div className="about-flex">
                  <img loading="eager" src="/images/68f06809395a46f2d4696554_Group_3.svg" alt="Icon" className="about-icon" />
                  <p className="small-paragraph about-year">Our Core Values</p>
                </div>
                <h2 className="why-title">Built on 3 Principles of Conscious Business</h2>
              </div>
              <p className="why-desp">
                We work on a conscious business model, maximizing value alongside the happiness and success of everyone connected with us.
              </p>
            </div>
            <div className="why-cards">
              <div>
                <div className="why-card">
                  <img loading="lazy" src="/images/698c8ac434c62ed3717bf9f5_Frame_1.webp" alt="Honesty" className="why-icon" />
                  <div className="care-flex">
                    <h3 className="care-text">1. Honesty</h3>
                    <p className="care-desp">Being honest we build a stronger trust with our customers. High integrity gives clients confidence.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="why-card">
                  <img loading="lazy" src="/images/698c8cddef506d391c6c44f8_Frame_2.webp" alt="Sincerity" className="why-icon" />
                  <div className="care-flex">
                    <h3 className="care-text">2. Sincerity</h3>
                    <p className="care-desp">We do things with utmost care, love and non-attachment, prioritizing consumer needs over sales.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="why-card">
                  <img loading="lazy" src="/images/698c8d2eb5cb37dc80f8d041_Frame_3.webp" alt="Excellence" className="why-icon" />
                  <div className="care-flex">
                    <h3 className="care-text">3. Excellence</h3>
                    <p className="care-desp">We strive for betterment at every level, motivating ourselves to become better than yesterday.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="why-card">
                  <img loading="lazy" src="/images/698c8d67805fced76ad4b28a_Frame_4.webp" alt="Global Quality" className="why-icon" />
                  <div className="care-flex">
                    <h3 className="care-text">Global Quality</h3>
                    <p className="care-desp">ISO &amp; MSME registered operations at Yeshwanthpur Bangalore guaranteeing international standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <ProcessSteps />

      {/* FOUNDERS & LEADERSHIP */}
      <section className="section expert-doctors">
        <div className="container">
          <div className="wrapper expert-doctors">
            <div className="expert-top">
              <div className="about-flex">
                <img loading="eager" src="/images/68f06809395a46f2d4696554_Group_3.svg" alt="Icon" className="about-icon" />
                <p className="small-paragraph about-year">Our Leadership</p>
              </div>
              <h2 className="about-title _02">Meet the Founders &amp; Leadership Team</h2>
              <p className="about-para">
                Founded by Vinod Kumar &amp; Sunil Kumar in 2013, MediOrtho Link combines deep technical expertise with commercial knowledge across the Indian subcontinent.
              </p>
              <div>
                <a href="/team" className="primary-button w-inline-block">
                  <div className="primary-button-text">MEET FULL TEAM</div>
                  <div className="primary-button-bg"></div>
                </a>
              </div>
            </div>
            <div className="doctors-lists">
              <div className="expert-card">
                <div className="overflow expert">
                  <img src="/images/68f222a1a881f028d1757038_Frame_100.webp" loading="eager" alt="Vinod Kumar" className="expert-image" />
                </div>
                <a href="/team" className="card-content-wrap w-inline-block">
                  <p className="expert-designation">Co-Founder &amp; Managing Director</p>
                  <p className="expert-name">Vinod Kumar</p>
                </a>
              </div>
              <div className="expert-card">
                <div className="overflow expert">
                  <img src="/images/696a7f5a729a13aa3d7cadbd_Frame_100_2.webp" loading="eager" alt="Sunil Kumar" className="expert-image" />
                </div>
                <a href="/team" className="card-content-wrap w-inline-block">
                  <p className="expert-designation">Co-Founder &amp; Operations Director</p>
                  <p className="expert-name">Sunil Kumar</p>
                </a>
              </div>
              <div className="expert-card">
                <div className="overflow expert">
                  <img src="/images/696a5e89f27fd687fae01719_Frame_100_1.webp" loading="eager" alt="Clinical Specialist" className="expert-image" />
                </div>
                <a href="/team" className="card-content-wrap w-inline-block">
                  <p className="expert-designation">Clinical Implant Specialist</p>
                  <p className="expert-name">Dr. A. R. Sharma</p>
                </a>
              </div>
              <div className="expert-card">
                <div className="overflow expert">
                  <img src="/images/696a7f5fcdcb2611feabd1a4_Frame_100.webp" loading="eager" alt="Quality Lead" className="expert-image" />
                </div>
                <a href="/team" className="card-content-wrap w-inline-block">
                  <p className="expert-designation">ISO &amp; Quality Lead</p>
                  <p className="expert-name">Rajesh V. N.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPECIALITIES / METRICS SECTION */}
      <section className="section specialities">
        <div className="container">
          <div className="wrapper specialities">
            <div className="specialities-top">
              <div className="specialities-reviews-block">
                <img src="/images/698cb0ec8dd97e738a4fcc31_68edc1f42af732005a59daa8_stars-5-1-1_1.webp" loading="lazy" alt="Stars" className="specialities-icons" />
                <p className="total-reviews">Govt. Certified ISO &amp; MSME</p>
              </div>
              <h2 className="specialities-title">MediOrtho Link provides global quality implants for surgical excellence.</h2>
              <p className="specialities-desp">Reliable distributor of Orthopaedic Implants &amp; Surgical Goods in Bangalore since 2013.</p>
            </div>
            <div className="specialities-bottom">
              <div className="specialities-cards">
                <div className="specialities-card">
                  <div className="specialities-content">
                    <p className="medium-paragraph expert-text">2500 Sq. Ft. Facility</p>
                    <div className="empowering-counter-flex specialities">
                      <h2 className="empowering-counter-text specialities">2013</h2>
                      <h2 className="empowering-counter-text specialities"> Est.</h2>
                    </div>
                    <p className="expert-desp">Headquartered at Yeshwanthpur Bangalore with modern warehousing and quality assurance facilities.</p>
                  </div>
                </div>
                <div className="specialities-card _02">
                  <div className="personalized-flex">
                    <div className="empowering-counter-flex specialities-2">
                      <h2 className="empowering-counter-text specialities">100</h2>
                      <h2 className="empowering-counter-text specialities">%</h2>
                    </div>
                    <p className="medium-paragraph personalized-text">Certified Compliance</p>
                  </div>
                  <div className="specialities-small-card-content">
                    <p className="expert-desp _02">Certified by Government of India with ISO &amp; MSME registration for highest healthcare safety.</p>
                  </div>
                </div>
              </div>
              <div className="specialities-cards _02">
                <FallingPills />
                <div
                  className="specialities-card _04"
                  style={{ opacity: 1, backgroundColor: "#0f172a", backgroundImage: "url(/images/695aaebeedaa97ce3112eb11_Frame_122.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
                >
                  <div className="personalized-flex _04">
                    <p className="medium-paragraph expert-text">Subcontinent Distribution</p>
                    <div className="empowering-counter-flex specialities-2">
                      <h2 className="empowering-counter-text specialities">10+</h2>
                      <h2 className="empowering-counter-text specialities"> Yrs</h2>
                    </div>
                  </div>
                  <div className="specialities-small-card-content">
                    <p className="expert-desp _03">Over a decade of trusted supply of orthopaedic implants &amp; surgical goods to leading healthcare providers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPOINTMENT / INQUIRY FORM */}
      <section className="section">
        <div className="container">
          <div className="wrapper book">
            <div className="contact-left">
              <div className="contact-form-block w-form">
                <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" className="contact-form" onSubmit={(e) => e.preventDefault()}>
                  <h2 className="appointment-title">Request Implants &amp; Surgical Goods</h2>
                  <div className="form-fields">
                    <label htmlFor="field" className="input-title">Select Category</label>
                    <select id="field" name="field" required className="select-doctor w-select">
                      <option value="">Choose Product Category</option>
                      <option value="Orthopaedic Implants">Orthopaedic Implants (Joints/Trauma/Spine)</option>
                      <option value="Surgical Goods">Surgical Goods &amp; Instruments</option>
                      <option value="Manufacturer Partnership">Manufacturer Partnership</option>
                      <option value="Surgeon Collaboration">Surgeon / Clinical Collaboration</option>
                    </select>
                  </div>
                  <div className="form-fields">
                    <label htmlFor="Your-Name" className="input-title">Your Name / Healthcare Facility</label>
                    <input className="input-field w-input" maxLength={256} name="Your-Name" placeholder="Dr. / Hospital Name" type="text" id="Your-Name" required />
                  </div>
                  <div className="form-fields">
                    <label htmlFor="Phone-Number" className="input-title">Phone Number</label>
                    <input className="input-field w-input" maxLength={256} name="Phone-Number" placeholder="+91..." type="tel" id="Phone-Number" required />
                  </div>
                  <div className="form-fields">
                    <label htmlFor="Date" className="input-title">Preferred Contact Date</label>
                    <input type="date" className="input-field" />
                  </div>
                  <input type="submit" className="contact-button w-button" value="Submit Inquiry Now" />
                </form>
              </div>
            </div>
            <img className="contact-image" src="/images/696a80deed8fbcbc1b7aa4b1_Frame_141_1.webp" alt="MediOrtho Link Facility" loading="eager" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="wrapper testimonials">
          <div className="testimonials-top">
            <div className="about-flex">
              <img loading="eager" src="/images/68f06809395a46f2d4696554_Group_3.svg" alt="Icon" className="about-icon" />
              <p className="small-paragraph about-year">Clinical Testimonials</p>
            </div>
            <h2 className="complete-text">Trusted by Orthopedic Surgeons &amp; Healthcare Leaders</h2>
          </div>
          <div className="testimonials-marquee">
            <div className="testimonials-marquee-items">
              {[...testimonialsList, ...testimonialsList].map((testi, idx) => (
                <div key={idx} className="testimonials-marquee-item">
                  <div className="top-testimonial">
                    <img loading="lazy" src={testi.image} alt={testi.name} className="testi-icon" />
                    <img loading="lazy" src="/images/698cb6c54e15a0922e59ac51_Frame_95876.webp" alt="Quote" className="testi-icon quote" />
                  </div>
                  <div className="middle-testimonial">
                    <p className="testimonials-desp">"{testi.quote}"</p>
                  </div>
                  <div className="bottom-testimonial">
                    <p className="testi-author-name">{testi.name}</p>
                    <p className="testi-author-desig">{testi.desig}</p>
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



