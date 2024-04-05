import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useLocalization from "../../hooks/useLocalization";
import UnderlineButton from "../common/UnderlineButton";
import LoginForm from "../forms/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  const { translate } = useLocalization();
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
          <b className="">{translate("sign_in_to_continue")}</b>
        </h6>
        <hr className="my-4" />
        <LoginForm
          isLoggingIn={isLoggingIn}
          loginError={loginError}
          onSubmit={onSubmit}
        />
        <div className="flex items-center">
          <UnderlineButton
            text={translate("forgot_password")}
            className="text-sm"
          />
          <Link to="/" className="hover:text-blue-600 text-sm mt-[2px]">
            Click here
          </Link>
        </div>

        {isOpenModal && (
          <div
            className="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                          className="h-6 w-6 text-red-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                        <h3
                          className="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          Enter your email
                        </h3>
                        <div className="mt-2">
                          <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
                            id="inline-full-name"
                            type="text"
                            value="Jane Doe"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => setIsOpenModal(false)}
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Deactivate
                    </button>
                    <button
                      onClick={() => setIsOpenModal(false)}
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
