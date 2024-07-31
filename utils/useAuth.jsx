// hooks/useAuth.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const useAuth = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!Cookies.get('token'); 

  useEffect(() => {
    console.log('isAuthenticated:', isAuthenticated);
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated;
};

export default useAuth;
