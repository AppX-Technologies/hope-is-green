import React from "react";

const Logo = ({ height = "40px", className = "" }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/logo.png`}
      className={`${className}`}
      style={{
        height,
      }}
      alt="Logo"
    />
  );
};

export default Logo;
