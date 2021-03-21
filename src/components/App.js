import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from '../routes';

const App = () => (
  <>
    <nav>
      <h1>
        <NavLink to="/"> Home </NavLink>
      </h1>
    </nav>
    <Routes />
  </>
);

export default App;
