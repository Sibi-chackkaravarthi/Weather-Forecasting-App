import React from "react";
import "./Air.css";

const Air = ({ weatherData }) => {
  const currentWeather = weatherData.list[0];

  const realFeel = currentWeather.main.feels_like
    ? (currentWeather.main.feels_like - 273.15).toFixed(2)
    : "N/A";
  const chanceOfRain = currentWeather.pop
    ? (currentWeather.pop * 100).toFixed(0)
    : "N/A";
  const windSpeed = currentWeather.wind.speed;
  const uvIndex = currentWeather.main.uvi || "N/A";

  return (
    <div className="air">
      <div className="air-conditions">
        <p>Air Conditions's</p>
      </div>
      <div className="air-conditions-detail">
        <div className="detail-1">
          <div>
            <p>Real Feel</p>
            <h3>{realFeel}°C</h3>
          </div>
          <div>
            <p>Chance of Rain</p>
            <h3>{chanceOfRain}%</h3>
          </div>
        </div>
        <div className="detail-2">
          <div>
            <p>Wind Speed</p>
            <h3>{windSpeed} m/s</h3>
          </div>
          <div>
            <p>UV Index</p>
            <h3>{uvIndex}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Air;
