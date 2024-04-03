import React from "react";
import { createRoot } from "react-dom/client";
import { LocalizeContextProvider } from "react-locale-language";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { getActiveLanguage, languageContent } from "./helpers/localization";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <LocalizeContextProvider
    value={languageContent}
    languageCode={getActiveLanguage()}
  >
    <ToastContainer autoClose={1500} />
    <BrowserRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </BrowserRouter>
  </LocalizeContextProvider>
);
