/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  let AccessToken = localStorage.getItem('accessToken');

  if (!AccessToken) return <Navigate to="/login" />;

  try {
    const decodedToken = jwtDecode(AccessToken);

    localStorage.setItem('userInfo', JSON.stringify(decodedToken));
    return <>{children}</>;
  } catch (error) {
    console.error('Token is Invalid!:', error);
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;