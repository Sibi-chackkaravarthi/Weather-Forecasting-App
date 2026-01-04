import React from "react";
import "./current.css";

const Current = ({ data }) => {
  console.log(data);
  const currentTemperatures = data.list[0];
  const temperatureKelvin = currentTemperatures.main.temp;
  const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(2);
  const icon = currentTemperatures.weather[0].icon;
  const weatherIconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  return (
    <div className="current-data">
      <div className="details">
        <div className="city">
          <h1>{data.city.name}</h1>
        </div>
        <div className="degree">
          <h1>
            {temperatureCelsius}
            <sup>o</sup>
          </h1>
        </div>
      </div>
      <div className="image">
        <img src={weatherIconUrl} alt="" />
      </div>
    </div>
  );
};

export default Current;
