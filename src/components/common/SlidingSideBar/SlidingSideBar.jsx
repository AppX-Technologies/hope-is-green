import React, { useEffect, useMemo } from "react";
import { IoClose } from "react-icons/io5";
const SlidingSideBar = ({
  containerRef,
  children,
  visible = false,
  title = "",
  showCloseButton = true,
  onClose,
  fullScreen,
  style,
  paddingHorizontal,
  paddingVertical,
  className = "",
}) => {
  const Header = () => {
    return (
      <>
        <div className="flex items-center">
          <h5 className="flex-grow mb-0">
            <b>{title} </b>
          </h5>

          {showCloseButton && (
            <button
              className="py-1 px-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              onClick={onClose}
            >
              Close <IoClose size={20} className="align-text-top" />
            </button>
          )}
        </div>
        <hr className="my-2" />
      </>
    );
  };

  //to prevent scrolling of content underneath, when sidebar is visible
  useEffect(() => {
    if (visible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup to ensure we remove the class when component is unmounted or if the sidebar is destroyed/hidden for some other reason
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [visible]);

  const hasPadding = useMemo(
    () => paddingHorizontal || paddingVertical,
    [paddingHorizontal, paddingVertical]
  );

  return (
    <div
      style={{ ...style }}
      onClick={(e) => {
        onClose();
      }}
      className={`fixed top-0 left-0 bottom-0 z-50 w-full bg-black bg-opacity-25 overflow-auto transition-transform transform ${
        visible ? "" : "-translate-x-full"
      } ${className}`}
    >
      <div
        className={`h-full bg-white shadow-lg p-4 ${
          fullScreen ? "h-screen" : ""
        }`}
        style={{
          paddingLeft: paddingHorizontal,
          paddingRight: paddingHorizontal,
          paddingTop: paddingVertical,
          paddingBottom: paddingVertical,
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`flex flex-col ${hasPadding ? "rounded" : ""}`}
        >
          {(title || showCloseButton) && <Header />}
          <div id="bar-body" className="flex-grow" ref={containerRef}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlidingSideBar;
