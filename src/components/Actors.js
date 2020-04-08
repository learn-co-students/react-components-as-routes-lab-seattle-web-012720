import React from 'react';
import { actors } from '../data';

const renderActors = () =>{
  return actors.map(actor=>{
    return(<div>
      {actor.name}
      <ul>
        {renderMovies(actor.movies)}
      </ul>
    </div>)
  })
};

const renderMovies = (moviesArray) =>{
  return moviesArray.map(movie =>{
    return(<li>{movie}</li>)
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
