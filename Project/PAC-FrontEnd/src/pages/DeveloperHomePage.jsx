/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import developersData from "../data/developersData";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/DeveloperHomePage.css";
import DeveloeprNavBar from "../components/DeveloperNavBar";
import assetData from "../data/assetData";
import AssetCard from "../components/AssetCard";

const DeveloperHomePage = () => {

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

  const [assetsData, setAssets] = useState([]);

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

  const location = useLocation();
  const { id } = useParams();

  // Find the developer in the database by using their id
  const developer = developers.find((data) => data.developerId === parseInt(id));
  const assets = assetsData.filter((data) => data.developerId === developer.developerId);

  if (!developer) {
    return <div>Developer not found!!</div>;
  }

  // Function to filter assets by date and return most recent 3
  const getMostRecentAssets = () => {
    return assets
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  };

  // Function to filter assets by recommended and return top 3
  const getRecommendedAssets = () => {
    return assets.sort((a, b) => b.recommended - a.recommended).slice(0, 3);
  };

  // Function to filter assets by views and return top 3
  const getHighViewsAssets = () => {
    return assets.sort((a, b) => b.views - a.views).slice(0, 3);
  };

  return (
    <div>
      <NavBar />
      <div className="developer-home-page">
        <div
          className="developer-cover-image"
          style={{ backgroundImage: `url("${developer.coverImage}")` }}
        ></div>
        <DeveloeprNavBar key={developer.id} developer={developer}/>
        <div className="section-container">
          <div className="title-text">
            <h2>Most Recent</h2>
          </div>
          <div className="assets-container">
            {getMostRecentAssets().map((asset) => (
              <AssetCard
                key={asset.id}
                data={asset}
                className={"custom-card"}
              />
            ))}
          </div>
        </div>
        <div className="section-container">
          <div className="title-text">
            <h2>Recommended</h2>
          </div>
          <div className="assets-container">
            {getRecommendedAssets().map((asset) => (
              <AssetCard
                key={asset.id}
                data={asset}
                className={"custom-card"}
              />
            ))}
          </div>
        </div>
        <div className="section-container">
          <div className="title-text">
            <h2>High Views</h2>
          </div>
          <div className="assets-container">
            {getHighViewsAssets().map((asset) => (
              <AssetCard
                key={asset.id}
                data={asset}
                className={"custom-card"}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DeveloperHomePage;
