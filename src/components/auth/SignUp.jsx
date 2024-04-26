import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useLocalization from "../../hooks/useLocalization";
import UnderlineButton from "../common/UnderlineButton";
import SignUpForm from "../forms/SignupForm";
import { useNavigate } from "react-router-dom";
import ClubListItems from "./ClubListItems";
import OrDivider from "../OrDivider";
import { Stepper } from "../Stepper";

const clubs = [
  {
    id: 1,
    name: "Golden Lions United",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    name: "Royal Falcons SC",
    description: "Consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Dynamic Dragons FC",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    name: "Eagle Talons FC",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    name: "Phoenix Rising SC",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 6,
    name: "Titan Titans FC",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 7,
    name: "Mystic Mavericks SC",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 8,
    name: "Galactic Guardians FC",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    id: 9,
    name: "Diamond Dolphins SC",
    description:
      "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 10,
    name: "Supernova Spartans FC",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
];

const SignUp = () => {
  const { translate } = useLocalization();
  const navigate = useNavigate();

  //Update for register
  const { isLoggingIn, loginError } = useAuth();

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedClub, setSelectedClub] = useState(null);

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded flex flex-col w-[300px] sm:w-[350px] md:w-[400px] xl:w-[450px] p-6">
        <h6 className="text-dark text-xl mb-2">
          {/* LOGO */}
          Welcome to <b>{process.env.REACT_APP_NAME}</b>
        </h6>
        <Stepper
          steps={[1, 2]}
          currentStep={currentStep}
        />
        <h6 className="text-gray-500 mb-2 text-base">
          <b className="">
            {translate(
              currentStep === 1 ? "select_a_club" : "provide_your_personal_details"
            )}
          </b>
        </h6>
        <hr className="my-4" />
        {currentStep === 1 ? (
          <ClubListItems
            setSelectedClub={setSelectedClub}
            selectedClub={selectedClub}
            setCurrentStep={setCurrentStep}
            clubs={clubs}
          />
        ) : (
          <>
            {/* Update for register */}
            <SignUpForm
              isRegistering={isLoggingIn}
              signUpError={loginError}
              onSubmit={onSubmit}
            />
          </>
        )}

        <OrDivider />
        <div className="flex mt-auto pt-2">
          <UnderlineButton
            text="Login"
            className="text-sm hover:text-blue-600 cursor-pointer"
            onClick={() => navigate("/auth/login")}
          />
          <UnderlineButton
            text={translate("create_your_own_club")}
            className="text-sm hover:text-blue-600 cursor-pointer ms-auto"
            onClick={() => navigate("/create-club")}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
