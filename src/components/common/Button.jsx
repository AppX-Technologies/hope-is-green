import React from "react";
import CircularProgressBar from "./circular-progress";

// Define the Button component with its props
const Button = ({
  text,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onClick,
  href,
  variant = "primary",
  className = "",
  size = "sm",
  disabled,
  loading,
  loadingText = "Please wait...",
  ...props
}) => {
  // Define base styling
  let baseStyle =
    "text-white flex justify-center items-center font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline";

  // Size variants
  const sizeClasses = {
    sm: "text-xs py-[5px] px-1",
    md: "text-sm py-[8px] px-2",
    lg: "text-lg py-[10px] px-3",
  };

  // Color variants
  const variantClasses = {
    primary: `${disabled ? 'bg-green-400' :'bg-primary'} hover:bg-green-700`,
    secondary: `${disabled ? 'bg-purple-400' :'bg-secondary'} hover:bg-purple-700`,
    success: `${disabled ? 'bg-green-400' :'bg-primary'} hover:bg-green-700`,
    danger: `${disabled ? 'bg-red-400' :'bg-red-500'} hover:bg-red-700`,
  };

  // Combine classes
  const classes = `${baseStyle} ${variantClasses[variant]} ${sizeClasses[size]} ${className} flex gap-1 items-center`;

  // If href is provided, render as 'a' tag
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={() => {
          onClick && onClick();
        }}
        {...props}
      >
        {LeftIcon && <span className="">{<LeftIcon />}</span>}
        {text}
        {RightIcon && <span className="">{<RightIcon />}</span>}
      </a>
    );
  }

  // Default render as 'button' tag
  return (
    <button
      className={classes}
      onClick={() => {
        onClick && onClick();
      }}
      {...props}
      disabled={disabled}
    >
      {loading ? (
        <>
          <CircularProgressBar size={15} /> {loadingText}
        </>
      ) : (
        <>
          {LeftIcon && <span className="">{<LeftIcon />}</span>}
          {text}
          {RightIcon && <span className="">{<RightIcon />}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
