/* eslint-disable no-unused-vars */
// NavBar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="left">
        <img src="/public/User Icon.jpeg" alt="User Icon" className="icon" />
        <span className="username">John Doe</span>
      </div>
      <div className="center">
        <Link
          to="/"
          className={`nav-link ${location.pathname === "/" ? "selected" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/find-assets"
          className={`nav-link ${
            location.pathname === "/find-assets" ? "selected" : ""
          }`}
        >
          Find Assets
        </Link>
        <Link
          to="/sell"
          className={`nav-link ${
            location.pathname === "/sell" ? "selected" : ""
          }`}
        >
          Sell
        </Link>
        <Link
          to="/developers"
          className={`nav-link ${
            location.pathname === "/developers" ? "selected" : ""
          }`}
        >
          Developers
        </Link>
        <Link
          to="/help"
          className={`nav-link ${
            location.pathname === "/help" ? "selected" : ""
          }`}
        >
          Help
        </Link>
      </div>
      <div className="right">
        <Link to="/login">
          <button className="login-button">
            <strong>Log In</strong>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

