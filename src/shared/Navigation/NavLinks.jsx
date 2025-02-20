import React from "react";
import { NavLink } from "react-router";

const NavLinks = () => {
  const links = [
    { label: "Shop", href: "/products" },
    { label: "My Cart", href: "/cart" },
  ];

  return (
    <ul className="flex space-x-6 font-medium">
      {links.map(({ label, href }) => (
        <li key={href}>
          <NavLink
            to={href}
            className={({ isActive }) =>
              `py-2 px-4 rounded-md transition-all duration-200 ${
                isActive
                  ? "text-indigo-600 bg-white shadow-md"
                  : "text-gray-700 hover:text-indigo-400"
              }`
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
