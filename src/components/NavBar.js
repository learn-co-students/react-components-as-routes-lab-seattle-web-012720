import React from 'react';
import { NavLink } from 'react-router-dom';

const link={
  width:'150px',
  padding: '15px',
  margin: '0 10px 10px',
  background: 'green',
  textDecoration: 'none',
  color: 'black',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'yellow'
        }}
      >Home</NavLink>
      <NavLink
        to="/movies"
        exact
        style={link}
        activeStyle={{
          background: 'pink'
        }}
      >Movies</NavLink>
      <NavLink
        to="/directors"
        style={link}
        activeStyle={{
          background: 'orange'
        }}
      >Directors</NavLink>
      <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Actors</NavLink>
    </div>
  );
};

export default NavBar;
