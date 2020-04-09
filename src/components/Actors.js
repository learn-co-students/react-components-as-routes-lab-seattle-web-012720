import React from 'react';
import { actors } from '../data';

const renderActors = () => {
  return actors.map(actor => {
    return(
      <div>
        <h2>{actor.name}</h2>
        <ul>
        {actor.movies.map(movie => {
          return <li>{movie}</li>
        })}
      </ul>
      </div>
    )
  })
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
