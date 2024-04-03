import moment from "moment";
import React, { useMemo } from "react";
import { getValidUrl } from "../../../helpers/global";
import { DEFAULT_DATE_FORMAT } from "../../../helpers/constants";
import { Badge, Tooltip, OverlayTrigger } from "react-bootstrap";

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
    <OverlayTrigger
      delay={{ hide: 250, show: 300 }}
      overlay={(props) => (
        <Tooltip {...props} width={1000}>
          {returnElement}
        </Tooltip>
      )}
      placement="left"
    >
      <td
        className={isRowExpanded ? "bg-primary-light fw-bold" : "bg-white"}
        style={{ textAlign: horizontalAlign, verticalAlign }}
      >
        <div className="truncate" style={{ width: 160 }}>
          {returnElement}
        </div>
      </td>
    </OverlayTrigger>
  ) : (
    <td
      className={isRowExpanded ? "bg-primary-light fw-bold" : "bg-white"}
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
          className={isRowExpanded ? "bg-primary-light fw-bold" : "bg-white"}
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
