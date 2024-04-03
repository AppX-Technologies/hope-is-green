import React from "react";

const NotFound = ({ text = "Page not found" }) => {
  return (
    <div className="h-3/4 flex justify-center items-center">
      <h4 className="text-center text-black">{text}</h4>
    </div>
  );
};

export default NotFound;
