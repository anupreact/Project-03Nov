import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <NavLink activeClassName="active" to="/">
          {" "}
          Logo{" "}
        </NavLink>
      </div>

      <ul>
        <li>
          <NavLink activeClassName="active" to="/">
            {" "}
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/services">
            {" "}
            Services{" "}
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/products">
            {" "}
            Products{" "}
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            {" "}
            About us{" "}
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            {" "}
            Contact{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
