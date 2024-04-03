import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = () => {
  const { isUserLoggedIn } = useAuth();

  if (isUserLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  return <Outlet />;
};

export default PublicRoute;
