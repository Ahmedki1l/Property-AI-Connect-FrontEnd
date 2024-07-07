/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import "../css/SignUpPage.css";
import MainLayout from "../components/MainLayout";

const SignUpPage = () => {
  const { handleSignUp } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setError("Passwords do not match");
      return;
    }
    try {
      await handleSignUp(username, password);
      navigate("/login");
    } catch (error) {
      setError("Sign up failed. Please try again.");
    }
  };

  const handleGoogleSignUp = () => {
    // Handle Google Sign Up
  };

  const handlePassword2Change = (e) => {
    setPassword2(e.target.value);
    if (e.target.value !== password) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  return (
    <MainLayout>
      <div className="signUpLayout">
        <div className="signUpContentContainer">
          <div className="signUpContent">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="password2">Confirm Password:</label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  value={password2}
                  onChange={handlePassword2Change}
                  required
                />
                {error && <p className="error">{error}</p>}
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <button className="googleSignUp" onClick={handleGoogleSignUp}>
              Sign Up with Google
            </button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SignUpPage;
