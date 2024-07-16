import React, { useMemo, useState } from "react";
import { getDocumentTypesColumns } from "../../helpers/dataTableColumns";
import DataTable from "../common/data-table/DataTable";
import AppModal from "../AppModal";
import AddEditDataTypeModal from "./AddEditDataTypeModal";
import AlertModal from "../common/AlertModal";
const data = [
  {
    _id: 231243,
    documentType: "Alice Smith",
    demo: `https://source.unsplash.com/random?1`,
  },
  {
    _id: 2243123,
    documentType: "John Doe",
    demo: `https://source.unsplash.com/random?2`,
  },
];
const DocumentTypes = () => {
  const [addEditModalMeta, setAddEditModalMeta] = useState(null);
  const [deleteModalMeta, setDeleteModalMeta] = useState(null);

  const onEditClick = (row) => {
    setAddEditModalMeta({ data: row });
  };
  const onDeleteClick = (row) => {
    setDeleteModalMeta({ data: row });
  };

  const tableColumns = useMemo(
    () => getDocumentTypesColumns(onEditClick, onDeleteClick),
    [onEditClick, onDeleteClick]
  );

  return (
    <div className="mt-4">
      <h6 className="font-normal text-gray-500">Please add documents type</h6>
      <hr className="my-1" />
      <div>
        <DataTable
          rowKey={"_id"}
          columns={tableColumns}
          data={data}
          bottomOffset={300}
          allowFilter={false}
          allowSort={false}
        />
      </div>
      <AddEditDataTypeModal
        show={Boolean(addEditModalMeta)}
        onHide={() => setAddEditModalMeta(null)}
      />
      <AlertModal
        onHide={() => setDeleteModalMeta(null)}
        show={Boolean(deleteModalMeta)}
        text={"Are your sure you want to delete this document type?"}
        onContinue={()=>{}}
      />
    </div>
  );
};

export default DocumentTypes;
