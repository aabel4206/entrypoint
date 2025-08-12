import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../authcontext"; // adjust path if needed

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

