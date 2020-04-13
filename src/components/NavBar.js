import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from './Home';
import Actors from './Actors';
import Directors from './Directors';
import Movies from './Movies';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
const NavBar = () => {
  return (
    
    <div className="navbar">
      {/*{code here}*/}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </div>
   
  );
};

export default NavBar;
