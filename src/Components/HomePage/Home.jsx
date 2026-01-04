import React from "react";
import "./Home.css";

const Home = ({ onGetStarted }) => {
  return (
    <div className="wrapper">
      <form>
        <h1 className="title">SkySync</h1>
        <p>
          Know the weather before you step outside. Get real-time updates,
          detailed forecasts, and weather alerts for any city in the world.
          Whether you're planning your commute or a weekend getaway, stay one
          step ahead with precise, reliable information. Ready to explore the
          weather?
        </p>
        <button type="button" className="btn-get" onClick={onGetStarted}>
          Get Started
        </button>
        <div className="register-link">
          <p>
            Know more on forecast?{" "}
            <a target="_blank" href="https://mausam.imd.gov.in/">
              Take me
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Home;
