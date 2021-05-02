import React, { useState } from "react";

//Styles
import "./DropBox.css";

const DropBox = ({ title }) => {
  const [isOpen, setIsOpen] = useState(true);

  const [labels, setLabels] = useState([]);

  const labelsData = [
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
    <div className="dropBox">
      <p className="dropBox__header">
        <i
          className={`fas fa-caret-${isOpen ? "up" : "down"}`}
          onClick={() => setIsOpen((prev) => !prev)}
        ></i>
        {title}
      </p>

      {isOpen && (
        <div className="dropBox__content">
          {labelsData.map(({ id, value, color }) => (
            <span
              key={id}
              className={`dropBox__label dropBox__label__${color}`}
            >
              {value}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropBox;
