import { Menu, Transition } from "@headlessui/react";
import { Fragment, useMemo } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuHome } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CLUB_OWNER, breadcrumbLabel } from "../../../helpers/constants";
import useAuth from "../../../hooks/useAuth";
import Button from "../Button";
import { isAdmin } from "../../../helpers/session";

const Breadcrumb = ({ baseUrl }) => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const clubStatusApprovalMessage = useMemo(() => {
    let message = null;
    if (user?.role !== CLUB_OWNER) return null;
    if (user?.clubVerificationStatus === "Pending") {
      message = {
        message: "Your club verification is pending",
        className: "bg-yellow-50 border border-yellow-300",
        buttonText: "View Details",
        route: "/club-verification",
      };
    } else if (user?.clubVerificationStatus === "Verified") {
      message = null;
    } else {
      message = {
        message: "Your club is not verified, please verify your club",
        className: "bg-red-100 border border-red-300",
        buttonText: "Verify",
        route: "/club-verification",
      };
    }
    return message;
  }, [user]);

  const logoutLocal = () => {
    logout();
    navigate("/auth/login");
  };

  const segments = location.pathname
    .split("/")
    .slice(1)
    ?.filter((segment) => {
      const uuidRegex = /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i;
      return segment && !uuidRegex.test(segment);
    });

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const formatBreadcrumbLabel = (segment) => {
    const translatedLabel = breadcrumbLabel[segment];
    return translatedLabel || capitalize(segment).replaceAll("-", " ");
  };

  return (
    <div className="flex flex-col bg-white shadow-sm rounded-sm sm:flex-row justify-between items-center gap-2 p-2">
      <nav className="font-medium">
        <ol className="flex gap-2">
          {baseUrl === "/" ? (
            <li className="bg-white text-xs border border-gray-200 px-2 py-1">
              <Link
                to={baseUrl}
                className="flex items-center gap-2 no-underline text-xs"
              >
                <LuHome size="12px" />
                {formatBreadcrumbLabel("home")}
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/dashboard" className="no-underline text-xs">
                {formatBreadcrumbLabel("dashboard")}
              </Link>
            </li>
          )}
          {(baseUrl === "/" ? segments : segments.slice(1, 3)).map(
            (segment, index) => (
              <li
                key={index}
                className={`${
                  baseUrl === "/"
                    ? "bg-white text-xs border border-gray-200 px-2 py-1"
                    : ""
                }`}
              >
                <span className="no-underline text-xs">
                  {formatBreadcrumbLabel(segment)}
                </span>
              </li>
            )
          )}
        </ol>
      </nav>
      <div className="w-2/3 flex justify-between items-center">
        <div>
          {Boolean(clubStatusApprovalMessage) && (
            <div
              className={`flex gap-4 rounded-md items-center px-2 py-1 ${clubStatusApprovalMessage?.className} `}
            >
              <h6 className="text-sm">{clubStatusApprovalMessage?.message}</h6>
              <Button
                onClick={() => {
                  navigate(clubStatusApprovalMessage?.route);
                }}
                text={clubStatusApprovalMessage?.buttonText}
              />
            </div>
          )}
        </div>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md   px-2 py-1 text-sm font-medium bg-primary  hover:bg-green-600 text-white hover:text-violet-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
              <span className="font-medium  ">{user?.name}</span>
              <BsPersonCircle
                className="-mr-1 ml-2 h-5 w-5 "
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            className="z-10"
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
                        active ? "bg-purple-300 text-white" : "text-gray-900"
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
                        active ? "bg-purple-300 text-white" : "text-gray-900"
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
  );
};

export default Breadcrumb;
