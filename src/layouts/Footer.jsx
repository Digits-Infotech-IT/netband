import { Link } from "react-router-dom";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;

    default:
      return <Footer2 />;
  }
};
export default Footer;

const Footer1 = () => {
  return (
    <footer className="footer-section footer-bg section-padding pb-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="newsletter-area">
              <div className="shape-1">
                <img src="assets/img/footer-shape.png" alt="shape-img" />
              </div>
              <div className="shape-2">
                <img src="assets/img/footer-shape-2.png" alt="shape-img" />
              </div>
              <div className="newsletter-title">
                <h2 className=" " data-aos="fade-up" 
  data-aos-delay="3000">
                  Join Our Newsletter
                </h2>
                <p className=" " data-aos="fade-up" 
  data-aos-delay="5000">
                  We Provide Best Pricing package to grow your lead capture
                </p>
              </div>
              <div className="newsletter-items">
                <div className="form-clt  " data-aos="fade-up" 
  data-aos-delay="3000">
                  <input
                    type="text"
                    name="email"
                    id="email2"
                    placeholder="Email Address"
                  />
                </div>
                <button
                  className="theme-btn hover-white  "
                  data-aos="fade-up" 
  data-aos-delay="5000"
                  type="submit"
                >
                  <span>
                    Subscribe <i className="fas fa-chevron-right" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-sm-6 col-md-6 col-lg-3  "
              data-aos="fade-up" 
  data-aos-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src="assets/img/logo/footer-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    We believe it has the power to do <br />
                    amazing things.
                  </p>
                  <span>Interested in working with us?</span> <br />
                  <a href="mailto:info@example.com" className="link">
                    info@example.com
                  </a>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 ps-lg-5 col-sm-6 col-md-3 col-lg-3  "
              data-aos="fade-up" 
  data-aos-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Quick Links</h5>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="service-details">Services</Link>
                  </li>
                  <li>
                    <Link href="about">About company</Link>
                  </li>
                  <li>
                    <Link href="news-details">latest news</Link>
                  </li>
                  <li>
                    <Link href="team">team member</Link>
                  </li>
                  <li>
                    <Link href="testimonial">testimonials</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 ps-lg-4 col-sm-6 col-md-3 col-lg-3  "
              data-aos="fade-up" 
  data-aos-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>My account</h5>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="contact">Forum Support</Link>
                  </li>
                  <li>
                    <Link href="faq">Help &amp; FAQ</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing and plans</Link>
                  </li>
                  <li>
                    <Link href="contact">Cookies Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-sm-6 col-md-6 col-lg-3  "
              data-aos="fade-up" 
  data-aos-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Address:</h5>
                </div>
                <div className="footer-address-text">
                  <p>570 8th Ave, Sai Baba Colony, Coimbatore, Tamil Nadu is 641011</p>
                  <h5>Hours:</h5>
                  <p>
                    9.30am – 6.30pm <br />
                    Munday to Sunday
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 ps-xl-5 col-sm-6 col-md-6 col-lg-4  "
              data-aos="fade-up" 
  data-aos-delay=".9s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Install app</h5>
                </div>
                <div className="footer-apps-items">
                  <p>From App Store or Google Play</p>
                  <div className="apps-image d-flex align-items-center">
                    <a href="#">
                      <img src="assets/img/app-store.png" alt="store-img" />
                    </a>
                    <a href="#">
                      <img src="assets/img/google-play.png" alt="store-img" />
                    </a>
                  </div>
                  <div className="support-text">
                    <p>24/7 Support center</p>
                    <h3>
                      <a href="tel:+91 9884098840">+91 9884098840</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft color-2" data-aos="fade-up" 
  data-aos-delay="3000">
              Copyright © 2024 <Link href="/">Digital Soft</Link>. All Rights
              Reserved.
            </p>
            <ul className="footer-menu wow fadeInRight" data-aos="fade-up" 
  data-aos-delay="5000">
              <li>
                <Link href="about">Company</Link>
              </li>
              <li>
                <Link href="contact">Support</Link>
              </li>
              <li>
                <Link href="contact">Privacy</Link>
              </li>
              <li>
                <Link href="faq">Faqs</Link>
              </li>
            </ul>
          </div>
        </div>
        <a href="#" id="scrollUp" className="scroll-icon">
          <i className="far fa-arrow-up" />
        </a>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className="footer-section section-bg-3">
      <div className="container">
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-3 col-sm-6 col-md-6 col-lg-3  "
              data-aos="fade-up" 
  data-aos-delay=".2s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/">
                    <img src="assets/img/logo/footer-logo.svg" alt="logo-img" />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    We believe it has the power to do <br />
                    amazing things.
                  </p>
                  <span>Interested in working with us?</span> <br />
                  <a href="mailto:info@example.com" className="link">
                    info@example.com
                  </a>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-vimeo-v" />
                    </a>
                    <a href="#">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 ps-lg-5 col-sm-6 col-md-3 col-lg-3  "
              data-aos="fade-up" 
  data-aos-delay=".4s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Quick Links</h5>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="service-details">Services</Link>
                  </li>
                  <li>
                    <Link href="about">About company</Link>
                  </li>
                  <li>
                    <Link href="news-details">latest news</Link>
                  </li>
                  <li>
                    <Link href="team">team member</Link>
                  </li>
                  <li>
                    <Link href="testimonial">testimonials</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 ps-lg-4 col-sm-6 col-md-3 col-lg-3  "
              data-aos="fade-up" 
  data-aos-delay=".6s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>My account</h5>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="contact">Forum Support</Link>
                  </li>
                  <li>
                    <Link href="faq">Help &amp; FAQ</Link>
                  </li>
                  <li>
                    <Link href="contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="pricing">Pricing and plans</Link>
                  </li>
                  <li>
                    <Link href="contact">Cookies Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-2 col-sm-6 col-md-6 col-lg-3  "
              data-aos="fade-up" 
  data-aos-delay=".8s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Address:</h5>
                </div>
                <div className="footer-address-text">
                  <p>570 8th Ave, Sai Baba Colony, Coimbatore, Tamil Nadu is 641011</p>
                  <h5>Hours:</h5>
                  <p>
                    9.30am – 6.30pm <br />
                    Munday to Sunday
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 ps-xl-5 col-sm-6 col-md-6 col-lg-4  "
              data-aos="fade-up" 
  data-aos-delay=".9s"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Install app</h5>
                </div>
                <div className="footer-apps-items">
                  <p>From App Store or Google Play</p>
                  <div className="apps-image d-flex align-items-center">
                    <a href="#">
                      <img src="assets/img/app-store.png" alt="store-img" />
                    </a>
                    <a href="#">
                      <img src="assets/img/google-play.png" alt="store-img" />
                    </a>
                  </div>
                  <div className="support-text">
                    <p>24/7 Support center</p>
                    <h3>
                      <a href="tel:+91 9884098840">+91 9884098840</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="wow fadeInLeft color-2" data-aos="fade-up" 
  data-aos-delay="3000">
              Copyright © 2024 <Link href="/">Digital Soft</Link>. All Rights
              Reserved.
            </p>
            <ul className="footer-menu wow fadeInRight" data-aos="fade-up" 
  data-aos-delay="5000">
              <li>
                <Link href="about">Company</Link>
              </li>
              <li>
                <Link href="contact">Support</Link>
              </li>
              <li>
                <Link href="contact">Privacy</Link>
              </li>
              <li>
                <Link href="faq">Faqs</Link>
              </li>
            </ul>
          </div>
        </div>
        <a href="#" id="scrollUp" className="scroll-icon">
          <i className="far fa-arrow-up" />
        </a>
      </div>
    </footer>
  );
};

