import React from "react";
import { BiChevronDown } from "react-icons/bi";

const Select = ({ options, heading, ...rest }) => {
  return (
    <div>
      {heading && <p className="text-sm text-gray-600 p-0 m-0 mt-3 mb-1">{heading}</p>}
      <div className="relative text-sm">
        <select
          {...rest}
          className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-1.5 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          {options.map((option) => (
            <option key={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-gray-700">
          <BiChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Select;
