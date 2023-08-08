import React from "react";
import "../css/nav.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <img src={logo} height="50px" width="150px"></img>
        </li>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
        </li>
        <li>
          <Link to="reservations" className="nav-link">
            Reservations
          </Link>
        </li>
        <li>
          <Link to="/order" className="nav-link">
            Order online
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
