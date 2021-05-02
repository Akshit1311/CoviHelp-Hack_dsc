import React, { useState } from "react";

// Styles
import "./Header.css";

//Assets
import Logo from "../../../assets/logo.svg";

//react router
import { useHistory } from "react-router-dom";

const Header = ({ setActiveModal }) => {
  const [isHidden, setIsHidden] = useState(false);

  const history = useHistory();

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
        <div className="header__link" onClick={() => history.push("/search")}>
          Search
        </div>
        <div
          className="header__link"
          onClick={() => setActiveModal("Register")}
        >
          Register
        </div>
        <div
          className="header__link header__link__active"
          onClick={() => setActiveModal("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Header;
