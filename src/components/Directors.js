import React from 'react';
import { directors } from '../data';

const renderMovie = (director) => {
  return director.movies.map((movie, index) => {
    return (
        <li key={index}>{movie}</li>
    )
  })
}

const renderDirectors = () => {
  return directors.map((director, index) => {
    return (
      <div key={index}>
        <p>{director.name}</p>
        <ul>
        {renderMovie(director)}
        </ul>
      </div>
    )
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
};

export default Directors
