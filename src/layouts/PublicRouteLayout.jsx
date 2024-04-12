import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/common/Logo";

const PublicRouteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col p-4 bg-slate-100">
      <div className="flex justify-between">
        <Logo height={"60px"} width={"60px"} className="ms-3 cursor-pointer" />
        {/* <LanguagePicker /> */}
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default PublicRouteLayout;
