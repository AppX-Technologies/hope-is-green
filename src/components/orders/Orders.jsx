import React, { useMemo } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { getOrderColumns } from "../../helpers/dataTableColumns";
import Label from "../common/Label";
import DataTable from "../common/data-table/DataTable";

const Orders = () => {
  const tableColumns = useMemo(() => getOrderColumns(), []);
  const dummyMembers = [
    {
      item: "Purple Haze",
      totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
      totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
      status: "Pending",
      orderDate: "2024/12/12",
      lastUpdated: "2024/11/24",
    },
    {
      item: "OG Kush",
      totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
      totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
      status: "In Process",
      orderDate: "2024/08/22",
      lastUpdated: "2024/12/04",
    },
    {
      item: "Blue Dream",
      totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
      totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
      status: "Pending",
      orderDate: "2024/02/11",
      lastUpdated: "2024/11/05",
    },
    {
      item: "White Widow",
      totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
      totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
      status: "Success",
      orderDate: "2024/05/12",
      lastUpdated: "2024/06/24",
    },
    {
      item: "Sour Diesel",
      totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
      totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
      status: "In Process",
      orderDate: "2024/07/22",
      lastUpdated: "2024/03/27",
    },
    {
      item: "Girl Scout Cookies",
      totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
      totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
      status: "In Process",
      orderDate: "2024/11/17",
      lastUpdated: "2024/09/30",
    },
    {
      item: "Granddaddy Purple",
      totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
      totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
      status: "Success",
      orderDate: "2024/01/10",
      lastUpdated: "2024/04/12",
    },
    {
      item: "AK-47",
      totalPrice: `$${Math.floor(Math.random() * (70 - 5 + 1)) + 5}`,
      totalWeight: `${Math.floor(Math.random() * (70 - 5 + 1)) + 5} gram`,
      status: "In Process",
      orderDate: "2024/03/04",
      lastUpdated: "2024/08/25",
    },
  ];
  return (
    <div className="w-[calc(100vw-320px)] p-2">
      <Label
        label={"Orders"}
        size={"2xl"}
        className={"mb-2"}
        icon={RiShoppingCartLine}
      />
      <DataTable
        rowKey={"_id"}
        columns={tableColumns}
        data={dummyMembers}
        bottomOffset={300}
        onRowClick={() => {}}
        allowFilter={false}
        allowSort={false}
      />
    </div>
  );
};

export default Orders;
