import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import useLocalization from "./hooks/useLocalization";
import AppRoutes from "./routes";
import "react-big-calendar/lib/css/react-big-calendar.css";

const App = () => {
  const { langCode } = useLocalization();

  useEffect(() => {
    document.dir = langCode === "Hebrew" ? "rtl" : "ltr";
  }, [langCode]);

  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;
