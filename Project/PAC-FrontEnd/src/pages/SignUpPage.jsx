/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "../css/SignUpPage.css";

const SignUpPage = () => {
  const handleGoogleSignUp = () => {
    // Handle Google Sign Up
  };

  return (
    <div className="signUpLayout">
      <NavBar />
      <div className="signUpContentContainer">
        <div className="signUpContent">
          <h1>Sign Up</h1>
          <form>
            <div className="formGroup">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="formGroup">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
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
      <Footer />
    </div>
  );
};

export default SignUpPage;
