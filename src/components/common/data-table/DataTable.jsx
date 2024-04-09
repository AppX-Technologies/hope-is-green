import { debounce } from "lodash";
import React, { useEffect, useRef } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import useLocalization from "../../../hooks/useLocalization";
import UnderlineButton from "../UnderlineButton";
import CircularProgressBar from "../circular-progress";
import ColumnFilterCell from "./ColumnFilterCell";
import SortSwitch from "./SortSwitch";
import TableCell from "./TableCell";
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
  const tableContainerRef = useRef(null); // Create a ref for the table
  useEffect(() => {
    const debouncedHandleScroll = debounce(() => {
      if (loadingMoreData) return;
      const element = tableContainerRef.current;
      if (element) {
        const distanceFromBottom =
          element.scrollHeight - element.scrollTop - element.clientHeight;

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
    <div className="relative w-full h-full">
      {loadingFirstPageData && (
        <div
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-50"
          style={{ zIndex: 10 }}
        >
          <CircularProgressBar size={20} />
        </div>
      )}
      <div
        id="table-container"
        ref={tableContainerRef}
        className={`relative w-full ${
          loadingFirstPageData ? "overflow-hidden" : "overflow-auto"
        }`}
        style={{ maxHeight: "93vh" }} // Ensure this container has a max-height or fixed height
      >
        <table className="w-full border text-sm">
          <thead className="sticky-header ">
            <tr>
              {columns.map(
                ({ key, label, labelRenderer, width, disableSort }) => (
                  <th
                    key={key}
                    className={`text-white bg-dark py-3 ${
                      !disableSort && "hover"
                    }`}
                    style={{
                      minWidth: width,
                      textAlign: headerHorizontalAlign,
                      verticalAlign: headerVerticalAlign,
                    }}
                    onClick={() => allowSort && !disableSort && handleSort(key)}
                  >
                    <div className="flex gap-2 items-center justify-center">
                      {labelRenderer ? labelRenderer(key) : label}
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
                  className="bg-green-300 border-primary-dark"
                  style={{ borderWidth: 2 }}
                >
                  <td colSpan={columns.length} className="text-dark">
                    <div className="flex items-center">
                      <h6 className="mid mb-0 font-bold">
                        <CiCirclePlus className="mx-2" />
                        Adding new row
                      </h6>
                      {!addingNewRow && (
                        <>
                          <UnderlineButton
                            className="mx-2"
                            variant="danger"
                            text={"Close"}
                            Icon={IoCloseSharp}
                            disabled={addingNewRow}
                            onClick={onHideNewRow}
                          />
                          <UnderlineButton
                            className=""
                            variant="success"
                            text={"Save"}
                            Icon={FaCheck}
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
                  <td colSpan={columns.length} className="bg-light-gray">
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
                  <td colSpan={columns.length} className="text-dark">
                    <div className="flex items-center">
                      <h6 className="mid mb-0 font-bold">
                        <CiCirclePlus className="mx-2" />
                        Edit multiple
                      </h6>
                      {!editingMultipleRow && (
                        <>
                          <UnderlineButton
                            className="mx-2"
                            variant="danger"
                            text={"Close"}
                            Icon={IoCloseSharp}
                            disabled={editingMultipleRow}
                            onClick={onHideEditMultipleRow}
                          />
                          <UnderlineButton
                            className=""
                            variant="success"
                            text={"Save"}
                            Icon={FaCheck}
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
                  <td colSpan={columns.length} className="bg-light-gray">
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
                      className={`cursor-pointer py-1 ${
                        expandedRowKeys.includes(row[rowKey])
                          ? "border-green-300"
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
                          className="bg-light-gray bg-opacity-50"
                          style={{ zIndex: 0 }}
                        >
                          <div className="pb-2">
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
                  <h6 className="text-muted text-center my-3">
                    Nothing to show!
                  </h6>
                </td>
              </tr>
            )}

            {loadingMoreData && (
              <tr>
                <td className="text-left" colSpan={columns.length}>
                  <div className="flex items-center">
                    <CircularProgressBar size={16} />
                    <h6 className="mx-2 mb-0 text-sm text-muted font-bold">
                      Please wait{" "}
                    </h6>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
