import React, { useState } from "react";

// Styles
import "./Header.css";

//Assets
import Logo from "../../../assets/logo.svg";

const Header = ({ setIsLoginModal }) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="header">
      <div className="header__logo">
        <img src={Logo} alt="logo" />
      </div>

      {isHidden && (
        <i className="fas fa-bars" onClick={() => setIsHidden(false)}></i>
      )}

      <div className={`header__links ${isHidden ? "header__hidden" : ""}`}>
        <i className="fas fa-times" onClick={() => setIsHidden(true)}></i>
        <div className="header__link">Login</div>
        <div className="header__link">Register</div>
        <div
          className="header__link header__link__active"
          onClick={() => setIsLoginModal(true)}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Header;
