import React from "react";

// Styles
import "./Banner.css";

//Components
import TransBtn from "./TransBtn/TransBtn";

//Assets
import Doctor from "../../../assets/doc.svg";
import { useHistory } from "react-router";

const Banner = () => {
  const history = useHistory();

  return (
    <div className="banner">
      <div className="banner__left">
        <h1>Heading 1</h1>
        <p className="banner__desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
          architecto pariatur obcaecati quod est ipsum quasi eum error maiores
        </p>
        <TransBtn text="Get Started" onClick={() => history.push("/search")} />
      </div>
      <div className="banner__right">
        <img src={Doctor} alt="doctor" className="doctor" />
      </div>
    </div>
  );
};

export default Banner;
