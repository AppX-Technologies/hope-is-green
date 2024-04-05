import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useLocalization from "../../hooks/useLocalization";
import UnderlineButton from "../common/UnderlineButton";
import SignUpForm from "../forms/SignupForm";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { translate } = useLocalization();
  const navigate = useNavigate();
  const { login, isLoggingIn, loginError } = useAuth();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onSubmit = async ({ email, password }) => {
    login(email, password);
  };

  return (
    <div className="h-[calc(100vh-200px)] flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded  w-[300px] sm:w-[350px] md:w-[400px] xl:w-[450px] p-6">
        <h6 className="text-dark text-xl mb-2">
          Welcome to Hope is{" "}
          <span className="text-primary font-bold">Green</span>{" "}
        </h6>
        <h6 className="text-gray-500 mb-2 text-base">
          <b className="">{translate("register_to_continue")}</b>
        </h6>
        <hr className="my-4" />
        <SignUpForm
          isLoggingIn={isLoggingIn}
          loginError={loginError}
          onSubmit={onSubmit}
        />
        <div className="flex items-center">
          <UnderlineButton
            text={translate("already_have_an_account")}
            className="text-sm"
          />
          <Link
            to="/auth/login"
            className="hover:text-blue-600 text-sm mt-[2px]"
          >
            Click here to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
