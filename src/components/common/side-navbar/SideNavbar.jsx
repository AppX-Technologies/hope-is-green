import React, { useState } from "react";
import Logo from "../Logo";
import { Link, useLocation } from "react-router-dom";
import { IoStatsChartOutline } from "react-icons/io5";
import { BsPersonGear } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { GoDiscussionClosed } from "react-icons/go";
import { FaUsersGear } from "react-icons/fa6";

const NavItem = (props) => {
  const { label, path, role, icon: Icon, pathname } = props;
  return (
    <>
      <Link
        className={`flex items-center w-full h-12 px-3 mt-2 rounded ${
          path === pathname && "bg-purple-400 font-bold text-white"
        } hover:bg-purple-400 hover:text-white text-white ease-in-out duration-300`}
        to={path}
      >
        <Icon className="w-6 h-6 stroke-current" />
        <span class="ml-2 text-sm ">{label}</span>
      </Link>
    </>
  );
};

const SideNavbar = () => {
  const routes = [
    {
      label: "Dashboard",
      path: "/dashboard",
      role: ["Owner", "Admin", "Moderator"],
      icon: IoStatsChartOutline,
    },
    {
      label: "Members",
      path: "/members",
      role: ["Owner", "Admin", "Moderator"],
      icon: BsPersonGear,
    },
    {
      label: "Orders",
      path: "/orders",
      role: ["Owner", "Admin", "Moderator"],
      icon: RiShoppingCartLine,
    },
    {
      label: "Discussions",
      path: "/discussions",
      role: ["Owner", "Admin", "Moderator"],
      icon: GoDiscussionClosed,
    },
    {
      label: "Club Settings",
      path: "/club-settings",
      role: ["Owner", "Admin", "Moderator"],
      icon: FaUsersGear,
    },
  ];

  const { pathname } = useLocation();
  const [toggleSideNavbar, setToggleSideNavbar] = useState(false);

  return (
    <div className="flex flex-col items-center w-72 min-h-screen overflow-hidden text-gray-400 bg-dark">
      <div className="flex w-full px-3 mt-3">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-lg text-white font-bold">
              {process.env.REACT_APP_NAME}{" "}
            </span>
          </div>
        </Link>
      </div>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
          {/* Nav Links */}
          {routes?.map((route, index) => (
            <NavItem key={index} {...route} pathname={pathname} />
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default SideNavbar;
