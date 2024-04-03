import { debounce, snakeCase } from "lodash";
import React, { useEffect, useRef } from "react";
import { Table } from "react-bootstrap";
import useLocalization from "../../../hooks/useLocalization";
import CircularProgressBar from "../circular-progress";
import ColumnFilterCell from "./ColumnFilterCell";
import SortSwitch from "./SortSwitch";
import TableCell from "./TableCell";
import { Check, PlusCircle, X, XCircle } from "react-bootstrap-icons";
import UnderlineButton from "../UnderlineButton";

/**
 * Types: ["text", "url" , "email", "phone", "date"]
 * when type is date, a dateFormat is taken [have some value by default]
 * valueSelector function can be used if data is not directly row[key];
 * A custom cellRenderer function, if type is none of the above
 * Sorting on each column
 * Search on each column
 * Pagination
 *
 * May be for later?
 *  Row and column coloring callbacks
 *  Provide a prop isInput, to change the cell to a formcontrol
 */

const DataTable = ({
  columns,
  data = [],
  rowKey,
  headerHorizontalAlign = "center",
  headerVerticalAlign = "middle",
  dataHorizontalAlign = "center",
  dataVerticalAlign = "middle",
  allowSort = true,
  sortOptions, // { key: 'columnName', order: 'asc' or 'desc' }
  onSortChange, // function to handle sort changes
  allowFilter = true,
  filterValues = [], // Array of objects: [{ key: 'columnName', value: 'searchTerm' }, ...]
  onFilterValuesChange,
  bottomOffset = 10, //in px
  onBottomReached,
  loadingMoreData,
  loadingFirstPageData,
  onRowClick,
  expandedRowKeys = [], // array of rowKey which are expanded
  renderExpandedRow,
  showNewRow,

  showEditMultipleRow,
  editingMultipleRow,
  onHideEditMultipleRow,
  onSaveMultipleRow,
  renderEditMultipleRow,

  renderNewRow,
  onHideNewRow,
  onSaveNewRow,
  addingNewRow,
}) => {
  const { translate } = useLocalization();

  const tableContainerRef = useRef(null); // Create a ref for the table

  useEffect(() => {
    const debouncedHandleScroll = debounce(() => {
      if (loadingMoreData) return;
      const element = tableContainerRef.current;
      if (element) {
        const distanceFromBottom =
          element.scrollHeight - element.scrollTop - element.clientHeight;
        console.log({ distanceFromBottom, bottomOffset });

        if (distanceFromBottom <= bottomOffset) {
          onBottomReached && onBottomReached();
        }
      }
    }, 100); // 100ms is the debounce period

    const element = tableContainerRef.current;
    if (element) {
      element.addEventListener("scroll", debouncedHandleScroll);

      // Cleanup
      return () => {
        element.removeEventListener("scroll", debouncedHandleScroll);
        debouncedHandleScroll.cancel(); // Cancel the debounced call if component unmounts
      };
    }
  }, [bottomOffset, onBottomReached]);

  useEffect(() => {
    if (showNewRow) {
      setTimeout(() => {
        const trElement = document.getElementById(`data-table-new-row`);
        const offset = -80; // Adjust this value based on the height of your fixed element
        const containerElement = tableContainerRef.current;
        if (trElement && containerElement) {
          containerElement.scroll({
            top: trElement.offsetTop + offset,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [showNewRow]);

  useEffect(() => {
    if (showEditMultipleRow) {
      setTimeout(() => {
        const trElement = document.getElementById(
          `data-table-edit-multiple-row`
        );
        const offset = -80; // Adjust this value based on the height of your fixed element
        const containerElement = tableContainerRef.current;
        if (trElement && containerElement) {
          containerElement.scroll({
            top: trElement.offsetTop + offset,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [showEditMultipleRow]);

  // Function to handle sort icon click
  const handleSort = (columnName) => {
    let order = "desc";
    if (
      sortOptions &&
      sortOptions.key === columnName &&
      sortOptions.order === "desc"
    ) {
      order = "asc";
    }
    onSortChange({ key: columnName, order });
  };

  // Function to handle search input changes
  const handleColumnFilterChange = (columnKey, columnFilterValue) => {
    const updatedSearchValues = filterValues.filter(
      (sv) => sv.key !== columnKey
    );
    if (columnFilterValue) {
      updatedSearchValues.push({ key: columnKey, value: columnFilterValue });
    }
    onFilterValuesChange(updatedSearchValues);
  };

  return (
    <div className="position-relative w-100 h-100">
      {loadingFirstPageData && (
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-white bg-opacity-50"
          style={{ zIndex: 10 }}
        >
          <CircularProgressBar size={20} />
        </div>
      )}
      <div
        id="table-container"
        ref={tableContainerRef}
        className={`position-relative w-100 ${
          loadingFirstPageData ? "overflow-hidden" : "overflow-auto"
        }`}
        style={{ maxHeight: "93vh" }} // Ensure this container has a max-height or fixed height
      >
        <Table bordered className="mid">
          <thead className="sticky-header">
            <tr className="">
              {columns.map(
                ({ key, label, labelRenderer, width, disableSort }) => (
                  <th
                    key={key}
                    className={`text-white bg-dark ${!disableSort && "hover"}`}
                    style={{
                      minWidth: width,
                      textAlign: headerHorizontalAlign,
                      verticalAlign: headerVerticalAlign,
                    }}
                    onClick={() => allowSort && !disableSort && handleSort(key)}
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      {labelRenderer
                        ? labelRenderer(key)
                        : translate(snakeCase(label)) || label}
                      {allowSort && !disableSort && (
                        <SortSwitch
                          sortOrder={
                            sortOptions?.key === key ? sortOptions.order : ""
                          }
                        />
                      )}
                    </div>
                  </th>
                )
              )}
            </tr>
            {allowFilter && (
              <tr>
                {/* Search fields */}
                {columns.map((column) => (
                  <th key={column.key} className="p-1 bg-white">
                    {!column.disableSearch && (
                      <ColumnFilterCell
                        column={column}
                        filterValues={filterValues}
                        onColumnFilterChange={handleColumnFilterChange}
                      />
                    )}
                  </th>
                ))}
              </tr>
            )}
          </thead>
          <tbody>
            {showNewRow && (
              <>
                <tr
                  id="data-table-new-row"
                  className="bg-primary-light border-primary-dark"
                  style={{ borderWidth: 2 }}
                >
                  <td colSpan={columns.length} className=" text-dark">
                    <div className=" d-flex align-items-center">
                      <h6 className="mid mb-0 fw-bold">
                        <PlusCircle className="mx-2" />
                        {translate("adding_new_row")}
                      </h6>
                      {!addingNewRow && (
                        <>
                          <UnderlineButton
                            className="mx-2"
                            variant="danger"
                            text={translate("close")}
                            Icon={X}
                            disabled={addingNewRow}
                            onClick={onHideNewRow}
                          />
                          <UnderlineButton
                            className=""
                            variant="success"
                            text={translate("save")}
                            Icon={Check}
                            disabled={addingNewRow}
                            onClick={onSaveNewRow}
                          />
                        </>
                      )}
                      {addingNewRow && (
                        <CircularProgressBar className="mx-2" size={10} />
                      )}
                    </div>
                  </td>
                </tr>
                <tr className="border-primary-dark" style={{ borderWidth: 2 }}>
                  <td colSpan={columns.length} className="bg-light-grey">
                    <div style={{ width: "92vw" }} className="">
                      {renderNewRow && renderNewRow()}
                    </div>
                  </td>
                </tr>
              </>
            )}
            {showEditMultipleRow && (
              <>
                <tr
                  id="data-table-edit-multiple-row"
                  className="bg-primary-light border-primary-dark"
                  style={{ borderWidth: 2 }}
                >
                  <td colSpan={columns.length} className=" text-dark">
                    <div className="d-flex align-items-center">
                      <h6 className="mid mb-0 fw-bold">
                        <PlusCircle className="mx-2" />
                        {translate("edit_multiple_row")}
                      </h6>
                      {!editingMultipleRow && (
                        <>
                          <UnderlineButton
                            className="mx-2"
                            variant="danger"
                            text={translate("close")}
                            Icon={X}
                            disabled={editingMultipleRow}
                            onClick={onHideEditMultipleRow}
                          />
                          <UnderlineButton
                            className=""
                            variant="success"
                            text={translate("save")}
                            Icon={Check}
                            disabled={editingMultipleRow}
                            onClick={onSaveMultipleRow}
                          />
                        </>
                      )}
                      {editingMultipleRow && (
                        <CircularProgressBar className="mx-2" size={10} />
                      )}
                    </div>
                  </td>
                </tr>
                <tr className="border-primary-dark" style={{ borderWidth: 2 }}>
                  <td colSpan={columns.length} className="bg-light-grey ">
                    <div style={{ width: "92vw" }} className="">
                      {renderEditMultipleRow && renderEditMultipleRow()}
                    </div>
                  </td>
                </tr>
              </>
            )}
            {data.length > 0 ? (
              <>
                {data.map((row) => (
                  <>
                    <tr
                      id={`data-row-${row[rowKey]}`}
                      className={`hover ${
                        expandedRowKeys.includes(row[rowKey])
                          ? "border-primary-dark"
                          : ""
                      }`}
                      key={row[rowKey]}
                      style={{
                        zIndex: 0,
                        borderWidth: expandedRowKeys.includes(row[rowKey])
                          ? 2
                          : 1,
                      }}
                      onClick={(e) => {
                        let selection = window.getSelection().toString();
                        if (selection.length <= 0 && onRowClick) {
                          onRowClick && onRowClick(row);
                        }
                      }}
                    >
                      {columns.map((column) => (
                        <TableCell
                          key={column.key}
                          row={row}
                          column={column}
                          horizontalAlign={dataHorizontalAlign}
                          verticalAlign={dataVerticalAlign}
                          isRowExpanded={expandedRowKeys.includes(row[rowKey])}
                        />
                      ))}
                    </tr>
                    {expandedRowKeys.includes(row[rowKey]) && (
                      <tr
                        className={`border-primary-dark`}
                        style={{ borderWidth: 2 }}
                      >
                        <td
                          colSpan={columns.length}
                          className="bg-light-grey bg-opacity-50"
                          style={{ zIndex: 0 }}
                        >
                          <div style={{ width: "92vw" }} className="pb-2">
                            {renderExpandedRow && renderExpandedRow(row)}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </>
            ) : (
              <tr>
                <td colSpan={columns.length}>
                  <h6 className="text-muted text-center mb-0">
                    {translate("nothing_to_show")}
                  </h6>
                </td>
              </tr>
            )}

            <tr>
              <td className="text-start" colSpan={columns.length}>
                {loadingMoreData ? (
                  <div className="d-flex align-items-center">
                    <CircularProgressBar size={16} />
                    <h6 className="mx-2 mb-0 smallFont text-muted fw-bold">
                      {translate("please_wait")}
                    </h6>
                  </div>
                ) : (
                  <div className="p-2"></div>
                )}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
