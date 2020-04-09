import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
      <div className='actor'>
        Name: {actor.name}
        {actor.movies.map((movie) => <li>{movie}</li>)}
      </div>
      )) }
    </div>
  );
};

export default Actors;
