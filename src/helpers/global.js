import moment from "moment";
import {
  ALL_ROLES
} from "./constants";

export const dateMinusToday = (date) => {
  if (!date) return "N/A";

  const closingDate = new Date(date);
  closingDate.setHours(0);
  closingDate.setMinutes(0);
  closingDate.setSeconds(0);
  closingDate.setMilliseconds(0);

  const diffTime = closingDate.getTime() - new Date().getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const dateMinusDate = (date1, date2) => {
  if (!date1 || !date2) return "N/A";

  const date1Date = new Date(date1);
  date1Date.setHours(0);
  date1Date.setMinutes(0);
  date1Date.setSeconds(0);
  date1Date.setMilliseconds(0);

  const date2Date = new Date(date2);
  date2Date.setHours(0);
  date2Date.setMinutes(0);
  date2Date.setSeconds(0);
  date2Date.setMilliseconds(0);

  const diffTime = date1Date.getTime() - date2Date.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};



export const updateItemsInArray = (originalData, updatedData) => {
  const returnData = [...originalData];

  if (!Array.isArray(updatedData)) {
    updatedData = [updatedData];
  }

  updatedData.forEach((newData) => {
    const existingIndex = returnData.findIndex((d) => d._id === newData._id);
    if (existingIndex !== -1) {
      returnData[existingIndex] = newData;
    } else {
      returnData.unshift(newData);
    }
  });

  return returnData;
};

export function removeParamsFromUrl(url = "") {
  // Check if the URL contains any parameters
  if (url?.indexOf("?") !== -1) {
    // Split the URL into base and parameters
    var parts = url.split("?");

    // Get the base URL without parameters
    var baseUrl = parts[0];

    // Return the base URL
    return baseUrl;
  } else {
    // If the URL doesn't have parameters, return the original URL
    return url;
  }
}

export const getAppChoicesFromKey = (appChoices = [], appChoiceKey) => {
  let result = [];
  if (appChoices) {
    if (ALL_ROLES.includes(appChoiceKey)) {
      result =
        appChoices?.find((appChoice) => appChoice?.key === "users")?.values ||
        [];
      return [
        { name: "Unassigned" },
        ...result
          ?.filter((u) => u?.role === appChoiceKey)
          .map((u) => ({
            ...u,
            name: `${u.crew ? `${u.crew}: ` : ``}${u.name} `,
          })),
      ];
    }

    if (appChoiceKey === "users") {
      return (
        appChoices?.find((appChoice) => appChoice?.key === appChoiceKey)
          ?.values || []
      );
    }

    result =
      appChoices
        ?.find((appChoice) => appChoice?.key === appChoiceKey)
        ?.values.map((value) =>
          typeof value === "object" ? value?.county || value?.name : value
        ) || [];

    return result;
  }
};

export const requestFilterInstance = (filters) => {
  return filters.reduce((allFilters, currFilter) => {
    return {
      ...allFilters,
      [currFilter?.key]: currFilter?.children?.length
        ? currFilter.children.flatMap((c) =>
            c?.key === null ? [null, ""] : [c?.key]
          )
        : undefined,
    };
  }, {});
};

export const getDateWithTimezone = (dateString) => {
  try {
    return new Date(dateString.split("-").join("/")).toISOString();
  } catch (e) {}
};

export const getFormattedDate = (date) => {
  var dd = date.getDate();
  var mm = date.getMonth() + 1; //January is 0!
  var yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  return yyyy + "-" + mm + "-" + dd;
};

export const getFormattedDateTime = (date) => {
  var dd = date.getDate();
  var mm = date.getMonth() + 1; //January is 0!
  var yyyy = date.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  var hh = date.getHours();
  var min = date.getMinutes();
  if (hh < 10) {
    hh = "0" + hh;
  }
  if (min < 10) {
    min = "0" + min;
  }
  return `${yyyy}-${mm}-${dd}T${hh}:${min}`;
};

export const getUserFirstName = (name) => {
  if (name) return name.split(" ")[0] || "";

  return "";
};

export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const getValidUrl = (link) => {
  if (!link.startsWith("https://") && !link.startsWith("http://")) {
    link = "https://" + link;
  }

  return link;
};

export const escapeRegex = (string) => {
  return string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

export const constructSearchQuery = (field, query) => {
  const safeQuery = escapeRegex(query);
  const regex = { $regex: safeQuery, $options: "i" }; // case-insensitive prefix search

  return regex;
};





// Convert a date to the scrollToTime format (time only)
export function convertToScrollToTime(dateString) {
  // Parse the date string into a Date object
  let date = dateString;

  // Create a new Date object for scrollToTime
  let scrollToTime = new Date();

  // Set the hours and minutes of scrollToTime to match the parsed date
  scrollToTime.setHours(date.getHours());
  scrollToTime.setMinutes(date.getHours());

  // Reset seconds and milliseconds to ensure scrollToTime points to the exact beginning of the minute
  scrollToTime.setSeconds(0);
  scrollToTime.setMilliseconds(0);

  return scrollToTime;
}

export const formatDate = (date) => {
  return moment(date).format("MMMM Do YYYY");
};

export const formatTime = (date) => {
  return moment(date).format("h:mm a");
};

export const getHoursAndMinutes = (start, end) => {
  // Determine if start and end are in hh:mm format or date format
  let startHours, startMinutes, endHours, endMinutes;

  if (
    typeof start === "string" &&
    start.includes(":") &&
    !start.includes("T")
  ) {
    [startHours, startMinutes] = start.split(":").map(Number);
  } else {
    const startDate = new Date(start);
    startHours = startDate.getHours();
    startMinutes = startDate.getMinutes();
  }

  if (typeof end === "string" && end.includes(":") && !end.includes("T")) {
    [endHours, endMinutes] = end.split(":").map(Number);
  } else {
    const endDate = new Date(end);
    endHours = endDate.getHours();
    endMinutes = endDate.getMinutes();
  }
  return { startHours, startMinutes, endHours, endMinutes };
};

export const getDateObjectFromInputString = (dateString) => {
  try {
    return new Date(dateString.split("-").join("/"));
  } catch (e) {
    return null;
  }
};

export function timeDifferenceInMinutes(startTime, endTime) {
  // startTIme and endTime are of 24 hr time format
  // Convert time strings to Date objects
  const startDate = new Date(`2000-01-01T${startTime}:00`);
  const endDate = new Date(`2000-01-01T${endTime}:00`);

  // Check if end time is earlier than start time
  if (endDate < startDate) {
    return 0;
  }

  // Calculate the difference in milliseconds
  const differenceInMilliseconds = endDate - startDate;

  // Convert the difference to minutes
  const differenceInMinutes = differenceInMilliseconds / (1000 * 60);

  return differenceInMinutes;
}

export function hasHttpOrHttps(link = "") {
  return link.startsWith("http://") || link.startsWith("https://");
}



export const downloadFileFromString = ({ data, fileName }) => {
  var downloadLink = document.createElement("a");
  var blob = new Blob(["\ufeff", data]);
  var url = URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = fileName;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};
