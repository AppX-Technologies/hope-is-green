import React, { useState } from "react";
import useLocalization from "../../hooks/useLocalization";
import { useNavigate } from "react-router-dom";
import CreateClubForm from "../forms/CreateClubForm";
import SignUpForm from "../forms/SignupForm";
import useAuth from "../../hooks/useAuth";
import Button from "../common/Button";
import OrDivider from "../common/OrDivider";
import { Stepper } from "../common/Stepper";

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
        <Stepper steps={[1, 2]} currentStep={currentStep} />
        <h6 className="text-gray-500 mb-2 text-base">
          <b className="">
            {translate(
              currentStep === 1
                ? "provide_your_club_details"
                : "provide_your_personal_details"
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
              submitButtonLabel="create_club"
            />
          </>
        )}

        <OrDivider />
        <div className="flex mt-auto">
          <Button
            variant="outline"
            text="Login"
            className="border-purple-400 !text-black"
            onClick={() => navigate("/auth/login")}
          />

          <Button
            variant="outline"
            text={translate("join_as_club_member")}
            className="border-purple-400 !text-black ms-auto"
            onClick={() => navigate("/auth/register")}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateClub;
