import React, { Fragment, useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import { getUserFirstName } from "../../helpers/global";
import useAuth from "../../hooks/useAuth";
import useLocalization from "../../hooks/useLocalization";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { BsPersonCircle } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
const commontRoutes = {
  initialPath: "",
  paths: {
    Dashboard: { route: "/dashboard" },
    Orders: { route: "/orders" },
    Discussions: { route: "/discussions" },
  },
};

const roleWiseRoutes = {
  Admin: commontRoutes,
};

const LinkItem = ({ dropdown = false, title, path, location, translate }) => {
  const { pathname } = location;
  return dropdown ? (
    <Link
      to={path}
      className={`hover:border-b text-dark text-sm px-2 py-1 ${
        pathname === path ? "border" : "text-dark"
      }`}
    >
      {title}
    </Link>
  ) : (
    <Link
      to={path}
      className={`hover:bg-green-100 font-mediummedium hover:text-primary text-[16px] px-2 py-1 ${
        pathname === path ? "bg-green-100 text-primary" : "text-dark"
      }`}
    >
      {title}
    </Link>
  );
};

const NavRoutes = ({ role, location }) => {
  const allRoutes = [roleWiseRoutes[role]] || [];

  return allRoutes.map((route) => {
    const roleWisePaths = route.paths;
    const roleWiseInitialPath = route.initialPath;

    return Object.keys(roleWisePaths).map((headerName) =>
      roleWisePaths[headerName].route ? (
        <LinkItem
          location={location}
          path={`${roleWiseInitialPath}${roleWisePaths[headerName].route}`}
          title={headerName}
        />
      ) : (
        <div
        // title={translate(headerName)}
        // active={location.pathname.startsWith(
        //   `${roleWiseInitialPath}${roleWisePaths[headerName].initialPath}`
        // )}
        >
          {roleWisePaths[headerName].routes.map((r, index) => (
            <LinkItem
              location={location}
              path={`${roleWiseInitialPath}${roleWisePaths[headerName].initialPath}${r.route}`}
              title={r.name}
              dropdown
            />
          ))}
        </div>
      )
    );
  });
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { screenWidth } = useScreenWidth();
  const { user, viewAsUserMode, parentUser, logout } = useAuth();
  const { translate, langCode } = useLocalization();

  const role = useMemo(() => user?.role, [user]);

  const userName = useMemo(
    () => getUserFirstName(parentUser?.name),
    [parentUser]
  );

  const logoutLocal = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <nav className="shadow-inner bg-slate-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5" />
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Logo />
            </div>
            <div className="hidden  sm:ml-6 sm:block">
              <div className="flex h-full items-center space-x-4 ">
                {" "}
                <NavRoutes user={user} role={role} location={location} />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-primary px-2 py-1 text-sm font-mediummedium text-primary hover:text-violet-100 hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                  <span className="font-medium  ">{userName}</span>
                  <BsPersonCircle
                    className="-mr-1 ml-2 h-5 w-5 "
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item className="border-b-orange-50">
                      {({ active }) => (
                        <Link
                          to={"/profile"}
                          className={`${
                            active ? "bg-primary text-white" : "text-gray-900"
                          } group flex gap-1 w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <IoPersonCircleOutline size={20} /> My Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={logoutLocal}
                          className={`${
                            active ? "bg-primary text-white" : "text-gray-900"
                          } group flex gap-1 w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <IoIosLogOut size={20} /> Log out{" "}
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
