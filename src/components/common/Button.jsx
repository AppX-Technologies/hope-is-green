import React from "react";

// Define the Button component with its props
const Button = ({
  title,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onClick,
  href,
  variant = "primary",
  className = "",
  size = "sm",
  ...props
}) => {
  // Define base styling
  let baseStyle =
    "text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

  // Size variants
  const sizeClasses = {
    sm: "text-xs py-[5px] px-1",
    md: "text-sm py-[8px] px-2",
    lg: "text-lg py-[10px] px-3",
  };

  // Color variants
  const variantClasses = {
    primary: "bg-green-500 hover:bg-green-700",
    secondary: "bg-purple-500 hover:bg-purple-700",
    success: "bg-green-500 hover:bg-green-700",
    danger: "bg-red-500 hover:bg-red-700",
  };

  // Combine classes
  const classes = `${baseStyle} ${variantClasses[variant]} ${sizeClasses[size]} ${className} flex gap-1 items-center`;

  // If href is provided, render as 'a' tag
  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {LeftIcon && <span className="">{<LeftIcon />}</span>}
        {title}
        {RightIcon && <span className="">{<RightIcon />}</span>}
      </a>
    );
  }

  // Default render as 'button' tag
  return (
    <button className={classes} onClick={onClick} {...props}>
      {LeftIcon && <span className="">{<LeftIcon />}</span>}
      {title}
      {RightIcon && <span className="">{<RightIcon />}</span>}
    </button>
  );
};

export default Button;
