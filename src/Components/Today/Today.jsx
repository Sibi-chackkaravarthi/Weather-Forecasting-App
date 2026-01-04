import React from "react";
import "./Today.css";

const Today = ({ data }) => {
  function getWeatherForSpecificTimes(data) {
    const desiredTimes = [
      "06:00:00",
      "09:00:00",
      "12:00:00",
      "15:00:00",
      "18:00:00",
      "21:00:00",
    ];
    return data.list.filter((forecast) => {
      const time = forecast.dt_txt.split(" ")[1];
      return desiredTimes.includes(time);
    });
  }

  const filteredWeather = getWeatherForSpecificTimes(data);
  const sixAmWeather = filteredWeather[0];
  const nineAmWeather = filteredWeather[1];
  const twelvePmWeather = filteredWeather[2];
  const threePmWeather = filteredWeather[3];
  const sixPmWeather = filteredWeather[4];
  const ninePmWeather = filteredWeather[5];
  console.log(filteredWeather);

  return (
    <div className="today">
      <div className="each-time">
        <div className="time">6:00 AM</div>
        <div className="today-climate">
          <img
            className="weather-image"
            src={`https://openweathermap.org/img/wn/${sixAmWeather.weather[0].icon}@4x.png`}
            alt={sixAmWeather.weather[0].description}
          />
          <p className="sunny">{sixAmWeather.weather[0].description}</p>
        </div>
        <div className="today-temperature">
          {(sixAmWeather.main.temp - 273.15).toFixed(2)}
          <sup>o</sup>
        </div>
      </div>

      <div className="each-time">
        <div className="time">9:00 AM</div>
        <div className="today-climate">
          <img
            className="weather-image"
            src={`https://openweathermap.org/img/wn/${nineAmWeather.weather[0].icon}@2x.png`}
            alt={nineAmWeather.weather[0].description}
          />
          <p className="sunny">{nineAmWeather.weather[0].description}</p>
        </div>
        <div className="today-temperature">
          {(nineAmWeather.main.temp - 273.15).toFixed(2)} <sup>o</sup>
        </div>
      </div>
      <div className="each-time">
        <div className="time">12:00 PM</div>
        <div className="today-climate">
          <img
            className="weather-image"
            src={`https://openweathermap.org/img/wn/${twelvePmWeather.weather[0].icon}@2x.png`}
            alt={twelvePmWeather.weather[0].description}
          />
          <p className="sunny"> {twelvePmWeather.weather[0].description}</p>
        </div>
        <div className="today-temperature">
          {(twelvePmWeather.main.temp - 273.15).toFixed(2)}
          <sup>o</sup>
        </div>
      </div>
      <div className="each-time">
        <div className="time">3:00 PM</div>
        <div className="today-climate">
          <img
            className="weather-image"
            src={`https://openweathermap.org/img/wn/${threePmWeather.weather[0].icon}@2x.png`}
            alt={threePmWeather.weather[0].description}
          />
          <p className="sunny">{threePmWeather.weather[0].description}</p>
        </div>
        <div className="today-temperature">
          {(threePmWeather.main.temp - 273.15).toFixed(2)} <sup>o</sup>
        </div>
      </div>
      <div className="each-time">
        <div className="time">6:00 PM</div>
        <div className="today-climate">
          <img
            className="weather-image"
            src={`https://openweathermap.org/img/wn/${sixPmWeather.weather[0].icon}@2x.png`}
            alt={sixPmWeather.weather[0].description}
          />
          <p className="sunny">{sixPmWeather.weather[0].description}</p>
        </div>
        <div className="today-temperature">
          {(sixPmWeather.main.temp - 273.15).toFixed(2)}
          <sup>o</sup>
        </div>
      </div>
      <div className="each-time last">
        <div className="time">9:00 PM</div>
        <div className="today-climate">
          <img
            className="weather-image"
            src={`https://openweathermap.org/img/wn/${ninePmWeather.weather[0].icon}@2x.png`}
            alt={ninePmWeather.weather[0].description}
          />
          <p className="sunny">{ninePmWeather.weather[0].description}</p>
        </div>
        <div className="today-temperature">
          {(ninePmWeather.main.temp - 273.15).toFixed(2)}
          <sup>o</sup>
        </div>
      </div>
    </div>
  );
};

export default Today;
