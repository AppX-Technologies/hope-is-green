import React from "react";
import { Badge } from "react-bootstrap";
import useLocalization from "../../hooks/useLocalization";
import { snakeCase } from "lodash";

const dividedRows = (tabs, numOfRows) => {
  if (numOfRows === 1) return [tabs];

  const tempTabs = [...tabs];
  let result = [];
  for (let i = numOfRows; i > 0; i--) {
    result.push(tempTabs.splice(0, Math.ceil(tempTabs.length / i)));
  }
  return result;
};

const Tabs = ({
  tabs = [],
  onTabSelect,
  activeTab,
  scrollable,
  numOfScrollableRows = 1,
}) => {
  const { translate } = useLocalization();

  return scrollable ? (
    <div style={{ whiteSpace: "nowrap", overflowX: "scroll" }} className="mb-2">
      {dividedRows(tabs, numOfScrollableRows).map((row) => (
        <div className="mb-1 w-100">
          {row.map(({ key: t, icon: Icon }) => (
            <Badge
              className="hover-light p-2 me-1"
              onClick={() => onTabSelect(t)}
              key={t}
              bg={activeTab === t ? "primary" : "dark"}
            >
              {Icon && <Icon />}
              {translate(snakeCase(t))}
            </Badge>
          ))}
        </div>
      ))}
    </div>
  ) : (
    <div className="mb-2 w-100">
      {tabs.map(({ key: t, icon: Icon }) => (
        <Badge
          className="hover-light p-2 me-1"
          style={{ fontSize: "12px" }}
          onClick={() => onTabSelect(t)}
          key={t}
          bg={activeTab === t ? "primary" : "dark"}
        >
          {Icon && <Icon className="mx-1" size={12} />}
          {translate(snakeCase(t))}
        </Badge>
      ))}
    </div>
  );
};

export default Tabs;
