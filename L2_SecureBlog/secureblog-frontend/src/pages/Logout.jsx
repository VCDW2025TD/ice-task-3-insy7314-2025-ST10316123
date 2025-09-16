import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
  }, [navigate]);

  return null; // or a loading spinner if you want
};

export default LogoutPage;
