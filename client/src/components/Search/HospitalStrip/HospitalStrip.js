import React from "react";

// Styles
import "./HospitalStrip.css";

const HospitalStrip = ({ name, hospital }) => {
  const { icuWithVents, icuWithoutVents, withOx, withoutOx } = hospital.beds;

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

  const calcColor = (val) => {
    return tags.find((tag) => tag.value === val)?.color;
  };

  return (
    <div className="hospitalStrip">
      <div className="hospitalStrip__row">
        <div className="hospitalStrip__left">
          <h3>{hospital.name}</h3>
          <div className="hospitalStrip__tags">
            {hospital.tags.map((value, i) => (
              <span
                key={i}
                className={`dropBox__label dropBox__label__${calcColor(value)}`}
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
            <span className="dropBox__label dropBox__label__dark">
              {icuWithVents?.remaining}
            </span>
            /{icuWithVents?.max}
          </div>
          <div className="hospitalStrip__stat">
            <span className="dropBox__label dropBox__label__dark">
              {icuWithoutVents?.remaining}
            </span>
            /{icuWithoutVents?.max}
          </div>
          <div className="hospitalStrip__stat">
            <span className="dropBox__label dropBox__label__dark">
              {withOx?.remaining}
            </span>
            /{withOx?.max}
          </div>
          <div className="hospitalStrip__stat">
            <span className="dropBox__label dropBox__label__dark">
              {withoutOx?.remaining}
            </span>
            /{withoutOx?.max}
          </div>
        </div>
      </div>
      <div className="hospitalStrip__row">
        <div className="hospitalStrip__info">
          <p>
            <i className="fas fa-clock"></i>
            {hospital.updatedAt}
          </p>
          <p>
            <i className="fas fa-phone"></i>
            {hospital.updatedAt}
          </p>
          <p>
            <i className="fas fa-address-book"></i>Last updated 26 minutes ago
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            {hospital.user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HospitalStrip;
