import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let handleDirectors = () => {
    return directors.map(director => 
      <div>
        <h2>{director.name}</h2> 
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
        </div>)
    }

  return (
    <div>
      <h1>Directors Page</h1>
      {handleDirectors()}
    </div>
  );
}

export default Directors
