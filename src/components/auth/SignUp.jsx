import React, { useState, useRef } from "react";
import useAuth from "../../hooks/useAuth";
import useLocalization from "../../hooks/useLocalization";
import UnderlineButton from "../common/UnderlineButton";
import SignUpForm from "../forms/SignupForm";
import { useNavigate } from "react-router-dom";
import ClubListItems from "./ClubListItems";

const SignUp = () => {
  const { translate } = useLocalization();
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { login, isLoggingIn, loginError } = useAuth();

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedClub, setSelectedClub] = useState(null);

  const onSubmit = async ({ email, password }) => {
    login(email, password);
  };

  const handleSubmit = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      if (formRef.current) {
        formRef.current.submitForm();
      }
    }
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
          />
        ) : (
          <>
            <SignUpForm
              isRegistering={isLoggingIn}
              signUpError={loginError}
              onSubmit={onSubmit}
              submitFormRef={formRef}
            />
          </>
        )}
        <div className="flex gap-3 mt-auto flex-col pt-2">
          <button
            className={`mt-auto w-full bg-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isLoggingIn ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="button"
            onClick={handleSubmit}
            disabled={isLoggingIn || !selectedClub}
          >
            {translate(currentStep === 1 ? "next" : "sign_up")}
          </button>
          <div className="flex flex-col gap-2">
            <UnderlineButton
              text={translate("already_have_an_account")}
              className="text-sm hover:text-blue-600 cursor-pointer"
              onClick={() => navigate("/auth/login")}
            />
            <UnderlineButton
              text={translate("want_to_create_your_own_club_click_here")}
              className="text-sm hover:text-blue-600 cursor-pointer"
              onClick={() => navigate("/auth/register")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
