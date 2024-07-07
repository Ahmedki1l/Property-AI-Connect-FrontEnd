/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/MainLayout.jsx
import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './NavBar';
import Footer from './Footer';
import ChatArea from './ChatArea';
import '../css/HomePage.css';

const MainLayout = ({ children }) => {
  useEffect(() => {
    const handleOnline = () => {
      toast.dismiss();
      toast.success('You are back online');
    };

    const handleOffline = () => {
      toast.dismiss();
      toast.error('You are offline. Check your network connection.');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className='main-layout'>
      <NavBar />
      <div className="main-content">
        {children}
      </div>
      <Footer />
      <ChatArea />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
