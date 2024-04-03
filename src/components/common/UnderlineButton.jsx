import React from "react";

const UnderlineButton = ({
  Icon,
  onClick,
  text,
  variant = "dark",
  iconSize = 10,
  className = "",
  fontSize = "tiny",
  display = "inline-block",
  disabled,
  href,
  target,
}) => {
  // Directly render the appropriate element based on the presence of href
  return href ? (
    <a
      href={href}
      target={target}
      className={`d-${display} rounded underline px-1 text-${
        disabled ? "muted" : variant
      } ${!disabled ? "hover-light" : ""} ${className} ${fontSize}`}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
        } else {
          onClick && onClick(e);
        }
      }}
      // Prevent link navigation if disabled is true
      tabIndex={disabled ? -1 : undefined}
    >
      {Icon && <Icon size={iconSize} className="mx-1" />}
      {text}
    </a>
  ) : (
    <span
      className={`d-${display} rounded underline px-1 text-${
        disabled ? "muted" : variant
      } ${!disabled ? "hover-light" : ""} ${className} ${fontSize}`}
      onClick={(e) => !disabled && onClick && onClick(e)}
    >
      {Icon && <Icon size={iconSize} className="mx-1" />}
      {text}
    </span>
  );
};

export default UnderlineButton;
