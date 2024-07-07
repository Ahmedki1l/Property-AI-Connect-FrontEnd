/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AssetCard from "../components/AssetCard";
import "../css/FindAssetsPage.css";
import MainLayout from "../components/MainLayout";

const FindAssetsPage = () => {
  const [assets, setAssets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    fetchAssets();
  }, [searchTerm, priceFilter]);

  const fetchAssets = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:3001/data/getAllAssets?search=${searchTerm}&price=${priceFilter}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
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
    <MainLayout>
      <div className="find-assets-body">
        <div className="left-container">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search: Asset name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="custom-icon">
              {/* Your SVG or custom HTML structure */}
            </div>
          </div>
          <div className="filter-box">
            <input
              type="text"
              placeholder="Set Max price"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            />
            <div className="custom-icon">
              {/* Your SVG or custom HTML structure */}
            </div>
          </div>
        </div>
        <div className="right-container">
          {assets.map((asset, index) => (
            <AssetCard key={index} data={asset} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default FindAssetsPage;
