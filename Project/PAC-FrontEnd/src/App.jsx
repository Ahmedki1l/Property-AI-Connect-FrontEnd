/* eslint-disable no-unused-vars */
// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Note the import change
import HomePage from "./pages/HomePage";
import FindAssetsPage from "./pages/FindAssetsPage";
import AssetDetailedPage from "./pages/AssetDetailPage"; // Import your detailed page
import SellPage from "./pages/SellPage";
import DeveloperPage from "./pages/DeveloperPage";
import DeveloperHomePage from "./pages/DeveloperHomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        {" "}
        {/* Change from Switch to Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/find-assets" element={<FindAssetsPage />} />
        <Route path="/asset/:id" Component={AssetDetailedPage} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/developers" element={<DeveloperPage />} />
        <Route path="/developer/:id/Home" Component={DeveloperHomePage} />
      </Routes>
    </Router>
  );
};

export default App;