const Footer3 = () => {
  return (
    <footer className="footer-section section-bg-3">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo  " data-aos="fade-up" 
  data-aos-delay="3000">
            <Link href="/">
              <img src="assets/img/logo/footer-logo-2.svg" alt="img" />
            </Link>
          </div>
          <ul className=" " data-aos="fade-up" 
  data-aos-delay="5000">
            <li>
              <i className="fab fa-facebook-f" />
              <a href="#">Facebook</a>
            </li>
            <li>
              <i className="fab fa-twitter" />
              <a href="#">Twitter</a>
            </li>
            <li>
              <i className="fab fa-linkedin-in" />
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <i className="fab fa-instagram" />
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="footer-widgets-wrapper">
          <div className="row">
            <div
              className="col-xl-6 col-sm-12 col-md-8 col-lg-6  "
              data-aos="fade-up" 
  data-aos-delay="3000"
            >
              <div className="single-footer-widget me-4">
                <div className="widget-head">
                  <h3>Subscribe Newsletter</h3>
                </div>
                <div className="footer-content">
                  <p>
                    We understand that every challenge is an opportunity we are
                    here seize <br />a team of dedicated professionals and a
                    culture
                  </p>
                  <div className="newsletter-items">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="email"
                        id="email2"
                        placeholder="Email Address"
                      />
                    </div>
                    <button className="theme-btn hover-white" type="submit">
                      <span>
                        Sign Up <i className="fas fa-chevron-right" />
                      </span>
                    </button>
                  </div>
                  <h6 className="label-text">
                    By subscribing, you’re accept <a href="#">Privacy Policy</a>
                  </h6>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 ps-lg-5 col-sm-6 col-md-6 col-lg-3  "
              data-aos="fade-up" 
  data-aos-delay="5000"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Services</h5>
                </div>
                <ul className="list-items">
                  <li>
                    <Link href="service-details">Web (UX/UI) Design</Link>
                  </li>
                  <li>
                    <Link href="service-details">
                      Machine Learning &amp; AI
                    </Link>
                  </li>
                  <li>
                    <Link href="service-details">Web Development</Link>
                  </li>
                  <li>
                    <Link href="service-details">IT Cyber Security</Link>
                  </li>
                  <li>
                    <Link href="service-details">Cloud Computing</Link>
                  </li>
                  <li>
                    <Link href="service-details">
                      Analytic &amp; Engineering
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 ps-lg-5 col-sm-6 col-md-6 col-lg-3  "
              data-aos="fade-up" 
  data-aos-delay="7000"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <h5>Locations:</h5>
                </div>
                <div className="footer-address-text">
                  <p>55 Main Street, 2nd block Malborne, Australia</p>
                  <h5>Contact</h5>
                  <a href="mailto:info@example.com" className="link-mail">
                    info@example.com
                  </a>
                  <h5 className="pt-3">
                    <a href="tel:+88012345688">+880 (123) 456 88</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="  color-2" data-aos="fade-up" 
  data-aos-delay=".4s">
              Copyright © 2024 <Link href="/">Digital Soft</Link>. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer4 = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="newsletter-area style-2">
              <div className="newsletter-title">
                <h2 className=" " data-aos="fade-up" 
  data-aos-delay="3000">
                  Subscribe To Our Weekly <br /> Newsletter
                </h2>
                <p className=" " data-aos="fade-up" 
  data-aos-delay="5000">
                  We Provide Best Pricing package to grow your lead capture
                </p>
              </div>
              <div className="newsletter-items">
                <div className="form-clt  " data-aos="fade-up" 
  data-aos-delay="3000">
                  <input
                    type="text"
                    name="email"
                    id="email2"
                    placeholder="Email Address"
                  />
                </div>
                <button
                  className="theme-btn hover-white  "
                  data-aos="fade-up" 
  data-aos-delay="5000"
                  type="submit"
                >
                  <span>
                    Subscribe <i className="fas fa-chevron-right" />
                  </span>
                </button>
              </div>
              <div
                className="social-icon d-flex align-items-center  "
                data-aos="fade-up" 
  data-aos-delay=".6s"
              >
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-vimeo-v" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-4">
          <p className="  text-center" data-aos="fade-up" 
  data-aos-delay="3000">
            Copyright © 2024 <Link href="/">Digital Soft</Link>. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
