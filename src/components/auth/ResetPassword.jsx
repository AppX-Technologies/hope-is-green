import useAuth from "../../hooks/useAuth";
import useLocalization from "../../hooks/useLocalization";
import ResetPasswordForm from "../forms/ResetPasswordForm";

const ResetPassword = () => {
  const { translate } = useLocalization();
  const { login, isLoggingIn, loginError } = useAuth();

  const onSubmit = async ({ email, password }) => {
    login(email, password);
  };

  return (
    <div className="h-[calc(100vh-200px)] flex flex-col justify-center items-center">
      <div className="bg-white shadow-md rounded  w-[300px] sm:w-[350px] md:w-[400px] xl:w-[450px] p-6">
        <h6 className="text-dark text-xl mb-2">
          Welcome to <b>{process.env.REACT_APP_NAME}</b>
        </h6>
        <h6 className="text-gray-500 mb-2 text-base">
          <b className="">{translate("enter_your_new_password")}</b>
        </h6>
        <hr className="my-4" />
        <ResetPasswordForm
          isLoggingIn={isLoggingIn}
          loginError={loginError}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default ResetPassword;
