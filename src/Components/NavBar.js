import React, { useState } from "react";

import "./Components.css";
import { NavLink } from "react-router-dom";
import MePhoto from "../Images/Navbar/mephoto.png";
import Menus from "../Images/Navbar/menu.svg";
import Close from "../Images/Navbar/close.svg";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [Menu, setMenu] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-grid">
            <div className="navbar-me-image">
              <img src={MePhoto} alt="Mallikarjun Mathapati" />
            </div>
            <div className="navbar-navlink">
              <NavLink to="/">Home</NavLink>
              <HashLink to="/#aboutme">About Me</HashLink>
              <NavLink to="/Projects">Projects</NavLink>
              <HashLink to="/#contact-me">Contact</HashLink>
            </div>
            <div
              className={`navbar-responsive ${
                Menu ? "navbar-responsive-width" : ""
              }`}
            >
              <div
                className={`navbar-menu-link ${
                  Menu ? "navbar-menu-link-open " : ""
                }`}
              >
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Projects">Projects</NavLink>
              </div>
              <div
                className={`navbar-responsive-menu ${
                  Menu ? "navbar-responsive-menu-off" : ""
                }`}
                onClick={() => setMenu(true)}
              >
                <img src={Menus} alt="Menu Icon" />
              </div>
              <div
                className={`navbar-responsive-menu-close ${
                  Menu ? "navbar-responsive-menu-close-open" : ""
                }`}
              >
                <img
                  src={Close}
                  alt="Close Icon"
                  onClick={() => setMenu(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
