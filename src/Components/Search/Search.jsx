import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./search.css";
import Current from "../../Components/Current/Current";
import Today from "../../Components/Today/Today";
import Air from "../../Components/Air/Air";
import Chart from "../../Components/Chart/Chart";

const Search = ({ view, onSearch, weatherData, loading, error }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search City"
          value={city}
          className="search-box"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="btn btn-warning mt-3">
          Search
        </button>
      </form>
      {loading && <p style={{ color: "white" }}>Loading...</p>}
      {error && <p style={{ color: "white" }}>{error}</p>}
      {!loading && !error && weatherData && (
        <>
          {view === "chart" ? (
            <Chart forecastData={weatherData} />
          ) : (
            <>
              <Current data={weatherData} />
              <Today data={weatherData} />
              <Air weatherData={weatherData} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
