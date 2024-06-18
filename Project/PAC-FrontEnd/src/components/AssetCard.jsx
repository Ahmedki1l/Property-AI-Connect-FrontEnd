/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/AssetCard.js
import React from "react";
import { Link } from "react-router-dom";
import "../css/AssetCard.css";

const AssetCard = ({className, data }) => {
  return (
    <Link to={`/asset/${data.assetId}`} className={`asset-card-link ${className}`}>
      <div className="asset-card">
        <div className="image-container">
          <img src={data.image} alt="Asset" />
        </div>
        <div className="asset-details">
          <div className="price">${data.price}</div>
          <div className="title">{data.title}</div>
          <div className="address">{data.location}</div>
          <div className="line-separator"></div>
          <div className="info-row">
            <img src="/public/Bed Icon.jpeg" alt="Bed Icon" className="icon" />
            <div className="info">{data.noOfBed}</div>
            <img
              src="/public/Bathroom Icon.jpeg"
              alt="Bathroom Icon"
              className="icon"
            />
            <div className="info">{data.noOfBath}</div>
            <img
              src="/public/Space Icon.jpeg"
              alt="Space Icon"
              className="icon"
            />
            <div className="info">{data.size}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AssetCard;
