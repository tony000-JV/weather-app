// backend/routes/favorites.js
const express = require('express');
const router = express.Router();
const FavoriteCity = require('../models/FavoriteCity');

// Route to add a favorite city
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const favoriteCity = new FavoriteCity({ name });
    await favoriteCity.save();
    res.status(201).json({ message: 'Favorite city added successfully' });
  } catch (error) {
    console.error('Failed to add favorite city:', error);
    res.status(500).json({ error: 'Failed to save city to favorites' });
  }
});

// Route to get all favorite cities
router.get('/', async (req, res) => {
  try {
    const favoriteCities = await FavoriteCity.find();
    res.json(favoriteCities);
  } catch (error) {
    console.error('Failed to fetch favorite cities:', error);
    res.status(500).json({ error: 'Failed to fetch favorite cities' });
  }
});

module.exports = router;
