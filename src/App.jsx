import React, { useState } from "react";
import { getWeatherDataByCity } from "./api";
import LeftNav from "./Components/LeftNav/LeftNav";
import "./App.css";
import Week from "./Components/ForeCast/Week";
import Home from "./Components/HomePage/Home";
import Search from "./Components/Search/Search";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [view, setView] = useState("weather");
  const [isHome, setIsHome] = useState(true);

  const handleGetStarted = () => {
    setIsHome(false);
  };

  const handleHomeClick = () => {
    setIsHome(true);
  };

  const handleViewToggle = (viewType) => {
    setView(viewType);
  };

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWeatherDataByCity(cityName);
      setWeatherData(data);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (city) => {
    fetchWeather(city);
  };
  return (
    <div className="app">
      {isHome ? (
        <Home onGetStarted={handleGetStarted} />
      ) : (
        <>
          <LeftNav
            onViewToggle={handleViewToggle}
            onHomeClick={handleHomeClick}
          />
          <Search
            onSearch={handleSearch}
            weatherData={weatherData}
            loading={loading}
            error={error}
            view={view}
          />
          {!loading && !error && weatherData && (
            <Week weatherData={weatherData} loading={loading} error={error} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
