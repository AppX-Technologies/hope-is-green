import React, { useMemo } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "../components/auth/Login";
import NotFound from "../components/common/NotFound";
import { ADMIN_ROLE } from "../helpers/constants";
import useAuth from "../hooks/useAuth";
import ProtectedRouteLayout from "../layouts/ProtectedRouteLayout";
import PublicRouteLayout from "../layouts/PublicRouteLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const AppRoutes = () => {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const role = useMemo(() => user?.role, [user]);
  if (pathname === "/") {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route element={<PublicRouteLayout />}>
            <Route path="auth">
              <Route path="login" element={<Login />} />
            </Route>
          </Route>
        </Route>
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedRouteLayout />}>
            {role === ADMIN_ROLE && (
              <Route path="dashboard">
                <Route path="" element={<h6>dashboard</h6>} />
              </Route>
            )}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
