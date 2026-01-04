import axios from "axios";

const API_KEY = "1fac0666a053f92c3dcb1729208e00c9";

export const getWeatherDataByCity = async (cityName) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}`
    );
    console.log("API connected successfully");
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
