const mongoose = require('mongoose');

const favoriteCitySchema = new mongoose.Schema({
  name: { type: String, required: true },

});

module.exports = mongoose.model('FavoriteCity', favoriteCitySchema);

