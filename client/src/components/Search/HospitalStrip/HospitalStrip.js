import React from "react";

// Styles
import "./HospitalStrip.css";

const HospitalStrip = ({ name }) => {
  const tags = [
    {
      id: 0,
      value: "Few Left",
      color: "warning",
    },
    {
      id: 1,
      value: "Available",
      color: "success",
    },
    {
      id: 2,
      value: "Private",
      color: "primary",
    },
    {
      id: 3,
      value: "Government",
      color: "primary",
    },
  ];

  return (
    <div className="hospitalStrip">
      <div className="hospitalStrip__row">
        <div className="hospitalStrip__left">
          <h3>{name}</h3>
          <div className="hospitalStrip__tags">
            {tags.map(({ id, color, value }) => (
              <span
                key={id}
                className={`dropBox__label dropBox__label__${color}`}
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="hospitalStrip__stats">
          <div className="hospitalStrip__stat">Without Oxygen</div>
          <div className="hospitalStrip__stat">With Oxygen</div>
          <div className="hospitalStrip__stat">ICU Without Ventilator</div>
          <div className="hospitalStrip__stat">ICU With Ventilator</div>
          <div className="hospitalStrip__stat">
            <span className="dropBox__label dropBox__label__dark">7</span>/10
          </div>
          <div className="hospitalStrip__stat">
            <span className="dropBox__label dropBox__label__dark">7</span>/10
          </div>
          <div className="hospitalStrip__stat">
            <span className="dropBox__label dropBox__label__dark">7</span>/10
          </div>
          <div className="hospitalStrip__stat">
            <span className="dropBox__label dropBox__label__dark">7</span>/10
          </div>
        </div>
      </div>
      <div className="hospitalStrip__row">
        <div className="hospitalStrip__info">
          <p>
            <i className="fas fa-clock"></i>Last updated 26 minutes ago
          </p>
          <p>
            <i className="fas fa-phone"></i>Last updated 26 minutes ago
          </p>
          <p>
            <i className="fas fa-address-book"></i>Last updated 26 minutes ago
          </p>
          <p>
            <i className="fas fa-clock"></i>Last updated 26 minutes ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default HospitalStrip;
