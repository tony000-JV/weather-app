// src/components/FavoriteCities.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FavoriteCities = ({ userId }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(`/api/favorites?userId=${userId}`);
        setFavorites(response.data);
      } catch (error) {
        console.error('Failed to fetch favorite cities:', error);
      }
    };
    fetchFavorites();
  }, [userId]);

  const deleteFavorite = async (id) => {
    try {
      await axios.delete(`/api/favorites/${id}`);
      setFavorites(favorites.filter(favorite => favorite._id !== id));
    } catch (error) {
      console.error('Failed to delete favorite city:', error);
    }
  };

  return (
    <div>
      <h2>Favorite Cities</h2>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite._id}>
            {favorite.city}
            <button onClick={() => deleteFavorite(favorite._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteCities;
