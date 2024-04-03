import { makeRESTApiRequests } from "../helpers/api";
import { ENDPOINTS } from "../helpers/constants";

export const userService = {
  getUsers: async (requestBody, signal,doNotSendUpdatingAs) => {
    const { response, error } = await makeRESTApiRequests({
      endpoint: ENDPOINTS.USERS_LIST,
      requestBody,
      signal,
      doNotSendUpdatingAs 
    });

    return { response, error };
  },
  resetPassword: async (requestBody, signal) => {
    const { response, error } = await makeRESTApiRequests({
      endpoint: ENDPOINTS.RESET_PASSWORD,
      requestBody,
      method: "POST",
      signal,
    });

    return { response, error };
  },
  getUserByID: async (userId, signal) => {
    const { response, error } = await makeRESTApiRequests({
      endpoint: ENDPOINTS.GET_USER_BY_ID(userId),
      method: "GET",
      signal,
    });

    return { response, error };
  },
  updateUser: async (user, signal) => {
    const { response, error } = await makeRESTApiRequests({
      endpoint: ENDPOINTS.UPDATE_USER_DETAILS,
      requestBody: user,
      method: "POST",
      signal,
    });

    return { response, error };
  },
  createUser: async (user, signal) => {
    const { response, error } = await makeRESTApiRequests({
      endpoint: ENDPOINTS.CREATE_USER,
      requestBody: user,
      method: "POST",
      signal,
    });

    return { response, error };
  },
  updateUserStatus: async (user, signal) => {
    const { response, error } = await makeRESTApiRequests({
      endpoint: ENDPOINTS.UPDATE_USER_DETAILS,
      requestBody: user,
      method: "POST",
      signal,
    });

    return { response, error };
  },
  deleteUser: async (deleteInfo, signal) => {
    const { response, error } = await makeRESTApiRequests({
      endpoint: ENDPOINTS.DELETE_USER,
      method: "DELETE",
      requestBody: deleteInfo,
      signal,
    });

    return { response, error };
  },
  forgotPassword: async (userInfo, signal) => {
    const { response, error } = await makeRESTApiRequests({
      endpoint: ENDPOINTS.FORGOT_PASSWORD,
      method: "POST",
      requestBody: userInfo,
      signal,
    });

    return { response, error };
  },
};
