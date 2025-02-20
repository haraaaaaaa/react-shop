import React from "react";
import { NavLink } from "react-router";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">
          <NavLink
            to="/products"
            className="font-semibold hover:text-indigo-800 transition"
          >
            ReactShop
          </NavLink>
        </div>

        <NavLinks />
      </div>
    </nav>
  );
};

export default NavBar;
