import React from "react";
import useAuth from "../../hooks/useAuth";
import useLocalization from "../../hooks/useLocalization";
import UnderlineButton from "../common/UnderlineButton";
import LoginForm from "../forms/LoginForm";

const Login = () => {
  const { translate } = useLocalization();
  const { login, isLoggingIn, loginError } = useAuth();

  const onSubmit = async ({ email, password }) => {
    login(email, password);
  };

  return (
    <div className="h-[600px] flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded  w-[300px] sm:w-[350px] md:w-[400px] xl:w-[450px] p-6">
        <h6 className="text-dark text-xl mb-2">
          Welcome to Hope is{" "}
          <span className="text-primary font-bold">Green</span>{" "}
        </h6>
        <h6 className="text-gray-500 mb-2 text-base">
          <b className="">{translate("sign_in_to_continue")}</b>
        </h6>
        <hr className="my-4" />
        <LoginForm
          isLoggingIn={isLoggingIn}
          loginError={loginError}
          onSubmit={onSubmit}
        />
        <UnderlineButton text={translate("forgot_password")} fontSize="" />
      </div>
    </div>
  );
};

export default Login;
