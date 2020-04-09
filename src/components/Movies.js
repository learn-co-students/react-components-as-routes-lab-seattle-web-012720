import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => <div>title: {movie.title} time: {movie.time} Genres: <ul>{movie.genres.map(genre => <li>{genre}</li>)}</ul></div>)}
    </div>
  );
};

export default Movies;
