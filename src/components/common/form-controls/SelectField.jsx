import React, { useMemo, useCallback } from "react";
import Select, { components } from "react-select";

const SelectField = ({
  items,
  selectedItems = [],
  onChange,
  includeSelectAll = false,
  maxToShow = 0,
  placeholder = "Select user...",
  height = "28px",
  showMessageOnlyOnOverflow = false,
  maxItemCustomMessage = (length) =>
    `+ ${length} user${length === 1 ? "" : "s"} selected`,
  selectAllLabel = "All Items",
  isMulti = true,
  isGroupped = false,
  closeMenuOnSelect = false,
  fieldColors,
  isClearable = false,
  disabled,
}) => {
  const selectAllOption = useMemo(
    () => ({ label: selectAllLabel, value: "all" }),
    [selectAllLabel]
  );

  const hiddenOptions = useMemo(() => {
    return selectedItems.length > maxToShow
      ? selectedItems.slice(0, maxToShow)
      : [];
  }, [selectedItems, maxToShow]);

  const options = useMemo(() => {
    const baseOptions = isMulti
      ? items
          .filter((x) => !hiddenOptions.includes(x.value))
          .map((item) => ({
            label: item?.label || item?.name,
            value: item.value || item._id,
          }))
      : items;
    if (includeSelectAll) {
      return [selectAllOption, ...baseOptions];
    }
    return baseOptions;
  }, [items, hiddenOptions, includeSelectAll, isMulti]);

  const handleChange = useCallback(
    (selectedOptions) => {
      if (isMulti && selectedOptions.some((option) => option.value === "all")) {
        onChange(items.map((item) => item._id || item?.value));
      } else {
        onChange(
          isMulti
            ? selectedOptions.map((option) => option.value)
            : selectedOptions?.value
        );
      }
    },
    [onChange, isMulti, items]
  );

  const value = useMemo(() => {
    if (!isMulti && isGroupped) {
      return items
        .flatMap((item) => item?.options)
        .filter((item) => item?.value === selectedItems);
    }
    if (includeSelectAll && selectedItems.length === items.length) {
      return [selectAllOption];
    }
    return items
      .filter((item) => selectedItems.includes(item?.value || item._id))
      .map((item) => ({
        label: item?.label || item?.name,
        value: item?.value || item._id,
      }));
  }, [items, selectedItems, isMulti, isGroupped, includeSelectAll]);

  const MoreSelectedBadge = ({ items }) => {
    const title = items.join(", ");
    const length = items.length;
    const label = maxItemCustomMessage(length);

    return (
      <div className="smallFont px-2 mb-1" title={title}>
        {label}
      </div>
    );
  };

  const MultiValue = ({ index, getValue, ...props }) => {
    const overflow = getValue()
      .slice(maxToShow)
      .map((x) => x.label);

    return index < maxToShow ? (
      <components.MultiValue {...props} />
    ) : index === maxToShow ? (
      <MoreSelectedBadge
        items={showMessageOnlyOnOverflow ? getValue() : overflow}
      />
    ) : null;
  };

  return (
    <Select
      isDisabled={disabled}
      components={{ MultiValue }}
      styles={{
        control: (provided, state) => ({
          ...provided,
          background: fieldColors?.backgroundColor || "#fff",
          borderColor: "#ced9d9",
          minHeight: height,
          height: height,
          fontSize: 12,
        }),
        menuList: (provided, state) => ({
          ...provided,
          fontSize: "12px",
          maxHeight: "300px",
          overflowY: "auto",
          zIndex: 9999999999,
        }),
        valueContainer: (provided, state) => ({
          ...provided,
          height: height,
          padding: "0px 1px",
          marginTop: "0px",
        }),
        input: (provided, state) => ({
          ...provided,
          margin: "0px",
          padding: "0px",
        }),
        indicatorSeparator: (state) => ({
          display: "none",
        }),
        indicatorsContainer: (provided, state) => ({
          ...provided,
          maxHeight: 20,
          margin: "auto 0px",
          padding: "0px",
        }),
        multiValue: (provided, state) => ({
          ...provided,
          fontSize: "12px",
          height: "20px",
        }),
        placeholder: (provided, state) => ({
          ...provided,
          fontSize: "12px",
          margin: "3px 3px",
        }),
        menuPortal: (provided, state) => ({
          ...provided,
          zIndex: 9999999999,
        }),
        option: (provided, { data, isDisabled, isFocused, isSelected }) => {
          let { backgroundColor, textColor, hoverColor } = data;
          return {
            ...provided,
            borderBottom:
              isGroupped && hoverColor
                ? `1px solid ${hoverColor}` || "gray"
                : undefined,
            backgroundColor:
              isGroupped && isSelected
                ? hoverColor || "#d89e31"
                : isGroupped
                ? backgroundColor || "#d89e31"
                : isSelected
                ? "#d89e31"
                : undefined,
            color: isGroupped
              ? textColor || "white"
              : isSelected
              ? textColor || "white"
              : undefined,
            fontSize: 12,
            ":hover": {
              backgroundColor: isFocused ? hoverColor || "#d89e31" : undefined,
              color: isFocused ? "white" : undefined,
            },
          };
        },
        singleValue: (base) => ({
          ...base,
          color: fieldColors?.textColor || "black",
        }),
        groupHeading: (base) => ({
          ...base,
          fontWeight: 600,
          fontSize: "12px",
        }),
        group: (base) => ({
          ...base,
          paddingTop: 0,
          background: "rgb(237, 237, 237)",
        }),
      }}
      isMulti={isMulti}
      options={options}
      value={value}
      isClearable={isClearable}
      placeholder={placeholder}
      className="basic-multi-select"
      classNamePrefix="select"
      menuPortalTarget={document.body}
      onChange={handleChange}
      hideSelectedOptions={false}
      closeMenuOnSelect={closeMenuOnSelect}
    />
  );
};

export default SelectField;
