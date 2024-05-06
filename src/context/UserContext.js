import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

const getCurrentRole = (user) => user?.roles?.[0];

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const as = searchParams.get("as");
  const redirect = searchParams.get("redirect");
  const navigate = useNavigate();
  const [fetchingUser, setFetchingUser] = useState(false);
  const [user, setUser] = useState(null);
  const [viewAsUserMode, setViewAsUserMode] = useState(false);
  const [isUserLoggedIn, setUserLoggedIn] = useState(
    getIsUserLoggedInFromLocal()
  );
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [parentUser, setParentUser] = useState(null);
  const [fetchingViewingUser, setFetchingViewingUser] = useState(true);

  useEffect(() => {
    if (!parentUser) return;

    if (!as) {
      setFetchingViewingUser(false);
      setViewAsUserMode(false);
      setUser(parentUser);
      sessionStorage.removeItem("updating-user");
      return;
    }

    const fetchUser = async () => {
      setFetchingViewingUser(true);
      const { response, error } = await userService.getUsers(
        {
          filter: {
            _id: as,
          },
        },
        undefined,
        true
      );

      const user = response?.results?.[0];
      if (user) {
        user.role = getCurrentRole(user);
        sessionStorage.setItem("updating-user", JSON.stringify(user));
        setViewAsUserMode(true);
        setUser(user);
      } else {
        setViewAsUserMode(false);
        setUser(parentUser);
        sessionStorage.removeItem("updating-user");
      }
      setFetchingViewingUser(false);
    };
    fetchUser();
  }, [parentUser]);

  useEffect(() => {
    if (isUserLoggedIn) {
      getMe();
    } else {
      setUser(null);
      setParentUser(null);
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
    response.role = getCurrentRole(response);
    setParentUser({ ...response, isClubVerified: true });
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
      if (redirect) {
        navigate(redirect);
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
    <div className="bg-white h-screen flex justify-center items-center text-center">
      <CircularProgressBar size={100} />
    </div>
  );
};
