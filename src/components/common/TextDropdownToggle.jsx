import { snakeCase } from "lodash";
import React from "react";
import useLocalization from "../../hooks/useLocalization";

const TextDropdownToggle = ({
  variant,
  options = [],
  value = "",
  onOptionClick,
  disabled,
  renderExtraInfo,
  hint = "Please select one",
  required = true,
  className = "",
}) => {
  const { translate } = useLocalization();

  return (
    <select
      className={`border cursor-pointer bg-white border-gray-300 rounded px-2 py-1 text-base focus:outline-none truncate ${className} `}
      disabled={disabled}
      style={{ fontSize: 12 }}
      onClick={(e) => {
        e.stopPropagation();
        onOptionClick(e.target.value);
      }}
      value={value}
    >
      <option value="" className="mt-2" disabled={required}>
        {hint}
      </option>
      {options.map((option) => {
        if (typeof option === "string") {
          return (
            <option value={option} key={option} className="cursor-pointer">
              {translate(snakeCase(option ?? "") ?? "") || option}
              {renderExtraInfo && renderExtraInfo(option)}
            </option>
          );
        } else if (typeof option === "object" && option.options) {
          return (
            <optgroup
              label={translate(snakeCase(option?.label ?? "") ?? "")}
              key={option.label}
            >
              {option.options.map((o) => (
                <option value={o} key={o} className="cursor-pointer">
                  {translate(snakeCase(o ?? "") ?? "") || o}
                  {renderExtraInfo && renderExtraInfo(o)}
                </option>
              ))}
            </optgroup>
          );
        } else if (typeof option === "object" && option.label && option.value) {
          return (
            <option
              value={option.value}
              key={option.value}
              className="cursor-pointer"
            >
              {/* {translate(snakeCase(option.label ?? "") ?? "")}{" "} */}
              {translate(snakeCase(option.label ?? "") ?? "") || option.label}

              {renderExtraInfo && renderExtraInfo(option)}
            </option>
          );
        }
        return null;
      })}
    </select>
  );
};

export default TextDropdownToggle;
