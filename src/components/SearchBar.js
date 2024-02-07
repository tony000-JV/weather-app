import React, { useState } from 'react';
import axios from 'axios';
import './Searchbar.css';

const baseURL = 'http://localhost:5000';

const SearchBar = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const searchWeather = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/weather?city=${city}`);
      setWeatherData(response.data);
      setError(null);
    } catch (error) {
      setError('City not found or network error');
      setWeatherData(null);
    }
  };

  const saveFavoriteCity = async () => {
    try {
      await axios.post(`${baseURL}/api/favorites`, { city });
      alert('City saved to favorites!');
    } catch (error) {
      alert('Failed to save city to favorites');
    }
  };

  const getWeatherImage = (condition) => {
    switch (condition) {
      case 'clear':
        return 'https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-22-512.png';
      case 'cloudy':
        return 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-512.png';
      case 'rain':
        return 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_17-512.png';
      case 'snow':
        return 'https://cdn0.iconfinder.com/data/icons/weather-line-19/32/Light_Snow-512.png';
      default:
        return 'https://cdn4.iconfinder.com/data/icons/weatherful/72/Sunny-512.png';
    }
  };
  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
      </div>
      <div className="buttons-container">
        <button onClick={searchWeather}>Search</button>
        <button onClick={saveFavoriteCity}>Save to Favorites</button>
      </div>
      {error && <p>{error}</p>}
      {weatherData && (
        <div className="weather-container">
          <h2>{weatherData.city}</h2>
          <img
            src={getWeatherImage(weatherData.condition)}
            alt={weatherData.condition}
          />
          <p>Temperature: {weatherData.temperature}</p>
          <p>Description: {weatherData.description}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;