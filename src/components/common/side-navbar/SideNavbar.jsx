import React, { useMemo, useState } from "react";
import Logo from "../Logo";
import { Link, useLocation } from "react-router-dom";
import {
  IoBarChartSharp,
  IoChatbubbles,
  IoStatsChartOutline,
} from "react-icons/io5";
import { BsGearFill, BsPersonFillGear, BsPersonGear } from "react-icons/bs";
import { RiShoppingCart2Fill, RiShoppingCartLine } from "react-icons/ri";
import { GoDiscussionClosed } from "react-icons/go";
import { FaUsersGear } from "react-icons/fa6";
import { ADMIN_ROLE, ALL_ROLES, CLUB_OWNER } from "../../../helpers/constants";
import { HiUserGroup } from "react-icons/hi";
import useAuth from "../../../hooks/useAuth";
import { TiInputChecked } from "react-icons/ti";

const NavItem = (props) => {
  const { label, path, role, icon: Icon, pathname } = props;
  return (
    <>
      <Link
        className={`flex items-center w-full h-12 px-3 mt-2 rounded font-medium hover:bg-[#f7defc] hover:text-secondary text-gray-700 ease-in-out duration-100 ${
          path === pathname && "bg-[#f7defc]  text-secondary"
        } `}
        to={path}
      >
        <Icon className="w-6 h-6 stroke-current" />
        <span class="ml-2 text-sm ">{label}</span>
      </Link>
    </>
  );
};

const SideNavbar = () => {
  const { user } = useAuth();
  const role = useMemo(() => user?.role, [user]);

  const routes = useMemo(() => {
    return [
      {
        label: "Dashboard",
        path: "/dashboard",
        roles: ALL_ROLES,
        icon: IoBarChartSharp,
      },
      {
        label: "Clubs",
        path: "/clubs",
        roles: [ADMIN_ROLE],
        icon: HiUserGroup,
      },
      {
        label: "Members",
        path: "/members",
        roles: ALL_ROLES,
        icon: BsPersonFillGear,
      },
      {
        label: "Orders",
        path: "/orders",
        roles: ALL_ROLES,
        icon: RiShoppingCart2Fill,
      },
      {
        label: "Discussions",
        path: "/discussions",
        roles: ALL_ROLES,
        icon: IoChatbubbles,
      },
      {
        label: "Club Settings",
        path: "/club-settings",
        roles: [CLUB_OWNER],
        icon: FaUsersGear,
      },
      {
        label: "Club Verification",
        path: "/club-verification",
        roles: [CLUB_OWNER],
        icon: TiInputChecked,
      },
      {
        label: "App Settings",
        path: "/app-settings",
        roles: [ADMIN_ROLE],
        icon: BsGearFill,
      },
    ].filter((route) => route?.roles?.includes(role));
  }, [role]);

  const { pathname } = useLocation();
  const [toggleSideNavbar, setToggleSideNavbar] = useState(false);

  return (
    <div className="flex flex-col items-center w-60 min-w-60 max-w-60 min-h-screen overflow-hidden text-gray-400 bg-white">
      <div className="flex w-full mt-3">
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <Logo />
          </div>
        </Link>
      </div>
      <div className="w-full px-2">
        <div className="flex flex-col items-center w-full mt-3 border-t border-gray-400">
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
