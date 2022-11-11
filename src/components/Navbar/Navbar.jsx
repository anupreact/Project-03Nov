import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routeData = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/services",
      name: "Services",
    },
    {
      to: "/products",
      name: "Products",
    },
    {
      to: "/about",
      name: "About",
    },
    {
      to: "/contact",
      name: "Contact",
    },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        Anand Electronics
      </NavLink>
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>

      <ul className={open ? "nav-links active" : "nav-links"}>
        {routeData.map((item, index) => {
          const { to, name } = item;
          return (
            <li className="nav-item " key = {index}>
              <NavLink
                to={`${to}`}
                activeclassname="active"
                className="nav-link"
                onClick={closeMenu}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
