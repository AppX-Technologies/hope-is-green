import React from "react";

const FloatingButton = ({ onClick, text, icon }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-10 flex gap-2 items-center right-10 bg-primary hover:bg-green-600 text-white text-base py-1 px-2 rounded shadow-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-opacity-50"
    >
      {icon} {text}
    </button>
  );
};

export default FloatingButton;
