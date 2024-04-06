import moment from "moment";
import React, { useMemo } from "react";
import { DEFAULT_DATE_FORMAT } from "../../../helpers/constants";
import { getValidUrl } from "../../../helpers/global";

const Cell = ({
  row,
  column: {
    key,
    label,
    truncate,
    type,
    valueSelector,
    dateFormat = DEFAULT_DATE_FORMAT,
  },
  isRowExpanded, // Add isRowExpanded prop
  verticalAlign,
  horizontalAlign,
}) => {
  const value = useMemo(
    () => (valueSelector ? valueSelector(row) : row[key]),
    [row, key, valueSelector]
  );

  let returnElement = value;

  switch (type) {
    case "url":
      const urlHref = getValidUrl(value);
      returnElement = isRowExpanded ? (
        <a target="_blank" href={urlHref}>
          {value}
        </a>
      ) : (
        value
      );
      break;
    case "email":
      returnElement = renderLink(isRowExpanded, value, `mailto:${value}`);
      break;
    case "phone":
      returnElement = renderLink(isRowExpanded, value, `tel:${value}`);
      break;
    case "date":
      returnElement = value ? moment(value).format(dateFormat) : null;
      break;
    default:
      break;
  }

  return truncate && returnElement ? (
    <td
      className={
        isRowExpanded ? "bg-green-300 font-bold py-2" : "bg-white py-3"
      }
      style={{ textAlign: horizontalAlign, verticalAlign }}
    >
      <div className="truncate" style={{ width: 100 }}>
        {returnElement}
      </div>
    </td>
  ) : (
    <td
      className={
        isRowExpanded ? "bg-green-300 font-bold py-2" : "bg-white py-3"
      }
      style={{ textAlign: horizontalAlign, verticalAlign }}
    >
      {returnElement || "-"}
    </td>
  );
};

const renderLink = (isRowExpanded, value, href) => {
  return (
    <div>
      {isRowExpanded ? (
        <a onClick={(e) => e.stopPropagation()} href={href}>
          {value}
        </a>
      ) : (
        value
      )}
    </div>
  );
};

const TableCell = ({
  row,
  column,
  horizontalAlign: defaultHorizontalAlign = "center",
  verticalAlign: defaultVerticalAlign = "middle",
  isRowExpanded,
}) => {
  const {
    horizontalAlign = defaultHorizontalAlign,
    verticalAlign = defaultVerticalAlign,
  } = column;

  const renderCellContent = () => {
    if (column.cellRenderer) {
      return (
        <td
          className={isRowExpanded ? "bg-green-300 font-bold" : "bg-white"}
          style={{ textAlign: horizontalAlign, verticalAlign }}
        >
          {column.cellRenderer(row)}
        </td>
      );
    } else {
      return (
        <Cell
          row={row}
          column={column}
          isRowExpanded={isRowExpanded}
          horizontalAlign={horizontalAlign}
          verticalAlign={verticalAlign}
        />
      );
    }
  };

  return renderCellContent();
};

export default TableCell;
