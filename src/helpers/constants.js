export const APP_URL = process.env.PUBLIC_URL;
export const SCRIPT_PROD_URL = "";

export const BRAND_NAME = "Ethica CRM";
export const RUJUM_APP_URL = process.env.REACT_APP_MAIN_APP_URL;
export const CRM_APP_URL = process.env.PUBLIC_URL;

export const BOARD_MEMBER_ROLES = ["Moderator", "Treasurer", "Administrator"];

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
export const CLUB_OWNER = "Club Owner";
export const CLUB_MODERATOR = "Club Moderator";
export const CLUB_MEMBER = "Club Member";
export const ALL_ROLES = [
  ADMIN_ROLE,
  SITE_MODERATOR,
  CLUB_OWNER,
  CLUB_MODERATOR,
  CLUB_MEMBER,
];

export const STATUS_MEMBER_ACTIVE = "Active";
export const STATUS_MEMBER_SUSPENDED = "Suspended";
export const STATUS_MEMBER_TERMINATED = "Terminated";

export const ALL_MEMBER_STATUS = [
  STATUS_MEMBER_ACTIVE,
  STATUS_MEMBER_SUSPENDED,
  STATUS_MEMBER_TERMINATED,
];

export const STATUS_ORDER_NEW = "New";
export const STATUS_ORDER_PENDING = "Pending";
export const STATUS_ORDER_FINISHED = "Finished";

export const ALL_ORDER_STATUS = [
  STATUS_ORDER_NEW,
  STATUS_ORDER_PENDING,
  STATUS_ORDER_FINISHED,
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

export const ClubLeagalFormFields = [
  {
    groupName: "PurposeAssociation",
    groupLabel: "Purpose of Club",
    question: [
      {
        name: "mainObjective",
        type: "text",
        label: "What is the main objective of your club?",
      },
      {
        name: "objectiveDescription",
        type: "textarea",
        label:
          "Describe in detail how your club intends to achieve this objective: ",
      },
    ],
  },
  {
    groupName: "nonProfitActivity",
    groupLabel: "Non Profit Activity",
    question: [
      {
        name: "hasProfit",
        type: "yesNo",
        label: "Does your club operate selflessly and not for profit?",
      },
      {
        name: "thirdPartyBenifit",
        type: "yesNo",
        label: "Is it prohibited to financially benefit third parties? ",
      },
      {
        name: "question2",
        type: "yesNo",
        label: "Can the funds of the club be used only for statutory purposes?",
      },
    ],
  },
  {
    groupName: "Prohibition",
    groupLabel: "Prohibition and Benefits",
    question: [
      {
        name: "question3",
        type: "yesNo",
        label: "Are high remunerations to members prohibited? ",
      },
    ],
  },
  {
    groupName: "Acquisition",
    groupLabel: "Acquisition and Termination of Membership",
    question: [
      {
        name: "question4",
        type: "text",
        label: "Who can become a member and what conditions must be met? ",
      },
      {
        name: "question5",
        type: "Written/Electronic",
        label: "How can interested parties apply for membership? ",
      },
    ],
  },

  {
    groupName: "RightsAndObligations",
    groupLabel: "Rights and Obligations of Members",
    question: [
      {
        name: "duties",
        type: "text",
        label: "What are the main duties of the members?",
      },
      {
        name: "votings",
        type: "yesNo",
        label: "Do members have voting rights at meetings?",
      },
    ],
  },

  {
    groupName: "Contributions",
    groupLabel: "Contributions",
    question: [
      {
        name: "membershipFee",
        type: "text",
        label: "How much are the membership fees?",
      },
      {
        name: "paid",
        type: "text",
        label: "When must fees be paid?",
      },
    ],
  },

  {
    groupName: "Organs",
    groupLabel: "Organs of the Club",
    question: [
      {
        name: "question6",
        type: "text",
        label: "What are the organs of your club?",
      },
    ],
  },

  {
    groupName: "GeneralMeeting",
    groupLabel: "General Meeting",
    question: [
      {
        name: "generalMeetings",
        type: "text",
        label: "How often does the general meeting take place?",
      },
      {
        name: "convening",
        type: "text",
        label: "What rules apply for convening the meeting?",
      },
    ],
  },

  {
    groupName: "VotingRights",
    groupLabel: "Voting Rights and Eligibility",
    question: [
      {
        name: "eligible",
        type: "text",
        label: "From what age are members eligible to vote and be elected?",
      },
      {
        name: "conducted",
        type: "election/voting",
        label: "How are elections conducted?",
      },
    ],
  },

  {
    groupName: "Board",
    groupLabel: "Board",
    question: [
      {
        name: "office",
        type: "text",
        label: "How is the board composed and what are the terms of office? ",
      },
    ],
  },

  {
    groupName: "Dissolution",
    groupLabel: "Dissolution",
    question: [
      {
        name: "dissolved",
        type: "textarea",
        label:
          "How can the club be dissolved and what happens to the club's assets?",
      },
    ],
  },
];

export const BoardMemberFormField = [
  {
    groupName: "Chairperson",
    groupLabel: "Chairperson",
    details: [
      {
        name: "charimanName",
        placeholder: "Enter chairperson name",
        type: "text",
        label: "Name",
      },
      {
        name: "chairmanDateOfBirth",
        type: "date",
        label: "Date of Birth",
      },
      {
        name: "chairmanAddress",
        type: "text",
        placeholder: "Enter chairperson address",
        label: "Address",
      },
    ],
  },
  {
    groupName: "ViceChairperson",
    groupLabel: "Vice Chairperson",
    details: [
      {
        name: "viceChairpersonName",
        type: "text",
        placeholder: "Enter vice chairperson name",
        label: "Name",
      },
      {
        name: "viceChairpersonDateOfBirth",
        type: "date",
        label: "Date of Birth ",
      },
      {
        name: "viceChairpersonAddress",
        placeholder: "Enter vice chairperson address",
        type: "text",
        label: "Address",
      },
    ],
  },
];

export const courtRegisteryFields = [
  {
    groupName: "AdditionalInformation",
    groupLabel: "Additional Information",
    details: [
      {
        name: "Name",
        type: "text",
        label: "Name of the Court of Registry",
      },
      {
        name: "dateOfBirth",
        type: "text",
        label: "Address of the Court of Registry",
      },
    ],
  },
];
