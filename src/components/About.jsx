
import { Nav, Tab } from "react-bootstrap";
import AOS from "aos";

const About = () => {
  return (
    <section className="about-section section-padding" id="about">
      <div className="container">
        <div className="about-wrapper-2">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image-items">
                <div
                  className="about-image-1 bg-cover wow fadeInLeft"
                  data-aos="fade-up" 
  data-aos-delay="3000"
                  style={{
                    backgroundImage: 'url("assets/img/about/about-5.jpg")',
                  }}
                >
                  <div
                    className="about-image-2"
                    data-aos="fade-up" 
  data-aos-delay="5000"
                  >
                    <img src="assets/img/about/about-6.jpg" alt="about-img" />
                  </div>
                </div>
                <div className="circle-shape">
                  <img
                    src="assets/img/about/circle-2.png"
                    alt="img"
                    className="text-circle"
                  />
                  <div className="about-title">
                    <h2>
                      <span className="count">13</span>
                    </h2>
                    <p>Years of Experince</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className="about-content">
                <div className="section-title style-2">
                  <span className=" ">BEST IT SOLUTIONS</span>
                  <h2 className=" " data-aos="fade-up" 
  data-aos-delay="3000">
                    Best Internet <span>Agency</span> For People
                  </h2>
                </div>
                <p className=" mt-4 mt-md-0" data-aos="fade-up" 
  data-aos-delay="5000">
                  Transmds is the world’s driving worldwide coordinations
                  supplier we uphold industry and exchange the worldwide trade
                  of merchandi world’s driving worldwide coordinations supplier
                  — we uphold industry and exchange the
                </p>
                <Tab.Container defaultActiveKey={"integrity"}>
                  <div className="single-tab-items">
                    <Nav as={"ul"} className="nav mb-4">
                      <Nav.Item
                        as={"li"}
                        className="nav-item "
                        data-aos="fade-up" 
  data-aos-delay="3000"
                      >
                        <Nav.Link
                          as={"a"}
                          eventKey={"integrity"}
                          href="#integrity"
                        >
                          integrity
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item"
                        data-aos="fade-up" 
  data-aos-delay="5000"
                      >
                        <Nav.Link
                          as={"a"}
                          eventKey={"obejectives"}
                          href="#obejectives"
                        >
                          obejectives
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item"
                        data-aos="fade-up" 
  data-aos-delay="7000"
                      >
                        <Nav.Link
                          as={"a"}
                          eventKey={"excellence"}
                          href="#excellence"
                        >
                          excellence
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                  <Tab.Content className="tab-content">
                    <Tab.Pane eventKey="integrity" className="tab-pane fade">
                      <div className="about-tabs-area">
                        <div className="about-list-items">
                          <div
                            className="video-image"
                            data-aos="fade-up" 
  data-aos-delay="3000"
                          >
                            <img src="assets/img/about/video.jpg" alt="img" />
                            <div className="video-box">
                              <a
                                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                                className="video-btn ripple video-popup"
                              >
                                <i className="fas fa-play" />
                              </a>
                            </div>
                          </div>
                          <ul className=" " data-aos="fade-up" 
  data-aos-delay=".4s">
                            <li>
                              <i className="far fa-check" />
                              Technology Growth
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Customer Oriented Program
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Dedicated Team member
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Customer Oriented Program
                            </li>
                          </ul>
                        </div>
                        <div className="about-author">
                          <div
                            className="author-image"
                            data-aos="fade-up" 
  data-aos-delay="3000"
                          >
                            <img
                              src="assets/img/about/client-2.png"
                              alt="author-img"
                            />
                            <div className="content">
                              <h6>5m+ Customer</h6>
                            </div>
                          </div>
                          <div
                            className="author-contact"
                            data-aos="fade-up" 
  data-aos-delay="5000"
                          >
                            <div className="icon">
                              <img src="assets/img/contact.png" alt="img" />
                            </div>
                            <div className="content">
                              <p>Phone:</p>
                              <h6>
                                <a href="tel:++23645689622">
                                  +236 (456) 896 22
                                </a>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="obejectives" className="tab-pane fade">
                      <div className="about-tabs-area">
                        <div className="about-list-items">
                          <div className="video-image">
                            <img src="assets/img/about/video.jpg" alt="img" />
                            <div className="video-box">
                              <a
                                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                                className="video-btn ripple video-popup"
                              >
                                <i className="fas fa-play" />
                              </a>
                            </div>
                          </div>
                          <ul>
                            <li>
                              <i className="far fa-check" />
                              Technology Growth
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Customer Oriented Program
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Dedicated Team member
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Customer Oriented Program
                            </li>
                          </ul>
                        </div>
                        <div className="about-author">
                          <div className="author-image">
                            <img
                              src="assets/img/about/client-2.png"
                              alt="author-img"
                            />
                            <div className="content">
                              <h6>5m+ Customer</h6>
                            </div>
                          </div>
                          <div className="author-contact">
                            <div className="icon">
                              <img src="assets/img/contact.png" alt="img" />
                            </div>
                            <div className="content">
                              <p>Phone:</p>
                              <h6>
                                <a href="tel:++23645689622">
                                  +236 (456) 896 22
                                </a>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="excellence" className="tab-pane fade">
                      <div className="about-tabs-area">
                        <div className="about-list-items">
                          <div className="video-image">
                            <img src="assets/img/about/video.jpg" alt="img" />
                            <div className="video-box">
                              <a
                                href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I"
                                className="video-btn ripple video-popup"
                              >
                                <i className="fas fa-play" />
                              </a>
                            </div>
                          </div>
                          <ul>
                            <li>
                              <i className="far fa-check" />
                              Technology Growth
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Customer Oriented Program
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Dedicated Team member
                            </li>
                            <li>
                              <i className="far fa-check" />
                              Customer Oriented Program
                            </li>
                          </ul>
                        </div>
                        <div className="about-author">
                          <div className="author-image">
                            <img
                              src="assets/img/about/client-2.png"
                              alt="author-img"
                            />
                            <div className="content">
                              <h6>5m+ Customer</h6>
                            </div>
                          </div>
                          <div className="author-contact">
                            <div className="icon">
                              <img src="assets/img/contact.png" alt="img" />
                            </div>
                            <div className="content">
                              <p>Phone:</p>
                              <h6>
                                <a href="tel:++23645689622">
                                  +236 (456) 896 22
                                </a>
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
