import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        {/*{code here}*/}
        <h1>Movies Page</h1>
        {movies.map((movie, i ) => 
        <div>
          Name: {movie.title}
          Time: {movie.time}
          {movie.genres.map( (genre, i) => <li>{genre}</li> )}
        </div>
        )}
    </div>
  );
};

export default Movies;
