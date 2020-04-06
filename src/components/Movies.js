import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => {
          return (
          <div key={movie.name}>
            <h4>{movie.title}</h4>
            <h5>{movie.time} minutes</h5>
            <ul>{movie.genres.map(genre => {
              return <li>{genre}</li>
            })}</ul>
          </div>)
        })}
    </div>
  );
};

export default Movies;
