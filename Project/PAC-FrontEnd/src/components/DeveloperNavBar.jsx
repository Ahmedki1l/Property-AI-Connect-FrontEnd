/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/DeveloperNavBar.css";

// eslint-disable-next-line react/prop-types
const DeveloperNavBar = ({ developer }) => {
  const location = useLocation();

  return (
    <div className="main-navbar-container">
      <div className="center">
        <Link
          to={`/developer/${developer.developerId}/Home`}
          className={`developer-nav-link ${
            location.pathname === `/developer/${developer.developerId}/Home`
              ? "developer-selected"
              : ""
          }`}
        >
          Home
        </Link>
        <Link
          to={`/developer/${developer.developerId}/assets`}
          className={`developer-nav-link ${
            location.pathname === `/developer/${developer.developerId}/assets`
              ? "developer-selected"
              : ""
          }`}
        >
          Assets
        </Link>
        <Link
          to={`/developer/${developer.developerId}/about`}
          className={`developer-nav-link ${
            location.pathname === `/developer/${developer.developerId}/about`
              ? "developer-selected"
              : ""
          }`}
        >
          About
        </Link>
      </div>
    </div>
  );
};

export default DeveloperNavBar;
