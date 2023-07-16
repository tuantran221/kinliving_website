import React from "react";
import logo from "../assets/logo/logo_footer.webp";
import facebook from "../assets/icon/facebook.svg";
import instagram from "../assets/icon/instagram.svg";

import copyright from "../assets/icon/copyrights.png";
import "../Styles/Footer.css";
const Footer = () => {
  return (
 
      <div className="footer-wrapper">
        <div className="footer-left">
          <div className="footer-left-logo">
            <img  src={logo} alt="logo" />
          </div>
          <div className="footer-left-icon">
            <img src={facebook} alt="facebook" />
            <img style={{marginLeft: "1rem"}} src={instagram} alt="instagram" />
          </div>

          <div className="footer-left-copyright">
            <img style={{width: "17px", height: "17px"}} src={copyright} alt="copyright"></img>
            <p style={{marginLeft:'2px'}}>2023 Kinliving</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-about">
            <span>Kinliving</span>
            <p>What make us different</p>
            <p>Blog</p>
          </div>
          <div className="footer-right-support">
            <span>Support</span>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Activity Policy</p>
            <p>FAQ</p>
          </div>
          <div className="footer-right-contact">
            <span>Contact us</span>
            <p>infor@Kinliving.vn</p>
            <p>0876 738 272</p>
            <p>Kinliving</p>
            <p>Business code: 0315625252</p>
            <p>
              Pearl Plaza Building, 561A Dien Bien Phu, <br></br> Ward 25, Binh
              Thanh District, HCMC
            </p>
          </div>
        </div>
      </div>

  );
};

export default Footer;
