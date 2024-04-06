import React from "react";
import { TbCaretDownFilled, TbCaretUpFilled } from "react-icons/tb";
const SortSwitch = ({ sortOrder, onSortChange }) => {
  // sortOrder can be 'asc', 'desc', or null/undefined

  const handleSortChange = () => {
    if (!onSortChange) return;

    if (sortOrder === "desc") {
      onSortChange("asc");
    } else {
      onSortChange("desc");
    }
  };

  return (
    <div
      onClick={handleSortChange}
      className=""
    >
      <TbCaretUpFilled
        size={sortOrder === "asc" ? 10 : 8}
        className={sortOrder === "asc" ? "text-primary" : "text-white"}
      />
      <TbCaretDownFilled
        size={sortOrder === "desc" ? 10 : 8}
        className={sortOrder === "desc" ? "text-primary" : "text-white"}
      />
    </div>
  );
};

export default SortSwitch;
