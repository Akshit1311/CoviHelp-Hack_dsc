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
    },
    {
      id: 1,
      value: "Available",
    },
    {
      id: 2,
      value: "Private",
    },
    {
      id: 3,
      value: "Government",
    },
  ];

  const handleLabelChange = (label) => {
    if (!labels.includes(label)) setLabels((prev) => [...prev, label]);
    else setLabels((prev) => prev.filter((val) => val !== label));
  };

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
          {labelsData.map(({ id, value }) => (
            <span
              key={id}
              className={`dropBox__label dropBox__label__${
                labels.includes(value) ? "active" : "outlined"
              }`}
              onClick={() => handleLabelChange(value)}
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
