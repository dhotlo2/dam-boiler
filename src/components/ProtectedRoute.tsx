import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();

  // Wait until loading completes
  if (loading) return null; // Or you can add a loading spinner here if desired

  // Only render the children if user is authenticated
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;