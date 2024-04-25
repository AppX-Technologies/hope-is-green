import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useLocalization from "../../hooks/useLocalization";
import UnderlineButton from "../common/UnderlineButton";
import LoginForm from "../forms/LoginForm";
import CustomDialog from "../CustomDialog";
import { useNavigate } from "react-router-dom";
import OrDivider from "../OrDivider";

const Login = () => {
  const { translate } = useLocalization();
  const { login, isLoggingIn, loginError } = useAuth();
  let [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }) => {
    login(email, password);
    setIsOpen(false);
  };

  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="bg-white shadow-md rounded w-[300px] sm:w-[350px] md:w-[400px] xl:w-[450px] p-6">
        <h6 className="text-dark text-xl mb-2">
          Welcome to <b>{process.env.REACT_APP_NAME}</b>
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
        <OrDivider />

        <div className="flex mt-auto">
          <UnderlineButton
            text={translate("join_as_club_member")}
            className="text-sm hover:text-blue-600 cursor-pointer"
            onClick={() => navigate("/auth/register")}
          />
          <UnderlineButton
            text={translate("create_your_own_club")}
            className="text-sm hover:text-blue-600 cursor-pointer ms-auto"
            onClick={() => navigate("/create-club")}
          />
        </div>

        <CustomDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={translate("user_email_address")}
          onSubmit={onSubmit}
        >
          <input
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2"
            placeholder="user@gmail.com"
            required
          />
        </CustomDialog>
      </div>
    </div>
  );
};

export default Login;
