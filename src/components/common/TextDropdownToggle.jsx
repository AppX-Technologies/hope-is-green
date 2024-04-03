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
  hint = "please_select_one",
  required = true,
}) => {
  const { translate } = useLocalization();

  return (
    <div>
      <select
        className={`cursor-pointer w-fit truncate appearance-none bg-white border border-gray-400 text-gray-700 py-1 px-2 rounded focus:outline-none focus:bg-white focus:border-gray-500`}
        disabled={disabled}
        style={{ fontSize: 12 }}
        onChange={(e) => onOptionClick(e.target.value)}
        value={value}
      >
        <option value="" className="mt-2" disabled={required}>
          {translate(snakeCase(hint) ?? "") || hint}
        </option>
        {options.map((option) => {
          if (typeof option === "string") {
            return (
              <option value={option} key={option}>
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
                  <option value={o} key={o}>
                    {translate(snakeCase(o ?? "") ?? "") || o}
                    {renderExtraInfo && renderExtraInfo(o)}
                  </option>
                ))}
              </optgroup>
            );
          } else if (
            typeof option === "object" &&
            option.label &&
            option.value
          ) {
            return (
              <option value={option.value} key={option.value}>
                {/* {translate(snakeCase(option.label ?? "") ?? "")}{" "} */}
                {translate(snakeCase(option.label ?? "") ?? "") || option.label}

                {renderExtraInfo && renderExtraInfo(option)}
              </option>
            );
          }
          return null;
        })}
      </select>
    </div>
  );
};

export default TextDropdownToggle;
