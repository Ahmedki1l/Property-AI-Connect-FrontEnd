/* eslint-disable no-unused-vars */
/* src/App.js */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FindAssetsPage from "./pages/FindAssetsPage";
import AssetDetailPage from "./pages/AssetDetailPage";
import SellPage from "./pages/SellPage";
import DeveloperPage from "./pages/DeveloperPage";
import DeveloperHomePage from "./pages/DeveloperHomePage";
import DeveloperAssetsPage from "./pages/DeveloperAssetsPage";
import HelpPage from "./pages/HelpPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DeveloperAboutPage from "./pages/DeveloperAboutPage";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/find-assets" element={<PrivateRoute><FindAssetsPage /></PrivateRoute>} />
          <Route path="/asset/:id" element={<PrivateRoute><AssetDetailPage /></PrivateRoute>} />
          <Route path="/sell" element={<PrivateRoute><SellPage /></PrivateRoute>} />
          <Route path="/developers" element={<PrivateRoute><DeveloperPage /></PrivateRoute>} />
          <Route path="/developer/:id/Home" element={<PrivateRoute><DeveloperHomePage /></PrivateRoute>} />
          <Route path="/developer/:id/assets" element={<PrivateRoute><DeveloperAssetsPage /></PrivateRoute>} />
          <Route path="/developer/:id/about" element={<PrivateRoute><DeveloperAboutPage /></PrivateRoute>} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
