import React from "react";
import { languageOptions, setActiveLanguage } from "../../helpers/localization";
import useLocalization from "../../hooks/useLocalization";
import TextDropdownToggle from "./TextDropdownToggle";

const LanguagePicker = () => {
  const { changeLanguage, langCode } = useLocalization();

  const onLanguageChange = (lang) => {
    changeLanguage(lang);
    setActiveLanguage(lang);
  };
  return (
    <>
      <TextDropdownToggle
        options={languageOptions}
        onOptionClick={onLanguageChange}
        value={langCode}
      />
    </>
  );
};

export default LanguagePicker;
