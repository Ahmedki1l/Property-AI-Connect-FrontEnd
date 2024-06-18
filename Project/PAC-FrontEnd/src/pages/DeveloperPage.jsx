/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DeveloperCard from "../components/DeveloperCard";
import "../css/DeveloperPage.css";

const DeveloperPage = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const response = await fetch("http://localhost:3001/data/getAllDevelopers");
        if (!response.ok) {
          throw new Error("Failed to fetch developers");
        }
        const data = await response.json();
        setDevelopers(data.Developers);
      } catch (error) {
        console.error("Error fetching developers:", error);
      }
    };

    fetchDevelopers();
  }, []);

  return (
    <div className="find-assets-page">
      <NavBar />
      <div className="developer-page">
        <div className="left-container">
          <div className="search-box">
            <input type="text" placeholder="area, compound" />
            <div className="custom-icon">{/* SVG code */}</div>
          </div>
          <button className="filters-button">
            <div className="button-text">Filters</div>
            <span className="arrow">
              <strong>{">"}</strong>
            </span>
          </button>
        </div>
        <div className="right-container">
          {developers.map((developer) => (
            <DeveloperCard key={developer.id} developer={developer} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeveloperPage;
