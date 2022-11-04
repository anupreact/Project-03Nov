// import React from "react";
// import { NavLink, NavNavLink } from "react-router-dom";
// import "./Navbar.scss";

// const Navbar = () => {
//   return (
//     <div className="Navbar">
//       <div className="logo">
//         <NavNavLink activeclassname="active" to="/">
//           {" "}
//           Logo{" "}
//         </NavNavLink>
//       </div>

//       <ul>
//         <li>
//           <NavNavLink activeclassname="active" to="/">
//             {" "}
//             Home{" "}
//           </NavNavLink>
//         </li>
//         <li>
//           <NavNavLink activeclassname="active" to="/services">
//             {" "}
//             Services{" "}
//           </NavNavLink>
//         </li>
//         <li>
//           <NavNavLink activeclassname="active" to="/products">
//             {" "}
//             Products{" "}
//           </NavNavLink>
//         </li>
//         <li>
//           <NavNavLink activeclassname="active" to="/about">
//             {" "}
//             About us{" "}
//           </NavNavLink>
//         </li>
//         <li>
//           <NavNavLink activeclassname="active" to="/contact">
//             {" "}
//             Contact{" "}
//           </NavNavLink>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        Logo
      </NavLink>
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <NavLink to="/" activeclassname="active" className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" activeclassname="active" className="nav-link" onClick={closeMenu}>
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/products" activeclassname="active" className="nav-link" onClick={closeMenu}>
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeclassname="active" className="nav-link" onClick={closeMenu}>
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeclassname="active" className="nav-link" onClick={closeMenu}>
            Contact us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
