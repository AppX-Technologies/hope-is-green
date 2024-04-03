import React from "react";
import { Outlet } from "react-router";
import Header from "../components/common/Header";
import { AppChoicesProvider } from "../context/AppChoicesContext";

const ProtectedRouteLayout = ({ headerVisible = true }) => {
  return (
    <div className="bg-white">
      {headerVisible && <Header />}
      <AppChoicesProvider>
        <Outlet />
      </AppChoicesProvider>
    </div>
  );
};

export default ProtectedRouteLayout;
