export const PHONE_NUMBER = /^\d{10}$/;
export const WEBSITE = new RegExp(
  "^(https?:\\/\\/)?" + // protocol
    "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name and extension
    "((\\d{1,3}\\.){3}\\d{1,3}))"
);
export const  HH_TIME_FORMAT = /^([01]?[0-9]|2[0-3]):[0-5]?[0-9]$/