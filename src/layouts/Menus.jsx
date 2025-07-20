
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";

const Menus = ({ single, menus }) => {
  const singleMenus = menus
    ? menus
    : [
        { id: 1, to: "about", title: "About" },
        { id: 2, to: "shows", title: "Shows" },
        { id: 3, to: "pricing", title: "Pricing" },
        { id: 4, to: "team", title: "Team" },
        { id: 5, to: "blog", title: "Blog" },
      ];
  return (
    <nav id="mobile-menu" className="d-none d-xl-block">
      {single ? (
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link to="/">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu has-homemenu">
              <li className="border-none">
                <div className="row g-4">
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link to="/" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link to="index-one-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 01</h4>
                    </div>
                  </div>
                  <div className="col-lg-3  homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-2.jpg" alt="img" />
                      <div className="demo-button">
                        <Link to="index-2" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link to="index-two-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 02</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-3.jpg" alt="img" />
                      <div className="demo-button">
                        <Link to="index-3" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link to="index-three-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 03</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-4.jpg" alt="img" />
                      <div className="demo-button">
                        <Link to="index-4" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link to="index-four-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 04</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="has-dropdown active d-xl-none">
            <Link to="team" className="border-none">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link to="/">Home 01</Link>
              </li>
              <li>
                <Link to="index-2">Home 02</Link>
              </li>
              <li>
                <Link to="index-3">Home 03</Link>
              </li>
              <li>
                <Link to="index-4">Home 04</Link>
              </li>
            </ul>
          </li>
          {singleMenus.map((menu) => (
            <li key={menu.id}>
              <a to={`#${menu.to}`}>{menu.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          <li className="has-dropdown active menu-thumb">
            <Link to="/">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            {/* <ul className="submenu has-homemenu">
              <li className="border-none">
                <div className="row g-4">
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb">
                      <img src="assets/img/header/home-1.jpg" alt="img" />
                      <div className="demo-button">
                        <Link to="/" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link to="index-one-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 01</h4>
                    </div>
                  </div>
                  <div className="col-lg-3  homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-2.jpg" alt="img" />
                      <div className="demo-button">
                        <Link to="index-2" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link to="index-two-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 02</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-3.jpg" alt="img" />
                      <div className="demo-button">
                        <Link to="index-3" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link to="index-three-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 03</h4>
                    </div>
                  </div>
                  <div className="col-lg-3 homemenu">
                    <div className="homemenu-thumb mb-15">
                      <img src="assets/img/header/home-4.jpg" alt="img" />
                      <div className="demo-button">
                        <Link to="index-4" className="theme-btn">
                          <span>Multi Page</span>
                        </Link>
                        <Link to="index-four-page" className="theme-btn">
                          <span>One Page</span>
                        </Link>
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">Home 04</h4>
                    </div>
                  </div>
                </div>
              </li>
            </ul> */}
          </li>
          <li className="has-dropdown active d-xl-none">
            <Link to="team" className="border-none">
              Home
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link to="/">Home 01</Link>
              </li>
              <li>
                <Link to="index-2">Home 02</Link>
              </li>
              <li>
                <Link to="index-3">Home 03</Link>
              </li>
              <li>
                <Link to="index-4">Home 04</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="news">
              Services
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link to="service">Wireless</Link>
              </li>
              <li>
                <Link to="service-details">Broad Band Connection</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="news">
              Wireless
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link to="service">For Thirupur</Link>
              </li>
              <li>
                <Link to="service-details">For Palladam</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="news">
              Corporate Solutions
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link to="service">Internet lease line solutions</Link>
              </li>
              <li>
                <Link to="service-details">Bandwidth Peering Solutions</Link>
              </li>
              <li>
                <Link to="service-details">Intrafacility Connectivity</Link>
              </li>
             
            </ul>
          </li>
          {/*
          <li className="has-dropdown">
            <Link to="news">
              Pages
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li className="has-dropdown">
                <Link to="shows-details">
                  Shows
                  <i className="fas fa-angle-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="shows">Shows</Link>
                  </li>
                  <li>
                    <Link to="shows-details">Shows Details</Link>
                  </li>
                </ul>
              </li>
              <li className="has-dropdown">
                <Link to="team">
                  Team
                  <i className="fas fa-angle-down" />
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="team">Team</Link>
                  </li>
                  <li>
                    <Link to="team-details">Team Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="pricing">Pricing</Link>
              </li>
              <li>
                <Link to="faq">Faq's</Link>
              </li>
              <li>
                <Link to="404">404 Page</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="shop-details">
              Shop
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link to="shop">Shop Page</Link>
              </li>
              <li>
                <Link to="shop-cart">Shop Cart</Link>
              </li>
              <li>
                <Link to="shop-details">Shop Details</Link>
              </li>
              <li>
                <Link to="checkout">Checkout</Link>
              </li>
            </ul>
          </li>
           <li>
            <Link to="news">
              Blog
              <i className="fas fa-angle-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link to="news">Blog</Link>
              </li>
              <li>
                <Link to="news-details">Blog Details</Link>
              </li>
            </ul>
          </li> */}
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Menus;

export const MobileMenu = ({ menus, single }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [multiMenu, setMultiMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  const multiMenuSet = (value) =>
      setMultiMenu(multiMenu === value ? "" : value),
    multiMenuActiveLi = (value) =>
      value === multiMenu ? { display: "block" } : { display: "none" };
  const singleMenus = menus
    ? menus
    : [
        { id: 1, to: "about", title: "About" },
        { id: 2, to: "shows", title: "Shows" },
        { id: 3, to: "pricing", title: "Pricing" },
        { id: 4, to: "team", title: "Team" },
        { id: 5, to: "blog", title: "Blog" },
      ];
  return (
    <nav className="mean-nav d-block d-xl-none">
      <ul>
        <li className="has-dropdown active d-lg-none">
          <a
            to="#"
            className="border-none"
            onClick={() => activeMenuSet("home")}
          >
            Home
            <i className="fas fa-angle-down" />
          </a>
          {/* <ul className="submenu" style={activeLi("home")}>
            <li>
              <Link to="/">Home 01</Link>
            </li>
            <li>
              <Link to="index-2">Home 02</Link>
            </li>
            <li>
              <Link to="index-3">Home 03</Link>
            </li>
            <li>
              <Link to="index-4">Home 04</Link>
            </li>
          </ul> */}
          <a
            className="mean-expand"
            to="#"
            onClick={() => activeMenuSet("home")}
          >
            <i className="far fa-plus" />
          </a>
        </li>
        {single ? (
          <Fragment>
            {singleMenus.map((menu) => (
              <li key={menu.id}>
                <a to={`#${menu.to}`} className="border-none">
                  {menu.title}
                </a>
              </li>
            ))}
          </Fragment>
        ) : (
          <Fragment>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <a to="#" onClick={() => activeMenuSet("Services")}>
                Services <i className="fas fa-angle-down" />
              </a>
              <ul className="submenu" style={activeLi("Services")}>
                <li>
                  <Link to="service">Services</Link>
                </li>
                <li>
                  <Link to="service-details">Service Details</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                to="#"
                onClick={() => activeMenuSet("Services")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            {/* <li className="has-dropdown">
              <a to="#" onClick={() => activeMenuSet("Pages")}>
                Pages
                <i className="fas fa-angle-down" />
              </a>
              <ul className="submenu" style={activeLi("Pages")}>
                <li className="has-dropdown">
                  <a to="#" onClick={() => multiMenuSet("Shows")}>
                    Shows
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={multiMenuActiveLi("Shows")}>
                    <li>
                      <Link to="show">Shows</Link>
                    </li>
                    <li>
                      <Link to="shows-details">Shows Details</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    to="#"
                    onClick={() => multiMenuSet("Shows")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li className="has-dropdown">
                  <a to="#" onClick={() => multiMenuSet("Team")}>
                    Team
                    <i className="fas fa-angle-down" />
                  </a>
                  <ul className="submenu" style={multiMenuActiveLi("Team")}>
                    <li>
                      <Link to="team">Team</Link>
                    </li>
                    <li>
                      <Link to="team-details">Team Details</Link>
                    </li>
                  </ul>
                  <a
                    className="mean-expand"
                    to="#"
                    onClick={() => multiMenuSet("Team")}
                  >
                    <i className="far fa-plus" />
                  </a>
                </li>
                <li>
                  <Link to="pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="faq">Faq's</Link>
                </li>
                <li>
                  <Link to="404">404 Page</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                to="#"
                onClick={() => activeMenuSet("Pages")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            <li>
              <a to="#" onClick={() => activeMenuSet("Shop")}>
                Shop
                <i className="fas fa-angle-down" />
              </a>
              <ul className="submenu" style={activeLi("Shop")}>
                <li>
                  <Link to="shop">Shop Page</Link>
                </li>
                <li>
                  <Link to="shop-details">Shop Details</Link>
                </li>
                <li>
                  <Link to="shop-cart">Shop Cart</Link>
                </li>
                <li>
                  <Link to="checkout">Checkout</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                to="#"
                onClick={() => activeMenuSet("Shop")}
              >
                <i className="far fa-plus" />
              </a>
            </li>
            <li>
              <a to="#" onClick={() => activeMenuSet("Blog")}>
                Blog
                <i className="fas fa-angle-down" />
              </a>
              <ul className="submenu" style={activeLi("Blog")}>
                <li>
                  <Link to="news">Blog</Link>
                </li>
                <li>
                  <Link to="news-details">Blog Details</Link>
                </li>
              </ul>
              <a
                className="mean-expand"
                to="#"
                onClick={() => activeMenuSet("Blog")}
              >
                <i className="far fa-plus" />
              </a>
            </li> */}
            <li className="mean-last">
              <Link to="contact">Contact</Link>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  );
};
