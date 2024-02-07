import React from 'react';
import SearchBar from './components/SearchBar';
import FavoriteCities from './components/FavoriteCities';
import './App.css'

const App = () => {
  const userId = '123';

  return (
    <div>
      <h1 class="headding">Weather App</h1>
      <SearchBar />
      <FavoriteCities userId={userId} />
    </div>
  );
};

export default App;
