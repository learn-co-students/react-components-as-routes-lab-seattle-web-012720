import React from 'react';
import { directors } from '../data';

const renderDirectors = () =>{
  return directors.map(director=>{
    return(
    <div>
      <h3>{director.name}</h3>
      <ul>
        {renderMovies(director.movies)}
      </ul>
    </div>)
  });
};

const renderMovies = (moviesArray) =>{
  return moviesArray.map(movie =>{
    return(<li>{movie}</li>)
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
