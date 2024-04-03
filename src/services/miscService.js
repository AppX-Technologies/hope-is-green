import { makeRESTApiRequests } from "../helpers/api";
import { ENDPOINTS } from "../helpers/constants";

export const miscService = {
  getFacebookCampaigns: async (signal) => {
    const { response, error } = await makeRESTApiRequests({
      endpoint: ENDPOINTS.GET_FB_CAMPAIGNS,
      signal,
    });

    return { response, error };
  },

  getActiveTrailLists: async (signal) => {
    const { response, error } = await makeRESTApiRequests({
      endpoint: ENDPOINTS.GET_ACTIVE_TRAIL_LISTS,
      signal,
    });

    return { response, error };
  },
};
