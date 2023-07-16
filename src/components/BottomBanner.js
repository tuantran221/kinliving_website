import React from "react";
import "../Styles/BottomBanner.css";

import FooterBanner from "../assets/banner/footer_banner.webp";
import Coffe from "../assets/icon/coffe.svg";
const BottomBanner = () => {
  return (
    <div className="bottom-banner">
      <img
        className="bottom-banner-img"
        src={FooterBanner}
        alt="bottom banner"
      />
      <div className="bottom-banner-text">Nedd help from Kinliving</div>

      <button className="bottom_banner_button">
        <img className="bottom-btn-icon" src={Coffe} alt='coffe'/> Book a tour
      </button>
    </div>
  );
};

export default BottomBanner;
