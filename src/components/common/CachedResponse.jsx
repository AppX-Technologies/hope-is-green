import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { makeRESTApiRequests } from "../../helpers/api";
import Loader from "./Loader";

const getLocalResponse = (endpoint) => {
  const localChoices = localStorage.getItem(endpoint);

  if (localChoices) {
    try {
      return JSON.parse(localChoices);
    } catch (e) {}
  }
  return null;
};

const CachedResponse = ({ render, listEndpoint, restrictedRoutes = [] }) => {
  const [response, setResponse] = useState(null);
  const [responseLoading, setResponseLoading] = useState(true);
  const { pathname } = useLocation();

  const getResponse = () => {
    const localResponse = getLocalResponse(listEndpoint);

    if (restrictedRoutes.includes(pathname)) {
      setResponse(localResponse || []);
      setResponseLoading(false);
      return;
    }

    if (localResponse) {
      setResponse(localResponse);
      setResponseLoading(false);
    }

    fetchRemoteResponse();
  };

  const fetchRemoteResponse = async () => {
    const { response, error } = await makeRESTApiRequests({
      endpoint: `/${listEndpoint}/list`,
    });

    if (error) {
      toast.error(error);
      setResponseLoading(false);
      return;
    }

    setResponse(response);
    setResponseLoading(false);

    localStorage.setItem(listEndpoint, JSON.stringify(response));
  };

  useEffect(() => {
    getResponse();
  }, [pathname]);

  if (responseLoading) return <Loader />;

  return response ? render(response) : "";
};

export default CachedResponse;
