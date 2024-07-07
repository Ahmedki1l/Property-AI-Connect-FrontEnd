// src/hooks/useAuth.js
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const navigate = useNavigate();
  const { user, login, logout } = useContext(AuthContext);

  const handleLogin = async (username, password) => {
    await login(username, password);
    navigate('/');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return { user, handleLogin, handleLogout };
};

export default useAuth;
