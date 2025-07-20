import NiceSelect from "./NiceSelect";

const ContactBox = () => {
  return (
    <div className="contact-box">
      <div className="contact-title">
        <h3 className=" " data-aos="fade-up" 
  data-aos-delay="3000">
          Need Help For Project!
        </h3>
        <p className=" " data-aos="fade-up" 
  data-aos-delay="5000">
          We are ready to help your next projects, let’s work together
        </p>
      </div>
      <div className="contact-form-items">
        <form action="#" id="contact-form" method="POST">
          <div className="row g-3">
            <div className="col-lg-6  " data-aos="fade-up" 
  data-aos-delay="3000">
              <div className="form-clt">
                <input type="text" name="name" id="name" placeholder="Name" />
                <div className="icon">
                  <i className="far fa-user" />
                </div>
              </div>
            </div>
            <div className="col-lg-6  " data-aos="fade-up" 
  data-aos-delay="5000">
              <div className="form-clt">
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <div className="icon">
                  <i className="far fa-envelope" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-12   position-relative z-3"
              data-aos="fade-up" 
  data-aos-delay="3000"
            >
              <div className="form-clt">
                <NiceSelect
                  items={[
                    { id: 1, value: "Default sorting" },
                    { id: 2, value: "Sort by popularity" },
                    { id: 3, value: "Sort by average rating" },
                    { id: 4, value: "Sort by latest" },
                  ]}
                  customClass=""
                />
              </div>
            </div>
            <div className="col-lg-12  " data-aos="fade-up" 
  data-aos-delay="5000">
              <div className="form-clt">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your Message"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="col-lg-12  " data-aos="fade-up" 
  data-aos-delay=".4s">
              <button type="submit" className="theme-btn theme-btn-2">
                <span>
                  Send Us Messages
                  <i className="fas fa-chevron-right" />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactBox;
