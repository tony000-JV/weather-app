const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const weatherRoutes = require('./routes/weather');
const favoritesRoutes = require('./routes/favorites');

const app = express();
const PORT = process.env.PORT || 5000; // Use port 5000 as default

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/weather', weatherRoutes);
app.use('/api/favorites', favoritesRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://mamutony0:Tony@cluster0.3abulho.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

