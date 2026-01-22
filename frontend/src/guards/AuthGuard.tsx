import { Navigate } from 'react-router-dom';
import React from 'react'; // 1. Add this import

// 2. Use React.ReactNode instead of JSX.Element
export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token && token !== '';

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};