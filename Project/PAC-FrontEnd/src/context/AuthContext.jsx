/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* src/context/AuthContext.jsx */
/* src/context/AuthContext.jsx */
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    if (token && username) {
      setUser({ username });
    }
  }, []);

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", { username, password });
      setUser({ username });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", username);
      navigate("/"); // Redirect to home or any other route after login
    } catch (error) {
      toast.error("Login failed: " + (error.response.data.message || error.message));
    }
  };

  const handleSignUp = async (username, password) => {
    try {
      await axios.post("http://localhost:3001/auth/signup", { username, password });
      handleLogin(username, password); // Automatically log in after sign up
    } catch (error) {
      toast.error("Sign up failed: " + (error.response.data.message || error.message));
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin, handleSignUp, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
