import React from "react";
import { NavLink } from "react-router";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600 flex items-center">
          <span className="text-3xl font-extrabold text-indigo-700 mr-2 transition-transform duration-300 transform hover:scale-110">🛒</span>
          <NavLink to="/" className="font-semibold text-indigo-600 hover:text-indigo-800 transition-all duration-300 transform hover:scale-105">
            ReactShop
          </NavLink>
        </div>

        <NavLinks />
      </div>
    </nav>
  );
};

export default NavBar;
