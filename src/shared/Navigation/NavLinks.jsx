import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleNavLinkClick = () => {
    setActiveLink("/"); // Optional: Resets active link when clicked
  };

  const links = [
    {
      label: "Shop",
      href: "/products",
    },
    {
      label: "My Cart",
      href: "/cart",
    },
  ]
    .filter((link) => link)
    .map(({ label, href }) => (
      <NavLink
        to={href}
        key={href}
        className={({ isActive }) =>
          `${isActive ? "text-indigo-600 bg-white shadow-md" : "text-white hover:text-indigo-200"} py-2 px-4 rounded-md transition-all duration-200`
        }
        onClick={handleNavLinkClick}
      >
        <li className="cursor-pointer">{label}</li>
      </NavLink>
    ));

  return <ul className="flex space-x-6">{links}</ul>;
};

export default NavLinks;
