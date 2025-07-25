
import { Link } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";

const ManageItSection = () => {
  return (
    <section className="manage-it-section fix section-padding pt-0">
      <div className="container">
        <div className="manage-it-wrapper">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="manage-it-content">
                <div className="section-title">
                  <span className=" ">How to Manage</span>
                  <h2 className=" " data-aos="fade-up" 
  data-aos-delay="3000">
                    Our Managed IT Services let you Concentrate on What Matters
                  </h2>
                </div>
                <div className="single-tab-items mt-4 mt-md-0">
                  <Tab.Container defaultActiveKey={"project"}>
                    <Nav as={"ul"} className="nav mb-4">
                      <Nav.Item
                        as={"li"}
                        className="nav-item  "
                        data-aos="fade-up" 
  data-aos-delay="3000"
                      >
                        <Nav.Link
                          as={"a"}
                          eventKey={"approach"}
                          href="#approach"
                        >
                          Our Approach
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item  "
                        data-aos="fade-up" 
  data-aos-delay="5000"
                      >
                        <Nav.Link as={"a"} eventKey={"project"} href="#project">
                          Project Goals
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item
                        as={"li"}
                        className="nav-item  "
                        data-aos="fade-up" 
  data-aos-delay="7000"
                      >
                        <Nav.Link
                          as={"a"}
                          eventKey={"advisory"}
                          href="#advisory"
                        >
                          Advisory
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane eventKey="approach" className="tab-pane fade">
                        <div className="tab-content-items">
                          <p className=" " data-aos="fade-up" 
  data-aos-delay="3000">
                            At veroeos accusamus dignissimos ducimus blanditiis
                            volupta delenite atque <br />
                            corrupti quos dolores et quas molestias excepturi
                            sint occaecatie
                          </p>
                          <div className="list-area">
                            <ul className=" " data-aos="fade-up" 
  data-aos-delay="5000">
                              <li>
                                <i className="fas fa-check" />
                                Efficient Sprint Planning
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Standups and Demos
                              </li>
                            </ul>
                            <ul className=" " data-aos="fade-up" 
  data-aos-delay="7000">
                              <li>
                                <i className="fas fa-check" />
                                Iterative Delivery Approach
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Problem-solving
                              </li>
                            </ul>
                          </div>
                          <Link
                            href="about"
                            className="theme-btn  "
                            data-aos="fade-up" 
  data-aos-delay=".9s"
                          >
                            <span>
                              Learn More
                              <i className="fas fa-chevron-right" />
                            </span>
                          </Link>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="project" className="tab-pane fade">
                        <div className="tab-content-items">
                          <p>
                            At veroeos accusamus dignissimos ducimus blanditiis
                            volupta delenite atque <br />
                            corrupti quos dolores et quas molestias excepturi
                            sint occaecatie
                          </p>
                          <div className="list-area">
                            <ul>
                              <li>
                                <i className="fas fa-check" />
                                Efficient Sprint Planning
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Standups and Demos
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <i className="fas fa-check" />
                                Iterative Delivery Approach
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Problem-solving
                              </li>
                            </ul>
                          </div>
                          <Link href="about" className="theme-btn">
                            <span>
                              Learn More
                              <i className="fas fa-chevron-right" />
                            </span>
                          </Link>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="advisory" className="tab-pane fade">
                        <div className="tab-content-items">
                          <p>
                            At veroeos accusamus dignissimos ducimus blanditiis
                            volupta delenite atque <br />
                            corrupti quos dolores et quas molestias excepturi
                            sint occaecatie
                          </p>
                          <div className="list-area">
                            <ul>
                              <li>
                                <i className="fas fa-check" />
                                Efficient Sprint Planning
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Standups and Demos
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <i className="fas fa-check" />
                                Iterative Delivery Approach
                              </li>
                              <li>
                                <i className="fas fa-check" />
                                Problem-solving
                              </li>
                            </ul>
                          </div>
                          <Link href="about" className="theme-btn">
                            <span>
                              Learn More
                              <i className="fas fa-chevron-right" />
                            </span>
                          </Link>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 mt-5 mt-lg-0  "
              data-aos="fade-up" 
  data-aos-delay=".4s"
            >
              <div
                className="manage-image bg-cover"
                style={{
                  backgroundImage: 'url("assets/img/about/about-7.jpg")',
                }}
              >
                <div className="counting-shape">
                  <img src="assets/img/counting.png" alt="shape-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ManageItSection;
