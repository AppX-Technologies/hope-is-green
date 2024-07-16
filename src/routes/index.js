import React, { useMemo } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "../components/auth/Login";
import NotFound from "../components/common/NotFound";
import { ADMIN_ROLE, CLUB_OWNER } from "../helpers/constants";
import useAuth from "../hooks/useAuth";
import ProtectedRouteLayout from "../layouts/ProtectedRouteLayout";
import PublicRouteLayout from "../layouts/PublicRouteLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Dashboard from "../components/dashboard/Dashboard";
import Orders from "../components/orders/Orders";
import Discussion from "../components/discussion/Discussion";
import Profile from "../components/profile/Profile";
import SignUp from "../components/auth/register-as-member/Register";
import ResetPassword from "../components/auth/ResetPassword";
import Member from "../components/members/Member";
import CreateClub from "../components/auth/create-club/CreateClub";
import { isAdmin } from "../helpers/session";
import Clubs from "../components/clubs/Clubs";
import AppSettings from "../components/app-settings/AppSettings";
import ClubDetail from "../components/clubs/ClubDetail";
import ClubDocuments from "../components/clubs/ClubDocuments";
import ClubSettings from "../components/club-settings/ClubSettings";
import ClubVerification from "../components/club-verification/ClubVerification";

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
              <Route path="register" element={<SignUp />} />
              <Route path="reset-password" element={<ResetPassword />} />
            </Route>
            <Route path="create-club" element={<CreateClub />} />
          </Route>
        </Route>
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedRouteLayout />}>
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
            <Route path="members">
              <Route path="" element={<Member />} />
            </Route>
            <Route path="c" element={<ClubDocuments />} />

            {isAdmin(role) && (
              <>
                <Route path="clubs">
                  <Route path="" element={<Clubs />} />
                  <Route path="/clubs/:_id" element={<ClubDetail />} />
                </Route>{" "}
                <Route path="app-settings">
                  <Route path="" element={<AppSettings />} />
                </Route>{" "}
              </>
            )}

            {role === CLUB_OWNER && (
              <Route path="club-settings">
                <Route path="" element={<ClubSettings />} />
              </Route>
             )}
               {role === CLUB_OWNER && (
              <Route path="club-verification">
                <Route path="" element={<ClubVerification />} />
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
