/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DeveloperNavBar from "../components/DeveloperNavBar";
import axiosInstance from "../api/axios";
import "../css/DeveloperAboutPage.css";
import MainLayout from "../components/MainLayout";

const DeveloperAboutPage = () => {
  const [developers, setDevelopers] = useState([]);
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

    fetchDevelopers();
  }, []);

  const developer = developers.find(
    (data) => data.developerId === parseInt(id)
  );

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
        <div className="developer-navbar">
          <DeveloperNavBar key={developer.id} developer={developer} />
        </div>
        <div className="about-container">
          <div className="developer-info">
            <img
              src={developer.image}
              alt={developer.name}
              className="profile-picture"
            />
            <h1>{developer.name}</h1>
            <p>Age: {developer.age}</p>
            <p>Number of Projects: {developer.projects.length}</p>
          </div>
          <div className="developer-description">
            <h2>About {developer.name}</h2>
            <p>
              Developer {developer.name} is a renowned developer with over years
              of experience in the industry. Throughout their career, they have
              been dedicated to creating innovative and sustainable developments
              that stand the test of time. Their portfolio includes numerous
              high-profile projects, each characterized by exceptional design,
              quality, and attention to detail. With a commitment to excellence
              and a passion for transforming ideas into reality, Developer{" "}
              {developer.name} continues to lead the way in modern development
              practices.
            </p>
            <h2>Projects</h2>
            <ul>
              {developer.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DeveloperAboutPage;
