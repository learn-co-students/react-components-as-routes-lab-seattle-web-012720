import React from 'react';
import { actors } from '../data';

const renderMovies = (actor) => {
  return actor.movies.map((movie, index) => {
    return (
      <ul>
        <li key={index}>{movie}</li>
      </ul>
    )
  })
}

const renderActors = () => {
  return (
    actors.map((actor, index) => {
      return (
        <div key={index}>
          <p>{actor.name}</p>
          {renderMovies(actor)}
        </div>
      )
    })
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
