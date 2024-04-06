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
          path === pathname && "bg-purple-400 text-white"
        } hover:bg-purple-400 hover:text-white transition-all`}
        to={path}
      >
        <Icon className="w-6 h-6 stroke-current" />
        <span class="ml-2 text-sm font-medium">{label}</span>
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
    <div className="flex flex-col items-center w-72 max-h-screen overflow-hidden text-gray-400 bg-gray-900">
      <div className="flex w-full px-3 mt-3">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <Logo />
            <span className="text-lg font-bold">
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
      <a
        className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-purple-400 hover:text-white"
        href="#"
      >
        <svg
          className="w-6 h-6 stroke-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="ml-2 text-sm font-medium">Account</span>
      </a>
    </div>
  );
};

export default SideNavbar;
