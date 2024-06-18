import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import '../css/LoginPage.css';

const LoginPage = () => {
  const handleGoogleLogin = () => {
    // Handle Google Login
  };

  return (
    <div className='loginLayout'>
      <NavBar />
      <div className='loginContent'>
        <h1>Login</h1>
        <form>
          <div className='formGroup'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div className='formGroup'>
            <label htmlFor='password'>Password:</label>
            <input type='password' id='password' name='password' required />
          </div>
          <button type='submit'>Login</button>
        </form>
        <button className='googleLogin' onClick={handleGoogleLogin}>
          Login with Google
        </button>
        <p>
          Don't have an account? <Link to='/signup'>Sign up</Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;