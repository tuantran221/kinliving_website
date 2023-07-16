import React, { useState } from "react";
import "../Styles/Header.css";
import logo from "../assets/logo/logo.svg";
import menuIcon from "../assets/icon/bar.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="header">
      <div className="header-logo">
        <a href="https://mvillage.vn/en">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={`header-nav ${showMenu ? "show-menu" : ""}`}>
        <span className="header-span-1">Signature by M Village</span>
        <span className="header-span-2">What makes us different</span>
      </div>

      <button className="btn-header">Book now</button>

      <div className={`mobile-menu ${showMenu ? "show-menu" : ""}`}>
        <img
          src={menuIcon}
          alt="menu"
          className="menu-icon"
          onClick={toggleMenu}
        />
        {showMenu && (
          <div className="menu-items">
            <span className="header-span-1">Signature by M Village</span>
            <span className="header-span-2">What makes us different</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
