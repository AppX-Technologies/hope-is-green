export const APP_URL = process.env.PUBLIC_URL;
export const SCRIPT_PROD_URL = "";

export const BRAND_NAME = "Ethica CRM";
export const RUJUM_APP_URL = process.env.REACT_APP_MAIN_APP_URL;
export const CRM_APP_URL = process.env.PUBLIC_URL;

export const QUERY_PARAMS_KEY = ["as", "accessMode"];

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

  // contacts
  CREATE_CONTACTS: "/contacts",
  SEARCH_CONTACTS: "/contacts/search",
  DELETE_SELECTED_CONTACTS: "/contacts",
  UPDATE_MANY_CONTACTS: "/contacts",
  CONTACT_LOGS: (id) => `/contacts/history/${id}`,
  CONTACT_WITH_ID: (id) => `/contacts/${id}`,
  CONTACT_COMMENT_WITH_ID: (id) => `/contacts/comments/${id}`,
  CONTACTS_DOWNLOAD_CSV: "/contacts/csv",

  // products
  CREATE_PRODUCTS: "/products",
  SEARCH_PRODUCTS: "/products/search",
  PRODUCT_WITH_ID: (id) => `/products/${id}`,

  // events
  CREATE_EVENTS: "/events",
  SEARCH_EVENTS: "/events/search",
  EVENT_WITH_ID: (id) => `/events/${id}`,

  // automations
  CREATE_AUTOMATION: "/automations",
  SEARCH_AUTOMATIONS: "/automations/search",
  AUTOMATION_WITH_ID: (id) => `/automations/${id}`,

  // contracts
  CREATE_CONTRACTS: "/contracts",
  SEARCH_CONTRACTS: "/contracts/search",
  UPDATE_PAYMENT: (contractId) => `/contracts/${contractId}`,
  SEND_CONTRACT_VIA_EMAIL: "/contracts/send-via-email",

  //App Choices
  APP_CHOICES_BASE: "/app-choices",
  APP_CHOICES_LIST: "/app-choices/list",
  APP_CHOICES_WITH_ID: (id) => `/app-choices/${id}`,

  //misc
  GET_FB_CAMPAIGNS: "/misc/facebook-campaigns",
  GET_ACTIVE_TRAIL_LISTS: "/misc/active-trail-email-lists",

  //Appointment
  CREATE_AVAILABILITY: "/appointments",
  SEARCH_AVAILABILITY: "/appointments/search",
  AVAILABILITY_WITH_ID: (id) => `/appointments/${id}`,
  BOOK_AVAILABILITY: "/appointments",

  //Tags
  CREATE_TAG: "/tags",
  SEARCH_TAGS: "/tags/list",
  RENAME_TAG: "/tags/rename",
  DELETE_TAG: "/tags/delete",

  //filters
  CREATE_FILTER: "/filters",
  UPDATE_MANY: "/filters",
  SEARCH_FILTER: "/filters/search",
  UPDATE_FILTER: (id) => `/filters/${id}`,
  DELETE_FILTER: (id) => `/filters/${id}`,

  //app-configuration
  SEARCH_APPOINTMENT_DEFAULT: "/appointment-defaults/search",
  UPDATE_APPOINTMENT_DEFAULT: (id) => `/appointment-defaults/${id}`,

  // inbound source default status
  GET_INBOUND_SOURCE_DEFAULT_STATUS: "/inbound-source-defaults/search",
  UPDATE_INBOUND_SOURCE_DEFAULT_STATUS: (id) =>
    `/inbound-source-defaults/${id}`,
};

export const USER_STATUS = ["Enable", "Disable"];

export const PAGE_SIZE = 50;

export const STATUS = [
  {
    label: "Webinar",
    key: "webinar",
    color: "primary",
    options: ["New", "Phone call unanswered"],
  },
  {
    label: "Sales",
    key: "sales",
    color: "info",
    options: [
      "Expressed interest",
      "Finished first phone call",
      "Meeting Scheduled",
      "Was in meeting",
      "Contract sent",
      "Contract signed",
    ],
  },
  {
    label: "Irrelevant",
    key: "irrelevant",
    color: "danger",
    options: [
      "Doesn’t meet our requirements",
      "Didn’t answer 5 times",
      "Asked to not be contacted",
      "Not interested now",
    ],
  },
  {
    label: "Clients",
    key: "clients",
    color: "success",
    options: [
      "Client paid",
      "Client in process",
      "Client finished",
      "Awaiting upsale",
      "On hold",
    ],
  },
];

export const ALL_STATUSES = STATUS.flatMap((s) => s.options);
export const INBOUND_SOURCE = [
  "Facebook Leadform",
  "Website",
  "Manually Added",
];

export const ADMIN_ROLE = "Admin";
export const SALES_ROLE = "Salesperson";
export const FINANCIAL_STRATEGIST_ROLE = "Financial Strategist";
export const REAL_ESTATE_ANALYST_ROLE = "Real Estate Analyst";
export const ALL_ROLES = [
  ADMIN_ROLE,
  SALES_ROLE,
  FINANCIAL_STRATEGIST_ROLE,
  REAL_ESTATE_ANALYST_ROLE,
];

export const LOGIN_MODE = "login";
export const REGISTER_MODE = "register";

export const DEFAULT_DATE_FORMAT = "MMMM Do YYYY";
export const DEFAULT_DATE_TIME_FORMAT = "MMMM Do YYYY HH:mm";

export const APP_OPTION = ["crm", "app"];
export const ACTION_OPTION = ["view", "edit"];
export const RULE_OPTION = ["restrict", "permit"];


export const SEARCH_BOX_VISIBLE_PATH = ["/contacts"];

export const EVENT_STATUS = {
  Available: "primary",
  Booked: "success",
};

export const APPOINTMENT_TYPES = [
  "Office Meeting",
  "Zoom Meeting",
  "Phone Call",
];
export const breadcrumbLabel = {
  goBack: "Go Back",
  home: "Home",
  'study-abroad': "Study Abroad",
  news: "News",
};
