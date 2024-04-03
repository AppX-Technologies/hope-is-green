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
import Dashboard from "../components/dashboard/Dashboard";
import Orders from "../components/orders/Orders";
import Discussion from "../components/discussion/Discussion";
import Profile from "../components/profile/Profile";

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
              <>
                <Route path="dashboard">
                  <Route path="" element={<Dashboard />} />
                </Route>
                <Route path="orders">
                  <Route path="" element={<Orders />} />
                </Route>
                <Route path="discussions">
                  <Route path="" element={<Discussion />} />
                </Route>
                <Route path="profile">
                  <Route path="" element={<Profile />} />
                </Route>
              </>
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
