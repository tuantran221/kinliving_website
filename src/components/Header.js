import React from "react";
import "../Styles/Header.css";
import styles from "../Styles/app.module.css";
import logo from "../assets/logo/logo.svg";


const Header = () => {
  return (
    <div className="header">
      <a href="https://mvillage.vn/en" className="header_logo">
        <img src={logo} alt="logo" />
      </a>
      <div className="header_nav">
          <span className="header_span_1">Signature by M Village</span>
          <span className="header_span_2">What make us different</span>
      </div>
      <button className={styles.btn_header}>Book now</button>
    </div>
  );
};

export default Header;
