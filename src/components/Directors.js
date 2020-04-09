import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map((director, i) => 
        (<div>
          Name: {director.name}
          {director.movies.map((movie, i) => <li>{movie}</li>) }
        </div>)
      )}
    </div>
  );
}

export default Directors
