import React from "react";
import { IoBarChartOutline } from "react-icons/io5";
import Label from "../common/Label";
import { IoPersonAddOutline } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
const StatCard = ({ title, value, icon,extraInfo }) => {
  return (
    <div className="shadow p-3 flex flex-col gap-1 min-h-36 w-full bg-gray-100">
      <Label
        label={title}
        size="xl"
        className={"text-gray-700 font-medium"}
        icon={icon}
      />
      <h6 className="text-4xl font-bold text-gray-600">{value}</h6>
      {extraInfo && <h6 className="text-xl font-bold text-primary">{extraInfo}</h6>}
    </div>
  );
};
const Dashboard = () => {
  const stats = [
    {
      title: "Members",
      value: 2543,
      icon: IoPersonAddOutline,
      extraInfo: "+430",
    },
    {
      title: "Total Sales",
      value: 1423,
      icon: FaMoneyBillTrendUp,
      extraInfo: "+544",
    },
    {
      title: "Total Quantity This Month",
      value: 723,
      icon: MdOutlineProductionQuantityLimits,
      extraInfo: "+53",
    },
    {
      title: "Total Quantity Last Month",
      value: 670,
      icon: MdOutlineProductionQuantityLimits,
      extraInfo: "+38",

    },
  ];
  return (
    <div className="p-2 ">
      <Label icon={IoBarChartOutline} label={"Dashboard"} size={"2xl"} />
      <div className="grid grid-cols-2 gap-2 mt-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
