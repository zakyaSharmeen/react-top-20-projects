import React, { useState } from "react";
import "./App.css";

const API_KEY = "e84bd96dd35df569e97ae3307c179d9c";

function WeatherApi() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;
    try {
      setError("");
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      console.log(data);

      if (data.cod !== 200) throw new Error(data.message);
      setWeather(data);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <div className="app">
      <h2>🌤️ Weather App</h2>
      <div>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Get Weather</button>
      </div>

      {error && <p className="error"> {error}</p>}

      {weather && (
        <div className="weather-card">
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <p>🌡️ Temp: {weather.main.temp}°C</p>
          <p>🌡️ Feels like: {weather.main.feels_like}°C</p>

          <p>🌥️ Condition: {weather.weather[0].description}</p>
          <p>💨 Wind: {weather.wind.speed} m/s</p>
          <p>👀 visibility: {weather.visibility}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApi;
