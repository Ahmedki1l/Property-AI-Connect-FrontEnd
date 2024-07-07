/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AssetCard from "../components/AssetCard";
import DeveloperNavBar from "../components/DeveloperNavBar";
import axiosInstance from "../api/axios";
import "../css/FindAssetsPage.css";
import "../css/DeveloperAssetsPage.css"; // Make sure to create this CSS file
import MainLayout from "../components/MainLayout";

const DeveloperAssetsPage = () => {
  const [developers, setDevelopers] = useState([]);
  const [assetsData, setAssets] = useState([]);
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

  return (
    <MainLayout>
      <div className="developer-home-page">
        <div
          className="developer-cover-image"
          style={{ backgroundImage: `url("${developer.coverImage}")` }}
        ></div>
        <DeveloperNavBar key={developer.id} developer={developer} />
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
            {assets.map((asset) => (
              <AssetCard key={asset.assetId} data={asset} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DeveloperAssetsPage;
