import React from 'react';
import { movies } from '../data';

const renderGenres = (movie) => {
  return movie.genres.map((genre, index) => {
    return <li key={index}>{genre}</li>
  })
}

const renderMovies = () => {
  return movies.map((movie, index) => {
    return (
      <div key={index}>
          <p>{movie.title}</p>
          <p>{movie.time}</p>
          <ul>
            {renderGenres(movie)}
          </ul>
      </div>
    )
  })
}

const Movies = () => {
  return (
    <div>
        <h1> Movies Page </h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
