import React from "react";
import "../Styles/Bottom_banner.css";
import FooterBanner from "../assets/banner/footer_banner.webp";
const Bottom_banner = () => {
  return (
    <div className="bottom_banner">
      <img
        className="bottom_banner_img"
        src={FooterBanner}
        alt="bottom banner"
      />
      <div className="nottom_banner_text">Nedd help from Kinliving</div>
    </div>
  );
};

export default Bottom_banner;
