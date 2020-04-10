import React from 'react';
import { directors } from '../data';

function makeFilms(films) {
  return films.map((film) => {
    return <ul>{film}</ul>
  })
}

function makeDirectors() {
  return directors.map((director) => {
    return (
      <div>
        <h2>{director.name}</h2>
        {makeFilms(director.movies)}
      </div>
    )
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {makeDirectors()}
    </div>
  );
}

export default Directors

// et directors = [
//   {
//     name: 'Scott Derrickson',
//     movies: ['Doctor Strange', 'Sinister', 'The Exorcism of Emily Rose']
//   },