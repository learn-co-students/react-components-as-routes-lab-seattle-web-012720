import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((directors)=><div>{directors.name}<ul>{directors.movies}</ul></div>)/*{code here}*/}
    </div>
  );
}

export default Directors
