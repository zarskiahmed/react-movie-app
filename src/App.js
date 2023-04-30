import './App.css'; 
import React, { useState, useEffect } from 'react';
import searchIcon from './search.svg'
import MovieCard from './MovieCard';

// This project was to learn how to use State, UseEffect, RESTful Web Service (OMDbAPI), Components, props, and if else statements in React.js

// OMDb API key: 96dcc011 -- see .env file where this is defined

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;

// const movie1 = {
//   "Title": "Batman Returns",
//   "Year": "1992",
//   "imdbID": "tt0103776",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"
// }

const App = () => {
  // set default value of movies to empty array
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

    // State, Hooks, and External API to get data about these movies (OMDb API, a RESTful web service)
          const searchMovies = async (title) => {
            const response = await fetch(`${API_URL}&s=${title}`)
            const data = await response.json();

            // print all titles with the word 'Batman'
            console.log(data.Search);
            // pass data.Search into setMovies - now it contains all the movie data (movies)
            setMovies(data.Search);
          }

          useEffect(() => {
            searchMovies('Superman')
             }, []);
    
return (
        <div className="app">
          <h1>Little Theatre</h1>
          <div className="search">
            {/* Search Bar */}
            <input 
              placeholder="Search for movies" 
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)} />
            {/* Search Icon */}
            <img 
              src={searchIcon} 
              alt="search" 
              onClick={(event) => {searchMovies(searchTerm)}} />
          </div>

          {/* Check movie length is greater than 0. If yes, Movie Card is movies[0], else if empty then 'No movies found' */}
          {
            movies?.length > 0
              ? (
                <div className="container">
                  {/* Map each movie from movies onto the MovieCard we created and pass movie as movie */}
                  {movies.map((movie) => (
                    <MovieCard movie = {movie} />
                  ))}
                </div>
              ) : (
                <div className="empty">
                  <h2>No movies found</h2>
                </div>
              )
          }

        </div>
    
  );
}

export default App;
