/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import axiosInstance from "../api/axios"; // Ensure this is correctly configured
import "../css/AssetDetailPage.css";
import MainLayout from "../components/MainLayout";

const AssetDetailPage = () => {
  const [assets, setAssets] = useState([]);
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    fetchAssets();
  }, []);

  const fetchAssets = async () => {
    try {
      const response = await axiosInstance.get("/data/getAllAssets");
      setAssets(response.data.assets);
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  };

  // Find the asset with the matching ID
  const asset = assets.find((data) => data.assetId === parseInt(id));

  if (!asset) {
    // Handle the case where asset is not found
    return <div>Asset not found</div>;
  }

  return (
    <MainLayout>
      <div className="asset-detail-page">
        <div
          className="cover-image"
          style={{ backgroundImage: `url("${asset.image}")` }}
        ></div>
        <div className="title">
          <h2>{asset.title}</h2>
        </div>
        {/* Display Location details */}
        <div className="details-box">
          <p className="detail-label">Location</p>
          <div className="detail-box">
            <p>{asset.locationName}</p>
          </div>
        </div>
        {/* Add more detail boxes for other details */}
        <div className="details-box">
          <p className="detail-label">Area</p>
          <div className="detail-box">
            <p>{asset.size}</p>
          </div>
        </div>
        <div className="details-box">
          <p className="detail-label">Bedrooms</p>
          <div className="detail-box">
            <p>{asset.noOfBed}</p>
          </div>
        </div>
        <div className="details-box">
          <p className="detail-label">Bathrooms</p>
          <div className="detail-box">
            <p>{asset.noOfBath}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AssetDetailPage;
