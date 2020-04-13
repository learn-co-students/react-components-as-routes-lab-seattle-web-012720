import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actors)=><div>{actors.name}<ul>{actors.movies}</ul></div>)/*{code here}*/}
    </div>
  );
};

export default Actors;
