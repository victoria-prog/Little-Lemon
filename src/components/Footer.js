import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-site-map">
          <div>
            <img className="logo" src={logo} alt="logo-footer"></img>
          </div>
          <Link className="footer-item" to="/">
            Home
          </Link>
          <Link className="footer-item" to="/about">
            About
          </Link>
          <Link className="footer-item" to="/menu">
            Menu
          </Link>
          <Link className="footer-item" to="/reservations">
            Reservations
          </Link>
          <Link className="footer-item" to="/order-online">
            Order Online
          </Link>
          <Link className="footer-item" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
