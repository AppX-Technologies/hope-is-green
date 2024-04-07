import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useLocalization from "../../hooks/useLocalization";
import UnderlineButton from "../common/UnderlineButton";
import SignUpForm from "../forms/SignupForm";
import { useNavigate } from "react-router-dom";
import ClubListItems from "./ClubListItems";
import { useLocation } from "react-router";

const SignUp = () => {
  const { translate } = useLocalization();
  const navigate = useNavigate();
  const location = useLocation();

  //Update for register
  const { isLoggingIn, loginError } = useAuth();

  const [currentStep, setCurrentStep] = useState(
    location?.state?.currentStep || 1
  );
  const [selectedClub, setSelectedClub] = useState(null);

  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded flex flex-col w-[300px] sm:w-[350px] md:w-[400px] xl:w-[450px] p-6 h-[calc(100vh-200px)]">
        <h6 className="text-dark text-xl mb-2">
          Welcome to Hope is{" "}
          <span className="text-primary font-bold">Green</span>{" "}
        </h6>
        <h6 className="text-gray-500 mb-2 text-base">
          <b className="">
            {translate(
              currentStep === 1 ? "select_a_club" : "register_to_continue"
            )}
          </b>
        </h6>
        <hr className="my-4" />
        {currentStep === 1 ? (
          <ClubListItems
            setSelectedClub={setSelectedClub}
            selectedClub={selectedClub}
            setCurrentStep={setCurrentStep}
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
        <div className="flex gap-3 mt-auto flex-col pt-2">
          <div className="flex flex-col gap-2">
            <UnderlineButton
              text={translate("already_have_an_account")}
              className="text-sm hover:text-blue-600 cursor-pointer"
              onClick={() => navigate("/auth/login")}
            />
            <UnderlineButton
              text={translate("want_to_create_your_own_club_click_here")}
              className="text-sm hover:text-blue-600 cursor-pointer"
              onClick={() => navigate("/create-club")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
