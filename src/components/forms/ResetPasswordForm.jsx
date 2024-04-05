import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import useLocalization from "../../hooks/useLocalization";
import HorizontalProgress from "../common/HorizontalProgress";

// Yup validation schema
const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required("Please provide new password"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

const ResetPasswordForm = ({
  isResettingPassword,
  resetPasswordError,
  onSubmit,
}) => {
  const { translate } = useLocalization();

  return (
    <Formik
      initialValues={{ confirmPassword: "", newPassword: "" }}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={onSubmit}
    >
      {({ submitForm }) => (
        <Form noValidate className="p-2">
          {[
            {
              name: "newPassword",
              type: "password",
              label: "new_password",
            },
            {
              name: "confirmPassword",
              type: "password",
              label: "confirm_password",
            },
          ].map((field) => (
            <div key={field.name} className="mb-2">
              <label className="mid mb-1 required">{translate(field.label)}</label>
              <Field
                name={field.name}
                type={field.type}
                className="w-full px-2 py-1 border rounded shadow-sm text-sm focus:outline-none focus:border-primary"
                placeholder={translate(field.label)}
              />
              <ErrorMessage
                name={field.name}
                component="div"
                className="text-danger text-xs"
              />
            </div>
          ))}

          {isResettingPassword && (
            <HorizontalProgress text={`${translate("please_wait")}...`} />
          )}
          {resetPasswordError && (
            <div className="mt-3">
              <div
                className="bg-red-100 border border-red-400 text-red-700 p-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline text-base">
                  {resetPasswordError}
                </span>
              </div>
            </div>
          )}

          <button
            className={`mt-2  w-full bg-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isResettingPassword ? "opacity-50 cursor-not-allowed" : ""
            }`}
            type="button"
            onClick={submitForm}
          >
            {translate("submit")}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
