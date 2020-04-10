import React from 'react';
import { actors } from '../data';

function makeActors() {
  return actors.map((actor) => {
    return (
      <div>
        <h2>{actor.name}</h2>
        {actor.movies.map((movie) => <ul>{movie}</ul>)}
      </div>
    )
  })
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {makeActors()}
    </div>
  );
};

export default Actors;

// elt actors = [
//   {
//     name: 'Benedict Cumberbatch',
//     movies: ['Doctor Strange', 'The Imitation Game', 'Black Mass']
//   }]
