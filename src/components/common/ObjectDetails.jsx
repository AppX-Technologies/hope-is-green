import React from "react";
import useLocalization from "../../hooks/useLocalization";
import { snakeCase, startCase } from "lodash";
import { Badge } from "react-bootstrap";
import { CircleFill } from "react-bootstrap-icons";

const renderObject = (data, prefix = "", translate) => {
  // Check if data is an object and not null or an array
  if (typeof data === "object" && data !== null && !Array.isArray(data)) {
    const sortedEntries = Object.entries(data).sort(([key1], [key2]) =>
      key1.localeCompare(key2)
    );
    return (
      <div className="border rounded mx-2 p-2">
        {sortedEntries.map(([key, value]) => (
          // Recursively call renderObject for nested objects
          <div className="mt-1" key={prefix + key}>
            <CircleFill size={3} />
            <span className="mx-2 fw-bold">
              {translate(snakeCase(key)) || startCase(key)}:{" "}
            </span>
            {renderObject(value, prefix + key + ".", translate)}
          </div>
        ))}
      </div>
    );
  } else if (Array.isArray(data)) {
    // Handle arrays, might contain objects or primitive values
    return data.map((item, index) => (
      <div key={prefix + index}>
        {renderObject(item, prefix + index + ".", translate)}
      </div>
    ));
  } else {
    // Return primitive values directly
    return (
      <Badge
        bg="dark"
        className="fw-bold"
        style={{ fontSize: 9, whiteSpace: "break-spaces",wordBreak:'break-all' }}
      >
        {String(data)}
      </Badge>
    );
  }
};

const ObjectDetails = ({ object = {} }) => {
  const { translate } = useLocalization();

  return <div className="mid">{renderObject(object, "", translate)}</div>;
};

export default ObjectDetails;
