import React from "react";
import { IoBarChartOutline } from "react-icons/io5";
const StatCard = ({ title, value }) => {
  return (
    <div className="shadow p-3 flex flex-col w-[300px] bg-white">
      <h6 className="text-xl grow font-normal text-center">{title}</h6>
      <h6 className="text-2xl font-bold text-center text-secondary">{value}</h6>
    </div>
  );
};
const Dashboard = () => {
  const stats = [
    {
      title: "Total Quantity Ordered this month",
      value: 2543,
    },
    {
      title: "Remaining Quantity",
      value: 123,
    },
  ];
  return (
    <div>
      <div className="shadow p-3 bg-slate-50">
        <div className="flex items-center gap-2">
          <IoBarChartOutline size={24} />{" "}
          <h6 className="text-2xl font-medium">Your Statistic</h6>
        </div>
        <div className="flex gap-2 mt-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} title={stat.title} value={stat.value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
