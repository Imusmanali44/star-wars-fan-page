import React from 'react'
import { NavLink } from "react-router-dom";

const navMenu = [
  { name: "Terms of Use", link: "/" },
  { name: "Additional Content Information", link: "/" },
  { name: "Privacy Policy", link: "/" },
  { name: "Children's Online Privacy Policy", link: "/" },
  { name: "Your US State Privacy Rights", link: "/" },
];


const FooterNavbar = () => {
  return (
    <nav>
      <ul className="footer-navbar-nav d-flex flex-wrap justify-center">
        {navMenu.map((item, index) => (
          <li className="nav-item text-center" key={index}>
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
  )
}

export default FooterNavbar
