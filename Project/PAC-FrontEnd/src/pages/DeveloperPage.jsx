/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DeveloperCard from "../components/DeveloperCard";
import "../css/DeveloperPage.css";
import MainLayout from "../components/MainLayout";

const DeveloperPage = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const response = await axiosInstance.get("/data/getAllDevelopers");
        setDevelopers(response.data.developers);
      } catch (error) {
        console.error("Error fetching developers:", error);
      }
    };

    fetchDevelopers();
  }, []);

  return (
    <MainLayout>
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
            <DeveloperCard key={developer.developerId} developer={developer} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default DeveloperPage;
