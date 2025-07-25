import ActorSlider from "@/components/slider/ActorSlider";
import Home4 from "@/components/slider/Home4";
import {
  MovieSlider2,
  MovieSlider3,
  MovieSlider4,
} from "@/components/slider/MovieSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import { Link } from "react-router-dom";
const page = () => {
  const menus = [
    { id: 1, href: "about", title: "About" },
    { id: 2, href: "shows", title: "Shows" },
    { id: 3, href: "pricing", title: "Pricing" },
    { id: 4, href: "actor", title: "Actor" },
  ];
  return (
    <NetBandLayout
      header={4}
      footer={4}
      bodyBg="body-bg-4"
      single
      menus={menus}
    >
      <Home4 />
      {/*<< About Section Start >>*/}
      <section className="about-section fix section-padding pb-0" id="about">
        <div className="container">
          <div className="about-wrapper-3">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6  " data-aos="fade-up" 
  data-aos-delay="3000">
                <div className="about-image">
                  <img src="assets/img/about/show.png" alt="img" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className=" ">about us3</span>
                    <h2
                      className="text-white  "
                      data-aos="fade-up" 
  data-aos-delay="3000"
                    >
                      Best pick for hassle-free streaming experience.
                    </h2>
                  </div>
                  <p
                    className="mt-3 mt-md-0 text-white  "
                    data-aos="fade-up" 
  data-aos-delay="5000"
                  >
                    Transmds is the world’s driving worldwide coordinations
                    supplier we uphold industry and exchange the worldwide trade
                    of merchandi
                  </p>
                  <div className="icon-items  " data-aos="fade-up" 
  data-aos-delay="3000">
                    <div className="icon">
                      <i className="flaticon-digital" />
                    </div>
                    <div className="content">
                      <h4>Access while traveling</h4>
                      <p>
                        Transmds is the world’s driving worldwide coordinations
                        supplier we uphold industry and exchange the worldwide
                      </p>
                    </div>
                  </div>
                  <div className="icon-items  " data-aos="fade-up" 
  data-aos-delay="5000">
                    <div className="icon">
                      <i className="flaticon-tv-box" />
                    </div>
                    <div className="content">
                      <h4>Stream with no interruptions</h4>
                      <p>
                        Transmds is the world’s driving worldwide coordinations
                        supplier we uphold industry and exchange the worldwide
                      </p>
                    </div>
                  </div>
                  <div className="icon-items  " data-aos="fade-up" 
  data-aos-delay="7000">
                    <div className="icon">
                      <i className="flaticon-server" />
                    </div>
                    <div className="content">
                      <h4>Stay secure at all times</h4>
                      <p>
                        Transmds is the world’s driving worldwide coordinations
                        supplier we uphold industry and exchange the worldwide
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Movie Section Start >>*/}
      <MovieSlider2 />
      {/*<< Movie Section Start >>*/}
      <MovieSlider3 />
      {/*<< Cta Shows Section Start >>*/}
      <section className="cta-shows-section fix">
        <div className="container">
          <div
            className="cta-shows-wrapper bg-cover"
            style={{ backgroundImage: 'url("assets/img/banner/cta-show.jpg")' }}
          >
            <div className="cta-shows-content">
              <h2 className=" " data-aos="fade-up" 
  data-aos-delay="3000">
                stories of the dark
              </h2>
              <ul className=" " data-aos="fade-up" 
  data-aos-delay="5000">
                <li>
                  <i className="fas fa-star me-1" />
                  9.2
                </li>
                <li>.</li>
                <li>2024</li>
                <li>.</li>
                <li>
                  2 hour 45 min{" "}
                  <Link href="index-4" className="tag">
                    TV-GO
                  </Link>
                </li>
              </ul>
              <p className=" " data-aos="fade-up" 
  data-aos-delay="7000">
                Transmds is the world’s driving worldwide coordinations supplier
                we uphold <br /> industry and exchange the worldwide.
              </p>
              <div className="button-items">
                <a
                  href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                  className="theme-btn video-popup  "
                  data-aos="fade-up" 
  data-aos-delay="3000"
                >
                  <span>
                    {" "}
                    Watch Now
                    <i className="fal fa-play-circle" />
                  </span>
                </a>
                <a
                  href="#"
                  className="bookmark-btn  "
                  data-aos="fade-up" 
  data-aos-delay="5000"
                >
                  Watch Later <i className="far fa-bookmark" />
                </a>
              </div>
            </div>
            <div className="video-box  " data-aos="fade-up" 
  data-aos-delay=".4s">
              <a
                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                className="video-btn ripple video-popup"
              >
                <i className="fas fa-play" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/*<< Movie Section Start >>*/}
      <MovieSlider4 />
      {/*<< Cta Download Section Start >>*/}
      <section className="cta-download-section section-padding pt-0">
        <div className="container">
          <div className="cta-download-wrapper">
            <div className="content">
              <h2 className="text-white  " data-aos="fade-up" 
  data-aos-delay="3000">
                Download Our App For <br />
                Batter Experience
              </h2>
              <div className="apps-items d-flex align-items-center gap-2 mt-4">
                <img
                  src="assets/img/app-store.png"
                  alt="img"
                  className=" "
                  data-aos="fade-up" 
  data-aos-delay=".4s"
                />
                <img
                  src="assets/img/google-play.png"
                  alt="img"
                  className=" "
                  data-aos="fade-up" 
  data-aos-delay=".6s"
                />
              </div>
            </div>
            <div className="thumb  " data-aos="fade-up" 
  data-aos-delay=".4s">
              <img src="assets/img/tv.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
      {/*<< Top Actor Section Start >>*/}
      <ActorSlider />
      {/*<< Pricing Section Start >>*/}
      <section
        className="pricing-section-4 fix section-padding pt-0 mg-top-8"
        id="pricing"
      >
        <div className="container">
          <div className="section-title text-center">
            <span className=" ">pricing Package</span>
            <h2 className="text-white  " data-aos="fade-up" 
  data-aos-delay="3000">
              Choose the plan that’s right <br /> for you
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay="3000"
            >
              <div className="pricing-box-items">
                <div className="pricing-header">
                  <h3>Premium</h3>
                  <h4>4K + HDR</h4>
                  <div className="icon">
                    <i className="flaticon-smart-tv-4" />
                  </div>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Monthly price <br />
                      USD 9.99
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Video and sound quality <br />
                      Best
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Resolution <br />
                      4K (Ultra HD) + HDR
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Spatial audio (immersive sound) <br />
                      Included
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Supported devices <br />
                      TV, computer, mobile phone, tablet
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Download devices <br />6
                    </span>
                  </li>
                </ul>
                <div className="price-button">
                  <Link href="contact" className="theme-btn w-100 text-center">
                    <span>subscribe now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay="5000"
            >
              <div className="pricing-box-items">
                <div className="pricing-header">
                  <h3>Standard</h3>
                  <h4>1080p</h4>
                  <div className="icon">
                    <i className="flaticon-smart-tv-1" />
                  </div>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Monthly price <br />
                      USD 7.99
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Video and sound quality <br />
                      Best
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Resolution <br />
                      1080p (Full HD)
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Spatial audio (immersive sound) <br />
                      Included
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Supported devices <br />
                      TV, computer, mobile phone, tablet
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Download devices <br />6
                    </span>
                  </li>
                </ul>
                <div className="price-button">
                  <Link href="contact" className="theme-btn w-100 text-center">
                    <span>subscribe now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6  "
              data-aos="fade-up" 
  data-aos-delay="7000"
            >
              <div className="pricing-box-items">
                <div className="pricing-header">
                  <h3>Basic</h3>
                  <h4>720p</h4>
                  <div className="icon">
                    <i className="flaticon-smart-tv-2" />
                  </div>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Monthly price <br />
                      USD 3.99
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Video and sound quality <br />
                      Best
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Resolution <br />
                      720p (HD)
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Spatial audio (immersive sound) <br />
                      Included
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Supported devices <br />
                      TV, computer, mobile phone, tablet
                    </span>
                  </li>
                  <li>
                    <i className="fal fa-check-circle" />
                    <span className="price">
                      Download devices <br />6
                    </span>
                  </li>
                </ul>
                <div className="price-button">
                  <Link href="contact" className="theme-btn w-100 text-center">
                    <span>subscribe now</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
