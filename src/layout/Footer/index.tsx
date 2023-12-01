import React from "react";
import FooterNavbar from "../../components/FooterNavbar";
import Container from "../../components/atoms/Container";
import "./footerStyle.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="bound footer-menus">
          <div className="social-prompt text-center ">More From Star Wars:</div>
          <div className="links-footer-copyright text-center">
            <p>TM &amp; © Lucasfilm Ltd. All Rights Reserved</p>
          </div>
          <div className="menu-primary">
          <FooterNavbar />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
