/* src/components/AssetDetailPage.jsx */
/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { useLocation, useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import assetData from "../data/assetData"; // Import the placeholder data
import "../css/AssetDetailPage.css";

const AssetDetailPage = () => {

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
  const location = useLocation();
  const { id } = useParams();

  // Find the asset with the matching ID
  const asset = assets.find((data) => data.assetId === parseInt(id));

  if (!asset) {
    // Handle the case where asset is not found
    return <div>Asset not found</div>;
  }

  return (
    <div>
      <NavBar />
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
            <p>{asset.location}</p>
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
      <Footer />
    </div>
  );
};

export default AssetDetailPage;
