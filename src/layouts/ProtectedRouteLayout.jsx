import React from "react";
import { Outlet } from "react-router";
import SideNavbar from "../components/common/side-navbar/SideNavbar";
import { AppChoicesProvider } from "../context/AppChoicesContext";
import Breadcrumb from "../components/common/bread-crumb/BreadCrumb";

const ProtectedRouteLayout = ({ headerVisible = true }) => {
  return (
    <AppChoicesProvider>
      <div className="bg-white flex min-h-screen min-w-screen">
        {headerVisible && <SideNavbar />}
        <div className="grow p-2 flex flex-col gap-2">
          <Breadcrumb baseUrl={"/"} />
          <div className="grow border rounded">
            <Outlet />
          </div>
        </div>
      </div>
    </AppChoicesProvider>
  );
};

export default ProtectedRouteLayout;
