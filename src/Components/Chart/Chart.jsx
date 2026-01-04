import React, { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import "./chart.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Chart = ({ forecastData }) => {
  const [chartType, setChartType] = useState("bar");

  const hours = [6, 9, 12, 15, 18, 21];
  const labels = hours.map((hour) => `${hour}:00`);

  const hourlyData = forecastData.list.filter((item) => {
    const hour = new Date(item.dt_txt).getHours();
    return hours.includes(hour);
  });

  const temperatures = hourlyData.map((item) =>
    (item.main.temp - 273.15).toFixed(2)
  );
  const rainChances = hourlyData.map((item) => (item.pop * 100).toFixed(2));
  const windSpeeds = hourlyData.map((item) => item.wind.speed.toFixed(2));

  const barData = {
    labels: labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatures,
        backgroundColor: "rgb(231, 15, 15)",
        borderColor: "rgb(231, 15, 15)",
        borderWidth: 1,
      },
      {
        label: "Chance of Rain (%)",
        data: rainChances,
        backgroundColor: "rgb(15, 29, 231)",
        borderColor: "rgb(15, 29, 231)",
        borderWidth: 1,
      },
      {
        label: "Wind Speed (m/s)",
        data: windSpeeds,
        backgroundColor: "rgb(0, 0, 0)",
        borderColor: "rgb(0, 0, 0)",
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: labels,
    datasets: [
      {
        label: "Weather Data",
        data: temperatures,
        backgroundColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Weather Data Chart",
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}°C`;
          },
        },
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
      },
    },
  };

  return (
    <div>
      <h2 className="chart-title">Weather Forecast Charts</h2>

      <div>
        <button className="btn btn-primary" onClick={() => setChartType("bar")}>
          Bar Chart
        </button>
        <button
          className="btn btn-primary m-1"
          onClick={() => setChartType("pie")}
        >
          Pie Chart
        </button>
      </div>

      <div>
        {chartType === "bar" ? (
          <div>
            <h3 className="chart-name">Bar Chart</h3>
            <Bar className="chart" data={barData} options={chartOptions} />
          </div>
        ) : (
          <div>
            <h3 className="chart-name">Pie Chart</h3>
            <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
              <Pie
                className="chart"
                data={pieData}
                options={{
                  ...chartOptions,
                  maintainAspectRatio: false,
                  plugins: {
                    ...chartOptions.plugins,
                    legend: {
                      position: "right",
                    },
                  },
                }}
                style={{ width: "100%", height: "400px" }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chart;
