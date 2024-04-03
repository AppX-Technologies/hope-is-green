import React from "react";
import logo from "../../assets/logo-new.png";
const Logo = ({ height = "50px", width = "50px", className = "" }) => {
  return (
    <img
      src={logo}
      className={`${className}`}
      style={{
        height,
        width,
      }}
      alt="Logo"
    />
  );
};

export default Logo;
