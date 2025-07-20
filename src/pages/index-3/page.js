import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Package1 from "@/components/Package";
import ProgressBar from "@/components/ProgressBar";
import { BrandSlider2 } from "@/components/slider/BrandSlider";
import Home3 from "@/components/slider/Home3";
import { TestimonialSlider3 } from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import { Link } from "react-router-dom";
const page = () => {
  return (
    <NetBandLayout header={3} footer={3}>
      <Home3 />
      {/*<< Service Section Start >>*/}
      <section className="service-section section-bg-4 fix section-padding">
        <div className="container">
          <div className="title-section-area">
            <div className="section-title style-2">
              <span className=" ">Our Services Area</span>
              <h2 className=" " data-aos="fade-up" 
  data-aos-delay="3000">
                Best Digital Broadband <br />
                Service For People
              </h2>
            </div>
            <p className=" " data-aos="fade-up" 
  data-aos-delay="5000">
              Transmds is the world’s driving worldwide coordinations supplier{" "}
              <br /> uphold industry and exchange the worldwide trade of
              merchandi <br />
              do eiusmod tempor incididunt ut labore et simply free text dolore
            </p>
          </div>
          <div className="service-wrapper-3">
            <div
              className="service-box-items style-2  "
              data-aos="fade-up" 
  data-aos-delay="3000"
            >
              <div className="icon">
                <i className="flaticon-wifi-router-2" />
              </div>
              <div className="content">
                <h6>
                  <Link href="service-details">
                    Fiber Line &amp; Broadband Line
                  </Link>
                </h6>
              </div>
            </div>
            <div
              className="service-box-items style-2 active  "
              data-aos="fade-up" 
  data-aos-delay="5000"
            >
              <div className="icon">
                <i className="flaticon-connection" />
              </div>
              <div className="content">
                <h6>
                  <Link href="service-details">Family Internet Phone pack</Link>
                </h6>
              </div>
            </div>
            <div
              className="service-box-items style-2  "
              data-aos="fade-up" 
  data-aos-delay="7000"
            >
              <div className="icon">
                <i className="flaticon-smart-tv-1" />
              </div>
              <div className="content">
                <h6>
                  <Link href="service-details">Business Smart Television</Link>
                </h6>
              </div>
            </div>
            <div
              className="service-box-items style-2  "
              data-aos="fade-up" 
  data-aos-delay=".8s"
            >
              <div className="icon">
                <i className="flaticon-server" />
              </div>
              <div className="content">
                <h6>
                  <Link href="service-details">
                    Internet &amp; Cyber Security
                  </Link>
                </h6>
              </div>
            </div>
            <div
              className="service-box-items style-2  "
              data-aos="fade-up" 
  data-aos-delay=".9s"
            >
              <div className="icon">
                <i className="flaticon-computer-networks" />
              </div>
              <div className="content">
                <h6>
                  <Link href="service-details">
                    best Smart Broadband &amp; network
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div
            className="service-text-area text-center mt-5  "
            data-aos="fade-up" 
  data-aos-delay=".4s"
          >
            <h5>
              Bring them together and you overcome the ordinary.
              <Link href="service" className="link-btn link-btn-2">
                <span>View More Service</span>
                <i className="fal fa-plus" />
              </Link>
            </h5>
          </div>
        </div>
      </section>
      {/*<< About Section Start >>*/}
      <About />
      {/*<< feature Icon Section Start >>*/}
      <section className="feature-icon-area section-padding pt-0">
        <div className="container custom-container-2">
          <div className="feature-icon-wrapper">
            <div className="icon-items  " data-aos="fade-up" 
  data-aos-delay=".2s">
              <div className="icon">
                <i className="flaticon-speedometer" />
              </div>
              <h4>Ultra-speed Connection</h4>
            </div>
            <div className="icon-items  " data-aos="fade-up" 
  data-aos-delay=".4s">
              <div className="icon">
                <i className="flaticon-television" />
              </div>
              <h4>250+ World Channels</h4>
            </div>
            <div className="icon-items  " data-aos="fade-up" 
  data-aos-delay=".6s">
              <div className="icon">
                <i className="flaticon-wifi-router-1" />
              </div>
              <h4>Free Installation</h4>
            </div>
            <div className="icon-items  " data-aos="fade-up" 
  data-aos-delay="7000">
              <div className="icon">
                <i className="flaticon-smart-tv-4" />
              </div>
              <h4>4K UHD Quality</h4>
            </div>
            <div className="icon-items  " data-aos="fade-up" 
  data-aos-delay=".8s">
              <div className="icon">
                <i className="flaticon-money-banking" />
              </div>
              <h4>Flexible Tariff Plans</h4>
            </div>
            <div className="icon-items  " data-aos="fade-up" 
  data-aos-delay=".9s">
              <div className="icon">
                <i className="flaticon-customer-support" />
              </div>
              <h4>Fast Support 24/7</h4>
            </div>
          </div>
        </div>
      </section>
      {/*<< Choose Package Section Start >>*/}
      <Package1 />
      {/*<< Cta Subscribe Section Start >>*/}
      <section className="cta-subscribe-section fix section-padding">
        <div className="container">
          <div className="cta-subscribe-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-7  " data-aos="fade-up" 
  data-aos-delay="3000">
                <div className="cta-subscribe-image">
                  <img src="assets/img/banner/cta-tv.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-5 mt-5 mt-md-0">
                <div className="cta-subscribe-content style-2">
                  <div className="section-title">
                    <span className=" ">Subscribe Now</span>
                    <h2 className=" " data-aos="fade-up" 
  data-aos-delay="3000">
                      Enjoy Sports Movies, <br />
                      TV Shows &amp; More.
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0  " data-aos="fade-up" 
  data-aos-delay="5000">
                    Transmds is the world’s driving worldwide coordinations
                    supplier — we uphold industry and exchange the worldwide
                    trade of merchandi
                  </p>
                  <div className="subscribe-price">
                    <h3 className="price  " data-aos="fade-up" 
  data-aos-delay="3000">
                      <sub>$</sub>90 <span>/ 1 month</span>
                    </h3>
                    <h4 className=" " data-aos="fade-up" 
  data-aos-delay="5000">
                      Subscribed &amp; get 1month WIFi Free
                    </h4>
                  </div>
                  <Link
                    href="about"
                    className="theme-btn theme-btn-2  "
                    data-aos="fade-up" 
  data-aos-delay="7000"
                  >
                    <span>
                      Cheak availibilty <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Counter Section Start >>*/}
      <section className="counter-section-2">
        <div className="container">
          <div className="counter-wrapper-2">
            <div className="counter-items  " data-aos="fade-up" 
  data-aos-delay="3000">
              <div className="content">
                <h2>
                  <span className="count">50</span>k+
                </h2>
                <p>Project Complete</p>
              </div>
            </div>
            <div className="counter-items  " data-aos="fade-up" 
  data-aos-delay="5000">
              <div className="content">
                <h2>
                  <span className="count">5</span>k+
                </h2>
                <p>Project Complete</p>
              </div>
            </div>
            <div className="counter-items  " data-aos="fade-up" 
  data-aos-delay="7000">
              <div className="content">
                <h2>
                  <span className="count">3</span>k+
                </h2>
                <p>Satisficed Clients</p>
              </div>
            </div>
            <div className="counter-items  " data-aos="fade-up" 
  data-aos-delay=".9s">
              <div className="content">
                <h2>
                  <span className="count">85</span>+
                </h2>
                <p>Awards Winning</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Grow Section Start >>*/}
      <section className="grow-section section-padding section-bg-3">
        <div className="container">
          <div className="grow-wrapper">
            <div className="title-section-area">
              <div className="section-title style-2">
                <span className="text-white  ">
                  Business strategy we need
                </span>
                <h2 className="text-white  " data-aos="fade-up" 
  data-aos-delay="3000">
                  GROW COMMUNITY &amp; EXPERIENCE <br />
                  ENDLESS POSSIBILITIES
                </h2>
              </div>
              <Link
                href="about"
                className="theme-btn theme-btn-2 hover-white  "
                data-aos="fade-up" 
  data-aos-delay="5000"
              >
                <span>
                  Discover More
                  <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
            <div className="circle-progress-bar-wrapper">
              <div
                className="single-circle-bar  "
                data-aos="fade-up" 
  data-aos-delay="3000"
              >
                <ProgressBar value={89} />
                <div className="content">
                  <h6>Business Strategy</h6>
                  <p>
                    End to end fiber optic cable <br />
                    nnectivity for stable
                  </p>
                </div>
              </div>
              <div
                className="single-circle-bar  "
                data-aos="fade-up" 
  data-aos-delay="5000"
              >
                <ProgressBar value={77} />
                <div className="content">
                  <h6>Gaurateed Uptime</h6>
                  <p>
                    End to end fiber optic cable <br />
                    nnectivity for stable
                  </p>
                </div>
              </div>
              <div
                className="single-circle-bar  "
                data-aos="fade-up" 
  data-aos-delay="7000"
              >
                <ProgressBar value={85} />
                <div className="content">
                  <h6>Proactive Monitoring</h6>
                  <p>
                    End to end fiber optic cable <br />
                    nnectivity for stable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section-3 fix section-padding pt-0">
        <div className="container-fluid">
          <TestimonialSlider3 />
        </div>
      </section>
      {/*<< Team Section Start >>*/}
      <section className="team-section section-padding pt-0 section-bg-3">
        <div className="dot-shape-2">
          <img src="assets/img/team/dot-shape-2.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title style-2 text-center">
            <span className=" ">IT Support Help</span>
            <h2 className="text-white  " data-aos="fade-up" 
  data-aos-delay="3000">
              We’ve Exclusive real <br />
              Team member
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay="3000"
            >
              <div className="team-card-items">
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Tommie J. Saruman</Link>
                  </h4>
                  <p>Senior Consultant</p>
                </div>
                <div className="team-image">
                  <img src="assets/img/team/07.jpg" alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay="5000"
            >
              <div className="team-card-items active">
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Jackson Saruman</Link>
                  </h4>
                  <p>Senior Development</p>
                </div>
                <div className="team-image">
                  <img src="assets/img/team/08.jpg" alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay="7000"
            >
              <div className="team-card-items">
                <div className="team-content">
                  <h4>
                    <Link href="team-details">Wesley Colton</Link>
                  </h4>
                  <p>Senior Developer</p>
                </div>
                <div className="team-image">
                  <img src="assets/img/team/09.jpg" alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay=".9s"
            >
              <div className="team-card-items">
                <div className="team-content">
                  <h4>
                    <Link href="team-details">David Suarez</Link>
                  </h4>
                  <p>Team Leader</p>
                </div>
                <div className="team-image">
                  <img src="assets/img/team/10.jpg" alt="team-img" />
                  <div className="social-profile">
                    <span className="plus-btn">
                      <i className="fas fa-share-alt" />
                    </span>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="team-button text-center mt-5  "
            data-aos="fade-up" 
  data-aos-delay=".4s"
          >
            <Link href="team" className="theme-btn theme-btn-2 hover-white">
              <span>
                Explore more team
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/*<< Feature Video Section Start >>*/}
      <section
        className="feature-video-section fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/video_bg.jpg")' }}
      >
        <div className="container">
          <div className="feature-video-wrapper">
            <div className="row">
              <div className="col-lg-6" />
              <div className="col-lg-6">
                <div className="feature-video-content">
                  <div className="section-title mb-0">
                    <h2 className=" " data-aos="fade-up" 
  data-aos-delay="3000">
                      Experience The Features Magic of Netfix
                    </h2>
                  </div>
                  <p className="mt-4  " data-aos="fade-up" 
  data-aos-delay="5000">
                    Good Time is very good in what they're doing and more than
                    happy to challenge and push you to think about your
                    decisions both from usability and design standpoints.
                  </p>
                  <div className="counter-area">
                    <div
                      className="counter-items  "
                      data-aos="fade-up" 
  data-aos-delay="3000"
                    >
                      <h4>
                        <span className="count">4</span>k
                      </h4>
                      <p>Ultra HD Quality</p>
                    </div>
                    <div
                      className="counter-items  "
                      data-aos="fade-up" 
  data-aos-delay="5000"
                    >
                      <h4>
                        <span className="count">90</span>+
                      </h4>
                      <p>Online TV Channels</p>
                    </div>
                    <div
                      className="counter-items  "
                      data-aos="fade-up" 
  data-aos-delay="7000"
                    >
                      <h4>
                        <span className="count">350</span>+
                      </h4>
                      <p>Mbps Speed Internet</p>
                    </div>
                  </div>
                  <Link
                    href="pricing"
                    className="theme-btn theme-btn-2  "
                    data-aos="fade-up" 
  data-aos-delay="3000"
                  >
                    <span>
                      Try Us Free <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Pricing Section Start >>*/}
      <section className="pricing-section-3 fix section-padding">
        <div className="container">
          <div className="section-title style-2 text-center">
            <span className=" ">pricing plan</span>
            <h2 className=" " data-aos="fade-up" 
  data-aos-delay="3000">
              Your Perfect Plans
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay="3000"
            >
              <div className="pricing-card-items-2">
                <ul className="pricing-icon">
                  <li className="icon">
                    <i className="flaticon-wi-fi" />
                  </li>
                </ul>
                <div className="pricing-header">
                  <h5>Internet</h5>
                  <h2>
                    <sub>$</sub>39.99 <span>/mo</span>
                  </h2>
                  <p>
                    For 12 mos when bundled, <br /> + taxes &amp; equip fee
                  </p>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="far fa-check" />
                    Internet with a 1000 Mbps
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Connect multiple users at once
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Virus scanning &amp; prevention
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Internet with a 1000 Mbps
                  </li>
                </ul>
                <Link href="contact" className="theme-btn theme-btn-2">
                  <span>Choose Plan</span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay="5000"
            >
              <div className="pricing-card-items-2 active">
                <ul className="pricing-icon">
                  <li className="icon">
                    <i className="flaticon-television-1" />
                  </li>
                </ul>
                <div className="pricing-header">
                  <h5>TV Box</h5>
                  <h2>
                    <sub>$</sub>49.99 <span>/mo</span>
                  </h2>
                  <p>
                    For 12 mos when bundled, <br /> + taxes &amp; equip fee
                  </p>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="far fa-check" />
                    Internet with a 1000 Mbps
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Connect multiple users at once
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Virus scanning &amp; prevention
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Internet with a 1000 Mbps
                  </li>
                </ul>
                <Link href="contact" className="theme-btn theme-btn-2">
                  <span>Choose Plan</span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay="7000"
            >
              <div className="pricing-card-items-2">
                <ul className="pricing-icon">
                  <li className="icon">
                    <i className="flaticon-wi-fi" />
                  </li>
                  <li className="icon">
                    <i className="flaticon-television-1" />
                  </li>
                </ul>
                <div className="pricing-header">
                  <h5>Internet + TV Box</h5>
                  <h2>
                    <sub>$</sub>99.99 <span>/mo</span>
                  </h2>
                  <p>
                    For 12 mos when bundled, <br /> + taxes &amp; equip fee
                  </p>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="far fa-check" />
                    Internet with a 1000 Mbps
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Connect multiple users at once
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Virus scanning &amp; prevention
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Internet with a 1000 Mbps
                  </li>
                </ul>
                <Link href="contact" className="theme-btn theme-btn-2">
                  <span>Choose Plan</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Product Section Start >>*/}
      <section className="product-section fix section-padding section-bg-2">
        <div className="container">
          <div className="title-section-area">
            <div className="section-title">
              <span className=" ">Top Sales</span>
              <h2 className=" " data-aos="fade-up" 
  data-aos-delay="3000">
                Our Top Products
              </h2>
            </div>
            <Link
              href="shop"
              className="theme-btn  "
              data-aos="fade-up" 
  data-aos-delay="5000"
            >
              <span>
                More Products <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay=".2s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/product/01.jpg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Archer Router <br /> for Home
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay=".4s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/product/02.jpg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Smart TV Box <br /> for Home
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay=".6s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/product/03.jpg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Virtual Reality <br /> Helmet
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay=".8s"
            >
              <div className="product-card-items">
                <div className="product-image">
                  <img src="assets/img/product/04.jpg" alt="img" />
                  <div className="product-badge">
                    <span className="product-badge-item">sale</span>
                  </div>
                  <ul className="product-icon d-grid justify-content-center align-items-center">
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-heart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-cart">
                        <i className="far fa-shopping-cart" />
                      </Link>
                    </li>
                    <li>
                      <Link href="shop-details">
                        <i className="far fa-eye" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product-content">
                  <h6>
                    <Link href="shop-details">
                      Camera Gear 360 <br /> for Home
                    </Link>
                  </h6>
                  <div className="ratting">
                    <span>$210</span>
                    <div className="star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< News Section Start >>*/}
      <section className="news-section section-padding fix">
        <div className="container">
          <div className="title-section-area">
            <div className="section-title style-2">
              <span className=" ">IT Support Help</span>
              <h2 className=" " data-aos="fade-up" 
  data-aos-delay="3000">
                Upcoming News &amp; <span>Blog</span>
              </h2>
            </div>
            <Link
              href="news-details"
              className="theme-btn theme-btn-2  "
              data-aos="fade-up" 
  data-aos-delay="5000"
            >
              <span>
                Explore Our news
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay="3000"
            >
              <div className="single-news-items-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/06.jpg")' }}
                >
                  <div className="post-date">
                    <h4>
                      25 <br />
                      <span>Dec</span>
                    </h4>
                  </div>
                </div>
                <div className="news-content">
                  <p>Product Design</p>
                  <h4>
                    <Link href="news-details">
                      Connecting at Scale for Resilience <br /> &amp;
                      Inspiration
                    </Link>
                  </h4>
                  <Link href="news-details" className="link-btn link-btn-2">
                    <span>read more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay="5000"
            >
              <div className="single-news-items-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/07.jpg")' }}
                >
                  <div className="post-date">
                    <h4>
                      28 <br />
                      <span>Dec</span>
                    </h4>
                  </div>
                </div>
                <div className="news-content">
                  <p>Product Design</p>
                  <h4>
                    <Link href="news-details">
                      Kid-friendly Video Chat Apps To <br /> Keep Them Save
                    </Link>
                  </h4>
                  <Link href="news-details" className="link-btn link-btn-2">
                    <span>read more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay="7000"
            >
              <div className="single-news-items-2">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/news/08.jpg")' }}
                >
                  <div className="post-date">
                    <h4>
                      30 <br />
                      <span>Dec</span>
                    </h4>
                  </div>
                </div>
                <div className="news-content">
                  <p>Product Design</p>
                  <h4>
                    <Link href="news-details">
                      The effects of weather on Internet have concern since
                    </Link>
                  </h4>
                  <Link href="news-details" className="link-btn link-btn-2">
                    <span>read more</span>
                    <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Contact Section Start >>*/}
      <ContactSection />
      {/*<< Brand Section Start >>*/}
      <div className="brand-section-5 section-padding">
        <div className="container">
          <h5 className="text-center pb-5">Trusted by the world’s best</h5>
          <BrandSlider2 />
        </div>
      </div>
    </NetBandLayout>
  );
};
export default page;
