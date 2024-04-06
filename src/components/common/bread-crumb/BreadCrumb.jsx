import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { LuHome } from "react-icons/lu";
import { breadcrumbLabel } from "../../../helpers/constants";

const Breadcrumb = ({ baseUrl }) => {
  const navigate = useNavigate();
  const location = useLocation();
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
    <div className="flex flex-col bg-gray-100 shadow-sm rounded-sm sm:flex-row justify-between items-center gap-2 p-2">
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
              <Link
                to="/dashboard"
                className="no-underline text-xs"
              >
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
      <button
        onClick={() => navigate(-1)}
        className="flex items-center px-2 py-1 border border-[Colors.primaryColor] text-xs cursor-pointer rounded-md"
      >
        <IoMdArrowBack />
        <span className="ml-1">Go Back</span>
      </button>
    </div>
  );
};

export default Breadcrumb;
