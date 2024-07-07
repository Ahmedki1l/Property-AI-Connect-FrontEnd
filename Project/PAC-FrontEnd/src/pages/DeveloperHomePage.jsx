/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../css/DeveloperHomePage.css";
import DeveloperNavBar from "../components/DeveloperNavBar";
import AssetCard from "../components/AssetCard";
import axiosInstance from "../api/axios";
import MainLayout from "../components/MainLayout";

const DeveloperHomePage = () => {
  const [developers, setDevelopers] = useState([]);
  const [assetsData, setAssets] = useState([]);
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const response = await axiosInstance.get("/data/getAllDevelopers");
        setDevelopers(response.data.developers);
      } catch (error) {
        console.error("Error fetching developers:", error);
      }
    };

    const fetchAssets = async () => {
      try {
        const response = await axiosInstance.get("/data/getAllAssets");
        setAssets(response.data.assets);
      } catch (error) {
        console.error("Error fetching assets:", error);
      }
    };

    fetchDevelopers();
    fetchAssets();
  }, []);

  const developer = developers.find(
    (data) => data.developerId === parseInt(id)
  );
  const assets = developer
    ? assetsData.filter((data) => data.developerId === developer.developerId)
    : [];

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
    <MainLayout>
      <div className="developer-home-page">
        <div
          className="developer-cover-image"
          style={{ backgroundImage: `url("${developer.coverImage}")` }}
        ></div>
        <DeveloperNavBar key={developer.id} developer={developer} />
        <div className="section-container">
          <div className="title-text">
            <h2>Most Recent</h2>
          </div>
          <div className="assets-container">
            {getMostRecentAssets().map((asset) => (
              <AssetCard
                key={asset.assetId}
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
                key={asset.assetId}
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
                key={asset.assetId}
                data={asset}
                className={"custom-card"}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DeveloperHomePage;
