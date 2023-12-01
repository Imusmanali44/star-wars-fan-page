import React, { useState } from "react";
import RouteLink from "../../components/atoms/RouteLink";
import HeaderNavbar from "../../components/HeaderNavbar";
import Container from "../../components/atoms/Container";
import "./headerStyle.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={"header"}>
      <Container>
        <div className="d-flex justify-center items-center local-nav-logo relative">
          <button
            className="hamBurger-btn absolute d-lg-none"
            onClick={toggleMenu}
          >
            <img
              src="https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Burger_White-09a4d3d1e252.svg"
              alt="Button"
            />
          </button>
          <RouteLink to="/" className="logo d-none d-lg-block">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
              alt="Star Wars Logo"
            />
          </RouteLink>
          <RouteLink to="/" className="resp-logo d-lg-none">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_logo_mobile_659fef1a_1_99c6e87c.png?region=0,0,312,32"
              alt="Star Wars Logo"
            />
          </RouteLink>
        </div>
      </Container>
      {showMenu && <HeaderNavbar />}
    </header>
  );
};

export default Header;
