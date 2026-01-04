import React from "react";
import "./week.css";

const getDayOfWeek = (dateStr) => {
  const date = new Date(dateStr);
  const options = { weekday: "short" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

const Week = ({ weatherData }) => {
  if (!weatherData || !weatherData.list) {
    return <p>No weather data available</p>;
  }

  const dailyWeather = {};

  weatherData.list.forEach((forecast) => {
    const date = forecast.dt_txt.split(" ")[0];
    if (!dailyWeather[date]) {
      dailyWeather[date] = forecast;
    }
  });

  const dailyWeatherArray = Object.entries(dailyWeather)
    .sort(([a], [b]) => new Date(a) - new Date(b))
    .map(([_, value]) => value);

  const [day1, day2, day3, day4, day5, day6, day7] = dailyWeatherArray;

  return (
    <div className="week">
      <p>7-DAY FORECAST</p>
      {day1 ? (
        <div className="each-day">
          <div className="day ">{getDayOfWeek(day1.dt_txt.split(" ")[0])}</div>
          <div className="climate">
            <img
              className="weather-image"
              src={`https://openweathermap.org/img/wn/${day1.weather[0].icon}@2x.png`}
              alt={day1.weather[0].description}
            />
            <p>{day1.weather[0].description}</p>
          </div>
          <div className="temperature">
            {(day1.main.temp - 273.15).toFixed(2)}°C
          </div>
        </div>
      ) : (
        <p>No data available for day 1</p>
      )}

      {day2 ? (
        <div className="each-day">
          <div className="day">{getDayOfWeek(day2.dt_txt.split(" ")[0])}</div>
          <div className="climate">
            <img
              className="weather-image"
              src={`https://openweathermap.org/img/wn/${day2.weather[0].icon}@2x.png`}
              alt={day2.weather[0].description}
            />
            <p>{day2.weather[0].description}</p>
          </div>
          <div className="temperature">
            {(day2.main.temp - 273.15).toFixed(2)}°C
          </div>
        </div>
      ) : (
        <p>No data available for day 2</p>
      )}

      {day3 ? (
        <div className="each-day">
          <div className="day">{getDayOfWeek(day3.dt_txt.split(" ")[0])}</div>
          <div className="climate">
            <img
              className="weather-image"
              src={`https://openweathermap.org/img/wn/${day3.weather[0].icon}@2x.png`}
              alt={day3.weather[0].description}
            />
            <p>{day3.weather[0].description}</p>
          </div>
          <div className="temperature">
            {(day3.main.temp - 273.15).toFixed(2)}°C
          </div>
        </div>
      ) : (
        <p>No data available for day 3</p>
      )}

      {day4 ? (
        <div className="each-day">
          <div className="day">{getDayOfWeek(day4.dt_txt.split(" ")[0])}</div>
          <div className="climate">
            <img
              className="weather-image"
              src={`https://openweathermap.org/img/wn/${day4.weather[0].icon}@2x.png`}
              alt={day4.weather[0].description}
            />
            <p>{day4.weather[0].description}</p>
          </div>
          <div className="temperature">
            {(day4.main.temp - 273.15).toFixed(2)}°C
          </div>
        </div>
      ) : (
        <p>No data available for day 4</p>
      )}

      {day5 ? (
        <div className="each-day">
          <div className="day">{getDayOfWeek(day5.dt_txt.split(" ")[0])}</div>
          <div className="climate">
            <img
              className="weather-image"
              src={`https://openweathermap.org/img/wn/${day5.weather[0].icon}@2x.png`}
              alt={day5.weather[0].description}
            />
            <p>{day5.weather[0].description}</p>
          </div>
          <div className="temperature">
            {(day5.main.temp - 273.15).toFixed(2)}°C
          </div>
        </div>
      ) : (
        <p>No data available for day 5</p>
      )}

      {day6 ? (
        <div className="each-day">
          <div className="day">{getDayOfWeek(day6.dt_txt.split(" ")[0])}</div>
          <div className="climate">
            <img
              className="weather-image"
              src={`https://openweathermap.org/img/wn/${day6.weather[0].icon}@2x.png`}
              alt={day6.weather[0].description}
            />
            <p>{day6.weather[0].description}</p>
          </div>
          <div className="temperature">
            {(day6.main.temp - 273.15).toFixed(2)}°C
          </div>
        </div>
      ) : (
        <p>No data available for day 6</p>
      )}

      {day7 ? (
        <div className="each-day">
          <div className="day">{getDayOfWeek(day7.dt_txt.split(" ")[0])}</div>
          <div className="climate">
            <img
              className="weather-image"
              src={`https://openweathermap.org/img/wn/${day7.weather[0].icon}@2x.png`}
              alt={day7.weather[0].description}
            />
            <p>{day7.weather[0].description}</p>
          </div>
          <div className="temperature">
            {(day7.main.temp - 273.15).toFixed(2)}°C
          </div>
        </div>
      ) : (
        <p style={{ color: "yellow" }}>No data available for day 7</p>
      )}
    </div>
  );
};

export default Week;
