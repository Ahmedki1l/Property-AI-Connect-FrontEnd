/* eslint-disable no-unused-vars */
// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FindAssetsPage from "./pages/FindAssetsPage";
import AssetDetailedPage from "./pages/AssetDetailPage";
import SellPage from "./pages/SellPage";
import DeveloperPage from "./pages/DeveloperPage";
import DeveloperHomePage from "./pages/DeveloperHomePage";
import HelpPage from "./pages/HelpPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-assets" element={<FindAssetsPage />} />
        <Route path="/asset/:id" Component={AssetDetailedPage} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/developers" element={<DeveloperPage />} />
        <Route path="/developer/:id/Home" Component={DeveloperHomePage} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};

export default App;

