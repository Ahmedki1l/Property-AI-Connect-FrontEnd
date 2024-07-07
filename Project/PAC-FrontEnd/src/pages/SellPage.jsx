/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MainLayout from "../components/MainLayout";
import "../css/SellPage.css";

const SellPage = () => {
  const [inputsFields, setInputs] = useState({
    OverallQuality: "",
    Total_Living_Area: "",
    TotalBasementSquareFeet: "",
    BasementFinishedSpaceFeet: "",
    GarageArea: "",
    LotArea: "",
    House_Age: "",
    Total_Bathrooms: "",
    FacadeArea: "",
  });
  const [estimatedPrice, setEstimatedPrice] = useState("");
  const [priceRange, setPriceRange] = useState({ lower: "", upper: "" });
  const [selectedModel, setSelectedModel] = useState("neuralNetwork"); // State to track the selected model

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputsFields, [name]: value });
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const submitEstimate = async () => {
    const token = localStorage.getItem("token"); // Get the token from local storage
    const inputs = Object.values(inputsFields).map(value => parseFloat(value) || 0);

    const headers = {
      Authorization: `Bearer ${token}`, // Include the token in the headers
    };

    let endpoint = selectedModel === "neuralNetwork" ? "neuralNetwork" : "xgboost";

    try {
      const response = await axios.post(`http://localhost:3001/api/predict/${endpoint}`, { inputs, model: selectedModel }, { headers });
      if (response.data && response.data[0].prediction) {
        setEstimatedPrice(response.data[0].prediction);
        setPriceRange({
          lower: response.data[0].lower_bound || "",
          upper: response.data[0].upper_bound || ""
        });
      } else {
        throw new Error("No prediction received or incorrect response format");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Session expired. Please reload the page to log in again.");
      } else {
        console.error("Error fetching prediction:", error);
        setEstimatedPrice("Error in prediction");
        setPriceRange({ lower: "N/A", upper: "N/A" });
      }
    }
  };

  return (
    <MainLayout>
      <div className="sell-page">
        <div className="image-container2">
          <div className="background-image"></div>
        </div>
        <div className="sell-content">
          <div className="form-content">
            {Object.keys(inputsFields).map((key, index) => (
              <div className="input-group" key={index}>
                <label htmlFor={key}>{key.replace(/_/g, " ")}:</label>
                <input
                  type="text"
                  id={key}
                  name={key}
                  value={inputsFields[key]}
                  onChange={handleInputChange}
                  className="sell-input"
                />
              </div>
            ))}
            <div className="model-toggle">
              <label>
                <input
                  type="radio"
                  name="model"
                  value="neuralNetwork"
                  checked={selectedModel === "neuralNetwork"}
                  onChange={handleModelChange}
                />
                Neural Network
              </label>
              <label>
                <input
                  type="radio"
                  name="model"
                  value="xgboost"
                  checked={selectedModel === "xgboost"}
                  onChange={handleModelChange}
                />
                XGBoost
              </label>
            </div>
          </div>
          <button className="price-estimator-btn" onClick={submitEstimate}>
            Price Estimator
          </button>
          <div className="price-results">
            <input
              type="text"
              className="price-field"
              value={`Lower Bound: ${priceRange.lower}$`}
              readOnly
            />
            <input
              type="text"
              className="price-field"
              value={`Prediction: ${estimatedPrice}$`}
              readOnly
            />
            <input
              type="text"
              className="price-field"
              value={`Upper Bound: ${priceRange.upper}$`}
              readOnly
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </MainLayout>
  );
};

export default SellPage;