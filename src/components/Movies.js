import React from 'react';
import { movies } from '../data';

function makeGenres(genres) {
  console.log(genres)
  return genres.map((genre) => {
    return <ul>{genre}</ul>
  })
}

function makeMovies() {
  console.log(movies)
  return (movies.map((movie, index) => {
    return (
      <div key={index}>
        <h2>{movie.title}</h2>
        <h3>{movie.time}</h3>
        {makeGenres(movie.genres)}
      </div>
    )
  }))
}

const Movies = () => {
  
  return (
    <div>
        <h1>Movies Page</h1>
        {makeMovies()}
    </div>
  );
};

export default Movies;