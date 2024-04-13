export const APP_URL = process.env.PUBLIC_URL;
export const SCRIPT_PROD_URL = "";

export const BRAND_NAME = "Ethica CRM";
export const RUJUM_APP_URL = process.env.REACT_APP_MAIN_APP_URL;
export const CRM_APP_URL = process.env.PUBLIC_URL;


export const ENDPOINTS = {
  //Users
  LOGIN: "/users/login",
  REGISTER: "/users/register",
  LOGOUT: "/users/logout",
  FORGOT_PASSWORD: "/users/send-password-reset-link",
  RESET_PASSWORD: "/users/reset-password",
  CHANGE_PASSWORD: "/users/change-password",
  GENERATE_REGISTRATION_OTP: "/users/generate-registration-otp",
  GET_ME: "/users/me",
  GET_USER_BY_ID: (id) => `/users/${id}`,
  UPDATE_USER_DETAILS: "/users/update-user-details",
  CREATE_USER: "/users",
  DELETE_USER: "/users",
  USERS_LIST: "/users/search",

};

export const USER_STATUS = ["Enable", "Disable"];

export const PAGE_SIZE = 50;


export const ADMIN_ROLE = "Admin";
export const SITE_MODERATOR = "Site Moderator";
export const CLUB_OWNER = "Salesperson";
export const CLUB_MODERATOR = "Club Moderator";
export const CLUB_MEMBER = "Club Member";
export const ALL_ROLES = [
  ADMIN_ROLE,
  SITE_MODERATOR,
  CLUB_OWNER,
  CLUB_MODERATOR,
  CLUB_MEMBER,
];

export const LOGIN_MODE = "login";
export const REGISTER_MODE = "register";

export const DEFAULT_DATE_FORMAT = "MMMM Do YYYY";
export const DEFAULT_DATE_TIME_FORMAT = "MMMM Do YYYY HH:mm";

export const APP_OPTION = ["crm", "app"];
export const ACTION_OPTION = ["view", "edit"];
export const RULE_OPTION = ["restrict", "permit"];

export const SEARCH_BOX_VISIBLE_PATH = ["/contacts"];


export const breadcrumbLabel = {
  goBack: "Go Back",
  home: "Home",
  "study-abroad": "Study Abroad",
  news: "News",
};
