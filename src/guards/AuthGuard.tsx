import { Navigate } from 'react-router-dom';

export const AuthGuard = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Checks for token

  return isAuthenticated ? children : <Navigate to="/login" />;
};