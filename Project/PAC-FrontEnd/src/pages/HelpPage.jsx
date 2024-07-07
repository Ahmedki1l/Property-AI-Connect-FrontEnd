/* eslint-disable no-unused-vars */
// src/components/HelpPage.js
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "../css/HelpPage.css";
import MainLayout from "../components/MainLayout";

const HelpPage = () => {
  return (
    <MainLayout>
      <div className="helpContent">
        <h1>Help Page</h1>
        <p>
          Welcome to the help page. Here you can find information and FAQs to
          help you navigate the application.
        </p>
        <h2>FAQs</h2>
        <ul>
          <li>How do I use the application?</li>
          <li>How can I contact support?</li>
          <li>Where can I find more resources?</li>
        </ul>
      </div>
    </MainLayout>
  );
};

export default HelpPage;
