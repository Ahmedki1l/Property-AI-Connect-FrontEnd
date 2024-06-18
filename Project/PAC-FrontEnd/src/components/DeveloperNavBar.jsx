/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/DeveloperNavBar.css";

// eslint-disable-next-line react/prop-types
const DeveloeprNavBar = ({developer}) => {
  const location = useLocation();

  return (
    <div className="main-navbar-container">
      <div className="center">
        <a
          href="#"
          className={`developer-nav-link ${
            location.pathname === ("/developer/" + developer.id + "/Home") ? "developer-selected" : ""
          }`}
        >
          {" "}
          Home{" "}
        </a>
        <a href="#" className="developer-nav-link">
          {" "}
          Assets{" "}
        </a>
        <a href="#" className="developer-nav-link">
          {" "}
          About{" "}
        </a>
      </div>
    </div>
  );
};

export default DeveloeprNavBar;
