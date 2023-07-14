import React from "react";
import logo from "../assets/logo/logo_footer.webp";
import facebook from "../assets/icon/facebook.svg";
import instagram from "../assets/icon/instagram.svg";
import styles from "../Styles/app.module.css";
import copyright from "../assets/icon/copyrights.png";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <div className={styles.footer_color}>
      <div className="footer">
        <div className="footer_left">
          <div className="footer_left_logo">
            <img  src={logo} alt="logo" />
          </div>
          <div className="footer_left_icon">
            <img src={facebook} alt="facebook" />
            <img style={{marginLeft: "1rem"}} src={instagram} alt="instagram" />
          </div>

          <div className="footer_left_copyright">
            <img style={{width: "17px", height: "17px"}} src={copyright} alt="copyright"></img>
            <p style={{marginLeft:'2px'}}>2023 Kinliving</p>
          </div>
        </div>
        <div className="footer_right">
          <div className="footer_right_about">
            <span>Kinliving</span>
            <p>What make us different</p>
            <p>Blog</p>
          </div>
          <div className="footer_right_support">
            <span>Support</span>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Activity Policy</p>
            <p>FAQ</p>
          </div>
          <div className="footer_right_contact">
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
    </div>
  );
};

export default Footer;
