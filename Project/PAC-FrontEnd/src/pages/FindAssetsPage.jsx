/* eslint-disable no-unused-vars */
// src/pages/FindAssetsPage.js
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AssetCard from "../components/AssetCard";
import "../css/FindAssetsPage.css";

const FindAssetsPage = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const response = await fetch("http://localhost:3001/data/getAllAssets");
      if (response.ok) {
        const data = await response.json();
        setAssets(data.assets);
      } else {
        throw new Error("Failed to fetch assets");
      }
    } catch (error) {
      console.error("Error fetching assets:", error.message);
    }
  };

  return (
    <div className="find-assets-page">
      <NavBar />
      <div className="find-assets-body">
        <div className="left-container">
          <div className="search-box">
            <input type="text" placeholder="area, compound" />
            <div className="custom-icon">
              {/* Your SVG or custom HTML structure */}
            </div>
          </div>
          <button className="filters-button">
            <div className="button-text">Filters</div>
            <span className="arrow">
              <strong>{">"}</strong>
            </span>
          </button>
        </div>
        <div className="right-container">
          {assets.map((asset, index) => (
            <AssetCard key={index} data={asset} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FindAssetsPage;
