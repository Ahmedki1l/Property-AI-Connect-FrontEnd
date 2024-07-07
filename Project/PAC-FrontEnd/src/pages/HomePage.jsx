/* eslint-disable no-unused-vars */
// src/components/HomePage.js
import React from "react";
import NavBar from "../components/NavBar";
import BodyContainer from "../components/BodyContainer";
import Footer from "../components/Footer";

import "../css/HomePage.css";
import ChatArea from "../components/ChatArea";
import MainLayout from "../components/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>
      <BodyContainer />
    </MainLayout>
  );
};

export default HomePage;
