import React, { useState } from "react";
import UnderlineButton from "../common/UnderlineButton";
import useLocalization from "../../hooks/useLocalization";
import { useNavigate } from "react-router-dom";
import CreateClubForm from "../forms/CreateClubForm";
import SignUpForm from "../forms/SignupForm";
import useAuth from "../../hooks/useAuth";

function CreateClub() {
  const { translate } = useLocalization();
  const { loginError } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  const isLoading = false;

  const onSubmit = async (value) => {
    console.log(value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded flex flex-col w-[300px] sm:w-[350px] md:w-[400px] xl:w-[450px] p-6 h-fit">
        <h6 className="text-dark text-xl mb-2">
          Welcome to <b>{process.env.REACT_APP_NAME}</b>
        </h6>
        <h6 className="text-gray-500 mb-2 text-base">
          <b className="">
            {translate(
              currentStep === 1
                ? "fill_the_details_to_continue"
                : "register_to_continue"
            )}
          </b>
        </h6>
        <hr className="my-4" />
        {currentStep === 1 ? (
          <CreateClubForm
            isCreatingClub={isLoading}
            creatingClubError={loginError}
            onSubmit={onSubmit}
            setCurrentStep={setCurrentStep}
          />
        ) : (
          <>
            <SignUpForm
              isRegistering={isLoading}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateClub;
