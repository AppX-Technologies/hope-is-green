import React, { useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextDropdownToggle from "../TextDropdownToggle";
import InputField from "../form-controls/InputField";

const ColumnFilterCell = ({
  column: { key, type, searchOptions },
  filterValues = [],
  onColumnFilterChange,
}) => {
  const filterValue = useMemo(
    () => filterValues.find((sv) => sv.key === key),
    [filterValues, key]
  );

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    onColumnFilterChange(key, { start, end });
  };

  if (type === "date") {
    return (
      <DatePicker
        selectsRange
        startDate={filterValue?.value?.start}
        endDate={filterValue?.value?.end}
        onChange={handleDateChange}
        isClearable={true}
        dateFormat="MMM dd"
        wrapperClassName="d-block"
        className="form-control form-control-sm w-100"
      />
    );
  }

  if (searchOptions) {
    return (
      <TextDropdownToggle
        variant="outline-dark"
        options={searchOptions}
        value={filterValue?.value}
        onOptionClick={(status) => onColumnFilterChange(key, status)}
        required={false}
        hint="Any"
      />
    );
  }

  return (
    <>
      <InputField
        type={"text"}
        value={filterValue?.value || ""}
        onChange={(e) => onColumnFilterChange(key, e.target.value)}
      />
    </>
  );
};

export default ColumnFilterCell;
