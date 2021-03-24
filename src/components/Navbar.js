import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-black text-white w-full sm:w-24 sm:left-0 fixed sm:h-screen flex items-center sm:justify-center sm:items-start py-2 px-2 sm:px-0">
    <div className="flex sm:flex-col justify-between w-full items-center pr-2 sm:pr-0">
      <NavLink to="/">
        <img
          className="h-16 md:h-20"
          src="/assets/stock.svg"
          alt="stock app logo"
        />
      </NavLink>
      <h1 className="text-2xl sm:hidden">Stock Express</h1>
    </div>
  </nav>
);

export default Navbar;
