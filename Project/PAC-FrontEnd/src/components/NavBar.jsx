/* eslint-disable no-unused-vars */
/* src/components/NavBar.jsx */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../css/NavBar.css";

const NavBar = () => {
  const { user, handleLogout } = useAuth();
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="left">
        {user && (
          <>
            <img src="/public/User Icon.jpeg" alt="User Icon" className="icon" />
            <span className="username">{user.username}</span>
          </>
        )}
      </div>
      <div className="center">
        <Link to="/" className={`nav-link ${location.pathname === "/" ? "selected" : ""}`}>
          Home
        </Link>
        <Link to="/find-assets" className={`nav-link ${location.pathname === "/find-assets" ? "selected" : ""}`}>
          Find Assets
        </Link>
        <Link to="/sell" className={`nav-link ${location.pathname === "/sell" ? "selected" : ""}`}>
          Sell
        </Link>
        <Link to="/developers" className={`nav-link ${location.pathname === "/developers" ? "selected" : ""}`}>
          Developers
        </Link>
        <Link to="/help" className={`nav-link ${location.pathname === "/help" ? "selected" : ""}`}>
          Help
        </Link>
      </div>
      <div className="right">
        {user ? (
          <button className="login-button" onClick={handleLogout}>
            <strong>Logout</strong>
          </button>
        ) : (
          <Link to="/login">
            <button className="login-button">
              <strong>Log In</strong>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
