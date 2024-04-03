import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ roles }) => {
  const { isUserLoggedIn, user } = useAuth();

  if (!isUserLoggedIn || (roles && roles.includes(user?.role))) {
    return <Navigate to="/auth/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
