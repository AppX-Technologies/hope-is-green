import React from "react";
import { Outlet } from "react-router";
import Header from "../components/common/Header";
import { AppChoicesProvider } from "../context/AppChoicesContext";

const ProtectedRouteLayout = ({ headerVisible = true }) => {
  return (
    <div className="bg-white">
      {headerVisible && <Header />}
      <div className="px-4 sm:px-6 lg:px-8 pt-2">
        <AppChoicesProvider>
          <Outlet />
        </AppChoicesProvider>
      </div>
    </div>
  );
};

export default ProtectedRouteLayout;
