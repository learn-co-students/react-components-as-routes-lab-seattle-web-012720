import React from 'react';
import { movies } from '../data';


const renderGenres = (genreArray) =>{
  return genreArray.map(genre => {
    return(<li>{genre}</li>)
  });
};

const renderMovies = () => {
  return movies.map( (movie, index) => {
    return(<div key={`movie-${index}`}>
      <h3>{movie.title}</h3>
      <h4>{movie.time}</h4>
      <ul>
        {renderGenres(movie.genres)}
      </ul>
    </div>)
  });
};

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
