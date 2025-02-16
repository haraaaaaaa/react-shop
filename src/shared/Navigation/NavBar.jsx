import React from "react";
import { NavLink } from "react-router";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="font-semibold flex items-center">
            ReactShop
          </NavLink>
        </div>

        <div className="hover:text-indigo-200">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
