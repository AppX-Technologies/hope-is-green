import { useContext } from "react";
import AppChoicesContext from "../context/AppChoicesContext";

const useAppChoices = (key, returnDisabledValuesAlso = true) => {
  const appChoices = useContext(AppChoicesContext);

  const choicesToReturn = key
    ? appChoices
        ?.find((choice) => choice.key === key)
        ?.values.map((value) => value)
    : appChoices?.map((appChoice) => ({
        ...appChoice,
        values: appChoice?.values.map((value) => value),
      }));

  //return only enabled values, if the choices have isEnabled flag

  if (
    key &&
    !returnDisabledValuesAlso &&
    choicesToReturn[0] &&
    typeof choicesToReturn[0] === "object" &&
    choicesToReturn[0].hasOwnProperty("isEnabled")
  ) {
    return choicesToReturn?.filter((c) => c.isEnabled) || [];
  }

  return choicesToReturn || [];
};

export default useAppChoices;
