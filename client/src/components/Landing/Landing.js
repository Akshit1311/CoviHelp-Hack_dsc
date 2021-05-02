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
import Register from "./Register/Register";

const Landing = () => {
  const [activeModal, setActiveModal] = useState("");

  return (
    <div className="landing">
      <img src={Triangle} alt="triangle" className="triangle" />
      <img src={Circle} alt="circle" className="circle" />
      <img src={Ellipse1} alt="ellipse" className="ellipse ellipse__blue" />
      <img src={Ellipse2} alt="ellipse" className="ellipse ellipse__pink" />
      <img src={Ellipse3} alt="ellipse" className="ellipse ellipse__red" />

      <div className="landing__overlay">
        <Router>
          <Header setActiveModal={setActiveModal} />
          <Route exact path="/" component={Banner} />
          <Route path="/search" component={Search} />
        </Router>
        {/* <Banner /> */}
      </div>

      {activeModal === "Login" && (
        <Modal
          isModal={activeModal === "Login"}
          setIsModal={(bool) => setActiveModal(bool ? "Login" : "")}
        >
          <Login />
        </Modal>
      )}
      {activeModal === "Register" && (
        <Modal
          isModal={activeModal === "Register"}
          setIsModal={(bool) => setActiveModal(bool ? "Register" : "")}
        >
          <Register />
        </Modal>
      )}
    </div>
  );
};

export default Landing;
