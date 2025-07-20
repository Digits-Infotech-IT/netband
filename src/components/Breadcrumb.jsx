import { Link } from "react-router-dom";

const Breadcrumb = ({ pageTitle }) => {
  return (
    <div
      className="breadcrumb-wrapper section-padding bg-cover"
      style={{ backgroundImage: 'url("assets/img/breadcrumb.jpg")' }}
    >
      <div className="container">
        <div className="page-heading">
          <h1 className=" " data-aos="fade-up" 
  data-aos-delay="3000">
            {pageTitle}
          </h1>
          <ul className="breadcrumb-items  " data-aos="fade-up" 
  data-aos-delay="5000">
            <li>
              <Link href="/">Home Page</Link>
            </li>
            <li>
              <i className="fal fa-minus" />
            </li>
            <li>{pageTitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb;
