import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>

  {movies.map((movies)=><div>{movies.title}{movies.time}<ul>{movies.genres}</ul></div>)/*{code here}*/}
    </div>
  );
};

export default Movies;
