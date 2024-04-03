import { ENDPOINTS, SCRIPT_PROD_URL } from "./constants";
import { setIsUserLoggedInToLocal } from "./session";
export const ABORT_ERROR = "REQUEST_ABORTED";

export const makeApiRequests = async ({ requestType, requestBody }) => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  try {
    const response = await (
      await fetch(SCRIPT_PROD_URL, {
        method: "POST",
        body: JSON.stringify({
          accessToken: token,
          requestType,
          payload: requestBody,
        }),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      })
    ).json();

    if (response["success"]) {
      return { response };
    } else {
      return { error: response["message"] || "Oops something went wrong!" };
    }
  } catch (e) {
    return { error: "Oops something went wrong!" };
  }
};

// REST API Request Handler
export const makeRESTApiRequests = async ({
  endpoint,
  contentType = "application/json",
  requestBody,
  method = "POST",
  stringify = true,
  signal,
  doNotSendUpdatingAs,
}) => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;

  let updatingAs =
    [ENDPOINTS.GET_ME].includes(endpoint) || doNotSendUpdatingAs
      ? null
      : JSON.parse(sessionStorage.getItem("updating-user"));

      const headers = {
    Authorization: token ? `Bearer ${token}` : undefined,
  };
  if (endpoint !== ENDPOINTS.FILE) {
    headers["Content-Type"] = contentType;
  }
  if (updatingAs?._id) {
    headers["Updating-As"] = updatingAs?._id;
  }
  try {
    const response = await fetch(process.env.REACT_APP_API_URL + endpoint, {
      method: method,
      body: requestBody
        ? stringify
          ? JSON.stringify(requestBody)
          : requestBody
        : undefined,
      headers,
      signal,
      credentials: "include",
    });

    const responseBody = await response.json();
    if (response.status < 200 || response.status >= 300) {
      if (response.status === 401) {
        setTimeout(() => {
          setIsUserLoggedInToLocal(false);
          window.location.reload();
        }, 1500);
        return {
          error: "Your session has expired, please try logging in again!",
        };
      }
      return { error: responseBody["message"] || "Oops something went wrong!" };
    } else {
      return { response: responseBody };
    }
  } catch (e) {
    if (e.name === "AbortError") {
      return { error: ABORT_ERROR };
    }

    return { error: "Oops something went wrong!" };
  }
};
