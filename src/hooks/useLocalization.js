import { useContext, useMemo } from "react";
import { LocalizeContext } from "react-locale-language";
import { isRtl } from "../helpers/localization";

const useLocalization = () => {
  const { translate, langCode, changeLanguage } = useContext(LocalizeContext);

  const isRTL = useMemo(() => isRtl(langCode), [langCode]);

  return {
    translate,
    changeLanguage,
    langCode,
    isRTL,
  };
};

export default useLocalization;
