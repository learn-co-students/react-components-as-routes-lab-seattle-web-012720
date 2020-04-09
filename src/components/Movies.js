import React from 'react';
import { movies } from '../data';

const Movies = () => {
  
  let handleMovies = () => {
  return movies.map(movie => 
    <div>
      <h2>{movie.title}</h2>
      {movie.time} 
      <ul>
        {movie.genres.map(genre => <li>{genre}</li>)}
      </ul>
      </div>)
  }
  return (
    <div>
      <h1>Movies Page</h1>
        {handleMovies()}
    </div>
  );
};

export default Movies;
