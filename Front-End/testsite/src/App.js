import './App.css';

import { useState, useEffect } from 'react';



// dc933e46

const API_URL = 'http://www.omdbapi.com?apikey=dc933e46'

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
  
    console.log(data);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  
  }, []);

  return (
    <h1>App test</h1>
  );
}

export default App;
