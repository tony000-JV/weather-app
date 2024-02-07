// backend/routes/weather.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
  const { city } = req.query;
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b446cd616e57737886f6594cd239bad`);
    const weatherData = {
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description
    };
    res.json(weatherData);
  } catch (error) {
    res.status(404).json({ message: 'City not found or network error' });
  }
});

module.exports = router;
