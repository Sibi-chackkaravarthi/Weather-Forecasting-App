import React from "react";
import "./LeftNav.css";

const LeftNav = ({ onViewToggle, onHomeClick }) => {
  return (
    <>
      <div className="Left-nav">
        <button className="button" onClick={onHomeClick}>
          <img className="icon" src="home (1).png" alt="" />
        </button>
        <button className="button" onClick={() => onViewToggle("weather")}>
          <img className="icon" src="weather.png" alt="" />
        </button>
        <button className="button" onClick={() => onViewToggle("chart")}>
          <img className="icon" src="graph.png" alt="" />
        </button>
      </div>
    </>
  );
};

export default LeftNav;
