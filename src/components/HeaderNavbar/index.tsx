import React from "react";
import { NavLink } from "react-router-dom";

const navMenu = [
  { name: "Home", link: "/" },
  { name: "Films", link: "/films" },
  { name: "Vehicles", link: "/vehicles" },
  { name: "Starships", link: "/starships" },
];

const HeaderNavbar = () => {
  return (
    <nav className="container">
      <ul className="navbar-nav d-flex flex-wrap justify-center">
        {navMenu.map((item, index) => (
          <li className="nav-item" key={index}>
            <NavLink
              to={item.link}
              className="nav-link"
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
