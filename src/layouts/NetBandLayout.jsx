
import EmbedPopup from "@/components/popup/EmbedPopup";
import ImageView from "@/components/popup/ImageView";
import AOS from "aos";
import { netBandUtility  } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Mouse from "./Mouse";


import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.css";
import '../assets/css/animate.css';
import "../assets/css/magnific-popup.css";
import "../assets/css/meanmenu.css";
import "../assets/css/slick.css";
import "../assets/css/swiper-bundle.min.css";
import "../assets/css/nice-select.css";
import "../assets/css/main.css";
import "../assets/css/globals.css";




const NetBandLayout = ({
  children,
  header,
  footer,
  bodyBg = "body",
  single,
  menus,
}) => {
  useEffect(() => {
    //initWowJs();
    //netBandUtility.scrollAnimation();    
    netBandUtility.stickyNav();
    AOS.init({ once: true }); // or your preferred options
    document.querySelector("body").className = bodyBg;
  }, []);

  return (
    <Fragment>
      <ImageView />
      <EmbedPopup />
      <Mouse />
      <Header header={header} single={single} menus={menus} />
      {children}
      <Footer footer={footer} />
    </Fragment>
  );
};
export default NetBandLayout;
