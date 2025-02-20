import React from "react";
import { NavLink } from "react-router";
import { useCart } from "../../context/CartContext";

const NavLinks = () => {
  const { cart } = useCart();
  const cartItemCount = cart.length;

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
                isActive ? "text-indigo-600 bg-white shadow-md" : "text-gray-700 hover:text-indigo-400"
              }`
            }
          >
            {label}
            {label === "My Cart" && cartItemCount > 0 && (
              <span className="ml-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full">{cartItemCount}</span>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
