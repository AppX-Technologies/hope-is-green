import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import CircularProgressBar from "../components/common/circular-progress";
import { makeApiRequests } from "../helpers/api";
import { ADMIN_ROLE, BLOCK, ENDPOINTS } from "../helpers/constants";
import {
  getIsUserLoggedInFromLocal,
  setIsUserLoggedInToLocal,
} from "../helpers/session";
import { authService } from "../services/authService";
import { userService } from "../services/userService";

//A provider that fetches user if user has already signed up.
//we only store the user access token
//from this access token, we fetch user info on every refresh

const getUserPermissions = (user) => {
  let permissions;
  if (user.role === ADMIN_ROLE) {
    permissions = {
      view: "All",
      edit: "All",
    };
  } else {
    let userCRMPermissions = user?.specialRoles?.crm;
    if (userCRMPermissions === BLOCK) {
      permissions = {
        view: "Block",
        edit: "Block",
      };
    } else {
      let userPermissions = userCRMPermissions.split(" | ");
      permissions = {
        view: (userPermissions[0]?.split(" ") || [])[1],
        edit: (userPermissions[1]?.split(" ") || [])[1],
      };
    }
  }
  return permissions;
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const as = searchParams.get("as");
  const [fetchingUser, setFetchingUser] = useState(false);
  const [user, setUser] = useState(null);
  const [viewAsUserMode, setViewAsUserMode] = useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = useState(
    getIsUserLoggedInFromLocal()
  );
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [parentUser, setParentsUser] = useState(null);
  const [fetchingViewingUser, setFetchingViewingUser] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!as) {
        setFetchingViewingUser(false);
        setViewAsUserMode(false);
        sessionStorage.removeItem("updating-user");
        return;
      }
      try {
        setFetchingViewingUser(true);
        const { response } = await userService.getUsers({}, undefined, true);
        const user = response?.results.find((user) => user._id === as);
        if (user) {
          user.specialRoles = getUserPermissions(user);
          sessionStorage.setItem("updating-user", JSON.stringify(user));
          setViewAsUserMode(true);
          setUser(user);
        }
        setFetchingViewingUser(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [as]);

  useEffect(() => {
    if (isUserLoggedIn) {
      getMe();
    } else {
      setUser(null);
    }
  }, [isUserLoggedIn]);

  const getMe = async () => {
    setFetchingUser(true);

    const { response, error } = await authService.getMe();

    setFetchingUser(false);

    if (error) {
      toast.error(error);
      return;
    }
    response.specialRoles = getUserPermissions(response);
    setUser(response);
    setParentsUser(response);
  };

  const login = async (email, password) => {
    setIsLoggingIn(true);

    try {
      setLoginError("");
      const { response: authResult, error } = await authService.signIn(
        email,
        password
      );

      setIsLoggingIn(false);
      if (error) {
        setLoginError(error);
        return;
      }

      setUserLoggedIn(true);
      setIsUserLoggedInToLocal(true);
    } catch (e) {
      setIsLoggingIn(false);
      setLoginError("Something went wrong! Please try again");
      console.log(e);
    }
  };

  const logout = () => {
    makeApiRequests({
      endpoint: ENDPOINTS.USERS_LOGOUT,
      method: "GET",
    }).catch(() => {});

    setIsUserLoggedInToLocal(false);
    setUserLoggedIn(false);
  };

  const onUserChange = (userObj) => {
    setUser(userObj);
  };

  const contextObj = {
    isUserLoggedIn,
    login,
    logout,
    user,
    onUserChange,
    isLoggingIn,
    loginError,
    viewAsUserMode,
    parentUser,
  };

  return !isUserLoggedIn || (user && !fetchingUser && !fetchingViewingUser) ? (
    <UserContext.Provider value={contextObj}>{children}</UserContext.Provider>
  ) : (
    <div className="m-3">
      <div className="bg-white shadow-md rounded p-5 text-center">
        <CircularProgressBar size={100} />
      </div>
    </div>
  );
};
