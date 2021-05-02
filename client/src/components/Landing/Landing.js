import React, { useState } from "react";

// Styles
import "./Landing.css";

//Assets
import Triangle from "../../assets/triangle.svg";
import Circle from "../../assets/circle.svg";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Ellipse1 from "../../assets/ellipse/ellipse1.svg";
import Ellipse2 from "../../assets/ellipse/ellipse2.svg";
import Ellipse3 from "../../assets/ellipse/ellipse3.svg";
import Modal from "../Modal/Modal";
import Login from "./Login/Login";
import Search from "../Search/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Landing = () => {
  const [isLoginModal, setIsLoginModal] = useState(false);

  return (
    <div className="landing">
      <img src={Triangle} alt="triangle" className="triangle" />
      <img src={Circle} alt="circle" className="circle" />
      <img src={Ellipse1} alt="ellipse" className="ellipse ellipse__blue" />
      <img src={Ellipse2} alt="ellipse" className="ellipse ellipse__pink" />
      <img src={Ellipse3} alt="ellipse" className="ellipse ellipse__red" />

      <div className="landing__overlay">
        <Router>
          <Header setIsLoginModal={setIsLoginModal} />
          <Route exact path="/" component={Banner} />
          <Route path="/search" component={Search} />
        </Router>
        {/* <Banner /> */}
      </div>

      {isLoginModal && (
        <Modal isLoginModal={isLoginModal} setIsLoginModal={setIsLoginModal}>
          <Login />
        </Modal>
      )}
    </div>
  );
};

export default Landing;
